import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mark from "@/components/Mark";
import QrCode from "@/components/QrCode";
import { AppBadge } from "@/components/AppBadge";
import { APP_URL, REGION } from "@/lib/constants";

export const metadata: Metadata = { title: "Get Help Me" };

/** The page every share link points to: one screen, one action. */
export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="spot-top relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
        <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative z-10 flex flex-col items-center">
          <Mark size={84} preload />
          <h1 className="font-display display-lg mt-8 text-ink">Get Help Me</h1>
          <p className="mx-auto mt-5 max-w-sm text-base leading-relaxed text-muted">
            Live on TestFlight for iPhone in {REGION}. Install it, and you are one tap from asking — or from
            answering.
          </p>

          <div className="mt-9">
            <AppBadge />
          </div>

          <div className="mt-12 flex flex-col items-center gap-3">
            <QrCode value={APP_URL} label="Scan to open Help Me on TestFlight" />
            <span className="text-xs font-medium text-muted">Scan with your iPhone camera</span>
          </div>

          <p className="mt-10 max-w-xs text-xs text-muted">
            Bookmark this page. It always points at the current iOS release.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
