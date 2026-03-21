import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/content/calculators";
import AdBlock from "@/components/calculators/AdBlock";
import HeroAnimation from "@/components/HeroAnimation";
import { siteConfig } from "@/lib/seo/metadata";
import { getHomeTranslations, getCommonTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();
const home = getHomeTranslations();

export const metadata: Metadata = {
  title: t.layout.defaultTitle,
  description: t.layout.defaultDescription,
  openGraph: {
    title: t.layout.defaultTitle,
    description: t.layout.defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: t.layout.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: t.layout.defaultTitle,
    description: t.layout.defaultDescription,
    images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/`,
    languages: {
      en: "https://buildestimatory.com/",
      es: "https://es.buildestimatory.com/",
      "x-default": "https://buildestimatory.com/",
    },
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

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              {home.hero.titleLine1}
              <span className="text-orange-500">{home.hero.titleHighlight}</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-xl">
              {home.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href="/calculators"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                {home.hero.ctaPrimary}
              </Link>
              <Link
                href="/calculators/wall-framing/stud-calculator"
                className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                {home.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Right — Animated Demo */}
          <div className="flex-1 w-full max-w-lg">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* Ad — hero */}
      <AdBlock slot="hero" className="mb-12" />

      {/* Category Grid */}
      <section className="py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {home.categories.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/calculators/${cat.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange-400 hover:shadow-md transition-all group"
            >
              <div className="text-3xl mb-3" aria-hidden="true">{categoryIcons[cat.slug] ?? "\uD83D\uDCD0"}</div>
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                {cat.description}
              </p>
              <p className="mt-3 text-sm text-orange-500 font-medium">
                {home.categories.calculatorsCount(cat.calculators.length)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular calculators */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {home.popular.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {home.popular.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-400 hover:shadow-sm transition-all"
            >
              <span className="text-orange-500 text-lg mt-0.5" aria-hidden="true">{"\uD83D\uDCD0"}</span>
              <div>
                <div className="font-semibold text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="py-12 bg-white rounded-xl border border-gray-200 px-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {home.valueProps.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {home.valueProps.items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
