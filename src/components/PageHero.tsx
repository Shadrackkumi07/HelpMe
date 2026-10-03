import type { ReactNode } from "react";
import Eyebrow from "@/components/Eyebrow";
import { SplitText } from "@/components/motion/Reveal";

/** The Ember band every inner page opens with. Big Ink type, nothing else. */
export default function PageHero({
  eyebrow,
  title,
  lead,
  top,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Rendered above the eyebrow, e.g. breadcrumbs. */
  top?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="bg-ember text-ink">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
        {top}
        <Eyebrow className={top ? "mt-10" : ""}>{eyebrow}</Eyebrow>
        <SplitText as="h1" text={title} className="display-lg mt-5 max-w-5xl sm:text-[clamp(2.75rem,6vw,5.5rem)]" stagger={0.03} />
        {lead && <p className="mt-8 max-w-2xl text-xl leading-[1.45] text-ink">{lead}</p>}
        {children}
      </div>
    </header>
  );
}
