"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BloomMark from "@/components/BloomMark";
import ThemeToggle from "@/components/ThemeToggle";
import { IconClose, IconMenu } from "@/components/icons";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#templates", label: "Places" },
  { href: "#features", label: "Features" },
  { href: "/support/help", label: "Support" },
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
        scrolled ? "bg-blush/90 shadow-[0_1px_0_rgba(0,0,0,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raspberry"
        >
          <BloomMark size={40} priority className="transition-transform duration-300 group-hover:scale-[1.04]" />
          <span className="flex flex-col leading-none">
            <span className="font-serif-display text-[1.35rem] font-semibold tracking-tight text-plum">Help Me</span>
            <span className="mt-0.5 hidden font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-plum/40 sm:block">
              Community starts here
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="font-body text-sm font-semibold text-plum/70 transition-colors hover:text-raspberry-deep">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href="#download"
            className="hidden min-h-10 items-center justify-center rounded-full bg-raspberry px-5 font-body text-sm font-bold text-blush shadow-petal-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raspberry focus-visible:ring-offset-2 focus-visible:ring-offset-blush md:inline-flex"
          >
            Download
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raspberry md:hidden"
          >
            {open ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 border-t border-rose-light/60 bg-blush px-5 pb-5 pt-3 md:hidden">
          <div className="mb-2 flex items-center gap-2.5 px-1 pb-2">
            <BloomMark size={28} />
            <span className="font-body text-xs font-semibold text-plum/50">Help Me</span>
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="min-h-11 rounded-xl px-3 py-2.5 font-body text-sm font-semibold text-plum/75 hover:bg-blush-deep"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-11 items-center justify-center rounded-full bg-raspberry px-5 font-body text-sm font-bold text-blush"
          >
            Download Help Me
          </a>
        </nav>
      )}
    </header>
  );
}
