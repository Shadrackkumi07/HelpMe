import BloomMark from "@/components/BloomMark";

/** Small logo + eyebrow used above section titles for brand continuity. */
export default function SectionBrand({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center justify-center gap-2">
      <BloomMark size={18} plain className="!rounded-[5px]" />
      <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-raspberry/70">{label}</p>
    </div>
  );
}
