import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("ayahuasca visions of infinite fractals");

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Mystic background */}
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Floating orbs */}
      <div 
        className="floating-orb w-[500px] h-[500px] -top-48 -left-48 bg-shaman-violet/20"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="floating-orb w-[400px] h-[400px] top-1/4 -right-32 bg-shaman-magenta/15"
        style={{ animationDelay: "4s" }}
      />
      <div 
        className="floating-orb w-[300px] h-[300px] bottom-0 left-1/3 bg-shaman-teal/10"
        style={{ animationDelay: "8s" }}
      />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/80 mb-10 font-body">
          Visions made material · For sacred practice
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
          <span className="text-foreground">Your inner vision,</span>
          <br />
          <span className="text-gradient italic">woven into form.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto font-body font-light leading-relaxed">
          Describe what you see when you close your eyes. Our AI channels your intention 
          into a one-of-a-kind yoga mat—crafted for ceremony, printed on demand.
        </p>
        
        <p className="text-sm text-muted-foreground/50 mb-14 font-body">
          Natural rubber · Plant-based inks · Earth-conscious shipping
        </p>
        
        {/* Input with glow */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
          <div className="flex-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-shaman-violet via-shaman-magenta to-shaman-gold rounded-lg opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your vision..."
              className="relative h-14 pl-5 pr-5 bg-card/80 backdrop-blur-sm border-border/50 text-foreground placeholder:text-muted-foreground/40 rounded-md font-body text-base focus:border-shaman-violet/50 transition-colors"
            />
          </div>
          <Button variant="cta" size="lg" className="h-14 px-8 gap-2 font-body font-medium tracking-wide">
            Create <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Markers */}
        <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground/50 font-body tracking-wide">
          <span>Free worldwide shipping</span>
          <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet/50" />
          <span>Ships in 5–7 days</span>
          <span className="w-1.5 h-1.5 rounded-full bg-shaman-magenta/50" />
          <span>30-day returns</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;