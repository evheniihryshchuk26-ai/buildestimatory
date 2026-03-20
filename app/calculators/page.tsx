import { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/content/calculators";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AdBlock from "@/components/calculators/AdBlock";
import MaterialCard from "@/components/calculators/MaterialCard";
import { siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Construction Material Calculators | BuildEstimatory",
  description:
    "Browse all free construction material calculators for US builders. Foundation, framing, roofing, siding, insulation, drywall, and hardware estimates.",
  openGraph: {
    title: "Construction Material Calculators | BuildEstimatory",
    description:
      "Browse all free construction material calculators for US builders. Foundation, framing, roofing, siding, insulation, drywall, and hardware estimates.",
    url: `${siteConfig.url}/calculators/`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Construction Material Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Material Calculators | BuildEstimatory",
    description:
      "Browse all free construction material calculators for US builders. Foundation, framing, roofing, siding, insulation, drywall, and hardware estimates.",
    images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/calculators/`,
  },
};

const categoryIcons: Record<string, string> = {
  foundation: "🏛️",
  "floor-framing": "🪵",
  "wall-framing": "🔨",
  roofing: "🏠",
  "exterior-shell": "🧱",
  "insulation-drywall": "🔩",
  hardware: "🔧",
};

export default function CalculatorsPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Calculators", url: "/calculators/" },
  ]);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Construction Material Calculators",
    description:
      "Browse all free construction material calculators for US builders.",
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
      <Breadcrumb items={[{ label: "Calculators" }]} />

      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
        All Construction Calculators
      </h1>
      <p className="text-gray-500 text-lg mb-8">
        {categories.reduce((sum, c) => sum + c.calculators.length, 0)} free calculators covering every phase of timber-frame construction.
      </p>

      <AdBlock slot="hero" className="mb-10" />

      <div className="space-y-12">
        {categories.map((cat) => (
          <section key={cat.slug}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span>{categoryIcons[cat.slug] ?? "📐"}</span>
                {cat.title}
              </h2>
              <Link
                href={`/calculators/${cat.slug}`}
                className="text-sm text-orange-500 hover:text-orange-600 font-medium"
              >
                View all →
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
