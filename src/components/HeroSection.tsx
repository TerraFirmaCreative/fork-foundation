import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("ayahusca dreams of infinite photorealistic reality fractals");

  return (
    <section className="hero-gradient py-14 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI-Powered Custom Design</span>
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-3 leading-tight">
          Your Vision. Your Mat.
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/90 mb-3 max-w-2xl mx-auto">
          Use AI image generation to design a beautiful yoga mat, delivered to your door.
        </p>
        
        <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
          Simply describe your dream design — cosmic galaxies, tropical paradise, abstract art — and watch our AI bring it to life on a premium, eco-friendly mat.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto mb-6">
          <div className="flex-1 relative">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your dream yoga mat design..."
              className="h-12 pl-4 pr-4 bg-card border-border text-foreground placeholder:text-muted-foreground rounded-lg shadow-soft"
            />
          </div>
          <Button variant="hero" size="lg" className="h-12 px-6 gap-2">
            Create My Mat <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Free Shipping Worldwide</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Eco-Friendly Materials</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>30-Day Money Back</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
