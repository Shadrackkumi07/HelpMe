import Link from "next/link";
import { Arrow } from "@/components/AppBadge";
import { Reveal, SplitText } from "@/components/motion/Reveal";
import { HELPER_REVIEW_LINE, HELPER_STEPS, REPORT_LINE } from "@/lib/constants";

/** The other half of the turn: you could be the one who says yes. */
export default function BeTheOne() {
  return (
    <section className="bg-paper px-5 py-28 text-ink sm:px-8 sm:py-40" aria-label="Be the one who says yes">
      <div className="mx-auto max-w-7xl">
        <p className="dash-label">Next time, it could be you</p>
        <SplitText as="h2" text="Be the one who says yes." highlight={["yes."]} className="display-xl mt-6 max-w-5xl" />

        <ol className="mt-16 grid gap-4 md:grid-cols-3">
          {HELPER_STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="flex min-h-64 flex-col justify-between rounded-[2rem] border-2 border-ink p-8">
              <p className="display-md text-ember">{i + 1}</p>
              <div>
                <h3 className="subhead text-3xl">{s.title}</h3>
                <p className="mt-3 text-base leading-[1.5]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-4">
          <div className="flex flex-col gap-6 rounded-[2rem] bg-sunbeam p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="subhead text-2xl sm:text-3xl">{HELPER_REVIEW_LINE}</p>
              <p className="mt-4 text-lg font-semibold">{REPORT_LINE}</p>
            </div>
            <Link href="/helpers" className="t-learn shrink-0 text-lg">
              How helping works
              <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
