"use client";

import { ProcessStep } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  const { language } = useLanguage();

  return (
    <div className="relative pl-6 sm:pl-8">
      {/* Continuous vertical timeline connector line */}
      <div className="absolute top-4 bottom-4 left-3 sm:left-4 -translate-x-1/2 w-0.5 bg-line" />

      <ol className="space-y-6">
        {steps.map((s, i) => {
          const title = s.localized ? getStr(s.localized.title, language, s.title) : s.title;
          const description = s.localized ? getStr(s.localized.description, language, s.description) : s.description;

          return (
            <li key={i} className="relative flex items-start gap-4">
              {/* Timeline circle node */}
              <span
                aria-hidden="true"
                className="absolute -left-6 sm:-left-8 flex size-6 sm:size-7 items-center justify-center rounded-full bg-accent text-xs font-black text-white ring-4 ring-paper shadow-2xs"
              >
                {i + 1}
              </span>

              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-base font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
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
