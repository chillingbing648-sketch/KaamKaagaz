"use client";

import { useLanguage } from "@/lib/i18n/context";
import Link from "next/link";

const isProd = process.env.NODE_ENV === "production";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isProd
      ? "/KaamKaagaz"
      : "";

export function HomeHero({
  selectedCategory,
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
      href: "/identity/",
    },
    {
      id: "certificates",
      label: t.home?.categoryCertificates || "Certificates",
      tag: t.home?.tagCertificates || "Domicile, Caste, Income, Birth",
      href: "/certificates/",
    },
    {
      id: "education",
      label: t.home?.categoryEducation || "Education",
      tag: t.home?.tagEducation || "Leaving, Transfer & College",
      href: "/education/",
    },
    {
      id: "admissions",
      label: t.home?.categoryAdmissions || "Admissions",
      tag: t.home?.tagAdmissions || "FYJC, CET Cell CAP, Samarth",
      href: "/admissions/",
    },
    {
      id: "scholarships",
      label: t.home?.categoryScholarships || "Scholarships",
      tag: t.home?.tagScholarships || "MahaDBT & Fee Waivers",
      href: "/admissions/#scholarships",
    },
    {
      id: "documents",
      label: t.home?.categoryStudentDocs || "Student Documents",
      tag: t.home?.tagStudentDocs || "Validity, APAAR & Proformas",
      href: "/education/#student-docs",
    },
  ];

  return (
    <div className="mb-10 pt-2">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-black/[0.03] px-3.5 py-1 text-xs font-semibold text-ink/80 mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <span aria-hidden="true">🇮🇳</span>
          <span>{t.brand.subTagline}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
          KaamKaaga<span className="text-accent">Z</span>
        </h1>

        <p className="mt-1.5 text-lg sm:text-2xl font-bold text-accent tracking-tight">
          {t.brand.tagline}
        </p>

        {/* Impactful Bold Value Proposition */}
        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-gradient-to-r from-accent-soft/90 via-accent-soft/40 to-white/60 border border-accent/25 p-3.5 sm:p-4 text-xs sm:text-sm max-w-2xl shadow-[0_2px_8px_rgba(198,78,22,0.06)]">
          <span className="flex size-5.5 items-center justify-center rounded-full bg-accent text-white text-[11px] font-black shrink-0 mt-0.5 shadow-2xs">
            ✓
          </span>
          <p className="font-semibold text-ink leading-relaxed">
            {t.brand.heroValueProp}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3.5">
          {t.home?.exploreKaam || "Explore your kaam"}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <Link
                key={category.id}
                href={category.href}
                className={`group flex flex-col justify-between rounded-2xl p-3.5 sm:p-4.5 transition-all duration-200 ease-out active:scale-[0.97] ${
                  isSelected
                    ? "border-2 border-accent bg-accent-soft/70 ring-2 ring-accent/20 shadow-sm -translate-y-0.5"
                    : "border border-black/[0.07] bg-white hover:border-accent/40 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                }`}
              >
                <div className="flex items-center justify-between gap-1.5">
                  <span className={`text-xs sm:text-sm font-bold tracking-tight transition-colors ${isSelected ? "text-accent" : "text-ink group-hover:text-accent"}`}>
                    {category.label}
                  </span>
                  <span className={`text-xs transition-transform duration-200 ease-out group-hover:translate-x-1 ${isSelected ? "text-accent" : "text-muted group-hover:text-accent"}`}>
                    →
                  </span>
                </div>
                <span className="mt-2 text-[10.5px] sm:text-[11px] text-muted leading-snug font-medium line-clamp-2 group-hover:text-ink/80 transition-colors">
                  {category.tag}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
