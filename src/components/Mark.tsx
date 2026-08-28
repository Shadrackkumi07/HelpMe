import Image from "next/image";

/**
 * The Help Me app mark. public/logo.png is a white glyph on transparency, so it
 * is always presented on the black tile it wears on a home screen.
 */
export default function Mark({
  size = 40,
  className = "",
  preload = false,
}: {
  size?: number;
  className?: string;
  preload?: boolean;
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden bg-black ring-1 ring-white/10 ${className}`}
      style={{ width: size, height: size, borderRadius: Math.max(6, Math.round(size * 0.24)) }}
    >
      <Image
        src="/logo.png"
        alt="Help Me"
        width={size}
        height={size}
        preload={preload}
        className="h-full w-full scale-[2.4] object-contain"
      />
    </span>
  );
}
