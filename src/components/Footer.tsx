import Link from "next/link";
import MasterLine from "@/components/MasterLine";
import { NOT_EMERGENCY_LINE, SUPPORT_EMAIL } from "@/lib/constants";

const COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Help Me",
    links: [
      { href: "/about", label: "About" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/helpers", label: "Helping" },
      { href: "/ground-rules", label: "Ground rules" },
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
      { href: "/neighborhoods", label: "Neighborhoods" },
      { href: "/campuses", label: "Campuses" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/questions", label: "Answers" },
      { href: "/help", label: "The small stuff" },
      { href: "/guides", label: "Guides" },
      { href: "/seasons", label: "Seasons" },
      { href: "/glossary", label: "Glossary" },
      { href: "/lists", label: "Lists" },
    ],
  },
  {
    heading: "Support",
    links: [
      { href: "/support/help", label: "Help center" },
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
    <footer className="on-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-28">
        <MasterLine ground="ink" as="p" stacked={false} className="!text-[clamp(3rem,10.5vw,10rem)]" />
        <p className="subhead mt-6 text-2xl text-paper sm:text-3xl">Your block is closer than you think.</p>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t-2 border-paper pt-12 lg:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="text-sm font-bold text-paper">{column.heading}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.95rem] text-paper transition-colors duration-[150ms] hover:text-ember"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t-2 border-paper pt-8">
          <p className="subhead max-w-3xl text-xl text-paper sm:text-2xl">{NOT_EMERGENCY_LINE}</p>
          <div className="mt-8 flex flex-col gap-3 text-sm text-paper sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Help Me LLC, Fargo, ND. The &quot;me&quot; mark™ is a trademark of Help Me LLC.
            </p>
            <p className="flex flex-wrap gap-x-5 gap-y-1">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-ember">
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
