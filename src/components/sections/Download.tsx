import Mark from "@/components/Mark";
import QrCode from "@/components/QrCode";
import { AppBadge } from "@/components/AppBadge";
import { APP_URL, REGION } from "@/lib/constants";

/**
 * The closing ask. The QR points straight at TestFlight so a laptop visitor can
 * be holding the app on their phone ten seconds later.
 */
export default async function Download() {
  return (
    <section id="download" className="spot-forest relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <div className="rise">
          <Mark size={72} />
        </div>
        <h2 className="font-display display-lg mt-9 text-ink">Someone&rsquo;s coming.</h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted">
          Help Me is live on iPhone in {REGION}. Join the beta and be one of the people who shows up.
        </p>

        <div className="mt-10">
          <AppBadge />
        </div>

        <div className="mt-14 flex flex-col items-center gap-3">
          <QrCode value={APP_URL} label="Scan to open Help Me on TestFlight" />
          <span className="text-xs font-medium text-muted">Scan to install on your iPhone</span>
        </div>

        <p className="mt-12 text-xs text-muted">iPhone · iOS 15 or later · TestFlight beta</p>
      </div>
    </section>
  );
}
