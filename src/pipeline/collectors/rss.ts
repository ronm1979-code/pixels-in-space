import Parser from "rss-parser";
import type { CollectedArticle } from "@/types";

const parser = new Parser({
  timeout: 10000,
  headers: {
    "User-Agent": "PixelsInSpace/1.0 (Gaming News Aggregator)",
  },
});

export async function collectFromRss(
  feedUrl: string,
  sourceName: string
): Promise<CollectedArticle[]> {
  const feed = await parser.parseURL(feedUrl);
  const articles: CollectedArticle[] = [];

  for (const item of feed.items.slice(0, 20)) {
    if (!item.title || !item.link) continue;

    const content =
      item["content:encoded"] ?? item.content ?? item.contentSnippet ?? "";

    articles.push({
      title: item.title,
      content: cleanHtml(content),
      imageUrl: extractImageUrl(content) ?? item.enclosure?.url ?? undefined,
      sourceUrl: item.link,
      sourceName,
      category: "news",
      publishedAt: item.pubDate ? new Date(item.pubDate) : undefined,
    });
  }

  return articles;
}

function cleanHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .trim();
}

function extractImageUrl(html: string): string | undefined {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}
