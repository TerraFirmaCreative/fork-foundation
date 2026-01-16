import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("morning light through monstera leaves");

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Subtle texture */}
      <div className="texture-overlay" />
      <div className="absolute inset-0 earth-bg" />
      
      {/* Soft floating elements */}
      <div 
        className="floating-orb w-[400px] h-[400px] -top-48 -left-48 bg-earth-clay/8"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="floating-orb w-[300px] h-[300px] top-1/3 -right-32 bg-earth-sage/6"
        style={{ animationDelay: "5s" }}
      />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-sm tracking-[0.3em] uppercase text-earth-sand/70 mb-10 font-body">
          Designed on land · For grounded practice
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
          <span className="text-foreground">Your vision,</span>
          <br />
          <span className="text-gradient italic">made material.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto font-body font-light leading-relaxed">
          Describe what moves you. Our AI interprets your intention 
          into a one-of-a-kind yoga mat—crafted with care, printed on demand.
        </p>
        
        <p className="text-sm text-muted-foreground/60 mb-14 font-body">
          Natural rubber · Water-based inks · Carbon-conscious shipping
        </p>
        
        {/* Input */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
          <div className="flex-1 relative">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your mat..."
              className="h-14 pl-5 pr-5 bg-card/80 border-border/50 text-foreground placeholder:text-muted-foreground/40 rounded-md font-body text-base focus:border-earth-clay/40 transition-colors"
            />
          </div>
          <Button variant="cta" size="lg" className="h-14 px-8 gap-2 font-body font-medium tracking-wide">
            Create <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Subtle markers */}
        <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground/50 font-body tracking-wide">
          <span>Free worldwide shipping</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
          <span>Ships in 5–7 days</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
          <span>30-day returns</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;