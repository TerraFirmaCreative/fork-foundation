import { useEffect, useState } from "react";
import { fetchCollectionProducts } from "@/lib/shopify";
import { SUPPORTED_LOCALES } from "@/lib/i18n";

const SITE_URL = "https://unique-yoga-mats.lovable.app";

const STATIC_PATHS = [
  "",
  "/about",
  "/faqs",
  "/terms",
  "/refund-policy",
  "/privacy-policy",
  "/contact",
  "/shipping",
  "/blog",
  "/blog/hudson-in-margaret-river",
];

const Sitemap = () => {
  const [xml, setXml] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // Fetch product handles from the Home collection
      let productHandles: string[] = [];
      try {
        const products = await fetchCollectionProducts("featured-home", 250);
        productHandles = products.map((p) => p.node.handle);
      } catch {
        // Continue with static routes only
      }

      const urls: string[] = [];

      for (const locale of SUPPORTED_LOCALES) {
        // Static pages
        for (const path of STATIC_PATHS) {
          urls.push(`${SITE_URL}/${locale}${path}`);
        }
        // Product pages
        for (const handle of productHandles) {
          urls.push(`${SITE_URL}/${locale}/product/${handle}`);
        }
      }

      const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

      setXml(xmlStr);
    })();
  }, []);

  useEffect(() => {
    if (xml) {
      // Replace the entire document with raw XML so crawlers receive proper XML
      document.open("text/xml");
      document.write(xml);
      document.close();
    }
  }, [xml]);

  // Show nothing while loading; the document will be replaced with XML once ready
  return null;
};

export default Sitemap;
