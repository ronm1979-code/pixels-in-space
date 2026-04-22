import { cn } from "@/lib/utils";

// Unified score tiers (matches FeaturedReviewHero):
//   90+  → green     (Masterpiece / Excellent)
//   80-89 → yellow   (Great)
//   60-79 → orange   (Good / Mixed)
//   <60   → red      (Poor)
function getScoreColor(score: number) {
  if (score >= 90) return "bg-gradient-to-br from-emerald-400 to-green-500 text-white shadow-emerald-500/40";
  if (score >= 80) return "bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-amber-500/40";
  if (score >= 60) return "bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-orange-500/40";
  return "bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-red-500/40";
}

export function ScoreBadge({
  score,
  size = "md",
}: {
  score: number;
  size?: "sm" | "md" | "lg";
}) {
  const color = getScoreColor(score);

  const sizeClass = {
    sm: "h-9 w-9 text-xs rounded-lg",
    md: "h-11 w-11 text-sm rounded-xl",
    lg: "h-16 w-16 text-xl rounded-2xl",
  }[size];

  return (
    <div
      className={cn(
        "flex items-center justify-center font-bold shadow-lg",
        color,
        sizeClass
      )}
    >
      {Math.round(score)}
    </div>
  );
}
