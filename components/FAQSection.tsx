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
    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="flex items-center mb-4">
        <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
          {t.process.faqsTitle}
        </h3>
      </div>
      <div className="divide-y divide-black/[0.04]">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const q = getStr(faq.question, language);
          const a = getStr(faq.answer, language);

          return (
            <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between text-left gap-3 text-sm sm:text-base font-semibold text-ink hover:text-accent cursor-pointer transition-colors"
              >
                <span className="tracking-tight">{q}</span>
                <span className={`shrink-0 flex size-6 items-center justify-center rounded-full bg-black/[0.03] text-muted transition-transform duration-200 ${isOpen ? "rotate-180 text-accent bg-accent-soft" : ""}`}>
                  <svg className="size-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="mt-2.5 text-xs sm:text-sm text-muted leading-relaxed pr-6 animate-in fade-in duration-150">
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
