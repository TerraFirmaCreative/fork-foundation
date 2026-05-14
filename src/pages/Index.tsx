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

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DesignGallery />
      <HowItWorks />
      <LifestyleGallery />
      <MatBenefits />
      <YogiOfTheWeek />
      <AffiliateSection />
      <ReviewsSection />
      <AboutSection />

      <Footer />
    </div>
  );
};

export default Index;
