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
          <h1 className="font-[family-name:var(--font-gaming)] text-3xl font-black uppercase tracking-wider text-white">Mobile Gaming</h1>
          <p className="mt-1 text-slate-400">
            Top games and latest news for iOS and Android
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-[1500px] px-5 py-6 lg:px-10">
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
          <h2 className="mb-5 flex items-center gap-3 font-[family-name:var(--font-gaming)] text-xl font-black uppercase tracking-[0.15em] text-white"><span className="inline-block h-6 w-1.5 rounded bg-gradient-to-b from-[#22d3ee] to-[#8b5cf6]" />Latest Mobile News</h2>
          {articles.length === 0 ? (
            <div className="dark-card rounded-xl py-16 text-center">
              <p className="text-slate-400">
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
          <h2 className="mb-5 flex items-center gap-3 font-[family-name:var(--font-gaming)] text-xl font-black uppercase tracking-[0.15em] text-white"><span className="inline-block h-6 w-1.5 rounded bg-gradient-to-b from-[#22d3ee] to-[#8b5cf6]" />Trending Mobile Games</h2>
          {games.length === 0 ? (
            <div className="dark-card rounded-xl py-16 text-center">
              <p className="text-slate-400">
                No mobile games found yet.
              </p>
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
          ? "border-purple-500/50 bg-purple-500/15 text-purple-300"
          : "border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] text-slate-400 hover:border-purple-500/40 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
