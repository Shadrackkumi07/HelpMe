"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import {motion} from "framer-motion";
import type { ReactNode } from "react";
import { distance, duration, ease } from "@/lib/motion";

/**
 * transitions.dev "texts reveal", adapted to the brand: a rise and fade with
 * no blur (the brand rules out blur). Plays once when scrolled into view.
 */
export function Reveal({
  children,
  delay = 0,
  y = distance.large,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "p" | "span";
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: duration.verySlow * 1.4, ease: ease.smoothOut, delay }}
    >
      {children}
    </Comp>
  );
}

/**
 * Per-word masked rise for Archivo headlines. Each word slides up out of its
 * own clip box, staggered. Screen readers get the plain string.
 */
export function SplitText({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = duration.stagger * 1.5,
  highlight,
  highlightClass = "text-ember",
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  stagger?: number;
  /** Words (exact, case-sensitive, punctuation included) to color. */
  highlight?: string[];
  highlightClass?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  if (reduce) {
    return (
      <Tag className={className}>
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className={highlight?.includes(w) ? highlightClass : undefined}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
    );
  }
  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden>
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span
              className={`inline-block ${highlight?.includes(w) ? highlightClass : ""}`}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.85, ease: ease.smoothOut, delay: delay + i * stagger }}
            >
              {w}
            </motion.span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </Tag>
  );
}
