import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

interface Game {
  slug: string;
  title: string;
  platforms: string;
  coverImage: string | null;
  averageScore: number | null;
}

export function TopRatedWidget({ games }: { games: Game[] }) {
  if (games.length === 0) return null;

  return (
    <div className="widget-card">
      <h4 className="widget-title">
        <Star className="h-4 w-4 text-[#22d3ee]" fill="currentColor" />
        Top Rated This Week
      </h4>
      <div className="flex flex-col gap-3.5">
        {games.slice(0, 5).map((game, i) => {
          const platformList = (JSON.parse(game.platforms || "[]") as string[]).slice(0, 2);
          const score = game.averageScore ? Math.round(game.averageScore) : null;
          const scoreClass = score && score >= 85 ? "score-a" : "score-b";
          const rankClass = i === 0 ? "rank-first" : i === 1 ? "rank-second" : i === 2 ? "rank-third" : "";

          return (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="flex items-center gap-3 transition-transform hover:translate-x-1"
            >
              <span className={`font-[family-name:var(--font-gaming)] text-[14px] w-[22px] text-center ${rankClass}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative h-[50px] w-10 flex-shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-[#1e1b4b] to-[#581c87]">
                {game.coverImage && (
                  <Image src={game.coverImage} alt={game.title} fill className="object-cover" sizes="120px" quality={90} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-[family-name:var(--font-gaming)] truncate text-sm font-semibold text-white">
                  {game.title}
                </div>
                {platformList.length > 0 && (
                  <div className="text-xs text-slate-500">{platformList.join(" · ")}</div>
                )}
              </div>
              {score && (
                <span className={`rated-score ${scoreClass}`}>{score}</span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
