import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/news/HeroCarousel";
import { NewsCard } from "@/components/news/NewsCard";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { FeaturedReviewHero } from "@/components/reviews/FeaturedReviewHero";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { GameCard } from "@/components/games/GameCard";
import { TrendingMarquee } from "@/components/ui/TrendingMarquee";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [latestArticles, latestReviews, trendingGames] = await Promise.all([
    prisma.article.findMany({
      where: { status: "published", category: { not: "mobile" } },
      orderBy: { publishedAt: "desc" },
      take: 12,
    }),
    prisma.review.findMany({
      where: { status: "published" },
      orderBy: { game: { releaseDate: "desc" } },
      take: 4,
      include: { game: true },
    }),
    prisma.game.findMany({
      orderBy: { averageScore: "desc" },
      where: { averageScore: { not: null } },
      take: 8,
    }),
  ]);

  // Mix articles and reviews for carousel, sorted by date
  const reviewCarouselItems = latestReviews
    .filter((r) => r.game.coverImage)
    .map((r) => ({
      slug: r.slug,
      title: `${r.game.title} Review — ${r.verdict ?? ""}`.slice(0, 100),
      summary: r.verdict,
      imageUrl: r.game.coverImage,
      category: "review",
      publishedAt: r.publishedAt?.toISOString() ?? null,
      createdAt: r.createdAt.toISOString(),
      isReview: true,
    }));

  const articleCarouselItems = latestArticles
    .filter((a) => a.imageUrl)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      summary: a.summary,
      imageUrl: a.imageUrl,
      category: a.category,
      publishedAt: a.publishedAt?.toISOString() ?? null,
      createdAt: a.createdAt.toISOString(),
      isReview: false,
    }));

  // Carousel now shows only news articles — reviews get their own featured slot
  const carouselArticles = articleCarouselItems
    .sort((a, b) => new Date(b.publishedAt ?? b.createdAt).getTime() - new Date(a.publishedAt ?? a.createdAt).getTime())
    .slice(0, 6);

  const gridArticles = latestArticles.slice(0, 9);

  // Pick the newest review with a cover image for the featured hero
  const featuredReview = latestReviews.find((r) => r.game.coverImage);

  return (
    <>
      <Header />
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 py-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-10">
      <main className="min-w-0">
        {/* Hero Carousel */}
        {carouselArticles.length > 0 ? (
          <section className="mb-6">
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

        {/* Featured Review banner */}
        {featuredReview && (
          <section className="mb-10">
            <FeaturedReviewHero
              slug={featuredReview.slug}
              gameTitle={featuredReview.game.title}
              verdict={featuredReview.verdict}
              score={featuredReview.score}
              coverImage={featuredReview.game.coverImage}
              publishedAt={featuredReview.publishedAt}
            />
          </section>
        )}

        {/* More News */}
        {gridArticles.length > 0 && (
          <section className="mb-14">
            <SectionHeader title="Latest News" href="/news" />
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
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {trendingGames.map((game) => {
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
          </section>
        )}
      </main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="relative flex items-center gap-3 font-[family-name:var(--font-gaming)] text-xl font-black uppercase tracking-[0.15em] text-white">
        <span className="inline-block h-6 w-1.5 rounded bg-gradient-to-b from-[#22d3ee] to-[#8b5cf6]" />
        {title}
      </h2>
      <Link
        href={href}
        className="flex items-center gap-1 font-[family-name:var(--font-gaming)] text-xs uppercase tracking-wider text-slate-400 transition-colors hover:text-[#22d3ee]"
      >
        View all <ChevronRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
