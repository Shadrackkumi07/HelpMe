import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BloomMark from "@/components/BloomMark";

export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="dream-bg min-h-[70vh]">
        <div className="mx-auto max-w-2xl px-5 py-16 sm:py-24">
          <div className="flex items-center gap-2.5">
            <BloomMark size={28} />
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-raspberry/70">{eyebrow}</p>
          </div>
          <h1 className="mt-4 font-serif-display text-4xl font-semibold text-plum">{title}</h1>
          {updated && <p className="mt-2 font-body text-xs text-plum/45">Last updated {updated}</p>}
          <div className="prose-bloom mt-10 flex flex-col gap-5 font-body text-sm leading-relaxed text-plum/75">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
