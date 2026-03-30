import * as cheerio from "cheerio";
import type { CollectedArticle } from "@/types";

interface ScraperConfig {
  articleSelector: string;
  titleSelector: string;
  contentSelector: string;
  linkSelector: string;
  imageSelector?: string;
  dateSelector?: string;
}

export async function scrapeArticles(
  url: string,
  sourceName: string,
  config: ScraperConfig
): Promise<CollectedArticle[]> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });

  if (!res.ok) throw new Error(`Scrape failed for ${url}: ${res.status}`);

  const html = await res.text();
  const $ = cheerio.load(html);
  const articles: CollectedArticle[] = [];

  $(config.articleSelector)
    .slice(0, 15)
    .each((_, el) => {
      const $el = $(el);
      const title = $el.find(config.titleSelector).text().trim();
      const link =
        $el.find(config.linkSelector).attr("href") ??
        $el.find("a").first().attr("href");
      const content = $el.find(config.contentSelector).text().trim();
      const imageUrl = config.imageSelector
        ? $el.find(config.imageSelector).attr("src") ??
          $el.find(config.imageSelector).attr("data-src")
        : undefined;
      const dateStr = config.dateSelector
        ? $el.find(config.dateSelector).attr("datetime") ??
          $el.find(config.dateSelector).text().trim()
        : undefined;

      if (!title || !link) return;

      const fullUrl = link.startsWith("http")
        ? link
        : new URL(link, url).toString();

      articles.push({
        title,
        content: content || title,
        imageUrl: imageUrl ?? undefined,
        sourceUrl: fullUrl,
        sourceName,
        category: "news",
        publishedAt: dateStr ? new Date(dateStr) : undefined,
      });
    });

  return articles;
}
