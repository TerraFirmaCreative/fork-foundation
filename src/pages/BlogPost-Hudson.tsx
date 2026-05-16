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
import hudson1 from "@/assets/hudson/hudson-1.jpeg";
import hudson2 from "@/assets/hudson/hudson-2.jpeg";
import hudson3 from "@/assets/hudson/hudson-3.jpeg";
import hudson4 from "@/assets/hudson/hudson-4.jpeg";
import hudson5 from "@/assets/hudson/hudson-5.jpeg";
import hudson6 from "@/assets/hudson/hudson-6.jpeg";
import hudson7 from "@/assets/hudson/hudson-7.jpeg";
import hudson8 from "@/assets/hudson/hudson-8.jpeg";
import { formatPrice } from "@/lib/utils";

// Mixed beach/forest for visual rhythm
const galleryPhotos = [
  // Row 1 — beach / forest / beach / forest
  { src: hudson1, alt: "Hudson in crescent reach on the beach at Bunker Bay" },
  { src: hudson5, alt: "Cosmic Igloo mat laid out on the forest floor" },
  { src: hudson3, alt: "Hudson in warrior pose with arms wide on the beach" },
  { src: hudson8, alt: "Hudson in a supported headstand in the forest" },
  // Row 2 — forest / beach / forest / beach
  { src: hudson6, alt: "Hudson resting in child's pose in the forest" },
  { src: hudson2, alt: "Hudson in a seated twist on her mat at the beach" },
  { src: hudson7, alt: "Hudson in pigeon pose on the forest floor" },
  { src: hudson4, alt: "Hudson standing beside her Cosmic Igloo mat by the ocean" },
];

const images = galleryPhotos;


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

      <main className="relative px-6 py-20 overflow-hidden">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />
        {/* Post header */}
        <div className="max-w-3xl mx-auto mb-12 relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Hudson — South West Australia
          </h1>
        </div>

        {/* Full-width photo grid — 2 rows of 4 */}
        <div className="relative z-10 -mx-6 mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 w-full bg-background">
            {galleryPhotos.map((p, i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading={i < 4 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-700" />
                <div className="absolute inset-0 ring-1 ring-inset ring-shaman-gold/0 group-hover:ring-shaman-gold/40 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto prose-custom text-foreground/75 font-body leading-relaxed text-base md:text-lg relative z-10">
          <p>
            Hey there! My name is Hudson. I was born and raised in Vancouver, Canada, and currently reside in the serene south west of Australia.
          </p>
          <p className="mt-6">
            My practice is always changing, but the meaning remains the same. A slice of paradise regardless of my external world. As long as I have my mat, I can drop back into my body, find inner alignment and peace in the chaos.
          </p>
          <p className="mt-6">
            As I am constantly evolving, so does my practice. It can be whatever you need it to be that day. A yoga mat is so much more than the name depicts. A magic carpet of solus, where we have the space to connect with whatever requires attention. Mind, body, spirit. I oscillate from quiet meditation to rogue movement and dance. Whatever flow my body desires that day. However, it always starts with stillness.
          </p>
          <p className="mt-6">
            I was drawn to my mat the moment I saw the design. Additionally, the feel is incredible, with great texture, grip, and thickness. Having such a beautiful mat naturally brings more excitement and motivation to the start of each practice. Hearing that "love" and "light" were key inspirations behind the design comes as no surprise. I am thrilled to continue my yoga journey and evolving my practice with this very unique yoga mat.
          </p>
        </article>


        {/* Shop Hudson's Mat */}
        <div className="max-w-3xl mx-auto mt-16 border border-border/40 rounded-2xl p-6 md:p-10 bg-card/30 backdrop-blur-sm relative z-10">
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
              <h3 className="font-display text-4xl md:text-5xl font-medium text-foreground">
                Mandelbrot Dreams
              </h3>
              <p className="text-foreground/60 font-body leading-relaxed">
                <em>"Having such a beautiful mat naturally brings more excitement and motivation to the start of each practice."</em>
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
