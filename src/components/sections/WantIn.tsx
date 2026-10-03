import Image from "next/image";
import { AppBadge } from "@/components/AppBadge";
import QrCode from "@/components/QrCode";
import { Reveal, SplitText } from "@/components/motion/Reveal";
import { APP_URL } from "@/lib/constants";

const POSTERS = [
  { src: "/brand/campaigns/campaign-01-ask-your-block.png", alt: "Poster: Ask your block." },
  { src: "/brand/campaigns/campaign-02-quick-favors-public-places.png", alt: "Poster: Quick favors. Public places." },
  { src: "/brand/campaigns/campaign-03-it-starts-with-me.png", alt: "Poster: It starts with me." },
  { src: "/brand/campaigns/campaign-04-the-small-stuff.png", alt: "Poster: The small stuff." },
];

/** The close: I could use this, and I could help someone too. */
export default function WantIn() {
  const rail = [...POSTERS, ...POSTERS];
  return (
    <section id="download" className="on-ink scroll-mt-20 overflow-hidden bg-ink pt-28 text-paper sm:pt-40" aria-label="Want in?">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="dash-label">Get involved</p>
        <SplitText as="h2" text="Want in?" className="display-hero mt-6" />
        <SplitText
          as="p"
          text="Ask for a hand. Say yes to one."
          className="display-lg mt-6 max-w-4xl text-ember"
          delay={0.15}
        />

        <div className="mt-14 grid gap-10 border-t-2 border-paper pt-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <Reveal>
            <p className="max-w-lg text-lg leading-[1.5]">
              Help Me is in beta on iPhone through TestFlight. Join from your phone, or scan the code. Fargo, West Fargo, and Moorhead first.
            </p>
            <div className="mt-8">
              <AppBadge tone="paper" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="hidden sm:block">
            <QrCode value={APP_URL} size={168} label="QR code to join the Help Me beta on TestFlight" />
          </Reveal>
        </div>
      </div>

      <div className="mt-24 pb-24" aria-label="Campaign posters">
        <div className="marquee-slow flex w-max gap-5">
          {rail.map((p, i) => (
            <div key={`${p.src}-${i}`} className="w-[260px] shrink-0 overflow-hidden rounded-[1.5rem] sm:w-[320px]" aria-hidden={i >= POSTERS.length}>
              <Image src={p.src} alt={i >= POSTERS.length ? "" : p.alt} width={1080} height={1350} sizes="320px" className="h-auto w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
