"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ResultCard, { ResultItem } from "@/components/calculators/ResultCard";
import { getCommonTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();

export interface FieldConfig {
  id: string;
  label: string;
  unit?: string;
  type?: "number" | "select";
  options?: { label: string; value: string }[];
  defaultValue?: string | number;
  min?: number;
  step?: number;
  placeholder?: string;
}

interface CalculatorFormProps {
  fields: FieldConfig[];
  onCalculate: (values: Record<string, number | string>) => ResultItem[];
  disclaimer?: string;
}

export default function CalculatorForm({ fields, onCalculate, disclaimer }: CalculatorFormProps) {
  const initial: Record<string, string> = {};
  fields.forEach((f) => {
    initial[f.id] = String(f.defaultValue ?? "");
  });

  const [values, setValues] = useState<Record<string, string>>(initial);
  const [results, setResults] = useState<ResultItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const parsed: Record<string, number | string> = {};
    for (const field of fields) {
      if (field.type === "select") {
        parsed[field.id] = values[field.id];
      } else {
        const n = parseFloat(values[field.id]);
        if (isNaN(n) || n < 0) {
          setError(t.calculator.validationError(field.label));
          return;
        }
        parsed[field.id] = n;
      }
    }

    const items = onCalculate(parsed);
    setResults(items);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t.calculator.enterMeasurements}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <Label htmlFor={field.id}>
                    {field.label}
                    {field.unit && (
                      <span className="text-gray-600 font-normal ml-1">({field.unit})</span>
                    )}
                  </Label>
                  {field.type === "select" && field.options ? (
                    <select
                      id={field.id}
                      value={values[field.id]}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, [field.id]: e.target.value }))
                      }
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {field.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <Input
                      id={field.id}
                      type="number"
                      min={field.min ?? 0}
                      step={field.step ?? 0.1}
                      placeholder={field.placeholder ?? "0"}
                      value={values[field.id]}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, [field.id]: e.target.value }))
                      }
                    />
                  )}
                </div>
              ))}
            </div>

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              {t.calculator.calculateMaterials}
            </Button>
          </form>
        </CardContent>
      </Card>

      {results && (
        <ResultCard items={results} disclaimer={disclaimer} />
      )}
    </div>
  );
}
