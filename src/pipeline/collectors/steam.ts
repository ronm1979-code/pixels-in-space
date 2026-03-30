import { API_CONFIG } from "@/config/sources";
import type { CollectedArticle } from "@/types";

const { newsUrl } = API_CONFIG.steam;

interface SteamNewsItem {
  gid: string;
  title: string;
  url: string;
  contents: string;
  date: number;
  feedlabel: string;
  appid: number;
}

interface SteamNewsResponse {
  appnews?: {
    newsitems: SteamNewsItem[];
  };
}

export async function collectSteamNews(
  appIds: string[]
): Promise<CollectedArticle[]> {
  const key = process.env.STEAM_API_KEY;
  if (!key) throw new Error("STEAM_API_KEY not set");

  const articles: CollectedArticle[] = [];

  for (const appId of appIds) {
    try {
      const res = await fetch(
        `${newsUrl}?appid=${appId}&count=5&maxlength=0&key=${key}`,
        { headers: { "User-Agent": "PixelsInSpace/1.0" } }
      );
      if (!res.ok) continue;

      const data: SteamNewsResponse = await res.json();
      const items = data.appnews?.newsitems ?? [];

      for (const item of items) {
        articles.push({
          title: item.title,
          content: cleanSteamContent(item.contents),
          sourceUrl: item.url,
          sourceName: "Steam",
          category: "news",
          publishedAt: new Date(item.date * 1000),
        });
      }
    } catch {
      // Skip failed app IDs
    }
  }

  return articles;
}

export async function getSteamReviewScore(
  appId: string
): Promise<number | null> {
  try {
    const res = await fetch(
      `https://store.steampowered.com/appreviews/${appId}?json=1&language=all&num_per_page=0`,
      { headers: { "User-Agent": "PixelsInSpace/1.0" } }
    );
    if (!res.ok) return null;

    const data = await res.json();
    const summary = data.query_summary;
    if (!summary || summary.total_reviews === 0) return null;

    return Math.round(
      (summary.total_positive / summary.total_reviews) * 100
    );
  } catch {
    return null;
  }
}

function cleanSteamContent(content: string): string {
  return content
    .replace(/\[img\][^\[]*\[\/img\]/gi, "")
    .replace(/\[url=[^\]]*\](.*?)\[\/url\]/gi, "$1")
    .replace(/\[h[123]\](.*?)\[\/h[123]\]/gi, "<h3>$1</h3>")
    .replace(/\[b\](.*?)\[\/b\]/gi, "<strong>$1</strong>")
    .replace(/\[i\](.*?)\[\/i\]/gi, "<em>$1</em>")
    .replace(/\[list\]/gi, "<ul>")
    .replace(/\[\/list\]/gi, "</ul>")
    .replace(/\[\*\](.*?)(?=\[\*\]|\[\/list\]|$)/gi, "<li>$1</li>")
    .replace(/\[.*?\]/g, "")
    .trim();
}
