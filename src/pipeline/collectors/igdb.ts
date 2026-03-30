import { API_CONFIG } from "@/config/sources";
import type { CollectedGameData } from "@/types";

const { tokenUrl, baseUrl } = API_CONFIG.igdb;

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  const clientId = process.env.TWITCH_CLIENT_ID;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("TWITCH_CLIENT_ID and TWITCH_CLIENT_SECRET must be set");
  }

  const res = await fetch(
    `${tokenUrl}?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    { method: "POST" }
  );
  if (!res.ok) throw new Error(`IGDB token error: ${res.status}`);

  const data = await res.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000 - 60000,
  };
  return cachedToken.token;
}

async function igdbQuery<T>(endpoint: string, query: string): Promise<T> {
  const token = await getAccessToken();
  const clientId = process.env.TWITCH_CLIENT_ID!;

  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Client-ID": clientId,
      Authorization: `Bearer ${token}`,
      "Content-Type": "text/plain",
    },
    body: query,
  });

  if (!res.ok) throw new Error(`IGDB API error: ${res.status}`);
  return res.json();
}

interface IgdbGame {
  id: number;
  name: string;
  summary?: string;
  cover?: { image_id: string };
  first_release_date?: number;
  involved_companies?: {
    company: { name: string };
    developer: boolean;
    publisher: boolean;
  }[];
  platforms?: { name: string }[];
  genres?: { name: string }[];
  total_rating?: number;
}

export async function collectRecentGames(): Promise<CollectedGameData[]> {
  const threeMonthsAgo = Math.floor(Date.now() / 1000) - 90 * 86400;

  const games = await igdbQuery<IgdbGame[]>(
    "/games",
    `fields name, summary, cover.image_id, first_release_date,
      involved_companies.company.name, involved_companies.developer,
      involved_companies.publisher, platforms.name, genres.name, total_rating;
    where first_release_date > ${threeMonthsAgo} & total_rating_count > 5;
    sort total_rating desc;
    limit 20;`
  );

  return games.map((g) => {
    const dev = g.involved_companies?.find((c) => c.developer);
    const pub = g.involved_companies?.find((c) => c.publisher);

    return {
      title: g.name,
      description: g.summary,
      coverImage: g.cover
        ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${g.cover.image_id}.jpg`
        : undefined,
      releaseDate: g.first_release_date
        ? new Date(g.first_release_date * 1000)
        : undefined,
      developer: dev?.company.name,
      publisher: pub?.company.name,
      platforms: g.platforms?.map((p) => p.name) ?? [],
      genres: g.genres?.map((ge) => ge.name) ?? [],
      igdbId: String(g.id),
    };
  });
}

export async function getIgdbRating(
  igdbId: string
): Promise<number | null> {
  try {
    const games = await igdbQuery<{ total_rating?: number }[]>(
      "/games",
      `fields total_rating; where id = ${igdbId};`
    );
    return games[0]?.total_rating
      ? Math.round(games[0].total_rating)
      : null;
  } catch {
    return null;
  }
}
