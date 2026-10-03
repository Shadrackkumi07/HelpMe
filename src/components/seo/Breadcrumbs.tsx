import Link from "next/link";
import type { SeoPage } from "@/lib/seo/types";

function labelFromSlug(part: string): string {
  const s = part.replace(/-/g, " ");
  return s.length ? s[0].toUpperCase() + s.slice(1) : s;
}

export default function Breadcrumbs({ page }: { page: SeoPage }) {
  const parts = page.slug ? page.slug.split("/") : [];
  const crumbs: { href: string; label: string }[] = [{ href: "/", label: "Home" }];
  let acc = "";
  parts.forEach((part, index) => {
    acc += `/${part}`;
    crumbs.push({
      href: acc,
      label: index === parts.length - 1 ? page.h1 : labelFromSlug(part),
    });
  });

  return (
    <nav aria-label="Breadcrumb" className="text-sm font-semibold text-ink">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden>/</span>}
              {last ? (
                <span aria-current="page" className="line-clamp-1 max-w-[22ch] font-normal">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="underline decoration-2 underline-offset-4 hover:no-underline">
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
