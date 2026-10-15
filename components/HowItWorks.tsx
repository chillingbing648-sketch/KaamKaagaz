"use client";

import { useLanguage } from "@/lib/i18n/context";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="mt-14 pt-10 border-t border-black/[0.06]">
      <div className="mb-8">
        <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
          {t.howItWorks.title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted">
          {t.howItWorks.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {/* Step 1: FIND */}
        <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex size-6 items-center justify-center rounded-full bg-black/[0.05] text-ink text-xs font-bold font-mono">
                1
              </span>
              <span className="font-mono text-xs tracking-wider font-semibold text-muted uppercase">
                FIND ⌕
              </span>
            </div>
            <h3 className="text-base font-bold text-ink tracking-tight">
              {t.howItWorks.step1Title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
              {t.howItWorks.step1Desc}
            </p>
          </div>
        </div>

        {/* Step 2: PREPARE */}
        <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex size-6 items-center justify-center rounded-full bg-black/[0.05] text-ink text-xs font-bold font-mono">
                2
              </span>
              <span className="font-mono text-xs tracking-wider font-semibold text-muted uppercase">
                PREPARE ▤
              </span>
            </div>
            <h3 className="text-base font-bold text-ink tracking-tight">
              {t.howItWorks.step2Title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
              {t.howItWorks.step2Desc}
            </p>
          </div>
        </div>

        {/* Step 3: VERIFY */}
        <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex size-6 items-center justify-center rounded-full bg-accent-soft text-accent text-xs font-bold font-mono">
                3
              </span>
              <span className="font-mono text-xs tracking-wider font-semibold text-accent uppercase">
                VERIFY ✓
              </span>
            </div>
            <h3 className="text-base font-bold text-ink tracking-tight">
              {t.howItWorks.step3Title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
              {t.howItWorks.step3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
