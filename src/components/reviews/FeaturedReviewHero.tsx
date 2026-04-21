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
  if (score >= 85) return "from-emerald-400 to-green-500";
  if (score >= 70) return "from-yellow-400 to-amber-500";
  if (score >= 50) return "from-orange-400 to-red-500";
  return "from-red-500 to-rose-600";
}

function getScoreLabel(score: number) {
  if (score >= 90) return "Masterpiece";
  if (score >= 80) return "Excellent";
  if (score >= 70) return "Great";
  if (score >= 60) return "Good";
  if (score >= 50) return "Mixed";
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
      {/* Background image */}
      <div className="relative aspect-[16/9] w-full min-h-[216px] sm:aspect-[16/3.24] sm:min-h-[130px]">
        {coverImage && (
          <Image
            src={coverImage}
            alt={gameTitle}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            quality={90}
          />
        )}
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-gray-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
        {/* Purple + cyan glow accents */}
        <div className="absolute -left-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      {/* Top-left: Featured badge */}
      <div className="absolute left-4 top-4 z-10 md:left-6 md:top-5">
        <div className="flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-purple-500/20 px-3 py-1 backdrop-blur-md">
          <Star className="h-3 w-3 fill-purple-300 text-purple-300" />
          <span className="font-[family-name:var(--font-gaming)] text-[10px] font-bold uppercase tracking-widest text-purple-200">
            Featured Review
          </span>
        </div>
      </div>

      {/* Top-right: Score badge */}
      <div className="absolute right-4 top-4 z-10 flex flex-col items-center md:right-6 md:top-5">
        <div className={`relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${scoreColor} shadow-2xl md:h-20 md:w-20`}>
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${scoreColor} blur-lg opacity-60`} />
          <span className="relative font-[family-name:var(--font-gaming)] text-2xl font-black text-white drop-shadow-lg md:text-3xl">
            {Math.round(score)}
          </span>
        </div>
        <span className="mt-1 font-[family-name:var(--font-gaming)] text-[9px] font-bold uppercase tracking-widest text-white drop-shadow-md md:text-[10px]">
          {scoreLabel}
        </span>
      </div>

      {/* Bottom-left: Title + verdict + CTA */}
      <div className="absolute bottom-0 left-0 right-28 z-10 p-4 md:right-32 md:p-6">
        <h2 className="font-[family-name:var(--font-gaming)] text-xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-lg md:text-3xl">
          {gameTitle}
        </h2>
        {verdict && (
          <p className="mt-2 line-clamp-2 text-xs text-white/80 md:text-sm">
            &ldquo;{verdict}&rdquo;
          </p>
        )}
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 font-[family-name:var(--font-gaming)] text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all group-hover:bg-white/20 group-hover:gap-2.5 md:text-xs">
          Read Review
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 md:h-3.5 md:w-3.5" />
        </div>
      </div>
    </Link>
  );
}
