import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = { title: "Terms of Service · Help Me" };

export default function TermsPage() {
  return (
    <LegalPage eyebrow="legal" title="Terms of Service" updated="July 2026">
      <p>
        These terms are placeholders while Help Me is in beta. A complete Terms of Service will replace this page
        before public launch, covering account use, community content, place pages, and any paid services in full.
      </p>
      <p>
        In short: use Help Me to connect with places and people around you. You are responsible for what you post,
        the help you request or offer, and how you treat other community members. Do not use Help Me for harassment,
        fraud, spam, or anything unlawful.
      </p>
      <p>
        Help Me, the Help Me name, logos, and related marks are trademarks of Help Me. You may not use them without
        permission, except for fair descriptive reference to the product itself.
      </p>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-raspberry-deep underline-offset-2 hover:underline">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </LegalPage>
  );
}
