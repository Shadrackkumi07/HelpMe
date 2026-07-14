"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { Icon } from "@/components/icons";
import SectionBrand from "@/components/SectionBrand";

export default function Features() {
  return (
    <section id="features" className="relative bg-blush py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <SectionBrand label="features" />
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-plum sm:text-4xl">Everything a community needs, in one place</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
              className="rounded-3xl bg-white/70 p-5 shadow-petal-sm transition-transform hover:-translate-y-1"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blush-deep text-plum">
                <Icon name={feature.icon} size={20} />
              </span>
              <p className="mt-3 font-body text-base font-bold text-plum">{feature.title}</p>
              <p className="mt-1.5 font-body text-sm leading-snug text-plum/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
