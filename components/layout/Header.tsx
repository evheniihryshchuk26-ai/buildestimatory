"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/content/calculators";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">🏗️</span>
            <span className="font-bold text-xl text-gray-900">
              Build<span className="text-orange-500">Estimatory</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/calculators"
              className="text-gray-600 hover:text-orange-500 font-medium transition-colors"
            >
              Calculators
            </Link>
            {categories.slice(0, 4).map((cat) => (
              <Link
                key={cat.slug}
                href={`/calculators/${cat.slug}`}
                className="text-gray-600 hover:text-orange-500 text-sm transition-colors"
              >
                {cat.title.replace(" Calculators", "")}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <Link href="/calculators" className="block py-2 text-gray-700 font-medium">
              All Calculators
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/calculators/${cat.slug}`}
                className="block py-2 text-gray-600 text-sm"
                onClick={() => setOpen(false)}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
