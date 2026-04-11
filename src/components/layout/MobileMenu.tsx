"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/news", label: "News" },
  { href: "/reviews", label: "Reviews" },
  { href: "/games", label: "Games" },
  { href: "/mobile", label: "Mobile" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  if (!mounted && typeof window !== "undefined") {
    setMounted(true);
  }

  const dropdown = open ? (
    <div
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 99 }}
      onMouseDown={() => setOpen(false)}
    >
      <div
        style={{ position: "fixed", top: 68, left: 0, right: 0 }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="border-b border-border bg-white p-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-purple-200/60 hover:text-purple-300 md:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {mounted && dropdown && createPortal(dropdown, document.body)}
    </>
  );
}
