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
      className="fixed bottom-3 left-3 right-3 md:right-auto md:max-w-[300px] z-[100] rounded-lg border border-border bg-card shadow-lg px-4 py-3 font-body"
    >
      <h2 className="font-display text-sm font-medium tracking-tight mb-1">
        <span className="text-gradient">We use cookies</span>
      </h2>

      <p className="text-xs text-foreground leading-snug mb-3">
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
        <label className="flex items-start gap-2 mb-3 text-[11px] text-foreground/90">
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

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="flex-1 h-7 text-xs px-2" onClick={() => persist(customize ? analytics : true)}>
          {customize ? "Save choices" : "Accept All"}
        </Button>
        <Button variant="outline" size="sm" className="flex-1 h-7 text-xs px-2" onClick={() => persist(false)}>
          Reject All
        </Button>
      </div>

      <button
        type="button"
        onClick={() => setCustomize((c) => !c)}
        className="mt-2 text-[11px] text-foreground/80 hover:text-shaman-violet transition-colors"
      >
        Customize
      </button>
    </div>
  );
};

export default CookieConsent;
