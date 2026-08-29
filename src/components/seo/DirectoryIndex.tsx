import Link from "next/link";
import { allPages, pagesByKind } from "@/lib/content/registry";
import type { PageKind } from "@/lib/seo/types";

const GROUPS: { kind: PageKind; label: string }[] = [
  { kind: "core", label: "Product" },
  { kind: "audience", label: "Who it’s for" },
  { kind: "hub", label: "Indexes" },
  { kind: "question", label: "Direct answers" },
  { kind: "season", label: "Seasons" },
  { kind: "city", label: "Cities" },
  { kind: "neighborhood", label: "Neighborhoods" },
  { kind: "campus", label: "Campuses" },
  { kind: "school", label: "Schools" },
  { kind: "help", label: "Help topics" },
  { kind: "guide", label: "Guides" },
  { kind: "list", label: "Lists" },
  { kind: "glossary", label: "Glossary" },
  { kind: "vs", label: "Versus" },
  { kind: "alternative", label: "Alternatives" },
  { kind: "resource", label: "Official resources" },
];

export default function DirectoryIndex() {
  const total = allPages().length;
  return (
    <section className="mt-14" aria-labelledby="directory-heading">
      <h2 id="directory-heading" className="font-display text-2xl font-semibold text-ink">
        {total} public pages
      </h2>
      <div className="mt-8 flex flex-col gap-10">
        {GROUPS.map((group) => {
          const pages = pagesByKind(group.kind).filter((p) => p.slug !== "explore" && p.slug !== "sitemap-directory");
          if (!pages.length) return null;
          return (
            <div key={group.kind}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{group.label}</h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {pages.map((entry) => (
                  <li key={entry.slug}>
                    <Link href={`/${entry.slug}`} className="text-sm text-ink/80 underline-offset-4 hover:text-ink hover:underline">
                      {entry.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
