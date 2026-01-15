import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Truck } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-6 hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft mb-6">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">Limited Time: Free Shipping Worldwide</span>
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Create Your Perfect Mat Today
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join over 50,000 yogis who've already designed their dream mat. 
          Your unique creation is just a few words away.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="cta" size="xl" className="group">
            Start Designing Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl">
            Browse Gallery
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-accent" />
            <span>30-Day Money Back</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-accent" />
            <span>Ships in 5-7 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <span>Premium Eco Materials</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
