import type { Metadata } from "next";
import Link from "next/link";

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
    <article className="space-y-6">
      <div>
        <Link
          href="/"
          className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      <header>
        <span className="text-xs font-bold uppercase tracking-wider text-muted">Legal & Trust Hub</span>
        <h1 className="mt-1 text-3xl sm:text-4xl font-black text-ink">Civic Trust & Policies</h1>
        <p className="mt-2 text-base text-muted">
          KaamKaagaz is built on radical transparency: no hidden tracking, no fake government claims, and no selling of citizen data.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
        {policies.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group rounded-xl border border-line bg-surface p-4 shadow-2xs hover:border-accent hover:bg-accent-soft transition-all"
          >
            <h2 className="text-base font-bold text-ink group-hover:text-accent transition-colors flex items-center justify-between">
              <span>{p.title}</span>
              <span className="text-muted text-xs">→</span>
            </h2>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              {p.desc}
            </p>
          </Link>
        ))}
      </div>
    </article>
  );
}
