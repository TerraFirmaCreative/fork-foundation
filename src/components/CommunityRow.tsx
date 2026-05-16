import photo1 from "@/assets/community/photo-1.jpeg";
import photo2 from "@/assets/community/photo-2.jpeg";
import photo3 from "@/assets/community/photo-3.jpeg";
import photo4 from "@/assets/community/photo-4.jpeg";
import photo5 from "@/assets/community/photo-5.jpeg";
import photo6 from "@/assets/community/photo-6.jpeg";
import photo7 from "@/assets/community/photo-7.jpeg";
import photo8 from "@/assets/community/photo-8.jpeg";

const photos = [
  { src: photo1, alt: "Yogi in meditation pose at sunset on Cosmic Igloo mat" },
  { src: photo2, alt: "Yogi smiling on a vibrant mandala yoga mat at the beach" },
  { src: photo3, alt: "Seated meditation facing the ocean on a Cosmic Igloo mat" },
  { src: photo4, alt: "Headstand on a mandala yoga mat in the park" },
  { src: photo7, alt: "Headstand in the park with sun flare on Cosmic Igloo mat" },
  { src: photo8, alt: "Yogi greeting the sunrise on the beach" },
  { src: photo5, alt: "Backbend on a vibrant red mandala mat at golden hour" },
  { src: photo6, alt: "Yogi carrying her rolled Cosmic Igloo mat at sunset" },
];

const CommunityRow = () => {
  return (
    <section className="relative py-12 md:py-16 px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-3 font-body">
          Our Community
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
          <span className="text-foreground">In the wild, </span>
          <span className="text-gradient italic">on the mat</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 w-full bg-background">
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
