import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { REGION } from "@/lib/constants";

export const metadata: Metadata = { title: "Help Center · Help Me" };

const FAQS = [
  {
    q: "What is Help Me?",
    a: "A way to ask for practical help from people nearby, and a way to give it. You post what you need, an approved Helper nearby can accept, and the two of you sort it out in a private chat.",
  },
  {
    q: "What can I ask for?",
    a: "Everyday things. A jump start, directions, a walk to your car, a hand carrying something, a study session. If it stops your day but is not an emergency, it belongs here.",
  },
  {
    q: "Is this an emergency service?",
    a: "No. Help Me does not replace 911 or any official emergency service. If you are in danger, call emergency services first.",
  },
  {
    q: "Who can see where I am?",
    a: "Live help shows on the map as an approximate area, not a pin on you. Precise location is shared only after a Helper is accepted and you consent to share it, and only with that person.",
  },
  {
    q: "How do I become a Helper?",
    a: "Apply from inside the app. You submit identity evidence and a staff member reviews it. Until that approval is granted you cannot see or accept requests, and approval has to be current — a past label does not carry over.",
  },
  {
    q: "Where does Help Me work?",
    a: `Help Me is built for ${REGION} first, including campus and regional event calendars from local sources.`,
  },
  {
    q: "How do I get the app?",
    a: "Help Me is on TestFlight for iPhone (iOS 15 or later). The Get the app button anywhere on this site takes you straight there.",
  },
  {
    q: "How do I delete my account?",
    a: "Open Account in the app and choose delete. You confirm by typing DELETE. It is your account and you can end it yourself.",
  },
];

export default function HelpCenterPage() {
  return (
    <LegalPage eyebrow="support" title="Help Center">
      <p>
        The questions we hear most. Not here?{" "}
        <Link href="/support/contact" className="font-semibold text-ink underline-offset-4 hover:underline">
          Contact us
        </Link>{" "}
        — a person answers.
      </p>
      <div className="mt-4 flex flex-col gap-3">
        {FAQS.map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-line bg-surface p-6">
            <p className="font-display text-base font-semibold text-ink">{faq.q}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
          </div>
        ))}
      </div>
    </LegalPage>
  );
}
