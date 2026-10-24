"use client";

import { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { ContextRail } from "./ContextRail";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: ReactNode;
}

export function LegalPageLayout({
  title,
  subtitle,
  lastUpdated = "30 September 2026",
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <article className="min-w-0 flex-1 lg:max-w-3xl space-y-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Trust & Legal", href: "/legal" },
            { label: title, isCurrent: true },
          ]}
        />

        <header className="space-y-2">
          <span className="inline-block rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold text-muted">
            Civic Trust & Standards
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base text-muted leading-relaxed">{subtitle}</p>
          )}
          <p className="text-xs text-muted">Last updated: {lastUpdated}</p>
        </header>

        <div className="apple-card p-6 sm:p-8 space-y-6 text-sm text-ink leading-relaxed shadow-sm">
          {children}
        </div>
      </article>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="legal" />
      </div>
    </div>
  );
}
