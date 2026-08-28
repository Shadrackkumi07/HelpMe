"use client";

import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import { AppBadge, GhostLink } from "@/components/AppBadge";
import { REGION, SCREENS } from "@/lib/constants";

const CLAIMS = ["Approved helpers", "You choose what you share", REGION];

export default function Hero() {
  return (
    <section className="spot-top relative overflow-hidden pb-24 pt-12 sm:pb-32 sm:pt-16">
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(180deg, transparent, var(--bg))" }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-ink/75">
            <span className="relative flex h-1.5 w-1.5">
              <span className="beacon absolute inset-0 rounded-full" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Live on TestFlight · {REGION}
          </span>

          <h1 className="font-display display-xl mt-8 text-ink">
            See
            <br />
            Beyond.
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            Someone near you needs a hand right now. Someone near you would give one.
            <span className="text-ink"> Help Me puts them in the same place.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <AppBadge />
            <GhostLink href="#how-it-works">See how it works</GhostLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2">
            {CLAIMS.map((claim) => (
              <span key={claim} className="flex items-center gap-2 text-xs font-medium text-muted">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                {claim}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="rise">
            <PhoneFrame src={SCREENS[0].src} alt={SCREENS[0].alt} preload />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
