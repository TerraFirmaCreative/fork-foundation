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
      className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-xl z-[100] rounded-2xl border border-border/40 bg-card/95 backdrop-blur-md shadow-2xl px-8 py-9 md:px-10 md:py-10 font-body"
    >
      <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-5">
        <span className="text-gradient">We use cookies</span>
      </h2>

      <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
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
        <label className="flex items-start gap-3 mb-8 text-sm text-foreground/70">
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
            className="mt-1 h-4 w-4 accent-shaman-violet"
          />
          <span>
            Analytics cookies (Google Analytics, Microsoft Clarity). Essential cookies are always on.
          </span>
        </label>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button variant="hero" size="lg" className="px-10" onClick={() => persist(customize ? analytics : true)}>
          {customize ? "Save choices" : "Accept All"}
        </Button>
        <Button variant="outline" size="lg" className="px-10" onClick={() => persist(false)}>
          Reject All
        </Button>
      </div>

      <button
        type="button"
        onClick={() => setCustomize((c) => !c)}
        className="mt-6 ml-2 text-base text-foreground/70 hover:text-shaman-violet transition-colors"
      >
        Customize
      </button>
    </div>
  );
};

export default CookieConsent;
