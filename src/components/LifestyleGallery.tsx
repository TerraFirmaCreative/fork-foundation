import lifestyle1 from "@/assets/yoga-mat-new-1.jpg";
import lifestyle2 from "@/assets/yoga-mat-new-2.jpg";
import lifestyle3 from "@/assets/yoga-mat-new-3.jpg";
import lifestyle4 from "@/assets/yoga-mat-new-4.jpg";
import lifestyle5 from "@/assets/yoga-mat-new-5.jpg";
import lifestyle6 from "@/assets/yoga-mat-new-6.jpg";

const images = [
  { src: lifestyle1, alt: "Warrior pose on artistic yoga mat", className: "col-span-2 row-span-2" },
  { src: lifestyle2, alt: "Yoga practice on cosmic mat", className: "col-span-1 row-span-1" },
  { src: lifestyle3, alt: "Hand detail on mat surface", className: "col-span-1 row-span-1" },
  { src: lifestyle4, alt: "Forward fold on yoga mat", className: "col-span-1 row-span-1" },
  { src: lifestyle5, alt: "Cobra pose on yoga mat", className: "col-span-1 row-span-2" },
  { src: lifestyle6, alt: "Standing forward bend", className: "col-span-2 row-span-1" },
];

const LifestyleGallery = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${image.className}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifestyleGallery;
