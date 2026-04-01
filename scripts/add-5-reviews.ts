import "dotenv/config";
import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const now = new Date().toISOString();

const games = [
  {
    id: "g_re_requiem",
    slug: "resident-evil-requiem",
    title: "Resident Evil Requiem",
    description: "The latest entry in Capcom's legendary survival horror franchise. Resident Evil Requiem returns to the series' roots with a terrifying new chapter that blends classic tension with modern gameplay innovations.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/08af4e9398b8e45152bfbedce3bc24d22e2c0990/ss_08af4e9398b8e45152bfbedce3bc24d22e2c0990.1920x1080.jpg?t=1772587704",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/08af4e9398b8e45152bfbedce3bc24d22e2c0990/ss_08af4e9398b8e45152bfbedce3bc24d22e2c0990.1920x1080.jpg?t=1772587704",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/4921eb5fb45f6b7a3b62195e47c6d7b4175935a8/ss_4921eb5fb45f6b7a3b62195e47c6d7b4175935a8.1920x1080.jpg?t=1772587704",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/e7b791b703759aebe774b813eb29a364008552b8/ss_e7b791b703759aebe774b813eb29a364008552b8.1920x1080.jpg?t=1772587704",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/bbe5c4e0ba4fc551d9389cf2411c2cefe413af1d/ss_bbe5c4e0ba4fc551d9389cf2411c2cefe413af1d.1920x1080.jpg?t=1772587704",
    ],
    developer: "Capcom",
    publisher: "Capcom",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    genres: ["Survival Horror", "Action", "Third Person"],
    metacriticScore: 92,
    score: 91,
    trailerUrl: "https://www.youtube.com/watch?v=resident-evil-requiem",
    steamAppId: "3764200",
    review: {
      title: "Resident Evil Requiem Review: The King of Horror Reclaims Its Throne",
      verdict: "A masterclass in survival horror that sets a new standard for the genre",
      pros: ["Terrifying atmosphere that never lets up", "Brilliant level design with interconnected areas", "Combat that perfectly balances power and vulnerability", "RE Engine delivers the best visuals in the series"],
      cons: ["Final act rushes the pacing", "Some puzzle solutions feel obtuse", "New Game+ lacks meaningful additions"],
      content: `<p>Capcom has done it again. Resident Evil Requiem is not just the best Resident Evil game in years — it might be the best survival horror game ever made. That is not a statement made lightly, but after 25 hours of white-knuckle tension, it feels earned.</p>

<p>Requiem drops players into a decaying European village that feels like it was ripped from a nightmare. Every shadow hides something, every creaking door could be your last, and the game never lets you forget that you are prey, not predator.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/08af4e9398b8e45152bfbedce3bc24d22e2c0990/ss_08af4e9398b8e45152bfbedce3bc24d22e2c0990.1920x1080.jpg?t=1772587704" alt="Resident Evil Requiem - atmospheric horror" />

<p>The level design is the real star. Capcom has built an interconnected world that rewards exploration while punishing carelessness. Shortcuts open up as you progress, resources are scarce enough to create genuine tension, and the enemy placement is diabolically clever.</p>

<p>Combat walks a razor-thin line between empowerment and desperation. Ammo is precious, healing items are rare, and every encounter forces you to make difficult decisions about fight or flight. Boss encounters are spectacular set pieces that test everything you have learned.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/4921eb5fb45f6b7a3b62195e47c6d7b4175935a8/ss_4921eb5fb45f6b7a3b62195e47c6d7b4175935a8.1920x1080.jpg?t=1772587704" alt="Resident Evil Requiem - combat" />

<p>The RE Engine continues to push boundaries. Character models are eerily lifelike, lighting creates atmosphere that no other engine matches, and the creature designs are genuinely disturbing. This is the best-looking horror game ever released.</p>

<p>Where Requiem stumbles is its final act, which accelerates the pacing in a way that undermines the slow-burn tension of the first two-thirds. Some puzzles also rely on obscure logic that can halt momentum. These are minor complaints against an otherwise exceptional experience.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/e7b791b703759aebe774b813eb29a364008552b8/ss_e7b791b703759aebe774b813eb29a364008552b8.1920x1080.jpg?t=1772587704" alt="Resident Evil Requiem - exploration" />

<p>Resident Evil Requiem is a triumph. It proves that Capcom understands what makes horror work — not jump scares, but the slow, creeping dread of knowing something terrible is always just around the corner.</p>`,
    },
  },
  {
    id: "g_dq7",
    slug: "dragon-quest-vii-reimagined",
    title: "Dragon Quest VII Reimagined",
    description: "A stunning reimagining of the classic JRPG with gorgeous diorama-style visuals, modernized gameplay, and a streamlined story that brings the beloved adventure to a new generation.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2499860/61ecb8567de5ab0392bd229ffad5dec14eb29279/ss_61ecb8567de5ab0392bd229ffad5dec14eb29279.1920x1080.jpg?t=1772804835",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2499860/61ecb8567de5ab0392bd229ffad5dec14eb29279/ss_61ecb8567de5ab0392bd229ffad5dec14eb29279.1920x1080.jpg?t=1772804835",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2499860/c03aa2077121ddeddfc38e0aae8b09fc605ca27d/ss_c03aa2077121ddeddfc38e0aae8b09fc605ca27d.1920x1080.jpg?t=1772804835",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2499860/1bb508b4bcee269585dceab857df7feab4462d87/ss_1bb508b4bcee269585dceab857df7feab4462d87.1920x1080.jpg?t=1772804835",
    ],
    developer: "Square Enix",
    publisher: "Square Enix",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
    genres: ["JRPG", "Turn-Based", "Adventure"],
    metacriticScore: 83,
    score: 84,
    steamAppId: "2499860",
    trailerUrl: "https://www.youtube.com/watch?v=dragon-quest-vii",
    review: {
      title: "Dragon Quest VII Reimagined Review: A Classic Reborn with Charm to Spare",
      verdict: "A lovingly crafted reimagining that makes one of the series' most ambitious entries finally accessible",
      pros: ["Gorgeous diorama-style art direction", "Streamlined pacing fixes the original's slow start", "Deep class system remains addictive", "Excellent quality-of-life improvements"],
      cons: ["Story can still drag in the middle chapters", "Some modernization feels surface-level", "Turn-based combat may feel dated to some"],
      content: `<p>Dragon Quest VII was always the black sheep of the franchise — a massive, sprawling adventure buried under a notoriously slow opening and punishing length. Square Enix's Reimagined version finally gives this ambitious game the presentation it deserves.</p>

<p>The first thing you will notice is the art style. The diorama-inspired visuals transform every location into a miniature world that feels handcrafted with love. Towns look like elaborate toy sets, dungeons feel like peering into a shadow box, and the effect is utterly charming.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2499860/61ecb8567de5ab0392bd229ffad5dec14eb29279/ss_61ecb8567de5ab0392bd229ffad5dec14eb29279.1920x1080.jpg?t=1772804835" alt="Dragon Quest VII Reimagined - diorama visuals" />

<p>The original's biggest flaw — a four-hour opening before the first battle — has been dramatically trimmed. You are now fighting within the first hour, and the pacing improvements continue throughout. Side content that was previously mandatory is now optional, respecting the player's time.</p>

<p>The class system remains the game's crown jewel. With dozens of vocations to master and abilities to mix and match, party building is endlessly satisfying. The Reimagined version adds a few new classes and rebalances old ones, making experimentation even more rewarding.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2499860/c03aa2077121ddeddfc38e0aae8b09fc605ca27d/ss_c03aa2077121ddeddfc38e0aae8b09fc605ca27d.1920x1080.jpg?t=1772804835" alt="Dragon Quest VII Reimagined - class system" />

<p>Combat is classic turn-based Dragon Quest — reliable, strategic, and comforting. Some players may wish for more modern battle mechanics, but there is an undeniable charm to the formula, especially with the new speed options and auto-battle for easier encounters.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2499860/1bb508b4bcee269585dceab857df7feab4462d87/ss_1bb508b4bcee269585dceab857df7feab4462d87.1920x1080.jpg?t=1772804835" alt="Dragon Quest VII Reimagined - exploration" />

<p>Dragon Quest VII Reimagined is a love letter to JRPG fans and newcomers alike. It transforms one of the genre's most daunting entries into something genuinely inviting, all while preserving the heart that made the original special.</p>`,
    },
  },
  {
    id: "g_demon_tides",
    slug: "demon-tides",
    title: "Demon Tides",
    description: "A vibrant open-world 3D platformer set across magical islands filled with secrets, challenges, and charm. Explore, collect, and master movement in one of the year's most surprising hits.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2585890/ss_f64e5b360422d5beb1c525a078b36a5cb2c8ee83.1920x1080.jpg?t=1774623815",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2585890/ss_f64e5b360422d5beb1c525a078b36a5cb2c8ee83.1920x1080.jpg?t=1774623815",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2585890/ss_27746a84e41bf81788604bfeafca8a2e88ae62be.1920x1080.jpg?t=1774623815",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2585890/ss_2099fb5d3c2f6ce88688abb74ca70fa7a2329989.1920x1080.jpg?t=1774623815",
    ],
    developer: "Fabraz",
    publisher: "Fabraz",
    platforms: ["PC"],
    genres: ["3D Platformer", "Open World", "Adventure"],
    metacriticScore: 84,
    score: 86,
    steamAppId: "2585890",
    trailerUrl: "https://www.youtube.com/watch?v=demon-tides",
    review: {
      title: "Demon Tides Review: The 3D Platformer Renaissance Continues",
      verdict: "A joyful, inventive platformer that stands proudly alongside the genre's best",
      pros: ["Exceptional movement mechanics with deep skill ceiling", "Beautiful, colorful world design", "Generous amount of content and secrets", "Tight controls that feel incredible"],
      cons: ["Camera can struggle in tight spaces", "Some collectibles feel like padding", "Story is forgettable"],
      content: `<p>In a year already stacked with big releases, Demon Tides might be the most purely fun game of 2026. This indie 3D platformer has no right being this good, but here we are — a small team has created something that rivals Nintendo's best.</p>

<p>Movement is the foundation, and Demon Tides nails it. Your character has a toolkit of dashes, wall jumps, grinds, and aerial maneuvers that feel incredible from the first minute and only get better as you unlock new abilities. The skill ceiling is remarkably high.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2585890/ss_f64e5b360422d5beb1c525a078b36a5cb2c8ee83.1920x1080.jpg?t=1774623815" alt="Demon Tides - platforming" />

<p>The world is a series of interconnected islands, each with its own visual theme and set of challenges. Exploration is rewarding — there are secrets hidden everywhere, and the game constantly surprises you with clever level design that repurposes familiar spaces.</p>

<p>Visually, Demon Tides pops. The art style is vibrant and colorful without being garish, and each zone has a distinct personality. Performance on PC is flawless, with buttery-smooth framerates even on modest hardware.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2585890/ss_27746a84e41bf81788604bfeafca8a2e88ae62be.1920x1080.jpg?t=1774623815" alt="Demon Tides - island exploration" />

<p>The camera occasionally fights you in tight corridors, and some of the 200+ collectibles exist purely for completionist padding. The story is also paper-thin — but honestly, nobody is playing a 3D platformer for the narrative.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2585890/ss_2099fb5d3c2f6ce88688abb74ca70fa7a2329989.1920x1080.jpg?t=1774623815" alt="Demon Tides - vibrant world" />

<p>Demon Tides is proof that the 3D platformer genre is alive and thriving. It is joyful, inventive, and impossible to put down. An essential purchase for anyone who loves tight controls and creative level design.</p>`,
    },
  },
  {
    id: "g_south_midnight",
    slug: "south-of-midnight",
    title: "South of Midnight",
    description: "A third-person action-adventure set in the American Deep South, blending Southern Gothic folklore with stop-motion inspired visuals and Souls-like combat.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_40596f6708fcabef80fb7ef72c1b03e4134a3869.1920x1080.jpg?t=1774984440",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_40596f6708fcabef80fb7ef72c1b03e4134a3869.1920x1080.jpg?t=1774984440",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_d00b68da2754c5003dc01f73a62365bc8de03c1a.1920x1080.jpg?t=1774984440",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_103bb6df9ddfd8e93cbe28ad2066e4a2bfbce54e.1920x1080.jpg?t=1774984440",
    ],
    developer: "Compulsion Games",
    publisher: "Xbox Game Studios",
    platforms: ["PC", "Xbox Series X/S"],
    genres: ["Action Adventure", "Souls-like", "Southern Gothic"],
    metacriticScore: 79,
    score: 78,
    steamAppId: "1934570",
    trailerUrl: "https://www.youtube.com/watch?v=south-of-midnight",
    review: {
      title: "South of Midnight Review: Style Over Substance, But What Style",
      verdict: "A visually stunning adventure held back by repetitive combat, but its unique setting makes it worth experiencing",
      pros: ["Breathtaking stop-motion inspired art style", "Unique Southern Gothic setting and folklore", "Strong voice acting and atmosphere", "Game Pass day one"],
      cons: ["Combat becomes repetitive quickly", "Exploration lacks depth", "Story loses momentum in the second half", "Technical issues on PC at launch"],
      content: `<p>South of Midnight is one of the most visually distinctive games of 2026. Compulsion Games' stop-motion inspired art style transforms the American Deep South into something that looks like a living diorama — swamps shimmer with an otherworldly glow, and creatures from Southern folklore prowl through landscapes that feel like dark fairy tales.</p>

<p>The setting is the game's greatest strength. Drawing from African American folklore and Southern Gothic traditions, South of Midnight explores mythology that games rarely touch. Hazel, the protagonist, is a compelling lead whose personal story weaves naturally into the larger supernatural narrative.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_40596f6708fcabef80fb7ef72c1b03e4134a3869.1920x1080.jpg?t=1774984440" alt="South of Midnight - Southern Gothic atmosphere" />

<p>Combat borrows liberally from the Souls-like playbook — dodge timing, stamina management, and pattern recognition are all essential. It works well enough in the early hours, but the enemy variety does not keep pace with the game's length, leading to repetitive encounters by the midpoint.</p>

<p>Exploration similarly starts strong but plateaus. The world is gorgeous to look at but lacks the density of secrets and meaningful side content that keeps open-world games compelling. You will want to explore because it is beautiful, not because the game rewards curiosity.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_d00b68da2754c5003dc01f73a62365bc8de03c1a.1920x1080.jpg?t=1774984440" alt="South of Midnight - combat encounter" />

<p>The story, while culturally rich, loses momentum in its second half. Plot threads that start strong resolve in predictable ways, and the final act feels rushed compared to the measured pacing of the opening.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934570/ss_103bb6df9ddfd8e93cbe28ad2066e4a2bfbce54e.1920x1080.jpg?t=1774984440" alt="South of Midnight - exploration" />

<p>South of Midnight is a game of extraordinary ambition and uneven execution. Its art direction and cultural setting are genuinely groundbreaking, but the gameplay does not quite match the vision. Still, it is absolutely worth experiencing — especially on Game Pass.</p>`,
    },
  },
  {
    id: "g_ds2",
    slug: "death-stranding-2-on-the-beach",
    title: "Death Stranding 2: On the Beach",
    description: "Hideo Kojima's sequel to Death Stranding continues Sam Porter Bridges' journey across a fractured America, with new traversal mechanics, deeper social systems, and Kojima's signature storytelling.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3280350/702c9ed8dc25f26be07539cd5cfb9f08046d210a/ss_702c9ed8dc25f26be07539cd5cfb9f08046d210a.1920x1080.jpg?t=1774022345",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3280350/702c9ed8dc25f26be07539cd5cfb9f08046d210a/ss_702c9ed8dc25f26be07539cd5cfb9f08046d210a.1920x1080.jpg?t=1774022345",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3280350/9732214efafbe68e6618806556cd448578217a04/ss_9732214efafbe68e6618806556cd448578217a04.1920x1080.jpg?t=1774022345",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3280350/1a78ae746ca46713e3c2cb2e5c4f197fea72fe50/ss_1a78ae746ca46713e3c2cb2e5c4f197fea72fe50.1920x1080.jpg?t=1774022345",
    ],
    developer: "Kojima Productions",
    publisher: "Sony Interactive Entertainment",
    platforms: ["PC", "PlayStation 5"],
    genres: ["Action", "Open World", "Strand"],
    metacriticScore: 88,
    score: 87,
    steamAppId: "3280350",
    trailerUrl: "https://www.youtube.com/watch?v=death-stranding-2",
    review: {
      title: "Death Stranding 2 Review: Kojima's Strangest, Most Human Game Yet",
      verdict: "A bold, polarizing sequel that doubles down on everything that made the original unique — for better and worse",
      pros: ["Visually stunning open world with incredible detail", "Deeply emotional story with standout performances", "Expanded traversal mechanics are genuinely fun", "Asynchronous multiplayer remains brilliantly innovative"],
      cons: ["Kojima's storytelling can be self-indulgent", "Pacing issues in the middle chapters", "Some mechanics still feel like busywork", "Cutscenes can be excessively long"],
      content: `<p>Death Stranding 2: On the Beach is the most Kojima game ever made. That sentence will either excite you or terrify you, and your reaction is the best predictor of whether you will love or hate this game. There is no middle ground here.</p>

<p>Sam Porter Bridges returns to a world that has somehow gotten stranger since the first game. New supernatural threats have emerged, old connections have frayed, and the journey ahead is even more emotionally charged than before.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3280350/702c9ed8dc25f26be07539cd5cfb9f08046d210a/ss_702c9ed8dc25f26be07539cd5cfb9f08046d210a.1920x1080.jpg?t=1774022345" alt="Death Stranding 2 - open world" />

<p>The traversal — the actual act of moving through the world — has been significantly expanded. New vehicles, tools, and environmental interactions make the core loop of navigating treacherous terrain more engaging than ever. The sense of accomplishment when you find the perfect route through an impossible landscape is unmatched.</p>

<p>Visually, this is one of the most impressive games ever made. The Decima Engine delivers landscapes that look photorealistic, weather effects that feel alive, and character models that cross the uncanny valley with ease. Norman Reedus, Lea Seydoux, and the expanded cast deliver performances that belong in cinema.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3280350/9732214efafbe68e6618806556cd448578217a04/ss_9732214efafbe68e6618806556cd448578217a04.1920x1080.jpg?t=1774022345" alt="Death Stranding 2 - traversal mechanics" />

<p>The asynchronous multiplayer — leaving structures, supplies, and paths for other players — remains one of gaming's most innovative ideas. It has been expanded with new community features that make the shared world feel even more alive.</p>

<p>Where Death Stranding 2 struggles is where Kojima always struggles: restraint. Cutscenes regularly exceed 20 minutes, some gameplay mechanics feel like padding, and the story takes detours that test patience. The middle chapters in particular drag before a spectacular final act.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3280350/1a78ae746ca46713e3c2cb2e5c4f197fea72fe50/ss_1a78ae746ca46713e3c2cb2e5c4f197fea72fe50.1920x1080.jpg?t=1774022345" alt="Death Stranding 2 - dramatic moment" />

<p>Death Stranding 2 is a masterpiece for those on its wavelength and an endurance test for those who are not. It is bold, weird, beautiful, and deeply human — exactly what you would expect from Kojima, amplified to eleven.</p>`,
    },
  },
];

async function main() {
  for (const g of games) {
    // Upsert game
    const existing = await db.execute({ sql: "SELECT id FROM Game WHERE slug = ?", args: [g.slug] });
    let gameId = existing.rows[0]?.id as string;

    if (!gameId) {
      gameId = g.id;
      await db.execute({
        sql: `INSERT INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, averageScore, steamAppId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [gameId, g.slug, g.title, g.description, g.coverImage, JSON.stringify(g.screenshots), g.trailerUrl, g.developer, g.publisher, JSON.stringify(g.platforms), JSON.stringify(g.genres), g.metacriticScore, g.score, g.steamAppId, now, now],
      });
      console.log(`Game added: ${g.title}`);
    } else {
      await db.execute({
        sql: "UPDATE Game SET coverImage = ?, screenshots = ?, averageScore = ?, metacriticScore = ? WHERE id = ?",
        args: [g.coverImage, JSON.stringify(g.screenshots), g.score, g.metacriticScore, gameId],
      });
      console.log(`Game updated: ${g.title}`);
    }

    // Add review if not exists
    const existingReview = await db.execute({ sql: "SELECT id FROM Review WHERE gameId = ?", args: [gameId] });
    if (existingReview.rows.length === 0) {
      await db.execute({
        sql: `INSERT INTO Review (id, slug, gameId, title, content, score, pros, cons, sourceReviews, verdict, status, publishedAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          "rev_" + g.slug, g.slug + "-review", gameId,
          g.review.title, g.review.content, g.score,
          JSON.stringify(g.review.pros), JSON.stringify(g.review.cons),
          JSON.stringify([{ source: "Metacritic", score: g.metacriticScore, url: "" }]),
          g.review.verdict, "published", now, now, now,
        ],
      });
      console.log(`Review added: ${g.review.title}`);
    } else {
      console.log(`Review exists: ${g.title}`);
    }
  }

  console.log("\nAll 5 reviews done!");
}

main().catch(e => { console.error(e); process.exit(1); });
