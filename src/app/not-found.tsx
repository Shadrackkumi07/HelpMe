import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-ember text-ink">
        <div className="mx-auto flex min-h-[80svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8">
          <p className="dash-label">404</p>
          <h1 className="display-hero mt-6">This block is empty.</h1>
          <p className="subhead mt-6 max-w-xl text-2xl">The page may have moved. Head home, or look through the directory.</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/" className="inline-flex h-14 items-center rounded-full bg-ink px-7 font-bold text-paper">
              Home
            </Link>
            <Link href="/explore" className="inline-flex h-14 items-center rounded-full border-2 border-ink px-7 font-bold">
              Directory
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
