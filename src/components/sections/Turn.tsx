"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import {motion, useScroll, useTransform, type MotionValue} from "framer-motion";
import { useRef } from "react";
import Mark from "@/components/Mark";
import { lerpRange } from "@/lib/motion";

const LINES = [
  "Somebody on your block might say yes.",
  "They just don't know you need a hand.",
];

function Line({ text, progress, range }: { text: string; progress: MotionValue<number>; range: [number, number] }) {
  const y = useTransform(progress, range, ["100%", "0%"]);
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span className="block" style={{ y }}>
        {text}
      </motion.span>
    </span>
  );
}

/**
 * The turn. A solid Ember block wipes up over the Ink (a wipe, never a fade or
 * a gradient), and the page pivots from the problem to the product.
 */
export default function Turn() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  const wipe = useTransform(scrollYProgress, (v) => {
    const top = lerpRange(v, 0, 0.42, 100, 0);
    const r = lerpRange(v, 0, 0.42, 3, 0);
    return `inset(${top}% 0% 0% 0% round ${r}rem ${r}rem 0 0)`;
  });
  const tagY = useTransform(scrollYProgress, [0.74, 0.86], ["120%", "0%"]);
  const markScale = useTransform(scrollYProgress, [0.78, 0.95], [0.7, 1]);
  const markOpacity = useTransform(scrollYProgress, (v) => lerpRange(v, 0.78, 0.9, 0, 1));

  if (reduce) {
    return (
      <section className="bg-ember px-5 py-28 sm:px-8 sm:py-40" aria-label="That's where Help Me comes in">
        <div className="mx-auto max-w-7xl">
          <p className="display-xl max-w-5xl text-ink">
            {LINES[0]} {LINES[1]}
          </p>
          <p className="subhead mt-12 text-3xl text-ink sm:text-5xl">That&apos;s where Help Me comes in.</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[240vh] bg-ink" aria-label="That's where Help Me comes in">
      <motion.div style={{ clipPath: wipe }} className="sticky top-0 flex h-svh items-end overflow-hidden bg-ember">
        <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20">
          <p className="dash-label text-ink">What if they knew?</p>
          <p className="display-xl mt-6 max-w-5xl text-ink">
            <Line text={LINES[0]} progress={scrollYProgress} range={[0.45, 0.58]} />
            <Line text={LINES[1]} progress={scrollYProgress} range={[0.58, 0.7]} />
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6 border-t-2 border-ink pt-8">
            <motion.div style={{ scale: markScale, opacity: markOpacity }}>
              <Mark variant="glyph" size={52} />
            </motion.div>
            <span className="block overflow-hidden">
              <motion.span style={{ y: tagY }} className="subhead block text-3xl text-ink sm:text-5xl">
                That&apos;s where Help Me comes in.
              </motion.span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
