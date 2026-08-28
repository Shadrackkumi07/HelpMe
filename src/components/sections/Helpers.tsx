"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";
import { AppBadge } from "@/components/AppBadge";

const FACTS = [
  { k: "Apply", v: "Submit identity evidence from inside the app." },
  { k: "Reviewed", v: "A staff member makes the call. Not an algorithm." },
  { k: "Current", v: "Approval is live or it is nothing. Old labels grant no access." },
];

export default function Helpers() {
  return (
    <section id="helpers" className="relative border-y border-line bg-bg-2 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-5 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>Helpers show up</Eyebrow>
          <h2 className="font-display display-lg mt-5 text-ink">
            Helpers see what
            <br />
            others overlook.
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted">
            Anyone can join Help Me. Not everyone can help. Becoming a Helper means putting your name to it and
            waiting on a real decision — because the person on the other end is trusting a stranger with their
            afternoon.
          </p>
          <div className="mt-9">
            <AppBadge />
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col divide-y divide-line self-center overflow-hidden rounded-3xl border border-line bg-bg"
        >
          {FACTS.map((fact) => (
            <li key={fact.k} className="px-7 py-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{fact.k}</p>
              <p className="mt-2.5 text-base leading-relaxed text-ink/85">{fact.v}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
