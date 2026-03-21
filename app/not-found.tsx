import type { Metadata } from "next";
import Link from "next/link";
import { getCommonTranslations } from "@/lib/i18n/translations";

const t = getCommonTranslations();

export const metadata: Metadata = {
  title: t.notFound.heading,
  description: t.notFound.message,
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-6xl mb-6">{"\uD83C\uDFD7\uFE0F"}</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.notFound.heading}</h1>
      <p className="text-gray-500 mb-8">
        {t.notFound.message}
      </p>
      <Link
        href="/calculators"
        className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
      >
        {t.notFound.backHome}
      </Link>
    </div>
  );
}
