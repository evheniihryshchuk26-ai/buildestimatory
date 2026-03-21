"use client";

import { calculatorRegistry } from "@/lib/calculatorRegistry";
import CalculatorForm from "@/components/calculators/CalculatorForm";
import { getCommonTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();

interface Props {
  category: string;
  calculator: string;
}

export default function CalculatorFormClient({ category, calculator }: Props) {
  const config = calculatorRegistry[category]?.[calculator];

  if (!config) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-red-700">
        {t.calculator.calculatorNotFound}
      </div>
    );
  }

  return (
    <CalculatorForm
      fields={config.fields}
      onCalculate={config.calculate}
      disclaimer={config.disclaimer}
    />
  );
}
