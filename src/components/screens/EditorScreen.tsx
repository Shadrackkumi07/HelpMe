import {
  IconCalendar,
  IconChevronLeft,
  IconInfo,
  IconMegaphone,
  IconPlus,
  IconSparkles,
  IconWrench,
} from "@/components/icons";
import { IosCard, IosSafeBottom, IosSafeTop, IosSectionLabel } from "@/components/screens/IosChrome";

const UPDATES = [
  {
    icon: IconMegaphone,
    color: "text-[#FF9F0A] bg-[#FF9F0A]/15",
    org: "Riverside Parks",
    title: "Open mic at the plaza",
    body: "Local artists tonight from 6 to 8 PM near the fountain.",
    time: "12m",
    pin: true,
  },
  {
    icon: IconCalendar,
    color: "text-[#0A84FF] bg-[#0A84FF]/15",
    org: "Community board",
    title: "Saturday cleanup",
    body: "Meet at Gate B at 9:00 AM. Gloves provided.",
    time: "1h",
    pin: false,
  },
  {
    icon: IconInfo,
    color: "text-[#64D2FF] bg-[#64D2FF]/15",
    org: "Place info",
    title: "Restrooms near Gate B",
    body: "Open until close. Family room available.",
    time: "3h",
    pin: false,
  },
  {
    icon: IconSparkles,
    color: "text-[#BF5AF2] bg-[#BF5AF2]/15",
    org: "Fun fact",
    title: "Founded in 1912",
    body: "One of the oldest riverside greens in the city.",
    time: "1d",
    pin: false,
  },
  {
    icon: IconWrench,
    color: "text-[#30D158] bg-[#30D158]/15",
    org: "Local pros",
    title: "Trusted help nearby",
    body: "Moving, lawn care, and tutoring when you need it.",
    time: "2d",
    pin: false,
  },
];

/** Live place updates — events, announcements, and local info. */
export default function EditorScreen() {
  return (
    <div className="ios-app-background relative flex h-full flex-col text-white">
      <IosSafeTop />

      {/* Navigation bar */}
      <div className="flex items-center justify-between px-2.5 pb-1">
        <button type="button" tabIndex={-1} className="flex items-center gap-0.5 px-1 text-[15px] font-medium text-[#0A84FF]">
          <IconChevronLeft size={20} strokeWidth={2.1} />
          Places
        </button>
        <button
          type="button"
          tabIndex={-1}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.08] text-[#0A84FF] ring-1 ring-white/[0.06]"
        >
          <IconPlus size={16} strokeWidth={2.2} />
        </button>
      </div>

      <div className="px-4 pb-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/35">Riverside Park</p>
        <div className="flex items-end justify-between gap-3">
          <h3 className="mt-0.5 text-[28px] font-bold leading-none tracking-tight">Live around you</h3>
          <span className="mb-0.5 flex items-center gap-1 text-[10px] font-semibold text-[#65e887]"><span className="h-1.5 w-1.5 rounded-full bg-[#30D158]" />12 here</span>
        </div>
        <p className="mt-1.5 text-[12px] text-white/45">Fresh updates from people and places nearby</p>
      </div>

      {/* Segmented control */}
      <div className="px-4 pb-2">
        <div className="flex rounded-[11px] bg-white/[0.08] p-[3px] ring-1 ring-white/[0.04]">
          {["All", "Events", "Help", "Info"].map((tab, i) => (
            <div
              key={tab}
              className={`flex-1 rounded-[9px] py-1.5 text-center text-[11px] font-semibold ${
                i === 0 ? "bg-[#3A3A3C] text-white shadow-sm" : "text-white/45"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-2.5 overflow-hidden px-3.5 pb-2">
        <IosSectionLabel>Pinned & recent</IosSectionLabel>
        {UPDATES.map((item) => {
          const IconCmp = item.icon;
          return (
            <IosCard key={item.title} className="px-3.5 py-3">
              <div className="flex items-start gap-3">
                <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] ${item.color}`}>
                  <IconCmp size={15} strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-[11px] font-medium text-white/40">{item.org}</p>
                    <span className="shrink-0 text-[10px] text-white/30">{item.time}</span>
                  </div>
                  <p className="mt-0.5 text-[14px] font-semibold leading-snug tracking-tight">{item.title}</p>
                  <p className="mt-0.5 text-[12px] leading-snug text-white/45">{item.body}</p>
                  {item.pin && (
                    <span className="mt-2 inline-flex rounded-full bg-[#0A84FF]/15 px-2 py-0.5 text-[10px] font-semibold text-[#0A84FF]">
                      Pinned by Riverside Parks
                    </span>
                  )}
                </div>
              </div>
            </IosCard>
          );
        })}
      </div>

      <IosSafeBottom />
    </div>
  );
}
