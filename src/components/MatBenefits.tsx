import { useEffect, useState, useCallback } from "react";
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

const allImages = [mat1, mat2, mat3, mat4, mat5, mat6, mat7, mat8, mat9];

// Staggered intervals for random changes
const intervals = [4000, 5500, 7000, 8500];

const benefits = [
  {
    title: "Natural Rubber Base",
    description: "Stable, grounded support that stays in place on any surface."
  },
  {
    title: "Microfiber Suede Surface",
    description: "Soft underfoot, responsive to movement, and designed to grip as your practice warms."
  },
  {
    title: "Balanced Thickness",
    description: "A low-profile cushion that supports joints while keeping you connected to the floor."
  },
  {
    title: "Edge-to-Edge Print",
    description: "High-resolution, full-coverage artwork that brings each design to life."
  },
  {
    title: "Lightweight & Durable",
    description: "Easy to carry, made to last, and designed for regular practice."
  }
];

// TV Screen Tile with random selection avoiding duplicates
const TVScreenTile = ({ 
  currentImage, 
  allImages 
}: { 
  currentImage: number;
  allImages: string[];
}) => {
  return (
    <div className="relative rounded-md overflow-hidden bg-card/30">
      {allImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Yoga mat design ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[5000ms] ease-in-out ${
            index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none z-20" />
    </div>
  );
};

const MatBenefits = () => {
  // Track which image each tile is showing
  const [tileImages, setTileImages] = useState([0, 2, 5, 7]);

  const getRandomAvailableImage = useCallback((currentImages: number[], excludeIndex: number) => {
    const usedImages = currentImages.filter((_, i) => i !== excludeIndex);
    const availableImages = allImages
      .map((_, index) => index)
      .filter(index => !usedImages.includes(index) && index !== currentImages[excludeIndex]);
    
    if (availableImages.length === 0) return currentImages[excludeIndex];
    return availableImages[Math.floor(Math.random() * availableImages.length)];
  }, []);

  useEffect(() => {
    const timers = intervals.map((interval, tileIndex) => {
      return setInterval(() => {
        setTileImages(prev => {
          const newImages = [...prev];
          newImages[tileIndex] = getRandomAvailableImage(prev, tileIndex);
          return newImages;
        });
      }, interval);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, [getRandomAvailableImage]);

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
            <span className="text-foreground">Beautiful design.</span>
            <span className="hidden md:inline"> </span>
            <span className="block md:inline text-gradient italic">Built for practice.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            Premium materials chosen to support daily practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Image Grid - TV Screens with random unique images */}
          <div className="grid grid-cols-2 gap-3">
            {tileImages.map((imageIndex, tileIndex) => (
              <TVScreenTile 
                key={tileIndex}
                currentImage={imageIndex}
                allImages={allImages}
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
