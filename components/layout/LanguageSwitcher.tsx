"use client";

import { useState, useRef, useEffect } from "react";
import { locales, localeList, getLocale } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentLocale = getLocale();
  const current = locales[currentLocale];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function getUrlForLocale(locale: Locale) {
    const target = locales[locale];
    if (typeof window === "undefined") return target.siteUrl;
    return `${target.siteUrl}${window.location.pathname}`;
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-orange-400 hover:bg-orange-50 transition-all cursor-pointer"
        aria-label="Change language"
      >
        <span aria-hidden="true">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <svg
          className={`w-3.5 h-3.5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
          {localeList.map((locale) => {
            const config = locales[locale];
            const isActive = locale === currentLocale;
            return (
              <a
                key={locale}
                href={getUrlForLocale(locale)}
                className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-orange-50 text-orange-700 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setOpen(false)}
              >
                <span aria-hidden="true">{config.flag}</span>
                <span>{config.label}</span>
                {isActive && (
                  <svg className="w-4 h-4 ml-auto text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
