import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = { title: "Contact · Help Me" };

export default function ContactPage() {
  return (
    <LegalPage eyebrow="support" title="Contact">
      <p>
        Questions, ideas, or something that is not working right. We read all of it, and a person writes back.
      </p>
      <a
        href={`mailto:${SUPPORT_EMAIL}?subject=Help%20Me%20support`}
        className="mt-2 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        Email {SUPPORT_EMAIL}
      </a>
      <p className="text-xs">
        In an emergency, call emergency services. Help Me does not replace 911.
      </p>
    </LegalPage>
  );
}
