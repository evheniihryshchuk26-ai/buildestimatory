import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AdBlock from "@/components/calculators/AdBlock";
import { siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";
import { getCommonTranslations, getGuidesTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();
const g = getGuidesTranslations();
const s = g.lumberPrices;

export const metadata: Metadata = {
  title: `${s.title} | BuildEstimatory`,
  description: s.metaDescription,
  openGraph: {
    title: `${s.title} | BuildEstimatory`,
    description: s.metaDescription,
    url: `${siteConfig.url}/guides/lumber-prices-guide/`,
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
    canonical: `${siteConfig.url}/guides/lumber-prices-guide/`,
    languages: {
      en: "https://buildestimatory.com/guides/lumber-prices-guide/",
      es: "https://es.buildestimatory.com/guides/lumber-prices-guide/",
      "x-default": "https://buildestimatory.com/guides/lumber-prices-guide/",
    },
  },
};

export default function LumberPricesGuidePage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: t.breadcrumb.home, url: "/" },
    { name: g.breadcrumbGuides, url: "/guides/" },
    { name: s.title, url: "/guides/lumber-prices-guide/" },
  ]);

  const faqJsonLd = faqSchema(s.faqs);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: s.title,
    description: s.metaDescription,
    url: `${siteConfig.url}/guides/lumber-prices-guide/`,
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
      "@id": `${siteConfig.url}/guides/lumber-prices-guide/`,
    },
    datePublished: "2026-03-21",
    dateModified: "2026-03-21",
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

      {/* Species Pricing */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.speciesPricingHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.speciesPricingIntro}</p>
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">{s.speciesPricingText1}</p>
          <p className="text-gray-600 leading-relaxed">{s.speciesPricingText2}</p>
          <p className="text-gray-600 leading-relaxed">{s.speciesPricingText3}</p>
        </div>
      </section>

      {/* Dimensional vs Engineered */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.dimensionalVsEngineeredHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.dimensionalVsEngineeredIntro}</p>
        <ul className="space-y-3 mb-4">
          {s.dimensionalVsEngineeredItems.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0" aria-hidden="true">
                &bull;
              </span>
              <span className="text-gray-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 font-medium bg-gray-50 rounded-lg p-4 border border-gray-200">
          {s.dimensionalVsEngineeredSummary}
        </p>
      </section>

      <AdBlock slot="middle" className="mb-10" />

      {/* Grades */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.gradeHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.gradeIntro}</p>
        <ul className="space-y-3 mb-4">
          {s.gradeItems.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0" aria-hidden="true">
                &bull;
              </span>
              <span className="text-gray-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 font-medium bg-gray-50 rounded-lg p-4 border border-gray-200">
          {s.gradeSummary}
        </p>
      </section>

      {/* Price Trends */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.priceTrendsHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.priceTrendsIntro}</p>
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">{s.priceTrendsText1}</p>
          <p className="text-gray-600 leading-relaxed">{s.priceTrendsText2}</p>
          <p className="text-gray-700 font-medium bg-gray-50 rounded-lg p-4 border border-gray-200">
            {s.priceTrendsText3}
          </p>
        </div>
      </section>

      {/* Where to Buy */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.whereToBuyHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.whereToBuyIntro}</p>
        <ul className="space-y-3 mb-4">
          {s.whereToBuyItems.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0" aria-hidden="true">
                &bull;
              </span>
              <span className="text-gray-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 font-medium bg-gray-50 rounded-lg p-4 border border-gray-200">
          {s.whereToBuySummary}
        </p>
      </section>


      {/* Bulk Discounts */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.bulkDiscountsHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.bulkDiscountsIntro}</p>
        <ul className="space-y-3 mb-4">
          {s.bulkDiscountsItems.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0" aria-hidden="true">
                &bull;
              </span>
              <span className="text-gray-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 font-medium bg-gray-50 rounded-lg p-4 border border-gray-200">
          {s.bulkDiscountsSummary}
        </p>
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
