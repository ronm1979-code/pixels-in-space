import { Rocket } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(139,92,246,0.18)] bg-[rgba(7,3,26,0.7)] backdrop-blur-md">
      <div className="mx-auto max-w-[1500px] px-5 py-12 lg:px-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30">
                <Rocket className="h-4 w-4" />
              </div>
              <span className="font-[family-name:var(--font-gaming)] text-lg font-bold text-white">
                Pixels <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">in Space</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              Your daily source for breaking gaming news, expert reviews, and
              in-depth coverage of the biggest titles.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Content
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/news" className="text-sm text-slate-300 hover:text-purple-300">
                Latest News
              </Link>
              <Link href="/reviews" className="text-sm text-slate-300 hover:text-purple-300">
                Game Reviews
              </Link>
              <Link href="/games" className="text-sm text-slate-300 hover:text-purple-300">
                Game Database
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Categories
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/news?category=news" className="text-sm text-slate-300 hover:text-purple-300">
                Breaking News
              </Link>
              <Link href="/news?category=feature" className="text-sm text-slate-300 hover:text-purple-300">
                Features
              </Link>
              <Link href="/news?category=guide" className="text-sm text-slate-300 hover:text-purple-300">
                Guides
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-[rgba(139,92,246,0.18)] pt-6">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Pixels in Space. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link href="/contact" className="transition-colors hover:text-purple-300">
              Contact
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-purple-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-purple-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
