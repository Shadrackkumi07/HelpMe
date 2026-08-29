import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/Eyebrow";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqList from "@/components/seo/FaqList";
import RelatedPages from "@/components/seo/RelatedPages";
import PageCta from "@/components/seo/PageCta";
import { childrenOf } from "@/lib/content/registry";
import { graphFor } from "@/lib/seo/schema";
import { PRODUCT_FACTS } from "@/lib/seo/site";
import type { SeoPage } from "@/lib/seo/types";
import DirectoryIndex from "@/components/seo/DirectoryIndex";

export default function ContentPage({ page }: { page: SeoPage }) {
  const children = childrenOf(page.slug);

  return (
    <>
      <JsonLd data={graphFor(page)} />
      <Navbar />
      <main className="spot-top min-h-[70vh]">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <Breadcrumbs page={page} />
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <h1 className="font-display display-md mt-4 text-ink">{page.h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{page.lead}</p>

          {page.answer && (
            <div className="mt-8 rounded-2xl border border-line bg-surface p-5 sm:p-6" aria-labelledby="answer-heading">
              <p id="answer-heading" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                Short answer
              </p>
              <p data-speakable className="mt-3 text-base leading-relaxed text-ink sm:text-[17px]">
                {page.answer}
              </p>
            </div>
          )}

          {page.takeaways && page.takeaways.length > 0 && (
            <section className="mt-8" aria-labelledby="takeaways-heading">
              <h2 id="takeaways-heading" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                The facts, in one place
              </h2>
              <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted">
                {page.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <div className="seo-prose mt-10">
            {page.sections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {page.steps && page.steps.length > 0 && (
            <section className="mt-14" aria-labelledby="steps-heading">
              <h2 id="steps-heading" className="font-display text-2xl font-semibold text-ink">
                Step by step
              </h2>
              <ol className="mt-6 flex flex-col gap-4">
                {page.steps.map((step, index) => (
                  <li
                    key={step.name}
                    id={`step-${index + 1}`}
                    className="rounded-2xl border border-line bg-surface p-5"
                  >
                    <p className="font-display text-base font-semibold text-ink">
                      <span className="text-muted">{index + 1}.</span> {step.name}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {page.listItems && page.listItems.length > 0 && (
            <section className="mt-14" aria-labelledby="list-heading">
              <h2 id="list-heading" className="font-display text-2xl font-semibold text-ink">
                The list
              </h2>
              <ol className="mt-6 flex flex-col gap-3">
                {page.listItems.map((item, index) => (
                  <li key={item.name} className="rounded-2xl border border-line bg-surface p-5">
                    <p className="font-display text-base font-semibold text-ink">
                      <span className="text-muted">{index + 1}.</span>{" "}
                      {item.href ? (
                        <Link href={item.href} className="underline-offset-4 hover:underline">
                          {item.name}
                        </Link>
                      ) : (
                        item.name
                      )}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {(page.slug === "explore" || page.slug === "sitemap-directory") && <DirectoryIndex />}

          {children.length > 0 && (
            <section className="mt-14" aria-labelledby="index-heading">
              <h2 id="index-heading" className="font-display text-2xl font-semibold text-ink">
                In this section
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {children.map((child) => (
                  <li key={child.slug}>
                    <Link
                      href={`/${child.slug}`}
                      className="block h-full rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
                    >
                      <p className="font-display text-base font-semibold text-ink">{child.h1}</p>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{child.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <FaqList faqs={page.faqs ?? []} />
          <RelatedPages slugs={page.related} />
          <PageCta />

          <p className="mt-10 text-xs leading-relaxed text-muted">{PRODUCT_FACTS.audience}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
