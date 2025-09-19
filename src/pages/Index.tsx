import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import OutcomesSection from "@/components/OutcomesSection";
import HighlightsSection from "@/components/HighlightsSection";
// import ProgramOverviewSection from "@/components/ProgramOverviewSection";
// import BrochureViewer from "@/components/BrochureViewer";
// import PhilosophySection from "@/components/PhilosophySection";
import ItinerarySection from "@/components/ItinerarySection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
  <HeroSection />
  <PainPointsSection />
  <OutcomesSection />
  <HighlightsSection />
      <ItinerarySection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
