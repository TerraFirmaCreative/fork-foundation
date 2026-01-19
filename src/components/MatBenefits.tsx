import { useEffect, useState } from "react";
import { MandalaDecoration } from "./SacredGeometry";

import mat3 from "@/assets/mat-3.jpg";
import mat6 from "@/assets/mat-6.jpg";
import mat9 from "@/assets/mat-9.jpg";
import mat11 from "@/assets/mat-11.jpg";

const matImages = [mat3, mat6, mat9, mat11];

const benefits = [
  {
    title: "Premium Natural Rubber",
    description: "Superior grip and cushioning from sustainably harvested tree rubber."
  },
  {
    title: "Non-Slip Surface",
    description: "Stay grounded in every pose, even during intense hot yoga."
  },
  {
    title: "Eco-Friendly Inks",
    description: "Water-based, non-toxic inks. Vibrant colors that won't fade."
  },
  {
    title: "Perfect Thickness",
    description: "5mm cushioning protects joints while maintaining stability."
  },
  {
    title: "Easy Care",
    description: "Machine washable and quick-drying for lasting freshness."
  },
  {
    title: "Built to Last",
    description: "Professional-grade durability with 2-year warranty."
  }
];

const MatBenefits = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % matImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      <MandalaDecoration className="-bottom-32 -right-32" size={300} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-shaman-gold/70 mb-3 font-body">
            The Mat
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 tracking-tight">
            <span className="text-foreground">Professional quality.</span>{" "}
            <span className="text-gradient italic">Your unique design.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Premium materials that serious practitioners demand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Image Grid - Left Side */}
          <div className="grid grid-cols-2 gap-3 h-full">
            {matImages.map((image, index) => (
              <div 
                key={index}
                className={`relative rounded-lg overflow-hidden transition-all duration-500 cursor-pointer ${
                  currentSlide === index 
                    ? 'ring-2 ring-shaman-gold/60 scale-[1.02]' 
                    : 'opacity-80 hover:opacity-100'
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <img
                  src={image}
                  alt={`Custom yoga mat design ${index + 1}`}
                  className="w-full h-full object-cover aspect-square"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent transition-opacity duration-300 ${
                  currentSlide === index ? 'opacity-0' : 'opacity-100'
                }`} />
              </div>
            ))}
          </div>
          
          {/* Benefits Grid - Right Side */}
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-2 gap-3 flex-1">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-card/50 border border-border/40 hover:border-shaman-gold/40 transition-all duration-300 flex flex-col"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-shaman-violet/30 to-shaman-magenta/30 flex items-center justify-center mb-2">
                    <span className="text-shaman-gold font-display text-xs font-medium">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-sm font-medium text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="p-4 rounded-lg bg-gradient-to-r from-shaman-violet/15 via-shaman-magenta/15 to-shaman-gold/15 border border-border/40 mt-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-base text-foreground">Ready to design yours?</p>
                  <p className="text-xs text-muted-foreground font-body">Starting at $89 · Free shipping</p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-shaman-gold via-shaman-ember to-shaman-gold bg-[length:200%_100%] text-background font-body text-sm font-medium rounded-md hover:bg-right transition-all duration-500 shrink-0"
                >
                  Start Creating
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatBenefits;
