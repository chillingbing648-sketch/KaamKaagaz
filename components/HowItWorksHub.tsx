"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContextRail } from "@/components/ContextRail";

export function HowItWorksHub() {
  const { t } = useLanguage();
  const page = t.howItWorksPage;

  const phases = [
    {
      number: "1",
      title: page.phase1Title,
      desc: page.phase1Desc,
      points: page.phase1Points,
      badge: "Situation Filter",
    },
    {
      number: "2",
      title: page.phase2Title,
      desc: page.phase2Desc,
      points: page.phase2Points,
      badge: "Format & Prep",
    },
    {
      number: "3",
      title: page.phase3Title,
      desc: page.phase3Desc,
      points: page.phase3Points,
      badge: "Private Checklist",
    },
    {
      number: "4",
      title: page.phase4Title,
      desc: page.phase4Desc,
      points: page.phase4Points,
      badge: "Direct Government",
    },
  ];

  const pitfalls = [
    {
      title: page.pitfall1Title,
      desc: page.pitfall1Desc,
      icon: "⚠️",
    },
    {
      title: page.pitfall2Title,
      desc: page.pitfall2Desc,
      icon: "🔍",
    },
    {
      title: page.pitfall3Title,
      desc: page.pitfall3Desc,
      icon: "📅",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <article className="min-w-0 flex-1 lg:max-w-3xl space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: t.common.home, href: "/" },
            { label: t.nav.howItWorks, isCurrent: true },
          ]}
        />

        {/* Hero Header */}
        <header className="border-b border-black/[0.06] pb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft/80 px-3.5 py-1 text-xs font-semibold text-accent tracking-wide mb-3.5 border border-accent/20">
            <span>{page.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            {page.heroTitle}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            {page.heroSubtitle}
          </p>
        </header>

        {/* 4 Phases Workflow */}
        <section aria-label="KaamKaagaz 4 Phase Journey" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="apple-card p-6 sm:p-7 space-y-4 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-3 border-b border-black/[0.04] pb-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-accent text-white font-bold text-sm shadow-xs">
                      {phase.number}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-ink tracking-tight">
                      {phase.title}
                    </h2>
                  </div>
                  <span className="rounded-full bg-black/[0.03] px-2.5 py-0.5 text-[11px] font-semibold text-muted border border-black/[0.04]">
                    {phase.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                  {phase.desc}
                </p>

                <ul className="space-y-2 pt-1 text-xs text-ink/90">
                  {phase.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-done font-bold text-sm shrink-0">✓</span>
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Common Pitfalls Section */}
        <section aria-labelledby="pitfalls-heading" className="space-y-4">
          <div className="border-b border-black/[0.06] pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent block">
              ADVISORY & TRUST
            </span>
            <h2 id="pitfalls-heading" className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight mt-0.5">
              {page.pitfallsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pitfalls.map((pitfall, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-amber-200/60 bg-amber-50/50 p-5 space-y-2 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl block mb-2">{pitfall.icon}</span>
                  <h3 className="text-sm font-bold text-amber-950 tracking-tight">
                    {pitfall.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-amber-900/90 leading-relaxed">
                    {pitfall.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Action Navigation CTAs */}
        <section aria-label="Start exploring" className="apple-card p-6 sm:p-8 text-center space-y-5 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
            {page.ctaTitle}
          </h2>
          <p className="text-xs sm:text-sm text-muted max-w-lg mx-auto leading-relaxed">
            {page.ctaSubtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 pt-2">
            <Link
              href="/identity/"
              className="apple-btn-secondary !rounded-full px-4.5 py-2 text-xs font-semibold shadow-xs"
            >
              {t.nav.identity} →
            </Link>
            <Link
              href="/certificates/"
              className="apple-btn-secondary !rounded-full px-4.5 py-2 text-xs font-semibold shadow-xs"
            >
              {t.nav.certificates} →
            </Link>
            <Link
              href="/education/"
              className="apple-btn-secondary !rounded-full px-4.5 py-2 text-xs font-semibold shadow-xs"
            >
              {t.nav.education} →
            </Link>
            <Link
              href="/admissions/"
              className="apple-btn-primary !rounded-full px-5 py-2 text-xs font-semibold shadow-xs"
            >
              {t.nav.admissions} →
            </Link>
          </div>
        </section>
      </article>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="home" />
      </div>
    </div>
  );
}
