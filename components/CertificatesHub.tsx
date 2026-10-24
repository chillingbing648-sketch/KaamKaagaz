"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { processes } from "@/data/processes";
import { getLocalizedProcess } from "@/lib/i18n/localize";
import { ProcessCard } from "@/components/ProcessCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContextRail } from "@/components/ContextRail";

export function CertificatesHub() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  // Certificates & Vital records processes
  const certSlugs = ["income-certificate", "caste-certificate", "domicile-certificate", "birth-certificate"];
  const certProcesses = processes.filter((p) => certSlugs.includes(p.slug));

  const filteredProcesses = certProcesses.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const loc = getLocalizedProcess(p, language);
    return (
      loc.title.toLowerCase().includes(q) ||
      loc.description.toLowerCase().includes(q) ||
      (p.keywords && p.keywords.some((k) => k.toLowerCase().includes(q)))
    );
  });

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <div className="min-w-0 flex-1 lg:max-w-3xl space-y-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: t.common.home, href: "/" },
            { label: t.categories.certificatesTitle, isCurrent: true },
          ]}
        />

        {/* Hero Header */}
        <header className="border-b border-black/[0.06] pb-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft/80 px-3 py-1 text-[11px] font-semibold text-accent tracking-wide mb-3 border border-accent/15">
            <span>🏛️ State Citizen Services · Maharashtra & India</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            {t.categories.certificatesTitle}
          </h1>

          <p className="mt-2.5 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            {t.categories.certificatesSubtitle}
          </p>

          {/* Quick Category Search Bar */}
          <div className="mt-5 relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
              <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.categories.searchIn}
              className="h-12 w-full rounded-2xl border border-black/[0.08] bg-white pl-11 pr-10 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex size-6 items-center justify-center rounded-full text-muted hover:bg-black/[0.05] hover:text-ink transition-colors cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </header>

        {/* Services List */}
        <section aria-label="Certificates Services" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
              {t.common.allServices} ({filteredProcesses.length})
            </h2>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs font-semibold text-accent hover:underline cursor-pointer"
              >
                {t.home.showAllServices}
              </button>
            )}
          </div>

          <div className="space-y-3.5">
            {filteredProcesses.map((process) => (
              <ProcessCard key={process.slug} process={process} />
            ))}
          </div>
        </section>

        {/* Essential Rules for State Certificates */}
        <section aria-labelledby="cert-rules-heading" className="apple-card p-6 sm:p-7 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="flex size-7 items-center justify-center rounded-xl bg-accent text-white text-xs font-bold shadow-xs">
              📜
            </span>
            <h3 id="cert-rules-heading" className="text-lg font-bold text-ink tracking-tight">
              {t.categories.keyRulesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.015] p-3.5 space-y-1">
              <strong className="text-ink font-bold block text-sm">
                1. Aaple Sarkar Digital Barcodes
              </strong>
              <p className="text-muted leading-relaxed">
                Certificates generated via Aaple Sarkar feature a 2D barcode and digital signature. Physical stamps from the Tehsil office are no longer required.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.06] bg-black/[0.015] p-3.5 space-y-1">
              <strong className="text-ink font-bold block text-sm">
                2. 1-Year vs 3-Year Income Validity
              </strong>
              <p className="text-muted leading-relaxed">
                For college admissions and MahaDBT scholarships, a 3-year certificate or the certificate for the immediate previous financial year is required.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.06] bg-black/[0.015] p-3.5 space-y-1">
              <strong className="text-ink font-bold block text-sm">
                3. Domicile 15-Year Rule
              </strong>
              <p className="text-muted leading-relaxed">
                In Maharashtra, continuous proof of 15 years residence is mandatory unless applying under central government transfer or defense quota exemptions.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.06] bg-black/[0.015] p-3.5 space-y-1">
              <strong className="text-ink font-bold block text-sm">
                4. Caste Certificate vs Validity
              </strong>
              <p className="text-muted leading-relaxed">
                Caste Certificate is issued by the SDO/Sub-Divisional Officer. For professional college admissions, you also require a Caste Validity Certificate from the Scrutiny Committee.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="home" />
      </div>
    </div>
  );
}
