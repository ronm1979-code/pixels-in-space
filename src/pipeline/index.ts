import { prisma } from "@/lib/prisma";
import { collectFromRss } from "./collectors/rss";
import { deduplicateArticles } from "./processors/deduplicator";
import {
  categorizeArticle,
  linkArticleToGame,
  generateArticleSlug,
} from "./processors/categorizer";
import { refreshLatestReviewScores } from "./generators/review-aggregator";
import { createSlug } from "@/lib/utils";
import { PIPELINE_CONFIG } from "@/config/pipeline";
import type { CollectedArticle, PipelineResult } from "@/types";

export async function runCollectionPipeline(): Promise<PipelineResult> {
  const run = await prisma.pipelineRun.create({
    data: { type: "collect", status: "running" },
  });

  const errors: string[] = [];
  let allArticles: CollectedArticle[] = [];

  // Collect from all enabled RSS sources
  const sources = await prisma.source.findMany({
    where: { enabled: true, type: "rss" },
  });

  for (const source of sources) {
    try {
      const articles = await collectFromRss(source.url, source.name);
      allArticles.push(...articles);

      await prisma.source.update({
        where: { id: source.id },
        data: { lastFetched: new Date(), errorCount: 0 },
      });
    } catch (err) {
      const msg = `[${source.name}] ${err instanceof Error ? err.message : String(err)}`;
      errors.push(msg);
      await prisma.source.update({
        where: { id: source.id },
        data: { errorCount: { increment: 1 } },
      });
    }
  }

  // Deduplicate
  const unique = await deduplicateArticles(allArticles);

  // Process and store
  let articlesNew = 0;
  for (const article of unique.slice(0, PIPELINE_CONFIG.maxArticlesPerRun)) {
    try {
      const category = categorizeArticle(article);
      const gameId = await linkArticleToGame(article);
      let slug = generateArticleSlug(article.title);

      const existing = await prisma.article.findUnique({ where: { slug } });
      if (existing) slug += `-${Date.now().toString(36)}`;

      await prisma.article.create({
        data: {
          slug,
          title: article.title,
          content: article.content,
          summary: article.content.replace(/<[^>]+>/g, "").slice(0, 200),
          imageUrl: article.imageUrl ?? null,
          sourceUrl: article.sourceUrl,
          sourceName: article.sourceName,
          category,
          gameId,
          status: PIPELINE_CONFIG.autoPublishArticles ? "published" : "draft",
          publishedAt: PIPELINE_CONFIG.autoPublishArticles ? new Date() : null,
          sourcePublishedAt: article.publishedAt ?? null,
          pipelineRunId: run.id,
        },
      });
      articlesNew++;
    } catch (err) {
      errors.push(
        `[Store] ${article.title}: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }

  // Refresh critic scores on the 5 latest reviews (Metacritic only, no user
  // reviews). Non-fatal — log errors but don't fail the whole run.
  try {
    const refresh = await refreshLatestReviewScores();
    if (refresh.errors.length) errors.push(...refresh.errors.map((e) => `[ScoreRefresh] ${e}`));
  } catch (err) {
    errors.push(
      `[ScoreRefresh] ${err instanceof Error ? err.message : String(err)}`
    );
  }

  await prisma.pipelineRun.update({
    where: { id: run.id },
    data: {
      status: "completed",
      articlesFound: allArticles.length,
      articlesNew,
      errors: JSON.stringify(errors),
      completedAt: new Date(),
    },
  });

  return { articlesFound: allArticles.length, articlesNew, errors };
}

export async function addGameToDatabase(gameData: {
  title: string;
  description?: string;
  coverImage?: string;
  releaseDate?: string;
  developer?: string;
  publisher?: string;
  platforms?: string[];
  genres?: string[];
  metacriticScore?: number;
}): Promise<string> {
  const slug = createSlug(gameData.title);
  const existing = await prisma.game.findUnique({ where: { slug } });

  if (existing) {
    await prisma.game.update({
      where: { slug },
      data: {
        description: gameData.description ?? existing.description,
        coverImage: gameData.coverImage ?? existing.coverImage,
        metacriticScore: gameData.metacriticScore ?? existing.metacriticScore,
      },
    });
    return existing.id;
  }

  const game = await prisma.game.create({
    data: {
      slug,
      title: gameData.title,
      description: gameData.description ?? null,
      coverImage: gameData.coverImage ?? null,
      releaseDate: gameData.releaseDate ? new Date(gameData.releaseDate) : null,
      developer: gameData.developer ?? null,
      publisher: gameData.publisher ?? null,
      platforms: JSON.stringify(gameData.platforms ?? []),
      genres: JSON.stringify(gameData.genres ?? []),
      metacriticScore: gameData.metacriticScore ?? null,
    },
  });
  return game.id;
}

export async function addReviewToDatabase(reviewData: {
  gameId: string;
  title: string;
  content: string;
  score: number;
  pros: string[];
  cons: string[];
  verdict: string;
  sourceReviews?: { source: string; score: number; url: string }[];
}): Promise<void> {
  const game = await prisma.game.findUnique({ where: { id: reviewData.gameId } });
  if (!game) throw new Error(`Game not found: ${reviewData.gameId}`);

  const slug = createSlug(`${game.title}-review`);
  const existingSlug = await prisma.review.findUnique({ where: { slug } });
  const finalSlug = existingSlug ? `${slug}-${Date.now().toString(36)}` : slug;

  // Check if review already exists for this game
  const existingReview = await prisma.review.findUnique({
    where: { gameId: reviewData.gameId },
  });

  if (existingReview) {
    await prisma.review.update({
      where: { gameId: reviewData.gameId },
      data: {
        title: reviewData.title,
        content: reviewData.content,
        score: reviewData.score,
        pros: JSON.stringify(reviewData.pros),
        cons: JSON.stringify(reviewData.cons),
        verdict: reviewData.verdict,
        sourceReviews: JSON.stringify(reviewData.sourceReviews ?? []),
        status: "published",
        publishedAt: new Date(),
      },
    });
  } else {
    await prisma.review.create({
      data: {
        slug: finalSlug,
        gameId: reviewData.gameId,
        title: reviewData.title,
        content: reviewData.content,
        score: reviewData.score,
        pros: JSON.stringify(reviewData.pros),
        cons: JSON.stringify(reviewData.cons),
        sourceReviews: JSON.stringify(reviewData.sourceReviews ?? []),
        verdict: reviewData.verdict,
        status: "published",
        publishedAt: new Date(),
      },
    });
  }

  // Update game average score
  await prisma.game.update({
    where: { id: reviewData.gameId },
    data: { averageScore: reviewData.score },
  });
}

export async function addArticleDirectly(articleData: {
  title: string;
  content: string;
  summary?: string;
  imageUrl?: string;
  category?: string;
  gameId?: string;
}): Promise<void> {
  let slug = generateArticleSlug(articleData.title);
  const existing = await prisma.article.findUnique({ where: { slug } });
  if (existing) slug += `-${Date.now().toString(36)}`;

  await prisma.article.create({
    data: {
      slug,
      title: articleData.title,
      content: articleData.content,
      summary: articleData.summary ?? articleData.content.replace(/<[^>]+>/g, "").slice(0, 200),
      imageUrl: articleData.imageUrl ?? null,
      category: articleData.category ?? "news",
      gameId: articleData.gameId ?? null,
      status: "published",
      publishedAt: new Date(),
    },
  });
}

export async function publishDraftArticles(): Promise<number> {
  const result = await prisma.article.updateMany({
    where: { status: "draft" },
    data: { status: "published", publishedAt: new Date() },
  });
  return result.count;
}
