import { AppBadge } from "@/components/AppBadge";
import MasterLine from "@/components/MasterLine";
import { CAMPAIGN_LINE, NOT_EMERGENCY_LINE } from "@/lib/constants";

export default function PageCta() {
  return (
    <aside className="mt-20 rounded-[2rem] bg-ember p-8 text-ink sm:p-12">
      <MasterLine as="p" ground="ember" stacked={false} className="!text-[clamp(2.5rem,7vw,4.75rem)]" />
      <p className="subhead mt-4 text-2xl">{CAMPAIGN_LINE}</p>
      <div className="mt-8">
        <AppBadge />
      </div>
      <p className="mt-8 max-w-xl text-sm font-semibold leading-[1.5]">{NOT_EMERGENCY_LINE}</p>
    </aside>
  );
}
