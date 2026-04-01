import { createClient } from "@libsql/client";
import * as dotenv from "dotenv";
dotenv.config();

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

function cuid() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "c";
  for (let i = 0; i < 24; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

const now = new Date().toISOString();

const games = [
  {
    id: cuid(),
    slug: "genshin-impact",
    title: "Genshin Impact",
    description:
      "Step into the vast world of Teyvat in this open-world action RPG. Explore breathtaking landscapes, battle powerful enemies, and unravel the mysteries of the seven elemental nations. With a massive roster of playable characters and a continuously expanding story, Genshin Impact delivers a console-quality experience on mobile.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact_cover.jpg",
    platforms: JSON.stringify(["PC", "PlayStation 5", "iOS", "Android"]),
    genres: JSON.stringify(["Action RPG", "Open World", "Gacha"]),
    developer: "miHoYo",
    publisher: "miHoYo",
    releaseDate: "2020-09-28T00:00:00.000Z",
    metacriticScore: 84,
    averageScore: 84,
  },
  {
    id: cuid(),
    slug: "honkai-star-rail",
    title: "Honkai: Star Rail",
    description:
      "Board the Astral Express and embark on a galaxy-spanning journey in this turn-based RPG from HoYoverse. Featuring strategic combat, stunning visuals, and a rich narrative, Star Rail brings cinematic storytelling and deep character progression to mobile gaming.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/2/24/Honkai_Star_Rail_cover.jpg",
    platforms: JSON.stringify(["PC", "PlayStation 5", "iOS", "Android"]),
    genres: JSON.stringify(["Turn-Based RPG", "Gacha", "Sci-Fi"]),
    developer: "HoYoverse",
    publisher: "HoYoverse",
    releaseDate: "2023-04-26T00:00:00.000Z",
    metacriticScore: 82,
    averageScore: 82,
  },
  {
    id: cuid(),
    slug: "marvel-snap",
    title: "Marvel Snap",
    description:
      "The fastest card battler in the multiverse. Build your deck with iconic Marvel heroes and villains, then clash in lightning-fast three-minute matches. With hundreds of cards to collect and evolving locations that shake up every game, Marvel Snap redefines mobile card gaming.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Marvel_Snap_cover_art.png",
    platforms: JSON.stringify(["PC", "iOS", "Android"]),
    genres: JSON.stringify(["Card Game", "Strategy"]),
    developer: "Second Dinner",
    publisher: "Nuverse",
    releaseDate: "2022-10-18T00:00:00.000Z",
    metacriticScore: 86,
    averageScore: 86,
  },
  {
    id: cuid(),
    slug: "zenless-zone-zero",
    title: "Zenless Zone Zero",
    description:
      "Dive into the stylish urban fantasy world of New Eridu in HoYoverse's fast-paced action RPG. Navigate the dangerous Hollows, build your team of unique Agents, and experience slick combat with flashy combos. Zenless Zone Zero brings a fresh aesthetic and adrenaline-pumping gameplay to mobile.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/b/bf/Zenless_Zone_Zero_cover_art.jpg",
    platforms: JSON.stringify(["PC", "PlayStation 5", "iOS", "Android"]),
    genres: JSON.stringify(["Action RPG", "Hack and Slash"]),
    developer: "HoYoverse",
    publisher: "HoYoverse",
    releaseDate: "2024-07-04T00:00:00.000Z",
    metacriticScore: 75,
    averageScore: 75,
  },
  {
    id: cuid(),
    slug: "afk-journey",
    title: "AFK Journey",
    description:
      "Explore a gorgeous open world in this strategic idle RPG. Collect and upgrade a diverse roster of heroes, engage in tactical battles, and progress even while offline. AFK Journey combines accessible gameplay with deep strategic elements, making it perfect for mobile gaming on the go.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/e/ed/AFK_Journey_cover.jpg",
    platforms: JSON.stringify(["PC", "iOS", "Android"]),
    genres: JSON.stringify(["Idle RPG", "Strategy"]),
    developer: "Lilith Games",
    publisher: "Lilith Games",
    releaseDate: "2024-03-27T00:00:00.000Z",
    metacriticScore: 76,
    averageScore: 76,
  },
];

const articles = [
  {
    id: cuid(),
    slug: "genshin-impact-natlan-expansion-brings-pyro-nation",
    title: "Genshin Impact's Natlan Expansion Brings the Pyro Nation to Life",
    content: `<p>miHoYo has officially launched the highly anticipated Natlan region in Genshin Impact, bringing players to the fiery homeland of the Pyro Archon. The expansion introduces an entirely new nation to Teyvat with volcanic landscapes, ancient ruins, and vibrant tribal cultures.</p>
<p>Natlan features several new gameplay mechanics including aerial combat, tribal reputation systems, and the Saurian companions that players can befriend and ride across the landscape. The region also introduces a new element resonance system that adds depth to team building.</p>
<p>Five new playable characters arrive with the update, each representing different tribes within Natlan. The expansion continues the Traveler's journey through the Archon Quest storyline, promising answers to long-standing mysteries about the world of Teyvat.</p>
<p>Players can also look forward to new artifact sets, weapons, and a challenging new boss encounter set within an active volcano. The update is available now across all platforms including iOS and Android.</p>`,
    summary:
      "The Natlan region brings volcanic landscapes, new characters, and aerial combat mechanics to Genshin Impact across all platforms.",
    category: "news",
    tags: JSON.stringify(["mobile", "genshin-impact", "update", "ios", "android"]),
    status: "published",
    publishedAt: "2026-03-28T10:00:00.000Z",
    gameId: games[0].id,
  },
  {
    id: cuid(),
    slug: "honkai-star-rail-version-3-brings-new-world",
    title: "Honkai: Star Rail Version 3.0 Opens an Entirely New World",
    content: `<p>HoYoverse has revealed details about Honkai: Star Rail's massive Version 3.0 update, which introduces an entirely new planet for the Trailblazer to explore. The update represents the largest content drop since the game's launch.</p>
<p>The new world features a civilization built around light and shadow mechanics, introducing puzzle elements and combat modifiers that react to the environment. Players will encounter new enemy factions and story chapters that delve deeper into the overarching Stellaron narrative.</p>
<p>Version 3.0 also brings a major overhaul to the game's Simulated Universe mode, adding new paths and blessings that expand strategic possibilities. The combat system receives quality-of-life improvements including auto-battle enhancements tailored for mobile players.</p>
<p>The update launches simultaneously on PC, PlayStation, iOS, and Android with cross-save support across all platforms.</p>`,
    summary:
      "HoYoverse announces the biggest content update yet for Honkai: Star Rail with a new planet, revamped Simulated Universe, and mobile-friendly improvements.",
    category: "news",
    tags: JSON.stringify(["mobile", "honkai-star-rail", "update", "ios", "android"]),
    status: "published",
    publishedAt: "2026-03-25T14:00:00.000Z",
    gameId: games[1].id,
  },
  {
    id: cuid(),
    slug: "marvel-snap-conquest-mode-overhaul",
    title: "Marvel Snap Overhauls Conquest Mode with Ranked Seasons",
    content: `<p>Second Dinner has announced a major overhaul to Marvel Snap's Conquest mode, introducing seasonal ranked tiers and exclusive card variants as rewards. The revamped system aims to give competitive players a more structured progression path.</p>
<p>The new ranked seasons run monthly and feature tiered rewards including unique card backs, avatars, and limited-edition card variants. Players climb through Bronze, Silver, Gold, and Cosmic tiers based on their win streaks and overall performance.</p>
<p>Alongside the Conquest changes, the update introduces Alliance features that let players form groups, share decks, and compete in weekly Alliance challenges. This social layer adds a new dimension to the mobile card battler.</p>
<p>The development team also confirmed that new locations and cards will continue to release on a regular schedule, with the next season themed around the Multiverse Saga.</p>`,
    summary:
      "Marvel Snap's Conquest mode gets seasonal ranked tiers, Alliance features, and exclusive rewards in a major competitive overhaul.",
    category: "news",
    tags: JSON.stringify(["mobile", "marvel-snap", "competitive", "ios", "android"]),
    status: "published",
    publishedAt: "2026-03-22T09:00:00.000Z",
    gameId: games[2].id,
  },
  {
    id: cuid(),
    slug: "best-mobile-games-spring-2026",
    title: "The Best Mobile Games to Play This Spring 2026",
    content: `<p>Spring 2026 is shaping up to be one of the strongest seasons for mobile gaming in years. From massive RPG updates to innovative new releases, there is something for every type of player on both iOS and Android.</p>
<p>Genshin Impact continues to dominate with its Natlan expansion, while Honkai: Star Rail's Version 3.0 brings an entirely new world to explore. Both titles offer console-quality experiences on mobile with full cross-platform support.</p>
<p>For card game fans, Marvel Snap remains the gold standard with its revamped Conquest mode and regular content updates. Meanwhile, Zenless Zone Zero has found its stride with stylish action combat that translates surprisingly well to touchscreen controls.</p>
<p>AFK Journey rounds out our recommendations for players who want a more relaxed experience. Its gorgeous open world and strategic idle mechanics make it perfect for gaming on the go. All five titles are free-to-play and available on both major mobile platforms.</p>`,
    summary:
      "Our picks for the top mobile games to play this spring, featuring major updates to fan favorites and exciting new releases.",
    category: "feature",
    tags: JSON.stringify(["mobile", "roundup", "ios", "android", "guide"]),
    status: "published",
    publishedAt: "2026-03-20T12:00:00.000Z",
  },
  {
    id: cuid(),
    slug: "zenless-zone-zero-mobile-performance-update",
    title: "Zenless Zone Zero Gets Major Mobile Performance Update",
    content: `<p>HoYoverse has rolled out a significant performance update for Zenless Zone Zero on mobile devices, addressing frame rate issues and reducing load times by up to 40 percent. The update targets both iOS and Android platforms.</p>
<p>Key improvements include a new dynamic resolution system that automatically adjusts image quality to maintain smooth frame rates during intense combat sequences. The update also introduces a battery-saving mode that reduces power consumption without significantly impacting visual quality.</p>
<p>Memory optimization work has reduced the game's RAM footprint, allowing it to run more smoothly on devices with 6GB of RAM or less. Players on older devices should notice fewer crashes and faster zone transitions.</p>
<p>The performance update arrives alongside new story content and two new playable Agents, giving mobile players even more reasons to jump into New Eridu. HoYoverse confirmed that mobile optimization will remain a priority for future updates.</p>`,
    summary:
      "HoYoverse delivers a major mobile optimization patch for Zenless Zone Zero with 40% faster load times and improved frame rates.",
    category: "news",
    tags: JSON.stringify(["mobile", "zenless-zone-zero", "performance", "ios", "android"]),
    status: "published",
    publishedAt: "2026-03-18T16:00:00.000Z",
    gameId: games[3].id,
  },
];

async function main() {
  console.log("Seeding mobile games...");

  for (const game of games) {
    // Check if game already exists by slug
    const existing = await client.execute({
      sql: `SELECT id FROM Game WHERE slug = ?`,
      args: [game.slug],
    });

    if (existing.rows.length > 0) {
      console.log(`  Skipping ${game.title} (already exists)`);
      // Update the gameId reference for articles
      const existingId = existing.rows[0].id as string;
      // Patch the game id so articles reference the right one
      game.id = existingId;
      continue;
    }

    await client.execute({
      sql: `INSERT INTO Game (id, slug, title, description, coverImage, screenshots, platforms, genres, developer, publisher, releaseDate, metacriticScore, averageScore, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, ?, '[]', ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        game.id,
        game.slug,
        game.title,
        game.description,
        game.coverImage,
        game.platforms,
        game.genres,
        game.developer,
        game.publisher,
        game.releaseDate,
        game.metacriticScore,
        game.averageScore,
        now,
        now,
      ],
    });
    console.log(`  Added: ${game.title}`);
  }

  console.log("\nSeeding mobile articles...");

  for (const article of articles) {
    const existing = await client.execute({
      sql: `SELECT id FROM Article WHERE slug = ?`,
      args: [article.slug],
    });

    if (existing.rows.length > 0) {
      console.log(`  Skipping: ${article.title} (already exists)`);
      continue;
    }

    await client.execute({
      sql: `INSERT INTO Article (id, slug, title, content, summary, category, tags, gameId, status, publishedAt, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        article.id,
        article.slug,
        article.title,
        article.content,
        article.summary,
        article.category,
        article.tags,
        article.gameId ?? null,
        article.status,
        article.publishedAt,
        now,
        now,
      ],
    });
    console.log(`  Added: ${article.title}`);
  }

  console.log("\nMobile content seeded successfully!");
}

main().catch(console.error);
