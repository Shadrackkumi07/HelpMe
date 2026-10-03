import QRCode from "qrcode";

/** Self-generated QR (no third-party API call) rendered as an inline SVG string. Ink on transparent. */
export async function generateQrSvg(value: string): Promise<string> {
  return QRCode.toString(value, {
    type: "svg",
    margin: 0,
    color: { dark: "#000000", light: "#00000000" },
    errorCorrectionLevel: "M",
  });
}
