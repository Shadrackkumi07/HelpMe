import Image from "next/image";
import BloomMark from "@/components/BloomMark";
import QrCode from "@/components/QrCode";
import { StoreBadgeRow } from "@/components/StoreBadges";
import { SITE_URL } from "@/lib/constants";

/**
 * Async Server Component: the QR codes are generated on the server (no
 * third-party network call) and point at this site's own /download page
 * today. The moment real store URLs are set in lib/constants.ts, that page
 * (and every badge) updates automatically with zero design changes needed.
 */
export default async function Download() {
  const downloadUrl = `${SITE_URL.replace(/\/$/, "")}/download`;

  return (
    <section id="download" className="night-bg relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]">
        <Image src="/logo.png" alt="" fill sizes="420px" className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <div className="float-slow">
          <BloomMark size={88} onDark />
        </div>
        <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.28em] text-white/45">Help Me</p>
        <h2 className="mt-2 font-serif-display text-4xl font-semibold text-white sm:text-5xl">Join your community today</h2>
        <p className="mx-auto mt-4 max-w-md font-body text-base leading-relaxed text-white/75">
          Help Me is coming soon for iPhone. Get it from the App Store, or scan the code on your phone to be first
          in line.
        </p>

        <div className="mt-9">
          <StoreBadgeRow />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
          <div className="flex flex-col items-center gap-2">
            <QrCode value={downloadUrl} label="Scan to open the Help Me download page" />
            <span className="font-body text-xs font-semibold text-white/60">Scan to download</span>
          </div>
        </div>
      </div>
    </section>
  );
}
