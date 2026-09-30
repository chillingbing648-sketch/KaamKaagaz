import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Policy · KaamKaagaz",
  description: "Security architecture, client-side zero-storage principles, and responsible disclosure policy.",
};

export default function SecurityPage() {
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
        <h1 className="mt-1 text-3xl sm:text-4xl font-black text-ink">Security Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: 30 September 2026</p>
      </header>

      <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs space-y-4 text-sm text-ink leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">1. Zero-PII by Design</h2>
          <p className="text-muted">
            The most secure personal data is data that is never collected. KaamKaagaz does not provide cloud document uploads, file storage, user authentication, or backend databases. No identity proofs or application numbers ever leave your device.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">2. Client-Side Integrity</h2>
          <p className="text-muted">
            All checklist interactions run locally in your web browser. Checklists are stored in your device&apos;s localStorage (<code className="bg-paper px-1 rounded text-xs font-mono">kaamkaagaz:checklist:v1</code>) and are not accessible across origins.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">3. Responsible Vulnerability Disclosure</h2>
          <p className="text-muted">
            We welcome constructive reports from security researchers and developers. If you identify a security issue, please contact our security team at <a href="mailto:security@kaamkaagaz.org" className="text-accent underline">security@kaamkaagaz.org</a>. Refer to our <Link href="/.well-known/security.txt" className="text-accent underline">security.txt</Link> for details.
          </p>
        </section>
      </div>
    </article>
  );
}
