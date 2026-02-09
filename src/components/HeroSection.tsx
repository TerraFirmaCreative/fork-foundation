import { Button } from "@/components/ui/button";
import SacredGeometry, { MandalaDecoration } from "./SacredGeometry";

const HeroSection = () => {
  return (
    <section className="relative py-28 pb-12 px-6 overflow-hidden">
      {/* Mystic background */}
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Sacred geometry patterns */}
      <SacredGeometry opacity={0.06} />
      <MandalaDecoration className="-top-32 -right-32" size={500} />
      <MandalaDecoration className="-bottom-48 -left-48" size={600} />
      
      {/* Floating orbs */}
      <div 
        className="floating-orb w-[500px] h-[500px] -top-48 -left-48 bg-shaman-violet/15"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="floating-orb w-[400px] h-[400px] top-1/4 -right-32 bg-shaman-magenta/10"
        style={{ animationDelay: "4s" }}
      />
      <div 
        className="floating-orb w-[300px] h-[300px] bottom-0 left-1/3 bg-shaman-teal/08"
        style={{ animationDelay: "8s" }}
      />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-base tracking-[0.3em] uppercase text-shaman-gold/80 mb-6 font-body">
          Artisan Yoga Mats
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
          <span className="text-foreground">Beautiful mats for</span>
          <br />
          <span className="text-gradient italic">meaningful practice.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto font-body font-light leading-relaxed">
          Discover our curated series of stunning yoga mats, inspired by geometry, nature, and subtle form.
        </p>
        
        <p className="text-sm text-muted-foreground/60 mb-14 font-body">
          Premium natural rubber · Stable surface · Designed for daily practice
        </p>
        

        {/* CTA Button */}
        <div className="flex justify-center mt-2">
          <Button 
            variant="cta" 
            size="xl" 
            className="group font-body font-medium tracking-wide glow-effect"
            onClick={() => document.getElementById("design-gallery")?.scrollIntoView({ behavior: "smooth" })}
          >
            Shop Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;