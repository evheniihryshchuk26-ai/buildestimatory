import { MetadataRoute } from "next";
import { categories } from "@/content/calculators";
import { siteConfig } from "@/lib/seo/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date("2026-03-20");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/calculators/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/guides/`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];

  const guidePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/guides/16-vs-24-on-center-spacing/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/roof-pitch-chart/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/minimum-roof-pitch-for-shingles/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/ready-mix-vs-bagged-concrete/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/concrete-cost-guide/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/how-much-paint-do-i-need/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/lumber-prices-guide/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/composite-vs-wood-decking/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/gravel-cost-guide/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/calculators/${cat.slug}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const calculatorPages: MetadataRoute.Sitemap = categories.flatMap((cat) =>
    cat.calculators.map((calc) => ({
      url: `${baseUrl}/calculators/${cat.slug}/${calc.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...guidePages, ...categoryPages, ...calculatorPages];
}
