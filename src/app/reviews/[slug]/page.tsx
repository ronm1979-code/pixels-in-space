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
          <div className="relative h-44 w-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
            {review.game.coverImage ? (
              <Image
                src={review.game.coverImage}
                alt={review.game.title}
                fill
                className="object-cover"
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
          <div className="mb-10 grid gap-4 md:grid-cols-2">
            {pros.length > 0 && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-emerald-600">
                  <ThumbsUp className="h-4 w-4" /> What Works
                </h3>
                <ul className="space-y-2">
                  {pros.map((pro, i) => (
                    <li key={i} className="flex gap-2 text-sm text-text-secondary">
                      <span className="mt-0.5 text-emerald-600">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {cons.length > 0 && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-red-600">
                  <ThumbsDown className="h-4 w-4" /> What Doesn&apos;t
                </h3>
                <ul className="space-y-2">
                  {cons.map((con, i) => (
                    <li key={i} className="flex gap-2 text-sm text-text-secondary">
                      <span className="mt-0.5 text-red-600">&minus;</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
