import type { ReactNode } from "react";
import {
  IconHandshake,
  IconHouse,
  IconMapPin,
  IconPerson,
  IconSearch,
} from "@/components/icons";

/** Top safe area under Dynamic Island / status bar from the hardware frame. */
export function IosSafeTop({ className }: { className?: string }) {
  return <div aria-hidden className={`h-[52px] shrink-0 ${className ?? ""}`} />;
}

/** Bottom home indicator clearance from the hardware frame. */
export function IosSafeBottom({ className }: { className?: string }) {
  return <div aria-hidden className={`h-[18px] shrink-0 ${className ?? ""}`} />;
}

export function IosTabBar({ active = "places" }: { active?: "home" | "places" | "help" | "search" | "you" }) {
  const items = [
    { id: "home" as const, label: "Home", Icon: IconHouse },
    { id: "places" as const, label: "Places", Icon: IconMapPin },
    { id: "help" as const, label: "Help", Icon: IconHandshake },
    { id: "search" as const, label: "Search", Icon: IconSearch },
    { id: "you" as const, label: "You", Icon: IconPerson },
  ];

  return (
    <div className="absolute inset-x-0 bottom-0 z-10">
      <div className="ios-glass border-t border-white/[0.08] px-1 pb-[18px] pt-1.5">
        <div className="flex items-end justify-between">
          {items.map(({ id, label, Icon }) => {
            const on = id === active;
            return (
              <div key={id} className="flex min-w-0 flex-1 flex-col items-center gap-0.5 py-0.5">
                <Icon size={20} className={on ? "text-[#0A84FF]" : "text-white/40"} strokeWidth={on ? 2.1 : 1.75} />
                <span className={`text-[9px] font-medium tracking-tight ${on ? "text-[#0A84FF]" : "text-white/40"}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function IosSectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="px-1 pb-1.5 pt-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-white/35">
      {children}
    </p>
  );
}

export function IosCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`ios-surface rounded-[20px] ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function IosAvatar({
  initials,
  tone = "blue",
  size = 36,
}: {
  initials: string;
  tone?: "blue" | "green" | "orange" | "purple" | "teal";
  size?: number;
}) {
  const tones = {
    blue: "from-[#3B82F6] to-[#1D4ED8]",
    green: "from-[#34D399] to-[#059669]",
    orange: "from-[#F59E0B] to-[#D97706]",
    purple: "from-[#A78BFA] to-[#7C3AED]",
    teal: "from-[#2DD4BF] to-[#0D9488]",
  };
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-semibold text-white ${tones[tone]}`}
      style={{ width: size, height: size, fontSize: size * 0.34 }}
    >
      {initials}
    </div>
  );
}
