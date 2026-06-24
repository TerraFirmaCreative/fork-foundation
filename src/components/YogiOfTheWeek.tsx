import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useLocale } from "@/lib/i18n";
import { GALLERY_SIZES, shopifyImageUrl, shopifySrcSet } from "@/lib/imageUtils";
import LocaleLink from "@/components/LocaleLink";
import { formatPrice } from "@/lib/utils";
import hudson1 from "@/assets/hudson/hudson-1.webp?w=300;500;800&format=avif;webp&as=picture";
import hudson2 from "@/assets/hudson/hudson-2.webp?w=300;500;800&format=avif;webp&as=picture";
import hudson3 from "@/assets/hudson/hudson-3.webp?w=300;500;800&format=avif;webp&as=picture";
import hudson4 from "@/assets/hudson/hudson-4.webp?w=300;500;800&format=avif;webp&as=picture";
import hudson5 from "@/assets/hudson/hudson-5.webp?w=300;500;800&format=avif;webp&as=picture";
import hudson6 from "@/assets/hudson/hudson-6.webp?w=300;500;800&format=avif;webp&as=picture";
import hudson7 from "@/assets/hudson/hudson-7.webp?w=300;500;800&format=avif;webp&as=picture";
import hudson8 from "@/assets/hudson/hudson-8.webp?w=300;500;800&format=avif;webp&as=picture";

type Picture = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

// On mobile we render 2 columns inside px-6 page padding → ~46vw per tile.
// At md+ we switch to 4 columns inside max-w-5xl → ~22vw, capped.
const SIZES = "(min-width: 1024px) 240px, (min-width: 768px) 22vw, 46vw";

const images: { pic: Picture; alt: string }[] = [
  { pic: hudson1 as unknown as Picture, alt: "Hudson in crescent reach on the beach at Bunker Bay" },
  { pic: hudson5 as unknown as Picture, alt: "Cosmic Igloo mat laid out on the forest floor" },
  { pic: hudson3 as unknown as Picture, alt: "Hudson in warrior pose with arms wide on the beach" },
  { pic: hudson8 as unknown as Picture, alt: "Hudson in a supported headstand in the forest" },
  { pic: hudson6 as unknown as Picture, alt: "Hudson resting in child's pose in the forest" },
  { pic: hudson2 as unknown as Picture, alt: "Hudson in a seated twist on her mat at the beach" },
  { pic: hudson7 as unknown as Picture, alt: "Hudson in pigeon pose on the forest floor" },
  { pic: hudson4 as unknown as Picture, alt: "Hudson standing beside her Cosmic Igloo mat by the ocean" },
];

const PRODUCT_HANDLE = "harmony-yoga-mat-8053335f-7e1d-4503-af17-66a680c96fdc";
const SLOT_COUNT = 4;

/** Shared controller that ensures no two slots show the same image */
const useGalleryController = () => {
  // Each slot gets a dedicated pool of indices so they never overlap
  const [slots, setSlots] = useState<number[]>(() => {
    // Spread starting indices evenly
    return Array.from({ length: SLOT_COUNT }, (_, i) =>
      Math.floor((i * images.length) / SLOT_COUNT)
    );
  });

  const slotsRef = useRef(slots);
  slotsRef.current = slots;

  const advance = useCallback((slotIndex: number) => {
    setSlots((prev) => {
      const taken = new Set(prev);
      let next = (prev[slotIndex] + 1) % images.length;
      // Walk forward until we find an image not used by another slot
      let attempts = 0;
      while (taken.has(next) && next !== prev[slotIndex] && attempts < images.length) {
        next = (next + 1) % images.length;
        attempts++;
      }
      const updated = [...prev];
      updated[slotIndex] = next;
      return updated;
    });
  }, []);

  return { slots, advance };
};

const GallerySlot = ({
  currentIndex,
  onAdvance,
  delay,
}: {
  currentIndex: number;
  onAdvance: () => void;
  delay: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [prevIndex, setPrevIndex] = useState(currentIndex);
  const [showPrev, setShowPrev] = useState(false);

  // Only schedule rotation when the slot is on-screen and motion is allowed.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Keep latest onAdvance in a ref so the scheduler effect doesn't re-run
  // (and reset its timer) on every parent re-render.
  const onAdvanceRef = useRef(onAdvance);
  onAdvanceRef.current = onAdvance;

  useEffect(() => {
    if (!visible) return;
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = (ms: number) => {
      timeout = setTimeout(() => {
        onAdvanceRef.current();
        schedule(6000 + Math.random() * 4000);
      }, ms);
    };
    schedule(delay);
    return () => clearTimeout(timeout);
  }, [visible, delay]);

  // Crossfade: keep the previous image mounted briefly until the new one fades in.
  useEffect(() => {
    if (currentIndex === prevIndex) return;
    setShowPrev(true);
    const t = setTimeout(() => {
      setPrevIndex(currentIndex);
      setShowPrev(false);
    }, 900);
    return () => clearTimeout(t);
  }, [currentIndex, prevIndex]);

  const renderImg = (idx: number, active: boolean) => {
    const img = images[idx];
    return (
      <picture key={`${idx}-${active}`}>
        {img.pic.sources.avif && (
          <source type="image/avif" srcSet={img.pic.sources.avif} sizes={SIZES} />
        )}
        {img.pic.sources.webp && (
          <source type="image/webp" srcSet={img.pic.sources.webp} sizes={SIZES} />
        )}
        <img
          src={img.pic.img.src}
          alt={img.alt}
          width={img.pic.img.w}
          height={img.pic.img.h}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[900ms] ease-out ${
            active ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
        />
      </picture>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card/40"
    >
      {showPrev && prevIndex !== currentIndex && renderImg(prevIndex, false)}
      {renderImg(currentIndex, true)}
    </div>
  );
};


const YogiOfTheWeek = () => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const { isLoading } = useCartStore();
  const { country } = useLocale();
  const { slots, advance } = useGalleryController();

  useEffect(() => {
    fetchProductByHandle(PRODUCT_HANDLE, country).then(setProduct);
  }, [country]);

  const variant = product?.node.variants.edges[0]?.node;
  const price = variant ? formatPrice(variant.price) : "$170.00";

  return (
    <section className="relative py-12 md:py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/85 mb-3 font-body">
            Community Spotlight
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
            <span className="text-foreground">Cosmic Yogi </span>
            <span className="text-gradient italic">of the Month</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mt-3 max-w-2xl mx-auto">
            Every month we shine a light on someone from our community and the mat they chose. This month it's Hudson.
          </p>
        </div>

        {/* 4-image gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {slots.map((imgIndex, slotIndex) => (
            <GallerySlot
              key={slotIndex}
              currentIndex={imgIndex}
              onAdvance={() => advance(slotIndex)}
              delay={1500 + slotIndex * 1700}
            />
          ))}
        </div>

        {/* Shop Hudson's Mat — compact */}
        <div className="border border-border/40 rounded-2xl p-5 md:p-8 bg-card/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-1 space-y-2">
              <p className="text-xs tracking-[0.3em] uppercase text-shaman-gold/85 font-body">
                Hudson's Mat
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                Mandelbrot Dreams
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Hudson was drawn to this mat the moment she saw it. The infinite fractal patterns mirror her own ever-evolving practice; always changing, but always beginning with stillness.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <p className="font-display text-2xl md:text-3xl text-foreground font-medium">
                {price}
              </p>
              <LocaleLink to={`/product/${product?.node.handle}`}>
                <Button
                  variant="cta"
                  size="lg"
                  className="font-body font-medium tracking-wide glow-effect"
                  disabled={isLoading || !variant}
                >
                  I Want This Mat
                </Button>
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogiOfTheWeek;
