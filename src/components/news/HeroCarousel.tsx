"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { timeAgo } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroArticle {
  slug: string;
  title: string;
  summary: string | null;
  imageUrl: string | null;
  category: string;
  publishedAt: string | null;
  createdAt: string;
  isReview?: boolean;
}

export function HeroCarousel({ articles }: { articles: HeroArticle[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % articles.length);
  }, [articles.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + articles.length) % articles.length);
  }, [articles.length]);

  useEffect(() => {
    if (paused || articles.length <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next, articles.length]);

  if (articles.length === 0) return null;

  const article = articles[current];

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg lg:h-[400px]!"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image */}
      <div className="relative aspect-[4/3] bg-gray-900 sm:aspect-[21/7.6] sm:min-h-[385px] lg:aspect-auto! lg:h-[400px]! lg:max-h-[400px] lg:min-h-[400px]">
        {articles.map((a, i) => (
          <div
            key={a.slug}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            {a.imageUrl ? (
              <Image
                src={a.imageUrl}
                alt={a.title}
                fill
                className="object-cover"
                sizes="100vw"
                quality={90}
                priority={i === 0}
              />
            ) : (
              <div className="h-full w-full gradient-hero" />
            )}
          </div>
        ))}

        {/* Gradient overlay — stronger at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/15" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10">
          <div
            key={article.slug}
            className="animate-fadeIn"
          >
            <Badge variant={article.category} className="mb-3">
              {article.category}
            </Badge>
            <h2
              className="mb-2 max-w-3xl font-[family-name:var(--font-gaming)] text-[16px] font-bold leading-tight text-white sm:text-[22px] md:text-[27px] lg:text-[32px]"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)" }}
            >
              {article.title}
            </h2>
            {article.summary && (
              <p className="mb-3 hidden max-w-2xl text-sm text-white/70 sm:line-clamp-2 md:text-base">
                {article.summary}
              </p>
            )}
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/50">
                {timeAgo(article.publishedAt ?? article.createdAt)}
              </span>
              <Link
                href={article.isReview ? `/reviews/${article.slug}` : `/news/${article.slug}`}
                className="rounded-lg bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        {articles.length > 1 && (
          <>
            <button
              onClick={(e) => { e.preventDefault(); prev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white/70 opacity-0 backdrop-blur-sm transition-all hover:bg-black/50 hover:text-white group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); next(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white/70 opacity-0 backdrop-blur-sm transition-all hover:bg-black/50 hover:text-white group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {articles.length > 1 && (
          <div className="absolute bottom-4 right-6 flex gap-1.5 md:right-10">
            {articles.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
