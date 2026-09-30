import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement · KaamKaagaz",
  description: "KaamKaagaz commitment to digital inclusion, WCAG compliance, keyboard navigation, and Devanagari typography.",
};

export default function AccessibilityPage() {
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
        <h1 className="mt-1 text-3xl sm:text-4xl font-black text-ink">Accessibility Statement</h1>
        <p className="mt-2 text-sm text-muted">Last updated: 30 September 2026</p>
      </header>

      <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs space-y-4 text-sm text-ink leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">Universal Civic Inclusion</h2>
          <p className="text-muted">
            KaamKaagaz is built with the belief that government paperwork guidance must be accessible to every citizen, regardless of device, connectivity, technical familiarity, or disability.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">Key Accessibility Measures</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-muted text-xs sm:text-sm">
            <li><strong>Keyboard Navigability:</strong> All interactive elements, search inputs, language switchers, and checklist items are operable via standard keyboard tabs and keys.</li>
            <li><strong>Visible Focus Indicators:</strong> High-contrast focus rings highlight active elements on keyboard navigation.</li>
            <li><strong>Devanagari Font Optimization:</strong> Native Noto Sans Devanagari web fonts ensure authentic Hindi and Marathi script rendering without jagged substitutions.</li>
            <li><strong>Touch-Friendly Targets:</strong> Buttons, links, and checklist checkboxes meet minimum 44x44px touch-target standards for mobile phone users.</li>
            <li><strong>Color Contrast:</strong> Text colors meet WCAG 2.1 AA minimum contrast standards against warm paper backgrounds.</li>
            <li><strong>Reduced Motion:</strong> Respects the system <code>prefers-reduced-motion</code> setting by eliminating unnecessary animations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink mb-1.5">Feedback & Assistance</h2>
          <p className="text-muted">
            If you experience difficulty accessing any part of KaamKaagaz, please write to us at <a href="mailto:accessibility@kaamkaagaz.org" className="text-accent underline">accessibility@kaamkaagaz.org</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
