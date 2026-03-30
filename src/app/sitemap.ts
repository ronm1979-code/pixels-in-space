import { prisma } from "@/lib/prisma";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const [articles, reviews, games] = await Promise.all([
    prisma.article.findMany({
      where: { status: "published" },
      select: { slug: true, updatedAt: true },
    }),
    prisma.review.findMany({
      where: { status: "published" },
      select: { slug: true, updatedAt: true },
    }),
    prisma.game.findMany({
      select: { slug: true, updatedAt: true },
    }),
  ]);

  return [
    { url: baseUrl, changeFrequency: "hourly", priority: 1 },
    { url: `${baseUrl}/news`, changeFrequency: "hourly", priority: 0.9 },
    { url: `${baseUrl}/reviews`, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/games`, changeFrequency: "daily", priority: 0.8 },
    ...articles.map((a) => ({
      url: `${baseUrl}/news/${a.slug}`,
      lastModified: a.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...reviews.map((r) => ({
      url: `${baseUrl}/reviews/${r.slug}`,
      lastModified: r.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...games.map((g) => ({
      url: `${baseUrl}/games/${g.slug}`,
      lastModified: g.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
