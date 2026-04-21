import Link from "next/link";
import { Rocket } from "lucide-react";

interface Release {
  slug: string;
  title: string;
  platforms: string;
  releaseDate: Date | string | null;
}

export function UpcomingWidget({ releases }: { releases: Release[] }) {
  if (releases.length === 0) return null;

  return (
    <div className="widget-card">
      <h4 className="widget-title">
        <Rocket className="h-4 w-4 text-[#22d3ee]" />
        Upcoming Releases
      </h4>
      <div className="flex flex-col gap-3">
        {releases.slice(0, 4).map((r) => {
          const date = r.releaseDate ? new Date(r.releaseDate) : null;
          if (!date) return null;
          const month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
          const day = date.getDate();
          const platforms = (JSON.parse(r.platforms || "[]") as string[]).slice(0, 2).join(" · ") || "Multi-Platform";

          return (
            <Link
              key={r.slug}
              href={`/games/${r.slug}`}
              className="release-item flex items-center gap-3.5 rounded-[10px] p-3 transition-all"
            >
              <div
                className="flex h-[54px] w-[54px] flex-shrink-0 flex-col items-center justify-center rounded-lg text-white"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
              >
                <div className="font-[family-name:var(--font-gaming)] text-[9px] leading-none text-white/90">{month}</div>
                <div className="font-[family-name:var(--font-gaming)] text-[20px] font-black leading-none mt-1">{day}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-[family-name:var(--font-gaming)] truncate text-sm font-semibold text-white">
                  {r.title}
                </div>
                <div className="text-sm text-slate-400">{platforms}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
