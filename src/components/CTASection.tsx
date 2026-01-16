import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Truck, Leaf } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Animated cosmic elements */}
      <div className="absolute inset-0">
        <div 
          className="floating-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-psychedelic-purple/20"
          style={{ animationDelay: "0s" }}
        />
        <div 
          className="floating-orb w-[400px] h-[400px] -top-20 -left-20 bg-psychedelic-pink/15"
          style={{ animationDelay: "2s" }}
        />
        <div 
          className="floating-orb w-[350px] h-[350px] -bottom-20 -right-20 bg-psychedelic-cyan/15"
          style={{ animationDelay: "4s" }}
        />
      </div>
      
      {/* Radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(280,80%,50%,0.1)_0%,_transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Glowing badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-gradient-to-r from-psychedelic-purple/20 via-psychedelic-pink/20 to-psychedelic-cyan/20 border border-primary/30 backdrop-blur-sm shadow-glow">
          <Sparkles className="w-4 h-4 text-psychedelic-gold animate-pulse-subtle" />
          <span className="text-sm font-medium text-foreground">Limited Time: Free Shipping Worldwide</span>
        </div>
        
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
          <span className="text-foreground">Create Your</span>
          <br />
          <span className="text-gradient">Perfect Mat Today</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join over 50,000 yogis who've already designed their dream mat. 
          Your unique creation is just a few words away.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button variant="cta" size="xl" className="group glow-effect text-lg px-10">
            Start Designing Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="text-lg px-10 border-border/50 hover:border-primary/50 hover:bg-card/50 backdrop-blur-sm"
          >
            Browse Gallery
          </Button>
        </div>
        
        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: Shield, label: "30-Day Money Back", color: "psychedelic-purple" },
            { icon: Truck, label: "Ships in 5-7 Days", color: "psychedelic-pink" },
            { icon: Leaf, label: "Premium Eco Materials", color: "psychedelic-teal" },
          ].map((item) => (
            <div 
              key={item.label}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full bg-${item.color}/10 border border-${item.color}/30 backdrop-blur-sm transition-transform duration-300 hover:scale-105`}
            >
              <item.icon className={`w-5 h-5 text-${item.color}`} />
              <span className="text-sm text-foreground/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;