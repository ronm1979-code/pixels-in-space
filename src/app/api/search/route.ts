import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();

  if (!q || q.length < 2) {
    return NextResponse.json({ articles: [], reviews: [], games: [] });
  }

  const query = `%${q}%`;

  const [articles, reviews, games] = await Promise.all([
    prisma.article.findMany({
      where: {
        status: "published",
        OR: [{ title: { contains: q } }, { summary: { contains: q } }],
      },
      select: { slug: true, title: true, imageUrl: true, category: true },
      orderBy: { publishedAt: "desc" },
      take: 5,
    }),
    prisma.review.findMany({
      where: {
        status: "published",
        OR: [{ title: { contains: q } }],
      },
      take: 3,
      include: { game: { select: { title: true, coverImage: true } } },
    }),
    prisma.game.findMany({
      where: {
        OR: [{ title: { contains: q } }, { developer: { contains: q } }],
      },
      select: {
        slug: true,
        title: true,
        coverImage: true,
        averageScore: true,
      },
      take: 5,
    }),
  ]);

  return NextResponse.json({ articles, reviews, games });
}
