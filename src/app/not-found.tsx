import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mark from "@/components/Mark";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="spot-top flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center">
        <Mark size={64} />
        <h1 className="font-display display-md mt-8 text-ink">This page is not here</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          It may have moved. The directory and the help topics are still the fastest way back.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-bg"
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm font-semibold text-ink"
          >
            Explore
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
