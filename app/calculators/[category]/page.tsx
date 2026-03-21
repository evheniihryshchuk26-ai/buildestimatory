import { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/content/calculators";
import { generateCategoryMetadata } from "@/lib/seo/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import MaterialCard from "@/components/calculators/MaterialCard";
import AdBlock from "@/components/calculators/AdBlock";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { getCommonTranslations } from "@/lib/i18n/translations";

const categoryIcons: Record<string, string> = {
  foundation: "🏛️",
  "floor-framing": "🪵",
  "wall-framing": "🔨",
  roofing: "🏠",
  "exterior-shell": "🧱",
  "insulation-drywall": "🔩",
  hardware: "🔧",
};

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return generateCategoryMetadata({
    title: cat.title,
    description: cat.description,
    category: cat.slug,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const t = getCommonTranslations();

  const crumbSchema = breadcrumbSchema([
    { name: t.breadcrumb.home, url: "/" },
    { name: t.breadcrumb.calculators, url: "/calculators" },
    { name: cat.title, url: `/calculators/${cat.slug}` },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: t.breadcrumb.calculators, href: "/calculators" },
          { label: cat.title },
        ]}
      />

      <div className="flex items-center gap-3 mb-3">
        <span className="text-4xl">{categoryIcons[cat.slug] ?? "📐"}</span>
        <h1 className="text-3xl font-extrabold text-gray-900">{cat.title}</h1>
      </div>

      <p className="text-gray-500 text-lg mb-8 max-w-2xl">{cat.description}</p>

      <AdBlock slot="hero" className="mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Internal links to other categories */}
      <section className="mt-16">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {t.categoryPage.otherCategories}
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories
            .filter((c) => c.slug !== cat.slug)
            .map((c) => (
              <a
                key={c.slug}
                href={`/calculators/${c.slug}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-colors"
              >
                {categoryIcons[c.slug]} {c.title}
              </a>
            ))}
        </div>
      </section>
    </div>
  );
}
