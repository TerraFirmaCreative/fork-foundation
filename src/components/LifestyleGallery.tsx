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
  { src: lifestyle1, alt: "Yoga pose in nature" },
  { src: lifestyle2, alt: "Warrior pose on mat" },
  { src: lifestyle3, alt: "Hand detail on mat" },
  { src: lifestyle4, alt: "Forward fold yoga pose" },
  { src: lifestyle5, alt: "Upward dog pose" },
  { src: lifestyle6, alt: "Hand on colorful mat" },
  { src: lifestyle7, alt: "Standing forward bend" },
  { src: lifestyle8, alt: "Foot detail on mat" },
  { src: lifestyle9, alt: "Mat texture close up" },
];

const LifestyleGallery = () => {
  return (
    <section className="relative overflow-hidden p-1">
      <div className="columns-2 md:columns-4 gap-1 space-y-1">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative break-inside-avoid overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifestyleGallery;
