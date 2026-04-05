import Link from "next/link";
import { Rocket } from "lucide-react";
import { SearchModal } from "./SearchModal";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

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
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-transform group-hover:scale-105">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-[family-name:var(--font-gaming)] text-lg font-bold tracking-wider">
            Pixels <span className="gradient-text">in Space</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SearchModal />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
