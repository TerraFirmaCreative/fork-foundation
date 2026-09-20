import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let tries = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
        } else if (tries++ < 20) {
          requestAnimationFrame(tryScroll);
        }
      };
      requestAnimationFrame(tryScroll);
    } else {
      window.scrollTo(0, 0);
    }


    // GA4 SPA page_view
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
