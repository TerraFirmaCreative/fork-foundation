import { GALLERY_SIZES, shopifyImageUrl, shopifySrcSet } from "@/lib/imageUtils";

const images = [
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-1.webp?v=1773738118", alt: "Yoga pose in nature" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-2.webp?v=1773738118", alt: "Warrior pose on mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-3.webp?v=1773738117", alt: "Hand detail on mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-4.webp?v=1773738118", alt: "Forward fold yoga pose" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-6.webp?v=1773738117", alt: "Hand on colorful mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-5.webp?v=1773738117", alt: "Upward dog pose" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-7.webp?v=1773738118", alt: "Standing forward bend" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-8.webp?v=1773738118", alt: "Foot detail on mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-9.webp?v=1773738117", alt: "Mat texture close up" },
];

const LifestyleGallery = () => {
  return (
    <section className="relative overflow-hidden px-6 py-1">
      <div className="max-w-6xl mx-auto w-[79%] columns-2 md:columns-4 gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden mb-1 break-inside-avoid"
          >
            <img
              src={shopifyImageUrl(image.src, 400)}
              alt={image.alt}
              srcSet={shopifySrcSet(image.src, [150, 300, 450, 600])}
              sizes={GALLERY_SIZES}
              className="w-full h-auto transition-transform duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifestyleGallery;
