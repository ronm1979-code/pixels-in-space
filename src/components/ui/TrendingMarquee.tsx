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
    <div className="mb-8 overflow-hidden rounded-xl border border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] py-3 backdrop-blur-md">
      <div className="flex items-center gap-3 px-4">
        <div className="flex items-center gap-1.5 font-[family-name:var(--font-gaming)] text-xs font-semibold uppercase tracking-wider text-[#22d3ee]">
          <TrendingUp className="h-3.5 w-3.5" />
          Trending
        </div>
        <div className="h-4 w-px bg-[rgba(139,92,246,0.3)]" />
        <div className="flex-1 overflow-hidden">
          <div className="marquee-track">
            {items.map((game, i) => (
              <Link
                key={`${game.slug}-${i}`}
                href={`/games/${game.slug}`}
                className="mr-6 flex flex-shrink-0 items-center gap-2 text-sm text-slate-300 transition-colors hover:text-purple-300"
              >
                <span className="font-medium">{game.title}</span>
                {game.averageScore && (
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-300">
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
