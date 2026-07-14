import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = { title: "Privacy Policy · Help Me" };

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="legal" title="Privacy Policy" updated="July 2026">
      <p>
        This page is a placeholder while Help Me is in beta. A complete Privacy Policy will replace it before
        public launch, detailing exactly what is collected, how long it is kept, and how to request deletion.
      </p>
      <p>What guides the design today:</p>
      <ul className="flex list-disc flex-col gap-2 pl-5">
        <li>Help Me is built around places and community connection, not selling attention.</li>
        <li>Location context is used to show nearby places and help requests, not to build a public profile for others to stalk.</li>
        <li>Help requests and offers should stay practical and respectful of personal information.</li>
        <li>Private messages and personal details are never used to train models or sold as a product.</li>
      </ul>
      <p>
        Privacy questions can be sent to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-raspberry-deep underline-offset-2 hover:underline">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </LegalPage>
  );
}
