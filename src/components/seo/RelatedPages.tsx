import Link from "next/link";
import { getPage, STATIC_ROUTES } from "@/lib/content/registry";

export default function RelatedPages({ slugs }: { slugs: string[] }) {
  const pages = slugs
    .map((slug) => {
      const fromCatalog = getPage(slug);
      if (fromCatalog) {
        return { slug: fromCatalog.slug, h1: fromCatalog.h1, description: fromCatalog.description, eyebrow: fromCatalog.eyebrow };
      }
      const fromStatic = STATIC_ROUTES.find((route) => route.slug === slug);
      if (fromStatic) {
        return { slug: fromStatic.slug, h1: fromStatic.title, description: fromStatic.description, eyebrow: fromStatic.eyebrow };
      }
      return null;
    })
    .filter((p) => p != null);
  if (!pages.length) return null;
  return (
    <section className="mt-14" aria-labelledby="related-heading">
      <h2 id="related-heading" className="font-display text-2xl font-semibold text-ink">
        Keep going
      </h2>
      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/${page.slug}`}
              className="block rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                {page.eyebrow}
              </p>
              <p className="font-display mt-2 text-base font-semibold text-ink">{page.h1}</p>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{page.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
