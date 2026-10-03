"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import {motion, useScroll, useTransform, type MotionValue} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "@/components/motion/Reveal";
import { MOMENTS, type Moment } from "@/lib/constants";

const TONES = ["bg-paper", "bg-paper", "bg-sunbeam", "bg-paper", "bg-paper", "bg-ember"];

function Card({ m, i, n, progress, vh }: { m: Moment; i: number; n: number; progress: MotionValue<number>; vh: number }) {
  // Each card owns a slice of the scroll. It rises in, lands, then gets pushed
  // back into the stack as the next cards land on top of it. Card 0 starts landed.
  const start = (i - 0.75) / n;
  const land = i / n;
  const enter = (p: number) => {
    if (i === 0) return 1;
    const t = Math.min(1, Math.max(0, (p - start) / (land - start)));
    return 1 - Math.pow(1 - t, 3);
  };
  const depth = (p: number) => Math.min(4, Math.max(0, p * n - i));

  const y = useTransform(progress, (p) => (1 - enter(p)) * vh * 1.1 - depth(p) * 28);
  const rotateX = useTransform(progress, (p) => (1 - enter(p)) * -24);
  const scale = useTransform(progress, (p) => 1 - depth(p) * 0.06);

  return (
    <motion.article
      style={{ y, scale, rotateX, zIndex: i, transformOrigin: "50% 0%", transformPerspective: 1400 }}
      className={`absolute inset-x-0 mx-auto flex h-[min(56vh,460px)] w-[min(92vw,820px)] flex-col justify-between rounded-[2rem] p-7 sm:p-12 ${TONES[i % TONES.length]} text-ink`}
    >
      <div className="flex items-center justify-between">
        <p className="dash-label">{m.where}</p>
        <p className="subhead text-lg">
          {String(i + 1).padStart(2, "0")}/{String(n).padStart(2, "0")}
        </p>
      </div>
      <p className="display-md max-w-2xl sm:text-[3.25rem]">{m.line}</p>
    </motion.article>
  );
}

export default function Moments() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = MOMENTS.length;
  const [vh, setVh] = useState(900);

  useEffect(() => {
    const set = () => setVh(window.innerHeight);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  return (
    <section className="on-ink bg-ink text-paper" aria-label="The small moments">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-8 sm:pt-40">
        <p className="dash-label text-paper">The small moments</p>
        <SplitText
          as="h2"
          text="There's a version of you that doesn't ask."
          highlight={["doesn't", "ask."]}
          className="display-xl mt-6 max-w-5xl text-paper"
        />
      </div>

      {reduce ? (
        <div ref={ref}>
        <ul className="mx-auto grid max-w-7xl gap-4 px-5 pb-24 sm:grid-cols-2 sm:px-8">
          {MOMENTS.map((m, i) => (
            <li key={m.where} className={`rounded-[2rem] p-8 text-ink ${TONES[i % TONES.length]}`}>
              <p className="dash-label">{m.where}</p>
              <p className="display-md mt-10">{m.line}</p>
            </li>
          ))}
        </ul>
        </div>
      ) : (
        <div ref={ref} className="relative" style={{ height: `${n * 75}vh` }}>
          <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
            <div className="relative h-[min(56vh,460px)] w-full">
              {MOMENTS.map((m, i) => (
                <Card key={m.where} m={m} i={i} n={n} progress={scrollYProgress} vh={vh} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-5 pb-32 pt-10 sm:px-8 sm:pb-44">
        <SplitText as="p" text="You could have asked." className="display-lg text-paper" />
        <SplitText as="p" text="You just stopped asking." className="display-lg text-ember" delay={0.2} />
      </div>
    </section>
  );
}
