import { Rocket } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <Rocket className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold">
                Pixels <span className="gradient-text">in Space</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
              Your daily source for breaking gaming news, expert reviews, and
              in-depth coverage of the biggest titles.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Content
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/news" className="text-sm text-text-secondary hover:text-primary">
                Latest News
              </Link>
              <Link href="/reviews" className="text-sm text-text-secondary hover:text-primary">
                Game Reviews
              </Link>
              <Link href="/games" className="text-sm text-text-secondary hover:text-primary">
                Game Database
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Categories
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/news?category=news" className="text-sm text-text-secondary hover:text-primary">
                Breaking News
              </Link>
              <Link href="/news?category=feature" className="text-sm text-text-secondary hover:text-primary">
                Features
              </Link>
              <Link href="/news?category=guide" className="text-sm text-text-secondary hover:text-primary">
                Guides
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Pixels in Space. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-text-muted">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
