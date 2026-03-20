"use client";

import { useState } from "react";
import { faqSchema } from "@/lib/seo/schemas";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-inset"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
              <span className="text-gray-600 shrink-0 text-lg" aria-hidden="true">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
