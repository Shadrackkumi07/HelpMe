"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import dynamic from "next/dynamic";
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import MasterLine from "@/components/MasterLine";
import { AppBadge, GhostLink } from "@/components/AppBadge";
import { CAMPAIGN_LINE } from "@/lib/constants";
import { ease, lerpRange } from "@/lib/motion";

const BlockScene = dynamic(() => import("@/components/three/BlockScene"), { ssr: false });

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const copyY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-14%"]);
  const copyOpacity = useTransform(scrollYProgress, (v) => lerpRange(v, 0.24, 0.38, 1, 0));
  const beatOpacity = useTransform(scrollYProgress, (v) => lerpRange(v, 0.5, 0.62, 0, 1));
  const beatY = useTransform(scrollYProgress, [0.5, 0.68], [60, 0]);

  return (
    <section ref={ref} className="relative h-[210vh] bg-ember" aria-label="It starts with me">
      <div className="sticky top-0 h-svh overflow-hidden">
        <BlockScene
          progress={scrollYProgress}
          className="absolute inset-x-0 top-[9%] h-[34%] md:inset-y-0 md:left-[56%] md:right-0 md:top-0 md:h-full"
        />

        <motion.div
          style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}
          className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-16"
        >
          <motion.p
            className="dash-label mb-6 text-ink"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ease.smoothOut, delay: 0.05 }}
          >
            Fargo-Moorhead
          </motion.p>
          <MasterLine ground="ember" as="h1" animate className="!text-[18vw] md:!text-[min(10.5vw,10.5rem)]" />
          <motion.p
            className="subhead mt-5 max-w-xl text-[1.6rem] leading-[1.05] text-ink sm:mt-6 sm:text-[2rem]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: ease.smoothOut, delay: 0.85 }}
          >
            {CAMPAIGN_LINE}
          </motion.p>
          <motion.div
            className="pointer-events-auto mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: ease.smoothOut, delay: 1 }}
          >
            <AppBadge />
            <GhostLink href="#one-favor" className="text-ink">
              See how a favor works
            </GhostLink>
          </motion.div>
          <motion.p
            className="mt-6 text-sm font-semibold text-ink"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            Neighbors helping neighbors. iPhone, iOS 15 and up.
          </motion.p>
        </motion.div>

        <motion.div
          aria-hidden={reduce ? undefined : true}
          style={reduce ? { opacity: 0 } : { opacity: beatOpacity, y: beatY }}
          className="pointer-events-none absolute inset-x-5 bottom-10 z-10 sm:inset-x-8 sm:bottom-16"
        >
          <div className="mx-auto max-w-7xl">
            <p className="display-xl max-w-4xl text-ink">
              One ask. One yes. A few streets apart.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
