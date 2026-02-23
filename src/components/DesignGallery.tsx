import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchCollectionProducts, ShopifyProduct } from "@/lib/shopify";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n";
import { shopifySrcSet, shopifyImageUrl, GALLERY_SIZES } from "@/lib/imageUtils";

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
        {loading ? (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <Skeleton key={i} className="w-full aspect-[1/3] rounded-xl" />
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-muted-foreground py-12">{error}</p>
        ) : products.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No products found in the "Home" collection.</p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-4">
            {products.map((product, index) => {
              const image = product.node.images.edges[0]?.node;
              return (
                <LocaleLink
                  to={`/product/${product.node.handle}`}
                  key={product.node.id}
                  className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {image ? (
                    <img
                      src={shopifyImageUrl(image.url, 400)}
                      srcSet={shopifySrcSet(image.url, [150, 300, 450, 600])}
                      sizes={GALLERY_SIZES}
                      alt={image.altText || product.node.title}
                      className="w-full aspect-[1/3] object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full aspect-[1/3] bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-xs">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
