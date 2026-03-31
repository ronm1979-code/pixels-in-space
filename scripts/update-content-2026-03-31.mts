import { createClient } from "@libsql/client";

const db = createClient({
  url: "libsql://pixels-in-space-ronm055.aws-eu-west-1.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzQ5NTUxNzIsImlkIjoiMDE5ZDQzOTItMTQwMS03NTgxLWIwMzQtZGZiNzQ5ZmM5MGJmIiwicmlkIjoiY2M3NGU4OWQtNzMxZC00YzYzLTlhMDUtNjczYmI4ZTNmNGI0In0.7ovsSPQdphTQF4MsAybgFVsK-9wX6qIEkmmauLn3OQM6hJ4CPH9kl-fzND3Or0Dp16p7lLpkoHWmxW98pWV4DQ",
});

async function main() {
  const now = new Date().toISOString();

  // ─────────────────────────────────────────────────────────────────────────
  // GAME 1 — Fatal Frame II: Crimson Butterfly Remake
  // Steam App ID: 3920610
  // ─────────────────────────────────────────────────────────────────────────
  const fatalFrameId = "cluid" + (Date.now() + 1);
  await db.execute({
    sql: `INSERT OR IGNORE INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, releaseDate, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      fatalFrameId,
      "fatal-frame-ii-crimson-butterfly-remake",
      "Fatal Frame II: Crimson Butterfly Remake",
      "The classic Japanese horror adventure returns, fully remade from the ground up. Twin sisters Mio and Mayu stumble into the cursed All God's Village, where vengeful spirits roam the fog-shrouded paths. Armed only with the Camera Obscura, players must photograph wraiths to repel them — each snapshot a gamble between survival and damnation. Developer Team Ninja has rebuilt every system, from controls to audio to the hauntingly detailed environments, while preserving the soul-deep dread of the 2003 original.",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3920610/f0ca97688410ecb4effbde0b77431443a5172cf8/header.jpg?t=1774575080",
      JSON.stringify([
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3920610/68e510ced494f7509ae455214a614eec4342f6a9/ss_68e510ced494f7509ae455214a614eec4342f6a9.1920x1080.jpg?t=1774575080",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3920610/ba71132dbe943d81b63702f9dfcf3e8896e8a460/ss_ba71132dbe943d81b63702f9dfcf3e8896e8a460.1920x1080.jpg?t=1774575080",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3920610/4d21f1133228988650a1e69a2436ce83648a9144/ss_4d21f1133228988650a1e69a2436ce83648a9144.1920x1080.jpg?t=1774575080",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3920610/0fbab0308fee682020063a5a88453d585a1ab57e/ss_0fbab0308fee682020063a5a88453d585a1ab57e.1920x1080.jpg?t=1774575080",
      ]),
      "https://www.youtube.com/watch?v=nqgbZ_2puYw",
      "Team Ninja",
      "Koei Tecmo",
      JSON.stringify(["PC", "PS5", "Xbox Series X/S", "Switch 2"]),
      JSON.stringify(["Horror", "Adventure", "Survival Horror"]),
      73,
      "2026-03-12T00:00:00.000Z",
      now,
      now,
    ],
  });
  console.log("✓ Added Fatal Frame II: Crimson Butterfly Remake");

  // ─────────────────────────────────────────────────────────────────────────
  // GAME 2 — South of Midnight
  // Steam App ID: 1934570
  // ─────────────────────────────────────────────────────────────────────────
  const southOfMidnightId = "cluid" + (Date.now() + 2);
  await db.execute({
    sql: `INSERT OR IGNORE INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, releaseDate, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      southOfMidnightId,
      "south-of-midnight",
      "South of Midnight",
      "A spellbinding third-person action-adventure set in the American Deep South. When a hurricane tears apart Hazel's hometown of Prospero, she discovers an ancient power: the ability to weave the fabric of reality itself. Compulsion Games crafted a world soaked in Southern Gothic atmosphere, with a stunning stop-motion visual style and folklore creatures drawn straight from regional legend. Originally an Xbox and PC exclusive, the Weaver's Edition now arrives on PS5 and Switch 2, fully loaded with DualSense haptics and enhanced visuals.",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/header.jpg?t=1772820050",
      JSON.stringify([
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_40596f6708fcabef80fb7ef72c1b03e4134a3869.1920x1080.jpg?t=1772820050",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_d00b68da2754c5003dc01f73a62365bc8de03c1a.1920x1080.jpg?t=1772820050",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_103bb6df9ddfd8e93cbe28ad2066e4a2bfbce54e.1920x1080.jpg?t=1772820050",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_49c8bb3ebf011820f9069e91eaf2d346d65bda19.1920x1080.jpg?t=1772820050",
      ]),
      "https://www.youtube.com/watch?v=Q8fBFSuTfHk",
      "Compulsion Games",
      "Xbox Game Studios",
      JSON.stringify(["PC", "PS5", "Xbox Series X/S", "Switch 2"]),
      JSON.stringify(["Action", "Adventure", "Action-Adventure"]),
      84,
      "2025-04-08T00:00:00.000Z",
      now,
      now,
    ],
  });
  console.log("✓ Added South of Midnight");

  // ─────────────────────────────────────────────────────────────────────────
  // ARTICLE 1 — South of Midnight lands on PS5 and Switch 2 today
  // ─────────────────────────────────────────────────────────────────────────
  await new Promise((r) => setTimeout(r, 50));
  const art1Id = "clart" + (Date.now() + 1);
  await db.execute({
    sql: `INSERT OR IGNORE INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, gameId, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      art1Id,
      "south-of-midnight-ps5-switch2-launch-2026-03-31",
      "South of Midnight Arrives on PS5 and Switch 2 Today",
      `<p>After nearly a year as an Xbox and PC exclusive, Compulsion Games' acclaimed Southern Gothic adventure <em>South of Midnight</em> finally arrives on PlayStation 5 and Nintendo Switch 2 today, March 31, 2026. The release marks a significant moment for Microsoft's publishing strategy — this is the first Xbox Game Studios title to launch on the Switch 2.</p>
<p>The Weaver's Edition packs a considerable amount of bonus content alongside the base game: an art book, the haunting original soundtrack by Olivier Deriviere, a comic by Rob Guillory, a music video, and the <em>Weaving Hazel's Journey</em> director's cut documentary. For players who want everything, it's a generous package at $39.99.</p>
<p>On PS5, the team has gone all-in on DualSense integration. Haptic feedback fires through the controller every time Hazel pulls a thread of the Grand Tapestry, and the adaptive triggers push back against the resistance of her weaving magic. It's the kind of detail that makes a game feel custom-built for the hardware rather than a straight port. PS5 Pro owners get a further bump — higher internal resolutions and improved ray-traced reflections across Prospero's flooded streets.</p>
<p>Perhaps most interesting is the newly bundled Combat Skip toggle. Compulsion built the option in response to feedback that some players found the combat a barrier between them and the game's best qualities: its atmosphere, its gorgeous stop-motion-inspired art direction, and Deriviere's Grammy-shortlisted score. With the toggle on, encounters resolve automatically and the story flows uninterrupted — an unusually thoughtful accessibility addition.</p>
<p>The original April 2025 PC and Xbox release pulled a 94% positive rating on Steam across more than three thousand reviews. Critics praised its confident visual identity and emotionally resonant story, with some reservations about the combat's depth. Whether the PS5 audience responds with the same warmth will be worth watching — this is exactly the kind of mid-budget, artistically ambitious title that can find a second life on a new platform when word of mouth carries it forward.</p>`,
      "South of Midnight's Weaver's Edition drops on PS5 and Switch 2 today, bringing DualSense haptic support, enhanced visuals, and the first Xbox Game Studios game on Nintendo's new console.",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/header.jpg?t=1772820050",
      "news",
      "published",
      now,
      southOfMidnightId,
      JSON.stringify(["south-of-midnight", "ps5", "switch2", "xbox", "launch"]),
      now,
      now,
    ],
  });
  console.log("✓ Added article: South of Midnight PS5/Switch 2 launch");

  // ─────────────────────────────────────────────────────────────────────────
  // ARTICLE 2 — Fatal Frame II Remake review/launch
  // ─────────────────────────────────────────────────────────────────────────
  await new Promise((r) => setTimeout(r, 50));
  const art2Id = "clart" + (Date.now() + 2);
  await db.execute({
    sql: `INSERT OR IGNORE INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, gameId, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      art2Id,
      "fatal-frame-ii-crimson-butterfly-remake-launch-2026-03-31",
      "Fatal Frame II: Crimson Butterfly Remake Captures the Dread of the Original",
      `<p>When Team Ninja announced a full remake of <em>Fatal Frame II: Crimson Butterfly</em>, longtime fans of the series held their breath. The 2003 PlayStation 2 original is one of the most genuinely frightening games ever made, and remakes of beloved horror titles have a habit of sanding down the rough edges that made the originals so unsettling. Fortunately, what landed on March 12 is a careful, respectful rebuild that preserves the psychological weight of Mio and Mayu's ordeal.</p>
<p>The premise remains intact: the twin sisters wander into the abandoned All God's Village during a hike and find themselves trapped among the vengeful spirits of a community that met a terrible end. The Camera Obscura, the series' signature weapon, returns — you repel wraiths by photographing them, the shutter click both weapon and ritual. The tension of lining up a shot while a spirit closes the distance has lost none of its bite in the remake's updated control scheme.</p>
<p>Team Ninja rebuilt the village from scratch using modern rendering technology, and the results are striking. Candlelight flickers through paper screens, casting long shadows across tatami floors. The fog that rolls through the village at night isn't just atmospheric dressing — it obscures enemies until they're nearly on top of you, making each patrol through the outdoor areas an exercise in controlled paranoia.</p>
<p>A new mechanic lets players hold Mayu's hand during certain exploration sequences, and while it sounds like a minor addition, it deepens the emotional core of the story. The sisters' bond is what the original was always about beneath the scares, and this tactile reminder grounds the horror in something genuinely human.</p>
<p>Steam reception has been mixed — 73% positive from 665 reviews — with some criticism pointing to frame rate inconsistencies on certain configurations and a handful of technical issues at launch. Koei Tecmo has committed to patches in the coming weeks. For horror enthusiasts willing to look past the launch roughness, there's a faithfully terrifying experience waiting inside All God's Village.</p>`,
      "Team Ninja's full remake of the 2003 horror classic preserves the dread of the original while rebuilding every system — though some technical issues at launch have tempered the reception.",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3920610/f0ca97688410ecb4effbde0b77431443a5172cf8/header.jpg?t=1774575080",
      "news",
      "published",
      now,
      fatalFrameId,
      JSON.stringify(["fatal-frame", "horror", "remake", "team-ninja", "koei-tecmo"]),
      now,
      now,
    ],
  });
  console.log("✓ Added article: Fatal Frame II Remake launch");

  // ─────────────────────────────────────────────────────────────────────────
  // ARTICLE 3 — Epic Games layoffs and Fortnite engagement drop
  // (no associated game — use null gameId)
  // ─────────────────────────────────────────────────────────────────────────
  await new Promise((r) => setTimeout(r, 50));
  const art3Id = "clart" + (Date.now() + 3);
  await db.execute({
    sql: `INSERT OR IGNORE INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, gameId, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      art3Id,
      "epic-games-layoffs-fortnite-engagement-march-2026-03-31",
      "Epic Games Lays Off Over 1,000 Staff as Fortnite Engagement Slips",
      `<p>Epic Games confirmed this week that it is laying off more than 1,000 employees — the latest in a string of headcount reductions that have become a recurring feature of the games industry since 2023. In a message to staff, CEO Tim Sweeney attributed the cuts to a sustained decline in Fortnite engagement that began last year, describing the situation as a financial squeeze the company can no longer absorb through cost management alone.</p>
<p>Sweeney was direct about the pain of the announcement, saying he was "sorry we're here again" in a nod to an earlier round of layoffs in late 2023, when Epic cut roughly 900 positions. He was also clear about what the layoffs are not: unlike many workforce reductions circulating through the industry in early 2026, Epic's current situation has nothing to do with investments in AI tooling or automation, according to Sweeney's statement. The departing employees will receive at least four months of base pay in severance.</p>
<p>The scale of the cuts underscores how much of Epic's financial model depends on Fortnite's momentum. The battle royale phenomenon has been the engine powering everything from Unreal Engine development to the Epic Games Store's ongoing subsidies, and a prolonged dip in player engagement creates compounding pressure across the entire business. Fortnite's Chapter Six content cycle, which launched in late 2025, was reportedly expected to reverse the trend — it evidently hasn't moved the needle enough.</p>
<p>The games industry has shed tens of thousands of jobs over the past two years, with studios ranging from tiny independents to major console platform holders announcing reductions. Epic's situation is distinct in that the company is still privately held and has historically operated with significant runway, making this round of cuts a more pointed signal about where Fortnite engagement metrics actually sit. Third-party analysts estimate Fortnite's concurrent player counts are down somewhere between 20 and 30 percent from their 2023 peak, though Epic has never published its own figures.</p>
<p>What this means for Epic's publishing pipeline and ongoing Unreal Engine development commitments remains to be seen. Several announced titles developed on UE5 are in late production stages, and the industry will be watching to see whether any projects are delayed or cancelled in the coming months as a secondary consequence of the reductions.</p>`,
      "Epic Games has confirmed layoffs affecting over 1,000 staff, citing a prolonged decline in Fortnite engagement that has strained the company's finances.",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3321460/abd7dbdeaede8b6c9a6d40bf116ff2b883f2dd45/header.jpg?t=1774868383",
      "industry",
      "published",
      now,
      null,
      JSON.stringify(["epic-games", "layoffs", "fortnite", "industry", "business"]),
      now,
      now,
    ],
  });
  console.log("✓ Added article: Epic Games layoffs");

  // ─────────────────────────────────────────────────────────────────────────
  // ARTICLE 4 — GTA 6 confirmed for November, PC still TBD
  // ─────────────────────────────────────────────────────────────────────────
  await new Promise((r) => setTimeout(r, 50));
  const art4Id = "clart" + (Date.now() + 4);

  // Get the GTA VI game ID from DB
  const gtaResult = await db.execute(`SELECT id FROM Game WHERE slug = 'grand-theft-auto-vi' LIMIT 1`);
  const gtaGameId = gtaResult.rows.length > 0 ? String(gtaResult.rows[0].id) : null;

  await db.execute({
    sql: `INSERT OR IGNORE INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, gameId, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      art4Id,
      "gta-6-november-2026-console-confirmed-pc-tbd-2026-03-31",
      "GTA 6 Console Launch Locked for November — PC Release Still Has No Date",
      `<p>Rockstar Games has locked in a November 2026 release window for the console version of <em>Grand Theft Auto VI</em>, according to multiple sources tracking the game's development and marketing schedule. The confirmation — delivered through updated retail listings and a brief acknowledgement in Take-Two Interactive's investor guidance — ends months of speculation about whether the title might slip into 2027.</p>
<p>What remains conspicuously absent from any official communication is a PC release date. Rockstar has a well-established pattern of shipping its flagship titles on console first and then bringing them to PC months or years later — <em>GTA V</em> launched on PS3 and Xbox 360 in September 2013 and didn't arrive on PC until April 2015, nearly a year and a half later. Red Dead Redemption 2 followed a similar arc, with a PC release arriving thirteen months after its console debut. Given this history, PC players bracing for an extended wait are almost certainly correct to do so.</p>
<p>The console launch itself is expected to target PS5 and Xbox Series X/S simultaneously, though there has been ongoing speculation about whether Rockstar might explore any kind of exclusivity arrangement with Sony given the PlayStation platform's outsized contribution to GTA V's long-tail revenue. Nothing has been confirmed on that front, and Take-Two has a financial incentive to maximize the addressable audience from day one.</p>
<p>With the marketing machine not yet in full swing, much of what the public knows about GTA 6 still traces back to the December 2023 trailer that confirmed a return to Vice City, the introduction of a female protagonist named Lucia, and the promise of a world with unprecedented scale and density. A second trailer was shown behind closed doors to select press last autumn; those who attended have described the tone as simultaneously grander and more intimate than anything Rockstar has shipped before. Whether that translates to a generational moment or simply a very large open-world game will be one of gaming's defining questions of late 2026.</p>`,
      "GTA 6 is confirmed for a November 2026 console launch on PS5 and Xbox Series X/S, but Rockstar has yet to set a date for the PC version.",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3321460/669119c3747653f41a46c59f213168448d094e04/ss_669119c3747653f41a46c59f213168448d094e04.1920x1080.jpg?t=1774868383",
      "news",
      "published",
      now,
      gtaGameId,
      JSON.stringify(["gta-6", "rockstar", "grand-theft-auto", "pc", "ps5", "xbox"]),
      now,
      now,
    ],
  });
  console.log("✓ Added article: GTA 6 November console confirmed");

  // ─────────────────────────────────────────────────────────────────────────
  // REVIEW — Slay the Spire 2 (Early Access)
  // Game already in DB with slug 'slay-the-spire-2'
  // ─────────────────────────────────────────────────────────────────────────
  await new Promise((r) => setTimeout(r, 50));

  const stsResult = await db.execute(`SELECT id FROM Game WHERE slug = 'slay-the-spire-2' LIMIT 1`);
  const stsGameId = stsResult.rows.length > 0 ? String(stsResult.rows[0].id) : null;

  if (stsGameId) {
    const reviewId = "clrev" + Date.now();
    await db.execute({
      sql: `INSERT OR IGNORE INTO Review (id, slug, gameId, title, content, score, pros, cons, sourceReviews, verdict, status, publishedAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        reviewId,
        "slay-the-spire-2-review",
        stsGameId,
        "Slay the Spire 2 Review (Early Access) — The Spire Goes Higher",
        `<p>Mega Crit had an almost impossible task with <em>Slay the Spire 2</em>. The original is one of the most influential games of the last decade — a tight, endlessly replayable deckbuilder that essentially defined a genre and spawned hundreds of imitators. The sequel couldn't simply be more of the same, but straying too far would risk alienating the enormous community that has spent years mastering every card interaction. What Early Access month one reveals is a team that has found a genuinely clever answer to that dilemma.</p>
<p>The bones are familiar: you climb a procedurally generated spire, fight turn-based card battles against escalating enemies, collect relics that warp the rules of the game, and try to survive long enough to reach the act boss without watching your carefully assembled deck collapse. The five starting characters — Ironclad, Silent, and Defect return from the original, joined by newcomers the Necrobinder and the Regent — each play differently enough that you can run dozens of attempts without encountering the same strategic problems twice.</p>
<p>The new co-op mode is where things get genuinely interesting. Four players can climb the spire together, and the multiplayer-specific cards and relics introduce a layer of coordination that the solo game never needed. Choosing who takes which relic at a campfire or how to split defensive duties against a multi-hit boss creates the kind of moment-to-moment negotiation that makes co-op games feel alive. It's imperfect in Early Access — the pacing occasionally drags when one player is slower to make decisions — but the potential is obvious.</p>
<p>The alternate acts system is the other major structural addition. Certain paths through the spire branch into entirely different biomes with different enemy sets and environmental modifiers, meaningfully expanding build options beyond what the original offered. Cards that were situational in the first game become staples in specific alternate act runs, and vice versa. It rewards knowledge accumulation in ways that keep veteran players continuously learning.</p>
<p>As an Early Access product, it's remarkably solid. Crash rates are low, balance is — considering the complexity — surprisingly tight, and Mega Crit has already shipped one notable patch addressing community feedback from launch week. The studio estimates another year or two before a 1.0 release, which is a long runway, but the foundation already feels like something that earns its overwhelmingly positive reception.</p>`,
        90,
        JSON.stringify([
          "Five distinct characters with wildly different playstyles",
          "Co-op mode adds genuine strategic depth",
          "Alternate acts system expands replay variety significantly",
          "Overwhelmingly positive community reception — Early Access feels complete",
          "New card mechanics interact with old staples in surprising ways",
        ]),
        JSON.stringify([
          "Co-op pacing can drag when players deliberate",
          "Year-plus wait before full 1.0 release",
          "Some Alternate Act unlocks require significant playtime",
        ]),
        JSON.stringify([
          { source: "Steam User Reviews", score: 96, url: "https://store.steampowered.com/app/2868840/" },
          { source: "PC Gamer", score: 88, url: "https://www.pcgamer.com" },
        ]),
        "Slay the Spire 2's Early Access launch is one of the strongest in recent memory — a thoughtful sequel that expands the formula without losing what made the original essential. The co-op mode alone justifies the price of entry for anyone with reliable friends.",
        "published",
        now,
        now,
        now,
      ],
    });

    // Update average score
    await db.execute({
      sql: `UPDATE Game SET averageScore = ? WHERE id = ?`,
      args: [90, stsGameId],
    });
    console.log("✓ Added review: Slay the Spire 2");
  } else {
    console.log("⚠ Could not find Slay the Spire 2 in DB — skipping review");
  }

  console.log("\n✅ All done! Content update for 2026-03-31 complete.");
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
