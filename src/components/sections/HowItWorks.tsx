"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";
import SectionBrand from "@/components/SectionBrand";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-blush py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <SectionBrand label="how it works" />
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-plum sm:text-4xl">Four steps to a stronger local connection</h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-rose-light to-transparent lg:block" aria-hidden />
          {HOW_IT_WORKS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <span className="font-serif-display text-5xl font-bold text-rose-light">{item.step}</span>
              <h3 className="mt-3 font-body text-lg font-bold text-plum">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-plum/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
