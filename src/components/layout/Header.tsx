import Link from "next/link";
import { Rocket } from "lucide-react";
import { SearchModal } from "./SearchModal";

const NAV_LINKS = [
  { href: "/news", label: "News" },
  { href: "/reviews", label: "Reviews" },
  { href: "/games", label: "Games" },
  { href: "/mobile", label: "Mobile" },
];

export function Header() {
  return (
    <header className="glass-strong sticky top-0 z-50">
      <div className="line-glow" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-transform group-hover:scale-105">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Pixels <span className="gradient-text">in Space</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-text-secondary transition-all hover:bg-primary/5 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SearchModal />
          <button className="flex h-9 items-center gap-1.5 rounded-lg bg-black/5 px-3 text-sm font-medium text-text-secondary md:hidden">
            <span className="flex flex-col gap-1">
              <span className="h-0.5 w-4 rounded bg-text-secondary" />
              <span className="h-0.5 w-3 rounded bg-text-secondary" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
