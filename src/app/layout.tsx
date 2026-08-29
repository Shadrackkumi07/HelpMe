import type { Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { rootMetadata } from "@/lib/seo/metadata";

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

export const metadata = rootMetadata;

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
