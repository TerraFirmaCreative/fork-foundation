import lifestyle1 from "@/assets/yoga-mat-new-1.jpg";
import lifestyle2 from "@/assets/yoga-mat-new-2.jpg";
import lifestyle3 from "@/assets/yoga-mat-new-3.jpg";
import lifestyle4 from "@/assets/yoga-mat-new-4.jpg";
import lifestyle5 from "@/assets/yoga-mat-new-5.jpg";
import lifestyle6 from "@/assets/yoga-mat-new-6.jpg";
import lifestyle7 from "@/assets/yoga-mat-new-7.jpg";
import lifestyle8 from "@/assets/yoga-mat-new-8.jpg";
import lifestyle9 from "@/assets/yoga-mat-new-9.jpg";

const images = [
  { src: lifestyle1, alt: "Yoga practice on artistic mat", className: "col-span-2 row-span-2" },
  { src: lifestyle2, alt: "Close-up of mat texture and detail", className: "col-span-1 row-span-1" },
  { src: lifestyle3, alt: "Hand on yoga mat detail", className: "col-span-1 row-span-2" },
  { src: lifestyle4, alt: "Forward fold on cosmic mat", className: "col-span-1 row-span-1" },
  { src: lifestyle5, alt: "Cobra pose on yoga mat", className: "col-span-1 row-span-1" },
  { src: lifestyle6, alt: "Standing forward bend on mat", className: "col-span-2 row-span-1" },
  { src: lifestyle7, alt: "Mat surface close-up spiral", className: "col-span-1 row-span-1" },
  { src: lifestyle8, alt: "Warrior pose foot detail", className: "col-span-1 row-span-1" },
  { src: lifestyle9, alt: "Lunge on artistic yoga mat", className: "col-span-1 row-span-1" },
];

const LifestyleGallery = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-1">
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
