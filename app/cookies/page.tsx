import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy · KaamKaagaz",
  description: "Explanation of client-side storage mechanisms used by KaamKaagaz.",
};

export default function CookiesPage() {
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
        <h1 className="mt-1 text-3xl sm:text-4xl font-black text-ink">Cookie & Storage Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: 30 September 2026</p>
      </header>

      <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs space-y-4 text-sm text-ink leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">No Tracking or Third-Party Cookies</h2>
          <p className="text-muted">
            KaamKaagaz does not use tracking cookies, commercial analytics beacons, or third-party advertising cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">Local Storage Keys Used</h2>
          <p className="text-muted">
            We use standard web storage (<code className="bg-paper px-1 rounded text-xs font-mono">localStorage</code>) solely to preserve your functional choices on your own device:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-muted text-xs sm:text-sm">
            <li>
              <code className="bg-paper px-1 rounded font-mono text-ink">kaamkaagaz:language</code>: Remembers your preferred interface language (English, Hindi, or Marathi).
            </li>
            <li>
              <code className="bg-paper px-1 rounded font-mono text-ink">kaamkaagaz:checklist:v1</code>: Saves which documents you have checked off as ready.
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
