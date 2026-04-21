import Link from "next/link";
import Image from "next/image";
import { ScoreBadge } from "@/components/ui/ScoreBadge";

interface ReviewCardProps {
  slug: string;
  title: string;
  verdict: string | null;
  score: number;
  gameTitle: string;
  gameCoverImage: string | null;
}

export function ReviewCard({
  slug,
  title,
  verdict,
  score,
  gameTitle,
  gameCoverImage,
}: ReviewCardProps) {
  return (
    <Link href={`/reviews/${slug}`} className="group block">
      <article className="dark-card card-hover overflow-hidden rounded-xl">
        <div className="relative aspect-[16/7] overflow-hidden bg-[#1a0838]">
          {gameCoverImage ? (
            <Image
              src={gameCoverImage}
              alt={gameTitle}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#4c1d95] to-[#1e1b4b] text-slate-400">
              No Image
            </div>
          )}
          <div className="absolute right-3 top-3 score-glow rounded-xl">
            <ScoreBadge score={score} size="md" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-4">
          <p className="font-[family-name:var(--font-gaming)] text-[11px] font-semibold uppercase tracking-wider text-[#22d3ee]">
            Review
          </p>
          <h3 className="mt-0.5 line-clamp-1 font-[family-name:var(--font-gaming)] text-lg font-bold text-white transition-colors group-hover:text-purple-300">
            {gameTitle}
          </h3>
          {verdict && (
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-400">
              {verdict}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
