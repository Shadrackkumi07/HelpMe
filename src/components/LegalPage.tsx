import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

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
      <main className="min-h-[70vh]">
        <PageHero eyebrow={eyebrow} title={title}>
          {updated && <p className="mt-6 text-sm font-semibold">Last updated {updated}</p>}
        </PageHero>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="seo-prose flex flex-col gap-5 text-ink">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
