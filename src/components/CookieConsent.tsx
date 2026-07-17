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

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v !== "granted" && v !== "denied") {
        // Delay so it doesn't hurt LCP
        const t = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, "granted"); } catch {}
    window.__enableAnalytics?.();
    setVisible(false);
  };

  const decline = () => {
    try { localStorage.setItem(STORAGE_KEY, "denied"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[100] rounded-lg border border-border/40 bg-background/95 backdrop-blur-md shadow-xl p-5 font-body"
    >
      <p className="text-sm text-foreground leading-relaxed mb-4">
        We use essential cookies to run the site and, with your consent, analytics cookies (Google Analytics and Microsoft Clarity) to understand how the site is used and improve it. See our{" "}
        <LocaleLink to="/privacy-policy" className="text-shaman-violet hover:text-shaman-violet/80 underline underline-offset-2">
          Privacy Policy
        </LocaleLink>.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button variant="hero" size="sm" onClick={accept}>Accept all</Button>
        <Button variant="outline" size="sm" onClick={decline}>Decline</Button>
      </div>
    </div>
  );
};

export default CookieConsent;
