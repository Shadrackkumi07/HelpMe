import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = { title: "Terms of Service · Help Me" };

export default function TermsPage() {
  return (
    <LegalPage eyebrow="legal" title="Terms of Service" updated="August 2026">
      <p>
        These terms cover the Help Me TestFlight beta. A complete Terms of Service will replace this page before
        the public App Store release, covering accounts, community content, Helper approval, and any paid services
        in full.
      </p>
      <p>
        In short: use Help Me to ask for practical help and to give it. You are responsible for what you post, the
        help you request or offer, and how you treat the person on the other end. No harassment, fraud, spam, or
        anything unlawful.
      </p>
      <p>
        Help Me is not an emergency service and does not replace 911. Helpers are approved community members, not
        licensed professionals or first responders. Meet in public, use your judgement, and use the report and
        block tools when something is wrong.
      </p>
      <p>
        The Help Me name, logo, and related marks are trademarks of Help Me. You may not use them without
        permission, beyond fair descriptive reference to the product itself.
      </p>
      <p>
        Questions about these terms go to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-ink underline-offset-4 hover:underline">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </LegalPage>
  );
}
