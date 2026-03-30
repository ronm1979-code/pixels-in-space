import { prisma } from "@/lib/prisma";
import type { CollectedArticle } from "@/types";

export async function deduplicateArticles(
  articles: CollectedArticle[]
): Promise<CollectedArticle[]> {
  if (articles.length === 0) return [];

  // Get existing source URLs from the last 7 days
  const weekAgo = new Date(Date.now() - 7 * 86400 * 1000);
  const existing = await prisma.article.findMany({
    where: { createdAt: { gte: weekAgo } },
    select: { sourceUrl: true, title: true },
  });

  const existingUrls = new Set(
    existing.map((a) => a.sourceUrl).filter(Boolean)
  );
  const existingTitles = existing.map((a) => a.title.toLowerCase());

  const unique: CollectedArticle[] = [];
  const seenUrls = new Set<string>();

  for (const article of articles) {
    // Skip if URL already exists
    if (article.sourceUrl && existingUrls.has(article.sourceUrl)) continue;
    if (article.sourceUrl && seenUrls.has(article.sourceUrl)) continue;

    // Skip if title is too similar to existing
    const lowerTitle = article.title.toLowerCase();
    const isDuplicate = existingTitles.some(
      (t) => similarity(t, lowerTitle) > 0.85
    );
    if (isDuplicate) continue;

    if (article.sourceUrl) seenUrls.add(article.sourceUrl);
    unique.push(article);
  }

  return unique;
}

function similarity(a: string, b: string): number {
  const tokensA = new Set(a.split(/\s+/));
  const tokensB = new Set(b.split(/\s+/));
  const intersection = [...tokensA].filter((t) => tokensB.has(t));
  const union = new Set([...tokensA, ...tokensB]);
  return union.size === 0 ? 0 : intersection.length / union.size;
}
