import { useEffect, useState } from "react";
import { MandalaDecoration } from "./SacredGeometry";

import mat1 from "@/assets/yoga-mat-new-1.jpg";
import mat2 from "@/assets/yoga-mat-new-2.jpg";
import mat3 from "@/assets/yoga-mat-new-3.jpg";
import mat4 from "@/assets/yoga-mat-new-4.jpg";
import mat5 from "@/assets/yoga-mat-new-5.jpg";
import mat6 from "@/assets/yoga-mat-new-6.jpg";
import mat7 from "@/assets/yoga-mat-new-7.jpg";
import mat8 from "@/assets/yoga-mat-new-8.jpg";
import mat9 from "@/assets/yoga-mat-new-9.jpg";

// Each tile gets its own set of images to cycle through
const tileImageSets = [
  [mat1, mat4, mat7],
  [mat2, mat5, mat8],
  [mat3, mat6, mat9],
  [mat4, mat1, mat3],
];

// Staggered intervals: 4s, 5s, 6s, 7s
const intervals = [4000, 5000, 6000, 7000];

const benefits = [
  {
    title: "Natural Rubber",
    description: "Sustainably harvested tree rubber."
  },
  {
    title: "Non-Slip Grip",
    description: "Grounded in every pose."
  },
  {
    title: "Eco-Friendly",
    description: "Water-based, non-toxic inks."
  },
  {
    title: "5mm Cushion",
    description: "Joint protection, stable feel."
  },
  {
    title: "Easy Care",
    description: "Machine washable."
  },
  {
    title: "2-Year Warranty",
    description: "Professional-grade durability."
  }
];

// TV Screen Tile component with smooth crossfade (no black)
const TVScreenTile = ({ images, interval }: { images: string[], interval: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative rounded-md overflow-hidden aspect-square bg-card/30">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Yoga mat design ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none z-20" />
    </div>
  );
};

const MatBenefits = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      <MandalaDecoration className="-bottom-48 -right-48" size={500} />
      
      {/* Floating orb */}
      <div 
        className="floating-orb w-72 h-72 -top-36 left-1/4 bg-shaman-teal/08"
        style={{ animationDelay: "3s" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header - matching AboutSection style */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
            The Mat
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-8 tracking-tight leading-tight">
            <span className="text-foreground">Professional quality.</span>
            <br />
            <span className="text-gradient italic">Your unique design.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            Premium materials that serious practitioners demand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid - Left Side - TV Screens */}
          <div className="grid grid-cols-2 gap-4">
            {tileImageSets.map((images, index) => (
              <TVScreenTile 
                key={index}
                images={images}
                interval={intervals[index]}
              />
            ))}
          </div>
          
          {/* Benefits Grid - Right Side */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group"
                >
                  <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-gradient transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA - matching site style */}
            <div className="pt-8 border-t border-border/30">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="font-display text-xl text-foreground mb-1">Ready to create yours?</p>
                  <p className="text-sm text-muted-foreground/60 font-body">Starting at $89 · Free worldwide shipping</p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-shaman-gold via-shaman-ember to-shaman-gold bg-[length:200%_100%] text-background font-body text-sm font-medium rounded-md hover:bg-right transition-all duration-500 shrink-0"
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
