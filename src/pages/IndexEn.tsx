import Header from "@/components/Header";
import HeroSectionEn from "@/components/en/HeroSectionEn";
import PainPointsSectionEn from "@/components/en/PainPointsSectionEn";
import OutcomesSectionEn from "@/components/en/OutcomesSectionEn";
import HighlightsSectionEn from "@/components/en/HighlightsSectionEn";
import ItinerarySectionEn from "@/components/en/ItinerarySectionEn";
import PricingSectionEn from "@/components/en/PricingSectionEn";
import ContactSectionEn from "@/components/en/ContactSectionEn";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const IndexEn = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSectionEn />
      <PainPointsSectionEn />
      <OutcomesSectionEn />
      <HighlightsSectionEn />
      <ItinerarySectionEn />
      <PricingSectionEn />
      <ContactSectionEn />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default IndexEn;