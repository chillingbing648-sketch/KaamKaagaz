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

  return (
    <div className="rounded-xl border border-line bg-paper/60 p-3 sm:p-4 mb-6 shadow-2xs">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[11px] font-semibold text-muted tracking-wide">
          {t.nav.journeyStatus}
        </span>
        <span className="text-xs font-semibold text-accent">
          Step {currentIndex + 1} of {stages.length}
        </span>
      </div>

      <div className="relative">
        {/* Progress bar background line */}
        <div className="absolute top-1/2 left-3 right-3 -translate-y-1/2 h-0.5 bg-line -z-0" />
        <div
          className="absolute top-1/2 left-3 -translate-y-1/2 h-0.5 bg-accent transition-all duration-300 -z-0"
          style={{ width: `${(currentIndex / (stages.length - 1)) * 100}%` }}
        />

        <ol className="relative z-10 flex items-center justify-between">
          {stages.map((stage, idx) => {
            const isCompleted = idx < currentIndex;
            const isCurrent = idx === currentIndex;

            return (
              <li key={stage.id} className="flex flex-col items-center">
                <a
                  href={stage.anchor || "#"}
                  className={`flex size-6 sm:size-7 items-center justify-center rounded-full text-xs font-bold transition-all focus-visible:outline-2 focus-visible:outline-accent ${
                    isCurrent
                      ? "bg-accent text-white ring-4 ring-accent-soft shadow-xs scale-110"
                      : isCompleted
                      ? "bg-done text-white"
                      : "bg-surface border border-line text-muted"
                  }`}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isCompleted ? "✓" : idx + 1}
                </a>
                <span
                  className={`mt-1.5 text-[10px] sm:text-xs tracking-tight transition-colors hidden xs:block text-center max-w-[65px] ${
                    isCurrent
                      ? "font-bold text-accent"
                      : isCompleted
                      ? "font-semibold text-ink"
                      : "text-muted"
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
