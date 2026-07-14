import Link from "next/link";
import BloomMark from "@/components/BloomMark";
import { SUPPORT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-rose-light/60 bg-blush">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <BloomMark size={44} />
              <span className="flex flex-col leading-none">
                <span className="font-serif-display text-2xl font-semibold text-plum">Help Me</span>
                <span className="mt-1 font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-plum/40">
                  Community starts here
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-plum/60">
              Your community starts here. Connect with the places and people around you.
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-plum/45">Legal</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              <li>
                <Link href="/legal/terms" className="font-body text-sm text-plum/70 hover:text-raspberry-deep">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="font-body text-sm text-plum/70 hover:text-raspberry-deep">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-plum/45">Support</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              <li>
                <Link href="/support/help" className="font-body text-sm text-plum/70 hover:text-raspberry-deep">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="font-body text-sm text-plum/70 hover:text-raspberry-deep">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="font-body text-sm text-plum/70 hover:text-raspberry-deep">
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-rose-light/60 pt-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <BloomMark size={18} plain className="!rounded-md opacity-80" />
            <p className="font-body text-xs text-plum/50">© {new Date().getFullYear()} Help Me. All rights reserved.</p>
          </div>
          <p className="font-body text-xs text-plum/40">Built for the places we share.</p>
        </div>
      </div>
    </footer>
  );
}
