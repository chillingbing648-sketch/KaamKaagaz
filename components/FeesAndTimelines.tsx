"use client";

import { FeeItem } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";

export function FeesAndTimelines({
  fees,
  timelines,
}: {
  fees?: FeeItem[];
  timelines?: {
    overall: { en: string; hi: string; mr: string };
    details: { en: string; hi: string; mr: string };
  };
}) {
  const { language, t } = useLanguage();

  if (!fees && !timelines) return null;

  return (
    <div className="space-y-4">
      {fees && fees.length > 0 && (
        <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">💳</span>
            <h3 className="text-base sm:text-lg font-bold text-ink">
              {t.process.feesTitle}
            </h3>
          </div>
          <div className="divide-y divide-line/70">
            {fees.map((fee, idx) => (
              <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {getStr(fee.item, language)}
                  </p>
                  <p className="text-xs text-muted">
                    Source: {fee.verifiedSource}
                  </p>
                </div>
                <div className="font-mono text-base font-extrabold text-accent shrink-0">
                  {fee.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {timelines && (
        <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">⏱️</span>
            <h3 className="text-base sm:text-lg font-bold text-ink">
              {t.process.timelinesTitle}
            </h3>
          </div>
          <p className="text-sm font-semibold text-ink">
            {getStr(timelines.overall, language)}
          </p>
          <p className="mt-1 text-xs text-muted leading-relaxed">
            {getStr(timelines.details, language)}
          </p>
        </div>
      )}
    </div>
  );
}
