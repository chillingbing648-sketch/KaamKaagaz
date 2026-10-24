"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error in development or client console
    console.error("[KaamKaagaz ErrorBoundary]", error);
  }, [error]);

  return (
    <div className="py-16 max-w-xl mx-auto text-center space-y-6">
      <div className="inline-flex size-16 items-center justify-center rounded-3xl bg-amber-500/10 text-3xl text-amber-700 shadow-xs border border-amber-500/20">
        ⚠️
      </div>

      <div className="space-y-2">
        <span className="inline-block rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold text-muted">
          Application Resilience
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
          Something interrupted this page
        </h1>
        <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
          KaamKaagaz encountered an unexpected condition while rendering this screen. Your stored documents and checklists remain safely preserved on your device.
        </p>
      </div>

      {error.digest && (
        <div className="apple-card p-3 text-xs font-mono text-muted max-w-sm mx-auto">
          <span>Error Reference: </span>
          <span className="font-semibold text-ink">{error.digest}</span>
        </div>
      )}

      <div className="pt-2 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="apple-btn-primary min-h-[44px] px-6 text-xs sm:text-sm font-semibold !rounded-xl shadow-xs cursor-pointer"
        >
          Try Reloading Component
        </button>
        <Link
          href="/"
          className="apple-btn-secondary min-h-[44px] px-6 text-xs sm:text-sm font-semibold !rounded-xl cursor-pointer"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
