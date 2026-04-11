"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`relative rounded-lg px-4 py-2 font-[family-name:var(--font-gaming)] text-xs font-semibold uppercase tracking-wider transition-all hover:bg-white/10 hover:text-purple-300 ${
        isActive ? "text-purple-300" : "text-purple-200/60"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400" />
      )}
    </Link>
  );
}
