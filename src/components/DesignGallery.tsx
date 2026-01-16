import mat1 from "@/assets/mat-1.jpg";
import mat2 from "@/assets/mat-2.jpg";
import mat3 from "@/assets/mat-3.jpg";
import mat4 from "@/assets/mat-4.jpg";
import mat5 from "@/assets/mat-5.jpg";
import mat6 from "@/assets/mat-6.jpg";
import mat7 from "@/assets/mat-7.jpg";
import mat8 from "@/assets/mat-8.jpg";
import mat9 from "@/assets/mat-9.jpg";
import mat10 from "@/assets/mat-10.jpg";
import mat11 from "@/assets/mat-11.jpg";
import mat12 from "@/assets/mat-12.jpg";
import mat13 from "@/assets/mat-13.jpg";
import mat14 from "@/assets/mat-14.jpg";
import mat15 from "@/assets/mat-15.jpg";
import mat16 from "@/assets/mat-16.jpg";
import mat17 from "@/assets/mat-17.jpg";
import mat18 from "@/assets/mat-18.jpg";

const designs = [
  { id: 1, image: mat1, alt: "Cosmic whale yoga mat design" },
  { id: 2, image: mat2, alt: "Mandala sunset yoga mat design" },
  { id: 3, image: mat16, alt: "Tribal cosmic symbols yoga mat design" },
  { id: 4, image: mat4, alt: "Colorful peacock yoga mat design" },
  { id: 5, image: mat17, alt: "Sleeping kitten yoga mat design" },
  { id: 6, image: mat6, alt: "Cosmic cat yoga mat design" },
  { id: 7, image: mat7, alt: "Mushroom forest yoga mat design" },
  { id: 8, image: mat18, alt: "Mountain lake reflection yoga mat design" },
  { id: 9, image: mat9, alt: "Fire dragon yoga mat design" },
  { id: 10, image: mat10, alt: "Coral reef yoga mat design" },
  { id: 11, image: mat11, alt: "Aurora borealis yoga mat design" },
  { id: 12, image: mat12, alt: "Marble swirls yoga mat design" },
  { id: 13, image: mat13, alt: "Tree of life yoga mat design" },
  { id: 14, image: mat14, alt: "Mystical owl yoga mat design" },
  { id: 15, image: mat15, alt: "Cosmic koi yoga mat design" },
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
