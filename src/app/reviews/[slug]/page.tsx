import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScoreBadge } from "@/components/ui/ScoreBadge";
import { parseJsonField, formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import type { SourceReview } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const review = await prisma.review.findUnique({
    where: { slug },
    include: { game: true },
  });
  if (!review) return {};
  return {
    title: `${review.game.title} Review`,
    description: review.verdict ?? undefined,
  };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const review = await prisma.review.findUnique({
    where: { slug },
    include: { game: true },
  });

  if (!review) notFound();

  const pros = parseJsonField<string[]>(review.pros, []);
  const cons = parseJsonField<string[]>(review.cons, []);
  const sourceReviews = parseJsonField<SourceReview[]>(
    review.sourceReviews,
    []
  );

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 lg:px-0">
        {/* Review header */}
        <div className="mb-8 flex gap-6">
          <div className="relative h-52 w-36 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
            {review.game.coverImage ? (
              <Image
                src={review.game.coverImage}
                alt={review.game.title}
                fill
                className="object-cover"
                sizes="144px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center gradient-hero text-text-muted">
                N/A
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                Review
              </p>
              <h1 className="mt-1 text-2xl font-bold md:text-3xl">
                {review.game.title}
              </h1>
              {review.verdict && (
                <p className="mt-3 text-lg italic leading-relaxed text-text-secondary">
                  &ldquo;{review.verdict}&rdquo;
                </p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={`/games/${review.game.slug}`}
                className="text-sm text-text-muted hover:text-primary"
              >
                View game page
              </Link>
              <span className="text-sm text-text-muted">
                {formatDate(review.publishedAt ?? review.createdAt)}
              </span>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-start">
            <ScoreBadge score={review.score} size="lg" />
          </div>
        </div>

        <div className="line-glow mb-8" />

        {/* Pros and Cons */}
        {(pros.length > 0 || cons.length > 0) && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="grid md:grid-cols-2">
              {pros.length > 0 && (
                <div className="p-6 md:border-r md:border-border">
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white">
                      <ThumbsUp className="h-4 w-4" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">Pros</h3>
                  </div>
                  <ul className="space-y-3">
                    {pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                          {i + 1}
                        </span>
                        <span className="text-text-secondary">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {cons.length > 0 && (
                <div className="border-t border-border p-6 md:border-t-0">
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white">
                      <ThumbsDown className="h-4 w-4" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">Cons</h3>
                  </div>
                  <ul className="space-y-3">
                    {cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                          {i + 1}
                        </span>
                        <span className="text-text-secondary">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Full review */}
        <article
          className="prose-game mb-10"
          dangerouslySetInnerHTML={{ __html: review.content }}
        />

        {/* Source scores */}
        {sourceReviews.length > 0 && (
          <section className="border-t border-border pt-8">
            <h2 className="mb-4 text-lg font-bold">Score Breakdown</h2>
            <div className="grid gap-3">
              {sourceReviews.map((sr, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-border bg-white shadow-sm px-4 py-3"
                >
                  <span className="text-sm font-medium">{sr.source}</span>
                  <ScoreBadge score={sr.score} size="sm" />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
