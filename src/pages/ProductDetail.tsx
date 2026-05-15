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

  const images = product?.node.images.edges || [];
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    <ThumbhashImage
                      thumbhash={img.node.thumbhash}
                      src={shopifyImageUrl(img.node.url, 80)}
                      srcSet={shopifySrcSet(img.node.url, [80, 160])}
                      sizes={THUMBNAIL_SIZES}
                      alt={img.node.altText || `Thumbnail ${i + 1}`}
                      className="w-full h-full object-contain aspect-[2/3]"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="flex flex-col rounded-xl overflow-hidden bg-muted/20 w-full items-center p-4">
              {images[selectedImageIndex] ? (
                <ImageMagnifier
                  thumbhash={images[selectedImageIndex].node.thumbhash}
                  src={shopifyImageUrl(images[selectedImageIndex].node.url, 800)}
                  srcSet={shopifySrcSet(images[selectedImageIndex].node.url, [400, 600, 800, 1200])}
                  sizes={PRODUCT_MAIN_SIZES}
                  alt={images[selectedImageIndex].node.altText || product.node.title}
                  className={cn(selectedImageIndex == 0 && "aspect-[0.37076674277]", "cursor-crosshair rounded-md overflow-clip")}
                />
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

            {/* Customer Reviews */}
            <div className="mt-8 border-t border-border/50 pt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg text-foreground font-semibold">Customer Reviews</h3>
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-shaman-gold text-shaman-gold" />
                  <span className="text-sm font-body text-foreground/80">4.9</span>
                  <span className="text-xs font-body text-muted-foreground">(12)</span>
                </div>
              </div>
              <div className="max-h-80 overflow-y-auto pr-2 space-y-3 scrollbar-thin">
                {productReviews.map((r) => (
                  <div
                    key={r.id}
                    className="p-4 rounded-md bg-card/40 border border-border/30 hover:border-shaman-violet/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-shaman-violet/20 to-shaman-magenta/20 border border-shaman-violet/20 flex items-center justify-center">
                          <span className="text-xs font-medium text-foreground/70 font-body">{r.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground font-body leading-tight">{r.name}</p>
                          <p className="text-[10px] text-muted-foreground/60 font-body">{r.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(r.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-shaman-gold/80 text-shaman-gold/80" />
                        ))}
                      </div>
                    </div>
                    <p className="font-display text-sm text-foreground/85 italic leading-relaxed">
                      "{r.review}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            {product.node.description && (
              <p className="text-muted-foreground font-body leading-relaxed mt-8 border-t border-border/50 pt-8">
                {product.node.description}
              </p>
            )}

            {/* Specifications */}
            <div className="mt-8 border-t border-border/50 pt-8">
              <h3 className="font-display text-lg text-foreground font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <SpecItem icon={<Layers className="w-5 h-5" />} text="Suede Top" />
                <SpecItem icon={<CircleDot className="w-5 h-5" />} text="Natural Rubber Bottom" />
                <SpecItem icon={<Maximize className="w-5 h-5" />} text="Edge-to-Edge Print" />
                <SpecItem icon={<Feather className="w-5 h-5" />} text="Lightweight (64oz)" />
                <SpecItem icon={<Ruler className="w-5 h-5" />} text='Dimensions 70"x26"' />
                <SpecItem icon={<Weight className="w-5 h-5" />} text="3mm thick" />
              </div>
            </div>

            <LocaleLink
              to="/about"
              className="text-shaman-gold hover:underline text-sm mt-6 font-body"
            >
              Learn more about our mats...
            </LocaleLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const SpecItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 text-muted-foreground">
    <span className="text-foreground/70">{icon}</span>
    <span className="text-sm font-body">{text}</span>
  </div>
);

export default ProductDetail;
