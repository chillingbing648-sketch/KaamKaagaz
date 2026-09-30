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
      <div className="flex items-center gap-2">
        <span className="text-lg">🎯</span>
        <h3 className="text-base sm:text-lg font-bold text-ink">
          {t.process.situationsTitle}
        </h3>
      </div>
      <p className="mt-1 text-xs sm:text-sm text-muted">
        Requirements change with your case. Select your situation to see exactly what applies to you:
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onSelect(null)}
          className={`min-h-10 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            selectedId === null
              ? "border border-accent bg-accent text-white shadow-2xs"
              : "border border-line bg-paper text-ink hover:border-accent hover:bg-accent-soft"
          }`}
        >
          {t.process.allSituations}
        </button>

        {situations.map((sit) => {
          const isSelected = sit.id === selectedId;
          const nameStr = getStr(sit.name, language);

          return (
            <button
              key={sit.id}
              type="button"
              onClick={() => onSelect(sit.id)}
              className={`min-h-10 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isSelected
                  ? "border border-accent bg-accent text-white shadow-2xs"
                  : "border border-line bg-paper text-ink hover:border-accent hover:bg-accent-soft"
              }`}
            >
              {nameStr}
            </button>
          );
        })}
      </div>

      {activeSituation && (
        <div className="mt-3 rounded-lg border border-accent/20 bg-accent-soft/50 p-3 text-xs sm:text-sm text-ink animate-in fade-in duration-150">
          <p className="font-semibold text-accent">
            ℹ️ {getStr(activeSituation.description, language)}
          </p>
          {activeSituation.notes && (
            <p className="mt-1 text-muted">
              {getStr(activeSituation.notes, language)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
