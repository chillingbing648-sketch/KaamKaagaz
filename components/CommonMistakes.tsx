"use client";

import { CommonMistake } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";

export function CommonMistakes({ mistakes }: { mistakes?: CommonMistake[] }) {
  const { language, t } = useLanguage();

  if (!mistakes || mistakes.length === 0) return null;

  return (
    <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs">
      <div className="flex items-center mb-3">
        <h3 className="text-base sm:text-lg font-bold text-ink">
          {t.process.commonMistakesTitle}
        </h3>
      </div>
      <div className="space-y-3">
        {mistakes.map((m, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-warning-line/80 bg-warning-soft/30 p-3.5"
          >
            <p className="text-xs sm:text-sm font-bold text-warning flex items-center gap-1.5">
              <span>✕</span>
              <span>{getStr(m.mistake, language)}</span>
            </p>
            <p className="mt-1 text-xs sm:text-sm text-ink/90 leading-relaxed pl-4">
              <strong className="text-done font-bold">How to avoid: </strong>
              {getStr(m.howToAvoid, language)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
