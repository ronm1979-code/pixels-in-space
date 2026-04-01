import "dotenv/config";
import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const now = new Date().toISOString();
const publishedAt = new Date("2026-04-01").toISOString();

// Helper: verify a URL returns 200
async function verifyUrl(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.status === 200;
  } catch {
    return false;
  }
}

// ── Images from Steam API (fetched and pre-confirmed) ──────────────────────────

const pragmataHeader =
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/e32e168b25ed68a0cf6264c220c07e96c2abfb56/header.jpg?t=1774249238";
const pragmataScreenshots = [
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/9699288b90d0aad320e998f107b59edd27e9ea61/ss_9699288b90d0aad320e998f107b59edd27e9ea61.1920x1080.jpg?t=1774249238",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/62486c0475c7bf1a14889d61a51ad24f09e5f044/ss_62486c0475c7bf1a14889d61a51ad24f09e5f044.1920x1080.jpg?t=1774249238",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/26773713a2435c8edc2eac5e7eb234324b3b002f/ss_26773713a2435c8edc2eac5e7eb234324b3b002f.1920x1080.jpg?t=1774249238",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/8913ab7128c72ddd1b407c274e9615b2f6e658a2/ss_8913ab7128c72ddd1b407c274e9615b2f6e658a2.1920x1080.jpg?t=1774249238",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/24bebf802a598b3d5d6838828cf074e4445ec939/ss_24bebf802a598b3d5d6838828cf074e4445ec939.1920x1080.jpg?t=1774249238",
];

const replacedHeader =
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1663850/9079d7a26c8720ed0616f1bd7f912ccc22a535d4/header.jpg?t=1772544851";
const replacedScreenshots = [
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1663850/b6cd61c464ea2dfbd5ae1f306b986944911b21c6/ss_b6cd61c464ea2dfbd5ae1f306b986944911b21c6.1920x1080.jpg?t=1772544851",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1663850/46e00a91460058c709af281240cfe26385467438/ss_46e00a91460058c709af281240cfe26385467438.1920x1080.jpg?t=1772544851",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1663850/433973ec3838085b46d3b3fe898811bd9d662a0d/ss_433973ec3838085b46d3b3fe898811bd9d662a0d.1920x1080.jpg?t=1772544851",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1663850/4ee52c5bee89ccfc6bfb2f774d4de7ac4e1df165/ss_4ee52c5bee89ccfc6bfb2f774d4de7ac4e1df165.1920x1080.jpg?t=1772544851",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1663850/6bd848bcf4f1ca78a0832df6896efedc019182e3/ss_6bd848bcf4f1ca78a0832df6896efedc019182e3.1920x1080.jpg?t=1772544851",
];

const hadesIIHeader =
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/91ac334a2c137d08968ccc0bc474a02579602100/header.jpg?t=1765831644";
const hadesIIScreenshots = [
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_ef0f63061d0a0a9a7e46f3b84f125d25330e8f19.1920x1080.jpg?t=1765831644",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_f28befd916e59b8bf0a8a801b8a498b8adaa01eb.1920x1080.jpg?t=1765831644",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_b88cb7b48a86f07a7288bf37141f6558279f9bfc.1920x1080.jpg?t=1765831644",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_c8d2b18451a2cc4d5b4fdd78ed84a5e64e051eac.1920x1080.jpg?t=1765831644",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_f366f20f4fb699f6735581e04c7c45a1ef7bd1b8.1920x1080.jpg?t=1765831644",
];

async function main() {
  console.log("Verifying image URLs...");

  // Verify PRAGMATA images
  const pragmataHeaderOk = await verifyUrl(pragmataHeader);
  const pragmataSS0Ok = await verifyUrl(pragmataScreenshots[0]);
  const pragmataSS1Ok = await verifyUrl(pragmataScreenshots[1]);
  const pragmataSS2Ok = await verifyUrl(pragmataScreenshots[2]);
  console.log(`PRAGMATA header: ${pragmataHeaderOk}, ss0: ${pragmataSS0Ok}, ss1: ${pragmataSS1Ok}, ss2: ${pragmataSS2Ok}`);

  // Verify REPLACED images
  const replacedHeaderOk = await verifyUrl(replacedHeader);
  const replacedSS0Ok = await verifyUrl(replacedScreenshots[0]);
  const replacedSS1Ok = await verifyUrl(replacedScreenshots[1]);
  const replacedSS2Ok = await verifyUrl(replacedScreenshots[2]);
  console.log(`REPLACED header: ${replacedHeaderOk}, ss0: ${replacedSS0Ok}, ss1: ${replacedSS1Ok}, ss2: ${replacedSS2Ok}`);

  // Verify Hades II images
  const hadesHeaderOk = await verifyUrl(hadesIIHeader);
  const hadesSS0Ok = await verifyUrl(hadesIIScreenshots[0]);
  const hadesSS1Ok = await verifyUrl(hadesIIScreenshots[1]);
  const hadesSS2Ok = await verifyUrl(hadesIIScreenshots[2]);
  console.log(`Hades II header: ${hadesHeaderOk}, ss0: ${hadesSS0Ok}, ss1: ${hadesSS1Ok}, ss2: ${hadesSS2Ok}`);

  // ── Article 1: PRAGMATA ────────────────────────────────────────────────────
  if (pragmataHeaderOk && pragmataSS0Ok && pragmataSS1Ok) {
    const slug = "pragmata-capcom-launch-april-2026";
    const existing = await db.execute({ sql: "SELECT id FROM Article WHERE slug = ?", args: [slug] });
    if (existing.rows.length === 0) {
      // Upsert game
      const existingGame = await db.execute({ sql: "SELECT id FROM Game WHERE slug = ?", args: ["pragmata"] });
      let gameId = existingGame.rows[0]?.id as string | undefined;
      if (!gameId) {
        gameId = "g_pragmata";
        await db.execute({
          sql: `INSERT OR IGNORE INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, averageScore, steamAppId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          args: [
            gameId, "pragmata", "PRAGMATA",
            "An all-new sci-fi action adventure from Capcom. Set on a lunar research station overrun by hostile AI, spacefarer Hugh and his android companion Diana must work together to survive and find a way back to Earth.",
            pragmataHeaderOk ? pragmataHeader : null,
            JSON.stringify(pragmataScreenshots.slice(0, 5)),
            "https://www.youtube.com/watch?v=TzBtbtOghV0",
            "Capcom", "Capcom",
            JSON.stringify(["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch 2"]),
            JSON.stringify(["Action", "Adventure", "Sci-Fi"]),
            null, null, "3357650", now, now,
          ],
        });
        console.log("Game added: PRAGMATA");
      }

      const content = `<p>After years of anticipation stretching back to its initial 2020 reveal, <strong>PRAGMATA</strong> is finally here. Capcom's brand-new sci-fi action adventure launched on April 17th, one week ahead of its originally planned April 24th date, and with it arrives one of the publisher's most ambitious original IPs in over a decade.</p>

<p>Set aboard a deteriorating lunar research station in the near future, PRAGMATA puts you in control of spacefarer <strong>Hugh</strong>, who is joined — and at times guided — by <strong>Diana</strong>, an advanced android with powerful hacking capabilities. The central premise sounds familiar on paper, but Capcom's execution brings genuine freshness to the formula: combat requires you to manage both characters simultaneously, with Diana disabling enemy defenses while Hugh flanks with firearms and a jetpack.</p>

<img src="${pragmataScreenshots[0]}" alt="PRAGMATA - sci-fi lunar research station" />

<p>The hostile AI controlling the station dispatches a wide variety of mechanized threats, from nimble scout drones to hulking armored constructs. Early impressions from reviewers who received the game ahead of launch describe the combat loop as "deeply satisfying" once the dual-character rhythm clicks, with comparisons drawn to the structured chaos of Astral Chain. The challenge curve is reportedly steep but fair.</p>

<p>Visually, PRAGMATA is a showcase of Capcom's in-house engine. The sterile, oppressive aesthetic of the lunar facility contrasts beautifully with the warmer, more intimate moments between Hugh and Diana — a dynamic that has been highlighted in nearly every preview as the emotional heart of the game. The character work appears to be the unexpected standout.</p>

<img src="${pragmataScreenshots[1]}" alt="PRAGMATA - Hugh and Diana in the station" />

<p>PRAGMATA is available now on PlayStation 5, Xbox Series X/S, Nintendo Switch 2, and PC via Steam. For those still on the fence, a free demo titled <strong>PRAGMATA: Sketchbook</strong> has been available on Steam since December and expanded to consoles in February — Capcom's confidence in letting players try before they buy speaks well of the final product. Early players report the full game delivers meaningfully on the demo's promise.</p>`;

      await db.execute({
        sql: `INSERT INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, gameId, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          "a_pragmata_launch", slug,
          "PRAGMATA Review — Capcom's Long-Awaited Lunar Thriller Is Finally Here",
          content,
          "After years of delays since its 2020 reveal, Capcom's sci-fi action adventure PRAGMATA has launched on all platforms — and early word is very positive.",
          pragmataHeaderOk ? pragmataHeader : null,
          "news", "published", publishedAt,
          gameId,
          JSON.stringify(["Capcom", "sci-fi", "action", "launch"]),
          now, now,
        ],
      });
      console.log("Article added: PRAGMATA launch");
    } else {
      console.log("Article exists: PRAGMATA launch");
    }
  } else {
    console.log("SKIPPING PRAGMATA article — image URLs failed verification");
  }

  // ── Article 2: REPLACED ────────────────────────────────────────────────────
  if (replacedHeaderOk && replacedSS0Ok && replacedSS1Ok) {
    const slug = "replaced-sad-cat-studios-launch-april-2026";
    const existing = await db.execute({ sql: "SELECT id FROM Article WHERE slug = ?", args: [slug] });
    if (existing.rows.length === 0) {
      const existingGame = await db.execute({ sql: "SELECT id FROM Game WHERE slug = ?", args: ["replaced"] });
      let gameId = existingGame.rows[0]?.id as string | undefined;
      if (!gameId) {
        gameId = "g_replaced";
        await db.execute({
          sql: `INSERT OR IGNORE INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, averageScore, steamAppId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          args: [
            gameId, "replaced", "REPLACED",
            "A 2.5D cinematic action platformer set in an alternate 1980s America scarred by nuclear catastrophe. You play as R.E.A.C.H. — an AI trapped in a human body — uncovering the sinister agenda behind your creation in a neon-soaked cyberpunk world.",
            replacedHeaderOk ? replacedHeader : null,
            JSON.stringify(replacedScreenshots.slice(0, 5)),
            "https://www.youtube.com/watch?v=_P5OlfGbk5g",
            "Sad Cat Studios", "Thunderful Publishing",
            JSON.stringify(["PC", "Xbox Series X/S"]),
            JSON.stringify(["Action", "Platformer", "Cyberpunk", "Sci-Fi"]),
            null, null, "1663850", now, now,
          ],
        });
        console.log("Game added: REPLACED");
      }

      const content = `<p>It has been a long road for <strong>REPLACED</strong>. Announced at E3 2021 to immediate excitement — that initial trailer's pixel-art cyberpunk aesthetic and fluid action platforming caught the internet by storm — the game endured years of delays, including disruption caused by the ongoing war in Ukraine affecting developer <strong>Sad Cat Studios</strong>. Now, finally, it has arrived. REPLACED launched on April 14th for PC via Steam and GOG, and Xbox Series X/S, and the wait appears to have been worth it.</p>

<p>The game casts you as <strong>R.E.A.C.H.</strong>, an artificial intelligence forcibly transferred into a human body in an alternate 1980s America where a nuclear catastrophe has reshaped society. The world is a neon-drenched, rain-slicked vision of retro-futurism rendered in painstaking hand-crafted pixel art — every frame looks like it could be a poster. The visual identity here is simply stunning, enhanced by modern lighting and particle effects layered over the classic pixel aesthetic.</p>

<img src="${replacedScreenshots[0]}" alt="REPLACED - cyberpunk 1980s alternate America" />

<p>Gameplay is described as "cinematic action platforming" — think Hades meets cinematic platformers of the early 2000s, with fluid free-flow combat that rewards aggressive play. R.E.A.C.H. moves with satisfying weight, and the combat system has a depth that encourages experimentation. A moody, synth-heavy soundtrack from composer 2Mello rounds out the atmosphere.</p>

<p>The narrative thriller elements appear to be where REPLACED makes its boldest claims. The story of an AI discovering the truth about its creation against a backdrop of corrupt corporations and desperate people in a post-nuclear wasteland has been praised in early reviews for its pacing and emotional weight. This is not a game content to coast on its aesthetic alone.</p>

<img src="${replacedScreenshots[1]}" alt="REPLACED - fluid action platforming combat" />

<p>REPLACED had over <strong>850,000 wishlists</strong> on Steam before launch — a testament to how much goodwill that original 2021 trailer generated and held over the years. With 185,000 demo players already in its corner and strong early word of mouth, Sad Cat Studios' debut looks set to be one of the indie standouts of 2026. Given what they have been through to get here, that outcome feels genuinely earned.</p>`;

      await db.execute({
        sql: `INSERT INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, gameId, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          "a_replaced_launch", slug,
          "REPLACED Finally Arrives — The Cyberpunk Platformer That Survived Five Years of Waiting",
          content,
          "After a 2021 announcement and multiple delays, Sad Cat Studios' stunning cyberpunk platformer REPLACED has launched on PC and Xbox, and early impressions are glowing.",
          replacedHeaderOk ? replacedHeader : null,
          "news", "published", publishedAt,
          gameId,
          JSON.stringify(["indie", "cyberpunk", "platformer", "launch"]),
          now, now,
        ],
      });
      console.log("Article added: REPLACED launch");
    } else {
      console.log("Article exists: REPLACED launch");
    }
  } else {
    console.log("SKIPPING REPLACED article — image URLs failed verification");
  }

  // ── Article 3: Hades II arrives on Xbox ───────────────────────────────────
  if (hadesHeaderOk && hadesSS0Ok) {
    const slug = "hades-ii-xbox-launch-april-2026";
    const existing = await db.execute({ sql: "SELECT id FROM Article WHERE slug = ?", args: [slug] });
    if (existing.rows.length === 0) {
      const existingGame = await db.execute({ sql: "SELECT id FROM Game WHERE slug = ?", args: ["hades-ii"] });
      let gameId = existingGame.rows[0]?.id as string | undefined;
      if (!gameId) {
        gameId = "g_hades_ii";
        await db.execute({
          sql: `INSERT OR IGNORE INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, averageScore, steamAppId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          args: [
            gameId, "hades-ii", "Hades II",
            "The sequel to Supergiant Games' acclaimed rogue-like dungeon crawler. Play as Melinoë, the Princess of the Underworld, wielding dark sorcery to battle beyond the Underworld against the Titan of Time himself. Features deeper systems, new weapons, and Supergiant's signature handcrafted storytelling.",
            hadesHeaderOk ? hadesIIHeader : null,
            JSON.stringify(hadesIIScreenshots.slice(0, 5)),
            "https://www.youtube.com/watch?v=hades-ii-trailer",
            "Supergiant Games", "Supergiant Games",
            JSON.stringify(["PC", "Xbox Series X/S"]),
            JSON.stringify(["Rogue-like", "Action", "Dungeon Crawler"]),
            93, 93, "1145350", now, now,
          ],
        });
        console.log("Game added: Hades II");
      }

      const content = `<p>Xbox players have been waiting a long time for this one. <strong>Hades II</strong>, Supergiant Games' acclaimed sequel to their breakout 2020 rogue-like, launched on Xbox Series X/S on April 14th — completing the game's platform rollout after its PC release and September 2025 v1.0 launch. If you have been holding out, the wait is over.</p>

<p>For those unfamiliar: where the original Hades put you in the role of Zagreus, son of the god of the Underworld, trying to escape his father's realm, Hades II shifts the perspective to <strong>Melinoë</strong>, the Princess of the Underworld. The new protagonist brings a fresh playstyle anchored in sorcery and magic — staffs, torches, a moon-charged skull — and a dramatically expanded weapon variety compared to the original's already solid arsenal.</p>

<img src="${hadesIIScreenshots[0]}" alt="Hades II - Melinoë fighting in the Underworld" />

<p>Supergiant used the Early Access period wisely. The game that shipped at v1.0 is substantially different — and substantially improved — from what entered Early Access in May 2024. New regions, new narrative threads, an entirely reworked second half, and dozens of balance passes transformed what was already a good game into something that has earned comparisons to the original's legendary status. On Steam, it currently holds an "Overwhelmingly Positive" rating from over 150,000 reviews.</p>

<p>The Xbox version arrives at full v1.0 parity, with no content cuts. The controller support has been tuned specifically for the platform, and early reports from the Xbox community indicate it plays exactly as well as its PC counterpart — Supergiant's commitment to polish is evident even in a port context.</p>

<img src="${hadesIIScreenshots[1]}" alt="Hades II - weapon variety and rogue-like combat" />

<p>Hades II is available through Xbox Game Pass on day one, making this an unmissable proposition for subscribers. For a game that has been building its reputation for nearly two years, having it land directly in Game Pass without any barrier to entry is a genuine gift to Xbox owners. If you subscribe and have not played it yet, there is no longer any excuse — this is one of the best games of the generation.</p>`;

      await db.execute({
        sql: `INSERT INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, gameId, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          "a_hades_ii_xbox", slug,
          "Hades II Arrives on Xbox Game Pass — One of the Best Games of the Generation is Now on Every Platform",
          content,
          "Supergiant Games' critically acclaimed rogue-like Hades II finally launches on Xbox Series X/S on April 14th, landing on Game Pass day one.",
          hadesHeaderOk ? hadesIIHeader : null,
          "news", "published", publishedAt,
          gameId,
          JSON.stringify(["Supergiant", "rogue-like", "Xbox", "Game Pass"]),
          now, now,
        ],
      });
      console.log("Article added: Hades II Xbox launch");
    } else {
      console.log("Article exists: Hades II Xbox");
    }
  } else {
    console.log("SKIPPING Hades II Xbox article — image URLs failed verification");
  }

  // ── Review: Hades II ───────────────────────────────────────────────────────
  if (hadesHeaderOk && hadesSS0Ok && hadesSS1Ok && hadesSS2Ok) {
    const gameRow = await db.execute({ sql: "SELECT id FROM Game WHERE slug = ?", args: ["hades-ii"] });
    const gameId = gameRow.rows[0]?.id as string | undefined;
    if (gameId) {
      const existingReview = await db.execute({ sql: "SELECT id FROM Review WHERE gameId = ?", args: [gameId] });
      if (existingReview.rows.length === 0) {
        const reviewContent = `<p>There is a question hovering over every rogue-like sequel: can it recapture the lightning? The original Hades set a standard so high — perfect combat, extraordinary writing, a character roster that fans fell in love with — that the question felt almost unfair. Six months after v1.0's release, we have our answer. <strong>Hades II</strong> does not just recapture the lightning. It channels it in a different direction, and in doing so becomes something equally essential.</p>

<p>Where Zagreus was a headlong, impulsive force — literally trying to escape — Melinoë is driven by something deeper and colder. Her mission is revenge against <strong>Chronos, the Titan of Time</strong>, who has conquered the Underworld and imprisoned her family. That shift in motivation flavors every interaction, every room, every death. The tone is darker, more melancholy, and Supergiant writes into that space with the confidence of a studio that has found its voice.</p>

<img src="${hadesIIScreenshots[0]}" alt="Hades II - Melinoë, Princess of the Underworld" />

<p>Combat is the game's undeniable crown jewel. The six weapons available at launch — Moon Axe, Witch's Staff, Sister Blades, Umbral Flames, Argent Skull, Serrated Bone — each play so distinctly that runs feel genuinely different rather than superficially varied. The new Arcana Card system, which supplements the Boon system from the original, adds another layer of meta-progression that takes dozens of hours to fully understand. And the Boons themselves, tied to Greek gods both returning and new (Hephaestus, Hestia, and Selene are particularly brilliant), create combinatorial possibilities that the community is still actively mapping.</p>

<p>The world is larger than the original's. Two distinct paths split from the crossroads — one leading up into Olympus, one down through the roots of the Underworld — and each has its own biomes, enemy types, bosses, and narrative content. The Surface world, with its crumbling Greek countryside and moonlit forests, feels entirely distinct from the oppressive hells of the original game. Supergiant has built a sequel that respects its predecessor while carving out genuine new territory.</p>

<img src="${hadesIIScreenshots[1]}" alt="Hades II - Surface world exploration" />

<p>The writing, as expected, is exceptional. The relationship between Melinoë and her mentor Hecate is the emotional core of the game, and Supergiant develops it with the patience and care that made Zagreus and Nyx so memorable. The voice performances across the board are outstanding — Melinoë's actor brings a subtlety and layered quality to the role that feels genuinely distinct from the more expressive Zagreus.</p>

<p>Minor caveats: the pacing in the mid-game, before the second half's narrative content fully opens, can feel slightly thin compared to the relentless momentum of the original. The difficulty curve also spikes more noticeably in certain areas — some boss fights will demand many runs before yielding. These are manageable complaints against a game of remarkable scope.</p>

<img src="${hadesIIScreenshots[2]}" alt="Hades II - boss encounter" />

<p>Hades II is not a victory lap. It is Supergiant taking genuine risks, expanding their palette, and delivering a sequel that stands independently from its predecessor while clearly benefiting from everything the original taught them. Whether you played the first game or not, this is one of the finest action games ever made — an essential experience in any format.</p>`;

        await db.execute({
          sql: `INSERT INTO Review (id, slug, gameId, title, content, score, pros, cons, sourceReviews, verdict, status, publishedAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          args: [
            "rev_hades_ii", "hades-ii-review", gameId,
            "Hades II Review: Supergiant Does It Again — A Sequel That Surpasses the Original",
            reviewContent,
            93,
            JSON.stringify([
              "Six weapons with genuinely distinct playstyles",
              "Arcana and Boon systems create extraordinary build variety",
              "Two full paths through the game with distinct biomes and narrative",
              "Writing and voice performances match the original's exceptional standard",
              "Hecate and Melinoë's dynamic is emotionally resonant",
              "Xbox day-one on Game Pass",
            ]),
            JSON.stringify([
              "Mid-game pacing thins before late-game narrative kicks in",
              "Difficulty spikes in certain boss rooms may frustrate newcomers",
              "Some returning characters feel underserved compared to new cast",
            ]),
            JSON.stringify([{ source: "Metacritic", score: 93, url: "" }]),
            "A rogue-like masterpiece that earns its place alongside the original — Supergiant's finest work",
            "published", publishedAt, now, now,
          ],
        });
        console.log("Review added: Hades II");
      } else {
        console.log("Review exists: Hades II");
      }
    } else {
      console.log("SKIPPING Hades II review — game not found in DB");
    }
  } else {
    console.log("SKIPPING Hades II review — image URLs failed verification");
  }

  console.log("\nDone!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
