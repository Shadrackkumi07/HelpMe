import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Help Center · Help Me" };

const FAQS = [
  {
    q: "What is Help Me?",
    a: "Help Me is a community platform built around places. Every public location can have a living community page with events, announcements, and ways to ask for or offer help.",
  },
  {
    q: "How is this different from social media?",
    a: "Help Me is not built around following people. It is built around places. When you arrive somewhere, you can quickly see what is happening there.",
  },
  {
    q: "Who can post on a place page?",
    a: "Community members can share updates and help requests. Organizations, businesses, and community leaders can post announcements and events to keep visitors informed.",
  },
  {
    q: "What kinds of help can I ask for?",
    a: "Everyday things: directions, carrying something, information about a location, or assistance during an event. As the platform grows, trusted local professionals will be easier to find too.",
  },
  {
    q: "Which platforms is Help Me coming to?",
    a: "Help Me is coming first to iPhone, as an installed iOS app. This site will link straight to the App Store listing when it is live.",
  },
];

export default function HelpCenterPage() {
  return (
    <LegalPage eyebrow="support" title="Help Center">
      <p>Answers to the questions we hear most. Cannot find yours?{" "}
        <Link href="/support/contact" className="font-semibold text-raspberry-deep underline-offset-2 hover:underline">
          Contact us
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-4">
        {FAQS.map((faq) => (
          <div key={faq.q} className="rounded-2xl bg-white/70 p-5 shadow-petal-sm">
            <p className="font-body text-sm font-bold text-plum">{faq.q}</p>
            <p className="mt-1.5 font-body text-sm leading-relaxed text-plum/65">{faq.a}</p>
          </div>
        ))}
      </div>
    </LegalPage>
  );
}
