"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const search = useCallback(async (q: string) => {
    if (q.length < 2) { setResults(null); return; }
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      setResults(await res.json());
    } catch { setResults(null); }
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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(true); }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const hasResults = results && (results.articles.length > 0 || results.reviews.length > 0 || results.games.length > 0);

  const modal = open ? (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
      onMouseDown={() => setOpen(false)}
    >
      <div
        style={{ position: "relative", maxWidth: 512, margin: "15vh auto 0", width: "calc(100% - 32px)" }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-2xl border border-[rgba(139,92,246,0.18)] bg-[rgba(15,6,48,0.95)] shadow-2xl shadow-purple-900/50 backdrop-blur-md">
          {/* Input */}
          <div className="flex items-center gap-3 border-b border-[rgba(139,92,246,0.18)] px-4 py-3">
            <Search className="h-5 w-5 text-slate-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search games, news, reviews..."
              className="flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-500"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-slate-400 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            )}
            <kbd className="hidden rounded border border-[rgba(139,92,246,0.25)] bg-[rgba(7,3,26,0.5)] px-1.5 py-0.5 text-[10px] text-slate-400 sm:block">ESC</kbd>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto">
            {loading && <div className="px-4 py-8 text-center text-sm text-slate-400">Searching...</div>}
            {!loading && query.length >= 2 && !hasResults && (
              <div className="px-4 py-8 text-center text-sm text-slate-400">No results for &ldquo;{query}&rdquo;</div>
            )}
            {!loading && hasResults && (
              <div className="py-2">
                {results!.games.length > 0 && (
                  <div>
                    <p className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      <Gamepad2 className="mr-1 inline h-3 w-3" /> Games
                    </p>
                    {results!.games.map((g) => (
                      <Link key={g.slug} href={`/games/${g.slug}`} onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-purple-500/10">
                        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-[#1a0838]">
                          {g.coverImage && <Image src={g.coverImage} alt={g.title} fill className="object-cover" sizes="120px" />}
                        </div>
                        <span className="flex-1 text-sm font-medium text-white">{g.title}</span>
                        {g.averageScore && <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">{Math.round(g.averageScore)}</span>}
                      </Link>
                    ))}
                  </div>
                )}
                {results!.articles.length > 0 && (
                  <div>
                    <p className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      <Newspaper className="mr-1 inline h-3 w-3" /> News
                    </p>
                    {results!.articles.map((a) => (
                      <Link key={a.slug} href={`/news/${a.slug}`} onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-purple-500/10">
                        <div className="relative h-10 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[#1a0838]">
                          {a.imageUrl && <Image src={a.imageUrl} alt={a.title} fill className="object-cover" sizes="200px" />}
                        </div>
                        <span className="flex-1 text-sm line-clamp-1 text-slate-200">{a.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
                {results!.reviews.length > 0 && (
                  <div>
                    <p className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      <Star className="mr-1 inline h-3 w-3" /> Reviews
                    </p>
                    {results!.reviews.map((r) => (
                      <Link key={r.slug} href={`/reviews/${r.slug}`} onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-purple-500/10">
                        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-[#1a0838]">
                          {r.game.coverImage && <Image src={r.game.coverImage} alt={r.game.title} fill className="object-cover" sizes="120px" />}
                        </div>
                        <span className="flex-1 text-sm font-medium text-white">{r.game.title}</span>
                        <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">{Math.round(r.score)}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
            {!loading && query.length < 2 && (
              <div className="px-4 py-8 text-center text-sm text-slate-400">Type at least 2 characters to search</div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-purple-200/60 transition-colors hover:bg-white/10 hover:text-purple-300"
        title="Search (Ctrl+K)"
      >
        <Search className="h-4 w-4" />
      </button>
      {mounted && modal && createPortal(modal, document.body)}
    </>
  );
}
