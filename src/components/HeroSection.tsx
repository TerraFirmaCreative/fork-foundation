import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("ayahusca dreams of infinite photorealistic reality fractals");

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Deep cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div 
            className="floating-orb w-[600px] h-[600px] -top-32 -left-32 bg-psychedelic-purple/30"
            style={{ animationDelay: "0s" }}
          />
          <div 
            className="floating-orb w-[500px] h-[500px] top-1/4 -right-48 bg-psychedelic-pink/25"
            style={{ animationDelay: "3s" }}
          />
          <div 
            className="floating-orb w-[400px] h-[400px] bottom-0 left-1/4 bg-psychedelic-cyan/20"
            style={{ animationDelay: "6s" }}
          />
          <div 
            className="floating-orb w-[300px] h-[300px] top-1/2 left-1/2 bg-psychedelic-gold/15"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
        
        {/* Stars overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `radial-gradient(1px 1px at 10% 10%, hsla(280, 80%, 90%, 0.8) 50%, transparent 100%),
                           radial-gradient(2px 2px at 30% 30%, hsla(320, 70%, 90%, 0.6) 50%, transparent 100%),
                           radial-gradient(1px 1px at 50% 15%, hsla(200, 90%, 90%, 0.7) 50%, transparent 100%),
                           radial-gradient(1.5px 1.5px at 70% 45%, hsla(45, 100%, 90%, 0.7) 50%, transparent 100%),
                           radial-gradient(1px 1px at 85% 25%, hsla(160, 80%, 90%, 0.6) 50%, transparent 100%),
                           radial-gradient(2px 2px at 15% 60%, hsla(280, 80%, 90%, 0.5) 50%, transparent 100%),
                           radial-gradient(1px 1px at 90% 70%, hsla(320, 70%, 90%, 0.8) 50%, transparent 100%),
                           radial-gradient(1.5px 1.5px at 40% 80%, hsla(200, 90%, 90%, 0.6) 50%, transparent 100%)`
        }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Glowing badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm shadow-glow">
          <Sparkles className="w-4 h-4 text-psychedelic-gold animate-pulse-subtle" />
          <span className="text-sm font-medium text-gradient">AI-Powered Custom Design</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Your Vision.</span>
          <br />
          <span className="text-gradient">Your Mat.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-2xl mx-auto font-light">
          Use AI image generation to design a beautiful yoga mat, delivered to your door.
        </p>
        
        <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto">
          Simply describe your dream design — cosmic galaxies, tropical paradise, abstract art — and watch our AI bring it to life on a premium, eco-friendly mat.
        </p>
        
        {/* Input with glow effect */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto mb-10">
          <div className="flex-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-psychedelic-purple via-psychedelic-pink to-psychedelic-cyan rounded-xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your dream yoga mat design..."
              className="relative h-14 pl-5 pr-5 bg-card/90 backdrop-blur-sm border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl shadow-card focus:border-primary/50 transition-all duration-300"
            />
          </div>
          <Button variant="hero" size="lg" className="h-14 px-8 gap-2 text-base font-semibold glow-effect">
            Create My Mat <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Feature badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-psychedelic-teal/10 border border-psychedelic-teal/30">
            <div className="w-2 h-2 rounded-full bg-psychedelic-teal animate-pulse"></div>
            <span className="text-foreground/80">Free Shipping Worldwide</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-psychedelic-gold/10 border border-psychedelic-gold/30">
            <div className="w-2 h-2 rounded-full bg-psychedelic-gold animate-pulse"></div>
            <span className="text-foreground/80">Eco-Friendly Materials</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;