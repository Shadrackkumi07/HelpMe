import {
  IconChevronLeft,
  IconMapPin,
  IconSend,
} from "@/components/icons";
import { IosAvatar, IosCard, IosSafeBottom, IosSafeTop } from "@/components/screens/IosChrome";

const HELPERS = [
  { initials: "AM", name: "Alex M.", detail: "120 ft · Often helps here", tone: "blue" as const, eta: "2 min" },
  { initials: "JK", name: "Jordan K.", detail: "0.1 mi · Local regular", tone: "green" as const, eta: "4 min" },
  { initials: "SR", name: "Sam R.", detail: "0.2 mi · Available now", tone: "orange" as const, eta: "6 min" },
];

/** Ask for help nearby — core Help Me action. */
export default function FinaleScreen() {
  return (
    <div className="ios-app-background relative flex h-full flex-col text-white">
      <IosSafeTop />

      <div className="flex items-center justify-between px-2.5">
        <button type="button" tabIndex={-1} className="flex items-center gap-0.5 px-1 text-[15px] font-medium text-[#0A84FF]">
          <IconChevronLeft size={20} strokeWidth={2.1} />
          Riverside
        </button>
        <span className="pr-2 text-[13px] font-semibold text-white/50">Cancel</span>
      </div>

      <div className="px-4 pt-2">
        <h3 className="text-[28px] font-bold leading-none tracking-tight">Ask nearby</h3>
        <p className="mt-1.5 text-[13px] leading-snug text-white/45">
          Your request is shared only with people around Riverside Park.
        </p>
      </div>

      {/* Composer card */}
      <div className="mt-4 px-3.5">
        <IosCard className="overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-3.5 py-2.5">
            <IconMapPin size={14} className="text-[#0A84FF]" strokeWidth={2.1} />
            <span className="text-[12px] font-medium text-white/70">Riverside Park · Gate B</span>
            <span className="ml-auto rounded-full bg-[#30D158]/15 px-2 py-0.5 text-[10px] font-semibold text-[#30D158]">
              Live
            </span>
          </div>
          <div className="px-3.5 py-3">
            <p className="text-[14px] leading-relaxed text-white/90">
              Where is the farmers market entrance? I’m near Gate B.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Directions", "Quick assist", "Local tip"].map((chip, i) => (
                <span
                  key={chip}
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    i === 0
                      ? "bg-[#0A84FF] text-white"
                      : "bg-white/[0.08] text-white/55 ring-1 ring-white/[0.06]"
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </IosCard>
      </div>

      <div className="mt-4 px-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-white/35">People who may see this</p>
      </div>

      <div className="mt-1.5 min-h-0 flex-1 space-y-2 overflow-hidden px-3.5">
        {HELPERS.map((person) => (
          <IosCard key={person.name} className="flex items-center gap-3 px-3 py-2.5">
            <IosAvatar initials={person.initials} tone={person.tone} size={38} />
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold tracking-tight">{person.name}</p>
              <p className="truncate text-[11px] text-white/40">{person.detail}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-semibold text-[#0A84FF]">{person.eta}</p>
              <p className="text-[10px] text-white/30">away</p>
            </div>
          </IosCard>
        ))}
      </div>

      {/* Primary action */}
      <div className="px-3.5 pt-2">
        <button
          type="button"
          tabIndex={-1}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#0A84FF] text-[16px] font-semibold tracking-tight text-white shadow-[0_8px_24px_-8px_rgba(10,132,255,0.7)]"
        >
          <IconSend size={16} strokeWidth={2.2} />
          Ask the community
        </button>
        <p className="mt-2 text-center text-[10px] text-white/30">Only people near this place will see it</p>
      </div>

      <IosSafeBottom />
    </div>
  );
}
