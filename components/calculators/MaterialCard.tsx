import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MaterialCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export default function MaterialCard({ title, description, href, icon = "📐" }: MaterialCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full hover:border-orange-400 hover:shadow-md transition-all cursor-pointer group">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base group-hover:text-orange-600 transition-colors">
            <span>{icon}</span>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
