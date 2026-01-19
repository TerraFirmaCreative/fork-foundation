import { useEffect, useState } from "react";
import { MandalaDecoration } from "./SacredGeometry";

import mat1 from "@/assets/mat-1.jpg";
import mat5 from "@/assets/mat-5.jpg";
import mat8 from "@/assets/mat-8.jpg";
import mat12 from "@/assets/mat-12.jpg";

const matImages = [mat1, mat5, mat8, mat12];

const benefits = [
  {
    title: "Premium Natural Rubber",
    description: "Sustainably harvested tree rubber provides superior grip and cushioning that synthetic mats simply can't match."
  },
  {
    title: "Non-Slip Surface",
    description: "Our micro-texture technology keeps you grounded in every pose, even during the most intense hot yoga sessions."
  },
  {
    title: "Eco-Friendly Inks",
    description: "Water-based, non-toxic inks that are safe for you and the planet. Vibrant colors that won't fade or crack."
  },
  {
    title: "Perfect Thickness",
    description: "5mm of optimal cushioning protects your joints while maintaining stability for balance poses."
  },
  {
    title: "Easy Care",
    description: "Machine washable and quick-drying. Your mat stays fresh and hygienic practice after practice."
  },
  {
    title: "Built to Last",
    description: "Professional-grade durability backed by our 2-year warranty. This mat grows with your practice."
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
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      <MandalaDecoration className="-bottom-32 -right-32" size={350} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 font-body">
            The Mat
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-5 tracking-tight">
            <span className="text-foreground">Professional quality.</span>{" "}
            <span className="text-gradient italic">Your unique design.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Premium materials that serious practitioners demand—with a design that's entirely yours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Carousel - Left Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {matImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative rounded-lg overflow-hidden aspect-square transition-all duration-500 ${
                    currentSlide === index 
                      ? 'ring-2 ring-shaman-gold/60 scale-[1.02]' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <img
                    src={image}
                    alt={`Custom yoga mat design ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent transition-opacity duration-300 ${
                    currentSlide === index ? 'opacity-0' : 'opacity-100'
                  }`} />
                </div>
              ))}
            </div>
            
            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {matImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-shaman-gold w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Benefits Grid - Right Side */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl bg-card/50 border border-border/40 hover:border-shaman-gold/40 transition-all duration-300 hover:bg-card/70"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-shaman-violet/30 to-shaman-magenta/30 flex items-center justify-center mb-3">
                    <span className="text-shaman-gold font-display text-sm font-medium">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-base font-medium text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-shaman-violet/15 via-shaman-magenta/15 to-shaman-gold/15 border border-border/40">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-display text-lg text-foreground">Ready to design yours?</p>
                  <p className="text-sm text-muted-foreground font-body">Starting at $89 · Free worldwide shipping</p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-shaman-gold via-shaman-ember to-shaman-gold bg-[length:200%_100%] text-background font-body text-sm font-medium rounded-lg hover:bg-right transition-all duration-500 shrink-0"
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
