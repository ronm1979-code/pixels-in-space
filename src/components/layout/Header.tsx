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
  { href: "/rankings", label: "Global Rankings" },
];

export function Header() {
  return (
    <header className="pixel-header sticky top-0 z-50">
      <div className="line-glow" />
      <div className="relative mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 lg:px-10">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/30 border border-purple-400/30 text-purple-300 shadow-sm shadow-purple-500/20 transition-all group-hover:scale-105 group-hover:bg-purple-500/40 group-hover:shadow-purple-500/40">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-[family-name:var(--font-gaming)] text-lg font-bold tracking-wider text-white">
            Pixels <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">in Space</span>
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
