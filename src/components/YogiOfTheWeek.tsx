import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useLocale } from "@/lib/i18n";
import { GALLERY_SIZES, shopifyImageUrl, shopifySrcSet } from "@/lib/imageUtils";
import LocaleLink from "@/components/LocaleLink";
import { formatPrice } from "@/lib/utils";
import hudson1 from "@/assets/hudson/hudson-1.jpeg";
import hudson2 from "@/assets/hudson/hudson-2.jpeg";
import hudson3 from "@/assets/hudson/hudson-3.jpeg";
import hudson4 from "@/assets/hudson/hudson-4.jpeg";
import hudson5 from "@/assets/hudson/hudson-5.jpeg";
import hudson6 from "@/assets/hudson/hudson-6.jpeg";
import hudson7 from "@/assets/hudson/hudson-7.jpeg";
import hudson8 from "@/assets/hudson/hudson-8.jpeg";

const images = [
  // Mixed beach/forest for visual rhythm
  { src: hudson1, alt: "Hudson in crescent reach on the beach at Bunker Bay" },
  { src: hudson5, alt: "Cosmic Igloo mat laid out on the forest floor" },
  { src: hudson3, alt: "Hudson in warrior pose with arms wide on the beach" },
  { src: hudson8, alt: "Hudson in a supported headstand in the forest" },
  { src: hudson6, alt: "Hudson resting in child's pose in the forest" },
  { src: hudson2, alt: "Hudson in a seated twist on her mat at the beach" },
  { src: hudson7, alt: "Hudson in pigeon pose on the forest floor" },
  { src: hudson4, alt: "Hudson standing beside her Cosmic Igloo mat by the ocean" },
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
  // Each slot drifts with its own rhythm so the four panels feel like they're dancing,
  // never flipping in unison and never feeling abrupt.
  useEffect(() => {
    const tick = () => {
      onAdvance();
      schedule();
    };
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = () => {
      // 6–10s irregular cadence per slot — long enough that the crossfade fully resolves
      timeout = setTimeout(tick, 6000 + Math.random() * 4000);
    };
    timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card/40">
      {images.map((img, i) => {
        const active = i === currentIndex;
        return (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            style={{
              transitionProperty: "opacity, transform, filter",
              transitionDuration: "2600ms, 9000ms, 2600ms",
              transitionTimingFunction:
                "cubic-bezier(0.4, 0, 0.2, 1), linear, cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            className={`absolute inset-0 w-full h-full object-cover will-change-[opacity,transform] ${
              active
                ? "opacity-100 scale-105 blur-0"
                : "opacity-0 scale-100 blur-[2px]"
            }`}
            loading="lazy"
            decoding="async"
          />
        );
      })}
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
              <p className="text-xs tracking-[0.3em] uppercase text-shaman-gold/70 font-body">
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
