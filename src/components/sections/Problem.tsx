"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";

const LINES = [
  "You have walked past someone who needed help.",
  "So has everyone else on that street.",
];

export default function Problem() {
  return (
    <section className="relative border-y border-line bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <Eyebrow>Did you see them?</Eyebrow>

        <div className="mt-8 max-w-3xl">
          {LINES.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`font-display display-lg ${index === 0 ? "text-ink" : "mt-3 text-ink/35"}`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-base leading-relaxed text-muted">
              Not because people are cold. Because we were in a hurry, unsure what to say, and quietly certain
              somebody else would stop.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              That is the real problem. Not cruelty —{" "}
              <span className="text-ink">the assumption that someone else will.</span>
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8"
          >
            <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-accent" />
            <blockquote className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              When did asking for help become embarrassing?
            </blockquote>
            <figcaption className="mt-5 text-sm leading-relaxed text-muted">
              People are more willing to help than we think. They just need a way to see the need, and a way to act
              on it.
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
