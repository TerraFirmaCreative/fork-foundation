import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: { amount: string, currencyCode: string }) {
  return `${new Intl.NumberFormat(undefined, { style: "currency", currency: price.currencyCode, currencyDisplay: "narrowSymbol", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(parseFloat(price.amount))} ${price.currencyCode.endsWith('D') ? price.currencyCode : ""}`
}

// Tags whose content is dropped entirely (never just unwrapped) when sanitizing HTML.
const HTML_SANITIZE_DENY_TAGS = new Set([
  "SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "LINK", "META", "BASE", "NOSCRIPT", "TEMPLATE", "FORM", "SVG",
]);
// Tags kept as elements; anything else is unwrapped (replaced by its children/text).
const HTML_SANITIZE_ALLOW_TAGS = new Set([
  "P", "BR", "STRONG", "B", "EM", "I", "U", "UL", "OL", "LI", "A", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE",
]);
// Attributes allowed per tag; every other attribute (including inline event handlers) is stripped.
const HTML_SANITIZE_ALLOWED_ATTRS: Record<string, string[]> = { A: ["href", "title"] };

function sanitizeHtmlNode(node: Element) {
  Array.from(node.childNodes).forEach((child) => {
    if (child.nodeType === Node.COMMENT_NODE) {
      child.remove();
      return;
    }
    if (child.nodeType !== Node.ELEMENT_NODE) return;
    const el = child as Element;
    if (HTML_SANITIZE_DENY_TAGS.has(el.tagName)) {
      el.remove();
      return;
    }
    if (!HTML_SANITIZE_ALLOW_TAGS.has(el.tagName)) {
      el.replaceWith(...Array.from(el.childNodes));
      return;
    }
    const allowedAttrs = HTML_SANITIZE_ALLOWED_ATTRS[el.tagName] || [];
    Array.from(el.attributes).forEach((attr) => {
      const name = attr.name.toLowerCase();
      if (!allowedAttrs.includes(name) || (name === "href" && /^\s*(javascript|vbscript|data):/i.test(attr.value))) {
        el.removeAttribute(attr.name);
      }
    });
    if (el.tagName === "A") {
      el.setAttribute("rel", "noopener noreferrer");
      el.setAttribute("target", "_blank");
    }
    sanitizeHtmlNode(el);
  });
}

/** Sanitizes an HTML string for safe use with dangerouslySetInnerHTML (allow-listed tags/attrs only). */
export function sanitizeHtml(html: string): string {
  if (typeof window === "undefined" || !html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  sanitizeHtmlNode(doc.body);
  return doc.body.innerHTML;
}
