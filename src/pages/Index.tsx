import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DesignGallery from "@/components/DesignGallery";
import LazyMount from "@/components/LazyMount";

// Below-the-fold sections — code-split AND mount-deferred via IntersectionObserver.
// This keeps initial JS and image requests focused on the hero, improving LCP.
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const LifestyleGallery = lazy(() => import("@/components/LifestyleGallery"));
const MatBenefits = lazy(() => import("@/components/MatBenefits"));
const CommunityRow = lazy(() => import("@/components/CommunityRow"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const YogiOfTheWeek = lazy(() => import("@/components/YogiOfTheWeek"));
const AffiliateSection = lazy(() => import("@/components/AffiliateSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = ({ h = 400 }: { h?: number }) => (
  <div style={{ minHeight: h }} aria-hidden="true" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cosmic Igloo — Custom Sacred Geometry Yoga Mats"
        description="Premium made-to-order yoga mats with original sacred-geometry and cosmic art. Custom-designed for serious practitioners. Printed and shipped from the US."
        path="/"
      />
      <Header />
      <main>
        <HeroSection />
        <DesignGallery />

        <LazyMount minHeight={500}>
          <Suspense fallback={<SectionFallback h={500} />}>
            <HowItWorks />
          </Suspense>
        </LazyMount>

        <LazyMount minHeight={600}>
          <Suspense fallback={<SectionFallback h={600} />}>
            <LifestyleGallery />
          </Suspense>
        </LazyMount>

        <LazyMount minHeight={500}>
          <Suspense fallback={<SectionFallback h={500} />}>
            <MatBenefits />
          </Suspense>
        </LazyMount>

        <LazyMount minHeight={600}>
          <Suspense fallback={<SectionFallback h={600} />}>
            <CommunityRow />
          </Suspense>
        </LazyMount>

        <LazyMount minHeight={500}>
          <Suspense fallback={<SectionFallback h={500} />}>
            <ReviewsSection />
          </Suspense>
        </LazyMount>

        <LazyMount minHeight={500}>
          <Suspense fallback={<SectionFallback h={500} />}>
            <YogiOfTheWeek />
          </Suspense>
        </LazyMount>

        <LazyMount minHeight={400}>
          <Suspense fallback={<SectionFallback h={400} />}>
            <AffiliateSection />
          </Suspense>
        </LazyMount>

        <LazyMount minHeight={500}>
          <Suspense fallback={<SectionFallback h={500} />}>
            <AboutSection />
          </Suspense>
        </LazyMount>
      </main>

      <LazyMount minHeight={400}>
        <Suspense fallback={<SectionFallback h={400} />}>
          <Footer />
        </Suspense>
      </LazyMount>
    </div>
  );
};

export default Index;
