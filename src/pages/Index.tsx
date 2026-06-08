import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DesignGallery from "@/components/DesignGallery";
import HowItWorks from "@/components/HowItWorks";
import LifestyleGallery from "@/components/LifestyleGallery";
import MatBenefits from "@/components/MatBenefits";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import AffiliateSection from "@/components/AffiliateSection";
import YogiOfTheWeek from "@/components/YogiOfTheWeek";
import CommunityRow from "@/components/CommunityRow";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cosmic Igloo — Custom Sacred Geometry Yoga Mats"
        description="Premium made-to-order yoga mats featuring original sacred-geometry and cosmic art. Custom-designed for serious practitioners. Designed in Perth, ships worldwide."
        path="/"
      />
      <Header />
      <main>
        <HeroSection />
        <DesignGallery />
        <HowItWorks />
        <LifestyleGallery />
        <MatBenefits />
        <CommunityRow />
        <ReviewsSection />
        <YogiOfTheWeek />
        <AffiliateSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
