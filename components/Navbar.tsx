"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { processes } from "@/data/processes";
import { getLocalizedProcess } from "@/lib/i18n/localize";

export function Navbar() {
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const [checklistMenuOpen, setChecklistMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<"services" | "admissions" | "how-it-works" | "checklist" | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Section awareness on homepage via IntersectionObserver, and pathname awareness on other routes
  useEffect(() => {
    if (pathname.startsWith("/admissions")) {
      setActiveSection("admissions");
      return;
    }

    if (pathname.startsWith("/checklist")) {
      setActiveSection("checklist");
      return;
    }

    if (pathname.startsWith("/process")) {
      setActiveSection("services");
      return;
    }

    if (pathname === "/") {
      const servicesEl = document.getElementById("services");
      const admissionsEl = document.getElementById("admissions-section");
      const howItWorksEl = document.getElementById("how-it-works");

      // Set initial section
      setActiveSection("services");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target.id === "how-it-works") {
                setActiveSection("how-it-works");
              } else if (entry.target.id === "admissions-section") {
                setActiveSection("admissions");
              } else if (entry.target.id === "services") {
                setActiveSection("services");
              }
            }
          });
        },
        {
          rootMargin: "-20% 0px -55% 0px",
          threshold: [0.1, 0.4],
        }
      );

      if (servicesEl) observer.observe(servicesEl);
      if (admissionsEl) observer.observe(admissionsEl);
      if (howItWorksEl) observer.observe(howItWorksEl);

      return () => {
        observer.disconnect();
      };
    } else {
      setActiveSection(null);
    }
  }, [pathname]);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setChecklistMenuOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setChecklistMenuOpen(false);
      }
    }
    if (checklistMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [checklistMenuOpen]);

  const handleNavClick = (section: "services" | "how-it-works", targetId: string) => {
    setActiveSection(section);
    if (pathname === "/") {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 apple-glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
        
        {/* Zone 1: Brand = Identity */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 font-bold focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98] transition-transform"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-white shadow-[0_2px_8px_rgba(198,78,22,0.28)] group-hover:bg-accent-hover transition-colors" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="size-5" fill="none">
              <path d="M6 3.5h8l4 4V20.5H6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M14 3.5v4h4M9 14l2.1 2.1L15.5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-ink transition-colors">
              KaamKaaga<span className="text-accent">Z</span>
            </span>
            <span className="text-[11px] font-medium text-muted tracking-tight -mt-1 hidden sm:block">
              {t.brand.tagline}
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation = Apple Segmented Controller */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-0.5 p-1 rounded-full bg-black/[0.04] border border-black/[0.04]">
          <Link
            href="/#services"
            onClick={() => handleNavClick("services", "services")}
            className={`inline-flex min-h-[34px] items-center px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeSection === "services"
                ? "text-ink bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink hover:bg-black/[0.02]"
            }`}
          >
            {t.nav.services}
          </Link>

          <Link
            href="/admissions"
            onClick={() => setActiveSection("admissions")}
            className={`inline-flex min-h-[34px] items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeSection === "admissions"
                ? "text-accent bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink hover:bg-black/[0.02]"
            }`}
          >
            <span aria-hidden="true" className="text-xs">🎓</span>
            <span>{t.nav.admissions}</span>
          </Link>

          <Link
            href="/#how-it-works"
            onClick={() => handleNavClick("how-it-works", "how-it-works")}
            className={`inline-flex min-h-[34px] items-center px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeSection === "how-it-works"
                ? "text-ink bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink hover:bg-black/[0.02]"
            }`}
          >
            {t.nav.howItWorks}
          </Link>

          {/* Checklist quick picker dropdown */}
          <div className="relative" ref={menuRef}>
            <div
              className={`inline-flex items-center rounded-full transition-all duration-200 ${
                activeSection === "checklist"
                  ? "text-accent bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] font-bold"
                  : "text-muted hover:text-ink hover:bg-black/[0.02]"
              }`}
            >
              <Link
                href="/checklist"
                onClick={() => setActiveSection("checklist")}
                className="inline-flex min-h-[34px] items-center pl-3.5 pr-1.5 py-1 text-xs font-semibold"
              >
                {t.nav.checklist}
              </Link>
              <button
                type="button"
                onClick={() => setChecklistMenuOpen(!checklistMenuOpen)}
                aria-expanded={checklistMenuOpen}
                aria-label="Choose checklist service"
                className="inline-flex min-h-[34px] items-center justify-center pr-3 pl-1 text-xs text-muted hover:text-ink cursor-pointer"
              >
                <svg className={`size-3 transition-transform duration-200 ${checklistMenuOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {checklistMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-black/[0.06] bg-white/95 backdrop-blur-xl p-2 shadow-[0_12px_32px_rgba(0,0,0,0.12)] z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-black/[0.04] pb-2 mb-1">
                  <p className="text-[11px] font-semibold text-muted tracking-tight">
                    {t.checklist.title}
                  </p>
                  <Link
                    href="/checklist"
                    onClick={() => {
                      setChecklistMenuOpen(false);
                      setActiveSection("checklist");
                    }}
                    className="text-xs font-semibold text-accent hover:underline"
                  >
                    View all →
                  </Link>
                </div>
                <div className="space-y-0.5">
                  {processes.map((p) => {
                    const loc = getLocalizedProcess(p, language);
                    return (
                      <Link
                        key={p.slug}
                        href={`/checklist/${p.slug}`}
                        onClick={() => {
                          setChecklistMenuOpen(false);
                          setActiveSection("checklist");
                        }}
                        className="flex items-center justify-between px-3 py-2 text-xs font-medium text-ink hover:bg-black/[0.04] hover:text-accent rounded-xl transition-colors"
                      >
                        <span className="truncate pr-2">{loc.title}</span>
                        <span className="text-muted text-xs shrink-0">→</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Language = Utility */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar: Apple-style segmented pill controller */}
      <div className="md:hidden border-t border-black/[0.05] bg-white/90 backdrop-blur-md px-3 py-1.5">
        <div className="grid grid-cols-4 gap-1 p-0.5 rounded-xl bg-black/[0.04]">
          <Link
            href="/#services"
            onClick={() => handleNavClick("services", "services")}
            className={`flex min-h-[38px] items-center justify-center px-1 rounded-lg text-center text-[11px] font-semibold transition-all duration-150 ${
              activeSection === "services"
                ? "text-ink bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            {t.nav.services}
          </Link>
          <Link
            href="/admissions"
            onClick={() => setActiveSection("admissions")}
            className={`flex min-h-[38px] items-center justify-center px-1 rounded-lg text-center text-[11px] font-semibold transition-all duration-150 ${
              activeSection === "admissions"
                ? "text-accent bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            Admissions
          </Link>
          <Link
            href="/#how-it-works"
            onClick={() => handleNavClick("how-it-works", "how-it-works")}
            className={`flex min-h-[38px] items-center justify-center px-1 rounded-lg text-center text-[11px] font-semibold transition-all duration-150 ${
              activeSection === "how-it-works"
                ? "text-ink bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            How it works
          </Link>
          <Link
            href="/checklist"
            onClick={() => setActiveSection("checklist")}
            className={`flex min-h-[38px] items-center justify-center px-1 rounded-lg text-center text-[11px] font-semibold transition-all duration-150 ${
              activeSection === "checklist"
                ? "text-accent bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            {t.nav.checklist}
          </Link>
        </div>
      </div>
    </header>
  );
}
