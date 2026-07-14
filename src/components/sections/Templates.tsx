"use client";

import { motion } from "framer-motion";
import { TEMPLATES } from "@/lib/constants";
import { Icon } from "@/components/icons";
import SectionBrand from "@/components/SectionBrand";

export default function Templates() {
  return (
    <section id="templates" className="dream-bg relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <SectionBrand label="every place" />
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-plum sm:text-4xl">
            Every public place gets a community page
          </h2>
          <p className="mt-3 font-body text-sm text-plum/60">
            Universities, parks, downtowns, airports, shopping centers, stadiums, and local businesses each have their own living page.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              className={`flex items-start gap-4 rounded-3xl bg-gradient-to-br p-5 shadow-petal-sm ${template.wash}`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/75 text-plum shadow-petal-sm">
                <Icon name={template.icon} size={22} />
              </span>
              <div className="min-w-0">
                <p className="font-serif-display text-lg font-semibold text-plum">{template.name}</p>
                <p className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-plum/45">{template.signature}</p>
                <p className="mt-1.5 font-body text-sm leading-snug text-plum/70">{template.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
