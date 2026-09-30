"use client";

import { useLanguage } from "@/lib/i18n/context";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="mt-14 pt-8 border-t border-line/80">
      <div className="mb-6">
        <h2 id="how-it-works-heading" className="text-xl sm:text-2xl font-black text-ink">
          {t.howItWorks.title}
        </h2>
        <p className="mt-1 text-sm text-muted">
          {t.howItWorks.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
          <div className="flex size-7 items-center justify-center rounded-full bg-accent-soft text-accent text-xs font-bold mb-2.5">
            1
          </div>
          <h3 className="text-sm font-bold text-ink">
            {t.howItWorks.step1Title}
          </h3>
          <p className="mt-1 text-xs text-muted leading-relaxed">
            {t.howItWorks.step1Desc}
          </p>
        </div>

        <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
          <div className="flex size-7 items-center justify-center rounded-full bg-accent-soft text-accent text-xs font-bold mb-2.5">
            2
          </div>
          <h3 className="text-sm font-bold text-ink">
            {t.howItWorks.step2Title}
          </h3>
          <p className="mt-1 text-xs text-muted leading-relaxed">
            {t.howItWorks.step2Desc}
          </p>
        </div>

        <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
          <div className="flex size-7 items-center justify-center rounded-full bg-accent-soft text-accent text-xs font-bold mb-2.5">
            3
          </div>
          <h3 className="text-sm font-bold text-ink">
            {t.howItWorks.step3Title}
          </h3>
          <p className="mt-1 text-xs text-muted leading-relaxed">
            {t.howItWorks.step3Desc}
          </p>
        </div>
      </div>
    </section>
  );
}
