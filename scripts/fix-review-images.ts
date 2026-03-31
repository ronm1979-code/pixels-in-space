import "dotenv/config";
import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

async function main() {
  // ── Crimson Desert Review ──
  const cdScreenshots = [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3321460/669119c3747653f41a46c59f213168448d094e04/ss_669119c3747653f41a46c59f213168448d094e04.1920x1080.jpg?t=1774868383",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3321460/4b178bdd24ed576458116d8d3383b5352dad0fae/ss_4b178bdd24ed576458116d8d3383b5352dad0fae.1920x1080.jpg?t=1774868383",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3321460/55e514af688f459364b3d0ffb288faf73580c8e5/ss_55e514af688f459364b3d0ffb288faf73580c8e5.1920x1080.jpg?t=1774868383",
  ];

  await db.execute({
    sql: `UPDATE Review SET content = ? WHERE slug = 'crimson-desert-review'`,
    args: [`<p>Crimson Desert is one of the most visually stunning games ever made. Pearl Abyss has poured years of technical expertise into creating a world that genuinely takes your breath away — from the snow-capped peaks of northern Pywel to the sun-scorched deserts in the south, every frame looks like concept art come to life.</p>

<p>But a pretty world only gets you so far, and Crimson Desert stumbles in ways that keep it from greatness.</p>

<img src="${cdScreenshots[0]}" alt="Crimson Desert - The vast world of Pywel" />

<p>The combat is the clear highlight. Pearl Abyss has drawn from the best of the action genre — there are echoes of Monster Hunter in the large creature fights, God of War in the visceral melee, and even a touch of Sekiro in the precise parry timing. Every weapon class feels distinct, and the skill ceiling is high enough to keep experienced players engaged for dozens of hours.</p>

<img src="${cdScreenshots[1]}" alt="Crimson Desert - Intense combat encounters" />

<p>Where the game falters is its storytelling. Macduff's journey as a reluctant mercenary leader hits familiar beats, and the supporting cast rarely rises above archetype. The writing is serviceable but never surprising, and a handful of cringe-worthy dialogue moments break the otherwise serious tone.</p>

<p>The open world, while gorgeous, also suffers from the genre's most tired tropes. The map is dotted with repetitive camps, collectibles, and side activities that feel like they were designed by committee rather than inspiration. After the first ten hours, exploration becomes more obligation than excitement.</p>

<img src="${cdScreenshots[2]}" alt="Crimson Desert - Open world exploration" />

<p>Technical performance is solid on PS5 and Xbox Series X, though the PC version launched with some notable optimization issues that Pearl Abyss has been patching aggressively. Frame rate in dense cities can still dip on mid-range hardware.</p>

<p>Crimson Desert is a game at war with itself — a stunning technical achievement with genuinely excellent combat, held back by uninspired open-world design and a forgettable story. It's absolutely worth playing, but temper your expectations.</p>`],
  });
  console.log("✓ Crimson Desert review updated with inline screenshots");

  // ── Monster Hunter Stories 3 Review ──
  const mhScreenshots = [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2852190/22f24ca0e8bea75ba7a2bddb9cb23f77faf607de/ss_22f24ca0e8bea75ba7a2bddb9cb23f77faf607de.1920x1080.jpg",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2852190/02569c39d7ea1d7f5e68af1809e176b99f3d0ae6/ss_02569c39d7ea1d7f5e68af1809e176b99f3d0ae6.1920x1080.jpg",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2852190/c53ab3c8569ed41f6cb7fcecd3c4262173f94769/ss_c53ab3c8569ed41f6cb7fcecd3c4262173f94769.1920x1080.jpg",
  ];

  // Get current content to check
  const mhReview = await db.execute({ sql: "SELECT content FROM Review WHERE slug = 'monster-hunter-stories-3-twisted-reflection-review'", args: [] });
  if (mhReview.rows.length > 0) {
    const oldContent = mhReview.rows[0].content as string;
    const paragraphs = oldContent.split("</p>").filter(p => p.trim().length > 10);

    let newContent = "";
    for (let i = 0; i < paragraphs.length; i++) {
      newContent += paragraphs[i] + "</p>\n\n";
      // Insert screenshot after every 2 paragraphs
      if ((i + 1) % 2 === 0 && mhScreenshots[Math.floor(i / 2)]) {
        newContent += `<img src="${mhScreenshots[Math.floor(i / 2)]}" alt="Monster Hunter Stories 3: Twisted Reflection gameplay" />\n\n`;
      }
    }

    await db.execute({
      sql: "UPDATE Review SET content = ? WHERE slug = 'monster-hunter-stories-3-twisted-reflection-review'",
      args: [newContent],
    });
    console.log("✓ Monster Hunter Stories 3 review updated with inline screenshots");
  }

  // ── Slay the Spire 2 Review ──
  const stsScreenshots = [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/1a373a95229aab0cfd97f553ecbe86092364bb9c/ss_1a373a95229aab0cfd97f553ecbe86092364bb9c.1920x1080.jpg",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/f3af7cb9693b9c4b6a7555227db3fef943db3992/ss_f3af7cb9693b9c4b6a7555227db3fef943db3992.1920x1080.jpg",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/c3db69efd984ef012ae85c5b426663720152f0a4/ss_c3db69efd984ef012ae85c5b426663720152f0a4.1920x1080.jpg",
  ];

  const stsReview = await db.execute({ sql: "SELECT content FROM Review WHERE slug = 'slay-the-spire-2-review'", args: [] });
  if (stsReview.rows.length > 0) {
    const oldContent = stsReview.rows[0].content as string;
    const paragraphs = oldContent.split("</p>").filter(p => p.trim().length > 10);

    let newContent = "";
    for (let i = 0; i < paragraphs.length; i++) {
      newContent += paragraphs[i] + "</p>\n\n";
      if ((i + 1) % 2 === 0 && stsScreenshots[Math.floor(i / 2)]) {
        newContent += `<img src="${stsScreenshots[Math.floor(i / 2)]}" alt="Slay the Spire 2 gameplay" />\n\n`;
      }
    }

    await db.execute({
      sql: "UPDATE Review SET content = ? WHERE slug = 'slay-the-spire-2-review'",
      args: [newContent],
    });
    console.log("✓ Slay the Spire 2 review updated with inline screenshots");
  }
}

main().catch(e => { console.error(e); process.exit(1); });
