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
  const { language } = useLanguage();
  const localized = getLocalizedProcess(process as Process, language);

  return (
    <Link
      href={`/process/${process.slug}`}
      className="group flex min-h-16 items-center justify-between gap-4 rounded-xl border border-line bg-surface p-4 shadow-2xs transition-all duration-200 hover:border-accent hover:bg-accent-soft hover:shadow-xs focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="block text-lg font-bold text-ink group-hover:text-accent transition-colors">
            {localized.title}
          </span>
        </div>
        <span className="block text-xs font-semibold uppercase tracking-wider text-muted mt-0.5">
          {localized.category}
        </span>
        <p className="mt-1 text-sm text-muted line-clamp-2 leading-snug">
          {localized.description}
        </p>
      </div>

      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-paper group-hover:bg-accent group-hover:text-white transition-colors text-muted">
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.5 4.5l5 5.5-5 5.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
