import { Reveal, SplitText } from "@/components/motion/Reveal";
import { PLACES } from "@/lib/constants";

/** Where it starts. A factual launch claim, no counters, no "spots left". */
export default function ZoneByZone() {
  return (
    <section className="bg-ember px-5 py-28 text-ink sm:px-8 sm:py-40" aria-label="Where it starts">
      <div className="mx-auto max-w-7xl">
        <p className="dash-label">Where it starts</p>
        <div className="mt-6">
          <SplitText as="p" text="Here." className="display-hero" />
          <SplitText as="p" text="Then zone by zone." className="display-hero" delay={0.1} />
        </div>
        <div className="mt-16 grid gap-10 border-t-2 border-ink pt-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="subhead text-3xl sm:text-4xl">Help Me is launching in Fargo-Moorhead first, one zone at a time.</p>
          </Reveal>
          <ul className="flex flex-wrap content-start gap-3">
            {PLACES.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 0.06}>
                <span className="inline-flex h-14 items-center rounded-full border-2 border-ink px-6 text-lg font-bold">{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
