import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/content/calculators";
import AdBlock from "@/components/calculators/AdBlock";
import HeroAnimation from "@/components/HeroAnimation";
import { siteConfig } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  title: "BuildEstimatory — Free Construction Material Calculators",
  description:
    "Free construction material calculators for US builders and contractors. Get accurate estimates for framing, roofing, foundation, insulation, and more — instant results, no signup.",
  openGraph: {
    title: "BuildEstimatory — Free Construction Material Calculators",
    description:
      "Free construction material calculators for US builders and contractors. Instant results from foundation to roof.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BuildEstimatory — Free Construction Material Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildEstimatory — Free Construction Material Calculators",
    description:
      "Free construction material calculators for US builders and contractors. Instant results from foundation to roof.",
    images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/`,
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

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Free Construction Material
              <span className="text-orange-500"> Calculators</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-xl">
              Accurate material estimates for US builders and contractors. Get your
              shopping list in seconds — foundation to roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href="/calculators"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Browse All Calculators
              </Link>
              <Link
                href="/calculators/wall-framing/stud-calculator"
                className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Stud Calculator →
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
          Calculator Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/calculators/${cat.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange-400 hover:shadow-md transition-all group"
            >
              <div className="text-3xl mb-3" aria-hidden="true">{categoryIcons[cat.slug] ?? "📐"}</div>
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                {cat.description}
              </p>
              <p className="mt-3 text-sm text-orange-500 font-medium">
                {cat.calculators.length} calculators →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular calculators */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Most Popular Calculators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: "/calculators/wall-framing/stud-calculator", label: "Stud Calculator", desc: "16\" or 24\" OC with corners & openings" },
            { href: "/calculators/roofing/shingle-calculator", label: "Shingle Calculator", desc: "Bundles needed for any roof area" },
            { href: "/calculators/floor-framing/floor-joist-calculator", label: "Floor Joist Calculator", desc: "Joists by room width and spacing" },
            { href: "/calculators/roofing/truss-calculator", label: "Roof Truss Calculator", desc: "Truss count by roof length" },
            { href: "/calculators/insulation-drywall/drywall-calculator", label: "Drywall Calculator", desc: "Sheets needed for walls and ceilings" },
            { href: "/calculators/foundation/anchor-bolt-calculator", label: "Anchor Bolt Calculator", desc: "Bolts for foundation perimeter" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-400 hover:shadow-sm transition-all"
            >
              <span className="text-orange-500 text-lg mt-0.5" aria-hidden="true">📐</span>
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
          Why Use BuildEstimatory?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "⚡", title: "Instant Results", desc: "Get your material list in seconds — no account, no signup required." },
            { icon: "🎯", title: "US Code Standards", desc: "Built around standard US framing practices: 16\" and 24\" OC spacing, 4x8 sheets, and more." },
            { icon: "🛒", title: "Shopping-Ready Output", desc: "Results come as a clear shopping list with quantities and units you can take straight to the lumber yard." },
          ].map((item) => (
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
