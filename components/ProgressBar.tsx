export function ProgressBar({ percent, label }: { percent: number; label: string }) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      className="h-2.5 w-full overflow-hidden rounded-full bg-line"
    >
      <div className="h-full rounded-full bg-done transition-[width] duration-300 ease-out" style={{ width: `${percent}%` }} />
    </div>
  );
}
