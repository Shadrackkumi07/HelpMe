import { APP_URL } from "@/lib/constants";
import { Magnetic } from "@/components/motion/Magnetic";

const APPLE_PATH =
  "M16.365 1.43c0 1.14-.462 2.208-1.216 2.99-.83.87-2.13 1.53-3.196 1.44-.146-1.107.417-2.28 1.183-3.02.83-.81 2.24-1.4 3.229-1.41zM20.6 17.03c-.51 1.18-.75 1.71-1.4 2.75-.91 1.45-2.19 3.26-3.78 3.27-1.41.02-1.77-.92-3.68-.91-1.9.01-2.31.93-3.72.92-1.59-.02-2.8-1.65-3.71-3.1-2.55-4.02-2.82-8.73-1.24-11.24 1.12-1.79 2.9-2.83 4.57-2.83 1.7 0 2.77.94 4.18.94 1.36 0 2.19-.94 4.16-.94 1.49 0 3.07.81 4.19 2.21-3.68 2.02-3.08 7.28.4 8.9z";

export function Arrow({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path className="t-learn-stem" d="M4 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * The one action on this site: get the app. Points at TestFlight today and
 * follows APP_URL wherever the build ships next.
 *
 * tone="ink": Ink pill, Paper text. For Paper and Ember grounds.
 * tone="paper": Paper pill, Ink text. For Ink grounds.
 */
export function AppBadge({ tone = "ink", className = "" }: { tone?: "ink" | "paper"; className?: string }) {
  const colors = tone === "ink" ? "bg-ink text-paper" : "bg-paper text-ink";
  return (
    <Magnetic>
      <a
        href={APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`t-learn group inline-flex h-16 items-center gap-4 rounded-full pl-6 pr-7 ${colors} transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.98] ${className}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d={APPLE_PATH} />
        </svg>
        <span className="flex flex-col items-start leading-none">
          <span className="text-xs font-semibold opacity-80">Join the beta on</span>
          <span className="subhead mt-1 text-xl">TestFlight</span>
        </span>
        <Arrow size={20} />
      </a>
    </Magnetic>
  );
}

/** Secondary text action with the learn-more arrow. */
export function GhostLink({ href, children, className = "" }: { href: string; children: string; className?: string }) {
  return (
    <a href={href} className={`t-learn h-16 px-2 text-base underline-offset-4 ${className}`}>
      {children}
      <Arrow size={18} />
    </a>
  );
}
