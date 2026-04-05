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
      <article className="card-hover overflow-hidden rounded-xl border border-border bg-white shadow-sm">
        {/* Landscape image on top */}
        <div className="relative aspect-[16/7] overflow-hidden bg-gray-100">
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
            <div className="flex h-full w-full items-center justify-center gradient-hero text-text-muted">
              No Image
            </div>
          )}
          <div className="absolute right-3 top-3 score-glow rounded-xl">
            <ScoreBadge score={score} size="md" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        {/* Text below */}
        <div className="p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
            Review
          </p>
          <h3 className="mt-0.5 line-clamp-1 text-lg font-semibold transition-colors group-hover:text-primary">
            {gameTitle}
          </h3>
          {verdict && (
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-text-muted">
              {verdict}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
