import "dotenv/config";
import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const now = new Date().toISOString();

async function main() {
  // Roblox article
  await db.execute({
    sql: `INSERT OR IGNORE INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      "art_roblox_2026q1",
      "roblox-4d-generation-ai-worlds-mobile-2026",
      "Roblox Launches 4D Generation: AI-Created Interactive Worlds Are Now Playable on Mobile",
      `<p>Roblox just took the biggest leap in its history. The platform has launched what it calls "4D generation" — an AI system powered by their Cube Foundation Model that lets creators and players generate fully interactive 3D objects in real-time. Cars, planes, buildings, entire game assets — all created from text prompts and immediately usable in live experiences.</p>
<p>But that is just the appetizer. In their internal research lab, Roblox has demonstrated "real-time dreaming" — the ability to generate fully playable video game worlds from text or image prompts. The system currently runs at 16fps at 832x480p internally, and while it is far from production-ready, the implications are staggering.</p>
<p>On the platform side, Roblox continues to evolve rapidly. Voice Chat now supports up to 100 users simultaneously, the Avatar Joint Upgrade has entered Phase 2, and a revamped Server Management system gives developers more control than ever. The engine now streams meshes and textures efficiently enough that even lower-end mobile devices can handle massive, high-fidelity worlds.</p>
<p>The numbers back up the momentum. New age-checked data reveals that 45% of daily active users have completed age verification, with 27% identified as over 18 — and the 18-34 cohort is growing at over 50% in the US. Roblox is not just a kids platform anymore.</p>
<p>With over 80 million daily active users and a creator economy that paid out over $900 million last year, Roblox remains the most important platform in mobile gaming. The 4D generation launch signals that they intend to stay there.</p>`,
      "Roblox launches 4D generation powered by AI, enabling real-time creation of interactive 3D objects on mobile.",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scj8k5.jpg",
      "mobile",
      "published",
      now,
      "[]",
      now,
      now,
    ],
  });
  console.log("Roblox article added");

  // Brawl Stars article
  await db.execute({
    sql: `INSERT OR IGNORE INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      "art_brawlstars_2026",
      "brawl-stars-100th-brawler-prestige-system-2026",
      "Brawl Stars Hits 100 Brawlers with Sirius and Overhauls Progression with the Prestige System",
      `<p>Supercell just dropped one of the biggest updates in Brawl Stars history. Update 66: PRESTIGE introduces the game-changing Prestige system, two new brawlers — including the milestone 100th character — and a Battle Royale mode that could reshape the competitive landscape entirely.</p>
<p>The star of the show is <strong>Sirius</strong>, Brawl Stars' 100th brawler and an Ultra Legendary Controller who can capture enemy shadows and control them. It is one of the most mechanically complex characters Supercell has ever designed, and early community reaction has been electric. Alongside Sirius, <strong>Najia</strong> arrives as a Mythic Damage Dealer who uses snakes to poison enemies through walls — a first for the game.</p>
<p><strong>Loaded Showdown</strong> is the new Battle Royale mode featuring power-ups, weapons, and vehicles. It takes the existing Showdown format and supercharges it with loot mechanics that add a layer of strategy previously missing from the mode.</p>
<p>But the most impactful change is the <strong>Prestige system</strong>. The old trophy reset — long a source of frustration for high-level players — is gone. Once you hit 1,000 trophies with a brawler, that floor is permanently saved. Matchmaking is now based on hidden MMR decoupled from trophies, which should lead to significantly fairer matches across all skill levels.</p>
<p>The March balance update has also shaken up the meta considerably. Bull and Emz received heavy nerfs, while Clancy got substantial buffs across the board. With the $2 million World Finals heading to Berlin this year, Brawl Stars competitive scene is bigger than ever.</p>`,
      "Brawl Stars Update 66 introduces the 100th brawler Sirius, the Prestige progression overhaul, and Loaded Showdown Battle Royale mode.",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sclmha.jpg",
      "mobile",
      "published",
      now,
      "[]",
      now,
      now,
    ],
  });
  console.log("Brawl Stars article added");
}

main().catch((e) => console.error(e));
