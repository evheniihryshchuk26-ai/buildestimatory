import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AdBlock from "@/components/calculators/AdBlock";
import { siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";
import { getCommonTranslations, getGuidesTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();
const g = getGuidesTranslations();
const s = g.concreteCostGuide;

export const metadata: Metadata = {
  title: `${s.title} | BuildEstimatory`,
  description: s.metaDescription,
  openGraph: {
    title: `${s.title} | BuildEstimatory`,
    description: s.metaDescription,
    url: `${siteConfig.url}/guides/concrete-cost-guide/`,
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
    canonical: `${siteConfig.url}/guides/concrete-cost-guide/`,
    languages: {
      en: "https://buildestimatory.com/guides/concrete-cost-guide/",
      es: "https://es.buildestimatory.com/guides/concrete-cost-guide/",
      "x-default": "https://buildestimatory.com/guides/concrete-cost-guide/",
    },
  },
};

export default function ConcreteCostGuidePage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: t.breadcrumb.home, url: "/" },
    { name: g.breadcrumbGuides, url: "/guides/" },
    { name: s.title, url: "/guides/concrete-cost-guide/" },
  ]);

  const faqJsonLd = faqSchema(s.faqs);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: s.title,
    description: s.metaDescription,
    url: `${siteConfig.url}/guides/concrete-cost-guide/`,
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
      "@id": `${siteConfig.url}/guides/concrete-cost-guide/`,
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

      {/* Cost by Project Type */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {s.costByProjectHeading}
        </h2>
        <p className="text-gray-500 mb-6">{s.costByProjectIntro}</p>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                  {s.costByProjectColProject}
                </th>
                <th className="text-left px-4 py-3 font-bold text-orange-600 border-b border-gray-200">
                  {s.costByProjectColTypical}
                </th>
                <th className="text-left px-4 py-3 font-bold text-gray-700 border-b border-gray-200">
                  {s.costByProjectColNotes}
                </th>
              </tr>
            </thead>
            <tbody>
              {s.costByProjectRows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">
                    {row.project}
                  </td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">
                    {row.typical}
                  </td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bagged Concrete Costs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.baggedCostHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.baggedCostIntro}</p>
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">{s.baggedCostText1}</p>
          <p className="text-gray-600 leading-relaxed">{s.baggedCostText2}</p>
          <p className="text-gray-600 leading-relaxed">{s.baggedCostText3}</p>
        </div>
      </section>

      <AdBlock slot="middle" className="mb-10" />

      {/* Ready-Mix Pricing */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.readyMixPricingHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.readyMixPricingIntro}</p>
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">{s.readyMixPricingText1}</p>
          <p className="text-gray-600 leading-relaxed">{s.readyMixPricingText2}</p>
          <p className="text-gray-600 leading-relaxed">{s.readyMixPricingText3}</p>
        </div>
      </section>

      {/* Factors That Affect Cost */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.factorsHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.factorsIntro}</p>
        <ul className="space-y-3 mb-4">
          {s.factorsItems.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0" aria-hidden="true">
                &bull;
              </span>
              <span className="text-gray-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Labor Costs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.laborHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.laborIntro}</p>
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">{s.laborText1}</p>
          <p className="text-gray-600 leading-relaxed">{s.laborText2}</p>
          <p className="text-gray-700 font-medium bg-orange-50 rounded-lg p-4 border border-orange-200">
            {s.laborText3}
          </p>
        </div>
      </section>


      {/* Cost-Saving Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {s.savingTipsHeading}
        </h2>
        <p className="text-gray-600 mb-4">{s.savingTipsIntro}</p>
        <ul className="space-y-3 mb-4">
          {s.savingTipsItems.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0" aria-hidden="true">
                &bull;
              </span>
              <span className="text-gray-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
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
