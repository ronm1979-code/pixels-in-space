import { prisma } from "@/lib/prisma";
import { TopRatedWidget } from "./TopRatedWidget";
import { UpcomingWidget } from "./UpcomingWidget";
import { TagsWidget } from "./TagsWidget";
import { FeaturedReviewHero } from "@/components/reviews/FeaturedReviewHero";

interface FeaturedReviewProps {
  slug: string;
  gameTitle: string;
  verdict: string | null;
  score: number;
  coverImage: string | null;
  publishedAt: Date | string | null;
}

export async function Sidebar({
  featuredReview = null,
}: {
  featuredReview?: FeaturedReviewProps | null;
} = {}) {
  const now = new Date();

  const [topRated, upcoming] = await Promise.all([
    // Top 5 most recently released games that have a published review
    prisma.game.findMany({
      where: {
        averageScore: { not: null },
        releaseDate: { lte: now },
        reviews: { some: { status: "published" } },
      },
      orderBy: { releaseDate: "desc" },
      take: 5,
      select: { slug: true, title: true, platforms: true, coverImage: true, averageScore: true },
    }),
    prisma.game.findMany({
      where: { releaseDate: { gt: now } },
      orderBy: { releaseDate: "asc" },
      take: 4,
      select: { slug: true, title: true, platforms: true, releaseDate: true },
    }),
  ]);

  return (
    <aside className="flex flex-col gap-6">
      {featuredReview && (
        <div className="hidden lg:block">
          <FeaturedReviewHero {...featuredReview} />
        </div>
      )}
      {/* Extra top margin on the first widget so it aligns with the news card
          grid in the main column (which sits below a section header). */}
      <div className="lg:mt-12">
        <TopRatedWidget games={topRated} />
      </div>
      <UpcomingWidget releases={upcoming} />
      <TagsWidget />
    </aside>
  );
}
