"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { Process } from "@/data/processes";
import { getLocalizedProcess } from "@/lib/i18n/localize";

export function ProcessCard({
  process,
}: {
  process: Process | Pick<Process, "slug" | "title" | "category" | "description" | "localizedTitle" | "localizedCategory" | "localizedDescription">;
}) {
  const { language, t } = useLanguage();
  const localized = getLocalizedProcess(process as Process, language);

  return (
    <Link
      href={`/process/${process.slug}`}
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs transition-all duration-200 hover:border-accent hover:bg-accent-soft/30 hover:shadow-xs focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-block rounded-md bg-paper px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-muted border border-line/60">
            {localized.category}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors">
          {localized.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-muted line-clamp-2 leading-relaxed">
          {localized.description}
        </p>
      </div>

      <div className="flex items-center sm:self-center shrink-0">
        <span className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-line/80 bg-paper/60 px-3.5 py-1.5 text-xs font-bold text-ink group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all shadow-2xs">
          <span>{t.process.viewDetails}</span>
          <span aria-hidden="true" className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
