"use client";

import { useLanguage } from "@/lib/i18n/context";
import Link from "next/link";

export function HomeHero({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory?: string | null;
  onSelectCategory?: (category: string) => void;
} = {}) {
  const { t } = useLanguage();

  const categories = [
    {
      id: "identity",
      label: t.home?.categoryIdentity || "Identity",
      tag: t.home?.tagIdentity || "Aadhaar, PAN, Passport",
      isFilter: true,
    },
    {
      id: "certificates",
      label: t.home?.categoryCertificates || "Certificates",
      tag: t.home?.tagCertificates || "Domicile, Caste, Income, Birth",
      isFilter: true,
    },
    {
      id: "education",
      label: t.home?.categoryEducation || "Education",
      tag: t.home?.tagEducation || "Leaving, Transfer & College",
      isFilter: true,
    },
    {
      id: "admissions",
      label: t.home?.categoryAdmissions || "Admissions",
      tag: t.home?.tagAdmissions || "FYJC, CET Cell CAP, Samarth",
      href: "/admissions",
    },
    {
      id: "scholarships",
      label: t.home?.categoryScholarships || "Scholarships",
      tag: t.home?.tagScholarships || "MahaDBT & Fee Waivers",
      href: "/admissions#scholarships",
    },
    {
      id: "documents",
      label: t.home?.categoryStudentDocs || "Student Documents",
      tag: t.home?.tagStudentDocs || "Validity, APAAR & Proformas",
      href: "/admissions#documents",
    },
  ];

  return (
    <div className="mb-10 pt-2">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-black/[0.03] px-3.5 py-1 text-xs font-semibold text-ink/80 mb-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <span aria-hidden="true">🇮🇳</span>
          <span>{t.brand.subTagline}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
          KaamKaaga<span className="text-accent">Z</span>
        </h1>

        <p className="mt-2 text-lg sm:text-2xl font-semibold text-accent tracking-tight">
          {t.brand.tagline}
        </p>

        <p className="mt-3 text-sm sm:text-base text-muted max-w-xl leading-relaxed">
          {t.brand.disclaimer}
        </p>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3.5">
          {t.home?.exploreKaam || "Explore your kaam"}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            const content = (
              <>
                <div className="flex items-center justify-between gap-1">
                  <span className={`text-sm font-bold transition-colors ${isSelected ? "text-accent" : "text-ink group-hover:text-accent"}`}>
                    {category.label}
                  </span>
                  <span className={`text-xs transition-transform duration-200 group-hover:translate-x-0.5 ${isSelected ? "text-accent" : "text-muted group-hover:text-accent"}`}>
                    →
                  </span>
                </div>
                <span className="mt-2.5 text-[11px] text-muted leading-snug font-medium line-clamp-2">
                  {category.tag}
                </span>
              </>
            );

            if (category.isFilter && onSelectCategory) {
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onSelectCategory(category.id)}
                  className={`group flex flex-col justify-between text-left rounded-2xl p-4 transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                    isSelected
                      ? "border-2 border-accent bg-accent-soft/60 ring-2 ring-accent/20 shadow-xs"
                      : "border border-black/[0.06] bg-white hover:border-black/[0.12] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                  }`}
                >
                  {content}
                </button>
              );
            }

            return (
              <Link
                key={category.id}
                href={category.href || "/#services"}
                className={`group flex flex-col justify-between rounded-2xl p-4 transition-all duration-200 active:scale-[0.98] ${
                  isSelected
                    ? "border-2 border-accent bg-accent-soft/60 ring-2 ring-accent/20 shadow-xs"
                    : "border border-black/[0.06] bg-white hover:border-black/[0.12] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                }`}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
