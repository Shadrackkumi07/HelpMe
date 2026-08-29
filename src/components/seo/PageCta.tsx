import { AppBadge } from "@/components/AppBadge";
import { PRODUCT_FACTS, REGION } from "@/lib/seo/site";

export default function PageCta() {
  return (
    <aside className="mt-16 rounded-3xl border border-line bg-surface p-8 sm:p-10">
      <p className="eyebrow text-muted">Get the app</p>
      <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
        Someone nearby in {REGION} would help. Meet them in public.
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{PRODUCT_FACTS.notEmergency}</p>
      <div className="mt-7">
        <AppBadge />
      </div>
    </aside>
  );
}
