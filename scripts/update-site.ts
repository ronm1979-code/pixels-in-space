/**
 * Pixels in Space - Site Content Updater
 *
 * This script searches for gaming news, writes articles and reviews,
 * and saves them directly to Turso cloud DB.
 *
 * Usage: npx tsx scripts/update-site.ts
 *
 * What it does:
 * 1. Collects latest gaming news from RSS feeds
 * 2. Gets real screenshots from Steam API for each game
 * 3. Verifies all image URLs before saving
 * 4. Writes directly to Turso (not local DB, not git)
 * 5. All dates in ISO format, scores on 0-100 scale
 */

import "dotenv/config";

const TURSO_URL = process.env.TURSO_DATABASE_URL!.replace("libsql://", "https://");
const TURSO_TOKEN = process.env.TURSO_AUTH_TOKEN!;

// ═══════════════════════════════════════════
// Turso HTTP API helper
// ═══════════════════════════════════════════

async function tursoExec(sql: string, args: any[] = []): Promise<any> {
  const formattedArgs = args.map((a) => {
    if (a === null || a === undefined) return { type: "null" };
    if (typeof a === "number") return { type: "float", value: String(a) };
    return { type: "text", value: String(a) };
  });

  const res = await fetch(`${TURSO_URL}/v2/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TURSO_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      requests: [{ type: "execute", stmt: { sql, args: formattedArgs } }],
    }),
  });

  const data = await res.json();
  if (data.results?.[0]?.type === "error") {
    throw new Error(data.results[0].error.message);
  }
  return data.results?.[0]?.response?.result;
}

// ═══════════════════════════════════════════
// Steam API helper - gets REAL verified images
// ═══════════════════════════════════════════

interface SteamMedia {
  name: string;
  header: string;
  screenshots: string[];
}

async function getSteamMedia(appId: string): Promise<SteamMedia | null> {
  try {
    const res = await fetch(
      `https://store.steampowered.com/api/appdetails?appids=${appId}`
    );
    const data = await res.json();
    const app = data[appId]?.data;
    if (!app) return null;

    return {
      name: app.name,
      header: app.header_image,
      screenshots: (app.screenshots || []).map((s: any) => s.path_full),
    };
  } catch {
    return null;
  }
}

async function findSteamAppId(gameName: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(gameName)}&l=english&cc=US`
    );
    const data = await res.json();
    return data.items?.[0]?.id?.toString() || null;
  } catch {
    return null;
  }
}

async function verifyUrl(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.status === 200;
  } catch {
    return false;
  }
}

// ═══════════════════════════════════════════
// RSS Feed collector
// ═══════════════════════════════════════════

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
}

async function fetchRssFeed(url: string): Promise<FeedItem[]> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "PixelsInSpace/1.0" },
    });
    const text = await res.text();
    const items: FeedItem[] = [];

    const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
    let match;
    while ((match = itemRegex.exec(text)) !== null) {
      const item = match[1];
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]>|<title>(.*?)<\/title>/)?.[1] || item.match(/<title>(.*?)<\/title>/)?.[1] || "";
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      const content = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]>|<description>([\s\S]*?)<\/description>/)?.[1] || "";

      if (title && link) {
        items.push({ title: title.trim(), link: link.trim(), pubDate, content });
      }
    }
    return items.slice(0, 10);
  } catch {
    return [];
  }
}

// ═══════════════════════════════════════════
// Date helper - ALWAYS returns ISO format
// ═══════════════════════════════════════════

function toISO(date?: string | number | Date): string {
  if (!date) return new Date().toISOString();
  if (typeof date === "number") return new Date(date).toISOString();
  if (typeof date === "string") {
    // If already ISO, return as-is
    if (date.includes("T")) return date;
    // If date-only like "2026-03-15", add time
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date + "T00:00:00.000Z";
    // Try parsing
    return new Date(date).toISOString();
  }
  return date.toISOString();
}

// ═══════════════════════════════════════════
// Content helpers
// ═══════════════════════════════════════════

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function generateId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

// ═══════════════════════════════════════════
// Main update logic
// ═══════════════════════════════════════════

async function addArticle(opts: {
  title: string;
  content: string;
  summary: string;
  imageUrl: string | null;
  category: string;
  gameId?: string | null;
}) {
  const now = toISO();
  const slug = slugify(opts.title) + "-" + now.slice(0, 10);

  // Check if slug already exists
  const existing = await tursoExec(
    "SELECT id FROM Article WHERE slug = ?",
    [slug]
  );
  if (existing.rows.length > 0) {
    console.log(`  Skip (exists): ${opts.title}`);
    return;
  }

  await tursoExec(
    `INSERT INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, gameId, tags, createdAt, updatedAt)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'published', ?, ?, '[]', ?, ?)`,
    [
      generateId("art"),
      slug,
      opts.title,
      opts.content,
      opts.summary,
      opts.imageUrl,
      opts.category,
      now,
      opts.gameId || null,
      now,
      now,
    ]
  );
  console.log(`  Added: ${opts.title}`);
}

async function collectAndPublish() {
  console.log("=== Pixels in Space Content Update ===\n");

  const feeds = [
    { name: "PC Gamer", url: "https://www.pcgamer.com/rss/" },
    { name: "Eurogamer", url: "https://www.eurogamer.net/feed" },
    { name: "RPS", url: "https://www.rockpapershotgun.com/feed" },
  ];

  let totalAdded = 0;

  for (const feed of feeds) {
    console.log(`Fetching ${feed.name}...`);
    const items = await fetchRssFeed(feed.url);
    console.log(`  Found ${items.length} items`);

    for (const item of items.slice(0, 3)) {
      // Clean up HTML content
      const cleanContent = item.content
        .replace(/<[^>]+>/g, "")
        .trim()
        .slice(0, 500);

      if (cleanContent.length < 50) continue;

      // Try multiple approaches to find an image
      let imageUrl: string | null = null;

      // Try each segment of the title as a potential game name
      const titleSegments = item.title.split(/[:\-–—|,]/).map((s) => s.trim()).filter(s => s.length > 3);
      for (const segment of titleSegments) {
        if (imageUrl) break;
        const appId = await findSteamAppId(segment);
        if (appId) {
          const media = await getSteamMedia(appId);
          if (media && media.screenshots.length > 0) {
            const verified = await verifyUrl(media.screenshots[0]);
            if (verified) {
              imageUrl = media.screenshots[0];
            }
          }
        }
      }

      // Also try extracting image from RSS content (many feeds include images)
      if (!imageUrl) {
        const imgMatch = item.content.match(/src=["']([^"']+\.(jpg|jpeg|png|webp))[^"']*/i);
        if (imgMatch?.[1]) {
          const verified = await verifyUrl(imgMatch[1]);
          if (verified) imageUrl = imgMatch[1];
        }
      }

      // RULE: No image = no article. Skip it.
      if (!imageUrl) {
        console.log(`  Skip (no image): ${item.title.slice(0, 60)}`);
        continue;
      }

      const htmlContent = `<p>${cleanContent}</p>`;

      await addArticle({
        title: item.title,
        content: htmlContent,
        summary: cleanContent.slice(0, 200),
        imageUrl,
        category: "news",
      });
      totalAdded++;
    }
  }

  console.log(`\n=== Done! Added ${totalAdded} articles ===`);
}

// Run
collectAndPublish().catch((e) => {
  console.error("Update failed:", e);
  process.exit(1);
});
