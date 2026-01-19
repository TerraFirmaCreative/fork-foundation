import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DesignGallery from "@/components/DesignGallery";
import LifestyleGallery from "@/components/LifestyleGallery";
import HowItWorks from "@/components/HowItWorks";
import MatBenefits from "@/components/MatBenefits";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DesignGallery />
      <LifestyleGallery />
      <HowItWorks />
      <MatBenefits />
      <ReviewsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
