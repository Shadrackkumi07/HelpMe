import Image from "next/image";

/**
 * The frozen "me" mark, shipped exactly as supplied by Design Studio.
 * Never recolor, crop into the glyph, rotate, outline, or add effects.
 *
 * - "tile": the full Ember tile, the primary mark. Default anywhere.
 * - "glyph": the bare Paper glyph, only on Ember or Ink grounds. Never on white or Paper.
 */
type Variant = "tile" | "glyph";

const GLYPH_RATIO = 680 / 285;

export default function Mark({
  variant = "tile",
  size = 40,
  className = "",
  preload = false,
  alt = "Help Me",
}: {
  variant?: Variant;
  /** Tile: edge length in px. Glyph: height in px. */
  size?: number;
  className?: string;
  preload?: boolean;
  alt?: string;
}) {
  if (variant === "glyph") {
    const width = Math.round(size * GLYPH_RATIO);
    return (
      <Image
        src="/brand/me-paper.png"
        alt={alt}
        width={width}
        height={size}
        preload={preload}
        className={`inline-block h-auto select-none ${className}`}
        style={{ width, height: size }}
        draggable={false}
      />
    );
  }

  return (
    <Image
      src="/brand/help-me-tile-rounded-transparent-512.png"
      alt={alt}
      width={size}
      height={size}
      preload={preload}
      className={`inline-block shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      draggable={false}
    />
  );
}
