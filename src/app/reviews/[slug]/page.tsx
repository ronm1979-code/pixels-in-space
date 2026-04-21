import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScoreBadge } from "@/components/ui/ScoreBadge";
import { ReadTime } from "@/components/ui/ReadTime";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { parseJsonField, formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Comments } from "@/components/ui/Comments";
import type { Metadata } from "next";
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: review.title,
    reviewBody: review.verdict,
    itemReviewed: {
      "@type": "VideoGame",
      name: review.game.title,
      image: review.game.coverImage ?? undefined,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.score,
      bestRating: 100,
      worstRating: 0,
    },
    publisher: {
      "@type": "Organization",
      name: "Pixels in Space",
    },
    datePublished: (review.publishedAt ?? review.createdAt).toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 lg:px-0">
        {/* Review header */}
        <div className="mb-8">
          {/* Mobile: stacked layout */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="relative mx-auto h-48 w-full max-w-xs overflow-hidden rounded-xl bg-[#1a0838] sm:mx-0 sm:h-52 sm:w-36 sm:flex-shrink-0">
              {review.game.coverImage ? (
                <Image
                  src={review.game.coverImage}
                  alt={review.game.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 144px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#4c1d95] to-[#1e1b4b] text-slate-400">
                  N/A
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-[family-name:var(--font-gaming)] text-[11px] font-semibold uppercase tracking-wider text-[#22d3ee]">
                      Review
                    </p>
                    <h1 className="mt-1 font-[family-name:var(--font-gaming)] text-xl font-bold text-white md:text-2xl">
                      {review.game.title}
                    </h1>
                  </div>
                  <div className="flex-shrink-0">
                    <ScoreBadge score={review.score} size="lg" />
                  </div>
                </div>
                {review.verdict && (
                  <p className="mt-3 text-base italic leading-relaxed text-slate-300 sm:text-lg">
                    &ldquo;{review.verdict}&rdquo;
                  </p>
                )}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Link
                  href={`/games/${review.game.slug}`}
                  className="text-sm text-slate-400 hover:text-purple-300"
                >
                  View game page
                </Link>
                <span className="text-sm text-slate-400">
                  {formatDate(review.publishedAt ?? review.createdAt)}
                </span>
                <ReadTime content={review.content} />
                <div className="ml-auto">
                  <ShareButtons title={review.title} slug={review.slug} type="reviews" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line-glow mb-8" />

        {/* Pros and Cons */}
        {(pros.length > 0 || cons.length > 0) && (
          <div className="mb-10 grid gap-5 md:grid-cols-2">
            {pros.length > 0 && (
              <div className="glow-card-green">
                <div className="relative z-10 rounded-[14px] bg-[#0f0630] p-6">
                  <h3 className="mb-4 font-[family-name:var(--font-gaming)] text-lg font-bold text-emerald-400">Pros</h3>
                  <ul className="space-y-3">
                    {pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 text-emerald-400">&bull;</span>
                        <span className="text-slate-300">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {cons.length > 0 && (
              <div className="glow-card-red">
                <div className="relative z-10 rounded-[14px] bg-[#0f0630] p-6">
                  <h3 className="mb-4 font-[family-name:var(--font-gaming)] text-lg font-bold text-red-400">Cons</h3>
                  <ul className="space-y-3">
                    {cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 text-red-400">&bull;</span>
                        <span className="text-slate-300">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Full review */}
        <article
          className="prose-game mb-10"
          dangerouslySetInnerHTML={{ __html: review.content }}
        />

        {/* Comments */}
        <Comments reviewId={review.id} />

        {/* Source scores */}
        {sourceReviews.length > 0 && (
          <section className="border-t border-[rgba(139,92,246,0.18)] pt-8">
            <h2 className="mb-4 font-[family-name:var(--font-gaming)] text-lg font-bold uppercase tracking-wider text-white">Score Breakdown</h2>
            <div className="grid gap-3">
              {sourceReviews.map((sr, i) => (
                <div
                  key={i}
                  className="dark-card flex items-center justify-between rounded-lg px-4 py-3"
                >
                  <span className="text-sm font-medium text-slate-300">{sr.source}</span>
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
