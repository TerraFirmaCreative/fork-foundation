import { useEffect, useState } from "react";
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

const YogiOfTheWeek = () => {
  const [current, setCurrent] = useState(0);
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem, isLoading, setDrawerOpen } = useCartStore();
  const { country } = useLocale();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
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

        {/* Shop Hudson's Mat */}
        <div className="mt-16 border border-border/40 rounded-2xl p-6 md:p-10 bg-card/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
            {/* Product image */}
            <LocaleLink
              to={`/product/${PRODUCT_HANDLE}`}
              className="block relative aspect-square rounded-xl overflow-hidden group"
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={shopifyImageUrl(img.src, 400)}
                  srcSet={shopifySrcSet(img.src, [150, 300, 450, 600])}
                  sizes={GALLERY_SIZES}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[7000ms] ease-in-out ${i === current ? "opacity-100" : "opacity-0"
                    }`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
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
                Hudson is originally from Canada. Her practice is rooted in movement, nature and community. She chose this design for its infinite, fractal patterns — a reminder that growth on the mat never stops.
              </p>

              {/* Shop Now */}
              <div className="flex items-center flex-row gap-4 pt-2 w-full">
                <p className="font-display text-3xl text-foreground font-medium">
                  {price}
                </p>
                <LocaleLink
                  to={`/product/${product?.node.handle}`}
                  className="px-8"
                >
                  <Button
                    variant="cta"
                    size="lg"
                    className="font-body font-medium mx-auto tracking-wide glow-effect"
                    disabled={isLoading || !variant}
                  >
                    I Want This Mat
                  </Button>
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogiOfTheWeek;
