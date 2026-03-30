import { prisma } from "@/lib/prisma";
import type { CollectedArticle } from "@/types";
import { createSlug } from "@/lib/utils";

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  review: ["review", "scored", "rating", "verdict", "/10", "out of 10"],
  guide: [
    "guide",
    "how to",
    "tips",
    "tricks",
    "walkthrough",
    "best",
    "top 10",
  ],
  feature: [
    "interview",
    "opinion",
    "editorial",
    "analysis",
    "deep dive",
    "first look",
  ],
  rumor: ["rumor", "leak", "reportedly", "allegedly", "datamine", "unconfirmed"],
};

export function categorizeArticle(article: CollectedArticle): string {
  const text = `${article.title} ${article.content.slice(0, 500)}`.toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) {
      return category;
    }
  }

  return article.category || "news";
}

export async function linkArticleToGame(
  article: CollectedArticle
): Promise<string | null> {
  if (!article.gameTitle) return null;

  const game = await prisma.game.findFirst({
    where: {
      OR: [
        { title: { contains: article.gameTitle } },
        { slug: createSlug(article.gameTitle) },
      ],
    },
    select: { id: true },
  });

  return game?.id ?? null;
}

export function generateArticleSlug(title: string): string {
  const base = createSlug(title);
  const datePart = new Date().toISOString().slice(0, 10);
  return `${base}-${datePart}`;
}
