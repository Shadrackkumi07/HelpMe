import type { Metadata } from "next";
import { dedicatedMetadata } from "@/lib/seo/metadata";
import LegalPage from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = dedicatedMetadata({
  path: "/legal/privacy",
  title: "Privacy Policy",
  description:
    "How Help Me handles accounts, approximate location, private chat, reports, and account deletion during the TestFlight beta.",
});

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="August 2026">
      <p>
        Help Me handles real accounts, approximate locations, and safety reports. This summary describes how the
        app is built today, during the TestFlight beta. A full policy will replace it before the public App Store
        release, with retention periods and data-request detail spelled out in full.
      </p>
      <p>What holds true in the product right now:</p>
      <ul className="flex list-disc flex-col gap-2.5 pl-5">
        <li>
          An account is required, because requests, private chat, reports, saved events, and account deletion all
          belong to a person.
        </li>
        <li>
          Live help activity is shown as a coarse area, not a point. Precise location is shared only after a
          Helper is accepted and you consent, and only with that Helper.
        </li>
        <li>Private messages stay between the two people in the request. They are not sold or used to train models.</li>
        <li>
          You can report or block anyone, and delete your account yourself from Account inside the app.
        </li>
      </ul>
      <p>
        Privacy questions go to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-ink underline-offset-4 hover:underline">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </LegalPage>
  );
}
