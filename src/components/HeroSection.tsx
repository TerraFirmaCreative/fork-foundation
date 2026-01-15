import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("ayahusca dreams of infinite photorealistic reality fractals");

  return (
    <section className="hero-gradient py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">
          Unique Yoga Mats
        </h1>
        <p className="font-display text-3xl md:text-4xl italic text-foreground/80 mb-10">
          Designed by you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
          <div className="flex-1 relative">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your dream yoga mat design..."
              className="h-12 pl-4 pr-4 bg-card border-border text-foreground placeholder:text-muted-foreground rounded-lg shadow-soft"
            />
          </div>
          <Button variant="hero" size="lg" className="h-12 px-6">
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm">AI-powered design generation</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
