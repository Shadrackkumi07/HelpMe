"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import type { MotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * "Your block", in flat shapes. An isometric grid of Paper buildings with Ink
 * edges, drawn with unlit materials so it reads as solid fills (the brand rules
 * out gradients, glows, and blur). Scroll drives one beat:
 *
 *   1. the camera leans in,
 *   2. one building goes Ink: someone asks,
 *   3. a coarse ring spreads over the area (the ~500 m area, never a pin),
 *   4. one neighbor's building turns Sunbeam: someone could say yes.
 *
 * No people, no pins, no real map. The "me" mark is never drawn in 3D.
 */

/*
 * react-three-fiber (9.8, latest) still creates a THREE.Clock internally, and
 * three r183+ warns that Clock is deprecated on every canvas mount. Drop only
 * that message; every other three.js log, warning, and error passes through.
 */
THREE.setConsoleFunction((type, message, ...params) => {
  if (type === "warn" && typeof message === "string" && message.startsWith("THREE.Clock:")) return;
  const out = type === "error" ? console.error : type === "warn" ? console.warn : console.log;
  out(message, ...params);
});

const PAPER = new THREE.Color("#F8F6F0");
const INK = new THREE.Color("#000000");
const SUNBEAM = new THREE.Color("#FFC53D");

type Building = { x: number; z: number; h: number; phase: number; role: "plain" | "ask" | "helper" };

function rand(seed: number) {
  const s = Math.sin(seed * 127.1) * 43758.5453;
  return s - Math.floor(s);
}

function makeCity(clusters: number): Building[] {
  const out: Building[] = [];
  const lot = 1;
  const street = 0.9;
  const span = clusters * (2 * lot + street);
  const offset = span / 2 - lot;
  const mid = Math.floor(clusters / 2);
  for (let cx = 0; cx < clusters; cx++) {
    for (let cz = 0; cz < clusters; cz++) {
      for (let lx = 0; lx < 2; lx++) {
        for (let lz = 0; lz < 2; lz++) {
          const x = cx * (2 * lot + street) + lx * lot * 1.08 - offset;
          const z = cz * (2 * lot + street) + lz * lot * 1.08 - offset;
          const seed = cx * 31 + cz * 17 + lx * 7 + lz * 3;
          const h = 0.35 + Math.pow(rand(seed), 1.6) * 2.1;
          let role: Building["role"] = "plain";
          if (cx === mid && cz === mid && lx === 0 && lz === 1) role = "ask";
          if (cx === mid + 1 && cz === mid && lx === 0 && lz === 0) role = "helper";
          out.push({ x, z, h, phase: rand(seed + 9) * Math.PI * 2, role });
        }
      }
    }
  }
  return out;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const seg = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));
const smooth = (t: number) => t * t * (3 - 2 * t);

function BuildingMesh({
  b,
  progress,
  animate,
}: {
  b: Building;
  progress: MotionValue<number> | null;
  animate: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const mat = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(({ clock }) => {
    const mesh = ref.current;
    const m = mat.current;
    if (!mesh || !m) return;
    const p = progress?.get() ?? 0;
    const breathe = animate ? Math.sin(clock.elapsedTime * 0.7 + b.phase) * 0.05 : 0;
    let h = b.h * (1 + breathe);

    if (b.role === "ask") {
      const t = smooth(seg(p, 0.12, 0.36));
      h = b.h + t * 1.2;
      m.color.copy(PAPER).lerp(INK, t);
    } else if (b.role === "helper") {
      const t = smooth(seg(p, 0.5, 0.7));
      m.color.copy(PAPER).lerp(SUNBEAM, t);
    }
    mesh.scale.y = h;
    mesh.position.y = h / 2;
  });

  return (
    <mesh ref={ref} position={[b.x, b.h / 2, b.z]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial ref={mat} color={PAPER} />
      <Edges color="#000000" threshold={15} />
    </mesh>
  );
}

function AreaRing({ progress, center }: { progress: MotionValue<number> | null; center: [number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    const ring = ref.current;
    if (!ring) return;
    const t = smooth(seg(progress?.get() ?? 0, 0.3, 0.55));
    ring.visible = t > 0.001;
    const s = 0.01 + t * 3.4;
    ring.scale.set(s, s, s);
  });
  return (
    <mesh ref={ref} position={[center[0], 0.01, center[1]]} rotation={[-Math.PI / 2, 0, 0]} visible={false}>
      <ringGeometry args={[0.94, 1, 96]} />
      <meshBasicMaterial color={INK} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Rig({ progress, compact }: { progress: MotionValue<number> | null; compact: boolean }) {
  useFrame(({ camera, size }) => {
    const p = progress?.get() ?? 0;
    const cam = camera as THREE.OrthographicCamera;
    const base = Math.min(size.width, size.height) / (compact ? 9.5 : 17);
    cam.zoom = base * (1 + smooth(seg(p, 0, 0.6)) * 0.9);
    cam.updateProjectionMatrix();
  });
  return null;
}

function City({
  progress,
  animate,
  compact,
  pointer,
}: {
  progress: MotionValue<number> | null;
  animate: boolean;
  compact: boolean;
  pointer: { current: number };
}) {
  const city = useMemo(() => makeCity(compact ? 3 : 5), [compact]);
  const ask = city.find((b) => b.role === "ask")!;
  const group = useRef<THREE.Group>(null);
  const tilt = useRef(0);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const p = progress?.get() ?? 0;
    const drift = animate ? Math.sin(clock.elapsedTime * 0.12) * 0.08 : 0;
    const target = animate ? pointer.current * 0.15 : 0;
    tilt.current += (target - tilt.current) * 0.04;
    group.current.rotation.y = drift + tilt.current - smooth(seg(p, 0, 0.7)) * 0.35;
    // Lean toward the asking building as the beat plays.
    const t = smooth(seg(p, 0.05, 0.6));
    group.current.position.x = -ask.x * t;
    group.current.position.z = -ask.z * t;
  });

  return (
    <group ref={group}>
      {city.map((b, i) => (
        <BuildingMesh key={i} b={b} progress={progress} animate={animate} />
      ))}
      <AreaRing progress={progress} center={[ask.x, ask.z]} />
    </group>
  );
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function BlockScene({
  progress = null,
  className = "",
}: {
  progress?: MotionValue<number> | null;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const [ok, setOk] = useState(false);
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(true);
  const [compact, setCompact] = useState(false);
  const pointer = useRef(0);

  useEffect(() => {
    // Browser capability checks can only run after mount.
    /* eslint-disable react-hooks/set-state-in-effect */
    setOk(hasWebGL());
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setCompact(window.innerWidth < 768);
    /* eslint-enable react-hooks/set-state-in-effect */
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    const onMove = (e: PointerEvent) => {
      pointer.current = (e.clientX / window.innerWidth) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={wrap} aria-hidden className={className}>
      {ok && (
        <Canvas
          orthographic
          flat
          dpr={[1, 1.75]}
          frameloop={visible ? (animate ? "always" : "demand") : "never"}
          camera={{ position: [18, 16, 18], near: 0.1, far: 200, zoom: 60 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          onCreated={({ camera }) => camera.lookAt(0, 0.6, 0)}
          style={{ pointerEvents: "none" }}
        >
          <Rig progress={progress} compact={compact} />
          <City progress={progress} animate={animate} compact={compact} pointer={pointer} />
        </Canvas>
      )}
    </div>
  );
}
