import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("ayahusca dreams of infinite photorealistic reality fractals");

  return (
    <section className="hero-gradient py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI-Powered Custom Design</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
          Your Vision.<br />Your Mat.
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-2xl mx-auto">
          Use AI image generation to design a beautiful yoga mat, delivered to your door.
        </p>
        
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Simply describe your dream design — cosmic galaxies, tropical paradise, abstract art — and watch our AI bring it to life on a premium, eco-friendly mat.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8">
          <div className="flex-1 relative">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your dream yoga mat design..."
              className="h-14 pl-4 pr-4 bg-card border-border text-foreground placeholder:text-muted-foreground rounded-lg shadow-soft text-base"
            />
          </div>
          <Button variant="hero" size="xl" className="h-14 px-8 gap-2">
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
