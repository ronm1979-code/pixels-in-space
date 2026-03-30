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
      ? "bg-emerald-500 text-white"
      : score >= 50
        ? "bg-amber-500 text-white"
        : "bg-red-500 text-white";

  const sizeClass = {
    sm: "h-9 w-9 text-xs rounded-lg",
    md: "h-11 w-11 text-sm rounded-xl",
    lg: "h-16 w-16 text-xl rounded-2xl",
  }[size];

  return (
    <div
      className={cn(
        "flex items-center justify-center font-bold shadow-sm",
        color,
        sizeClass
      )}
    >
      {Math.round(score)}
    </div>
  );
}
