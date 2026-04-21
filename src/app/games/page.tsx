import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GameCard } from "@/components/games/GameCard";
import { Pagination } from "@/components/ui/Pagination";
import { GAMES_PER_PAGE } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games",
  description: "Browse our comprehensive database of games with scores, details, and reviews.",
};
export const dynamic = "force-dynamic";

export default async function GamesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; genre?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));
  const genre = params.genre?.trim();

  // Genres are stored as JSON arrays in a SQLite string column; use substring
  // match. Quotes around the genre name avoid false positives with substrings
  // (e.g. filtering "RPG" shouldn't match "Action-RPG" partial words).
  const where = genre
    ? { genres: { contains: `"${genre}"` } }
    : {};

  const [games, total, heroGame] = await Promise.all([
    prisma.game.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      skip: (page - 1) * GAMES_PER_PAGE,
      take: GAMES_PER_PAGE,
    }),
    prisma.game.count({ where }),
    prisma.game.findFirst({
      where: { coverImage: { not: null } },
      orderBy: { averageScore: "desc" },
      select: { coverImage: true },
    }),
  ]);

  const totalPages = Math.ceil(total / GAMES_PER_PAGE);

  return (
    <>
      <Header />

      <section className="relative overflow-hidden">
        {heroGame?.coverImage && (
          <Image
            src={heroGame.coverImage}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07031a]/70 to-[#07031a]" />
        <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-10 lg:px-10">
          <h1 className="font-[family-name:var(--font-gaming)] text-3xl font-black uppercase tracking-wider text-white">
            {genre ? `${genre} Games` : "Games"}
          </h1>
          <p className="mt-1 flex items-center gap-3 text-slate-400">
            {genre ? (
              <>
                <span>Filtered by genre</span>
                <Link
                  href="/games"
                  className="inline-flex items-center gap-1 rounded-full border border-purple-400/40 bg-purple-500/10 px-2.5 py-0.5 text-xs font-semibold text-purple-200 transition-all hover:border-purple-400/70 hover:bg-purple-500/20"
                >
                  Clear ×
                </Link>
              </>
            ) : (
              "Browse our game database"
            )}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-[1500px] px-5 py-6 lg:px-10">
        {games.length === 0 ? (
          <div className="dark-card rounded-xl py-20 text-center">
            <p className="text-slate-400">No games in the database yet.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => {
              const genreList = JSON.parse(game.genres || "[]") as string[];
              return (
                <Link key={game.id} href={`/games/${game.slug}`} className="group block">
                  <div className="dark-card card-hover overflow-hidden rounded-xl">
                    <div className="relative aspect-video overflow-hidden bg-[#1a0838]">
                      {game.coverImage ? (
                        <Image
                          src={game.coverImage}
                          alt={game.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={85}
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-[#4c1d95] to-[#1e1b4b]" />
                      )}
                      {game.averageScore != null && (
                        <div className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-sm font-bold text-white shadow-lg">
                          {Math.round(game.averageScore)}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="line-clamp-1 font-[family-name:var(--font-gaming)] font-bold text-white transition-colors group-hover:text-purple-300">
                        {game.title}
                      </h3>
                      {genreList.length > 0 && (
                        <p className="mt-1 text-sm text-slate-400">
                          {genreList.slice(0, 3).join(" / ")}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-10">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            basePath={`/games${genre ? `?genre=${encodeURIComponent(genre)}&` : ""}`}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
