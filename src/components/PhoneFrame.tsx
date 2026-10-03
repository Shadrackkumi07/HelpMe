import Image from "next/image";

/**
 * A solid Ink iPhone bezel. Pass `src` to show a real app screen (WebP, 1206:2622); leave it out
 * and the screen stays an empty Paper placeholder, ready for screenshots.
 * Screenshots are expected at 1206 x 2622 with their own status bar.
 *
 * No glow, no gradient bezel, no shadow: the brand is solid fills only.
 */
export default function PhoneFrame({
  src,
  alt = "",
  label = "Screen coming soon",
  preload = false,
  className = "",
}: {
  src?: string;
  alt?: string;
  /** Shown on the empty placeholder screen. */
  label?: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative w-[236px] shrink-0 sm:w-[264px] ${className}`}>
      <div className="rounded-[2.9rem] bg-ink p-[9px]">
        <div
          className="relative overflow-hidden rounded-[2.3rem] bg-paper"
          style={{ aspectRatio: "1206 / 2622" }}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 640px) 264px, 236px"
              preload={preload}
              draggable={false}
              className="select-none object-cover"
            />
          ) : (
            <div aria-hidden className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <span className="absolute left-1/2 top-3 h-[26px] w-[34%] -translate-x-1/2 rounded-full bg-ink" />
              {/* eslint-disable-next-line @next/next/no-img-element -- static brand file, decorative */}
              <img src="/brand/help-me-tile-rounded-transparent-512.png" alt="" className="h-14 w-14" draggable={false} />
              <span className="text-xs font-bold text-ink">{label}</span>
              <span className="absolute bottom-2.5 left-1/2 h-[5px] w-[36%] -translate-x-1/2 rounded-full bg-ink" />
            </div>
          )}
        </div>
      </div>
      {/* side buttons */}
      <span aria-hidden className="absolute -left-[3px] top-[20%] h-8 w-[3px] rounded-l bg-ink" />
      <span aria-hidden className="absolute -left-[3px] top-[29%] h-14 w-[3px] rounded-l bg-ink" />
      <span aria-hidden className="absolute -right-[3px] top-[26%] h-16 w-[3px] rounded-r bg-ink" />
    </div>
  );
}
