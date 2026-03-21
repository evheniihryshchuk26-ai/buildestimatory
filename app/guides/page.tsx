import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { getCommonTranslations, getGuidesTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();
const g = getGuidesTranslations();

export const metadata: Metadata = {
  title: `${g.index.title} | BuildEstimatory`,
  description: g.index.metaDescription,
  openGraph: {
    title: `${g.index.title} | BuildEstimatory`,
    description: g.index.metaDescription,
    url: `${siteConfig.url}/guides/`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: g.index.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${g.index.title} | BuildEstimatory`,
    description: g.index.metaDescription,
    images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/guides/`,
    languages: {
      en: "https://buildestimatory.com/guides/",
      es: "https://es.buildestimatory.com/guides/",
      "x-default": "https://buildestimatory.com/guides/",
    },
  },
};

export default function GuidesPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: t.breadcrumb.home, url: "/" },
    { name: g.breadcrumbGuides, url: "/guides/" },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumb items={[{ label: g.breadcrumbGuides }]} />

      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
        {g.index.heading}
      </h1>
      <p className="text-gray-500 text-lg mb-10">
        {g.index.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {g.index.guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange-400 hover:shadow-md transition-all group"
          >
            <h2 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
              {guide.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              {guide.description}
            </p>
            <p className="mt-4 text-sm text-orange-500 font-medium">
              {t.calculatorsIndex.viewAll}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
