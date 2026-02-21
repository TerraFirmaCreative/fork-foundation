import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export const SUPPORTED_LOCALES = ["en-US", "en-AU"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SupportedLocale = "en-US";

const LOCALE_COUNTRY_MAP: Record<SupportedLocale, string> = {
  "en-US": "US",
  "en-AU": "AU",
};

export function getCountryForLocale(locale: SupportedLocale): string {
  return LOCALE_COUNTRY_MAP[locale] || "US";
}

export function isValidLocale(value: string): value is SupportedLocale {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
}

interface LocaleContextValue {
  locale: SupportedLocale;
  country: string;
  localePath: (path: string) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  country: "US",
  localePath: (path) => `/${DEFAULT_LOCALE}${path}`,
});

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { locale: localeParam } = useParams<{ locale: string }>();
  const locale: SupportedLocale = localeParam && isValidLocale(localeParam) ? localeParam : DEFAULT_LOCALE;
  const country = getCountryForLocale(locale);

  const localePath = (path: string) => {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `/${locale}${cleanPath}`;
  };

  return (
    <LocaleContext.Provider value={{ locale, country, localePath }}>
      {children}
    </LocaleContext.Provider>
  );
};

// Storage key for detected locale
const LOCALE_STORAGE_KEY = "detected-locale";

export async function detectUserLocale(): Promise<SupportedLocale> {
  // Check if we already detected and cached
  const cached = sessionStorage.getItem(LOCALE_STORAGE_KEY);
  if (cached && isValidLocale(cached)) return cached;

  let detected: SupportedLocale = DEFAULT_LOCALE;

  // 1. Try IP-based detection (priority)
  try {
    const response = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    if (response.ok) {
      const data = await response.json();
      const countryCode = data.country_code;
      if (countryCode === "AU") {
        detected = "en-AU";
      }
      // All other countries default to en-US
    }
  } catch {
    // Fallback to accept-language
    const browserLang = navigator.language || (navigator as any).userLanguage || "";
    if (browserLang.toLowerCase().includes("en-au")) {
      detected = "en-AU";
    }
  }

  sessionStorage.setItem(LOCALE_STORAGE_KEY, detected);
  return detected;
}
