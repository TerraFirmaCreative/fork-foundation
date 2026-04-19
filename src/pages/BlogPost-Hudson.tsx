import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Loader2 } from "lucide-react";
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
    }, country);
    setDrawerOpen(true);
  };

  const price = variant
    ? formatPrice(variant.price)
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
          <h1 className="font-display text-3xl md:text-4xl font-medium mb-4 text-foreground">
            Hudson — Margaret River, South West Australia
          </h1>
        </div>

        {/* Article body with floated image */}
        <article className="prose-custom text-foreground/75 font-body leading-relaxed text-base md:text-lg">
          <div className="relative aspect-[4/3] w-full md:w-1/2 md:float-right md:ml-8 mb-6 rounded-xl overflow-hidden">
            {images.map((img, i) => (
              <img
                key={i}
                src={shopifyImageUrl(img.src, 400)}
                srcSet={shopifySrcSet(img.src, [150, 300, 450, 600])}
                sizes={GALLERY_SIZES}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[3000ms] ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}
          </div>

          <p>
            Hudson is originally from Canada, but right now you'll find her on the other side of the world — travelling slowly through South West Australia.
          </p>
          <p className="mt-6">
            She's currently based in Margaret River, a stunning coastal region of ancient forests, limestone cliffs and long stretches of open beach.
          </p>
          <p className="mt-6">
            She's been rolling out her mat at ocean lookouts and in quiet pockets of bushland just outside town — practising with the sound of waves in the distance and the wind moving through the trees.
          </p>

          <div className="clear-both" />

          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground pt-8">
            Her Mat: Mandelbrot Dreams
          </h2>
          <p className="mt-6">
            Hudson chose Mandelbrot Dreams — a design she describes as "anchoring without being heavy." It's intricate and expansive, with layers that draw you in the longer you look at it.
          </p>
          <p className="mt-6">
            For Hudson, travel means constant change — new time zones, new surroundings, new routines. Having a mat that feels familiar wherever she lays it down has become part of her ritual. A small, grounding constant in ever-shifting places.
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
                      src={shopifyImageUrl(img.src, 400)}
                      srcSet={shopifySrcSet(img.src, [150, 300, 450, 600])}
                      sizes={GALLERY_SIZES}
                      alt={img.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out ${i === current ? "opacity-100" : "opacity-0"
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
