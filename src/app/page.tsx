import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Moments from "@/components/sections/Moments";
import Turn from "@/components/sections/Turn";
import OneFavor from "@/components/sections/OneFavor";
import SmallStuff from "@/components/sections/SmallStuff";
import BeTheOne from "@/components/sections/BeTheOne";
import Film from "@/components/sections/Film";
import ZoneByZone from "@/components/sections/ZoneByZone";
import WantIn from "@/components/sections/WantIn";
import AroundHere from "@/components/sections/AroundHere";
import JsonLd from "@/components/seo/JsonLd";
import { homeGraph } from "@/lib/seo/schema";

/**
 * The homepage tells one story, top to bottom:
 * the small moments where you need a hand → somebody nearby might say yes if
 * they knew → one favor, start to finish → you could be the one who says yes →
 * a clear way in.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph()} />
      <Navbar />
      <main>
        <Hero />
        <Moments />
        <Turn />
        <OneFavor />
        <SmallStuff />
        <BeTheOne />
        <Film />
        <ZoneByZone />
        <WantIn />
        <AroundHere />
      </main>
      <Footer />
    </>
  );
}
