import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Central orb */}
      <div 
        className="floating-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-shaman-violet/15"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="floating-orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-shaman-magenta/10"
        style={{ animationDelay: "6s" }}
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-10 font-body">
          Begin the work
        </p>
        
        <h2 className="font-display text-4xl md:text-6xl font-medium mb-8 tracking-tight leading-tight">
          <span className="text-foreground">Your practice</span>
          <br />
          <span className="text-gradient italic">calls for intention.</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-14 font-body font-light max-w-lg mx-auto leading-relaxed">
          Create a vessel for your work. Describe your vision, 
          receive it in material form. Sacred tools, made visible.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button variant="cta" size="xl" className="group font-body font-medium tracking-wide glow-effect">
            Begin Creating
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="font-body font-medium tracking-wide"
          >
            View Visions
          </Button>
        </div>
        
        {/* Trust markers */}
        <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground/50 font-body tracking-wide">
          <span>Natural rubber</span>
          <span className="w-1.5 h-1.5 rounded-full bg-shaman-teal/50" />
          <span>Plant inks</span>
          <span className="w-1.5 h-1.5 rounded-full bg-shaman-gold/50" />
          <span>Carbon neutral</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;