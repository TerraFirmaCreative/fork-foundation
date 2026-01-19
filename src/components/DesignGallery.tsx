import { useState } from "react";
import { Button } from "@/components/ui/button";
import mat27 from "@/assets/mat-27.png";
import mat28 from "@/assets/mat-28.png";
import mat29 from "@/assets/mat-29.png";
import mat30 from "@/assets/mat-30.png";
import mat33 from "@/assets/mat-33.png";
import mat35 from "@/assets/mat-35.png";
import mat37 from "@/assets/mat-37.png";
import mat38 from "@/assets/mat-38.png";
import mat42 from "@/assets/mat-42.png";
import mat43 from "@/assets/mat-43.png";
import mat44 from "@/assets/mat-44.png";
import mat39 from "@/assets/mat-39.png";

// Curated collections - fewer designs, more intentional
const collections = {
  all: [
    { id: 1, image: mat38, alt: "Earth sunrise flowing water yoga mat" },
    { id: 2, image: mat35, alt: "Starry whale mandala yoga mat" },
    { id: 3, image: mat43, alt: "Flower of life sacred geometry yoga mat" },
    { id: 4, image: mat27, alt: "Mystic mountains landscape yoga mat" },
    { id: 5, image: mat42, alt: "Ocean coral sunset yoga mat" },
    { id: 6, image: mat33, alt: "Mandala vibrancy yoga mat" },
    { id: 7, image: mat28, alt: "Buddha meditation yoga mat" },
    { id: 8, image: mat44, alt: "Aboriginal dot art yoga mat" },
  ],
  earth: [
    { id: 1, image: mat38, alt: "Earth sunrise flowing water yoga mat" },
    { id: 2, image: mat27, alt: "Mystic mountains landscape yoga mat" },
    { id: 3, image: mat37, alt: "Forest sunrise yoga mat" },
    { id: 4, image: mat29, alt: "Volcano energy yoga mat" },
  ],
  flow: [
    { id: 1, image: mat35, alt: "Starry whale mandala yoga mat" },
    { id: 2, image: mat42, alt: "Ocean coral sunset yoga mat" },
    { id: 3, image: mat39, alt: "Whale fractals ocean yoga mat" },
    { id: 4, image: mat30, alt: "Spiral flow yoga mat" },
  ],
  geometry: [
    { id: 1, image: mat43, alt: "Flower of life sacred geometry yoga mat" },
    { id: 2, image: mat33, alt: "Mandala vibrancy yoga mat" },
    { id: 3, image: mat44, alt: "Aboriginal dot art yoga mat" },
    { id: 4, image: mat28, alt: "Buddha meditation yoga mat" },
  ],
};

type CollectionKey = keyof typeof collections;

const DesignGallery = () => {
  const [activeCollection, setActiveCollection] = useState<CollectionKey>("all");
  
  const currentDesigns = collections[activeCollection];

  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 tracking-tight text-foreground">
            Curated designs
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-md mx-auto">
            Explore our collections, or create something entirely your own.
          </p>
        </div>
        
        {/* Collection tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {(["all", "earth", "flow", "geometry"] as CollectionKey[]).map((collection) => (
            <button
              key={collection}
              onClick={() => setActiveCollection(collection)}
              className={`px-5 py-2 text-sm font-body tracking-wide rounded-full transition-all duration-300 ${
                activeCollection === collection
                  ? "bg-terra-sand/20 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {collection === "all" ? "All" : collection.charAt(0).toUpperCase() + collection.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Gallery grid - 4 columns, curated */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentDesigns.map((design) => (
            <div
              key={design.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={design.image}
                alt={design.alt}
                className="w-full aspect-[1/2.5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
        
        {/* Simple CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="ghost" 
            className="font-body text-muted-foreground hover:text-foreground"
          >
            View all designs →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;