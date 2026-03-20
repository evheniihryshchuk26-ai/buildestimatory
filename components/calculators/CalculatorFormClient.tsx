"use client";

import { calculatorRegistry } from "@/lib/calculatorRegistry";
import CalculatorForm from "@/components/calculators/CalculatorForm";

interface Props {
  category: string;
  calculator: string;
}

export default function CalculatorFormClient({ category, calculator }: Props) {
  const config = calculatorRegistry[category]?.[calculator];

  if (!config) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-red-700">
        Calculator not found.
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
