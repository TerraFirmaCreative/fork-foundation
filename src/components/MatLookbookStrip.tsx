import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchCollectionProducts, ShopifyProduct } from "@/lib/shopify";
import { useLocale } from "@/lib/i18n";
import { shopifySrcSet, shopifyImageUrl } from "@/lib/imageUtils";
import ThumbhashImage from "@/components/ThumbhashImage";

const MatLookbookStrip = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { country } = useLocale();

  useEffect(() => {
    fetchCollectionProducts("featured-home", 8, country)
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [country]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById("design-gallery")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="Mat lookbook"
      className="w-full bg-black py-6 md:py-10"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, hsl(255, 50%, 6%) 50%, #000000 100%)",
      }}
    >
      <div
        className="flex gap-3 md:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none px-4 md:px-8"
        style={{ scrollbarWidth: "none" }}
      >
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex-none snap-start"
                style={{ width: "calc((100% - 0.75rem) / 1.5)" }}
              >
                <Skeleton className="w-full aspect-[1/2.7] rounded-lg bg-white/5" />
              </div>
            ))
          : products.slice(0, 5).map((product) => {
              const image = product.node.images.edges[0]?.node;
              if (!image) return null;
              return (
                <a
                  key={product.node.id}
                  href="#design-gallery"
                  onClick={handleClick}
                  aria-label={`View ${product.node.title}`}
                  className="flex-none snap-start group block overflow-hidden rounded-lg bg-black shadow-[0_8px_30px_rgba(0,0,0,0.4)] lookbook-item"
                >
                  <ThumbhashImage
                    thumbhash={image.thumbhash}
                    src={shopifyImageUrl(image.url, 600)}
                    srcSet={shopifySrcSet(image.url, [300, 450, 600, 900])}
                    sizes="(min-width: 768px) 23vw, 60vw"
                    alt={image.altText || product.node.title}
                    className="w-full h-full aspect-[1/2.7] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              );
            })}
      </div>
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .lookbook-item {
          width: calc((100% - 0.75rem) / 1.5);
        }
        @media (min-width: 768px) {
          .lookbook-item {
            width: calc((100% - 3.75rem) / 4);
          }
        }
      `}</style>
    </section>
  );
};

export default MatLookbookStrip;
