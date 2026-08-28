import Link from "next/link";
import Mark from "@/components/Mark";
import { REGION, SUPPORT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Mark size={40} />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold text-ink">Help Me</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  See Beyond
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Connecting people in need with trusted Helpers nearby. Built in {REGION}.
            </p>
          </div>

          <div>
            <p className="eyebrow text-muted">Legal</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/legal/terms" className="text-sm text-muted transition-colors hover:text-ink">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-sm text-muted transition-colors hover:text-ink">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted">Support</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/support/help" className="text-sm text-muted transition-colors hover:text-ink">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="text-sm text-muted transition-colors hover:text-ink">
                  Contact
                </Link>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-sm text-muted transition-colors hover:text-ink">
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Help Me. All rights reserved.</p>
          <p className="text-xs text-muted">Help Me does not replace 911 or emergency services.</p>
        </div>
      </div>
    </footer>
  );
}
