import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const BlogPostHudson = () => {
  const [current, setCurrent] = useState(0);
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem, isLoading, setDrawerOpen } = useCartStore();
  const { country } = useLocale();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3800);
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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-20">
        {/* Post header */}
        <div className="mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 font-body">
            Unique Yogi of the Week
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-3 tracking-tight">
            Hudson in Margaret River
          </h1>
          <p className="font-display text-xl md:text-2xl text-muted-foreground/60 italic">
            Denmark, Western Australia
          </p>
        </div>

        {/* Image slideshow */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-12">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[3000ms] ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </div>

        {/* Article body */}
        <article className="prose-custom space-y-6 text-foreground/75 font-body leading-relaxed text-base md:text-lg">
          <p>
            Hudson is originally from Canada, but right now you'll find her on the other side of the world — living in Denmark, a coastal town nestled in the wild beauty of Western Australia.
          </p>
          <p>
            She's currently based in Margaret River, a region known for its dramatic limestone cliffs, turquoise water, ancient forests and long, empty beaches. It's a place where mornings begin with mist rising through the karri trees and end with golden light spilling across the Indian Ocean. The pace is slower here. Spacious. Grounded. It's the kind of landscape that naturally pulls you into your body.
          </p>
          <p>
            Hudson has been rolling out her mat at quiet lookouts above the ocean and in pockets of bushland just outside town — practising as the wind moves through the trees and the sound of the waves carries in the background.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground pt-4">
            Her Mat of Choice: Centered Light
          </h2>
          <p>
            Hudson chose Centered Light for its balance of softness and strength. The design feels calm but intentional — subtle movement in the artwork that mirrors the rhythm of breath.
          </p>
          <p>
            She says she was drawn to it because it feels "anchoring without being heavy." The tones sit beautifully against the pale sand and deep greens of the region, and the grip holds steady even on cooler coastal mornings.
          </p>
          <p>
            For Hudson, travelling means constantly adapting — new time zones, new environments, new routines. Having a mat that feels familiar and grounding wherever she lays it down has become part of her ritual. A small piece of consistency in ever-changing surroundings.
          </p>
          <p>
            Margaret River might be thousands of miles from home, but practice has a way of creating its own sense of place.
          </p>
        </article>

        {/* Shop Hudson's Mat */}
        <div className="mt-16 border border-border/40 rounded-2xl p-6 md:p-10 bg-card/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
            {/* Product image */}
            <LocaleLink
              to={`/product/${PRODUCT_HANDLE}`}
              className="block relative aspect-square rounded-xl overflow-hidden group"
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
                <>
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt="Psychedelic Mandelbrot Dreams yoga mat"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out ${
                        i === current ? "opacity-100" : "opacity-0"
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </>
              )}
            </LocaleLink>

            {/* Product info + add to cart */}
            <div className="space-y-5">
              <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 font-body">
                Hudson's Mat
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-medium text-foreground">
                Mandelbrot Dreams
              </h3>
              <p className="text-foreground/60 font-body leading-relaxed">
                Hudson chose this design for its infinite, fractal patterns — a reminder that growth on the mat never stops.
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostHudson;
