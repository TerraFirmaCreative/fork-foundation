import photo1 from "@/assets/community/photo-1.jpeg";
import photo2 from "@/assets/community/photo-2.jpeg";
import photo3 from "@/assets/community/photo-3.jpeg";
import photo4 from "@/assets/community/photo-4.jpeg";
import photo5 from "@/assets/community/photo-5.jpeg";
import photo6 from "@/assets/community/photo-6.jpeg";
import photo7 from "@/assets/community/photo-7.jpeg";
import photo8 from "@/assets/community/photo-8.jpeg";

const photos = [
  // Row 1 — beach / grass / beach / grass
  { src: photo1, alt: "Yogi in meditation pose at sunset on Cosmic Igloo mat", position: "center bottom" },
  { src: photo4, alt: "Headstand on a mandala yoga mat in the park", position: "center bottom" },
  { src: photo2, alt: "Yogi smiling on a vibrant mandala yoga mat at the beach", position: "center 20%" },
  { src: photo5, alt: "Backbend on a vibrant red mandala mat at golden hour", position: "center bottom" },
  // Row 2 — beach / grass / beach / grass
  { src: photo8, alt: "Yogi greeting the sunrise on the beach", position: "center bottom" },
  { src: photo7, alt: "Headstand in the park with sun flare on Cosmic Igloo mat", position: "center bottom" },
  { src: photo3, alt: "Seated meditation facing the ocean on a Cosmic Igloo mat", position: "center bottom" },
  { src: photo6, alt: "Yogi carrying her rolled Cosmic Igloo mat at sunset", position: "center bottom" },
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
              style={{ objectPosition: p.position }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-700" />
            <div className="absolute inset-0 ring-1 ring-inset ring-shaman-gold/0 group-hover:ring-shaman-gold/40 transition-all duration-500" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 flex justify-end">
        <button
          onClick={() => {
            const el = document.getElementById("design-gallery");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="enter-cta group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-shaman-gold/40 bg-gradient-to-r from-shaman-gold/10 via-shaman-violet/10 to-shaman-gold/10 hover:from-shaman-gold/20 hover:via-shaman-violet/20 hover:to-shaman-gold/20 backdrop-blur-sm shadow-[0_0_24px_-12px_hsl(var(--shaman-gold)/0.5)] hover:shadow-[0_0_36px_-8px_hsl(var(--shaman-gold)/0.7)] transition-all duration-500 hover:scale-[1.03] cursor-pointer overflow-hidden"
          aria-label="Add a mat to your cart"
        >
          <span aria-hidden className="enter-cta-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-shaman-gold/15 to-transparent" />
          <span className="relative text-[0.7rem] sm:text-xs tracking-[0.32em] uppercase text-shaman-gold group-hover:text-foreground transition-colors duration-500 font-body font-light">
            Add to cart
          </span>
          <svg
            className="relative w-3.5 h-3.5 text-shaman-gold group-hover:text-foreground transition-colors duration-500 enter-cta-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CommunityRow;
