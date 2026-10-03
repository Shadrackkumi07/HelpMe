/**
 * transitions.dev motion tokens, mirrored for Framer Motion.
 * Keep these identical to the custom properties in src/app/globals.css.
 * Durations are in seconds, as Framer expects.
 */
export const duration = {
  stagger: 0.04,
  micro: 0.08,
  quick: 0.15,
  fast: 0.25,
  medium: 0.35,
  slow: 0.4,
  verySlow: 0.5,
} as const;

export const ease = {
  smoothOut: [0.22, 1, 0.36, 1],
  inOut: [0.42, 0, 0.58, 1],
  out: [0, 0, 0.58, 1],
  bounce: [0.34, 1.36, 0.64, 1],
} as const satisfies Record<string, [number, number, number, number]>;

export const distance = {
  micro: 4,
  small: 6,
  base: 8,
  medium: 12,
  large: 30,
} as const;

/**
 * Map v from [a, b] to [from, to], clamped. Use inside a function-form
 * useTransform for scroll-linked opacity and clip-path: Framer hands the
 * array form to the browser's scroll timeline, which drifts from sticky
 * layouts.
 */
export function lerpRange(v: number, a: number, b: number, from: number, to: number): number {
  const t = Math.min(1, Math.max(0, (v - a) / (b - a)));
  return from + (to - from) * t;
}
