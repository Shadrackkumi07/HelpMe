import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Templates from "@/components/sections/Templates";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import Download from "@/components/sections/Download";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Templates />
        <Features />
        <Showcase />
        <Download />
      </main>
      <Footer />
    </>
  );
}
