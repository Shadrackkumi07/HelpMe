/** Small tracked label that sits above a section title. */
export default function Eyebrow({ children, onDark = false }: { children: string; onDark?: boolean }) {
  return (
    <p className={`eyebrow ${onDark ? "text-white/50" : "text-muted"}`}>{children}</p>
  );
}
