/**
 * Shopify CDN image URL transform helper.
 * Appends width & format params to a Shopify-hosted image URL.
 */
export function shopifyImageUrl(url: string, width: number, format: 'webp' | 'jpg' | 'png' = 'webp'): string {
  if (!url) return url;
  try {
    const u = new URL(url);
    u.searchParams.set('width', String(width));
    u.searchParams.set('format', format);
    return u.toString();
  } catch {
    return url;
  }
}

/**
 * Build a srcSet string for Shopify CDN images at the given widths.
 */
export function shopifySrcSet(url: string, widths: number[] = [200, 400, 600, 800, 1200]): string {
  if (!url) return '';
  return widths
    .map((w) => `${shopifyImageUrl(url, w)} ${w}w`)
    .join(', ');
}

/**
 * Default sizes attribute for common grid layouts.
 */
export const GALLERY_SIZES = '(min-width: 640px) 16vw, 33vw';
export const PRODUCT_MAIN_SIZES = '(min-width: 1024px) 50vw, 100vw';
export const THUMBNAIL_SIZES = '64px';
export const CART_THUMB_SIZES = '64px';
