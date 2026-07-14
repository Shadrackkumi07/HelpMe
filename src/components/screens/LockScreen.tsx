import Image from "next/image";
import { IconMapPin, IconUsers } from "@/components/icons";

/** A system-level moment: Help Me feels useful before the app is even opened. */
export default function LockScreen() {
  return (
    <div className="ios-lock-screen relative h-full overflow-hidden text-white">
      <div className="ios-lock-orb ios-lock-orb-one" aria-hidden />
      <div className="ios-lock-orb ios-lock-orb-two" aria-hidden />
      <div className="ios-lock-grid" aria-hidden />

      <div className="relative z-10 flex h-full flex-col px-4 pb-7 pt-[43px]">
        <div className="text-center">
          <p className="text-[12px] font-semibold tracking-[0.01em] text-white/90">Sunday, July 14</p>
          <p className="mt-0.5 text-[48px] font-semibold leading-none tracking-[-0.055em]">9:41</p>
        </div>

        <div className="mt-auto space-y-2.5">
          <div className="ios-lock-notification rounded-[22px] px-3.5 py-3">
            <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.02em] text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <span className="relative h-4 w-4 overflow-hidden rounded-[5px] bg-black ring-1 ring-white/25">
                  <Image src="/logo.png" alt="Help Me" fill sizes="16px" className="object-cover" />
                </span>
                HELP ME
              </span>
              <span>NOW</span>
            </div>
            <p className="mt-2 text-[14px] font-semibold tracking-[-0.01em]">Riverside Park is feeling lively</p>
            <p className="mt-0.5 text-[12px] leading-snug text-white/72">12 people are nearby · Farmers market is open</p>
          </div>

          <div className="ios-lock-notification flex items-center gap-2.5 rounded-[22px] px-3.5 py-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#30D158]/20 text-[#80F0A0]">
              <IconUsers size={15} strokeWidth={2.2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold">A neighbor offered directions</p>
              <p className="truncate text-[11px] text-white/60">Gate B · 2 min away</p>
            </div>
            <IconMapPin size={15} className="text-white/60" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between px-1">
          <span className="h-8 w-8 rounded-full bg-black/25 backdrop-blur-md" />
          <span className="h-8 w-8 rounded-full bg-black/25 backdrop-blur-md" />
        </div>
      </div>
    </div>
  );
}
