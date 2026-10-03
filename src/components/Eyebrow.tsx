/** Sentence-case label with a short bar, as on the brand decks. */
export default function Eyebrow({ children, className = "" }: { children: string; className?: string }) {
  const text = children ? children[0].toUpperCase() + children.slice(1) : children;
  return <p className={`dash-label ${className}`}>{text}</p>;
}
