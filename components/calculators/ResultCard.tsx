import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCommonTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();

export interface ResultItem {
  label: string;
  quantity?: number | string;
  unit?: string;
}

interface ResultCardProps {
  items: ResultItem[];
  disclaimer?: string;
}

export default function ResultCard({ items, disclaimer }: ResultCardProps) {
  if (items.length === 0) return null;

  return (
    <Card className="border-orange-200 bg-orange-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <span aria-hidden="true">{"\uD83D\uDED2"}</span> {t.calculator.yourShoppingList}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-3 bg-white rounded-lg border border-orange-100"
            >
              <Badge
                variant="secondary"
                className="bg-orange-500 text-white shrink-0 mt-0.5"
              >
                {"\u2713"}
              </Badge>
              <span className="text-gray-800 font-medium">{item.label}</span>
            </li>
          ))}
        </ul>

        {disclaimer && (
          <p className="mt-4 text-sm text-gray-500 bg-white rounded p-2 border border-gray-200">
            {"\u26A0\uFE0F"} {disclaimer}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
