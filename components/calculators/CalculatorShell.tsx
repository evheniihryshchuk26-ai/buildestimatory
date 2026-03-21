import { ReactNode } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AdBlock from "@/components/calculators/AdBlock";
import FAQSection from "@/components/calculators/FAQSection";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import ClusterLinks from "@/components/calculators/ClusterLinks";
import { breadcrumbSchema, howToSchema, webApplicationSchema } from "@/lib/seo/schemas";
import { getCommonTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();

interface FAQ {
  question: string;
  answer: string;
}

interface NextStep {
  label: string;
  href: string;
}

interface CalculatorShellProps {
  title: string;
  slug: string;
  description: string;
  categoryLabel: string;
  categorySlug: string;
  howToUse: string[];
  materialInfo: string;
  nextSteps?: NextStep[];
  installationTips: string[];
  commonMistakes: string[];
  faqs: FAQ[];
  children: ReactNode; // the interactive calculator
}

export default function CalculatorShell({
  title,
  slug,
  description,
  categoryLabel,
  categorySlug,
  howToUse,
  materialInfo,
  nextSteps,
  installationTips,
  commonMistakes,
  faqs,
  children,
}: CalculatorShellProps) {
  const crumbs = breadcrumbSchema([
    { name: t.breadcrumb.home, url: "/" },
    { name: t.breadcrumb.calculators, url: "/calculators/" },
    { name: categoryLabel, url: `/calculators/${categorySlug}/` },
    { name: title, url: `/calculators/${categorySlug}/${slug}/` },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema({
              name: `How to Use the ${title}`,
              description: `Step-by-step guide to using the ${title} on BuildEstimatory.`,
              steps: howToUse,
              url: `/calculators/${categorySlug}/${slug}/`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webApplicationSchema({
              name: title,
              description,
              categorySlug,
              slug,
            })
          ),
        }}
      />

      <Breadcrumb
        items={[
          { label: t.breadcrumb.calculators, href: "/calculators" },
          { label: categoryLabel, href: `/calculators/${categorySlug}` },
          { label: title },
        ]}
      />

      <div className="lg:grid lg:grid-cols-3 lg:gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{title}</h1>
          <p className="text-gray-500 text-lg mb-8">{description}</p>

          <AdBlock slot="hero" className="mb-8" />

          {/* Calculator widget */}
          <div className="mb-8">{children}</div>

          <ClusterLinks calculatorSlug={slug} categorySlug={categorySlug} />

          {/* How to use */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t.calculator.howToUseHeading}</h2>
            <ol className="space-y-2">
              {howToUse.map((step, i) => (
                <li key={i} className="flex gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <AdBlock slot="middle" className="mb-8" />

          {/* Material info */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{t.calculator.aboutMaterialHeading}</h2>
            <p className="text-gray-600 leading-relaxed">{materialInfo}</p>
            {nextSteps && nextSteps.length > 0 && (
              <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm font-semibold text-orange-800 mb-2">{t.calculator.nextStepsHeading}</p>
                <div className="flex flex-wrap gap-2">
                  {nextSteps.map((step) => (
                    <Link
                      key={step.href}
                      href={step.href}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-orange-200 rounded-lg text-sm font-medium text-orange-700 hover:border-orange-400 hover:bg-orange-50 transition-all"
                    >
                      {step.label} {"\u2192"}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Installation tips */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{t.calculator.installationTipsHeading}</h2>
            <ul className="space-y-2">
              {installationTips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-gray-600">
                  <span className="text-orange-500 mt-1">{"\u2022"}</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          {/* Common mistakes */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{t.calculator.commonMistakesHeading}</h2>
            <ul className="space-y-2">
              {commonMistakes.map((mistake, i) => (
                <li key={i} className="flex gap-2 text-gray-600">
                  <span className="text-red-400 mt-1" aria-hidden="true">{"\u26A0"}</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          <FAQSection faqs={faqs} title={t.calculator.faqHeading} />

          <RelatedCalculators
            categorySlug={categorySlug}
            currentCalculatorSlug={slug}
          />
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block mt-16 lg:mt-0">
          <div className="sticky top-24 space-y-6">
            <AdBlock slot="sidebar" />
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-800 mb-3">{t.calculator.quickTipHeading}</h3>
              <p className="text-sm text-orange-700 leading-relaxed">
                {t.calculator.quickTipBody}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
