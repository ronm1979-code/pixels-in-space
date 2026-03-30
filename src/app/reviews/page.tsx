import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { Pagination } from "@/components/ui/Pagination";
import { REVIEWS_PER_PAGE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description: "In-depth game reviews with honest scores and expert analysis.",
};
export const revalidate = 300;

export default async function ReviewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      skip: (page - 1) * REVIEWS_PER_PAGE,
      take: REVIEWS_PER_PAGE,
      include: { game: true },
    }),
    prisma.review.count({ where: { status: "published" } }),
  ]);

  const totalPages = Math.ceil(total / REVIEWS_PER_PAGE);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Game Reviews</h1>
          <p className="mt-1 text-text-muted">
            Honest scores and expert analysis
          </p>
        </div>

        {reviews.length === 0 ? (
          <div className="rounded-xl border border-border/50 bg-bg-card/50 py-20 text-center">
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
