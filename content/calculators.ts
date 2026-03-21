import { getLocale } from "@/lib/i18n/config";

export interface CalculatorMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
}

export interface CategoryMeta {
  slug: string;
  title: string;
  description: string;
  calculators: CalculatorMeta[];
}

function loadCategories(): CategoryMeta[] {
  const locale = getLocale();
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require(`@/locales/${locale}/calculators`);
  return mod.categories;
}

export const categories: CategoryMeta[] = loadCategories();

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCalculatorBySlug(categorySlug: string, calculatorSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  return category?.calculators.find((c) => c.slug === calculatorSlug);
}
