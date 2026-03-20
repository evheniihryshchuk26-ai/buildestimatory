import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page does not exist. Browse all available construction material calculators on BuildEstimatory.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-6xl mb-6">🏗️</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-500 mb-8">
        This calculator or page does not exist yet. Browse all available calculators below.
      </p>
      <Link
        href="/calculators"
        className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
      >
        Browse All Calculators
      </Link>
    </div>
  );
}
