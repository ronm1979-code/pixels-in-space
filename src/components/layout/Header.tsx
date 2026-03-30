import Link from "next/link";
import { Gamepad2, Search } from "lucide-react";

const NAV_LINKS = [
  { href: "/news", label: "News" },
  { href: "/reviews", label: "Reviews" },
  { href: "/games", label: "Games" },
];

export function Header() {
  return (
    <header className="glass-strong sticky top-0 z-50">
      <div className="line-glow" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 transition-colors group-hover:bg-primary/30">
            <Gamepad2 className="h-5 w-5 text-primary-light" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Game<span className="gradient-text">Pulse</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-4 py-2 text-sm font-medium text-text-secondary transition-all hover:bg-white/5 hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-white/5 hover:text-text-primary">
            <Search className="h-4 w-4" />
          </button>

          {/* Mobile menu */}
          <button className="flex h-9 items-center gap-1.5 rounded-lg bg-white/5 px-3 text-sm font-medium text-text-secondary md:hidden">
            <span className="flex flex-col gap-1">
              <span className="h-0.5 w-4 bg-text-secondary" />
              <span className="h-0.5 w-3 bg-text-secondary" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
