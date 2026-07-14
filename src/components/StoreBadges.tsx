"use client";

import { APP_STORE_URL } from "@/lib/constants";

/**
 * Self-drawn App Store badge. It goes to "coming soon" until the real
 * listing URL is set in src/lib/constants.ts.
 */

function BadgeShell({
  href,
  ready,
  ariaLabel,
  children,
}: {
  href: string;
  ready: boolean;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={ready ? href : undefined}
      aria-disabled={!ready}
      aria-label={ready ? ariaLabel : `${ariaLabel}, coming soon`}
      target={ready ? "_blank" : undefined}
      rel={ready ? "noopener noreferrer" : undefined}
      onClick={(event) => {
        if (!ready) event.preventDefault();
      }}
      className="group relative flex h-14 min-w-[168px] items-center gap-3 rounded-xl bg-[#0b0b0d] px-4 text-white shadow-petal-sm transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raspberry focus-visible:ring-offset-2 focus-visible:ring-offset-blush hover:-translate-y-0.5 aria-disabled:cursor-default aria-disabled:opacity-60 aria-disabled:hover:translate-y-0"
    >
      {children}
      {!ready && (
        <span className="absolute -top-2 right-2 rounded-full bg-gold px-2 py-0.5 font-body text-[9px] font-bold uppercase tracking-wide text-plum shadow">
          Soon
        </span>
      )}
    </a>
  );
}

export function AppleBadge() {
  return (
    <BadgeShell href={APP_STORE_URL} ready={APP_STORE_URL !== "#"} ariaLabel="Download on the App Store">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.365 1.43c0 1.14-.462 2.208-1.216 2.99-.83.87-2.13 1.53-3.196 1.44-.146-1.107.417-2.28 1.183-3.02.83-.81 2.24-1.4 3.229-1.41zM20.6 17.03c-.51 1.18-.75 1.71-1.4 2.75-.91 1.45-2.19 3.26-3.78 3.27-1.41.02-1.77-.92-3.68-.91-1.9.01-2.31.93-3.72.92-1.59-.02-2.8-1.65-3.71-3.1-2.55-4.02-2.82-8.73-1.24-11.24 1.12-1.79 2.9-2.83 4.57-2.83 1.7 0 2.77.94 4.18.94 1.36 0 2.19-.94 4.16-.94 1.49 0 3.07.81 4.19 2.21-3.68 2.02-3.08 7.28.4 8.9z" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="font-body text-[10px] leading-none opacity-80">Download on the</span>
        <span className="font-body text-lg font-semibold leading-tight tracking-tight">App Store</span>
      </span>
    </BadgeShell>
  );
}

export function StoreBadgeRow({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
      <AppleBadge />
    </div>
  );
}
