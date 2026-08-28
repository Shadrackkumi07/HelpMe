import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/Eyebrow";

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
      <main className="spot-top min-h-[70vh]">
        <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display display-md mt-4 text-ink">{title}</h1>
          {updated && <p className="mt-3 text-xs text-muted">Last updated {updated}</p>}
          <div className="mt-10 flex flex-col gap-5 text-sm leading-relaxed text-muted">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
