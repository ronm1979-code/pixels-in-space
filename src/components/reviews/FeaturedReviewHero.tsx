import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

interface FeaturedReviewHeroProps {
  slug: string;
  gameTitle: string;
  verdict: string | null;
  score: number;
  coverImage: string | null;
  publishedAt: Date | string | null;
}

function getScoreColor(score: number) {
  if (score >= 90) return "from-emerald-400 to-green-500";
  if (score >= 80) return "from-yellow-400 to-amber-500";
  if (score >= 60) return "from-orange-400 to-orange-500";
  return "from-red-500 to-rose-600";
}

function getScoreLabel(score: number) {
  if (score >= 90) return "Masterpiece";
  if (score >= 80) return "Excellent";
  if (score >= 60) return "Good";
  return "Poor";
}

export function FeaturedReviewHero({
  slug,
  gameTitle,
  verdict,
  score,
  coverImage,
}: FeaturedReviewHeroProps) {
  const scoreColor = getScoreColor(score);
  const scoreLabel = getScoreLabel(score);

  return (
    <Link
      href={`/reviews/${slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-purple-500/20 bg-gray-950 shadow-lg"
    >
      {/* Background image — portrait on mobile, exact carousel-height (400px) on desktop */}
      <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-[400px]">
        {coverImage && (
          <Image
            src={coverImage}
            alt={gameTitle}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="340px"
            quality={90}
          />
        )}
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/20" />
        {/* Purple + cyan glow accents */}
        <div className="absolute -bottom-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      {/* Top-left: Featured badge */}
      <div className="absolute left-3 top-3 z-10">
        <div className="flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-purple-500/20 px-2.5 py-1 backdrop-blur-md">
          <Star className="h-2.5 w-2.5 fill-purple-300 text-purple-300" />
          <span className="font-[family-name:var(--font-gaming)] text-[9px] font-bold uppercase tracking-widest text-purple-200">
            Featured Review
          </span>
        </div>
      </div>

      {/* Top-right: Score badge */}
      <div className="absolute right-3 top-3 z-10 flex flex-col items-center">
        <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${scoreColor} shadow-2xl`}>
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${scoreColor} blur-lg opacity-60`} />
          <span className="relative font-[family-name:var(--font-gaming)] text-xl font-black text-white drop-shadow-lg">
            {Math.round(score)}
          </span>
        </div>
        <span className="mt-1 font-[family-name:var(--font-gaming)] text-[9px] font-bold uppercase tracking-widest text-white drop-shadow-md">
          {scoreLabel}
        </span>
      </div>

      {/* Bottom: Title + verdict + CTA (full-width, stacked) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        <h2 className="font-[family-name:var(--font-gaming)] text-xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-lg">
          {gameTitle}
        </h2>
        {verdict && (
          <p className="mt-2 line-clamp-3 text-xs text-white/80">
            &ldquo;{verdict}&rdquo;
          </p>
        )}
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 font-[family-name:var(--font-gaming)] text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all group-hover:bg-white/20 group-hover:gap-2.5">
          Read Review
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
