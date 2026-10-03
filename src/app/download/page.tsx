import type { Metadata } from "next";
import { dedicatedMetadata } from "@/lib/seo/metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QrCode from "@/components/QrCode";
import { AppBadge } from "@/components/AppBadge";
import { SplitText } from "@/components/motion/Reveal";
import { APP_URL, NOT_EMERGENCY_LINE } from "@/lib/constants";

export const metadata: Metadata = dedicatedMetadata({
  path: "/download",
  title: "Get the app",
  description:
    "Join the Help Me beta on TestFlight for iPhone. Neighbors helping neighbors with the small stuff in Fargo, West Fargo, and Moorhead.",
});

/** The page every share link points to: one screen, one action. */
export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ember text-ink">
        <div className="mx-auto grid min-h-svh max-w-7xl items-end gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="dash-label">Get the app</p>
            <SplitText as="h1" text="Want in?" className="display-hero mt-6" />
            <p className="subhead mt-6 max-w-xl text-2xl sm:text-3xl">
              Help Me is in beta on iPhone through TestFlight. Fargo, West Fargo, and Moorhead first.
            </p>
            <div className="mt-10">
              <AppBadge />
            </div>
            <p className="mt-10 max-w-xl border-t-2 border-ink pt-6 text-sm font-semibold leading-[1.5]">{NOT_EMERGENCY_LINE}</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-center">
            <QrCode value={APP_URL} size={200} label="Scan to open Help Me on TestFlight" />
            <span className="text-sm font-bold">Scan with your iPhone camera</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
