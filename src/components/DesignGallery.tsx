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
import newMat1 from "@/assets/new-mat-1.png";
import newMat2 from "@/assets/new-mat-2.png";
import newMat3 from "@/assets/new-mat-3.png";
import newMat4 from "@/assets/new-mat-4.png";
import newMat5 from "@/assets/new-mat-5.png";
import newMat6 from "@/assets/new-mat-6.png";
import newMat7 from "@/assets/new-mat-7.png";
import newMat8 from "@/assets/new-mat-8.png";
import newMat9 from "@/assets/new-mat-9.png";
import newMat10 from "@/assets/new-mat-10.png";
import newMat11 from "@/assets/new-mat-11.png";
import newMat12 from "@/assets/new-mat-12.png";
import newMat13 from "@/assets/new-mat-13.png";
import newMat14 from "@/assets/new-mat-14.png";
import newMat15 from "@/assets/new-mat-15.png";
import newMat16 from "@/assets/new-mat-16.png";
import newMat17 from "@/assets/new-mat-17.png";
import newMat18 from "@/assets/new-mat-18.png";
import newMat19 from "@/assets/new-mat-19.png";
import newMat20 from "@/assets/new-mat-20.png";

const designs = [
  { id: 1, image: newMat1, alt: "Yellow DMT sun psychedelic yoga mat design", prompt: "Yellow DMT sun psychedelic yoga mat design" },
  { id: 2, image: newMat2, alt: "Detailed mandala yoga mat design", prompt: "Detailed mandala yoga mat design" },
  { id: 3, image: newMat3, alt: "Mandelbrot set Picassoesque high vibes psychedelic", prompt: "Mandelbrot set Picassoesque high vibes psychedelic" },
  { id: 4, image: newMat4, alt: "Psychedelic Lemuria humpback whale dolphins", prompt: "Psychedelic Lemuria humpback whale dolphins" },
  { id: 5, image: newMat5, alt: "Red earth dub circus", prompt: "Red earth dub circus" },
  { id: 6, image: newMat6, alt: "The sun and moon split design", prompt: "The sun and moon split design" },
  { id: 7, image: newMat7, alt: "Vertical segmented images of abstract landscapes", prompt: "Vertical segmented images of abstract landscapes" },
  { id: 8, image: newMat8, alt: "Zoom psychedelic dots symmetry", prompt: "Zoom psychedelic dots symmetry" },
  { id: 9, image: newMat9, alt: "Huichol painting of a ritual spiritual ceremony", prompt: "Huichol painting of a ritual spiritual ceremony" },
  { id: 10, image: newMat10, alt: "Aboriginal dot art symmetrical fractals of chakra", prompt: "Aboriginal dot art symmetrical fractals of chakra" },
  { id: 11, image: newMat11, alt: "Earth sunrise water flowing psychedelic Picassoesque", prompt: "Earth sunrise water flowing psychedelic Picassoesque" },
  { id: 12, image: newMat12, alt: "High contrast pale blue green black chakra crystals", prompt: "High contrast pale blue green black chakra crystals" },
  { id: 13, image: newMat13, alt: "Mandelbrot set aboriginal dot art symmetrical love", prompt: "Mandelbrot set aboriginal dot art symmetrical love" },
  { id: 14, image: newMat14, alt: "Psychedelic fractals Picassoesque Lemuria humpback sun", prompt: "Psychedelic fractals Picassoesque Lemuria humpback sun" },
  { id: 15, image: newMat15, alt: "Psychedelic fractals Picassoesque Lemuria humpback moon", prompt: "Psychedelic fractals Picassoesque Lemuria humpback moon" },
  { id: 16, image: newMat16, alt: "Radial symmetry mountains sun painterly", prompt: "Radial symmetry mountains sun painterly" },
  { id: 17, image: newMat17, alt: "Simple rainbow of colours Sunlight flower of life", prompt: "Simple rainbow of colours Sunlight flower of life" },
  { id: 18, image: newMat18, alt: "Symmetrical Mandelbrot set into infinity Picassoesque", prompt: "Symmetrical Mandelbrot set into infinity Picassoesque" },
  { id: 19, image: newMat19, alt: "Symmetry psychedelic Picassoesque broccoli sunrise A", prompt: "Symmetry psychedelic Picassoesque broccoli sunrise A" },
  { id: 20, image: newMat20, alt: "Symmetry psychedelic Picassoesque broccoli sunrise B", prompt: "Symmetry psychedelic Picassoesque broccoli sunrise B" },
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
