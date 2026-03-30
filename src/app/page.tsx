import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsCard } from "@/components/news/NewsCard";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { GameCard } from "@/components/games/GameCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const revalidate = 300;

export default async function HomePage() {
  const [latestArticles, latestReviews, trendingGames] = await Promise.all([
    prisma.article.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      take: 7,
    }),
    prisma.review.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      take: 4,
      include: { game: true },
    }),
    prisma.game.findMany({
      orderBy: { averageScore: "desc" },
      where: { averageScore: { not: null } },
      take: 8,
    }),
  ]);

  const featured = latestArticles[0];
  const restArticles = latestArticles.slice(1);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        {/* Featured + Latest News */}
        {featured ? (
          <section className="mb-14">
            <NewsCard
              slug={featured.slug}
              title={featured.title}
              summary={featured.summary}
              imageUrl={featured.imageUrl}
              category={featured.category}
              sourceName={featured.sourceName}
              publishedAt={featured.publishedAt}
              createdAt={featured.createdAt}
              featured
            />
            {restArticles.length > 0 && (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {restArticles.map((article) => (
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
            <div className="mt-6 text-center">
              <Link
                href="/news"
                className="inline-flex items-center gap-1 rounded-lg bg-white/5 px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-white/10 hover:text-text-primary"
              >
                All News <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        ) : (
          <section className="mb-14">
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-bg-card/50 p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="relative">
                <h1 className="mb-3 text-4xl font-bold md:text-5xl">
                  Game<span className="gradient-text">Pulse</span>
                </h1>
                <p className="mx-auto max-w-lg text-lg text-text-secondary">
                  Breaking gaming news, expert reviews, and in-depth coverage of
                  the biggest games.
                </p>
                <p className="mt-4 text-sm text-text-muted">
                  Content is on its way. Check back soon!
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Latest Reviews */}
        {latestReviews.length > 0 && (
          <section className="mb-14">
            <SectionHeader title="Latest Reviews" href="/reviews" />
            <div className="grid gap-4 md:grid-cols-2">
              {latestReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  slug={review.slug}
                  title={review.title}
                  verdict={review.verdict}
                  score={review.score}
                  gameTitle={review.game.title}
                  gameCoverImage={review.game.coverImage}
                />
              ))}
            </div>
          </section>
        )}

        {/* Top Rated Games */}
        {trendingGames.length > 0 && (
          <section className="mb-14">
            <SectionHeader title="Top Rated" href="/games" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {trendingGames.map((game) => (
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
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function SectionHeader({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-xl font-bold">{title}</h2>
      <Link
        href={href}
        className="flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-primary-light"
      >
        View all <ChevronRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
