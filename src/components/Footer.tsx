import Link from "next/link";
import Mark from "@/components/Mark";
import { REGION, SUPPORT_EMAIL } from "@/lib/constants";

const COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { href: "/about", label: "About" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/helpers", label: "Helpers" },
      { href: "/safety", label: "Safety" },
      { href: "/not-911", label: "Not 911" },
      { href: "/download", label: "Get the app" },
    ],
  },
  {
    heading: "Places",
    links: [
      { href: "/cities", label: "Cities" },
      { href: "/cities/fargo", label: "Fargo" },
      { href: "/cities/moorhead", label: "Moorhead" },
      { href: "/cities/west-fargo", label: "West Fargo" },
      { href: "/campuses", label: "Campuses" },
      { href: "/schools", label: "Schools" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/questions", label: "Answers" },
      { href: "/help", label: "Help topics" },
      { href: "/guides", label: "Guides" },
      { href: "/seasons", label: "Seasons" },
      { href: "/glossary", label: "Glossary" },
      { href: "/vs", label: "Versus" },
      { href: "/alternatives", label: "Alternatives" },
      { href: "/lists", label: "Lists" },
    ],
  },
  {
    heading: "Support",
    links: [
      { href: "/support/help", label: "Help Center" },
      { href: "/support/contact", label: "Contact" },
      { href: "/resources", label: "Official resources" },
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/explore", label: "Directory" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
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

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="eyebrow text-muted">{column.heading}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Help Me. All rights reserved.</p>
          <p className="text-xs text-muted">Help Me does not replace 911 or emergency services.</p>
        </div>
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted">
          <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-ink">
            {SUPPORT_EMAIL}
          </a>
          <Link href="/llms.txt" className="hover:text-ink">
            llms.txt
          </Link>
          <Link href="/sitemap.xml" className="hover:text-ink">
            sitemap.xml
          </Link>
          <Link href="/robots.txt" className="hover:text-ink">
            robots.txt
          </Link>
        </p>
      </div>
    </footer>
  );
}
