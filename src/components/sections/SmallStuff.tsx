import { Reveal, SplitText } from "@/components/motion/Reveal";
import { FOR_LINES, NOT_EMERGENCY_LINE, SMALL_ASKS } from "@/lib/constants";

function Marquee() {
  const row = [...SMALL_ASKS, ...SMALL_ASKS];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-sunbeam py-5" aria-hidden>
      <div className="marquee flex w-max items-center gap-8">
        {row.map((a, i) => (
          <span key={`${a}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
            <span className="subhead text-2xl text-ink sm:text-3xl">{a}</span>
            <span className="h-3 w-3 rounded-full bg-ink" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SmallStuff() {
  return (
    <section aria-label="What it's for, and what it's not for">
      <div className="bg-paper px-5 pb-24 pt-28 text-ink sm:px-8 sm:pb-32 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="dash-label">What it&apos;s for</p>
          <div className="mt-8">
            {FOR_LINES.map((l, i) => (
              <SplitText key={l} as="p" text={l} className="display-xl" delay={i * 0.05} />
            ))}
            <SplitText as="p" text="The small stuff." className="display-xl text-ember" delay={0.1} />
          </div>
        </div>
      </div>

      <Marquee />

      <div className="on-ink bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="dash-label">What it&apos;s not for</p>
            <SplitText as="p" text="Emergencies." className="display-xl mt-6" />
          </div>
          <Reveal>
            <p className="subhead rounded-[2rem] bg-paper p-8 text-2xl text-ink sm:p-10 sm:text-3xl">{NOT_EMERGENCY_LINE}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
