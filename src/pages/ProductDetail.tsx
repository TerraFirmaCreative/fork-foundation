import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Loader2, ArrowLeft, Layers, Maximize, Weight, Ruler, CircleDot, Feather, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import ImageMagnifier from "@/components/ImageMagnifier";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n";
import { shopifySrcSet, shopifyImageUrl, PRODUCT_MAIN_SIZES, THUMBNAIL_SIZES } from "@/lib/imageUtils";
import ThumbhashImage from "@/components/ThumbhashImage";
import { cn, formatPrice } from "@/lib/utils";
import whaleMat1 from "@/assets/whale-mat-1.png";
import whaleMat2 from "@/assets/whale-mat-2.png";
import whaleMat3 from "@/assets/whale-mat-3.png";
import whaleMat4 from "@/assets/whale-mat-4.png";

const EXTRA_PRODUCT_IMAGES: Record<string, string[]> = {
  "beneath-the-waves-humpback-elegance-c8359a92-110f-4eae-88da-29b234d4c729-copy": [
    whaleMat1, whaleMat2, whaleMat3, whaleMat4,
  ],
};

const productReviews = [
  { id: 1, name: "Philippa W.", location: "Byron Bay, AU", rating: 5, date: "3 weeks ago", review: "I love my mat. The bright colours are uplifting and calming at the same time. Comfortable and a good long length." },
  { id: 2, name: "Hudson R.", location: "Margaret River, AU", rating: 5, date: "1 month ago", review: "Drawn to it the moment I saw the design. Incredible feel, great texture, grip, and thickness." },
  { id: 3, name: "Clare W.", location: "Auckland, NZ", rating: 5, date: "2 months ago", review: "High quality and beautifully made. The vibrant pattern comes alive in the sunshine. Highly recommend." },
  { id: 4, name: "Emma J.", location: "Brooklyn, NY", rating: 5, date: "3 months ago", review: "A simple design done beautifully. I still get comments on it." },
  { id: 5, name: "Marcus T.", location: "Ubud, ID", rating: 4, date: "4 months ago", review: "Beautiful artwork and the grip is solid even in hot yoga. Worth every cent." },
];

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const setDrawerOpen = useCartStore((s) => s.setDrawerOpen);
  const { country } = useLocale();

  useEffect(() => {
    if (!handle) return;
    setLoading(true);
    fetchProductByHandle(handle, country)
      .then((p) => {
        setProduct(p);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [handle, country]);

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions || [],
    }, country);
    toast.success("Added to cart", { position: "top-center" });
    setDrawerOpen(true);
  };

  const shopifyImages = product?.node.images.edges || [];
  const extras = (handle && EXTRA_PRODUCT_IMAGES[handle]) || [];
  type GalleryItem =
    | { kind: "shopify"; url: string; thumbhash?: string | null; alt?: string }
    | { kind: "local"; src: string; alt?: string };
  const images: GalleryItem[] = [
    ...shopifyImages.map((e) => ({
      kind: "shopify" as const,
      url: e.node.url,
      thumbhash: e.node.thumbhash,
      alt: e.node.altText || product?.node.title,
    })),
    ...extras.map((src, i) => ({
      kind: "local" as const,
      src,
      alt: `${product?.node.title || "Product"} lifestyle ${i + 1}`,
    })),
  ];
  const variant = product?.node.variants.edges[0]?.node;
  const price = variant?.price || product?.node.priceRange.minVariantPrice;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Skeleton className="w-full aspect-[2/3] rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-12 w-1/2" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Product not found</h1>
          <LocaleLink to="/" className="text-shaman-gold hover:underline">Return to shop</LocaleLink>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <LocaleLink to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to shop</span>
        </LocaleLink>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex flex-col gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${i === selectedImageIndex
                      ? "border-shaman-gold opacity-100"
                      : "border-transparent opacity-60 hover:opacity-90"
                      }`}
                  >
                    {img.kind === "shopify" ? (
                      <ThumbhashImage
                        thumbhash={img.thumbhash}
                        src={shopifyImageUrl(img.url, 80)}
                        srcSet={shopifySrcSet(img.url, [80, 160])}
                        sizes={THUMBNAIL_SIZES}
                        alt={img.alt || `Thumbnail ${i + 1}`}
                        className="w-full h-full object-contain aspect-[2/3]"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <img
                        src={img.src}
                        alt={img.alt || `Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover aspect-[2/3]"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="flex flex-col rounded-xl overflow-hidden bg-muted/20 w-full items-center p-4">
              {images[selectedImageIndex] ? (
                images[selectedImageIndex].kind === "shopify" ? (
                  <ImageMagnifier
                    thumbhash={(images[selectedImageIndex] as any).thumbhash}
                    src={shopifyImageUrl((images[selectedImageIndex] as any).url, 800)}
                    srcSet={shopifySrcSet((images[selectedImageIndex] as any).url, [400, 600, 800, 1200])}
                    sizes={PRODUCT_MAIN_SIZES}
                    alt={images[selectedImageIndex].alt || product.node.title}
                    className={cn(selectedImageIndex == 0 && "aspect-[0.37076674277]", "cursor-crosshair rounded-md overflow-clip")}
                  />
                ) : (
                  <ImageMagnifier
                    src={(images[selectedImageIndex] as any).src}
                    alt={images[selectedImageIndex].alt || product.node.title}
                    className="cursor-crosshair rounded-md overflow-clip object-cover w-full"
                  />
                )
              ) : (
                <div className="w-full aspect-[2/3] flex items-center justify-center text-muted-foreground">
                  No image available
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              {product.node.title}
            </h1>

            {price && (
              <p className="text-xl text-muted-foreground mt-3 font-body italic">
                {formatPrice(price)}
              </p>
            )}

            {/* Rating Summary */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-shaman-gold text-shaman-gold" />
                ))}
              </div>
              <span className="text-sm font-body text-foreground/80">4.9</span>
              <span className="text-sm font-body text-muted-foreground">from 12 reviews</span>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-none text-muted-foreground hover:text-foreground"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-10 text-center text-foreground font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-none text-muted-foreground hover:text-foreground"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <Button
                onClick={handleAddToCart}
                disabled={isLoading || !variant?.availableForSale}
                className="px-8 h-10 bg-card border border-border text-foreground hover:bg-muted font-body"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Add to Cart"}
              </Button>
            </div>

            {/* Description */}
            {product.node.description && (
              <p className="text-muted-foreground font-body leading-relaxed mt-6 border-t border-border/50 pt-6">
                {product.node.description}
              </p>
            )}

            {/* Free Carry Strap */}
            <div className="mt-6 flex items-center gap-3 p-4 rounded-md bg-shaman-gold/5 border border-shaman-gold/20">
              <span className="text-shaman-gold text-lg">✦</span>
              <p className="font-body text-foreground/90">
                Includes a <span className="font-semibold text-shaman-gold">free carry strap</span> with every mat.
              </p>
            </div>

            <LocaleLink
              to="/about"
              className="text-shaman-gold hover:underline text-sm mt-5 font-body"
            >
              Learn more about our mats...
            </LocaleLink>
          </div>
        </div>

        {/* Specs + Delivery — full width, side by side under the mat */}
        <div className="mt-8 border-t border-border/50 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Specifications */}
          <div className="lg:px-4">
            <p className="text-[11px] tracking-[0.25em] uppercase text-shaman-gold/70 font-body mb-2">Details</p>
            <h3 className="font-display text-lg text-foreground font-semibold mb-3">Specifications</h3>
            <ul className="space-y-2 font-body text-foreground/90">
              {[
                { icon: <Layers className="w-4 h-4" />, text: "Suede Microfibre Surface" },
                { icon: <CircleDot className="w-4 h-4" />, text: "Natural Rubber Bottom" },
                { icon: <Maximize className="w-4 h-4" />, text: "Edge-to-Edge Print" },
                { icon: <Feather className="w-4 h-4" />, text: "Lightweight (~1.8kg / 64oz)" },
                { icon: <Ruler className="w-4 h-4" />, text: 'Dimensions 178cm x 66cm (70" x 26")' },
                { icon: <Weight className="w-4 h-4" />, text: "3mm thick" },
                { icon: <Weight className="w-4 h-4" />, text: "Weight ~1800g" },
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-shaman-gold/70 mt-0.5">{s.icon}</span>
                  <span className="font-medium leading-relaxed">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery */}
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-shaman-gold/70 font-body mb-2">Shipping</p>
            <h3 className="font-display text-lg text-foreground font-semibold mb-3">Delivery</h3>
            <ul className="space-y-2 font-body text-foreground/90">
              {[
                "USA — around 1 week",
                "UK / Europe — around 2 weeks",
                "Australia — up to 3 weeks",
              ].map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="block w-[3px] h-5 mt-0.5 bg-shaman-violet/60 rounded-full flex-shrink-0" />
                  <span className="font-medium leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-body italic text-muted-foreground/80">
              Ships from Nevada, USA
            </p>
          </div>
        </div>

        {/* Customer Reviews — full width, below mat & info */}
        <div className="mt-10 border-t border-border/50 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl md:text-3xl text-foreground font-medium tracking-tight">
              Customer Reviews
            </h2>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-shaman-gold text-shaman-gold" />
              <span className="text-sm font-body text-foreground/80">4.9</span>
              <span className="text-xs font-body text-muted-foreground">from 12 reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {productReviews.map((r) => (
              <div
                key={r.id}
                className="p-5 rounded-md bg-card/40 border border-border/30 hover:border-shaman-violet/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-shaman-violet/20 to-shaman-magenta/20 border border-shaman-violet/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-foreground/70 font-body">{r.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground font-body leading-tight">{r.name}</p>
                      <p className="text-[11px] text-muted-foreground/60 font-body">{r.location} · {r.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-shaman-gold/80 text-shaman-gold/80" />
                    ))}
                  </div>
                </div>
                <p className="font-display text-base text-foreground/85 italic leading-relaxed">
                  "{r.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const SpecItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 text-foreground/90">
    <span className="text-foreground/80">{icon}</span>
    <span className="font-body font-medium leading-relaxed">{text}</span>
  </div>
);

export default ProductDetail;
