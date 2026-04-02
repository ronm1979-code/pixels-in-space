import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { Pagination } from "@/components/ui/Pagination";
import { REVIEWS_PER_PAGE } from "@/lib/constants";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description: "In-depth game reviews with honest scores and expert analysis.",
};
export const dynamic = "force-dynamic";

export default async function ReviewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));

  const [reviews, total, heroGame] = await Promise.all([
    prisma.review.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      skip: (page - 1) * REVIEWS_PER_PAGE,
      take: REVIEWS_PER_PAGE,
      include: { game: true },
    }),
    prisma.review.count({ where: { status: "published" } }),
    prisma.game.findFirst({
      where: { coverImage: { not: null }, reviews: { some: { status: "published" } } },
      orderBy: { updatedAt: "desc" },
      select: { coverImage: true },
    }),
  ]);

  const totalPages = Math.ceil(total / REVIEWS_PER_PAGE);

  return (
    <>
      <Header />

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
          <h1 className="text-3xl font-bold text-white">Game Reviews</h1>
          <p className="mt-1 text-white/60">
            Honest scores and expert analysis
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        {reviews.length === 0 ? (
          <div className="rounded-xl border border-border bg-white py-20 text-center shadow-sm">
            <p className="text-text-muted">No reviews published yet.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map((review) => (
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
        )}

        <div className="mt-10">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            basePath="/reviews"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
