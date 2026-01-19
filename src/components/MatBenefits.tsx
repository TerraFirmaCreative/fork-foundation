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

// All images in a pool - each tile will offset to never show duplicates
const allImages = [mat1, mat2, mat3, mat4, mat5, mat6, mat7, mat8, mat9];

// Staggered intervals: 5s, 6s, 7s, 8s (slower)
const intervals = [5000, 6000, 7000, 8000];

// Starting offsets ensure no duplicates across tiles
const startOffsets = [0, 3, 6, 1];

const benefits = [
  {
    title: "Premium Natural Rubber",
    description: "Harvested from sustainable rubber tree plantations. Superior grip and cushioning that improves with use."
  },
  {
    title: "Non-Slip Surface",
    description: "Advanced texture technology keeps you grounded through intense hot yoga and sweaty flows."
  },
  {
    title: "Eco-Friendly Inks",
    description: "Water-based, non-toxic printing. Vibrant colours that stay true wash after wash."
  },
  {
    title: "5mm Thickness",
    description: "The perfect balance—enough cushion to protect joints, firm enough for stability in balances."
  },
  {
    title: "Machine Washable",
    description: "Easy care for lasting freshness. Quick-dry material ready for your next session."
  },
  {
    title: "2-Year Warranty",
    description: "Professional-grade durability backed by our guarantee. Built for daily practice."
  }
];

// TV Screen Tile component with smooth crossfade
const TVScreenTile = ({ startOffset, interval }: { startOffset: number, interval: number }) => {
  const [currentIndex, setCurrentIndex] = useState(startOffset);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="relative rounded-md overflow-hidden aspect-square bg-card/30">
      {allImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Yoga mat design ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none z-20" />
    </div>
  );
};

const MatBenefits = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      <MandalaDecoration className="-bottom-48 -right-48" size={500} />
      
      <div 
        className="floating-orb w-72 h-72 -top-36 left-1/4 bg-shaman-teal/08"
        style={{ animationDelay: "3s" }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 font-body">
            The Mat
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 tracking-tight leading-tight">
            <span className="text-foreground">Professional quality.</span>{" "}
            <span className="text-gradient italic">Your unique design.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            Premium materials that serious practitioners demand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image Grid - TV Screens with unique images */}
          <div className="grid grid-cols-2 gap-3">
            {startOffsets.map((offset, index) => (
              <TVScreenTile 
                key={index}
                startOffset={offset}
                interval={intervals[index]}
              />
            ))}
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-4 group"
              >
                <div className="w-1 rounded-full bg-gradient-to-b from-shaman-violet/40 via-shaman-magenta/40 to-shaman-gold/40 group-hover:from-shaman-violet group-hover:via-shaman-magenta group-hover:to-shaman-gold transition-all duration-300" />
                <div className="flex-1">
                  <h3 className="font-display text-base font-medium text-foreground mb-0.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatBenefits;
