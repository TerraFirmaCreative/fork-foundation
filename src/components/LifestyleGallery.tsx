import lifestyle1 from "@/assets/lifestyle-1.png";
import lifestyle2 from "@/assets/lifestyle-2.png";
import lifestyle3 from "@/assets/lifestyle-3.png";
import lifestyle4 from "@/assets/lifestyle-4.png";
import lifestyle5 from "@/assets/lifestyle-5.png";
import lifestyle6 from "@/assets/lifestyle-6.png";
import lifestyle7 from "@/assets/lifestyle-7.png";
import lifestyle8 from "@/assets/lifestyle-8.png";
import lifestyle9 from "@/assets/lifestyle-9.png";

const images = [
  { src: lifestyle1, alt: "Yoga pose in nature", className: "col-span-2 row-span-2" },
  { src: lifestyle2, alt: "Warrior pose on mat", className: "col-span-1 row-span-1" },
  { src: lifestyle3, alt: "Hand detail on mat", className: "col-span-1 row-span-1" },
  { src: lifestyle4, alt: "Forward fold yoga pose", className: "col-span-1 row-span-1" },
  { src: lifestyle5, alt: "Upward dog pose", className: "col-span-1 row-span-1" },
  { src: lifestyle6, alt: "Hand on colorful mat", className: "col-span-1 row-span-1" },
  { src: lifestyle7, alt: "Standing forward bend", className: "col-span-1 row-span-1" },
  { src: lifestyle8, alt: "Foot detail on mat", className: "col-span-2 row-span-2" },
  { src: lifestyle9, alt: "Mat texture close up", className: "col-span-2 row-span-1" },
];

const LifestyleGallery = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[110px] md:auto-rows-[145px] gap-1">
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
