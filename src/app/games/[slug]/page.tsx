import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScoreBadge } from "@/components/ui/ScoreBadge";
import { Badge } from "@/components/ui/Badge";
import { NewsCard } from "@/components/news/NewsCard";
import { parseJsonField, formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Building2, Layers } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = await prisma.game.findUnique({ where: { slug } });
  if (!game) return {};
  return {
    title: game.title,
    description: game.description ?? `${game.title} - news, reviews, and details.`,
    openGraph: {
      title: game.title,
      images: game.coverImage ? [game.coverImage] : undefined,
    },
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = await prisma.game.findUnique({ where: { slug } });
  if (!game) notFound();

  const [review, articles] = await Promise.all([
    prisma.review.findUnique({
      where: { gameId: game.id, status: "published" },
    }),
    prisma.article.findMany({
      where: { gameId: game.id, status: "published" },
      orderBy: { publishedAt: "desc" },
      take: 6,
    }),
  ]);

  const platforms = parseJsonField<string[]>(game.platforms, []);
  const genres = parseJsonField<string[]>(game.genres, []);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Hero */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="relative h-80 w-56 flex-shrink-0 overflow-hidden rounded-2xl bg-bg-surface shadow-2xl md:h-96 md:w-64">
            {game.coverImage ? (
              <Image
                src={game.coverImage}
                alt={game.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-text-muted">
                No Image
              </div>
            )}
          </div>

          <div className="flex-1">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              {game.title}
            </h1>

            <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
              {game.releaseDate && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-text-muted" />
                  {formatDate(game.releaseDate)}
                </span>
              )}
              {game.developer && (
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-4 w-4 text-text-muted" />
                  {game.developer}
                </span>
              )}
              {game.publisher && game.publisher !== game.developer && (
                <span className="flex items-center gap-1.5">
                  <Layers className="h-4 w-4 text-text-muted" />
                  {game.publisher}
                </span>
              )}
            </div>

            {platforms.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <Badge key={p}>{p}</Badge>
                ))}
              </div>
            )}

            {genres.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-2">
                {genres.map((g) => (
                  <Badge key={g} variant="feature">{g}</Badge>
                ))}
              </div>
            )}

            {game.description && (
              <p className="mb-6 max-w-2xl leading-relaxed text-text-secondary">
                {game.description}
              </p>
            )}

            {/* Scores row */}
            <div className="flex gap-5">
              {game.averageScore != null && (
                <div className="text-center">
                  <ScoreBadge score={game.averageScore} size="lg" />
                  <p className="mt-1.5 text-xs text-text-muted">Overall</p>
                </div>
              )}
              {game.metacriticScore != null && (
                <div className="text-center">
                  <ScoreBadge score={game.metacriticScore} size="lg" />
                  <p className="mt-1.5 text-xs text-text-muted">Metacritic</p>
                </div>
              )}
              {game.steamScore != null && (
                <div className="text-center">
                  <ScoreBadge score={game.steamScore} size="lg" />
                  <p className="mt-1.5 text-xs text-text-muted">Steam</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Review */}
        {review && (
          <section className="mb-12">
            <h2 className="mb-4 text-xl font-bold">Our Review</h2>
            <Link
              href={`/reviews/${review.slug}`}
              className="card-hover block rounded-xl border border-border/50 bg-bg-card/50 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{review.title}</h3>
                  {review.verdict && (
                    <p className="mt-2 italic text-text-secondary">
                      &ldquo;{review.verdict}&rdquo;
                    </p>
                  )}
                </div>
                <ScoreBadge score={review.score} size="lg" />
              </div>
            </Link>
          </section>
        )}

        {/* Related News */}
        {articles.length > 0 && (
          <section>
            <h2 className="mb-5 text-xl font-bold">Related News</h2>
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
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
