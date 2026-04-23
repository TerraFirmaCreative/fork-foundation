import { fetchCollectionProducts } from "../src/lib/shopify";
import path from "path";
import fs from "fs"

const SITE_URL = "https://cosmicigloo.com";

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

async function generateSitemap() {
  const products = await fetchCollectionProducts('featured-home', 250)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
    ${products
      .map((product) => `
  <url>
    <loc>${SITE_URL}/product/${product.node.handle}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
      )}
  
    ${STATIC_PATHS.map(path => `
  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
      `)
    }
</urlset>
    `

  // Ensure the dist folder exists (just in case)
  console.log(process.cwd())
  const distDir = "./public";
  fs.mkdirSync(distDir, { recursive: true });

  fs.writeFileSync(`${distDir}/sitemap.xml`, sitemap);
  console.log(`Successfully generated sitemap.xml at ${distDir}`);
}

generateSitemap()
