"use client";

import { useLanguage } from "@/lib/i18n/context";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="mt-14 pt-8 border-t border-line/80">
      <div className="mb-8">
        <h2 id="how-it-works-heading" className="text-xl sm:text-2xl font-bold text-ink">
          {t.howItWorks.title}
        </h2>
        <p className="mt-2 text-sm text-muted">
          {t.howItWorks.subtitle}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 md:gap-4 items-stretch">
        {/* Step 1: FIND */}
        <div className="flex-1 rounded-xl border border-line bg-surface p-5 shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex size-5 items-center justify-center rounded-full border border-line bg-surface text-ink text-[10px] font-bold">
              1
            </span>
            <span className="font-mono text-[11px] tracking-wider font-semibold text-muted uppercase">
              FIND ⌕
            </span>
          </div>
          <h3 className="text-sm font-bold text-ink">
            {t.howItWorks.step1Title}
          </h3>
          <p className="mt-1.5 text-xs text-muted leading-relaxed">
            {t.howItWorks.step1Desc}
          </p>
        </div>

        {/* Arrow Connector 1 */}
        <div className="hidden sm:flex items-center justify-center text-muted/50 px-1">
          →
        </div>

        {/* Step 2: PREPARE */}
        <div className="flex-1 rounded-xl border border-line bg-surface p-5 shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex size-5 items-center justify-center rounded-full border border-line bg-surface text-ink text-[10px] font-bold">
              2
            </span>
            <span className="font-mono text-[11px] tracking-wider font-semibold text-muted uppercase">
              PREPARE ▤
            </span>
          </div>
          <h3 className="text-sm font-bold text-ink">
            {t.howItWorks.step2Title}
          </h3>
          <p className="mt-1.5 text-xs text-muted leading-relaxed">
            {t.howItWorks.step2Desc}
          </p>
        </div>

        {/* Arrow Connector 2 */}
        <div className="hidden sm:flex items-center justify-center text-muted/50 px-1">
          →
        </div>

        {/* Step 3: VERIFY */}
        <div className="flex-1 rounded-xl border border-line bg-surface p-5 shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex size-5 items-center justify-center rounded-full border border-line bg-surface text-ink text-[10px] font-bold">
              3
            </span>
            <span className="font-mono text-[11px] tracking-wider font-semibold text-muted uppercase">
              VERIFY ✓
            </span>
          </div>
          <h3 className="text-sm font-bold text-ink">
            {t.howItWorks.step3Title}
          </h3>
          <p className="mt-1.5 text-xs text-muted leading-relaxed">
            {t.howItWorks.step3Desc}
          </p>
        </div>
      </div>
    </section>
  );
}
