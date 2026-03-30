import Link from "next/link";
import Image from "next/image";
import { ScoreBadge } from "@/components/ui/ScoreBadge";
import { parseJsonField } from "@/lib/utils";

interface GameCardProps {
  slug: string;
  title: string;
  coverImage: string | null;
  genres: string;
  averageScore: number | null;
}

export function GameCard({
  slug,
  title,
  coverImage,
  genres,
  averageScore,
}: GameCardProps) {
  const genreList = parseJsonField<string[]>(genres, []);

  return (
    <Link href={`/games/${slug}`} className="group block">
      <div className="card-hover overflow-hidden rounded-xl border border-border/50 bg-bg-card/50">
        <div className="relative aspect-[3/4] overflow-hidden bg-bg-surface">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 to-accent/15 text-text-muted">
              No Image
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
          {averageScore != null && (
            <div className="absolute right-2 top-2">
              <ScoreBadge score={averageScore} size="sm" />
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="line-clamp-2 text-sm font-semibold leading-tight drop-shadow-lg">
              {title}
            </h3>
            {genreList.length > 0 && (
              <p className="mt-1 line-clamp-1 text-[11px] text-text-muted">
                {genreList.slice(0, 2).join(" / ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
