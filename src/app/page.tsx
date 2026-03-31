import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/news/HeroCarousel";
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
      take: 12,
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

  // Articles with images go to carousel, rest below
  const carouselArticles = latestArticles
    .filter((a) => a.imageUrl)
    .slice(0, 5)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      summary: a.summary,
      imageUrl: a.imageUrl,
      category: a.category,
      publishedAt: a.publishedAt?.toISOString() ?? null,
      createdAt: a.createdAt.toISOString(),
    }));

  const gridArticles = latestArticles
    .filter((a) => !carouselArticles.some((c) => c.slug === a.slug))
    .slice(0, 6);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        {/* Hero Carousel */}
        {carouselArticles.length > 0 ? (
          <section className="mb-10">
            <HeroCarousel articles={carouselArticles} />
          </section>
        ) : (
          <section className="mb-10">
            <div className="overflow-hidden rounded-2xl gradient-hero p-12 text-center shadow-sm">
              <h1 className="mb-3 text-4xl font-bold md:text-5xl">
                Pixels <span className="gradient-text">in Space</span>
              </h1>
              <p className="mx-auto max-w-lg text-lg text-text-secondary">
                Breaking gaming news, expert reviews, and in-depth coverage of
                the biggest games.
              </p>
              <p className="mt-4 text-sm text-text-muted">
                Content is on its way. Check back soon!
              </p>
            </div>
          </section>
        )}

        {/* More News */}
        {gridArticles.length > 0 && (
          <section className="mb-14">
            <SectionHeader title="More News" href="/news" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gridArticles.map((article) => (
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

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-xl font-bold">{title}</h2>
      <Link
        href={href}
        className="flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-primary"
      >
        View all <ChevronRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
