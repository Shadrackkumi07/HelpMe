import { generateQrSvg } from "@/lib/qr";

/** Server-rendered QR code. No client JS, no third-party request. */
export default async function QrCode({
  value,
  size = 148,
  label,
}: {
  value: string;
  size?: number;
  label: string;
}) {
  const svg = await generateQrSvg(value);
  return (
    <div
      role="img"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-2xl border border-line bg-white p-3.5 shadow-lift-sm"
      style={{ width: size, height: size }}
      // Deterministic markup from our own server-side generator, not user input
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
