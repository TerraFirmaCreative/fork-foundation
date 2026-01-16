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
          Start Creating Today
        </p>
        
        <h2 className="font-display text-4xl md:text-6xl font-medium mb-8 tracking-tight leading-tight">
          <span className="text-foreground">Your perfect yoga mat</span>
          <br />
          <span className="text-gradient italic">is one prompt away.</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-14 font-body font-light max-w-lg mx-auto leading-relaxed">
          Join thousands of yogis practicing on mats they designed themselves. 
          Premium quality, truly unique, delivered worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button variant="cta" size="lg" className="group font-body font-medium tracking-wide glow-effect h-14 px-8">
            Design Your Mat Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-body font-medium tracking-wide h-14 px-8"
          >
            Browse Designs
          </Button>
        </div>
        
        {/* Trust markers */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs text-muted-foreground/60 font-body tracking-wide">
          <span>Premium natural rubber</span>
          <span className="w-1.5 h-1.5 rounded-full bg-shaman-teal/50" />
          <span>Eco-friendly printing</span>
          <span className="w-1.5 h-1.5 rounded-full bg-shaman-gold/50" />
          <span>Free shipping worldwide</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;