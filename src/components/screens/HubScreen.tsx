import type { ReactNode } from "react";
import Image from "next/image";
import {
  IconBell,
  IconChevronRight,
  IconClock,
  IconHandshake,
  IconMapPin,
  IconMegaphone,
  IconMessage,
  IconUsers,
} from "@/components/icons";
import { IosCard, IosSafeTop, IosSectionLabel, IosTabBar } from "@/components/screens/IosChrome";

/** Place community page — the core Help Me surface. */
export default function HubScreen() {
  return (
    <div className="ios-app-background relative flex h-full flex-col text-white">
      {/* Map-style hero under status bar / island */}
      <div className="relative shrink-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 30% 40%, #1a3a2a 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 80% 20%, #1e293b 0%, transparent 50%), linear-gradient(180deg, #0b1220 0%, #0a0a0a 100%)",
          }}
        />
        {/* Park-map texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "linear-gradient(180deg, black 30%, transparent 95%)",
          }}
        />
        {/* location pulse */}
        <div aria-hidden className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inset-0 -m-5 animate-ping rounded-full bg-[#0A84FF]/25" />
          <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0A84FF] ring-[3px] ring-white/90" />
        </div>

        <IosSafeTop />
        <div className="relative px-4 pb-4 pt-1">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/35 px-2 py-1 text-[10px] font-semibold tracking-wide text-white/85 backdrop-blur-md ring-1 ring-white/10">
              <span className="relative h-3.5 w-3.5 overflow-hidden rounded-[3px] bg-black ring-1 ring-white/20">
                <Image src="/logo.png" alt="" fill sizes="14px" className="object-cover" />
              </span>
              Help Me
            </span>
            <button
              type="button"
              tabIndex={-1}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md ring-1 ring-white/10"
            >
              <IconBell size={15} />
            </button>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#0A84FF]">
              <IconMapPin size={12} strokeWidth={2.2} />
              0.2 mi · Open now
            </div>
            <h3 className="mt-1 text-[26px] font-bold leading-[1.1] tracking-tight">Riverside Park</h3>
            <p className="mt-1 text-[12px] leading-snug text-white/55">Public park · Community page</p>
          </div>

          <div className="mt-3.5 flex gap-2">
            <div className="ios-glass flex flex-1 items-center gap-2 rounded-2xl px-3 py-2.5 ring-1 ring-white/10">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#30D158]/15 text-[#30D158]">
                <IconUsers size={14} strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-medium text-white/45">Active now</p>
                <p className="text-[13px] font-semibold tracking-tight">12 people</p>
              </div>
            </div>
            <div className="ios-glass flex flex-1 items-center gap-2 rounded-2xl px-3 py-2.5 ring-1 ring-white/10">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0A84FF]/15 text-[#0A84FF]">
                <IconHandshake size={14} strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-medium text-white/45">Open asks</p>
                <p className="text-[13px] font-semibold tracking-tight">3 nearby</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="relative min-h-0 flex-1 overflow-hidden px-3.5 pb-20">
        <div className="mt-3 flex items-center justify-between px-1">
          <IosSectionLabel>Happening today</IosSectionLabel>
          <span className="pb-1.5 pt-3 text-[11px] font-medium text-[#64D2FF]">See all</span>
        </div>
        <IosCard className="overflow-hidden">
          <FeedRow
            icon={<IconMegaphone size={15} />}
            iconBg="bg-[#FF9F0A]/15 text-[#FF9F0A]"
            title="Farmers market"
            meta="Until 2:00 PM · Main lawn"
            live
          />
          <div className="mx-3.5 h-px bg-white/[0.06]" />
          <FeedRow
            icon={<IconClock size={15} />}
            iconBg="bg-[#64D2FF]/15 text-[#64D2FF]"
            title="Park hours updated"
            meta="Closes at 9:00 PM tonight"
          />
          <div className="mx-3.5 h-px bg-white/[0.06]" />
          <FeedRow
            icon={<IconHandshake size={15} />}
            iconBg="bg-[#BF5AF2]/15 text-[#BF5AF2]"
            title="Volunteer cleanup"
            meta="Saturday 9:00 AM · Gate B"
          />
        </IosCard>

        <IosSectionLabel>Ask the community</IosSectionLabel>
        <IosCard className="flex items-center gap-2.5 px-3.5 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[13px] bg-[#64D2FF]/15 text-[#64D2FF]">
            <IconMessage size={17} strokeWidth={2} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold tracking-tight">Need directions or a hand?</p>
            <p className="text-[11px] text-white/40">12 neighbors are active at the park</p>
          </div>
          <span className="rounded-full bg-white/[0.09] px-2.5 py-1 text-[10px] font-semibold text-white/80 ring-1 ring-white/[0.08]">Ask</span>
        </IosCard>
      </div>

      <IosTabBar active="places" />
    </div>
  );
}

function FeedRow({
  icon,
  iconBg,
  title,
  meta,
  live,
}: {
  icon: ReactNode;
  iconBg: string;
  title: string;
  meta: string;
  live?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-3.5 py-3">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] ${iconBg}`}>{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p className="truncate text-[14px] font-semibold tracking-tight">{title}</p>
          {live && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#FF453A]/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#FF453A]">
              <span className="h-1 w-1 rounded-full bg-[#FF453A]" />
              Live
            </span>
          )}
        </div>
        <p className="truncate text-[11px] text-white/40">{meta}</p>
      </div>
      <IconChevronRight size={15} className="shrink-0 text-white/20" />
    </div>
  );
}
