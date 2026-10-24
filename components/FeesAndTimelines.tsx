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
        <div className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          <div className="flex items-center mb-4">
            <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
              {t.process.feesTitle}
            </h3>
          </div>
          <div className="divide-y divide-black/[0.04]">
            {fees.map((fee, idx) => (
              <div key={idx} className="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {getStr(fee.item, language)}
                  </p>
                  <p className="text-xs text-muted mt-0.5">
                    {t.common.source}: {fee.verifiedSource}
                  </p>
                </div>
                <div className="font-mono text-base font-bold text-accent shrink-0">
                  {fee.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {timelines && (
        <div className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          <div className="flex items-center mb-2">
            <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
              {t.process.timelinesTitle}
            </h3>
          </div>
          <p className="text-sm font-semibold text-ink">
            {getStr(timelines.overall, language)}
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
            {getStr(timelines.details, language)}
          </p>
        </div>
      )}
    </div>
  );
}
