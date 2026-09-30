export function ProgressBar({ percent, label }: { percent: number; label: string }) {
  const safePercent = Math.min(100, Math.max(0, percent));

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={safePercent}
      className="h-2 w-full overflow-hidden rounded-full bg-line"
    >
      <div
        className="h-full rounded-full bg-done transition-[width] duration-300 ease-out"
        style={{ width: `${safePercent}%` }}
      />
    </div>
  );
}
