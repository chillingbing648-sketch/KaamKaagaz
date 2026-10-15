"use client";

import { useLanguage } from "@/lib/i18n/context";

export type JourneyStage =
  | "overview"
  | "situation"
  | "documents"
  | "eligibility"
  | "steps"
  | "fees"
  | "apply";

interface JourneyRoadmapProps {
  currentStage: JourneyStage;
  hasSituations?: boolean;
}

export function JourneyRoadmap({ currentStage, hasSituations = true }: JourneyRoadmapProps) {
  const { t } = useLanguage();

  const allStages: { id: JourneyStage; label: string; anchor: string }[] = [
    { id: "overview", label: "Overview", anchor: "#overview" },
    ...(hasSituations ? [{ id: "situation" as JourneyStage, label: t.journey.situation, anchor: "#situations" }] : []),
    { id: "documents", label: t.journey.documents, anchor: "#documents" },
    { id: "eligibility", label: t.journey.eligibility, anchor: "#eligibility" },
    { id: "steps", label: t.process.stepsTitle, anchor: "#steps" },
    { id: "fees", label: t.process.feesTitle, anchor: "#fees-timelines" },
    { id: "apply", label: t.officialSource.title, anchor: "#official-source" },
  ];

  const stages = allStages;
  const stageOrder = stages.map((s) => s.id);
  const rawIndex = stageOrder.indexOf(currentStage);
  const currentIndex = rawIndex >= 0 ? rawIndex : 0;

  const currentStageObj = stages[currentIndex] || stages[0];

  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white p-3.5 sm:p-4 mb-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
            {t.nav.journeyStatus}
          </span>
          <span className="inline-block size-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-bold text-ink">
            {currentStageObj.label}
          </span>
        </div>
        <span className="text-xs font-semibold text-muted bg-black/[0.04] px-2.5 py-0.5 rounded-full">
          {currentIndex + 1} of {stages.length}
        </span>
      </div>

      <div className="relative">
        {/* Progress bar background line */}
        <div className="absolute top-3.5 sm:top-4 left-3 right-3 -translate-y-1/2 h-0.5 bg-black/[0.06] -z-0" />
        <div
          className="absolute top-3.5 sm:top-4 left-3 -translate-y-1/2 h-0.5 bg-accent transition-all duration-300 ease-out -z-0"
          style={{ width: `${(currentIndex / Math.max(1, stages.length - 1)) * 100}%` }}
        />

        <ol className="relative z-10 flex items-start justify-between gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {stages.map((stage, idx) => {
            const isCompleted = idx < currentIndex;
            const isCurrent = idx === currentIndex;

            return (
              <li key={stage.id} className="flex flex-col items-center min-w-[38px] sm:min-w-0 sm:flex-1">
                <a
                  href={stage.anchor || "#"}
                  className={`flex size-7 sm:size-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent active:scale-95 ${
                    isCurrent
                      ? "bg-accent text-white ring-4 ring-accent-soft shadow-xs scale-105"
                      : isCompleted
                      ? "bg-done text-white hover:opacity-90"
                      : "bg-white border border-black/[0.12] text-muted hover:border-black/[0.25]"
                  }`}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isCompleted ? "✓" : idx + 1}
                </a>
                <span
                  className={`mt-1.5 text-[10px] tracking-tight transition-colors text-center truncate max-w-[58px] sm:max-w-none ${
                    isCurrent
                      ? "font-bold text-accent"
                      : isCompleted
                      ? "font-medium text-ink hidden sm:block"
                      : "text-muted hidden sm:block"
                  }`}
                >
                  {stage.label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
