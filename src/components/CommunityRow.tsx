import photo1 from "@/assets/community/photo-1.webp";
import photo2 from "@/assets/community/photo-2.webp";
import photo3 from "@/assets/community/photo-3.webp";
import photo4 from "@/assets/community/photo-4.webp";
import photo5 from "@/assets/community/photo-5.webp";
import photo6 from "@/assets/community/photo-6.webp";
import photo7 from "@/assets/community/photo-7.webp";
import photo8 from "@/assets/community/photo-8.webp";

const allPhotos = [
  { src: photo1, alt: "Yogi in meditation pose at sunset on Cosmic Igloo mat", position: "center 60%" },
  { src: photo2, alt: "Yogi smiling on a vibrant mandala yoga mat at the beach", position: "center 25%" },
  { src: photo3, alt: "Seated meditation facing the ocean on a Cosmic Igloo mat", position: "center 55%" },
  { src: photo4, alt: "Headstand on a mandala yoga mat in the park", position: "center 55%" },
  { src: photo5, alt: "Backbend on a vibrant red mandala mat at golden hour", position: "center 55%" },
  { src: photo6, alt: "Yogi carrying her rolled Cosmic Igloo mat at sunset", position: "center 55%" },
  { src: photo7, alt: "Headstand in the park with sun flare on Cosmic Igloo mat", position: "center 55%" },
  { src: photo8, alt: "Yogi greeting the sunrise on the beach", position: "center 55%" },
];

// Fisher-Yates shuffle, runs once per page load
const photos = (() => {
  const arr = [...allPhotos];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
})();

const CommunityRow = () => {
  return (
    <section className="relative pt-12 md:pt-16 pb-6 md:pb-8 px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-3 font-body">
          Our Community
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
          <span className="text-foreground">In the wild, </span>
          <span className="text-gradient italic">on the mat</span>
        </h2>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 w-[85%] mx-auto bg-background">
        {photos.map((p, i) => (
          <div
            key={i}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: p.position }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-700" />
            <div className="absolute inset-0 ring-1 ring-inset ring-shaman-gold/0 group-hover:ring-shaman-gold/40 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityRow;
