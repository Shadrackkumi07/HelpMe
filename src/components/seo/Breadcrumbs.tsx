import Link from "next/link";
import type { SeoPage } from "@/lib/seo/types";

function labelFromSlug(part: string): string {
  return part
    .split("-")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
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
    <nav aria-label="Breadcrumb" className="text-xs text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden>/</span>}
              {last ? (
                <span className="text-ink/70">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="transition-colors hover:text-ink">
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
