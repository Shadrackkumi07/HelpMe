import type { FaqItem } from "@/lib/seo/types";

export default function FaqList({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs.length) return null;
  return (
    <section className="mt-14" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-display text-2xl font-semibold text-ink">
        Questions people actually ask
      </h2>
      <div className="mt-6 flex flex-col gap-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-2xl border border-line bg-surface px-5 py-4"
          >
            <summary className="cursor-pointer list-none font-display text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {faq.q}
                <span aria-hidden className="mt-0.5 text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
