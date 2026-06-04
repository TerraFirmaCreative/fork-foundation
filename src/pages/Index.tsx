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
        title="Cosmic Igloo — Premium Made-to-Order Yoga Mats"
        description="Original artwork yoga mats, printed to order. Suede microfibre top, natural rubber base, free carry strap with every mat. Ships worldwide from the USA."
        path="/"
      />
      <Header />
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

      <Footer />
    </div>
  );
};

export default Index;
