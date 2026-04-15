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
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-10 font-body">
          Find Your Perfect Mat
        </p>

        <h1 className="font-display text-4xl md:text-6xl font-medium mb-8 tracking-tight leading-tight">
          <span className="text-foreground">Beautiful </span>
          <span className="text-gradient italic"><span className="underline decoration-shaman-gold decoration-2 underline-offset-4">and</span> grippy</span>
          <span className="text-foreground/70 italic"> yoga mats.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground/80 mb-14 font-body font-normal max-w-2xl mx-auto leading-[1.8] md:whitespace-nowrap">
          Designed to inspire and made to perform. Simple as that.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button 
            variant="cta" 
            size="xl" 
            className="group font-body font-medium tracking-wide glow-effect"
            onClick={() => document.getElementById("design-gallery")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore the Collection
          </Button>
        </div>
        
        <p className="text-base md:text-[1.35rem] text-muted-foreground/70 font-body whitespace-nowrap">
          Premium natural rubber · Suede microfibre surface · Non-slip
        </p>
        <p className="text-base md:text-[1.35rem] text-muted-foreground/70 font-body mt-2">
          Free shipping on all mats
        </p>
        <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground/40 font-body mt-3">
          Made in the USA
        </p>
      </div>
    </section>
  );
};

export default HeroSection;