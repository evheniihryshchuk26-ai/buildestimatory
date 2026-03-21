import { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/content/calculators";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AdBlock from "@/components/calculators/AdBlock";
import MaterialCard from "@/components/calculators/MaterialCard";
import { siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { getCommonTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();

export const metadata: Metadata = {
  title: `${t.calculatorsIndex.title} | BuildEstimatory`,
  description: t.layout.defaultDescription,
  openGraph: {
    title: `${t.calculatorsIndex.title} | BuildEstimatory`,
    description: t.layout.defaultDescription,
    url: `${siteConfig.url}/calculators/`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: t.calculatorsIndex.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${t.calculatorsIndex.title} | BuildEstimatory`,
    description: t.layout.defaultDescription,
    images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/calculators/`,
  },
};

const categoryIcons: Record<string, string> = {
  foundation: "\uD83C\uDFDB\uFE0F",
  "floor-framing": "\uD83E\uDEB5",
  "wall-framing": "\uD83D\uDD28",
  roofing: "\uD83C\uDFE0",
  "exterior-shell": "\uD83E\uDDF1",
  "insulation-drywall": "\uD83D\uDD29",
  hardware: "\uD83D\uDD27",
};

export default function CalculatorsPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: t.breadcrumb.home, url: "/" },
    { name: t.breadcrumb.calculators, url: "/calculators/" },
  ]);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t.calculatorsIndex.title,
    description: t.layout.defaultDescription,
    url: `${siteConfig.url}/calculators/`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categories.reduce((sum, c) => sum + c.calculators.length, 0),
      itemListElement: categories.flatMap((cat) =>
        cat.calculators.map((calc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: calc.title,
          url: `${siteConfig.url}/calculators/${cat.slug}/${calc.slug}/`,
        }))
      ),
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Breadcrumb items={[{ label: t.breadcrumb.calculators }]} />

      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
        {t.calculatorsIndex.title}
      </h1>
      <p className="text-gray-500 text-lg mb-8">
        {t.calculatorsIndex.freeCalculatorsCount(categories.reduce((sum, c) => sum + c.calculators.length, 0))}
      </p>

      <AdBlock slot="hero" className="mb-10" />

      <div className="space-y-12">
        {categories.map((cat) => (
          <section key={cat.slug}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span>{categoryIcons[cat.slug] ?? "\uD83D\uDCD0"}</span>
                {cat.title}
              </h2>
              <Link
                href={`/calculators/${cat.slug}`}
                className="text-sm text-orange-500 hover:text-orange-600 font-medium"
              >
                {t.calculatorsIndex.viewAll}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cat.calculators.map((calc) => (
                <MaterialCard
                  key={calc.slug}
                  title={calc.title}
                  description={calc.description}
                  href={`/calculators/${cat.slug}/${calc.slug}`}
                  icon={categoryIcons[cat.slug]}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
