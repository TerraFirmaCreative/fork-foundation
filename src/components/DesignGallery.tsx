import yogaMat1 from "@/assets/yoga-mat-1.jpg";
import yogaMat2 from "@/assets/yoga-mat-2.jpg";
import yogaMat3 from "@/assets/yoga-mat-3.jpg";
import yogaMat4 from "@/assets/yoga-mat-4.jpg";
import yogaMat5 from "@/assets/yoga-mat-5.jpg";

const designs = [
  { id: 1, image: yogaMat1, alt: "Cosmic whale yoga mat design" },
  { id: 2, image: yogaMat2, alt: "Mandala sunset yoga mat design" },
  { id: 3, image: yogaMat3, alt: "Sacred geometry yoga mat design" },
  { id: 4, image: yogaMat4, alt: "Colorful bird yoga mat design" },
  { id: 5, image: yogaMat5, alt: "Meditation sunset yoga mat design" },
];

const DesignGallery = () => {
  return (
    <section className="hero-gradient py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <a href="#" className="text-foreground/80 hover:text-foreground underline underline-offset-4 mb-8 inline-block">
          Created by others &gt;
        </a>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {designs.map((design, index) => (
            <div
              key={design.id}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={design.image}
                alt={design.alt}
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;
