import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useLocale } from "@/lib/i18n";
import { GALLERY_SIZES, shopifyImageUrl, shopifySrcSet } from "@/lib/imageUtils";
import LocaleLink from "@/components/LocaleLink";
import { formatPrice } from "@/lib/utils";

const images = [
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-1.webp?v=1773738118", alt: "Hudson practising yoga on the beach at Bunker Bay" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-2.jpg?v=1773738117", alt: "Hudson in downward dog at Bunker Bay" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-3.webp?v=1773738118", alt: "Yoga mat on the sand with sun flare at Bunker Bay" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-4.webp?v=1773738118", alt: "Hudson in triangle pose at Bunker Bay" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-5.webp?v=1773738118", alt: "Hudson in forward fold on the beach" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-6.webp?v=1773738118", alt: "Hudson in plank pose at Bunker Bay" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-7.webp?v=1773738118", alt: "Hudson in warrior pose at Bunker Bay" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-8.webp?v=1773738118", alt: "Hudson in downward dog at sunset" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-9.webp?v=1773738118", alt: "Hudson in cobra pose on the beach" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-10.webp?v=1773738118", alt: "Hudson in crescent lunge at Bunker Bay" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-11.webp?v=1773738118", alt: "Hudson in low lunge reaching up" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-12.jpg?v=1773738118", alt: "Hudson in child's pose on the sand" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/hudson-13.jpg?v=1773738117", alt: "Hudson standing on her mat by the ocean" },
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
  useEffect(() => {
    const tick = () => {
      onAdvance();
      schedule();
    };
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timeout = setTimeout(tick, 2500 + Math.random() * 1500);
    };
    timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={shopifyImageUrl(img.src, 400)}
          srcSet={shopifySrcSet(img.src, [150, 300, 450, 600])}
          sizes={GALLERY_SIZES}
          alt={img.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out ${i === currentIndex ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          decoding="async"
        />
      ))}
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
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-3 font-body">
            Community Spotlight
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
            <span className="text-foreground">Unique Yogi </span>
            <span className="text-gradient italic">of the Week</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mt-3 max-w-2xl mx-auto">
            Every week we shine a light on someone from our community and the mat they chose. This week it's Hudson.
          </p>
        </div>

        {/* 4-image gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {slots.map((imgIndex, slotIndex) => (
            <GallerySlot
              key={slotIndex}
              currentIndex={imgIndex}
              onAdvance={() => advance(slotIndex)}
              delay={1000 + slotIndex * 800}
            />
          ))}
        </div>

        {/* Shop Hudson's Mat — compact */}
        <div className="border border-border/40 rounded-2xl p-5 md:p-8 bg-card/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-1 space-y-2">
              <p className="text-xs tracking-[0.3em] uppercase text-shaman-gold/70 font-body">
                Hudson's Mat
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                Mandelbrot Dreams
              </h3>
              <p className="text-foreground/60 font-body leading-relaxed text-sm md:text-base">
                Hudson chose Mandelbrot Dreams for its infinite fractal patterns — a reminder that there's always more to discover on the mat.
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
