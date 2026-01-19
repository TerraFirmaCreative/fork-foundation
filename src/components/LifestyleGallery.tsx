import { useState, useEffect } from "react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const images = [
  { src: gallery1, alt: "Rolled yoga mat on grass at sunset" },
  { src: gallery2, alt: "Colorful yoga mat in park at golden hour" },
  { src: gallery3, alt: "Artistic yoga mat design in natural setting" },
  { src: gallery4, alt: "Close-up of mat texture and print quality" },
  { src: gallery5, alt: "Detailed view of yoga mat artwork" },
  { src: gallery6, alt: "Yoga mat rolled up in grass" },
  { src: gallery7, alt: "Yoga mat with handpan in outdoor setting" },
  { src: gallery8, alt: "Yoga mat on grass with sunset backdrop" },
  { src: gallery9, alt: "Rolled yoga mat in field at dusk" },
  { src: gallery10, alt: "Colorful rolled mat in park" },
];

const LifestyleGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl font-medium mb-2 tracking-tight text-foreground">
            In the wild
          </h2>
          <p className="text-muted-foreground font-body font-light text-sm">
            Mats that move with you.
          </p>
        </div>

        {/* Crossfade gallery */}
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-terra-clay w-6"
                  : "bg-terra-sand/40 hover:bg-terra-sand/60"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleGallery;
