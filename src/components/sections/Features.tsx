"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";
import { FEATURES } from "@/lib/constants";
import { Icon } from "@/components/icons";

export default function Features() {
  return (
    <section id="features" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="font-display display-md mt-4 text-ink">
            Everything needed to ask, and to show up.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
              className="group rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Icon name={feature.icon} size={20} />
              </span>
              <p className="font-display mt-5 text-base font-semibold text-ink">{feature.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
