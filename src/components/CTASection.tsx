import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 earth-bg" />
      
      {/* Subtle orb */}
      <div 
        className="floating-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-earth-clay/6"
        style={{ animationDelay: "0s" }}
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="text-sm tracking-[0.3em] uppercase text-earth-sand/70 mb-10 font-body">
          Begin
        </p>
        
        <h2 className="font-display text-4xl md:text-6xl font-medium mb-8 tracking-tight leading-tight">
          <span className="text-foreground">Your practice</span>
          <br />
          <span className="text-gradient italic">deserves intention.</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-14 font-body font-light max-w-lg mx-auto leading-relaxed">
          Create a mat that holds your vision. Natural materials, 
          original design, delivered worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button variant="cta" size="xl" className="group font-body font-medium tracking-wide">
            Start Creating
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="font-body font-medium tracking-wide"
          >
            View Collection
          </Button>
        </div>
        
        {/* Trust markers */}
        <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground/50 font-body tracking-wide">
          <span>Natural rubber</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
          <span>Eco-inks</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
          <span>Carbon neutral</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;