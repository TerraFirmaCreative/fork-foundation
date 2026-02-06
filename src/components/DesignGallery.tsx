import { useMemo } from "react";

import { Copy } from "lucide-react";
import { toast } from "sonner";
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
import newMat21 from "@/assets/new-mat-21.png";
import newMat22 from "@/assets/new-mat-22.png";
import newMat23 from "@/assets/new-mat-23.png";
import newMat24 from "@/assets/new-mat-24.png";

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
  { id: 21, image: newMat21, alt: "Symmetrical design circle on the middle yoga Nonatte", prompt: "Symmetrical design circle on the middle yoga Nonatte" },
  { id: 22, image: newMat22, alt: "Amazing wonderful fractal vibrancy life symmetry", prompt: "Amazing wonderful fractal vibrancy life symmetry" },
  { id: 23, image: newMat23, alt: "Triangles stack", prompt: "Triangles stack" },
  { id: 24, image: newMat24, alt: "Unwavering love of surfing and symmetrical dreams", prompt: "Unwavering love of surfing and symmetrical dreams" },
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

  // Generate a random seed once per component mount
  const shuffledDesigns = useMemo(() => {
    const seed = Math.floor(Math.random() * 10000);
    return shuffleArray(designs, seed);
  }, []);
  
  const visibleDesigns = shuffledDesigns;

  return (
    <section className="hero-gradient py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-4">
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
      </div>
    </section>
  );
};

export default DesignGallery;
