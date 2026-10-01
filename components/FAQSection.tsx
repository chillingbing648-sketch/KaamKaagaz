"use client";

import { useState } from "react";
import { FAQ } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";

export function FAQSection({ faqs }: { faqs?: FAQ[] }) {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs">
      <div className="flex items-center mb-3">
        <h3 className="text-base sm:text-lg font-bold text-ink">
          {t.process.faqsTitle}
        </h3>
      </div>
      <div className="divide-y divide-line/70">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const q = getStr(faq.question, language);
          const a = getStr(faq.answer, language);

          return (
            <div key={idx} className="py-3 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between text-left gap-3 text-sm sm:text-base font-semibold text-ink hover:text-accent cursor-pointer"
              >
                <span>{q}</span>
                <span className="shrink-0 text-muted font-bold text-lg">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="mt-2 text-xs sm:text-sm text-muted leading-relaxed pr-6 animate-in fade-in duration-100">
                  {a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
