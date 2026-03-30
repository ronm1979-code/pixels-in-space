import { prisma } from "@/lib/prisma";
import { getSteamReviewScore } from "@/pipeline/collectors/steam";
import { getIgdbRating } from "@/pipeline/collectors/igdb";
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
