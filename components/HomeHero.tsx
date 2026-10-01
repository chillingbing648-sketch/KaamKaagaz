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
    <div className="mb-8 pt-2">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent mb-4 shadow-2xs">
          <span aria-hidden="true">🇮🇳</span>
          <span>{t.brand.subTagline}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
          KaamKaaga<span className="text-accent">Z</span>
        </h1>

        <p className="mt-2 text-lg sm:text-xl font-semibold text-accent">
          {t.brand.tagline}
        </p>

        <p className="mt-3 text-sm text-muted max-w-lg leading-relaxed">
          {t.brand.disclaimer}
        </p>
      </div>

      <div>
        <h2 className="text-xs font-semibold text-muted tracking-wide mb-3">
          {t.home?.exploreKaam || "Explore your kaam"}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            const content = (
              <>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold transition-colors ${isSelected ? "text-accent" : "text-ink group-hover:text-accent"}`}>
                    {category.label}
                  </span>
                  <span className={`text-xs transition-transform group-hover:translate-x-0.5 ${isSelected ? "text-accent" : "text-muted group-hover:text-accent"}`}>
                    →
                  </span>
                </div>
                <span className="mt-2 text-[11px] text-muted leading-tight font-medium">
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
                  className={`group flex flex-col justify-between text-left rounded-xl border p-3.5 transition-all shadow-2xs cursor-pointer ${
                    isSelected
                      ? "border-accent bg-paper ring-2 ring-accent/20 shadow-xs"
                      : "border-line bg-surface hover:border-accent hover:bg-paper"
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
                className={`group flex flex-col justify-between rounded-xl border p-3.5 transition-all shadow-2xs ${
                  isSelected
                    ? "border-accent bg-paper ring-2 ring-accent/20 shadow-xs"
                    : "border-line bg-surface hover:border-accent hover:bg-paper"
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
