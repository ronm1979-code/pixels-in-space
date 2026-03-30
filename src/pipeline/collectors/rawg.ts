import { API_CONFIG } from "@/config/sources";
import type { CollectedGameData, CollectedArticle } from "@/types";

const BASE = API_CONFIG.rawg.baseUrl;

async function rawgFetch<T>(path: string): Promise<T> {
  const key = process.env.RAWG_API_KEY;
  if (!key) throw new Error("RAWG_API_KEY not set");
  const separator = path.includes("?") ? "&" : "?";
  const res = await fetch(`${BASE}${path}${separator}key=${key}`, {
    headers: { "User-Agent": "PixelsInSpace/1.0" },
  });
  if (!res.ok) throw new Error(`RAWG API error: ${res.status}`);
  return res.json();
}

interface RawgGame {
  id: number;
  slug: string;
  name: string;
  description_raw?: string;
  background_image?: string;
  released?: string;
  metacritic?: number;
  developers?: { name: string }[];
  publishers?: { name: string }[];
  platforms?: { platform: { name: string } }[];
  genres?: { name: string }[];
}

interface RawgList {
  results: RawgGame[];
}

export async function collectNewGames(): Promise<CollectedGameData[]> {
  const data = await rawgFetch<RawgList>(
    "/games?ordering=-added&page_size=20&dates=2025-01-01,2026-12-31"
  );

  return data.results.map((g) => ({
    title: g.name,
    description: g.description_raw,
    coverImage: g.background_image,
    releaseDate: g.released ? new Date(g.released) : undefined,
    developer: g.developers?.[0]?.name,
    publisher: g.publishers?.[0]?.name,
    platforms: g.platforms?.map((p) => p.platform.name) ?? [],
    genres: g.genres?.map((g) => g.name) ?? [],
    rawgSlug: g.slug,
    metacriticScore: g.metacritic ?? undefined,
  }));
}

export async function collectGameDetails(
  rawgSlug: string
): Promise<CollectedGameData | null> {
  try {
    const g = await rawgFetch<RawgGame>(`/games/${rawgSlug}`);
    return {
      title: g.name,
      description: g.description_raw,
      coverImage: g.background_image,
      releaseDate: g.released ? new Date(g.released) : undefined,
      developer: g.developers?.[0]?.name,
      publisher: g.publishers?.[0]?.name,
      platforms: g.platforms?.map((p) => p.platform.name) ?? [],
      genres: g.genres?.map((ge) => ge.name) ?? [],
      rawgSlug: g.slug,
      metacriticScore: g.metacritic ?? undefined,
    };
  } catch {
    return null;
  }
}

export async function collectGamingNews(): Promise<CollectedArticle[]> {
  // RAWG doesn't have a news API, so we use the "new releases" as news
  const data = await rawgFetch<RawgList>(
    "/games?ordering=-released&page_size=10&dates=2026-03-01,2026-03-31"
  );

  return data.results.map((g) => ({
    title: `${g.name} - Now Available`,
    content: g.description_raw ?? `${g.name} has been released.`,
    imageUrl: g.background_image,
    sourceUrl: `https://rawg.io/games/${g.slug}`,
    sourceName: "RAWG",
    category: "news",
    publishedAt: g.released ? new Date(g.released) : undefined,
    gameTitle: g.name,
  }));
}
