"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatingPetals from "@/components/FloatingPetals";
import BloomMark from "@/components/BloomMark";
import PhoneFrame from "@/components/PhoneFrame";
import LockScreen from "@/components/screens/LockScreen";
import { StoreBadgeRow } from "@/components/StoreBadges";
import { IconDot } from "@/components/icons";

export default function Hero() {
  return (
    <section className="dream-bg relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-14">
      <FloatingPetals count={12} />

      {/* Large brand watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-8 h-[340px] w-[340px] opacity-[0.07] sm:right-0 sm:top-0 sm:h-[420px] sm:w-[420px] lg:opacity-[0.09]"
      >
        <Image src="/logo.png" alt="" fill sizes="420px" className="object-contain" priority />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[220px] w-[220px] opacity-[0.05] sm:h-[280px] sm:w-[280px]"
      >
        <Image src="/logo.png" alt="" fill sizes="280px" className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <BloomMark size={64} priority className="sm:hidden" />
            <BloomMark size={72} priority className="hidden sm:inline-flex lg:hidden" />
            <div className="hidden items-center gap-4 lg:flex">
              <BloomMark size={80} priority />
              <div className="text-left">
                <p className="font-serif-display text-3xl font-semibold tracking-tight text-plum">Help Me</p>
                <p className="mt-1 font-body text-sm font-semibold text-plum/50">Your community starts here</p>
              </div>
            </div>
          </div>

          <span className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/80 px-3.5 py-1.5 font-body text-xs font-bold uppercase tracking-[0.18em] text-raspberry-deep shadow-petal-sm ring-1 ring-black/5">
            <BloomMark size={20} plain className="!rounded-md" />
            community starts here
          </span>

          <h1 className="mt-5 font-serif-display text-4xl font-semibold leading-[1.08] text-plum sm:text-5xl lg:text-6xl">
            Your community
            <br />
            <span className="font-script text-5xl font-normal text-raspberry-deep sm:text-6xl lg:text-7xl">starts here.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg font-body text-lg leading-relaxed text-plum/70 lg:mx-0">
            Help Me connects people with the places and people around them. Discover what is happening nearby, ask for
            help, and become part of a living community page for every public place.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
            <StoreBadgeRow />
            <a href="#how-it-works" className="font-body text-sm font-semibold text-raspberry-deep underline-offset-4 hover:underline">
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
            {["Place based", "Ask and offer help", "Local events nearby"].map((claim) => (
              <span key={claim} className="flex items-center gap-1.5 font-body text-xs font-semibold text-plum/55">
                <IconDot size={8} className="text-raspberry" />
                {claim}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto flex justify-center"
        >
          <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-gold/15 blur-2xl" aria-hidden />
          <div className="absolute -right-4 bottom-6 h-28 w-28 rounded-full bg-raspberry/10 blur-2xl" aria-hidden />
          {/* Floating brand badge next to phone */}
          <div className="absolute -left-3 top-16 z-10 hidden sm:block">
            <div className="flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 shadow-petal-sm ring-1 ring-black/5 backdrop-blur-md">
              <BloomMark size={28} />
              <div className="pr-1">
                <p className="font-body text-[11px] font-bold text-plum">Help Me</p>
                <p className="font-body text-[9px] font-semibold text-plum/45">On iPhone</p>
              </div>
            </div>
          </div>
          <div className="float-slow">
            <PhoneFrame>
              <LockScreen />
            </PhoneFrame>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
