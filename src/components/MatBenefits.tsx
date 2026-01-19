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
    title: "Premium Natural Rubber",
    description: "Superior grip and cushioning."
  },
  {
    title: "Non-Slip Surface",
    description: "Stay grounded in every pose."
  },
  {
    title: "Eco-Friendly Inks",
    description: "Vibrant colors that won't fade."
  },
  {
    title: "Perfect Thickness",
    description: "5mm cushioning for joints."
  },
  {
    title: "Easy Care",
    description: "Machine washable."
  },
  {
    title: "Built to Last",
    description: "2-year warranty."
  }
];

// TV Screen Tile component with crossfade
const TVScreenTile = ({ images, interval }: { images: string[], interval: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative rounded-lg overflow-hidden aspect-square bg-background/50">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Yoga mat design ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex && !isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* TV screen overlay effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
        <div className="absolute inset-0 border border-border/30 rounded-lg" />
      </div>
    </div>
  );
};

const MatBenefits = () => {
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
          {/* Image Grid - Left Side - TV Screens */}
          <div className="grid grid-cols-2 gap-3 h-full">
            {tileImageSets.map((images, index) => (
              <TVScreenTile 
                key={index}
                images={images}
                interval={intervals[index]}
              />
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
