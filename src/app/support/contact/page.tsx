import type { Metadata } from "next";
import { dedicatedMetadata } from "@/lib/seo/metadata";
import LegalPage from "@/components/LegalPage";
import { NOT_EMERGENCY_LINE, SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = dedicatedMetadata({
  path: "/support/contact",
  title: "Contact",
  description:
    "Email support@helpme.fyi. A person reads it and writes back. For emergencies call 911 instead, since Help Me is not an emergency service.",
});

export default function ContactPage() {
  return (
    <LegalPage eyebrow="Support" title="Contact">
      <p>
        Questions, ideas, or something that is not working right. We read all of it, and a person writes back.
      </p>
      <a
        href={`mailto:${SUPPORT_EMAIL}?subject=Help%20Me%20support`}
        className="mt-2 inline-flex h-14 w-fit items-center justify-center rounded-full bg-ink px-7 font-bold text-paper !no-underline transition-transform duration-[250ms] hover:scale-[1.03]"
      >
        Email {SUPPORT_EMAIL}
      </a>
      <p className="text-sm font-semibold">{NOT_EMERGENCY_LINE}</p>
    </LegalPage>
  );
}
