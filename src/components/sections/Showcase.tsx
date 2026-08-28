"use client";

import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import Eyebrow from "@/components/Eyebrow";
import { SCREENS } from "@/lib/constants";

export default function Showcase() {
  return (
    <section id="inside" className="spot-forest relative overflow-hidden border-y border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Eyebrow>Inside the app</Eyebrow>
          <h2 className="font-display display-md mt-4 text-ink">Real screens. Nothing staged.</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            This is Help Me as it ships today on iPhone.
          </p>
        </div>

        <div className="rail mt-16 flex snap-x snap-mandatory gap-10 overflow-x-auto pb-8 lg:justify-between lg:overflow-visible">
          {SCREENS.map((screen, index) => (
            <motion.div
              key={screen.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex shrink-0 snap-center flex-col items-center ${
                index === 1 ? "lg:-translate-y-8" : ""
              }`}
            >
              <PhoneFrame src={screen.src} alt={screen.alt} preload={index === 0} />
              <div className="mt-8 max-w-[260px] text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{screen.tab}</p>
                <p className="font-display mt-2 text-lg font-semibold text-ink">{screen.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{screen.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
