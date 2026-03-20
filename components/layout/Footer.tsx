import Link from "next/link";
import { categories } from "@/content/calculators";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl" aria-hidden="true">🏗️</span>
              <span className="font-bold text-white">
                Build<span className="text-orange-400">Estimatory</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Free construction material calculators for US builders, contractors,
              and DIY home builders.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Calculators</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/calculators/${cat.slug}`}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">More Tools</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/calculators/${cat.slug}`}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Site</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-orange-400 transition-colors">
                  All Calculators
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} BuildEstimatory.com — Free construction calculators for US builders.
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Results are estimates. Always verify with a licensed contractor.
          </p>
        </div>
      </div>
    </footer>
  );
}
