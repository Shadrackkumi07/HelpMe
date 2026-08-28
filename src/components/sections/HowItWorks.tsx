"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Eyebrow>Need a hand? Ask.</Eyebrow>
          <h2 className="font-display display-md mt-4 text-ink">
            Four steps. That is the entire ask.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col bg-bg p-8"
            >
              <span className="font-display text-sm font-semibold tracking-widest text-accent">{item.step}</span>
              <h3 className="font-display mt-6 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted">
          Someone nearby might actually say yes. <span className="text-ink">Usually, they do.</span>
        </p>
      </div>
    </section>
  );
}
