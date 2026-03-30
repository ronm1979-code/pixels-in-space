import { cn } from "@/lib/utils";

const variants: Record<string, string> = {
  default: "bg-gray-100 text-gray-600 border-gray-200",
  news: "bg-blue-50 text-blue-700 border-blue-200",
  feature: "bg-purple-50 text-purple-700 border-purple-200",
  guide: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rumor: "bg-amber-50 text-amber-700 border-amber-200",
  review: "bg-cyan-50 text-cyan-700 border-cyan-200",
  published: "bg-emerald-50 text-emerald-700 border-emerald-200",
  draft: "bg-amber-50 text-amber-700 border-amber-200",
  archived: "bg-red-50 text-red-700 border-red-200",
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
