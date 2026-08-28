"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";
import { TRUST } from "@/lib/constants";
import { Icon } from "@/components/icons";

export default function Safety() {
  return (
    <section id="safety" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Eyebrow>Straight answers</Eyebrow>
          <h2 className="font-display display-md mt-4 text-ink">
            Asking for help should never cost you your privacy.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TRUST.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-t border-line pt-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink">
                <Icon name={point.icon} size={18} />
              </span>
              <p className="font-display mt-5 text-lg font-semibold text-ink">{point.title}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
