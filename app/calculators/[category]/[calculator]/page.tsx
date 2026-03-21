import { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug, getCalculatorBySlug } from "@/content/calculators";
import { calculatorRegistry } from "@/lib/calculatorRegistry";
import { generateCalculatorMetadata } from "@/lib/seo/metadata";
import CalculatorShell from "@/components/calculators/CalculatorShell";
import CalculatorFormClient from "@/components/calculators/CalculatorFormClient";

export async function generateStaticParams() {
  const params: { category: string; calculator: string }[] = [];
  for (const cat of categories) {
    for (const calc of cat.calculators) {
      params.push({ category: cat.slug, calculator: calc.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; calculator: string }>;
}): Promise<Metadata> {
  const { category, calculator } = await params;
  const calc = getCalculatorBySlug(category, calculator);
  if (!calc) return {};
  return generateCalculatorMetadata({
    title: calc.title,
    description: calc.description,
    slug: calc.slug,
    category: calc.categorySlug,
  });
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ category: string; calculator: string }>;
}) {
  const { category, calculator } = await params;

  const cat = getCategoryBySlug(category);
  const calcMeta = getCalculatorBySlug(category, calculator);
  const config = calculatorRegistry[category]?.[calculator];

  if (!cat || !calcMeta || !config) notFound();

  return (
    <CalculatorShell
      title={calcMeta.title}
      slug={calcMeta.slug}
      description={calcMeta.description}
      categoryLabel={cat.title}
      categorySlug={cat.slug}
      howToUse={config.howToUse}
      materialInfo={config.materialInfo}
      nextSteps={config.nextSteps}
      installationTips={config.installationTips}
      commonMistakes={config.commonMistakes}
      faqs={config.faqs}
    >
      <CalculatorFormClient
        category={category}
        calculator={calculator}
      />
    </CalculatorShell>
  );
}
