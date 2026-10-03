"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/seo/types";

/** transitions.dev #21 accordion: the panel grows via grid rows, the plus turns to a cross. */
function Faq({ faq }: { faq: FaqItem }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="border-b-2 border-ink">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-6 py-6 text-left"
        >
          <span className="subhead text-xl sm:text-2xl">{faq.q}</span>
          <span
            aria-hidden
            className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-xl leading-none text-paper transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: open ? "rotate(45deg)" : "none" }}
          >
            +
          </span>
        </button>
      </h3>
      <div id={id} role="region" className="t-acc" data-open={open}>
        <div>
          <p className="max-w-2xl pb-7 text-base leading-[1.6]">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqList({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs.length) return null;
  return (
    <section className="mt-20" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="display-md">
        Questions people actually ask
      </h2>
      <div className="mt-8 border-t-2 border-ink">
        {faqs.map((faq) => (
          <Faq key={faq.q} faq={faq} />
        ))}
      </div>
    </section>
  );
}
