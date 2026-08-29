"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Mark from "@/components/Mark";
import ThemeToggle from "@/components/ThemeToggle";
import { APP_URL } from "@/lib/constants";
import { IconClose, IconMenu } from "@/components/icons";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/explore", label: "Explore" },
  { href: "/helpers", label: "Helpers" },
  { href: "/safety", label: "Safety" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Mark size={36} preload className="transition-transform duration-300 group-hover:scale-105" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] font-semibold text-ink">Help Me</span>
            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:block">
              See Beyond
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:inline-flex"
          >
            Get the app
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          >
            {open ? <IconClose size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 border-t border-line bg-bg px-5 pb-6 pt-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="min-h-11 rounded-xl px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-surface"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-bg"
          >
            Get Help Me on TestFlight
          </a>
        </nav>
      )}
    </header>
  );
}
