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
    <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs">
      <div className="flex items-center justify-between gap-2 mb-1">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-full bg-accent-soft text-accent text-xs font-bold">
            🎯
          </span>
          <h3 className="text-base sm:text-lg font-bold text-ink">
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

      <p className="text-xs sm:text-sm text-muted mb-3.5 leading-relaxed">
        Requirements vary depending on your specific case. Choose your situation to see exactly what you need to prepare:
      </p>

      {/* Situation Radio-Card Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
              className={`flex items-start gap-3 rounded-lg border p-3 text-left transition-all cursor-pointer ${
                isSelected
                  ? "border-accent bg-accent-soft/50 shadow-2xs ring-1 ring-accent"
                  : "border-line bg-paper/60 hover:border-line/90 hover:bg-paper"
              }`}
            >
              <div className="pt-0.5 shrink-0">
                <span
                  className={`flex size-4 items-center justify-center rounded-full border transition-colors ${
                    isSelected
                      ? "border-accent bg-accent text-white"
                      : "border-muted/50 bg-white"
                  }`}
                >
                  {isSelected && (
                    <span className="size-1.5 rounded-full bg-white" />
                  )}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-xs sm:text-sm font-bold leading-tight ${isSelected ? "text-accent" : "text-ink"}`}>
                  {nameStr}
                </p>
                <p className="mt-0.5 text-xs text-muted line-clamp-2 leading-relaxed">
                  {descStr}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Contextual guidance note when a situation is selected */}
      {activeSituation && (
        <div className="mt-3.5 rounded-lg border border-accent/20 bg-accent-soft/40 p-3.5 text-xs sm:text-sm text-ink animate-in fade-in duration-150">
          <div className="flex items-start gap-2">
            <span className="text-base shrink-0">💡</span>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-accent">
                {getStr(activeSituation.name, language)}: Key Note
              </p>
              {activeSituation.notes && (
                <p className="mt-1 text-ink/90 leading-relaxed">
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
