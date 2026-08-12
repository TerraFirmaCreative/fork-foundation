import LocaleLink from "@/components/LocaleLink";
import { FEATURED_PRODUCT_HANDLE } from "@/lib/communityPhotos";
import { shuffleLifestylePhotos } from "@/lib/lifestylePhotos";
import { shopifyImageUrl, shopifySrcSet } from "@/lib/imageUtils";

// Shuffled once per page load so returning visitors see variety.
const photos = shuffleLifestylePhotos();
// Duplicated for a seamless marquee loop.
const loop = [...photos, ...photos];

const SIZES = "(min-width: 768px) 200px, 130px";

/**
 * Slow-drifting strip of real yogis on Cosmic Igloo mats.
 * Pure CSS transform marquee — no JS loop, no main-thread cost.
 */
const HeroPhotoStrip = () => {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden group/strip">
      {/* Edge fades so the strip dissolves into the cosmic backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, #000 0%, transparent 14%, transparent 86%, #000 100%)",
        }}
      />

      <div className="hero-marquee flex gap-2 md:gap-3 w-max motion-reduce:animate-none">
        {loop.map((p, i) => (
          <LocaleLink
            key={i}
            to={`/product/${FEATURED_PRODUCT_HANDLE}`}
            aria-hidden={i >= photos.length}
            tabIndex={i >= photos.length ? -1 : undefined}
            aria-label={`Shop the mat — ${p.alt}`}
            className="group relative block shrink-0 overflow-hidden rounded-lg w-[112px] h-[150px] md:w-[172px] md:h-[230px] [@media(min-width:768px)_and_(max-height:820px)]:w-[124px] [@media(min-width:768px)_and_(max-height:820px)]:h-[166px] bg-black/60 ring-1 ring-inset ring-shaman-gold/10 hover:ring-shaman-gold/50 transition-all duration-500 hover:shadow-[0_0_36px_-10px_hsl(var(--shaman-violet)/0.7)]"
          >
            <img
              src={shopifyImageUrl(p.src, 400)}
              srcSet={shopifySrcSet(p.src, [200, 300, 400, 600])}
              sizes={SIZES}
              alt={i >= photos.length ? "" : p.alt}
              width={200}
              height={267}
              loading={i < 4 ? "eager" : "lazy"}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
          </LocaleLink>
        ))}
      </div>

      <style>{`
        @keyframes hero-marquee-drift {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .hero-marquee {
          animation: hero-marquee-drift 70s linear infinite;
          will-change: transform;
        }
        .group\\/strip:hover .hero-marquee { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .hero-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
};

export default HeroPhotoStrip;
