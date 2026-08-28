import { APP_URL } from "@/lib/constants";
import { IconArrowRight } from "@/components/icons";

/**
 * The one action on this site: get the app. It points at TestFlight today and
 * follows APP_URL wherever the build ships next.
 */
export function AppBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex h-14 items-center gap-3.5 rounded-full bg-ink px-6 text-bg shadow-lift-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${className}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.365 1.43c0 1.14-.462 2.208-1.216 2.99-.83.87-2.13 1.53-3.196 1.44-.146-1.107.417-2.28 1.183-3.02.83-.81 2.24-1.4 3.229-1.41zM20.6 17.03c-.51 1.18-.75 1.71-1.4 2.75-.91 1.45-2.19 3.26-3.78 3.27-1.41.02-1.77-.92-3.68-.91-1.9.01-2.31.93-3.72.92-1.59-.02-2.8-1.65-3.71-3.1-2.55-4.02-2.82-8.73-1.24-11.24 1.12-1.79 2.9-2.83 4.57-2.83 1.7 0 2.77.94 4.18.94 1.36 0 2.19-.94 4.16-.94 1.49 0 3.07.81 4.19 2.21-3.68 2.02-3.08 7.28.4 8.9z" />
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium uppercase tracking-[0.16em] opacity-60">Join the beta on</span>
        <span className="font-display mt-1 text-lg font-semibold">TestFlight</span>
      </span>
      <IconArrowRight size={18} className="opacity-50 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

/** Quiet secondary link, sized to sit beside the badge. */
export function GhostLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="group inline-flex h-14 items-center gap-2 rounded-full border border-line px-6 text-sm font-semibold text-ink/80 transition-colors hover:border-line-strong hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {children}
      <IconArrowRight size={16} className="opacity-50 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
