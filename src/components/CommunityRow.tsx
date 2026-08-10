import LocaleLink from "@/components/LocaleLink";
import { FEATURED_PRODUCT_HANDLE, shufflePhotos } from "@/lib/communityPhotos";

// Shuffled once per page load
const photos = shufflePhotos();

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
          <span className="text-gradient">In the wild, </span>
          <span className="text-gradient">on the mat</span>
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
