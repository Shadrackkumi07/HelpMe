import QRCode from "qrcode";

/** Self-generated QR (no third-party API call) rendered as an inline SVG string. */
export async function generateQrSvg(value: string): Promise<string> {
  return QRCode.toString(value, {
    type: "svg",
    margin: 0,
    color: { dark: "#53203c", light: "#00000000" },
    errorCorrectionLevel: "M",
  });
}
