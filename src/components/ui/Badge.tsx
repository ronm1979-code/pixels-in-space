import { cn } from "@/lib/utils";

const variants: Record<string, string> = {
  default: "bg-slate-500/10 text-slate-300 border-slate-500/30",
  news: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  feature: "bg-purple-500/15 text-purple-300 border-purple-500/35",
  guide: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  rumor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  review: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  published: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  draft: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  archived: "bg-red-500/15 text-red-300 border-red-500/30",
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
