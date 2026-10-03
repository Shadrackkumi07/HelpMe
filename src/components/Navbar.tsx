"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import {AnimatePresence, motion, useMotionValueEvent, useScroll} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Mark from "@/components/Mark";
import { APP_URL } from "@/lib/constants";
import { duration, ease } from "@/lib/motion";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/helpers", label: "Helping" },
  { href: "/ground-rules", label: "Ground rules" },
  { href: "/questions", label: "Questions" },
];

/**
 * Sits on whatever ground the page opens with (Ember or Paper; text is Ink on
 * both), turns solid Paper with an Ink rule once you scroll, tucks away while
 * you read downward, and comes back the moment you scroll up.
 */
export default function Navbar() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 24);
    setHidden(!open && y > 240 && y > prev + 2);
    if (y < prev - 2) setHidden(false);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 ${solid && !open ? "border-b-2 border-ink bg-paper" : "border-b-2 border-transparent"}`}
        animate={{ y: hidden && !reduce ? "-100%" : "0%" }}
        transition={{ duration: duration.medium, ease: ease.smoothOut }}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Help Me, home" className="rounded-xl transition-transform duration-[250ms] hover:scale-105">
            <Mark size={40} preload />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[0.95rem] font-semibold text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 bg-ink transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-bold text-paper transition-transform duration-[250ms] hover:scale-[1.04] md:inline-flex"
            >
              Join the beta
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper md:hidden"
            >
              <span
                className={`absolute h-[2.5px] w-5 bg-current transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "rotate-45" : "-translate-y-[4px]"}`}
              />
              <span
                className={`absolute h-[2.5px] w-5 bg-current transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "-rotate-45" : "translate-y-[4px]"}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* transitions.dev #20 plus-to-menu morph: the menu grows out of the trigger corner. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-ember px-5 pb-10 pt-24 md:hidden"
            initial={reduce ? { opacity: 0 } : { clipPath: "circle(0% at calc(100% - 42px) 36px)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "circle(150% at calc(100% - 42px) 36px)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "circle(0% at calc(100% - 42px) 36px)" }}
            transition={{ duration: 0.55, ease: ease.smoothOut }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: duration.verySlow, ease: ease.smoothOut, delay: 0.12 + i * 0.05 }}
                  className="border-b-2 border-ink"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display-lg block py-4 text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-auto flex h-16 items-center justify-center rounded-full bg-ink text-lg font-bold text-paper"
            >
              Join the beta on TestFlight
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
