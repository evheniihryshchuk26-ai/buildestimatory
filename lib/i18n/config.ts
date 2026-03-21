export type Locale = "en" | "es";

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
