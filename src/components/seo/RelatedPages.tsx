import Link from "next/link";
import { Arrow } from "@/components/AppBadge";
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
    <section className="mt-20" aria-labelledby="related-heading">
      <h2 id="related-heading" className="display-md">
        Keep going
      </h2>
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/${page.slug}`}
              className="t-learn group flex h-full flex-col items-start rounded-[1.5rem] border-2 border-ink p-6 transition-colors duration-[250ms] hover:bg-ember"
            >
              <span className="text-sm font-bold">{page.eyebrow}</span>
              <span className="subhead mt-3 text-2xl">{page.h1}</span>
              <span className="mt-3 line-clamp-2 text-base font-normal leading-[1.5]">{page.description}</span>
              <span className="mt-auto pt-5">
                <Arrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
