"use client";

import { CommonMistake } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";

export function CommonMistakes({ mistakes }: { mistakes?: CommonMistake[] }) {
  const { language, t } = useLanguage();

  if (!mistakes || mistakes.length === 0) return null;

  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="flex items-center mb-4">
        <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
          {t.process.commonMistakesTitle}
        </h3>
      </div>
      <div className="space-y-3">
        {mistakes.map((m, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-amber-200/60 bg-amber-50/50 p-4"
          >
            <p className="text-xs sm:text-sm font-bold text-amber-900 flex items-center gap-1.5">
              <span>✕</span>
              <span>{getStr(m.mistake, language)}</span>
            </p>
            <p className="mt-1.5 text-xs sm:text-sm text-ink/90 leading-relaxed pl-4">
              <strong className="text-done font-semibold">{t.common.howToAvoid}: </strong>
              {getStr(m.howToAvoid, language)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
