import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("ayahusca dreams of infinite photorealistic reality fractals");

  return (
    <section className="relative py-14 px-6 overflow-hidden">
      {/* Cosmic background continuation */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950 via-indigo-950 to-background">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(147, 51, 234, 0.5) 0%, transparent 40%),
                           radial-gradient(circle at 70% 60%, rgba(79, 70, 229, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 40%)`
        }} />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 10%, white 50%, transparent 100%),
                           radial-gradient(2px 2px at 40% 40%, rgba(255,255,255,0.7) 50%, transparent 100%),
                           radial-gradient(1px 1px at 60% 20%, white 50%, transparent 100%),
                           radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.8) 50%, transparent 100%),
                           radial-gradient(2px 2px at 10% 50%, rgba(255,255,255,0.5) 50%, transparent 100%)`
        }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI-Powered Custom Design</span>
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3 leading-tight">
          Your Vision. Your Mat.
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-3 max-w-2xl mx-auto">
          Use AI image generation to design a beautiful yoga mat, delivered to your door.
        </p>
        
        <p className="text-sm text-white/70 mb-6 max-w-xl mx-auto">
          Simply describe your dream design — cosmic galaxies, tropical paradise, abstract art — and watch our AI bring it to life on a premium, eco-friendly mat.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto mb-6">
          <div className="flex-1 relative">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your dream yoga mat design..."
              className="h-12 pl-4 pr-4 bg-card/90 backdrop-blur border-border text-foreground placeholder:text-muted-foreground rounded-lg shadow-soft"
            />
          </div>
          <Button variant="hero" size="lg" className="h-12 px-6 gap-2">
            Create My Mat <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span>Free Shipping Worldwide</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span>Eco-Friendly Materials</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
