"use client";

import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import HubScreen from "@/components/screens/HubScreen";
import EditorScreen from "@/components/screens/EditorScreen";
import FinaleScreen from "@/components/screens/FinaleScreen";
import SectionBrand from "@/components/SectionBrand";
import BloomMark from "@/components/BloomMark";

const SCREENS = [
  { Screen: HubScreen, label: "Arrive at a place", offset: "sm:translate-y-8" },
  { Screen: EditorScreen, label: "See what is live", offset: "sm:-translate-y-4" },
  { Screen: FinaleScreen, label: "Get help nearby", offset: "sm:translate-y-10" },
];

export default function Showcase() {
  return (
    <section className="dream-bg relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <SectionBrand label="inside the app" />
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-plum sm:text-4xl">
            A place can feel familiar in a moment
          </h2>
        </div>

        <div className="bloom-scrollbar mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-6 sm:justify-center sm:overflow-visible sm:px-0">
          {SCREENS.map(({ Screen, label, offset }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`flex shrink-0 snap-center flex-col items-center ${offset}`}
            >
              <PhoneFrame>
                <Screen />
              </PhoneFrame>
              <div className="mt-4 flex items-center gap-2">
                <BloomMark size={16} plain />
                <p className="font-body text-sm font-bold text-plum/70">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
