import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Loader2, ArrowLeft, Layers, Maximize, Weight, Ruler, CircleDot, Feather } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [magnifier, setMagnifier] = useState({ show: false, x: 0, y: 0, bgX: 0, bgY: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    if (!handle) return;
    setLoading(true);
    fetchProductByHandle(handle)
      .then((p) => {
        setProduct(p);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [handle]);

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
    });
    toast.success("Added to cart", { position: "top-center" });
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
          <Link to="/" className="text-shaman-gold hover:underline">Return to shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to shop</span>
        </Link>

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
                    className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      i === selectedImageIndex
                        ? "border-shaman-gold opacity-100"
                        : "border-transparent opacity-60 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={img.node.url}
                      alt={img.node.altText || `Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="flex-1 rounded-xl overflow-hidden bg-muted/20 relative flex items-center justify-center">
              {images[selectedImageIndex] ? (
                <>
                  <img
                    ref={imageRef}
                    src={images[selectedImageIndex].node.url}
                    alt={images[selectedImageIndex].node.altText || product.node.title}
                    className="w-full h-auto object-contain max-h-[70vh] cursor-crosshair"
                    onMouseMove={(e) => {
                      const img = imageRef.current;
                      if (!img) return;
                      const rect = img.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
                        setMagnifier((m) => ({ ...m, show: false }));
                        return;
                      }
                      setMagnifier({
                        show: true,
                        x: x + (rect.left - img.closest('.relative')!.getBoundingClientRect().left),
                        y: y + (rect.top - img.closest('.relative')!.getBoundingClientRect().top),
                        bgX: x / rect.width,
                        bgY: y / rect.height,
                      });
                    }}
                    onMouseLeave={() => setMagnifier((m) => ({ ...m, show: false }))}
                  />
                  {magnifier.show && imageRef.current && (() => {
                    const img = imageRef.current;
                    const zoom = 2.5;
                    const lensSize = 160;
                    const bgW = img.getBoundingClientRect().width * zoom;
                    const bgH = img.getBoundingClientRect().height * zoom;
                    const bgPosX = -(magnifier.bgX * bgW - lensSize / 2);
                    const bgPosY = -(magnifier.bgY * bgH - lensSize / 2);
                    return (
                      <div
                        className="absolute pointer-events-none rounded-full border-2 border-foreground/20 shadow-lg"
                        style={{
                          width: lensSize,
                          height: lensSize,
                          left: magnifier.x - lensSize / 2,
                          top: magnifier.y - lensSize / 2,
                          backgroundImage: `url(${images[selectedImageIndex].node.url})`,
                          backgroundSize: `${bgW}px ${bgH}px`,
                          backgroundPosition: `${bgPosX}px ${bgPosY}px`,
                          backgroundRepeat: 'no-repeat',
                          zIndex: 10,
                        }}
                      />
                    );
                  })()}
                </>
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
                ${parseFloat(price.amount).toFixed(2)} {price.currencyCode}
              </p>
            )}

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
              <p className="text-muted-foreground font-body leading-relaxed mt-8 border-t border-border/50 pt-8">
                {product.node.description}
              </p>
            )}

            {/* Specifications */}
            <div className="mt-8 border-t border-border/50 pt-8">
              <h3 className="font-display text-lg text-foreground font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <SpecItem icon={<Layers className="w-5 h-5" />} text="Microfibre Suede Top" />
                <SpecItem icon={<CircleDot className="w-5 h-5" />} text="Natural Rubber Bottom" />
                <SpecItem icon={<Maximize className="w-5 h-5" />} text="Edge-to-Edge Print" />
                <SpecItem icon={<Feather className="w-5 h-5" />} text="Lightweight (64oz)" />
                <SpecItem icon={<Ruler className="w-5 h-5" />} text='Dimensions 70"x26"' />
                <SpecItem icon={<Weight className="w-5 h-5" />} text="3mm thick" />
              </div>
            </div>

            <Link
              to="/about"
              className="text-shaman-gold hover:underline text-sm mt-6 font-body"
            >
              Learn more about our mats...
            </Link>
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
