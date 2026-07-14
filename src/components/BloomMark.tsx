import Image from "next/image";

type BrandMarkProps = {
  size?: number;
  className?: string;
  /** Show the Help Me wordmark beside the mark */
  withWordmark?: boolean;
  wordmarkClassName?: string;
  /** Softer presentation for dark sections */
  onDark?: boolean;
  /** Compact mark without heavy shadow frame */
  plain?: boolean;
  priority?: boolean;
};

/**
 * Help Me brand mark from public/logo.png.
 * Presented as a rounded app icon so the chain mark reads clearly on light and dark UI.
 */
export default function BloomMark({
  size = 40,
  className = "",
  withWordmark = false,
  wordmarkClassName,
  onDark = false,
  plain = false,
  priority = false,
}: BrandMarkProps) {
  const radius = Math.max(7, Math.round(size * 0.22));

  const mark = (
    <span
      className={[
        "relative inline-flex shrink-0 overflow-hidden bg-black",
        plain
          ? "ring-1 ring-black/10 dark:ring-white/15"
          : onDark
            ? "ring-1 ring-white/15 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.55)]"
            : "shadow-[0_10px_28px_-12px_rgba(0,0,0,0.45)] ring-1 ring-black/10",
        className,
      ].join(" ")}
      style={{ width: size, height: size, borderRadius: radius }}
    >
      <Image
        src="/logo.png"
        alt={withWordmark ? "" : "Help Me"}
        width={size}
        height={size}
        priority={priority || size >= 48}
        className="h-full w-full object-cover"
      />
    </span>
  );

  if (!withWordmark) return mark;

  return (
    <span className="inline-flex items-center gap-2.5">
      {mark}
      <span
        className={
          wordmarkClassName ??
          `font-serif-display font-semibold tracking-tight ${onDark ? "text-white" : "text-plum"}`
        }
        style={{ fontSize: Math.max(16, Math.round(size * 0.55)) }}
      >
        Help Me
      </span>
    </span>
  );
}
