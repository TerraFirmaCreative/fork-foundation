import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchCollectionProducts, ShopifyProduct } from "@/lib/shopify";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n";
import { shopifySrcSet, shopifyImageUrl, GALLERY_SIZES } from "@/lib/imageUtils";
import ThumbhashImage from "@/components/ThumbhashImage";
import GalleryMagnifier from "@/components/GalleryMagnifier";

const DesignGallery = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { country } = useLocale();

  useEffect(() => {
    fetchCollectionProducts("featured-home", 24, country)
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch collection:", err);
        setError("Failed to load designs");
        setLoading(false);
      });
  }, [country]);

  return (
    <section id="design-gallery" className="hero-gradient pt-20 md:pt-12 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 md:mb-6 font-body">
            Your Mat
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">24 beautiful </span>
            <span className="text-gradient italic">designs</span>
          </h2>
        </div>
        {loading ? (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-2.5 -mx-2 md:-mx-3">
            {Array.from({ length: 24 }).map((_, i) => (
              <Skeleton key={i} className="w-full aspect-[1/3] rounded-xl" />
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-muted-foreground py-12">{error}</p>
        ) : products.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No products found in the "Home" collection.</p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-2.5 -mx-2 md:-mx-3">
            {products.map((product, index) => {
              const image = product.node.images.edges[0]?.node;
              return (
                <LocaleLink
                  to={`/product/${product.node.handle}`}
                  key={product.node.id}
                  className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] cursor-pointer block bg-black"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {image ? (
                    <GalleryMagnifier
                      zoomSrc={shopifyImageUrl(image.url, 1600)}
                      className="block w-full"
                    >
                      <ThumbhashImage
                        thumbhash={image.thumbhash}
                        src={shopifyImageUrl(image.url, 400)}
                        srcSet={shopifySrcSet(image.url, [200, 400, 600, 800, 1200])}
                        sizes="(min-width: 1280px) 200px, (min-width: 640px) 16vw, 33vw"
                        alt={image.altText || product.node.title}
                        width={400}
                        height={1079}
                        className="w-full aspect-[0.37076674277] object-contain transition-transform duration-500 group-hover:scale-105"
                        loading={index < 3 ? "eager" : "lazy"}
                        fetchPriority={index < 3 ? "high" : "auto"}
                        decoding="async"
                      />
                    </GalleryMagnifier>
                  ) : (
                    <div className="w-full aspect-[1/3] bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-xs">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </LocaleLink>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default DesignGallery;
