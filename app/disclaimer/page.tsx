import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Civic Disclaimer · KaamKaagaz",
  description: "Official non-affiliation notice and civic disclaimer for KaamKaagaz.",
};

export default function DisclaimerPage() {
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
        <span className="text-xs font-bold uppercase tracking-wider text-muted">Legal & Trust</span>
        <h1 className="mt-1 text-3xl sm:text-4xl font-black text-ink">Civic Disclaimer</h1>
        <p className="mt-2 text-sm text-muted">Last updated: 30 September 2026</p>
      </header>

      <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs space-y-4 text-sm text-ink leading-relaxed">
        <div className="rounded-lg border-2 border-warning-line bg-warning-soft/70 p-4 text-warning">
          <p className="font-bold text-base">⚠️ Crucial Non-Affiliation Notice:</p>
          <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed">
            KaamKaagaz is an independent civic information platform. We are NOT a government portal, NOT an official agency, and NOT associated with the Government of India, the Ministry of External Affairs, the Income Tax Department, the Government of Maharashtra, or any other government authority.
          </p>
        </div>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">Official Source Precedence</h2>
          <p className="text-muted">
            The explanations, document checklists, and preparation guidance provided on KaamKaagaz are written in plain language solely to assist citizens in preparing their applications. In case of any discrepancy or ambiguity, the rules, notifications, and requirements published on official portals (e.g. <code>passportindia.gov.in</code>, <code>incometax.gov.in</code>, <code>aaplesarkar.mahaonline.gov.in</code>) always take precedence.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">Anti-Fraud Advisory</h2>
          <p className="text-muted">
            Never pay money to unauthorized agents, intermediaries, or unofficial third-party websites claiming to expedite government documents. All statutory fees should only be paid through official government payment gateways.
          </p>
        </section>
      </div>
    </article>
  );
}
