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
      className="group relative flex h-full min-h-[450px] flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-gray-950 shadow-lg"
    >
      {/* Background image fills entire card */}
      <div className="absolute inset-0">
        {coverImage && (
          <Image
            src={coverImage}
            alt={gameTitle}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 40vw"
            quality={90}
          />
        )}
        {/* Dark gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/20" />
        {/* Purple glow accents */}
        <div className="absolute -bottom-10 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      {/* Top: Featured badge */}
      <div className="relative z-10 flex items-center justify-between p-4 md:p-5">
        <div className="flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/20 px-3 py-1 backdrop-blur-md">
          <Star className="h-3 w-3 fill-purple-300 text-purple-300" />
          <span className="font-[family-name:var(--font-gaming)] text-[10px] font-bold uppercase tracking-widest text-purple-200">
            Featured Review
          </span>
        </div>
      </div>

      {/* Score badge (top right, floating) */}
      <div className="absolute right-4 top-14 z-10 flex flex-col items-center md:right-5 md:top-16">
        <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${scoreColor} shadow-2xl md:h-24 md:w-24`}>
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${scoreColor} blur-xl opacity-60`} />
          <span className="relative font-[family-name:var(--font-gaming)] text-3xl font-black text-white drop-shadow-lg md:text-4xl">
            {Math.round(score)}
          </span>
        </div>
        <span className="mt-1.5 font-[family-name:var(--font-gaming)] text-[10px] font-bold uppercase tracking-widest text-white drop-shadow-md">
          {scoreLabel}
        </span>
      </div>

      {/* Bottom: Title + verdict + CTA */}
      <div className="relative z-10 mt-auto p-5 md:p-6">
        <h2 className="font-[family-name:var(--font-gaming)] text-2xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-lg md:text-3xl">
          {gameTitle}
        </h2>
        {verdict && (
          <p className="mt-2 line-clamp-2 text-sm text-white/80 md:text-base">
            &ldquo;{verdict}&rdquo;
          </p>
        )}
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 font-[family-name:var(--font-gaming)] text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all group-hover:bg-white/20 group-hover:gap-3">
          Read Full Review
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
