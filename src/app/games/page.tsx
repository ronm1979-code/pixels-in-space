import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GameCard } from "@/components/games/GameCard";
import { Pagination } from "@/components/ui/Pagination";
import { GAMES_PER_PAGE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games",
  description: "Browse our comprehensive database of games with scores, details, and reviews.",
};
export const revalidate = 300;

export default async function GamesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));

  const [games, total] = await Promise.all([
    prisma.game.findMany({
      orderBy: { updatedAt: "desc" },
      skip: (page - 1) * GAMES_PER_PAGE,
      take: GAMES_PER_PAGE,
    }),
    prisma.game.count(),
  ]);

  const totalPages = Math.ceil(total / GAMES_PER_PAGE);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Games</h1>
          <p className="mt-1 text-text-muted">
            Browse our game database
          </p>
        </div>

        {games.length === 0 ? (
          <div className="rounded-xl border border-border/50 bg-bg-card/50 py-20 text-center">
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
