import Image from "next/image";

/**
 * A CSS iPhone bezel around a real App screenshot. The screenshots already carry
 * their own status bar and home indicator, so the frame stays pure hardware.
 */
export default function PhoneFrame({
  src,
  alt,
  preload = false,
  className = "",
}: {
  src: string;
  alt: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative w-[248px] shrink-0 sm:w-[270px] ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-6 bottom-0 top-12 -z-10 rounded-[3rem] opacity-70 blur-3xl"
        style={{ background: "radial-gradient(ellipse at 50% 60%, color-mix(in srgb, var(--accent) 26%, transparent), transparent 70%)" }}
      />
      <div
        className="rounded-[2.9rem] bg-gradient-to-b from-[#3a3d44] via-[#17191d] to-[#0a0b0d] p-[3px] shadow-lift"
      >
        <div className="rounded-[2.75rem] bg-black p-[7px]">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-black" style={{ aspectRatio: "1206 / 2622" }}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 640px) 270px, 248px"
              preload={preload}
              draggable={false}
              className="select-none object-cover"
            />
          </div>
        </div>
      </div>
      {/* side buttons */}
      <span aria-hidden className="absolute -left-[3px] top-[22%] h-9 w-[3px] rounded-l bg-white/15" />
      <span aria-hidden className="absolute -left-[3px] top-[32%] h-14 w-[3px] rounded-l bg-white/15" />
      <span aria-hidden className="absolute -right-[3px] top-[28%] h-16 w-[3px] rounded-r bg-white/15" />
    </div>
  );
}
