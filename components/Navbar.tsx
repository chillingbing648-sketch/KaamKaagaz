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
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5">
        
        {/* Zone 1: Brand = Identity */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 font-bold focus-visible:outline-2 focus-visible:outline-accent"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-white shadow-2xs group-hover:bg-accent-hover transition-colors" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="size-5" fill="none">
              <path d="M6 3.5h8l4 4V20.5H6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
              <path d="M14 3.5v4h4M9 14l2.1 2.1L15.5 11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-ink group-hover:text-accent transition-colors">
              {t.brand.name}
            </span>
            <span className="text-[11px] font-medium text-muted tracking-normal -mt-1 hidden sm:block">
              {t.brand.tagline}
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation = Location */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1.5 p-1 rounded-xl bg-paper/70 border border-line/60">
          <Link
            href="/#services"
            onClick={() => handleNavClick("services", "services")}
            className={`inline-flex min-h-[38px] items-center px-3.5 py-1.5 rounded-lg text-xs sm:text-sm transition-all ${
              activeSection === "services"
                ? "text-accent bg-accent-soft border border-accent/30 shadow-2xs font-bold"
                : "text-muted hover:text-ink hover:bg-surface/50 border border-transparent font-semibold"
            }`}
          >
            {t.nav.services}
          </Link>

          <Link
            href="/admissions"
            onClick={() => setActiveSection("admissions")}
            className={`inline-flex min-h-[38px] items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm transition-all ${
              activeSection === "admissions"
                ? "text-accent bg-accent-soft border border-accent/30 shadow-2xs font-bold"
                : "text-muted hover:text-ink hover:bg-surface/50 border border-transparent font-semibold"
            }`}
          >
            <span aria-hidden="true">🎓</span>
            <span>{t.nav.admissions}</span>
          </Link>

          <Link
            href="/#how-it-works"
            onClick={() => handleNavClick("how-it-works", "how-it-works")}
            className={`inline-flex min-h-[38px] items-center px-3.5 py-1.5 rounded-lg text-xs sm:text-sm transition-all ${
              activeSection === "how-it-works"
                ? "text-accent bg-accent-soft border border-accent/30 shadow-2xs font-bold"
                : "text-muted hover:text-ink hover:bg-surface/50 border border-transparent font-semibold"
            }`}
          >
            {t.nav.howItWorks}
          </Link>

          {/* Checklist quick picker dropdown */}
          <div className="relative" ref={menuRef}>
            <div
              className={`inline-flex items-center rounded-lg border transition-all ${
                activeSection === "checklist"
                  ? "text-accent bg-accent-soft border-accent/30 shadow-2xs font-bold"
                  : "border-transparent bg-transparent text-muted hover:bg-surface/50 hover:text-ink font-semibold"
              }`}
            >
              <Link
                href="/checklist"
                onClick={() => setActiveSection("checklist")}
                className="inline-flex min-h-[38px] items-center px-3 py-1.5 text-xs sm:text-sm"
              >
                {t.nav.checklist}
              </Link>
              <button
                type="button"
                onClick={() => setChecklistMenuOpen(!checklistMenuOpen)}
                aria-expanded={checklistMenuOpen}
                aria-label="Choose checklist service"
                className="inline-flex min-h-[38px] items-center justify-center border-l border-line/40 px-2 text-xs text-muted hover:text-ink cursor-pointer"
              >
                ▾
              </button>
            </div>

            {checklistMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl border border-line bg-surface p-2 shadow-lg ring-1 ring-black/5 z-50 animate-in fade-in duration-100">
                <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-line/50 pb-2 mb-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted">
                    {t.checklist.title}
                  </p>
                  <Link
                    href="/checklist"
                    onClick={() => {
                      setChecklistMenuOpen(false);
                      setActiveSection("checklist");
                    }}
                    className="text-xs font-bold text-accent hover:underline"
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
                        className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-ink hover:bg-accent-soft hover:text-accent rounded-lg transition-colors"
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

      {/* Mobile Sub-Navigation Bar for touch accessibility (Zone 2 for mobile) */}
      <div className="md:hidden border-t border-line/70 bg-paper/95 px-2 py-1.5 grid grid-cols-4 gap-1 text-xs">
        <Link
          href="/#services"
          onClick={() => handleNavClick("services", "services")}
          className={`flex min-h-[44px] items-center justify-center px-1.5 py-1.5 rounded-lg text-center font-semibold transition-colors ${
            activeSection === "services"
              ? "text-accent bg-accent-soft font-bold border border-accent/20"
              : "text-muted hover:text-ink"
          }`}
        >
          {t.nav.services}
        </Link>
        <Link
          href="/admissions"
          onClick={() => setActiveSection("admissions")}
          className={`flex min-h-[44px] items-center justify-center px-1.5 py-1.5 rounded-lg text-center font-semibold transition-colors ${
            activeSection === "admissions"
              ? "text-accent bg-accent-soft font-bold border border-accent/20"
              : "text-muted hover:text-ink"
          }`}
        >
          🎓 Admissions
        </Link>
        <Link
          href="/#how-it-works"
          onClick={() => handleNavClick("how-it-works", "how-it-works")}
          className={`flex min-h-[44px] items-center justify-center px-1.5 py-1.5 rounded-lg text-center font-semibold transition-colors ${
            activeSection === "how-it-works"
              ? "text-accent bg-accent-soft font-bold border border-accent/20"
              : "text-muted hover:text-ink"
          }`}
        >
          {t.nav.howItWorks}
        </Link>
        <Link
          href="/checklist"
          onClick={() => setActiveSection("checklist")}
          className={`flex min-h-[44px] items-center justify-center px-1.5 py-1.5 rounded-lg text-center font-semibold transition-colors ${
            activeSection === "checklist"
              ? "text-accent bg-accent-soft font-bold border border-accent/20"
              : "text-muted hover:text-ink"
          }`}
        >
          {t.nav.checklist}
        </Link>
      </div>
    </header>
  );
}
