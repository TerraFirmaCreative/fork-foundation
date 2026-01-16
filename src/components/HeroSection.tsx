import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import SacredGeometry, { MandalaDecoration, SpiralPattern } from "./SacredGeometry";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("cosmic mandalas with flowing sacred geometry");

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Psychedelic animated background */}
      <div className="psychedelic-bg" />
      <div className="texture-overlay" />
      
      {/* Sacred geometry patterns */}
      <SacredGeometry opacity={0.12} />
      <SpiralPattern />
      <MandalaDecoration className="-top-32 -right-32" size={600} />
      <MandalaDecoration className="-bottom-48 -left-48" size={700} />
      
      {/* Trippy color orbs */}
      <div 
        className="trippy-orb w-[600px] h-[600px] -top-48 -left-48 bg-psych-violet/40"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="trippy-orb w-[500px] h-[500px] top-1/4 -right-32 bg-psych-magenta/35"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="trippy-orb-sm w-[350px] h-[350px] bottom-0 left-1/3 bg-psych-cyan/30"
        style={{ animationDelay: "4s" }}
      />
      <div 
        className="rainbow-glow w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-sm tracking-[0.3em] uppercase text-psych-gold/90 mb-6 font-body">
          AI-Designed Custom Yoga Mats
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
          <span className="text-foreground">Design your own</span>
          <br />
          <span className="text-gradient-rainbow italic">yoga mat.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto font-body font-light leading-relaxed">
          Describe any design you can imagine—sacred geometry, cosmic fractals, 
          nature scenes—and watch AI bring it to life on a premium yoga mat.
        </p>
        
        <p className="text-sm text-muted-foreground/60 mb-14 font-body">
          Premium natural rubber · Eco-friendly inks · Free worldwide shipping
        </p>
        
        {/* Input with rainbow glow */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
          <div className="flex-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-psych-violet via-psych-magenta to-psych-cyan rounded-lg opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your dream yoga mat design..."
              className="relative h-14 pl-5 pr-5 bg-card/80 backdrop-blur-sm border-border/50 text-foreground placeholder:text-muted-foreground/40 rounded-md font-body text-base focus:border-psych-violet/50 transition-colors"
            />
          </div>
          <Button variant="cta" size="lg" className="h-14 px-8 gap-2 font-body font-medium tracking-wide">
            Create My Mat <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Markers */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs text-muted-foreground/60 font-body tracking-wide">
          <span>Ships in 5–7 days</span>
          <span className="w-1.5 h-1.5 rounded-full bg-psych-violet/70" />
          <span>Non-slip grip</span>
          <span className="w-1.5 h-1.5 rounded-full bg-psych-magenta/70" />
          <span>30-day money back</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
