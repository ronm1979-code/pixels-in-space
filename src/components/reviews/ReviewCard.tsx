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
      <article className="card-hover flex gap-4 rounded-xl border border-border bg-white p-4 shadow-sm">
        <div className="relative h-32 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
          {gameCoverImage ? (
            <Image
              src={gameCoverImage}
              alt={gameTitle}
              fill
              className="object-cover"
              sizes="96px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center gradient-hero text-xs text-text-muted">
              N/A
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between py-0.5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
              Review
            </p>
            <h3 className="mt-0.5 line-clamp-1 font-semibold transition-colors group-hover:text-primary">
              {gameTitle}
            </h3>
          </div>
          {verdict && (
            <p className="line-clamp-2 text-sm leading-relaxed text-text-muted">
              {verdict}
            </p>
          )}
        </div>
        <div className="flex flex-shrink-0 items-center">
          <ScoreBadge score={score} size="md" />
        </div>
      </article>
    </Link>
  );
}
