import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchCollectionProducts, ShopifyProduct } from "@/lib/shopify";

const DesignGallery = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCollectionProducts("home", 24)
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch collection:", err);
        setError("Failed to load designs");
        setLoading(false);
      });
  }, []);

  return (
    <section id="design-gallery" className="hero-gradient pt-4 pb-12 px-6">
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
                <div
                  key={product.node.id}
                  className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {image ? (
                    <img
                      src={image.url}
                      alt={image.altText || product.node.title}
                      className="w-full aspect-[1/3] object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full aspect-[1/3] bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-xs">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default DesignGallery;
