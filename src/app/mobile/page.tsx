import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsCard } from "@/components/news/NewsCard";
import { GameCard } from "@/components/games/GameCard";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Gaming",
  description:
    "The latest mobile gaming news, trending games, and coverage for iOS and Android.",
};
export const dynamic = "force-dynamic";

export default async function MobilePage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  const filter = params.filter;

  // Build platform filter based on category
  const platformFilter =
    filter === "ios"
      ? { platforms: { contains: "iOS" } }
      : filter === "android"
        ? { platforms: { contains: "Android" } }
        : {
            OR: [
              { platforms: { contains: "Mobile" } },
              { platforms: { contains: "iOS" } },
              { platforms: { contains: "Android" } },
            ],
          };

  const articleCategoryFilter =
    filter === "ios"
      ? {
          OR: [
            { category: "mobile" },
            { tags: { contains: "ios" } },
            { tags: { contains: "mobile" } },
          ],
        }
      : filter === "android"
        ? {
            OR: [
              { category: "mobile" },
              { tags: { contains: "android" } },
              { tags: { contains: "mobile" } },
            ],
          }
        : {
            OR: [
              { category: "mobile" },
              { tags: { contains: "mobile" } },
              { tags: { contains: "ios" } },
              { tags: { contains: "android" } },
            ],
          };

  const [games, articles, heroGame] = await Promise.all([
    prisma.game.findMany({
      where: platformFilter,
      orderBy: { updatedAt: "desc" },
      take: 10,
    }),
    prisma.article.findMany({
      where: {
        status: "published",
        ...articleCategoryFilter,
      },
      orderBy: { publishedAt: "desc" },
      take: 6,
    }),
    prisma.game.findFirst({
      where: {
        OR: [
          { platforms: { contains: "Mobile" } },
          { platforms: { contains: "iOS" } },
          { platforms: { contains: "Android" } },
        ],
        coverImage: { not: null },
      },
      orderBy: { averageScore: "desc" },
      select: { coverImage: true },
    }),
  ]);

  return (
    <>
      <Header />

      {/* Hero header */}
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
          <h1 className="font-[family-name:var(--font-gaming)] text-2xl font-bold uppercase tracking-wider text-white">Mobile Gaming</h1>
          <p className="mt-1 text-white/60">
            Top games and latest news for iOS and Android
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        {/* Filter pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          <FilterPill href="/mobile" active={!filter}>
            All
          </FilterPill>
          <FilterPill href="/mobile?filter=ios" active={filter === "ios"}>
            iOS
          </FilterPill>
          <FilterPill
            href="/mobile?filter=android"
            active={filter === "android"}
          >
            Android
          </FilterPill>
        </div>

        {/* Latest Mobile News */}
        <section className="mb-12">
          <h2 className="mb-5 font-[family-name:var(--font-gaming)] text-lg font-bold uppercase tracking-wider">Latest Mobile News</h2>
          {articles.length === 0 ? (
            <div className="rounded-xl border border-border bg-white py-16 text-center shadow-sm">
              <p className="text-text-muted">
                No mobile articles found yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <NewsCard
                  key={article.id}
                  slug={article.slug}
                  title={article.title}
                  summary={article.summary}
                  imageUrl={article.imageUrl}
                  category={article.category}
                  sourceName={article.sourceName}
                  publishedAt={article.publishedAt}
                  createdAt={article.createdAt}
                />
              ))}
            </div>
          )}
        </section>

        {/* Trending Mobile Games */}
        <section>
          <h2 className="mb-5 font-[family-name:var(--font-gaming)] text-lg font-bold uppercase tracking-wider">Trending Mobile Games</h2>
          {games.length === 0 ? (
            <div className="rounded-xl border border-border bg-white py-16 text-center shadow-sm">
              <p className="text-text-muted">
                No mobile games found yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {games.map((game) => {
                const genreList = JSON.parse(game.genres || "[]") as string[];
                return (
                  <Link key={game.id} href={`/games/${game.slug}`} className="group block">
                    <div className="card-hover overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                      <div className="relative aspect-video overflow-hidden bg-gray-100">
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
                          <div className="h-full w-full gradient-hero" />
                        )}
                        {game.averageScore != null && (
                          <div className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-sm font-bold text-white shadow-sm">
                            {Math.round(game.averageScore)}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="line-clamp-1 font-semibold transition-colors group-hover:text-primary">
                          {game.title}
                        </h3>
                        {genreList.length > 0 && (
                          <p className="mt-1 text-sm text-text-muted">
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
        </section>

      </main>
      <Footer />
    </>
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
      className={`rounded-lg border px-4 py-1.5 text-sm font-medium transition-all ${
        active
          ? "border-primary/30 bg-primary/5 text-primary"
          : "border-border bg-white text-text-muted hover:border-primary/20 hover:text-text-secondary"
      }`}
    >
      {children}
    </Link>
  );
}
