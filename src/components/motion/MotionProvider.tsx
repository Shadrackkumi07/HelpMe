"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Framer skips transform and layout animations for people who ask for reduced motion. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
