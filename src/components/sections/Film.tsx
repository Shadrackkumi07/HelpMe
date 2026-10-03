"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import {motion, useScroll, useTransform} from "framer-motion";
import { useEffect, useRef } from "react";
import { SplitText } from "@/components/motion/Reveal";

/**
 * The "Who we are" campaign film, re-encoded for the web (720 x 1280, no audio).
 * Nothing downloads until it nears the viewport; it plays only while visible.
 */
export default function Film() {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.45], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.86, 1]);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (v.preload === "none") {
            v.preload = "auto";
            v.load();
          }
          if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) void v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={section} className="on-ink bg-ink px-5 py-28 text-paper sm:px-8 sm:py-40" aria-label="Who we are">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="dash-label">Who we are</p>
          <SplitText as="h2" text="A place to ask your block for the small stuff." highlight={["small", "stuff."]} className="display-xl mt-6 max-w-3xl" />
          <p className="mt-8 max-w-md text-lg leading-[1.5]">
            You ask for a hand with something small. A neighbor can say yes. Forty-five seconds on what that looks like.
          </p>
        </div>
        <div style={{ perspective: "1400px" }} className="justify-self-center">
          <motion.div
            style={reduce ? undefined : { rotateX, scale, transformOrigin: "50% 100%" }}
            className="w-[min(78vw,340px)] overflow-hidden rounded-[2.5rem] border-[10px] border-paper bg-paper"
          >
            <video
              ref={video}
              className="block aspect-[9/16] w-full object-cover"
              src="/brand/video/who-we-are.mp4"
              poster="/brand/video/who-we-are-poster.jpg"
              muted
              loop
              playsInline
              preload="none"
              controls={!!reduce}
              aria-label="Help Me, who we are. A short film: you need directions, ask for a quick favor or offer one, the map shows areas."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
