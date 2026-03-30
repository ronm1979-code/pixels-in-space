import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
}) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <nav className="flex items-center justify-center gap-1.5">
      {currentPage > 1 && (
        <PageLink href={`${basePath}?page=${currentPage - 1}`}>
          <ChevronLeft className="h-4 w-4" />
        </PageLink>
      )}
      {pages.map((page, i) =>
        page === "..." ? (
          <span key={`dots-${i}`} className="px-2 text-text-muted">...</span>
        ) : (
          <PageLink key={page} href={`${basePath}?page=${page}`} active={page === currentPage}>
            {page}
          </PageLink>
        )
      )}
      {currentPage < totalPages && (
        <PageLink href={`${basePath}?page=${currentPage + 1}`}>
          <ChevronRight className="h-4 w-4" />
        </PageLink>
      )}
    </nav>
  );
}

function PageLink({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition-all",
        active
          ? "bg-primary text-white shadow-sm"
          : "border border-border bg-white text-text-muted hover:border-primary/30 hover:text-primary"
      )}
    >
      {children}
    </Link>
  );
}
