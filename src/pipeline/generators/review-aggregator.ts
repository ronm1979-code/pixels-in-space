import { prisma } from "@/lib/prisma";
import { getSteamReviewScore } from "@/pipeline/collectors/steam";
import { getIgdbRating } from "@/pipeline/collectors/igdb";
import { collectGameDetails } from "@/pipeline/collectors/rawg";
import type { SourceReview } from "@/types";

interface AggregatedReview {
  gameId: string;
  gameTitle: string;
  averageScore: number;
  sourceReviews: SourceReview[];
}

export async function aggregateReviewsForGames(): Promise<AggregatedReview[]> {
  // Find games that don't have a review yet and have enough data
  const games = await prisma.game.findMany({
    where: {
      reviews: { none: {} },
      OR: [
        { metacriticScore: { not: null } },
        { steamAppId: { not: null } },
        { igdbId: { not: null } },
      ],
    },
    take: 10,
  });

  const results: AggregatedReview[] = [];

  for (const game of games) {
    const sources: SourceReview[] = [];

    // Metacritic score (from RAWG)
    if (game.metacriticScore) {
      sources.push({
        source: "Metacritic",
        score: game.metacriticScore,
        url: `https://www.metacritic.com/search/${encodeURIComponent(game.title)}`,
      });
    }

    // Steam score
    if (game.steamAppId) {
      const steamScore = await getSteamReviewScore(game.steamAppId);
      if (steamScore != null) {
        sources.push({
          source: "Steam Users",
          score: steamScore,
          url: `https://store.steampowered.com/app/${game.steamAppId}`,
        });

        // Update game's steam score
        await prisma.game.update({
          where: { id: game.id },
          data: { steamScore },
        });
      }
    }

    // IGDB rating
    if (game.igdbId) {
      const igdbRating = await getIgdbRating(game.igdbId);
      if (igdbRating != null) {
        sources.push({
          source: "IGDB",
          score: igdbRating,
          url: `https://www.igdb.com/games/${game.slug}`,
        });
      }
    }

    if (sources.length < 2) continue;

    const averageScore =
      Math.round(
        (sources.reduce((sum, s) => sum + s.score, 0) / sources.length) * 10
      ) / 10;

    // Update game average score
    await prisma.game.update({
      where: { id: game.id },
      data: { averageScore },
    });

    results.push({
      gameId: game.id,
      gameTitle: game.title,
      averageScore,
      sourceReviews: sources,
    });
  }

  return results;
}

/**
 * Refresh the professional (critic) scores on the 5 latest published reviews.
 * Only pulls from Metacritic (via RAWG) — intentionally excludes Steam user
 * reviews and IGDB user ratings so the "Global Average" reflects actual critics.
 *
 * Called from the main collection pipeline on every run so scores stay current
 * as critics post updates after launch.
 */
export async function refreshLatestReviewScores(): Promise<{
  updated: number;
  skipped: number;
  errors: string[];
}> {
  const errors: string[] = [];
  let updated = 0;
  let skipped = 0;

  const reviews = await prisma.review.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
    take: 5,
    include: { game: true },
  });

  for (const review of reviews) {
    try {
      // Re-fetch Metacritic score via RAWG (the only professional-critic source
      // we have). Fall back to stored score if RAWG slug is missing.
      let metacritic: number | null = review.game.metacriticScore;

      if (review.game.rawgSlug) {
        const fresh = await collectGameDetails(review.game.rawgSlug);
        if (fresh?.metacriticScore != null) {
          metacritic = fresh.metacriticScore;
          await prisma.game.update({
            where: { id: review.game.id },
            data: { metacriticScore: metacritic },
          });
        }
      }

      if (metacritic == null) {
        skipped++;
        continue;
      }

      const sources: SourceReview[] = [
        {
          source: "Metacritic",
          score: metacritic,
          url: `https://www.metacritic.com/search/${encodeURIComponent(review.game.title)}`,
        },
      ];

      await prisma.review.update({
        where: { id: review.id },
        data: { sourceReviews: JSON.stringify(sources) },
      });

      await prisma.game.update({
        where: { id: review.game.id },
        data: { averageScore: metacritic },
      });

      updated++;
    } catch (err) {
      errors.push(
        `[${review.game.title}] ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }

  return { updated, skipped, errors };
}
