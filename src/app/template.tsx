"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import {motion} from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { ease } from "@/lib/motion";

/*
 * Route transition. On client-side navigations a solid Ink panel wipes up and
 * off the new page (a wipe, not a fade: the brand rules out see-through
 * layers). Never on the first load, so it can't delay first paint, and never
 * for reduced motion.
 */
let hydrated = false;

export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const [wipe] = useState(() => typeof window !== "undefined" && hydrated);

  useEffect(() => {
    hydrated = true;
    if (wipe) window.scrollTo(0, 0);
  }, [wipe]);

  return (
    <>
      {wipe && !reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60] bg-ink"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.7, ease: ease.smoothOut, delay: 0.05 }}
        />
      )}
      {children}
    </>
  );
}
