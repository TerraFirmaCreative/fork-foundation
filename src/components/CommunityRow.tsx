import LocaleLink from "@/components/LocaleLink";

// Responsive AVIF + WebP variants generated at build time by vite-imagetools.
// `as=picture` returns { sources: { avif, webp }, img: { src, w, h } }.
import photo1 from "@/assets/community/photo-1.webp?w=300;500;800&format=avif;webp&as=picture";
import photo2 from "@/assets/community/photo-2.webp?w=300;500;800&format=avif;webp&as=picture";
import photo3 from "@/assets/community/photo-3.webp?w=300;500;800&format=avif;webp&as=picture";
import photo4 from "@/assets/community/photo-4.webp?w=300;500;800&format=avif;webp&as=picture";
import photo5 from "@/assets/community/photo-5.webp?w=300;500;800&format=avif;webp&as=picture";
import photo6 from "@/assets/community/photo-6.webp?w=300;500;800&format=avif;webp&as=picture";
import photo7 from "@/assets/community/photo-7.webp?w=300;500;800&format=avif;webp&as=picture";
import photo8 from "@/assets/community/photo-8.webp?w=300;500;800&format=avif;webp&as=picture";

const FEATURED_PRODUCT_HANDLE = "beneath-the-waves-humpback-elegance-c8359a92-110f-4eae-88da-29b234d4c729-copy";

type Picture = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

const allPhotos: { pic: Picture; alt: string; position: string }[] = [
  { pic: photo1 as unknown as Picture, alt: "Yogi in meditation pose at sunset on Cosmic Igloo mat", position: "center 60%" },
  { pic: photo2 as unknown as Picture, alt: "Yogi smiling on a vibrant mandala yoga mat at the beach", position: "center 25%" },
  { pic: photo3 as unknown as Picture, alt: "Seated meditation facing the ocean on a Cosmic Igloo mat", position: "center 55%" },
  { pic: photo4 as unknown as Picture, alt: "Headstand on a mandala yoga mat in the park", position: "center 55%" },
  { pic: photo5 as unknown as Picture, alt: "Backbend on a vibrant red mandala mat at golden hour", position: "center 55%" },
  { pic: photo6 as unknown as Picture, alt: "Yogi carrying her rolled Cosmic Igloo mat at sunset", position: "center 55%" },
  { pic: photo7 as unknown as Picture, alt: "Headstand in the park with sun flare on Cosmic Igloo mat", position: "center 55%" },
  { pic: photo8 as unknown as Picture, alt: "Yogi greeting the sunrise on the beach", position: "center 55%" },
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

// On mobile we render 2 columns inside an 85vw container → ~42vw per tile.
// On ≥640px (sm) we switch to 4 columns → ~21vw.
const SIZES = "(min-width: 640px) 21vw, 42vw";

const CommunityRow = () => {
  return (
    <section className="relative pt-12 md:pt-16 pb-6 md:pb-8 px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/85 mb-3 font-body">
          Our Community
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
          <span className="text-foreground">In the wild, </span>
          <span className="text-gradient italic">on the mat</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 w-[85%] mx-auto bg-background">
        {photos.map((p, i) => (
          <LocaleLink
            key={i}
            to={`/product/${FEATURED_PRODUCT_HANDLE}`}
            className="group relative aspect-[3/4] overflow-hidden block"
            aria-label={`Shop ${p.alt}`}
          >
            <picture>
              {p.pic.sources.avif && (
                <source type="image/avif" srcSet={p.pic.sources.avif} sizes={SIZES} />
              )}
              {p.pic.sources.webp && (
                <source type="image/webp" srcSet={p.pic.sources.webp} sizes={SIZES} />
              )}
              <img
                src={p.pic.img.src}
                alt={p.alt}
                width={p.pic.img.w}
                height={p.pic.img.h}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: p.position }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-700" />
            <div className="absolute inset-0 ring-1 ring-inset ring-shaman-gold/0 group-hover:ring-shaman-gold/40 transition-all duration-500" />
          </LocaleLink>
        ))}
      </div>
    </section>
  );
};

export default CommunityRow;
