"use client";

import { ProcessStep } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  const { language } = useLanguage();

  return (
    <ol className="space-y-4">
      {steps.map((s, i) => {
        const title = s.localized ? getStr(s.localized.title, language, s.title) : s.title;
        const description = s.localized ? getStr(s.localized.description, language, s.description) : s.description;

        return (
          <li
            key={i}
            className="flex gap-3.5 rounded-xl border border-line bg-surface p-4 shadow-2xs"
          >
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-xs"
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-base font-bold text-ink">{title}</p>
              <p className="mt-1 text-sm text-muted leading-relaxed">{description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
