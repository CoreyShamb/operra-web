import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeatureGrid from "@/components/feature-grid";
import PlatformSection from "@/components/platform-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <PlatformSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}