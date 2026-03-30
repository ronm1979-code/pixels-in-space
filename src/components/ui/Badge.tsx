import { cn } from "@/lib/utils";

const variants: Record<string, string> = {
  default: "bg-white/5 text-text-secondary border-white/10",
  news: "bg-neon-blue/10 text-neon-blue border-neon-blue/20",
  feature: "bg-primary/10 text-primary-light border-primary/20",
  guide: "bg-neon/10 text-neon border-neon/20",
  rumor: "bg-score-mid/10 text-score-mid border-score-mid/20",
  review: "bg-accent/10 text-accent-light border-accent/20",
  published: "bg-neon/10 text-neon border-neon/20",
  draft: "bg-score-mid/10 text-score-mid border-score-mid/20",
  archived: "bg-score-low/10 text-score-low border-score-low/20",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
        variants[variant] ?? variants.default,
        className
      )}
    >
      {children}
    </span>
  );
}
