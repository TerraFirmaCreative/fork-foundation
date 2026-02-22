import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export const SUPPORTED_LOCALES = [
  "en-US", "en-AU", "en-UK", "de-AT", "fr-BE", "bg-BG", "hr-HR", "cs-CZ", "da-DK",
  "nl-NL", "et-EE", "fi-FI", "fr-FR", "de-DE", "el-GR", "hu-HU", "en-IE",
  "it-IT", "lv-LV", "lt-LT", "fr-LU", "mt-MT", "pl-PL", "pt-PT", "ro-RO",
  "sk-SK", "sl-SI", "es-ES", "sv-SE", "el-CY",
] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SupportedLocale = "en-US";

const LOCALE_COUNTRY_MAP: Record<SupportedLocale, string> = {
  "en-US": "US", "en-AU": "AU", "en-UK": "GB", "de-AT": "AT", "fr-BE": "BE", "bg-BG": "BG",
  "hr-HR": "HR", "cs-CZ": "CZ", "da-DK": "DK", "nl-NL": "NL", "et-EE": "EE",
  "fi-FI": "FI", "fr-FR": "FR", "de-DE": "DE", "el-GR": "GR", "hu-HU": "HU",
  "en-IE": "IE", "it-IT": "IT", "lv-LV": "LV", "lt-LT": "LT", "fr-LU": "LU",
  "mt-MT": "MT", "pl-PL": "PL", "pt-PT": "PT", "ro-RO": "RO", "sk-SK": "SK",
  "sl-SI": "SI", "es-ES": "ES", "sv-SE": "SE", "el-CY": "CY",
};

/** Human-readable label for the locale picker */
export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  "en-US": "US", "en-AU": "AU", "en-UK": "UK", "de-AT": "AT", "fr-BE": "BE", "bg-BG": "BG",
  "hr-HR": "HR", "cs-CZ": "CZ", "da-DK": "DK", "nl-NL": "NL", "et-EE": "EE",
  "fi-FI": "FI", "fr-FR": "FR", "de-DE": "DE", "el-GR": "GR", "hu-HU": "HU",
  "en-IE": "IE", "it-IT": "IT", "lv-LV": "LV", "lt-LT": "LT", "fr-LU": "LU",
  "mt-MT": "MT", "pl-PL": "PL", "pt-PT": "PT", "ro-RO": "RO", "sk-SK": "SK",
  "sl-SI": "SI", "es-ES": "ES", "sv-SE": "SE", "el-CY": "CY",
};

/** Map country code (from IP API) → locale */
const COUNTRY_TO_LOCALE: Record<string, SupportedLocale> = {
  US: "en-US", AU: "en-AU", GB: "en-UK", AT: "de-AT", BE: "fr-BE", BG: "bg-BG",
  HR: "hr-HR", CZ: "cs-CZ", DK: "da-DK", NL: "nl-NL", EE: "et-EE",
  FI: "fi-FI", FR: "fr-FR", DE: "de-DE", GR: "el-GR", HU: "hu-HU",
  IE: "en-IE", IT: "it-IT", LV: "lv-LV", LT: "lt-LT", LU: "fr-LU",
  MT: "mt-MT", PL: "pl-PL", PT: "pt-PT", RO: "ro-RO", SK: "sk-SK",
  SI: "sl-SI", ES: "es-ES", SE: "sv-SE", CY: "el-CY",
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
      if (countryCode && COUNTRY_TO_LOCALE[countryCode]) {
        detected = COUNTRY_TO_LOCALE[countryCode];
      }
    }
  } catch {
    // Fallback to browser language (e.g. "en-AU", "de-AT", "fr-FR")
    const browserLang = navigator.language || (navigator as any).userLanguage || "";
    const normalized = browserLang.replace("_", "-");
    if (isValidLocale(normalized)) {
      detected = normalized;
    }
  }

  sessionStorage.setItem(LOCALE_STORAGE_KEY, detected);
  return detected;
}
