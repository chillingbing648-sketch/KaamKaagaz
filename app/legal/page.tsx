import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContextRail } from "@/components/ContextRail";

export const metadata: Metadata = {
  title: "Legal & Civic Trust · KaamKaagaz",
  description: "Directory of legal policies, terms, civic disclaimer, security, and accessibility statements for KaamKaagaz.",
};

export default function LegalHubPage() {
  const policies = [
    { title: "Civic Disclaimer", href: "/disclaimer", desc: "Non-affiliation with government departments and anti-fraud advisory." },
    { title: "Privacy Policy", href: "/privacy", desc: "Zero document collection and private client-side local storage." },
    { title: "Terms of Use", href: "/terms", desc: "Informational scope and civic guidance terms." },
    { title: "Security Policy", href: "/security", desc: "Client-side architecture and responsible disclosure contact." },
    { title: "Cookie Policy", href: "/cookies", desc: "Zero advertising cookies and local storage explanation." },
    { title: "Accessibility Statement", href: "/accessibility", desc: "WCAG 2.1 compliance, keyboard navigation, and Devanagari font rendering." },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <article className="min-w-0 flex-1 lg:max-w-3xl space-y-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Trust & Legal Hub", isCurrent: true },
          ]}
        />

        <header>
          <span className="inline-block rounded-md bg-paper px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-muted border border-line/60">
            Civic Trust & Standards
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-black text-ink">
            Civic Trust & Policies
          </h1>
          <p className="mt-2 text-base text-muted">
            KaamKaagaz is built on radical transparency: no hidden tracking, no fake government claims, and no selling of citizen data.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {policies.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group rounded-xl border border-line bg-surface p-5 shadow-2xs hover:border-accent hover:bg-accent-soft/30 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <h2 className="text-base font-bold text-ink group-hover:text-accent transition-colors flex items-center justify-between">
                  <span>{p.title}</span>
                  <span className="text-muted group-hover:text-accent text-xs">→</span>
                </h2>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 text-[11px] font-bold text-accent group-hover:underline">
                Read policy →
              </div>
            </Link>
          ))}
        </div>
      </article>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="legal" />
      </div>
    </div>
  );
}
