"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X, Newspaper, Star, Gamepad2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SearchResult {
  articles: { slug: string; title: string; imageUrl: string | null; category: string }[];
  reviews: { slug: string; title: string; score: number; game: { title: string; coverImage: string | null } }[];
  games: { slug: string; title: string; coverImage: string | null; averageScore: number | null }[];
}

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const search = useCallback(async (q: string) => {
    if (q.length < 2) {
      setResults(null);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data);
    } catch {
      setResults(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => search(query), 300);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [query, search]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults(null);
    }
  }, [open]);

  // Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const hasResults =
    results &&
    (results.articles.length > 0 ||
      results.reviews.length > 0 ||
      results.games.length > 0);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-black/5 hover:text-text-primary"
        title="Search (Ctrl+K)"
      >
        <Search className="h-4 w-4" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="mx-auto mt-[15vh] w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
            {/* Input */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search className="h-5 w-5 text-text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search games, news, reviews..."
                className="flex-1 bg-transparent text-base outline-none placeholder:text-text-muted"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-text-muted hover:text-text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] text-text-muted sm:block">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {loading && (
                <div className="px-4 py-8 text-center text-sm text-text-muted">
                  Searching...
                </div>
              )}

              {!loading && query.length >= 2 && !hasResults && (
                <div className="px-4 py-8 text-center text-sm text-text-muted">
                  No results for &ldquo;{query}&rdquo;
                </div>
              )}

              {!loading && hasResults && (
                <div className="py-2">
                  {/* Games */}
                  {results!.games.length > 0 && (
                    <div>
                      <p className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                        <Gamepad2 className="mr-1 inline h-3 w-3" /> Games
                      </p>
                      {results!.games.map((g) => (
                        <Link
                          key={g.slug}
                          href={`/games/${g.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-gray-50"
                        >
                          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            {g.coverImage && (
                              <Image
                                src={g.coverImage}
                                alt={g.title}
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                            )}
                          </div>
                          <span className="flex-1 text-sm font-medium">
                            {g.title}
                          </span>
                          {g.averageScore && (
                            <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                              {Math.round(g.averageScore)}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Articles */}
                  {results!.articles.length > 0 && (
                    <div>
                      <p className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                        <Newspaper className="mr-1 inline h-3 w-3" /> News
                      </p>
                      {results!.articles.map((a) => (
                        <Link
                          key={a.slug}
                          href={`/news/${a.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-gray-50"
                        >
                          <div className="relative h-10 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            {a.imageUrl && (
                              <Image
                                src={a.imageUrl}
                                alt={a.title}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            )}
                          </div>
                          <span className="flex-1 text-sm line-clamp-1">
                            {a.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Reviews */}
                  {results!.reviews.length > 0 && (
                    <div>
                      <p className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                        <Star className="mr-1 inline h-3 w-3" /> Reviews
                      </p>
                      {results!.reviews.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/reviews/${r.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-gray-50"
                        >
                          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            {r.game.coverImage && (
                              <Image
                                src={r.game.coverImage}
                                alt={r.game.title}
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                            )}
                          </div>
                          <span className="flex-1 text-sm font-medium">
                            {r.game.title}
                          </span>
                          <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                            {Math.round(r.score)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {!loading && query.length < 2 && (
                <div className="px-4 py-8 text-center text-sm text-text-muted">
                  Type at least 2 characters to search
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
