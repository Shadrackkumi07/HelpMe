import type { ReactNode } from "react";
import Image from "next/image";

/**
 * Real iPhone 17 hardware frame. Screen content sits in the transparent
 * display hole; the PNG (status bar, Dynamic Island, home indicator, bezel)
 * layers on top.
 */
export default function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[270px] shrink-0 sm:w-[286px] ${className ?? ""}`}
      style={{ aspectRatio: "1386 / 2934" }}
    >
      <div
        className="absolute overflow-hidden bg-black"
        style={{
          top: "1.15%",
          right: "2.4%",
          bottom: "1.15%",
          left: "2.4%",
          borderRadius: "12.2% / 5.75%",
        }}
      >
        <div className="ios-app relative h-full w-full overflow-hidden">{children}</div>
      </div>

      <Image
        src="/iphone17-frame.png"
        alt=""
        fill
        sizes="286px"
        priority
        draggable={false}
        className="pointer-events-none z-20 select-none object-contain"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[22%] opacity-60 blur-2xl"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(0,0,0,0.35), transparent 70%)",
          transform: "translateY(8%) scale(0.92)",
        }}
      />
    </div>
  );
}
