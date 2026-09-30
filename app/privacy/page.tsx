import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy · KaamKaagaz",
  description: "Learn how KaamKaagaz respects your privacy with zero document storage and private local checklist state.",
};

export default function PrivacyPage() {
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
        <h1 className="mt-1 text-3xl sm:text-4xl font-black text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: 30 September 2026</p>
      </header>

      <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs space-y-4 text-sm text-ink leading-relaxed">
        <div className="rounded-lg border border-accent/20 bg-accent-soft/40 p-4">
          <p className="font-bold text-accent">Summary in simple words:</p>
          <p className="mt-1 text-xs sm:text-sm text-ink/90">
            KaamKaagaz does not collect, ask for, or store your Aadhaar, PAN number, passport, salary slip, or any identity document. Your checklists and language settings are saved exclusively on your own browser.
          </p>
        </div>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">1. Information We Do Not Collect</h2>
          <p className="text-muted">
            We never request or store sensitive personal documents. You do not need to create an account, provide an email address, or enter personal identification numbers to use KaamKaagaz.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">2. Client-Side Local Storage</h2>
          <p className="text-muted">
            To provide a convenient checklist experience, your document readiness ticks and selected language preference are stored locally on your device via standard browser <code className="bg-paper px-1.5 py-0.5 rounded text-xs font-mono text-ink">localStorage</code>. This data never leaves your device and is never transmitted to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">3. External Government Links</h2>
          <p className="text-muted">
            When you click official links (such as to <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline">incometax.gov.in</a>, <a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline">passportindia.gov.in</a>, or <a href="https://aaplesarkar.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline">aaplesarkar.mahaonline.gov.in</a>), you leave KaamKaagaz and interact directly with those official government portals under their respective privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">4. Contact & Inquiries</h2>
          <p className="text-muted">
            For privacy inquiries or technical questions regarding this open civic utility, contact <a href="mailto:privacy@kaamkaagaz.org" className="text-accent underline">privacy@kaamkaagaz.org</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
