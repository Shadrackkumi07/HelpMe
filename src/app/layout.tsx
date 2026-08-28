import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const title = "Help Me · See Beyond";
const description =
  "Someone nearby needs a hand. Someone nearby would give one. Help Me connects people in need with trusted Helpers nearby. Now on TestFlight for iPhone.";

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
  themeColor: "#08090b",
};

/*
 * Dark is the default, matching the app. Only an explicit "light" choice
 * opts out, and it is applied before first paint so the page never flashes.
 */
const themeInit = `
(function () {
  try {
    if (localStorage.getItem('helpme-theme') === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.style.colorScheme = 'light';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          suppressHydrationWarning because browser extensions commonly rewrite or
          replace <script> tags in <head> before React hydrates. suppressHydrationWarning
          on <html> covers that element's own attributes only, not its descendants.
        */}
        <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>{children}</body>
    </html>
  );
}
