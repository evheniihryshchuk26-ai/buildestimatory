import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AdBlock from "@/components/calculators/AdBlock";
import { siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";
import { getCommonTranslations, getGuidesTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();
const g = getGuidesTranslations();
const s = g.stairBuildingGuide!;

export const metadata: Metadata = {
  title: `${s.title} | BuildEstimatory`,
  description: s.metaDescription,
  openGraph: {
    title: `${s.title} | BuildEstimatory`,
    description: s.metaDescription,
    url: `${siteConfig.url}/guides/stair-building-guide/`,
    siteName: siteConfig.name,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: s.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${s.title} | BuildEstimatory`,
    description: s.metaDescription,
    images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/guides/stair-building-guide/`,
    languages: {
      en: "https://buildestimatory.com/guides/stair-building-guide/",
      es: "https://es.buildestimatory.com/guides/stair-building-guide/",
      de: "https://de.buildestimatory.com/guides/stair-building-guide/",
      fr: "https://fr.buildestimatory.com/guides/stair-building-guide/",
      pt: "https://pt.buildestimatory.com/guides/stair-building-guide/",
      "en-GB": "https://uk.buildestimatory.com/guides/stair-building-guide/",
      "en-CA": "https://ca.buildestimatory.com/guides/stair-building-guide/",
      it: "https://it.buildestimatory.com/guides/stair-building-guide/",
      pl: "https://pl.buildestimatory.com/guides/stair-building-guide/",
      "x-default": "https://buildestimatory.com/guides/stair-building-guide/",
    },
  },
};

export default function StairBuildingGuidePage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: t.breadcrumb.home, url: "/" },
    { name: g.breadcrumbGuides, url: "/guides/" },
    { name: s.title, url: "/guides/stair-building-guide/" },
  ]);

  const faqJsonLd = faqSchema(s.faqs);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: s.title,
    description: s.metaDescription,
    url: `${siteConfig.url}/guides/stair-building-guide/`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/guides/stair-building-guide/`,
    },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: g.breadcrumbGuides, href: "/guides" },
          { label: s.title },
        ]}
      />

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          {s.heroTitle}
          <span className="block text-orange-500">{s.heroSubtitle}</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl">
          {s.heroDescription}
        </p>
      </header>

      {/* Quick Answer */}
      <section className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-orange-700 mb-2">
          {s.quickAnswerHeading}
        </h2>
        <p className="text-gray-700 leading-relaxed">{s.quickAnswerText}</p>
      </section>

      <AdBlock slot="hero" className="mb-10" />

      {/* Stair Anatomy */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.anatomyHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.anatomyIntro}</p>
        <ul className="space-y-3 mb-4">
          {s.anatomyItems.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0" aria-hidden="true">
                &bull;
              </span>
              <span className="text-gray-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 font-medium bg-orange-50 rounded-lg p-4 border border-orange-200">
          {s.anatomySummary}
        </p>
      </section>

      {/* Building Code */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.buildingCodeHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.buildingCodeIntro}</p>
        <ul className="space-y-3 mb-4">
          {s.buildingCodeItems.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0" aria-hidden="true">
                &bull;
              </span>
              <span className="text-gray-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 font-medium bg-orange-50 rounded-lg p-4 border border-orange-200">
          {s.buildingCodeSummary}
        </p>
      </section>

      <AdBlock slot="middle" className="mb-10" />

      {/* How to Calculate */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.howToCalculateHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.howToCalculateIntro}</p>
        <ol className="space-y-3 mb-4 list-decimal list-inside">
          {s.howToCalculateItems.map((item, i) => (
            <li key={i} className="text-gray-600 leading-relaxed pl-2">
              {item}
            </li>
          ))}
        </ol>
        <p className="text-gray-700 font-medium bg-orange-50 rounded-lg p-4 border border-orange-200">
          {s.howToCalculateSummary}
        </p>
      </section>

      {/* Stair Types */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.stairTypesHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.stairTypesIntro}</p>
        <ul className="space-y-3 mb-4">
          {s.stairTypesItems.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0" aria-hidden="true">
                &bull;
              </span>
              <span className="text-gray-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 font-medium bg-orange-50 rounded-lg p-4 border border-orange-200">
          {s.stairTypesSummary}
        </p>
      </section>

      {/* Materials Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {s.materialsHeading}
        </h2>
        <p className="text-gray-500 mb-6">{s.materialsIntro}</p>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                  {s.materialsColMaterial}
                </th>
                <th className="text-left px-4 py-3 font-bold text-orange-600 border-b border-gray-200">
                  {s.materialsColCost}
                </th>
                <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">
                  {s.materialsColBestFor}
                </th>
              </tr>
            </thead>
            <tbody>
              {s.materialsRows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">
                    {row.material}
                  </td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">
                    {row.cost}
                  </td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">
                    {row.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.costBreakdownHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.costBreakdownIntro}</p>
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">{s.costBreakdownText1}</p>
          <p className="text-gray-600 leading-relaxed">{s.costBreakdownText2}</p>
          <p className="text-gray-600 leading-relaxed">{s.costBreakdownText3}</p>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-10 bg-orange-50 border border-orange-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {s.calculatorCtaHeading}
        </h2>
        <p className="text-gray-600 mb-6">{s.calculatorCtaText}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {s.calculatorLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white rounded-lg border border-orange-200 p-4 hover:border-orange-400 hover:shadow-sm transition-all group"
            >
              <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                {link.label}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {link.description}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdBlock slot="sidebar" className="mb-10" />

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {s.faqHeading}
        </h2>
        <div className="space-y-4">
          {s.faqs.map((faq, i) => (
            <details
              key={i}
              className="bg-white rounded-lg border border-gray-200 group"
            >
              <summary className="px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:text-orange-600 transition-colors list-none flex items-center justify-between">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
