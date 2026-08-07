import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/LocaleLink";

const STORAGE_KEY = "cc_consent_v1";

declare global {
  interface Window {
    __enableAnalytics?: () => void;
  }
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v !== "granted" && v !== "denied") {
        const t = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (granted: boolean) => {
    try { localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied"); } catch {}
    if (granted) window.__enableAnalytics?.();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-sm z-[100] rounded-xl border border-border/40 bg-card/95 backdrop-blur-md shadow-xl px-5 py-5 font-body"
    >
      <h2 className="font-display text-xl font-medium tracking-tight mb-2">
        <span className="text-gradient">We use cookies</span>
      </h2>

      <p className="text-sm text-foreground/80 leading-relaxed mb-4">
        We use cookies to enhance your browsing experience, serve personalized content, and analyze
        our traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
        <LocaleLink
          to="/privacy-policy"
          className="text-shaman-violet hover:text-shaman-violet/80 underline underline-offset-4"
        >
          Privacy Policy
        </LocaleLink>
      </p>

      {customize && (
        <label className="flex items-start gap-2 mb-4 text-xs text-foreground/70">
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
            className="mt-0.5 h-3.5 w-3.5 accent-shaman-violet"
          />
          <span>
            Analytics cookies (Google Analytics, Microsoft Clarity). Essential cookies are always on.
          </span>
        </label>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <Button variant="hero" size="sm" className="px-5" onClick={() => persist(customize ? analytics : true)}>
          {customize ? "Save choices" : "Accept All"}
        </Button>
        <Button variant="outline" size="sm" className="px-5" onClick={() => persist(false)}>
          Reject All
        </Button>
      </div>

      <button
        type="button"
        onClick={() => setCustomize((c) => !c)}
        className="mt-3 text-xs text-foreground/70 hover:text-shaman-violet transition-colors"
      >
        Customize
      </button>
    </div>
  );
};

export default CookieConsent;
