import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Showcase from "@/components/sections/Showcase";
import Features from "@/components/sections/Features";
import Helpers from "@/components/sections/Helpers";
import Safety from "@/components/sections/Safety";
import Download from "@/components/sections/Download";
import JsonLd from "@/components/seo/JsonLd";
import { homeGraph } from "@/lib/seo/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph()} />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Showcase />
        <Features />
        <Helpers />
        <Safety />
        <Download />
      </main>
      <Footer />
    </>
  );
}
