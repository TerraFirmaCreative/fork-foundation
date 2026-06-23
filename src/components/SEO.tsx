import { Helmet } from "react-helmet-async";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/lib/i18n";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  /** Path WITHOUT the locale prefix, e.g. "/product/foo" or "/" */
  path?: string;
  image?: string;
  type?: "website" | "article" | "product";
  jsonLd?: Record<string, any> | Record<string, any>[];
  /** Optional breadcrumb trail; emits BreadcrumbList JSON-LD */
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_URL = "https://cosmicigloo.com";
const DEFAULT_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e52cbfe2-8f27-42e4-b8bb-f3872b505897/id-preview-f7b60088--518fbfed-d065-4906-a4e7-87fa2b752d66.lovable.app-1778319106626.png";

/** Map app locale (e.g. "en-UK") → BCP-47 hreflang value (e.g. "en-GB") */
const HREFLANG_OVERRIDES: Record<string, string> = {
  "en-UK": "en-GB",
};

const toHreflang = (locale: string) => HREFLANG_OVERRIDES[locale] || locale;

const buildLocalePath = (locale: string, cleanPath: string) =>
  cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;

const SEO = ({ title, description, path = "/", image, type = "website", jsonLd, breadcrumbs }: SEOProps) => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // Self-referential canonical: use the current URL path (including locale prefix
  // if present) so Lighthouse sees canonical === audited URL. Falls back to the
  // bare path for SSR / first paint.
  let currentPathname = cleanPath === "/" ? "" : cleanPath;
  if (typeof window !== "undefined" && window.location?.pathname) {
    currentPathname = window.location.pathname.replace(/\/$/, "");
  }
  const canonicalUrl = `${SITE_URL}${currentPathname || "/"}`;
  const bareUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
  const ogImage = image || DEFAULT_IMAGE;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${SITE_URL}${buildLocalePath(DEFAULT_LOCALE, b.path.startsWith("/") ? b.path : `/${b.path}`)}`,
      })),
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang alternates — one per supported locale + x-default */}
      {SUPPORTED_LOCALES.map((loc) => (
        <link
          key={loc}
          rel="alternate"
          hrefLang={toHreflang(loc)}
          href={`${SITE_URL}${buildLocalePath(loc, cleanPath)}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={bareUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
