import type { Metadata, Viewport } from "next";
import { Great_Vibes, Cormorant_Garamond, Quicksand } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const title = "Help Me · Your community starts here";
const description =
  "Help Me connects people with the places and people around them. Discover local events, ask for help, and build stronger community ties one place at a time.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://helpme.app"),
  title,
  description,
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Help Me",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f5",
};

const themeInit = `
(function () {
  try {
    var stored = localStorage.getItem('helpme-theme');
    var dark = stored === 'dark';
    if (dark) document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${greatVibes.variable} ${cormorant.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
