import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { ScoreBadge } from "@/components/ui/ScoreBadge";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rankings",
  description:
    "Game rankings by aggregated critic scores. See the top-rated games of every era.",
};
export const dynamic = "force-dynamic";

const PAGE_SIZE = 50;

export default async function RankingsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; year?: string; platform?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));
  const year = params.year?.trim();
  const platform = params.platform?.trim();

  // Build filter (only reviewed games)
  const where: {
    averageScore: { not: null };
    reviews: { some: { status: "published" } };
    releaseDate?: { gte: Date; lte: Date };
    platforms?: { contains: string };
  } = {
    averageScore: { not: null },
    reviews: { some: { status: "published" } },
  };

  if (year) {
    const y = parseInt(year);
    if (!Number.isNaN(y)) {
      where.releaseDate = {
        gte: new Date(`${y}-01-01`),
        lte: new Date(`${y}-12-31T23:59:59.999Z`),
      };
    }
  }

  if (platform) {
    where.platforms = { contains: `"${platform}"` };
  }

  const [games, total] = await Promise.all([
    prisma.game.findMany({
      where,
      orderBy: { averageScore: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      select: {
        id: true,
        slug: true,
        title: true,
        coverImage: true,
        platforms: true,
        releaseDate: true,
        averageScore: true,
        reviews: { select: { slug: true }, take: 1 },
      },
    }),
    prisma.game.count({ where }),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);
  const startRank = (page - 1) * PAGE_SIZE + 1;

  // Build year options (current year and 5 before)
  const thisYear = new Date().getFullYear();
  const years = Array.from({ length: 8 }, (_, i) => thisYear - i);
  const platforms = ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch", "PlayStation 4", "Xbox One"];

  return (
    <>
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07031a]/70 to-[#07031a]" />
        <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-10 lg:px-10">
          <h1 className="font-[family-name:var(--font-gaming)] text-3xl font-black uppercase tracking-wider text-white">
            Rankings
          </h1>
          <p className="mt-1 text-slate-400">
            The top-rated games by aggregated critic scores
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 py-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-10">
        <main className="min-w-0">
          {/* Filters */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <FilterGroup label="Year">
              <FilterPill href={buildHref({ platform })} active={!year}>
                All
              </FilterPill>
              {years.map((y) => (
                <FilterPill
                  key={y}
                  href={buildHref({ year: String(y), platform })}
                  active={year === String(y)}
                >
                  {String(y)}
                </FilterPill>
              ))}
            </FilterGroup>
            <FilterGroup label="Platform">
              <FilterPill href={buildHref({ year })} active={!platform}>
                All
              </FilterPill>
              {platforms.map((p) => (
                <FilterPill
                  key={p}
                  href={buildHref({ year, platform: p })}
                  active={platform === p}
                >
                  {p}
                </FilterPill>
              ))}
            </FilterGroup>
          </div>

          {games.length === 0 ? (
            <div className="dark-card rounded-xl py-20 text-center">
              <p className="text-slate-400">No games match these filters.</p>
            </div>
          ) : (
            <div className="dark-card overflow-hidden rounded-xl">
              {games.map((game, i) => {
                const rank = startRank + i;
                const platformList = (JSON.parse(game.platforms || "[]") as string[]).slice(0, 3);
                const year = game.releaseDate ? new Date(game.releaseDate).getFullYear() : null;
                const reviewSlug = game.reviews[0]?.slug;

                return (
                  <Link
                    key={game.id}
                    href={reviewSlug ? `/reviews/${reviewSlug}` : `/games/${game.slug}`}
                    className="group flex items-center gap-4 border-b border-[rgba(139,92,246,0.1)] px-4 py-3 transition-colors last:border-b-0 hover:bg-purple-500/5"
                  >
                    <span
                      className={`w-10 flex-shrink-0 text-right font-[family-name:var(--font-gaming)] text-xl font-black ${
                        rank === 1
                          ? "text-amber-400"
                          : rank === 2
                            ? "text-slate-300"
                            : rank === 3
                              ? "text-orange-400"
                              : "text-slate-500"
                      }`}
                    >
                      {String(rank).padStart(2, "0")}
                    </span>
                    <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md bg-[#1a0838] sm:h-16 sm:w-24">
                      {game.coverImage && (
                        <Image
                          src={game.coverImage}
                          alt={game.title}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-[family-name:var(--font-gaming)] truncate text-sm font-bold text-white transition-colors group-hover:text-purple-300 sm:text-base">
                        {game.title}
                      </h3>
                      <p className="truncate text-xs text-slate-400 sm:text-sm">
                        {year && <span className="text-slate-500">{year}</span>}
                        {year && platformList.length > 0 && <span className="mx-1.5 text-slate-600">·</span>}
                        {platformList.join(" · ")}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ScoreBadge score={game.averageScore!} size="md" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Pagination (simple prev/next) */}
          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-between">
              {page > 1 ? (
                <Link
                  href={buildHref({ page: String(page - 1), year, platform })}
                  className="rounded-lg border border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-purple-500/55 hover:text-white"
                >
                  ← Previous
                </Link>
              ) : <span />}
              <span className="text-sm text-slate-500">
                Page {page} of {totalPages}
              </span>
              {page < totalPages ? (
                <Link
                  href={buildHref({ page: String(page + 1), year, platform })}
                  className="rounded-lg border border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-purple-500/55 hover:text-white"
                >
                  Next →
                </Link>
              ) : <span />}
            </div>
          )}
        </main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

function buildHref(params: Record<string, string | undefined>) {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v) q.set(k, v);
  }
  const qs = q.toString();
  return qs ? `/rankings?${qs}` : "/rankings";
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-[family-name:var(--font-gaming)] text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        {label}:
      </span>
      {children}
    </div>
  );
}

function FilterPill({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-lg border px-3 py-1 text-xs font-medium transition-all ${
        active
          ? "border-purple-500/50 bg-purple-500/15 text-purple-300"
          : "border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] text-slate-400 hover:border-purple-500/40 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
