import { prisma } from "@/lib/prisma";
import { TopRatedWidget } from "./TopRatedWidget";
import { UpcomingWidget } from "./UpcomingWidget";
import { TagsWidget } from "./TagsWidget";

export async function Sidebar() {
  const now = new Date();
  const monthAgo = new Date();
  monthAgo.setMonth(monthAgo.getMonth() - 1);

  const [topRated, upcoming] = await Promise.all([
    // Games with a review published in the last month, ranked by average score
    prisma.game.findMany({
      where: {
        averageScore: { not: null },
        reviews: {
          some: {
            status: "published",
            publishedAt: { gte: monthAgo },
          },
        },
      },
      orderBy: { averageScore: "desc" },
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
    <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
      <TopRatedWidget games={topRated} />
      <UpcomingWidget releases={upcoming} />
      <TagsWidget />
    </aside>
  );
}
