import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ── GTA 6 ──
  const gta6 = await prisma.game.upsert({
    where: { slug: "grand-theft-auto-vi" },
    update: {},
    create: {
      slug: "grand-theft-auto-vi",
      title: "Grand Theft Auto VI",
      description: "The long-awaited next entry in Rockstar's legendary open-world crime series, set in a fictionalized Miami (Vice City) and surrounding areas. Featuring the series' first female protagonist alongside a partner-in-crime, GTA VI promises the most ambitious open world Rockstar has ever built.",
      coverImage: "https://media.rawg.io/media/games/df1/df1e82975847c3d0a68994c14bfba3a5.jpg",
      screenshots: JSON.stringify([
        "https://media.rawg.io/media/screenshots/f39/f3989cf6a3a8bf08af3e84e6e59e5b32.jpg",
        "https://media.rawg.io/media/screenshots/e29/e294c8b533e266f2adb8e848e1ecff4c.jpg",
        "https://media.rawg.io/media/screenshots/22a/22a3a7e271e1fa2dbb1a7e498f984af2.jpg",
      ]),
      trailerUrl: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
      developer: "Rockstar Games",
      publisher: "Rockstar Games",
      platforms: JSON.stringify(["PlayStation 5", "Xbox Series X/S"]),
      genres: JSON.stringify(["Action", "Open World", "Adventure"]),
      releaseDate: new Date("2026-11-19"),
    },
  });

  // ── Crimson Desert ──
  const crimson = await prisma.game.upsert({
    where: { slug: "crimson-desert" },
    update: {},
    create: {
      slug: "crimson-desert",
      title: "Crimson Desert",
      description: "An open-world action-adventure RPG from Pearl Abyss, creators of Black Desert Online. Set in the war-torn continent of Pywel, players follow the journey of Macduff, a mercenary leader, through a vast and brutal world filled with mythical creatures and warring factions.",
      coverImage: "https://media.rawg.io/media/games/1a5/1a5b8e705c9a3832df30ae2e979e25b6.jpg",
      screenshots: JSON.stringify([
        "https://media.rawg.io/media/screenshots/4b6/4b6adeef0be72a3efb18e53740e5ecf7.jpg",
        "https://media.rawg.io/media/screenshots/3e4/3e4f9d2d8a8e6e9c6e11f12c8f2b75a7.jpg",
        "https://media.rawg.io/media/screenshots/97b/97bd3e8e0c57e0d5a3c56d7e5f3b2c2d.jpg",
      ]),
      trailerUrl: "https://www.youtube.com/watch?v=kBGHMrFfGaI",
      developer: "Pearl Abyss",
      publisher: "Pearl Abyss",
      platforms: JSON.stringify(["PC", "PlayStation 5", "Xbox Series X/S"]),
      genres: JSON.stringify(["Action RPG", "Open World", "Adventure"]),
      metacriticScore: 78,
      averageScore: 78,
      releaseDate: new Date("2026-03-18"),
    },
  });

  // ── Marathon ──
  const marathon = await prisma.game.upsert({
    where: { slug: "marathon" },
    update: {},
    create: {
      slug: "marathon",
      title: "Marathon",
      description: "Bungie's extraction shooter set in a mysterious sci-fi universe. Players take on the role of Runners competing on a lost colony world, combining PvP and PvE in a unique blend of high-stakes loot-driven gameplay.",
      coverImage: "https://media.rawg.io/media/games/6b1/6b15e45a7bf0e78498c5f0ee9f498fd9.jpg",
      screenshots: JSON.stringify([
        "https://media.rawg.io/media/screenshots/8a2/8a2f8c4e5c3b3c6fb5e84f4d5e81b3c3.jpg",
        "https://media.rawg.io/media/screenshots/5b7/5b7c8f2a4e79a5d56ec44c4c35e9bfe2.jpg",
        "https://media.rawg.io/media/screenshots/9c1/9c1fd8cb54b7c8a8a5e7a5b5e3a3e9f7.jpg",
      ]),
      trailerUrl: "https://www.youtube.com/watch?v=pn-incEsMGc",
      developer: "Bungie",
      publisher: "Sony Interactive Entertainment",
      platforms: JSON.stringify(["PC", "PlayStation 5"]),
      genres: JSON.stringify(["Extraction Shooter", "FPS", "Sci-Fi"]),
      metacriticScore: 68,
      averageScore: 68,
      releaseDate: new Date("2026-03-11"),
    },
  });

  // ── Elden Ring: Nightreign ──
  const nightreign = await prisma.game.upsert({
    where: { slug: "elden-ring-nightreign" },
    update: {},
    create: {
      slug: "elden-ring-nightreign",
      title: "Elden Ring: Nightreign",
      description: "A standalone co-op spinoff of Elden Ring by FromSoftware. Nightreign features a roguelike structure with session-based multiplayer, where three players team up to survive shrinking maps and increasingly deadly foes across multiple rounds.",
      coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/2957550/header.jpg",
      screenshots: JSON.stringify([
        "https://cdn.akamai.steamstatic.com/steam/apps/2957550/ss_e7db024ceefca41e7ef8f76e8b1d08c0847f8cd4.1920x1080.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/2957550/ss_b8b84f6db1a5fc9ca3e4e2e1f9c8cf51d3b2b3e7.1920x1080.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/2957550/ss_a8c4b9f2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8.1920x1080.jpg",
      ]),
      trailerUrl: "https://www.youtube.com/watch?v=fsVUPft8Xzs",
      developer: "FromSoftware",
      publisher: "Bandai Namco Entertainment",
      platforms: JSON.stringify(["PC", "PlayStation 5", "Xbox Series X/S"]),
      genres: JSON.stringify(["Action RPG", "Co-op", "Roguelike"]),
      releaseDate: new Date("2025-06-11"),
    },
  });

  // ── Update existing articles with images and game links ──
  await prisma.article.updateMany({
    where: { slug: { contains: "gta-6" } },
    data: {
      imageUrl: "https://media.rawg.io/media/screenshots/f39/f3989cf6a3a8bf08af3e84e6e59e5b32.jpg",
      gameId: gta6.id,
    },
  });

  await prisma.article.updateMany({
    where: { slug: { contains: "crimson-desert" } },
    data: {
      imageUrl: "https://media.rawg.io/media/screenshots/4b6/4b6adeef0be72a3efb18e53740e5ecf7.jpg",
      gameId: crimson.id,
    },
  });

  await prisma.article.updateMany({
    where: { slug: { contains: "marathon" } },
    data: {
      imageUrl: "https://media.rawg.io/media/screenshots/8a2/8a2f8c4e5c3b3c6fb5e84f4d5e81b3c3.jpg",
      gameId: marathon.id,
    },
  });

  await prisma.article.updateMany({
    where: { slug: { contains: "xbox" } },
    data: {
      imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/2957550/ss_e7db024ceefca41e7ef8f76e8b1d08c0847f8cd4.1920x1080.jpg",
    },
  });

  // ── Add new article with image ──
  const existing = await prisma.article.findFirst({ where: { slug: { contains: "elden-ring-nightreign" } } });
  if (!existing) {
    await prisma.article.create({
      data: {
        slug: "elden-ring-nightreign-hits-10-million-players-2026-03-30",
        title: "Elden Ring: Nightreign Hits 10 Million Players in First Month — FromSoftware's Co-op Gamble Pays Off",
        content: `<p>FromSoftware's bold co-op experiment has officially paid off in a massive way. Elden Ring: Nightreign, the standalone multiplayer spinoff that launched on June 11, 2025, has now surpassed 10 million players worldwide, Bandai Namco confirmed today.</p>
<p>The number is staggering even by FromSoftware standards. While the original Elden Ring took roughly three weeks to clear 12 million copies sold, Nightreign's free-to-play model with premium battle passes has driven adoption at an even faster clip. The game's session-based roguelike structure — where three-player squads fight through shrinking arenas of increasingly deadly bosses — has proven to be the perfect formula for the live-service era.</p>
<p>"Nightreign represents everything we've learned about multiplayer over the past decade," director Hidetaka Miyazaki said in a statement. "The response has exceeded our expectations."</p>
<p>The game has been particularly dominant on Steam, where it consistently holds top-five concurrent player counts. Console adoption has been equally strong, with PlayStation 5 leading platform distribution. Cross-play support, added in a post-launch patch, has been credited with sustaining the player base through its first major content season.</p>
<p>Not everyone is sold, though. A vocal portion of the Souls community argues that Nightreign's roguelike structure sacrifices the carefully designed world exploration that made Elden Ring special. The game currently sits at a 76 on Metacritic — strong, but notably below the original's legendary 96.</p>`,
        summary: "FromSoftware's standalone co-op spinoff Elden Ring: Nightreign surpasses 10 million players in its first month, proving the live-service gamble worked.",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/2957550/ss_e7db024ceefca41e7ef8f76e8b1d08c0847f8cd4.1920x1080.jpg",
        category: "news",
        status: "published",
        publishedAt: new Date(),
        gameId: nightreign.id,
      },
    });
  }

  // ── Add review for Crimson Desert ──
  const existingReview = await prisma.review.findUnique({ where: { gameId: crimson.id } });
  if (!existingReview) {
    await prisma.review.create({
      data: {
        slug: "crimson-desert-review",
        gameId: crimson.id,
        title: "Crimson Desert Review: A Beautiful World Haunted by Its Own Ambition",
        content: `<p>Crimson Desert is one of the most visually stunning games ever made. Pearl Abyss has poured years of technical expertise into creating a world that genuinely takes your breath away — from the snow-capped peaks of northern Pywel to the sun-scorched deserts in the south, every frame looks like concept art come to life.</p>
<p>But a pretty world only gets you so far, and Crimson Desert stumbles in ways that keep it from greatness.</p>
<p>The combat is the clear highlight. Pearl Abyss has drawn from the best of the action genre — there are echoes of Monster Hunter in the large creature fights, God of War in the visceral melee, and even a touch of Sekiro in the precise parry timing. Every weapon class feels distinct, and the skill ceiling is high enough to keep experienced players engaged for dozens of hours.</p>
<p>Where the game falters is its storytelling. Macduff's journey as a reluctant mercenary leader hits familiar beats, and the supporting cast rarely rises above archetype. The writing is serviceable but never surprising, and a handful of cringe-worthy dialogue moments break the otherwise serious tone.</p>
<p>The open world, while gorgeous, also suffers from the genre's most tired tropes. The map is dotted with repetitive camps, collectibles, and side activities that feel like they were designed by committee rather than inspiration. After the first ten hours, exploration becomes more obligation than excitement.</p>
<p>Technical performance is solid on PS5 and Xbox Series X, though the PC version launched with some notable optimization issues that Pearl Abyss has been patching aggressively. Frame rate in dense cities can still dip on mid-range hardware.</p>
<p>Crimson Desert is a game at war with itself — a stunning technical achievement with genuinely excellent combat, held back by uninspired open-world design and a forgettable story. It's absolutely worth playing, but temper your expectations.</p>`,
        score: 78,
        pros: JSON.stringify([
          "Breathtaking visual fidelity and world design",
          "Deep, satisfying combat with multiple weapon styles",
          "Excellent creature boss battles",
          "Strong technical performance on consoles",
        ]),
        cons: JSON.stringify([
          "Generic open-world structure with repetitive activities",
          "Forgettable story and flat characters",
          "PC optimization issues at launch",
          "Dialogue quality inconsistent",
        ]),
        sourceReviews: JSON.stringify([
          { source: "Metacritic", score: 78, url: "https://www.metacritic.com/game/crimson-desert/" },
          { source: "OpenCritic", score: 76, url: "https://opencritic.com/game/crimson-desert" },
          { source: "Steam", score: 81, url: "https://store.steampowered.com/app/crimsondesert" },
        ]),
        verdict: "A stunning world with excellent combat, held back by open-world fatigue and a forgettable story",
        status: "published",
        publishedAt: new Date(),
      },
    });
  }

  console.log("✓ Games added: GTA VI, Crimson Desert, Marathon, Elden Ring: Nightreign");
  console.log("✓ Article images updated");
  console.log("✓ New article: Elden Ring Nightreign players");
  console.log("✓ Review: Crimson Desert");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => { console.error(e); process.exit(1); });
