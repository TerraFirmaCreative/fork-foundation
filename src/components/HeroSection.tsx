import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">
      {/* Subtle background */}
      <div className="texture-overlay" />
      <div className="absolute inset-0 terra-bg" />
      
      {/* Very subtle floating orb */}
      <div 
        className="floating-orb w-[600px] h-[600px] -top-48 -right-48 bg-terra-sand/5"
        style={{ animationDelay: "0s" }}
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h1 className="font-display text-5xl md:text-7xl font-medium mb-10 leading-[1.1] tracking-tight">
          <span className="text-foreground">A mat that holds</span>
          <br />
          <span className="text-gradient italic">your intention.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-lg mx-auto font-body font-light leading-relaxed">
          Design a yoga mat that reflects your practice. 
          Premium natural materials. Uniquely yours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button variant="cta" size="xl" className="group font-body font-medium tracking-wide">
            Design Your Mat
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="ghost" 
            size="xl" 
            className="font-body font-light tracking-wide text-muted-foreground hover:text-foreground"
          >
            Explore Gallery
          </Button>
        </div>
        
        {/* Simple markers */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground/50 font-body">
          <span>Natural rubber</span>
          <span className="w-1 h-1 rounded-full bg-terra-stone/30" />
          <span>Eco-friendly inks</span>
          <span className="w-1 h-1 rounded-full bg-terra-stone/30" />
          <span>Free worldwide shipping</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;