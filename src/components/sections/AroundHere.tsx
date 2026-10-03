import Link from "next/link";
import { Arrow } from "@/components/AppBadge";
import { Reveal, SplitText } from "@/components/motion/Reveal";

/**
 * Real, crawlable links from the homepage into every hub. The homepage is the
 * strongest page on the site, so this is where the hubs borrow their authority.
 * Static on purpose: no counts, no "live" anything.
 */
const LINKS: { href: string; label: string; note: string }[] = [
  { href: "/cities/fargo", label: "Fargo", note: "Broadway, North Fargo, West Acres, the south side." },
  { href: "/cities/west-fargo", label: "West Fargo", note: "Sheyenne Street, The Lights, and a calendar of its own." },
  { href: "/cities/moorhead", label: "Moorhead", note: "Center Avenue, the campuses, and the Minnesota side." },
  { href: "/neighborhoods", label: "Neighborhoods", note: "Where to meet in nine parts of the metro." },
  { href: "/help", label: "The small stuff", note: "A charger, directions, a jump start in daylight." },
  { href: "/guides", label: "Guides", note: "How to ask, how to help, how to meet in public." },
  { href: "/questions", label: "Questions", note: "Plain answers, one question per page." },
  { href: "/resources", label: "Official help", note: "Police, 211, campus public safety, county services." },
  { href: "/lists", label: "Lists", note: "Public meeting places, winter lots, the numbers to save." },
  { href: "/seasons", label: "The year here", note: "Batteries in January, boxes in August." },
];

export default function AroundHere() {
  return (
    <section className="bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32" aria-label="Around Fargo-Moorhead">
      <div className="mx-auto max-w-7xl">
        <p className="dash-label">Around Fargo-Moorhead</p>
        <SplitText as="h2" text="Find your block." className="display-xl mt-6" />
        <ul className="mt-14 grid border-t-2 border-ink sm:grid-cols-2">
          {LINKS.map((l, i) => (
            <Reveal as="li" key={l.href} delay={(i % 2) * 0.06} className="border-b-2 border-ink sm:odd:border-r-2 sm:odd:pr-8 sm:even:pl-8">
              <Link href={l.href} className="t-learn group flex items-start justify-between gap-6 py-7">
                <span>
                  <span className="subhead block text-3xl sm:text-4xl">{l.label}</span>
                  <span className="mt-2 block text-base font-normal leading-[1.45]">{l.note}</span>
                </span>
                <span className="mt-2 shrink-0">
                  <Arrow size={24} />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
