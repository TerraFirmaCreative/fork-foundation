import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SacredGeometry, { MandalaDecoration } from "./SacredGeometry";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Sacred geometry */}
      <SacredGeometry opacity={0.05} />
      <MandalaDecoration className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={700} />
      
      {/* Central orb */}
      <div 
        className="floating-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-shaman-violet/12"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="floating-orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-shaman-magenta/08"
        style={{ animationDelay: "6s" }}
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-10 font-body">
          Find Your Perfect Mat
        </p>
        
        <h2 className="font-display text-4xl md:text-6xl font-medium mb-8 tracking-tight leading-tight">
          <span className="text-foreground">You deserve</span>
          <br />
          <span className="text-gradient italic">more than the ordinary.</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-14 font-body font-normal max-w-lg mx-auto leading-[1.8]">
          Explore our curated collection of yoga mats, created to bring beauty and presence into your practice space.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button 
            variant="cta" 
            size="xl" 
            className="group font-body font-medium tracking-wide glow-effect"
            onClick={() => {
              document.getElementById("design-gallery")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Shop Collection
          </Button>
        </div>
        
        {/* Trust markers */}
        <p className="text-sm text-muted-foreground/60 font-body">
          <span className="block sm:inline text-center">Premium natural rubber · Stable surface</span>
          <span className="hidden sm:inline"> · </span>
          <span className="block sm:inline">Designed to Perform</span>
        </p>
      </div>
    </section>
  );
};

export default CTASection;