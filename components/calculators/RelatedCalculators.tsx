import Link from "next/link";
import { categories } from "@/content/calculators";
import { getCommonTranslations } from "@/lib/i18n/translations";

/** Adjacency order for pulling calculators from neighboring categories */
const CATEGORY_ORDER = [
  "foundation",
  "floor-framing",
  "wall-framing",
  "roofing",
  "exterior-shell",
  "insulation-drywall",
  "hardware",
];

const MAX_RELATED = 4;

interface RelatedCalculatorsProps {
  categorySlug: string;
  currentCalculatorSlug: string;
}

export default function RelatedCalculators({
  categorySlug,
  currentCalculatorSlug,
}: RelatedCalculatorsProps) {
  const t = getCommonTranslations();
  const currentCategory = categories.find((c) => c.slug === categorySlug);

  // 1. Same-category calculators (excluding current)
  const sameCategory =
    currentCategory?.calculators.filter(
      (c) => c.slug !== currentCalculatorSlug
    ) ?? [];

  // 2. If we need more, pull from adjacent categories
  let related = [...sameCategory];

  if (related.length < MAX_RELATED) {
    const currentIdx = CATEGORY_ORDER.indexOf(categorySlug);
    const adjacentSlugs: string[] = [];

    // Expand outward from current category index
    for (let offset = 1; offset < CATEGORY_ORDER.length; offset++) {
      if (currentIdx + offset < CATEGORY_ORDER.length) {
        adjacentSlugs.push(CATEGORY_ORDER[currentIdx + offset]);
      }
      if (currentIdx - offset >= 0) {
        adjacentSlugs.push(CATEGORY_ORDER[currentIdx - offset]);
      }
    }

    for (const adjSlug of adjacentSlugs) {
      if (related.length >= MAX_RELATED) break;
      const adjCategory = categories.find((c) => c.slug === adjSlug);
      if (adjCategory) {
        for (const calc of adjCategory.calculators) {
          if (related.length >= MAX_RELATED) break;
          related.push(calc);
        }
      }
    }
  }

  // Cap at MAX_RELATED
  related = related.slice(0, MAX_RELATED);

  if (related.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-5">
        {t.relatedCalculators.heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {related.map((calc) => (
          <Link
            key={calc.slug}
            href={`/calculators/${calc.categorySlug}/${calc.slug}/`}
            className="group block rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-400 hover:shadow-md transition-all"
          >
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
              {calc.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
              {calc.description}
            </p>
            <span className="text-xs font-medium text-orange-600">
              {t.relatedCalculators.viewCalculator}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
