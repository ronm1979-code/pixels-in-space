import Link from "next/link";
import { Hash } from "lucide-react";

// Popular gaming genres — hot ones highlighted in pink
const TAGS: { label: string; slug: string; hot?: boolean }[] = [
  { label: "Indie", slug: "indie", hot: true },
  { label: "RPG", slug: "rpg" },
  { label: "Roguelike", slug: "roguelike", hot: true },
  { label: "FPS", slug: "fps" },
  { label: "Metroidvania", slug: "metroidvania" },
  { label: "Strategy", slug: "strategy" },
  { label: "Soulslike", slug: "soulslike", hot: true },
  { label: "Co-op", slug: "co-op" },
  { label: "Retro", slug: "retro" },
  { label: "Racing", slug: "racing" },
  { label: "Sandbox", slug: "sandbox" },
];

export function TagsWidget() {
  return (
    <div className="widget-card">
      <h4 className="widget-title">
        <Hash className="h-4 w-4 text-[#22d3ee]" />
        Popular Genres
      </h4>
      <div className="flex flex-wrap gap-2">
        {TAGS.map((t) => (
          <Link
            key={t.slug}
            href={`/games?genre=${encodeURIComponent(t.label)}`}
            className={`tag-pill ${t.hot ? "tag-hot" : ""}`}
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
