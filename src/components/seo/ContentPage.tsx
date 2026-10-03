import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/AppBadge";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqList from "@/components/seo/FaqList";
import RelatedPages from "@/components/seo/RelatedPages";
import PageCta from "@/components/seo/PageCta";
import DirectoryIndex from "@/components/seo/DirectoryIndex";
import { childrenOf } from "@/lib/content/registry";
import { graphFor } from "@/lib/seo/schema";
import { PRODUCT_FACTS } from "@/lib/seo/site";
import type { SeoPage } from "@/lib/seo/types";

export default function ContentPage({ page }: { page: SeoPage }) {
  const children = childrenOf(page.slug);

  return (
    <>
      <JsonLd data={graphFor(page)} />
      <Navbar />
      <main className="min-h-[70vh]">
        <PageHero eyebrow={page.eyebrow} title={page.h1} lead={page.lead} top={<Breadcrumbs page={page} />} />

        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          {page.answer && (
            <div className="rounded-[2rem] bg-ink p-7 text-paper sm:p-10" aria-labelledby="answer-heading">
              <p id="answer-heading" className="dash-label text-sunbeam">
                Short answer
              </p>
              <p data-speakable className="subhead mt-5 text-xl leading-[1.35] sm:text-2xl">
                {page.answer}
              </p>
            </div>
          )}

          {page.takeaways && page.takeaways.length > 0 && (
            <section className="mt-12" aria-labelledby="takeaways-heading">
              <h2 id="takeaways-heading" className="dash-label">
                The facts, in one place
              </h2>
              <ul className="mt-6 border-t-2 border-ink">
                {page.takeaways.map((item) => (
                  <li key={item} className="flex gap-4 border-b-2 border-ink py-4 text-base leading-[1.5]">
                    <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 bg-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="seo-prose">
            {page.sections.map((section) => (
              <section key={section.heading} className="mt-16">
                <h2 className="display-md">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-5">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-5 flex flex-col gap-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-4">
                        <span aria-hidden className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-ember" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {page.steps && page.steps.length > 0 && (
            <section className="mt-20" aria-labelledby="steps-heading">
              <h2 id="steps-heading" className="display-md">
                Step by step
              </h2>
              <ol className="mt-8 border-t-2 border-ink">
                {page.steps.map((step, index) => (
                  <li key={step.name} id={`step-${index + 1}`} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b-2 border-ink py-6">
                    <span className="display-md text-ember">{index + 1}</span>
                    <div>
                      <p className="subhead text-xl">{step.name}</p>
                      <p className="mt-2 text-base leading-[1.55]">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {page.listItems && page.listItems.length > 0 && (
            <section className="mt-20" aria-labelledby="list-heading">
              <h2 id="list-heading" className="display-md">
                The list
              </h2>
              <ol className="mt-8 border-t-2 border-ink">
                {page.listItems.map((item, index) => (
                  <li key={item.name} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b-2 border-ink py-6">
                    <span className="display-md text-ember">{index + 1}</span>
                    <div>
                      <p className="subhead text-xl">
                        {item.href ? (
                          <Link href={item.href} className="underline decoration-2 underline-offset-4 hover:decoration-ember">
                            {item.name}
                          </Link>
                        ) : (
                          item.name
                        )}
                      </p>
                      <p className="mt-2 text-base leading-[1.55]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {(page.slug === "explore" || page.slug === "sitemap-directory") && <DirectoryIndex />}

          {children.length > 0 && (
            <section className="mt-20" aria-labelledby="index-heading">
              <h2 id="index-heading" className="display-md">
                In this section
              </h2>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {children.map((child) => (
                  <li key={child.slug}>
                    <Link
                      href={`/${child.slug}`}
                      className="t-learn flex h-full flex-col items-start rounded-[1.5rem] border-2 border-ink p-6 transition-colors duration-[250ms] hover:bg-ember"
                    >
                      <span className="subhead text-xl">{child.h1}</span>
                      <span className="mt-2 line-clamp-3 text-base font-normal leading-[1.5]">{child.description}</span>
                      <span className="mt-auto pt-4">
                        <Arrow />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <FaqList faqs={page.faqs ?? []} />
          <RelatedPages slugs={page.related} />
          <PageCta />

          <p className="mt-10 text-sm leading-[1.5]">{PRODUCT_FACTS.audience}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
