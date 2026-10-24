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
      href={`/process/${process.slug}/`}
      className="group flex flex-col gap-3.5 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-black/[0.12] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-full bg-black/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-muted tracking-wide mb-1.5 border border-black/[0.03]">
            {localized.category}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors leading-snug tracking-tight">
            {localized.title}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-muted line-clamp-2 leading-relaxed">
            {localized.description}
          </p>
        </div>

        <span className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.02] px-3.5 py-1 text-xs font-semibold text-ink group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all shadow-xs shrink-0 self-center">
          <span>{t.process.viewDetails}</span>
          <span aria-hidden="true" className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </span>
      </div>

      {/* Metadata strip: doc count, steps, situations, verification, readiness */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-3 border-t border-black/[0.04] text-[11px] text-muted">
        {docCount > 0 && (
          <span className="flex items-center gap-1 font-medium">
            <span className="font-mono text-ink font-semibold">{docCount}</span> {t.processSnapshot.documents}
          </span>
        )}
        {stepCount > 0 && (
          <span className="flex items-center gap-1 font-medium">
            <span className="font-mono text-ink font-semibold">{stepCount}</span> {t.processSnapshot.steps}
          </span>
        )}
        {situationCount > 0 && (
          <span className="flex items-center gap-1 font-medium">
            <span className="font-mono text-ink font-semibold">{situationCount}</span> {t.processSnapshot.situations}
          </span>
        )}
        {lastChecked && (
          <span className="flex items-center gap-1 trust-verified">
            ✓ {lastChecked}
          </span>
        )}
        {total > 0 && (
          <span className={`flex items-center gap-1 rounded-full px-2 py-0.2 text-[10px] font-bold ${percent === 100 ? "bg-done-soft text-done border border-done/20" : "bg-accent-soft text-accent border border-accent/20"}`}>
            {percent}% {t.processSnapshot.readiness}
          </span>
        )}
      </div>
    </Link>
  );
}
