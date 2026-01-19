import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 terra-bg" />
      
      {/* Subtle orb */}
      <div 
        className="floating-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terra-sand/5"
      />
      
      <div className="max-w-xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-8 tracking-tight leading-tight text-foreground">
          Begin with intention
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 font-body font-light leading-relaxed">
          Create a mat that reflects your practice. Premium quality, 
          delivered to your door.
        </p>
        
        <Button variant="cta" size="xl" className="group font-body font-medium tracking-wide">
          Design Your Mat
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;