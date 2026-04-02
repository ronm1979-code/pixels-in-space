import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GameCard } from "@/components/games/GameCard";
import { Pagination } from "@/components/ui/Pagination";
import { GAMES_PER_PAGE } from "@/lib/constants";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games",
  description: "Browse our comprehensive database of games with scores, details, and reviews.",
};
export const dynamic = "force-dynamic";

export default async function GamesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));

  const [games, total, heroGame] = await Promise.all([
    prisma.game.findMany({
      orderBy: { updatedAt: "desc" },
      skip: (page - 1) * GAMES_PER_PAGE,
      take: GAMES_PER_PAGE,
    }),
    prisma.game.count(),
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

      <section className="relative overflow-hidden bg-gray-900">
        {heroGame?.coverImage && (
          <Image
            src={heroGame.coverImage}
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-bg-body" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Games</h1>
          <p className="mt-1 text-white/60">
            Browse our game database
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        {games.length === 0 ? (
          <div className="rounded-xl border border-border bg-white py-20 text-center shadow-sm">
            <p className="text-text-muted">No games in the database yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {games.map((game) => (
              <GameCard
                key={game.id}
                slug={game.slug}
                title={game.title}
                coverImage={game.coverImage}
                genres={game.genres}
                averageScore={game.averageScore}
              />
            ))}
          </div>
        )}

        <div className="mt-10">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            basePath="/games"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
