import type { Metadata } from "next";
import { dedicatedMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import JsonLd from "@/components/seo/JsonLd";
import FaqList from "@/components/seo/FaqList";
import { REGION } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = dedicatedMetadata({
  path: "/support/help",
  title: "Help Center",
  description:
    "What Help Me is, what you can ask for, who sees your location, how to become a helper, and how to delete your account.",
});

const FAQS = [
  {
    q: "What is Help Me?",
    a: "A place to ask your block for the small stuff. You post what you need, a neighbor who helps through Help Me can say yes, and the two of you sort it out in a private chat.",
  },
  {
    q: "What can I ask for?",
    a: "Quick favors in public places. A phone charger at the library, directions to the right door, someone to watch your seat, a jump start in daylight, two more hands for a couch. If it isn't an emergency and it's small, it belongs here.",
  },
  {
    q: "Is this an emergency service?",
    a: "No. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
  },
  {
    q: "Who can see where I am?",
    a: "Live requests show on the map as a rough area, not a pin on you. More precise location is shared only after a helper accepts and you agree to share it, and only with that person.",
  },
  {
    q: "How do I become a helper?",
    a: "Apply from inside the app. You submit identity evidence and our team reviews it. Helping needs a current review; a past one does not carry over. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
  },
  {
    q: "What if something feels off?",
    a: "You can report or block any member at any time, from inside the request or the chat. Meet in public places.",
  },
  {
    q: "Where does Help Me work?",
    a: `Help Me is launching in ${REGION} first, one zone at a time: Fargo, West Fargo, and Moorhead.`,
  },
  {
    q: "How do I get the app?",
    a: "Help Me is in beta on TestFlight for iPhone (iOS 15 or later). Every Join the beta button on this site takes you straight there.",
  },
  {
    q: "How do I delete my account?",
    a: "Open Account in the app and choose delete. You confirm by typing DELETE. It is your account and you can end it yourself.",
  },
];

export default function HelpCenterPage() {
  const faqGraph = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
    url: `${SITE_URL}/support/help`,
  };

  return (
    <LegalPage eyebrow="Support" title="Help Center">
      <JsonLd data={faqGraph} />
      <p>
        The questions we hear most. Not here?{" "}
        <Link href="/support/contact">Contact us</Link>. A person answers.
      </p>
      <div className="-mt-12">
        <FaqList faqs={FAQS} />
      </div>
    </LegalPage>
  );
}
