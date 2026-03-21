import { Metadata } from "next";
import { getLocaleConfig, locales, localeList } from "@/lib/i18n/config";
import { getCommonTranslations } from "@/lib/i18n/translations";

function getSiteConfig() {
  const config = getLocaleConfig();
  const t = getCommonTranslations();
  return {
    name: "BuildEstimatory",
    url: config.siteUrl,
    description: t.layout.defaultDescription,
  };
}

export const siteConfig = getSiteConfig();

function buildHreflang(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of localeList) {
    languages[locales[locale].lang] = `${locales[locale].siteUrl}${path}`;
  }
  languages["x-default"] = `${locales.en.siteUrl}${path}`;
  return languages;
}

export function generateCalculatorMetadata({
  title,
  description,
  slug,
  category,
}: {
  title: string;
  description: string;
  slug: string;
  category: string;
}): Metadata {
  const fullTitle = `${title} | BuildEstimatory`;
  const path = `/calculators/${category}/${slug}/`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteConfig.url}/og-image.png`],
    },
    alternates: {
      canonical: url,
      languages: buildHreflang(path),
    },
  };
}

export function generateCategoryMetadata({
  title,
  description,
  category,
}: {
  title: string;
  description: string;
  category: string;
}): Metadata {
  const fullTitle = `${title} | BuildEstimatory`;
  const path = `/calculators/${category}/`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteConfig.url}/og-image.png`],
    },
    alternates: {
      canonical: url,
      languages: buildHreflang(path),
    },
  };
}
