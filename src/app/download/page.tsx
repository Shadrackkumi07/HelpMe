import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BloomMark from "@/components/BloomMark";
import FloatingPetals from "@/components/FloatingPetals";
import { StoreBadgeRow } from "@/components/StoreBadges";

export const metadata: Metadata = { title: "Download Help Me" };

/** The page every QR code and share link points to: a mobile friendly download landing spot. */
export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="dream-bg relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
        <FloatingPetals count={8} />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 opacity-[0.08]">
          <Image src="/logo.png" alt="" fill sizes="256px" className="object-contain" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <BloomMark size={96} priority />
          <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.28em] text-plum/45">Help Me</p>
          <h1 className="mt-2 font-serif-display text-4xl font-semibold text-raspberry-deep">Get Help Me</h1>
          <p className="mx-auto mt-4 max-w-sm font-body text-base leading-relaxed text-plum/65">
            Help Me is coming soon for iPhone. Get it from the App Store the moment it is live.
          </p>
          <div className="mt-8">
            <StoreBadgeRow />
          </div>
          <p className="mt-8 max-w-xs font-body text-xs text-plum/45">
            Bookmark this page. It will always point to the latest iOS release.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
