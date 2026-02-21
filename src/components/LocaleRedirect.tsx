import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { detectUserLocale, DEFAULT_LOCALE } from "@/lib/i18n";

/**
 * Detects user locale and redirects from bare paths to locale-prefixed paths.
 * Renders nothing — just performs the redirect.
 */
const LocaleRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [detecting, setDetecting] = useState(true);

  useEffect(() => {
    detectUserLocale().then((locale) => {
      const target = `/${locale}${location.pathname === "/" ? "" : location.pathname}${location.search}${location.hash}`;
      navigate(target, { replace: true });
      setDetecting(false);
    });
  }, []);

  if (detecting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
      </div>
    );
  }

  return null;
};

export default LocaleRedirect;
