"use client";

import { useLanguage } from "@/lib/i18n/context";
import { Situation } from "@/data/processes";
import { getStr } from "@/lib/i18n/localize";

export function SituationSelector({
  situations,
  selectedId,
  onSelect,
}: {
  situations: Situation[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const { language, t } = useLanguage();

  if (!situations || situations.length === 0) return null;

  const activeSituation = situations.find((s) => s.id === selectedId);

  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-accent-soft text-accent text-sm font-semibold">
            ?
          </span>
          <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
            {t.process.situationsTitle}
          </h3>
        </div>

        {selectedId !== null && (
          <button
            type="button"
            onClick={() => onSelect(null)}
            className="text-xs font-semibold text-accent hover:underline cursor-pointer"
          >
            {t.process.allSituations}
          </button>
        )}
      </div>

      <p className="text-xs sm:text-sm text-muted mb-4 leading-relaxed">
        Requirements vary depending on your specific case. Choose your situation to filter applicable documents:
      </p>

      {/* Situation Selectable Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label={t.process.situationsTitle}>
        {situations.map((sit) => {
          const isSelected = sit.id === selectedId;
          const nameStr = getStr(sit.name, language);
          const descStr = getStr(sit.description, language);

          return (
            <button
              key={sit.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(isSelected ? null : sit.id)}
              className={`flex items-start gap-3 rounded-2xl p-4 text-left transition-all duration-200 cursor-pointer min-h-[52px] active:scale-[0.985] ${
                isSelected
                  ? "border-2 border-accent bg-accent-soft/60 shadow-xs ring-2 ring-accent/20"
                  : "border border-black/[0.06] bg-black/[0.015] hover:border-black/[0.12] hover:bg-white"
              }`}
            >
              <div className="pt-0.5 shrink-0">
                <span
                  className={`flex size-5 items-center justify-center rounded-full border text-[11px] font-black transition-colors ${
                    isSelected
                      ? "border-accent bg-accent text-white"
                      : "border-black/[0.2] bg-white text-transparent"
                  }`}
                >
                  ✓
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <p className={`text-sm font-bold leading-tight tracking-tight ${isSelected ? "text-accent" : "text-ink"}`}>
                    {nameStr}
                  </p>
                  {isSelected && (
                    <span className="text-[10px] font-semibold text-accent bg-accent-soft px-2 py-0.5 rounded-full border border-accent/25 shrink-0">
                      Selected
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted line-clamp-2 leading-relaxed">
                  {descStr}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Contextual guidance note when a situation is selected */}
      {activeSituation && (
        <div className="mt-4 rounded-xl border border-accent/30 bg-accent-soft p-4 text-xs sm:text-sm text-ink animate-in fade-in duration-150">
          <div className="flex items-start gap-2.5">
            <span className="text-lg shrink-0">💡</span>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-accent">
                {getStr(activeSituation.name, language)}: Specific Guidance
              </p>
              {activeSituation.notes && (
                <p className="mt-1 text-ink/90 leading-relaxed font-medium">
                  {getStr(activeSituation.notes, language)}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
