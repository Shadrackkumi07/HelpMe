"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import { useRef, useState } from "react";
import PhoneFrame from "@/components/PhoneFrame";
import { Reveal, SplitText } from "@/components/motion/Reveal";
import { FAVOR_EXAMPLE, FAVOR_STEPS } from "@/lib/constants";
import { ease } from "@/lib/motion";

/**
 * One favor, start to finish. The three phones show real app screens
 * (WebP in public/UI, listed on FAVOR_STEPS).
 * On wide screens they sit in a pinned 3D stage and the active step's phone
 * turns to face you; the others angle away.
 */
function pose(offset: number) {
  // offset: phone index minus active index
  if (offset === 0) return { x: "0%", rotateY: 0, scale: 1, z: 0, zIndex: 3 };
  const side = Math.sign(offset);
  const far = Math.abs(offset) > 1;
  return {
    x: `${side * (far ? 92 : 62)}%`,
    rotateY: -side * (far ? 38 : 28),
    scale: far ? 0.74 : 0.84,
    z: far ? -260 : -140,
    zIndex: far ? 1 : 2,
  };
}

export default function OneFavor() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(FAVOR_STEPS.length - 1, Math.max(0, Math.floor(p * FAVOR_STEPS.length)));
    setActive(next);
  });

  return (
    <section id="one-favor" className="scroll-mt-20 bg-paper text-ink" aria-label="One favor, start to finish">
      <div className="mx-auto max-w-7xl px-5 pt-28 sm:px-8 sm:pt-40">
        <p className="dash-label">How it works</p>
        <SplitText as="h2" text="One favor, start to finish." className="display-xl mt-6 max-w-4xl" />
        <Reveal className="mt-10 max-w-xl">
          <div className="rounded-[1.75rem] rounded-bl-md bg-ink px-6 py-5 text-paper">
            <p className="text-xs font-bold text-sunbeam">Phone at 4%</p>
            <p className="subhead mt-2 text-2xl">&quot;{FAVOR_EXAMPLE}&quot;</p>
          </div>
        </Reveal>
      </div>

      <div ref={ref} className="relative mx-auto mt-16 grid max-w-7xl gap-0 px-5 pb-28 sm:px-8 sm:pb-40 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Steps */}
        <ol className="relative z-10">
          {FAVOR_STEPS.map((s, i) => (
            <li key={s.n} className="flex min-h-[70vh] flex-col justify-center border-t-2 border-ink py-14 lg:min-h-[85vh]">
              <motion.div
                animate={{ opacity: reduce || active === i ? 1 : 0.28 }}
                transition={{ duration: 0.4, ease: ease.smoothOut }}
              >
                <p className="display-lg text-ember">{s.n}</p>
                <h3 className="display-lg mt-4">{s.title}</h3>
                <p className="mt-6 max-w-md text-lg leading-[1.5]">{s.body}</p>
              </motion.div>
              {/* Phones inline on small screens */}
              <div className="mt-12 flex justify-center lg:hidden" style={{ perspective: "1200px" }}>
                <Reveal y={60}>
                  <PhoneFrame src={s.image} alt={s.alt} />
                </Reveal>
              </div>
            </li>
          ))}
        </ol>

        {/* Pinned 3D stage */}
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-svh items-center justify-center" style={{ perspective: "1600px" }}>
            <div className="relative h-[572px] w-[264px]" style={{ transformStyle: "preserve-3d" }}>
              {FAVOR_STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="absolute inset-0"
                  initial={false}
                  animate={reduce ? pose(i - 1) : pose(i - active)}
                  transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.9 }}
                >
                  <PhoneFrame src={s.image} alt={s.alt} />
                  <p className="mt-5 text-center text-sm font-bold">
                    {s.n}. {s.screen}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
