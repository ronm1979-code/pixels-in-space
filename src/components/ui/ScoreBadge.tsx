import { cn } from "@/lib/utils";

export function ScoreBadge({
  score,
  size = "md",
}: {
  score: number;
  size?: "sm" | "md" | "lg";
}) {
  const color =
    score >= 75
      ? "from-score-high/20 to-score-high/5 text-score-high border-score-high/30"
      : score >= 50
        ? "from-score-mid/20 to-score-mid/5 text-score-mid border-score-mid/30"
        : "from-score-low/20 to-score-low/5 text-score-low border-score-low/30";

  const sizeClass = {
    sm: "h-9 w-9 text-xs",
    md: "h-11 w-11 text-sm",
    lg: "h-16 w-16 text-xl",
  }[size];

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border bg-gradient-to-br font-bold",
        color,
        sizeClass
      )}
    >
      {Math.round(score)}
    </div>
  );
}
