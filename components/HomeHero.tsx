"use client";

import { useLanguage } from "@/lib/i18n/context";
import Link from "next/link";

export function HomeHero() {
  const { t } = useLanguage();

  const categories = [
    {
      id: "identity",
      label: t.home?.categoryIdentity || "Identity",
      tag: "Aadhaar, PAN, Passport",
      href: "/#services",
    },
    {
      id: "certificates",
      label: t.home?.categoryCertificates || "Certificates",
      tag: "Domicile, Caste, Income, Birth",
      href: "/#services",
    },
    {
      id: "education",
      label: t.home?.categoryEducation || "Education",
      tag: "Leaving, Transfer & College",
      href: "/admissions",
    },
    {
      id: "admissions",
      label: t.home?.categoryAdmissions || "Admissions",
      tag: "FYJC, CET Cell CAP, Samarth",
      href: "/admissions",
    },
    {
      id: "scholarships",
      label: t.home?.categoryScholarships || "Scholarships",
      tag: "MahaDBT & Fee Waivers",
      href: "/admissions#scholarships",
    },
    {
      id: "documents",
      label: t.home?.categoryStudentDocs || "Student Documents",
      tag: "Validity, APAAR & Proformas",
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
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group flex flex-col justify-between rounded-xl border border-line bg-surface p-3.5 hover:border-accent hover:bg-paper transition-all shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink group-hover:text-accent transition-colors">
                  {category.label}
                </span>
                <span className="text-xs text-muted group-hover:text-accent transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </div>
              <span className="mt-2 text-[11px] text-muted leading-tight font-medium">
                {category.tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
