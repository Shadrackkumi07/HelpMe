"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import {motion} from "framer-motion";
import { duration, ease } from "@/lib/motion";

/**
 * The master-line lockup: "It starts with" set in Archivo, with the frozen
 * mark standing in as the word "me". The mark is the whole supplied PNG
 * (transparent padding trimmed only), sized so its letters match the type's
 * lowercase height and sat on the same baseline. Ember or Ink grounds only.
 *
 * The glyph's legs end 25/285 of its height above the bottom (the tail
 * dips below), so it hangs that far under the baseline.
 */
const TEXT = ["It", "starts", "with"];

export default function MasterLine({
  ground = "ember",
  as: Tag = "h1",
  className = "",
  animate = false,
  stacked = true,
}: {
  ground?: "ember" | "ink";
  as?: "h1" | "h2" | "p";
  className?: string;
  animate?: boolean;
  /** Break after "starts", like the posters. */
  stacked?: boolean;
}) {
  const reduce = useReducedMotion();
    const textColor = ground === "ember" ? "text-ink" : "text-ember";
  const glyph = (
    // eslint-disable-next-line @next/next/no-img-element -- sized in em to track the type
    <img
      src="/brand/me-paper.png"
      alt=""
      draggable={false}
      className="inline-block select-none"
      style={{ height: "0.8em", width: "auto", verticalAlign: "-0.073em" }}
    />
  );

  if (reduce || !animate) {
    return (
      <Tag className={`display-hero ${textColor} ${className}`} aria-label="It starts with me">
        <span aria-hidden className="block">
          {TEXT[0]} {TEXT[1]}
          {stacked ? <br /> : " "}
          {TEXT[2]} {glyph}
        </span>
      </Tag>
    );
  }

  const word = (w: string, i: number) => (
    <span key={w} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease: ease.smoothOut, delay: 0.15 + i * 0.09 }}
      >
        {w}
      </motion.span>
    </span>
  );

  return (
    <Tag className={`display-hero ${textColor} ${className}`} aria-label="It starts with me">
      <span aria-hidden className="block">
        {word(TEXT[0], 0)} {word(TEXT[1], 1)}
        {stacked ? <br /> : " "}
        {word(TEXT[2], 2)}{" "}
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: duration.verySlow * 1.6, ease: ease.smoothOut, delay: 0.6 }}
          style={{ transformOrigin: "left bottom" }}
        >
          {glyph}
        </motion.span>
      </span>
    </Tag>
  );
}
