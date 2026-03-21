export type Locale = "en" | "es" | "de" | "fr" | "pt-br" | "en-gb" | "en-ca" | "tr" | "pl" | "it";

export interface LocaleConfig {
  code: Locale;
  lang: string;
  label: string;
  flag: string;
  ogLocale: string;
  unitSystem: "imperial" | "metric";
  siteUrl: string;
  currency: string;
}

export const locales: Record<Locale, LocaleConfig> = {
  en: {
    code: "en",
    lang: "en",
    label: "English",
    flag: "\u{1F1FA}\u{1F1F8}",
    ogLocale: "en_US",
    unitSystem: "imperial",
    siteUrl: "https://buildestimatory.com",
    currency: "USD",
  },
  es: {
    code: "es",
    lang: "es",
    label: "Espa\u00f1ol",
    flag: "\u{1F1EA}\u{1F1F8}",
    ogLocale: "es_ES",
    unitSystem: "metric",
    siteUrl: "https://es.buildestimatory.com",
    currency: "USD",
  },
  de: {
    code: "de",
    lang: "de",
    label: "Deutsch",
    flag: "\u{1F1E9}\u{1F1EA}",
    ogLocale: "de_DE",
    unitSystem: "metric",
    siteUrl: "https://de.buildestimatory.com",
    currency: "EUR",
  },
  fr: {
    code: "fr",
    lang: "fr",
    label: "Fran\u00e7ais",
    flag: "\u{1F1EB}\u{1F1F7}",
    ogLocale: "fr_FR",
    unitSystem: "metric",
    siteUrl: "https://fr.buildestimatory.com",
    currency: "EUR",
  },
  "pt-br": {
    code: "pt-br",
    lang: "pt",
    label: "Portugu\u00eas",
    flag: "\u{1F1E7}\u{1F1F7}",
    ogLocale: "pt_BR",
    unitSystem: "metric",
    siteUrl: "https://pt.buildestimatory.com",
    currency: "BRL",
  },
  "en-gb": {
    code: "en-gb",
    lang: "en",
    label: "English (UK)",
    flag: "\u{1F1EC}\u{1F1E7}",
    ogLocale: "en_GB",
    unitSystem: "metric",
    siteUrl: "https://uk.buildestimatory.com",
    currency: "GBP",
  },
  "en-ca": {
    code: "en-ca",
    lang: "en",
    label: "English (CA)",
    flag: "\u{1F1E8}\u{1F1E6}",
    ogLocale: "en_CA",
    unitSystem: "metric",
    siteUrl: "https://ca.buildestimatory.com",
    currency: "CAD",
  },
  tr: {
    code: "tr",
    lang: "tr",
    label: "T\u00fcrk\u00e7e",
    flag: "\u{1F1F9}\u{1F1F7}",
    ogLocale: "tr_TR",
    unitSystem: "metric",
    siteUrl: "https://tr.buildestimatory.com",
    currency: "TRY",
  },
  pl: {
    code: "pl",
    lang: "pl",
    label: "Polski",
    flag: "\u{1F1F5}\u{1F1F1}",
    ogLocale: "pl_PL",
    unitSystem: "metric",
    siteUrl: "https://pl.buildestimatory.com",
    currency: "PLN",
  },
  it: {
    code: "it",
    lang: "it",
    label: "Italiano",
    flag: "\u{1F1EE}\u{1F1F9}",
    ogLocale: "it_IT",
    unitSystem: "metric",
    siteUrl: "https://it.buildestimatory.com",
    currency: "EUR",
  },
};

export const defaultLocale: Locale = "en";

export const localeList: Locale[] = Object.keys(locales) as Locale[];

export function getLocale(): Locale {
  return (process.env.NEXT_PUBLIC_LOCALE as Locale) || defaultLocale;
}

export function getLocaleConfig(): LocaleConfig {
  return locales[getLocale()];
}

export function getAlternateLocales(): LocaleConfig[] {
  const current = getLocale();
  return localeList.filter((l) => l !== current).map((l) => locales[l]);
}
