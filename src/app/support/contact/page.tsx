import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = { title: "Contact Us · Help Me" };

export default function ContactPage() {
  return (
    <LegalPage eyebrow="support" title="Contact Us">
      <p>We read everything: questions, ideas, or something that is not working quite right. A person answers.</p>
      <a
        href={`mailto:${SUPPORT_EMAIL}?subject=Help%20Me%20support`}
        className="mt-2 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-raspberry px-7 font-body text-sm font-bold text-blush shadow-petal-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raspberry focus-visible:ring-offset-2"
      >
        Email {SUPPORT_EMAIL}
      </a>
    </LegalPage>
  );
}
