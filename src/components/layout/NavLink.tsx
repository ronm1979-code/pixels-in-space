"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`relative rounded-lg px-4 py-2 font-[family-name:var(--font-gaming)] text-xs font-semibold uppercase tracking-wider transition-all hover:bg-primary/5 hover:text-primary ${
        isActive ? "text-primary" : "text-text-secondary"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-primary via-accent to-neon" />
      )}
    </Link>
  );
}
