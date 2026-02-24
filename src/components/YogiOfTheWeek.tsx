import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Loader2 } from "lucide-react";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useLocale } from "@/lib/i18n";
import { shopifyImageUrl } from "@/lib/imageUtils";
import LocaleLink from "@/components/LocaleLink";
import hudson1 from "@/assets/hudson-1.jpg";
import hudson2 from "@/assets/hudson-2.jpg";
import hudson3 from "@/assets/hudson-3.jpg";
import hudson4 from "@/assets/hudson-4.jpg";
import hudson5 from "@/assets/hudson-5.jpg";
import hudson6 from "@/assets/hudson-6.jpg";
import hudson7 from "@/assets/hudson-7.jpg";
import hudson8 from "@/assets/hudson-8.jpg";
import hudson9 from "@/assets/hudson-9.jpg";
import hudson10 from "@/assets/hudson-10.jpg";
import hudson11 from "@/assets/hudson-11.jpg";
import hudson12 from "@/assets/hudson-12.jpg";
import hudson13 from "@/assets/hudson-13.jpg";

const images = [
  { src: hudson1, alt: "Hudson practising yoga on the beach at Bunker Bay" },
  { src: hudson2, alt: "Hudson in downward dog at Bunker Bay" },
  { src: hudson3, alt: "Yoga mat on the sand with sun flare at Bunker Bay" },
  { src: hudson4, alt: "Hudson in triangle pose at Bunker Bay" },
  { src: hudson5, alt: "Hudson in forward fold on the beach" },
  { src: hudson6, alt: "Hudson in plank pose at Bunker Bay" },
  { src: hudson7, alt: "Hudson in warrior pose at Bunker Bay" },
  { src: hudson8, alt: "Hudson in downward dog at sunset" },
  { src: hudson9, alt: "Hudson in cobra pose on the beach" },
  { src: hudson10, alt: "Hudson in crescent lunge at Bunker Bay" },
  { src: hudson11, alt: "Hudson in low lunge reaching up" },
  { src: hudson12, alt: "Hudson in child's pose on the sand" },
  { src: hudson13, alt: "Hudson standing on her mat by the ocean" },
];

const PRODUCT_HANDLE = "psychedelic-mandelbrot-dreams";

const YogiOfTheWeek = () => {
  const [current, setCurrent] = useState(0);
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem, isLoading, setDrawerOpen } = useCartStore();
  const { country } = useLocale();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchProductByHandle(PRODUCT_HANDLE, country).then(setProduct);
  }, [country]);

  const variant = product?.node.variants.edges[0]?.node;
  const productImage = product?.node.images.edges[0]?.node;

  const handleAddToCart = async () => {
    if (!product || !variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions || [],
    });
    setDrawerOpen(true);
  };

  const price = variant
    ? new Intl.NumberFormat("en-AU", { style: "currency", currency: variant.price.currencyCode }).format(parseFloat(variant.price.amount))
    : "$170.00";

  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 font-body">
            Community Spotlight
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">Unique Yogi </span>
            <span className="text-gradient italic">of the Week</span>
          </h2>
        </div>

        {/* Two-column: blurb + slideshow */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-5">
            <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground">
              Hudson
            </h3>
            <p className="text-foreground/70 font-body leading-relaxed">
              Hudson is from Canada and currently travelling Australia. She's just bought a 4x4 and
              is hitting the open road — exploring the coastline one breathtaking spot at a time.
            </p>
            <p className="text-foreground/70 font-body leading-relaxed">
              She picked up her Unique mat at the beginning of her trip and has been obsessed with
              the colours and the pattern ever since. It just makes her want to practice in every
              beautiful place she can find.
            </p>
            <p className="text-foreground/50 font-body text-sm italic">
              📍 Bunker Bay, Western Australia
            </p>
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>

        {/* Shop Hudson's Mat */}
        <div className="mt-16 border border-border/40 rounded-2xl p-6 md:p-10 bg-card/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Product image */}
            <LocaleLink
              to={`/product/${PRODUCT_HANDLE}`}
              className="block relative aspect-[3/4] rounded-xl overflow-hidden group"
            >
              {productImage ? (
                <img
                  src={shopifyImageUrl(productImage.url, 600)}
                  alt={productImage.altText || "Psychedelic Mandelbrot Dreams yoga mat"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                /* Fallback: cycle through Hudson's photos showing the mat */
                <img
                  src={images[current].src}
                  alt="Psychedelic Mandelbrot Dreams yoga mat"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </LocaleLink>

            {/* Product info + add to cart */}
            <div className="space-y-5">
              <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 font-body">
                Hudson's Mat
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-medium text-foreground">
                Psychedelic Mandelbrot Dreams
              </h3>
              <p className="text-foreground/60 font-body leading-relaxed">
                Inspired by the fractal geometry that becomes present during psychedelic experiences.
                Every spiral unfolds infinitely — just like your practice.
              </p>
              <p className="font-display text-3xl text-foreground font-medium">
                {price}
              </p>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center font-body text-foreground">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <Button
                  variant="cta"
                  size="lg"
                  className="flex-1 font-body font-medium tracking-wide glow-effect"
                  onClick={handleAddToCart}
                  disabled={isLoading || !variant}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <ShoppingCart className="h-4 w-4 mr-2" />
                  )}
                  Add to Cart
                </Button>
              </div>

              {!product && (
                <p className="text-xs text-muted-foreground/50 font-body">
                  Product coming soon — check back shortly.
                </p>
              )}

              <LocaleLink
                to={`/product/${PRODUCT_HANDLE}`}
                className="inline-block text-sm text-shaman-gold/70 hover:text-shaman-gold transition-colors font-body underline underline-offset-4"
              >
                View full product details →
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogiOfTheWeek;
