import { generateQrSvg } from "@/lib/qr";

/** Server-rendered QR code. Generated at build/request time, no client JS, no external request. */
export default async function QrCode({
  value,
  size = 132,
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
      className="inline-flex items-center justify-center rounded-2xl bg-white p-3 shadow-petal-sm"
      style={{ width: size, height: size }}
      // qrcode's SVG output is deterministic markup from our own server-side generator, not user input
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
