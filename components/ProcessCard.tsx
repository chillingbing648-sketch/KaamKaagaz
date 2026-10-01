"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { Process } from "@/data/processes";
import { getLocalizedProcess } from "@/lib/i18n/localize";
import { useChecklist } from "@/lib/checklist";

export function ProcessCard({
  process,
}: {
  process: Process | Pick<Process, "slug" | "title" | "category" | "description" | "localizedTitle" | "localizedCategory" | "localizedDescription">;
}) {
  const { language, t } = useLanguage();
  const localized = getLocalizedProcess(process as Process, language);

  // Access full Process fields safely
  const fullProcess = process as Process;
  const docCount = fullProcess.documents?.length ?? 0;
  const stepCount = fullProcess.steps?.length ?? 0;
  const situationCount = fullProcess.situations?.length ?? 0;
  const lastChecked = fullProcess.lastChecked;

  // Checklist readiness
  const ids = fullProcess.documents?.map((d) => d.id) ?? [];
  const { count, total, percent } = useChecklist(fullProcess.slug, ids);

  return (
    <Link
      href={`/process/${process.slug}`}
      className="group flex flex-col gap-3.5 rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs transition-all duration-200 hover:border-accent/60 hover:shadow-xs focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-md bg-paper px-2 py-0.5 text-[11px] font-semibold tracking-wide text-muted border border-line/60 mb-1.5">
            {localized.category}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors leading-snug">
            {localized.title}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-muted line-clamp-2 leading-relaxed">
            {localized.description}
          </p>
        </div>

        <span className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-line/80 bg-paper/60 px-3.5 py-1.5 text-xs font-bold text-ink group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all shadow-2xs shrink-0 self-center">
          <span>{t.process.viewDetails}</span>
          <span aria-hidden="true" className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>

      {/* Metadata strip: doc count, steps, situations, verification, readiness */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2.5 border-t border-line/50 text-[11px] text-muted">
        {docCount > 0 && (
          <span className="flex items-center gap-1">
            <span className="font-mono text-ink-light">{docCount}</span> {t.processSnapshot.documents}
          </span>
        )}
        {stepCount > 0 && (
          <span className="flex items-center gap-1">
            <span className="font-mono text-ink-light">{stepCount}</span> {t.processSnapshot.steps}
          </span>
        )}
        {situationCount > 0 && (
          <span className="flex items-center gap-1">
            <span className="font-mono text-ink-light">{situationCount}</span> {t.processSnapshot.situations}
          </span>
        )}
        {lastChecked && (
          <span className="flex items-center gap-1 trust-verified">
            ✓ {lastChecked}
          </span>
        )}
        {total > 0 && (
          <span className={`flex items-center gap-1 font-semibold ${percent === 100 ? "text-done" : "text-accent"}`}>
            {percent}% {t.processSnapshot.readiness}
          </span>
        )}
      </div>
    </Link>
  );
}
