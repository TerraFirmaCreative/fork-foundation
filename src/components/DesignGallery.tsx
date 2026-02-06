import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Copy } from "lucide-react";
import { toast } from "sonner";
import mat27 from "@/assets/mat-27.png";
import mat28 from "@/assets/mat-28.png";
import mat29 from "@/assets/mat-29.png";
import mat30 from "@/assets/mat-30.png";
import mat31 from "@/assets/mat-31.png";
import mat32 from "@/assets/mat-32.png";
import mat33 from "@/assets/mat-33.png";
import mat34 from "@/assets/mat-34.png";
import mat35 from "@/assets/mat-35.png";
import mat36 from "@/assets/mat-36.png";
import mat37 from "@/assets/mat-37.png";
import mat38 from "@/assets/mat-38.png";
import mat39 from "@/assets/mat-39.png";
import mat40 from "@/assets/mat-40.png";
import mat41 from "@/assets/mat-41.png";
import mat42 from "@/assets/mat-42.png";
import mat43 from "@/assets/mat-43.png";
import mat44 from "@/assets/mat-44.png";
import mat45 from "@/assets/mat-45.png";
import mat46 from "@/assets/mat-46.png";

const designs = [
  { id: 1, image: mat28, alt: "Blue medicine Buddha meditation yoga mat design", prompt: "Blue medicine Buddha in serene meditation with sacred lotus flowers and ethereal light rays" },
  { id: 2, image: mat37, alt: "Psychedelic broccoli sunrise forest yoga mat design", prompt: "Psychedelic broccoli forest at sunrise with fractal patterns and vibrant cosmic energy" },
  { id: 3, image: mat30, alt: "Psychedelic spiral fractals yoga mat design", prompt: "Hypnotic psychedelic spirals with rainbow fractals and sacred geometry patterns" },
  { id: 4, image: mat39, alt: "Lemuria humpback whale fractals yoga mat design", prompt: "Majestic Lemurian humpback whale swimming through cosmic fractals and starlight" },
  { id: 5, image: mat35, alt: "Starry whale mandala yoga mat design", prompt: "Celestial whale mandala under starry night sky with flowing sacred patterns" },
  { id: 6, image: mat42, alt: "Dolphins ocean coral sunset yoga mat design", prompt: "Playful dolphins dancing through coral reefs at golden sunset with ocean waves" },
  { id: 7, image: mat38, alt: "Earth sunrise water flowing yoga mat design", prompt: "Mother Earth at sunrise with flowing water streams and life-giving energy" },
  { id: 8, image: mat43, alt: "Love fractals flower of life aboriginal yoga mat design", prompt: "Aboriginal-inspired flower of life with love fractals and traditional dot patterns" },
  { id: 9, image: mat27, alt: "Psychedelic mystic mountains yoga mat design", prompt: "Mystic mountains under psychedelic aurora with sacred tribal patterns" },
  { id: 10, image: mat33, alt: "Fractal vibrancy mandala yoga mat design", prompt: "Vibrant fractal mandala bursting with rainbow energy and cosmic consciousness" },
  { id: 11, image: mat44, alt: "Aboriginal dot art chakra fractals yoga mat design", prompt: "Aboriginal dot art depicting seven chakras with fractal energy centers" },
  { id: 12, image: mat29, alt: "Chakra volcano fractals yoga mat design", prompt: "Volcanic energy erupting through chakra system with sacred fractal patterns" },
  { id: 13, image: mat36, alt: "Rainbow flower of life yoga mat design", prompt: "Rainbow-colored flower of life geometry radiating divine light and harmony" },
  { id: 14, image: mat40, alt: "Lemuria humpback whale yoga mat design", prompt: "Ancient Lemurian humpback whale guardian of sacred ocean wisdom" },
  { id: 15, image: mat32, alt: "Cosmic whale moonlight yoga mat design", prompt: "Cosmic whale breaching under moonlight with stardust and celestial energy" },
  { id: 16, image: mat45, alt: "Surfing symmetrical dreams yoga mat design", prompt: "Symmetrical surfing dreamscape with perfect waves and spiritual balance" },
  { id: 17, image: mat34, alt: "Purple fractal feathers yoga mat design", prompt: "Ethereal purple fractal feathers floating in cosmic purple nebula" },
  { id: 18, image: mat41, alt: "Zoomed psychedelic lemuria fractals yoga mat design", prompt: "Deep zoom into Lemurian fractals revealing psychedelic sacred patterns" },
  { id: 19, image: mat46, alt: "Amazing chakra volcanos fractals yoga mat design", prompt: "Volcanic chakra awakening with fractal lava flows and spiritual fire" },
  { id: 20, image: mat31, alt: "Colorful cats hugging yoga mat design", prompt: "Loving colorful cats embracing with psychedelic rainbow fur patterns" },
];

// Seeded random shuffle to ensure consistent order per session
const shuffleArray = <T,>(array: T[], seed: number): T[] => {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  let randomValue = seed;

  while (currentIndex !== 0) {
    randomValue = (randomValue * 9301 + 49297) % 233280;
    const randomIndex = Math.floor((randomValue / 233280) * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
  }

  return shuffled;
};

const DesignGallery = () => {
  const [expanded, setExpanded] = useState(false);
  const itemsPerRow = 5; // on sm+ screens
  const initialRows = 3;
  const expandedRows = 6;
  
  const initialCount = initialRows * itemsPerRow; // 15 items
  const expandedCount = expandedRows * itemsPerRow; // 30 items

  // Generate a random seed once per component mount
  const shuffledDesigns = useMemo(() => {
    const seed = Math.floor(Math.random() * 10000);
    return shuffleArray(designs, seed);
  }, []);
  
  const visibleDesigns = expanded 
    ? shuffledDesigns.slice(0, Math.min(expandedCount, shuffledDesigns.length)) 
    : shuffledDesigns.slice(0, Math.min(initialCount, shuffledDesigns.length));

  return (
    <section className="hero-gradient py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4">
          {visibleDesigns.map((design, index) => (
            <div
              key={design.id}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={design.image}
                alt={design.alt}
                className="w-full aspect-[1/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Copy prompt button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(design.prompt);
                  toast.success("Prompt copied to clipboard!");
                }}
                className="absolute top-2 right-2 p-1.5 bg-background/80 backdrop-blur-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
                title="Copy prompt"
              >
                <Copy className="w-3.5 h-3.5 text-foreground" />
              </button>
            </div>
          ))}
        </div>
        
        {!expanded && shuffledDesigns.length > initialCount && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setExpanded(true)}
              variant="outline"
              className="gap-2"
            >
              Show More <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DesignGallery;
