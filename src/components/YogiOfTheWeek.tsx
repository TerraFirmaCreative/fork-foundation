import { useEffect, useState } from "react";
import hudson1 from "@/assets/hudson-1.jpg";
import hudson2 from "@/assets/hudson-2.jpg";
import hudson3 from "@/assets/hudson-3.jpg";
import hudson4 from "@/assets/hudson-4.jpg";
import hudson5 from "@/assets/hudson-5.jpg";
import hudson6 from "@/assets/hudson-6.jpg";
import hudson7 from "@/assets/hudson-7.jpg";
import hudson8 from "@/assets/hudson-8.jpg";
import hudson9 from "@/assets/hudson-9.jpg";

const images = [
  { src: hudson1, alt: "Hudson practising yoga on the beach at Bunker Bay" },
  { src: hudson2, alt: "Hudson in downward dog at Bunker Bay" },
  { src: hudson3, alt: "Yoga mat on the sand with sun flare at Bunker Bay" },
  { src: hudson4, alt: "Hudson in triangle pose at Bunker Bay" },
  { src: hudson5, alt: "Hudson in forward fold on the beach" },
  { src: hudson6, alt: "Hudson in plank pose at Bunker Bay" },
  { src: hudson7, alt: "Hudson in warrior pose at Bunker Bay" },
  { src: hudson8, alt: "Hudson in downward dog at sunset" },
  { src: hudson9, alt: "Hudson in cobra pose on the beach" },
];

const YogiOfTheWeek = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 font-body">
            Community Spotlight
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6">
            <span className="text-foreground">Unique Yogi </span>
            <span className="text-gradient italic">of the Week</span>
          </h2>
        </div>

        {/* Content: blurb + cycling image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10">
          {/* Blurb */}
          <div className="space-y-5">
            <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground">
              Hudson
            </h3>
            <p className="text-foreground/70 font-body leading-relaxed">
              Hudson is from Canada and currently travelling Australia. She's just bought a 4x4 and
              is hitting the open road — exploring the coastline one breathtaking spot at a time.
            </p>
            <p className="text-foreground/70 font-body leading-relaxed">
              She picked up her Unique mat at the beginning of her trip and has been obsessed with
              the colours and the pattern ever since. It just makes her want to practice in every
              beautiful place she can find.
            </p>
            <p className="text-foreground/50 font-body text-sm italic">
              📍 These photos were taken at Bunker Bay, Western Australia
            </p>
          </div>

          {/* Cycling hero image */}
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-elevated">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>

        {/* Masonry gallery – same style as LifestyleGallery */}
        <div className="columns-2 md:columns-4 gap-1">
          {images.map((img, i) => (
            <div key={i} className="relative overflow-hidden mb-1 break-inside-avoid">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogiOfTheWeek;
