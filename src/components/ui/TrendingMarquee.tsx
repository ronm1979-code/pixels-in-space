import Link from "next/link";
import { TrendingUp } from "lucide-react";

interface TrendingGame {
  slug: string;
  title: string;
  averageScore: number | null;
}

export function TrendingMarquee({ games }: { games: TrendingGame[] }) {
  if (games.length === 0) return null;

  const items = [...games, ...games]; // duplicate for seamless loop

  return (
    <div className="mb-8 overflow-hidden rounded-xl border border-border bg-white/80 py-3 shadow-sm">
      <div className="flex items-center gap-3 px-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <TrendingUp className="h-3.5 w-3.5" />
          Trending
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="flex-1 overflow-hidden">
          <div className="marquee-track">
            {items.map((game, i) => (
              <Link
                key={`${game.slug}-${i}`}
                href={`/games/${game.slug}`}
                className="mr-6 flex flex-shrink-0 items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
              >
                <span className="font-medium">{game.title}</span>
                {game.averageScore && (
                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                    {Math.round(game.averageScore)}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
