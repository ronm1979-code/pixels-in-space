import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const [recentRuns, articleCount, reviewCount, gameCount] = await Promise.all([
    prisma.pipelineRun.findMany({
      orderBy: { startedAt: "desc" },
      take: 10,
    }),
    prisma.article.count(),
    prisma.review.count(),
    prisma.game.count(),
  ]);

  return NextResponse.json({
    stats: {
      articles: articleCount,
      reviews: reviewCount,
      games: gameCount,
    },
    recentRuns,
  });
}
