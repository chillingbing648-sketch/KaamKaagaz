"use client";

import { ProcessStep } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  const { language } = useLanguage();

  return (
    <div className="relative pl-7 sm:pl-9">
      {/* Continuous vertical timeline connector line */}
      <div className="absolute top-4 bottom-4 left-3.5 sm:left-4 -translate-x-1/2 w-0.5 bg-black/[0.08]" />

      <ol className="space-y-6">
        {steps.map((s, i) => {
          const title = s.localized ? getStr(s.localized.title, language, s.title) : s.title;
          const description = s.localized ? getStr(s.localized.description, language, s.description) : s.description;

          return (
            <li key={i} className="relative flex items-start gap-4">
              {/* Timeline circle node */}
              <span
                aria-hidden="true"
                className="absolute -left-7 sm:-left-9 flex size-7 sm:size-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white ring-4 ring-paper shadow-xs"
              >
                {i + 1}
              </span>

              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
