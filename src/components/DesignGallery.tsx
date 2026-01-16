import mat1 from "@/assets/mat-1.jpg";
import mat2 from "@/assets/mat-2.jpg";
import mat16 from "@/assets/mat-16.jpg";
import mat17 from "@/assets/mat-17.jpg";
import mat18 from "@/assets/mat-18.jpg";
import mat19 from "@/assets/mat-19.png";
import mat20 from "@/assets/mat-20.png";
import mat21 from "@/assets/mat-21.png";
import mat22 from "@/assets/mat-22.png";
import mat23 from "@/assets/mat-23.webp";
import mat24 from "@/assets/mat-24.png";
import mat25 from "@/assets/mat-25.png";
import mat26 from "@/assets/mat-26.png";

const designs = [
  { id: 1, image: mat19, alt: "Egyptian pharaoh geometric yoga mat design" },
  { id: 2, image: mat20, alt: "Mystical deer geometric yoga mat design" },
  { id: 3, image: mat21, alt: "Psychedelic meditation figure yoga mat design" },
  { id: 4, image: mat22, alt: "Cosmic sunset meditation yoga mat design" },
  { id: 5, image: mat23, alt: "Chakra mandala cosmic yoga mat design" },
  { id: 6, image: mat16, alt: "Tribal cosmic symbols yoga mat design" },
  { id: 7, image: mat24, alt: "Geometric circles abstract yoga mat design" },
  { id: 8, image: mat25, alt: "Cosmic mosaic mandalas yoga mat design" },
  { id: 9, image: mat26, alt: "Vibrant circles symmetry yoga mat design" },
  { id: 10, image: mat17, alt: "Sleeping kitten yoga mat design" },
  { id: 11, image: mat18, alt: "Mountain lake reflection yoga mat design" },
  { id: 12, image: mat1, alt: "Cosmic whale yoga mat design" },
  { id: 13, image: mat2, alt: "Mandala sunset yoga mat design" },
];

const DesignGallery = () => {
  return (
    <section className="hero-gradient py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <a href="#" className="text-foreground/80 hover:text-foreground underline underline-offset-4 mb-8 inline-block">
          Created by others &gt;
        </a>
        
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4">
          {designs.map((design, index) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;
