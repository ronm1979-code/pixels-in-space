import "dotenv/config";
import { createClient } from "@libsql/client";
import https from "https";
import http from "http";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!.replace("libsql://", "https://"),
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

// HEAD-check a URL, returns true if 2xx/3xx
function checkUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.request(url, { method: "HEAD", timeout: 8000 }, (res) => {
      resolve(res.statusCode! >= 200 && res.statusCode! < 400);
    });
    req.on("error", () => resolve(false));
    req.on("timeout", () => { req.destroy(); resolve(false); });
    req.end();
  });
}

interface GameData {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  screenshots: string[];
  trailerUrl: string;
  developer: string;
  publisher: string;
  platforms: string[];
  genres: string[];
  metacriticScore: number;
  steamAppId: string | null;
  averageScore: number;
  releaseDate: string;
  review: {
    title: string;
    content: string;
    score: number;
    pros: string[];
    cons: string[];
    verdict: string;
    publishedAt: string;
  };
}

const games: GameData[] = [
  // ===== 1. ELDEN RING =====
  {
    id: "g_elden_ring",
    slug: "elden-ring",
    title: "Elden Ring",
    description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between, a new fantasy action RPG from FromSoftware and Hidetaka Miyazaki with worldbuilding by George R.R. Martin.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.1920x1080.jpg?t=1767883716",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.1920x1080.jpg?t=1767883716",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_dcdac9e4b26ac0ee5248bfd2967d764fd00cdb42.1920x1080.jpg?t=1767883716",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.1920x1080.jpg?t=1767883716",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_e0316c76f8197405c1312d072b84331dd735d60b.1920x1080.jpg?t=1767883716",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_ef61b771ee6b269b1f0cb484233e07a0bfb5f81b.1920x1080.jpg?t=1767883716",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_b1b91299d7e4b94201ac840aa64de54d9f5cb7f3.1920x1080.jpg?t=1767883716",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=E3Huy2cdih0",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One"],
    genres: ["Action RPG", "Open World", "Souls-like"],
    metacriticScore: 96,
    steamAppId: "1245620",
    averageScore: 96,
    releaseDate: "2022-02-25T00:00:00.000Z",
    review: {
      title: "Elden Ring Review: The Lands Between Redefine the Open-World Genre",
      score: 96,
      pros: [
        "A breathtaking open world that rewards curiosity at every turn",
        "Combat builds on the finest Souls-like mechanics with unmatched depth",
        "George R.R. Martin's worldbuilding creates genuinely compelling lore",
        "Staggering amount of content with extraordinary variety in bosses and dungeons",
      ],
      cons: [
        "Late-game boss balance feels overtuned and occasionally unfair",
        "Performance issues on PC at launch were significant",
        "Some repeated mini-dungeons and bosses dilute the open-world discovery",
      ],
      verdict: "Elden Ring is a landmark achievement that marries the punishing brilliance of FromSoftware's combat design with a vast, gorgeous open world that sets a new standard for the genre.",
      publishedAt: "2022-03-01T10:00:00.000Z",
      content: `<p>There is a moment early in Elden Ring when you step out of the opening dungeon, look across the vast golden expanse of Limgrave, and realize that everything you can see is not just scenery but playable space filled with secrets, bosses, and stories waiting to be uncovered. It is a moment that redefines what an open-world game can be, and it sets the tone for one of the most extraordinary experiences in gaming history. FromSoftware has taken everything they learned across a decade of Souls games and unleashed it upon a world that feels genuinely limitless.</p>

<p>The Lands Between is not merely large; it is dense with purpose. Every ruin hides a dungeon. Every cliffside conceals a hidden path. Every distant landmark you spot on the horizon can be reached and explored, and when you get there, you will almost certainly discover something that surprises you. This is an open world built by designers who understand that discovery is the greatest reward a game can offer. There are no waypoint markers cluttering your screen or minimap icons demanding your attention. Instead, Elden Ring trusts you to look at the world itself, to notice the glow of a grace site in the distance or the suspicious placement of rocks near a cliff edge, and to follow your instincts.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/E3Huy2cdih0" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Combat is the refined culmination of everything FromSoftware has built since Demon's Souls. The core loop of learning enemy patterns, managing stamina, and finding windows to punish remains as satisfying as ever, but the sheer variety of tools at your disposal elevates it to new heights. Sorcery builds can rain comets from the sky. Faith builds can summon lightning and holy flame. Strength builds can stagger giants with colossal weapons that would look absurd in any other game but feel perfectly calibrated here. The addition of Ashes of War lets you customize weapon skills with extraordinary flexibility, meaning no two players will approach the same encounter in the same way.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.1920x1080.jpg?t=1767883716" alt="Elden Ring - vast open world landscape of the Lands Between" />

<p>The boss design ranges from spectacular to transcendent. Major encounters like Starscourge Radahn, Rykard the Blasphemous Serpent, and Malenia Blade of Miquella are etched into gaming history as some of the most memorable fights ever designed. Each demands a different approach, each tells a story through its moveset and arena, and each delivers the kind of euphoric triumph upon defeat that only FromSoftware can produce. The sheer number of unique bosses is staggering; where other Souls games might have twenty to thirty, Elden Ring has well over a hundred, and the majority feel handcrafted and distinct.</p>

<p>George R.R. Martin's contributions to the worldbuilding are felt throughout. The mythology of the Lands Between is rich with warring demigod families, shattered divine orders, and cosmic entities whose motivations stretch beyond mortal comprehension. Item descriptions, environmental storytelling, and cryptic NPC dialogue weave together a narrative tapestry that rewards careful attention without ever forcing exposition upon the player. The story of Queen Marika and the shattering of the Elden Ring is told with the same oblique brilliance that defined Dark Souls, but with a scope and depth that surpasses it.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_dcdac9e4b26ac0ee5248bfd2967d764fd00cdb42.1920x1080.jpg?t=1767883716" alt="Elden Ring - intense boss battle" />

<p>Visually, the game achieves a painterly beauty that few titles can match. The golden fields of Limgrave give way to the crimson rot of Caelid, the crystalline underground rivers of Ainsel, and the hauntingly beautiful Haligtree canopy. Each region has a distinct visual identity and atmosphere, and the transitions between them are handled with an artistry that makes the world feel cohesive despite its incredible variety. The art direction is simply world-class, creating vistas that make you stop and stare even after hundreds of hours.</p>

<p>The spirit summoning system deserves praise as a clever difficulty modulator that respects the franchise's ethos. Rather than adding an explicit easy mode, FromSoftware gives players powerful NPC allies that can be summoned during tough encounters. These spirits range from simple wolves to devastating mimics that copy your exact build. They lower the barrier to entry without trivializing the core experience, and choosing when to use them adds another layer of strategic depth to the gameplay.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.1920x1080.jpg?t=1767883716" alt="Elden Ring - exploration and discovery" />

<p>Where Elden Ring stumbles is in its late-game balance and occasional repetition. Some endgame bosses deal damage that feels disproportionate, with input-reading AI that can punish healing attempts with surgical precision. The open world, despite its overall brilliance, does recycle certain mini-dungeon layouts and boss encounters more than it should. And the PC performance at launch, while significantly improved through patches, was a genuine stain on what should have been a flawless debut. These are blemishes on a masterpiece, but they are blemishes nonetheless.</p>

<p>Elden Ring is the game that proves open-world design and handcrafted quality are not mutually exclusive. It is a title that respects your time, your intelligence, and your desire for genuine challenge. In the Lands Between, every horizon promises adventure, every defeat teaches a lesson, and every victory feels earned. This is not just FromSoftware's magnum opus; it is one of the greatest games ever made, and its influence will be felt for decades to come.</p>`,
    },
  },

  // ===== 2. GOD OF WAR RAGNAROK =====
  {
    id: "g_gow_ragnarok",
    slug: "god-of-war-ragnarok",
    title: "God of War Ragnarok",
    description: "Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Together they must delve deep into each realm, forging alliances and fighting foes, as they try to prevent Ragnarok.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/ss_7c59382e67eadf779e0e15c3837ee91158237f11.1920x1080.jpg?t=1750909504",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/ss_7c59382e67eadf779e0e15c3837ee91158237f11.1920x1080.jpg?t=1750909504",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/ss_05f27139b15c5410d07cd59b7b52adbdf73e13da.1920x1080.jpg?t=1750909504",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/ss_974a7b998c0c14da7fe52a342cf36c98850a57ac.1920x1080.jpg?t=1750909504",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/ss_78350297511e81f287b4bc361935efbc3016f6db.1920x1080.jpg?t=1750909504",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/ss_7cbcd6847cac4d2d42f496954d0df715c6af0b3a.1920x1080.jpg?t=1750909504",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/ss_c6240e5611e6aa1c2219dbf778f79b2b5244d912.1920x1080.jpg?t=1750909504",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=EE-4GvjKcfs",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    platforms: ["PC", "PlayStation 5", "PlayStation 4"],
    genres: ["Action", "Adventure", "Hack and Slash"],
    metacriticScore: 94,
    steamAppId: "2322010",
    averageScore: 94,
    releaseDate: "2022-11-09T00:00:00.000Z",
    review: {
      title: "God of War Ragnarok Review: A Worthy Sequel That Reaches Mythic Heights",
      score: 94,
      pros: [
        "Emotionally devastating story that deepens the father-son dynamic beautifully",
        "Combat is significantly expanded with new weapons, abilities, and enemy variety",
        "All nine realms are explorable with stunning visual diversity",
        "Outstanding performances from the entire cast, especially Christopher Judge and Sunny Suljic",
      ],
      cons: [
        "Puzzle frequency can slow momentum during intense story beats",
        "Some companion AI dialogue repeats hints too quickly",
        "Side content quality is inconsistent, with some filler fetch quests",
        "Pacing in the middle act drags compared to the explosive opening and finale",
      ],
      verdict: "God of War Ragnarok delivers a masterfully crafted sequel that elevates its predecessor in nearly every way, offering one of the most emotionally resonant narratives in gaming alongside razor-sharp combat.",
      publishedAt: "2022-11-14T10:00:00.000Z",
      content: `<p>God of War Ragnarok carries on its shoulders the weight of one of gaming's most beloved reboots, and it bears that burden with the same quiet strength as its protagonist. Santa Monica Studio has crafted a sequel that does not merely iterate on the 2018 original but expands it in every meaningful direction, delivering a narrative conclusion to the Norse saga that is by turns thrilling, heartbreaking, and profoundly human. This is the rare sequel that understands what made its predecessor great and has the confidence to push even further.</p>

<p>The relationship between Kratos and Atreus remains the emotional spine of the entire experience. What began as a story about a distant father learning to connect with his son has evolved into something far more complex. Atreus is no longer a child following in his father's footsteps; he is a young man struggling to define his own identity, and the tension between his desire for independence and Kratos's instinct to protect creates dramatic friction that fuels the entire narrative. Christopher Judge's performance as Kratos is nothing short of extraordinary, conveying volumes of emotion through restrained delivery that makes every moment of vulnerability feel earned.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/EE-4GvjKcfs" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Combat has been overhauled with the kind of depth that transforms an already excellent system into something truly exceptional. The Leviathan Axe and Blades of Chaos return with expanded movesets and new runic abilities, but the addition of new weapons and combat mechanics ensures that encounters never feel stale across the thirty-hour campaign. Enemy variety has increased dramatically, with each realm introducing foes that demand different tactical approaches. The Berserker optional bosses are particularly outstanding, offering challenges that rival the best encounters in the Souls genre.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/ss_7c59382e67eadf779e0e15c3837ee91158237f11.1920x1080.jpg?t=1750909504" alt="God of War Ragnarok - Kratos in combat" />

<p>The scope of the world has expanded enormously. All nine realms of Norse mythology are now explorable, each with its own distinct visual identity, environmental puzzles, and side content. Svartalfheim's dwarven mines pulse with industrial energy, Vanaheim's jungles teem with life and mystery, and the desolate beauty of Niflheim has been completely reimagined. The art direction across these realms is consistently breathtaking, with lighting and environmental detail that push the PlayStation hardware to its limits and translate beautifully to the PC version.</p>

<p>The supporting cast deserves enormous credit for elevating the story beyond a simple father-son tale. Freya's arc from antagonist to reluctant ally is handled with remarkable nuance. Thor, voiced with menacing charm by Ryan Hurst, subverts expectations as a complex figure rather than a one-dimensional villain. And Odin, brought to life by Richard Schiff with unsettling charisma, is one of gaming's most memorable antagonists precisely because he is so disarmingly reasonable. Every major character feels fully realized, with motivations that extend beyond their narrative function.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/ss_05f27139b15c5410d07cd59b7b52adbdf73e13da.1920x1080.jpg?t=1750909504" alt="God of War Ragnarok - exploring the Nine Realms" />

<p>The game's puzzle design is clever and varied, incorporating the elemental properties of your weapons in increasingly creative ways. Freezing mechanisms with the Leviathan Axe, igniting bramble with the Blades of Chaos, and manipulating sigils to create chain reactions all feel satisfying. However, the sheer frequency of puzzles can occasionally break the momentum of the narrative, particularly during sequences where the story demands urgency. The companion AI also has an unfortunate tendency to blurt out puzzle solutions before you have had adequate time to work them out yourself, which diminishes the satisfaction of discovery.</p>

<p>Visually, Ragnarok is a showcase of technical and artistic achievement. Character models are stunningly detailed, facial animations convey emotion with cinematic precision, and the environmental art ranges from intimate cave interiors to sweeping vistas that stretch to the horizon. The single-shot camera technique returns, maintaining the unbroken perspective that made the 2018 game feel so immersive. On PC with unlocked framerates and higher resolutions, the game reaches a level of visual fidelity that rivals anything on the market.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/ss_974a7b998c0c14da7fe52a342cf36c98850a57ac.1920x1080.jpg?t=1750909504" alt="God of War Ragnarok - stunning environments" />

<p>The soundtrack by Bear McCreary is a masterwork of orchestral and choral composition. The themes for each realm are instantly recognizable, and the way the music shifts dynamically between exploration, combat, and cinematic moments demonstrates a level of integration that few games achieve. Key story moments are elevated by musical cues that hit with devastating emotional precision, and the final act features compositions that will linger in your memory long after the credits roll.</p>

<p>God of War Ragnarok is a magnificent conclusion to the Norse saga and a testament to what narrative-driven action games can achieve. It takes the foundation of an already outstanding game and builds upon it with ambition, heart, and technical mastery. While its pacing occasionally stumbles and its companion AI could use refinement, these are minor blemishes on an otherwise extraordinary experience. Kratos's journey from rage to restraint, from isolation to love, is one of gaming's great character arcs, and Ragnarok brings it to a close with the grace it deserves.</p>`,
    },
  },

  // ===== 3. BALDUR'S GATE 3 =====
  {
    id: "g_baldurs_gate_3",
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. An ancient evil has returned to Baldur's Gate, intent on devouring it from the inside out, and you are the only ones who can stop it.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.1920x1080.jpg?t=1773079016",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.1920x1080.jpg?t=1773079016",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_73d93bea842b93914d966622104dcb8c0f42972b.1920x1080.jpg?t=1773079016",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_cf936d31061b58e98e0c646aee00e6030c410cda.1920x1080.jpg?t=1773079016",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_b6a6ee6e046426d08ceea7a4506a1b5f44181543.1920x1080.jpg?t=1773079016",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_6b8faba0f6831a406ce015648958da9612d14dbb.1920x1080.jpg?t=1773079016",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_8fc5eba770b4a1639b31666908bdd2bbc1aa2ae4.1920x1080.jpg?t=1773079016",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=1T22wNvoNiU",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    genres: ["RPG", "Turn-Based", "Fantasy"],
    metacriticScore: 96,
    steamAppId: "1086940",
    averageScore: 96,
    releaseDate: "2023-08-03T00:00:00.000Z",
    review: {
      title: "Baldur's Gate 3 Review: The RPG That Reminds Us Why We Fell in Love with the Genre",
      score: 96,
      pros: [
        "Unparalleled freedom of choice with consequences that ripple across the entire narrative",
        "Companion characters are among the best-written in RPG history",
        "D&D 5th Edition combat is brilliantly adapted with creative environmental interactions",
        "Staggering amount of content with extraordinary replayability across different builds and choices",
      ],
      cons: [
        "Act 3 feels less polished than the first two acts with occasional pacing issues",
        "Performance can struggle in dense city areas even on powerful hardware",
        "The sheer volume of systems and options can overwhelm newcomers to CRPGs",
      ],
      verdict: "Baldur's Gate 3 is a once-in-a-generation RPG that sets a new benchmark for player freedom, narrative depth, and production quality, proving that the classic CRPG formula can thrive in the modern era.",
      publishedAt: "2023-08-10T10:00:00.000Z",
      content: `<p>Baldur's Gate 3 should not exist. Not in this form. Not with this level of ambition fully realized. The modern gaming landscape, obsessed with live-service models and safe sequels, has no business producing a hundred-hour single-player RPG that gives players the freedom to solve virtually every problem in whatever manner they see fit. And yet here it is, a monument to what happens when a studio with boundless creativity is given the time and resources to execute their vision without compromise. Larian Studios has not just made the best RPG in years; they have redefined what the genre is capable of.</p>

<p>The game begins with a premise that immediately establishes the stakes: you have been infected with a Mind Flayer tadpole, a parasite that will eventually transform you into a tentacled horror. This ticking clock drives you to seek a cure while navigating an increasingly complex web of alliances, betrayals, and cosmic threats. But what makes the narrative truly extraordinary is not the central conflict; it is the countless ways your choices reshape the world around you. Decisions made in the first hour have consequences that echo into the final act, and the game tracks an almost incomprehensible number of variables to ensure that your story feels uniquely yours.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/1T22wNvoNiU" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The companion characters are the beating heart of the experience and represent some of the finest character writing in gaming history. Shadowheart's guarded vulnerability, Astarion's sardonic charm masking deep trauma, Karlach's infectious warmth despite her cursed condition, and Lae'zel's rigid warrior pride that slowly gives way to genuine growth each demand attention and emotional investment. These are not NPCs who exist to fill a party slot; they are fully realized people whose personal quests interweave with the main story in ways that feel organic and earned. The romance options are handled with maturity and emotional depth that puts most dating simulators to shame.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.1920x1080.jpg?t=1773079016" alt="Baldur's Gate 3 - party interaction and dialogue" />

<p>Combat is built on a faithful adaptation of Dungeons and Dragons 5th Edition rules, and it is remarkable how well the tabletop system translates to a video game. Turn-based encounters reward tactical thinking, positioning, and creative use of the environment. You can shove enemies off cliffs, electrify puddles of water, create chokepoints with grease and fire, or simply talk your way past threats entirely if your Charisma is high enough. The class system offers twelve base classes with numerous subclasses, and multiclassing opens up build possibilities that reward experimentation across multiple playthroughs.</p>

<p>The world design is layered and intricate in a way that constantly rewards exploration. Act 1's surface areas hide sprawling underground complexes. Hidden passages connect seemingly unrelated locations. Entire questlines can be missed entirely if you do not venture off the beaten path. The Underdark, accessible through multiple routes each with their own challenges, is a highlight that feels like a complete game within the game. Larian has filled every corner of the map with discoverable content that makes exploration feel genuinely rewarding rather than a checkbox exercise.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_73d93bea842b93914d966622104dcb8c0f42972b.1920x1080.jpg?t=1773079016" alt="Baldur's Gate 3 - tactical turn-based combat" />

<p>The production values are staggering for a game of this scope. Fully voiced dialogue with motion-captured performances brings every conversation to life. The visual fidelity of character models, environments, and spell effects rivals the best AAA productions. The soundtrack weaves orchestral grandeur with intimate acoustic moments, perfectly matching the tone of each scene. Cutscenes are directed with a cinematic eye that makes critical story moments land with genuine emotional impact. The sheer volume of recorded dialogue alone is a technical achievement that borders on the absurd.</p>

<p>Multiplayer deserves special mention as one of the game's most unique features. Up to four players can tackle the entire campaign cooperatively, and the game handles this with remarkable grace. Each player can pursue their own objectives, engage in separate conversations, and even work against the party's interests if they choose. Watching a friend accidentally trigger a boss fight while you are across the map trying to pickpocket a merchant creates emergent storytelling moments that rival any scripted narrative.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_cf936d31061b58e98e0c646aee00e6030c410cda.1920x1080.jpg?t=1773079016" alt="Baldur's Gate 3 - exploration in the Forgotten Realms" />

<p>The game's primary weakness lies in its third act, which, while still impressive, does not reach the heights of the first two. The city of Baldur's Gate itself can feel somewhat rushed compared to the meticulously paced earlier areas, and certain questlines resolve in ways that suggest they were compressed during development. Performance in dense urban areas can also dip on even powerful hardware, though patches have steadily improved stability since launch. These issues do not diminish the overall experience significantly, but they prevent the finale from achieving the perfection of what comes before.</p>

<p>Baldur's Gate 3 is the kind of game that comes along once in a generation. It is a love letter to tabletop role-playing, a technical marvel, and a narrative achievement that proves player agency and storytelling quality are not mutually exclusive. Every playthrough reveals new paths, new solutions, and new stories. In an industry increasingly dominated by safe bets and familiar formulas, Larian Studios has dared to dream bigger than anyone thought possible, and they have delivered on that dream in spectacular fashion. This is the new gold standard for role-playing games.</p>`,
    },
  },

  // ===== 4. ALAN WAKE 2 =====
  {
    id: "g_alan_wake_2",
    slug: "alan-wake-2",
    title: "Alan Wake 2",
    description: "Saga Anderson arrives to investigate ritualistic murders in a small town. Alan Wake pens a dark story to shape the reality around him. These two stories collide in Alan Wake 2, a survival horror game from Remedy Entertainment.",
    coverImage: "https://www.gematsu.com/wp-content/uploads/2023/08/Alan-Wake-II_2023_08-22-23_001.jpg",
    screenshots: [
      "https://www.gematsu.com/wp-content/uploads/2023/08/Alan-Wake-II_2023_08-22-23_001.jpg",
      "https://www.gematsu.com/wp-content/uploads/2023/08/Alan-Wake-II_2023_08-22-23_002.jpg",
      "https://www.gematsu.com/wp-content/uploads/2023/08/Alan-Wake-II_2023_08-22-23_003.jpg",
      "https://www.gematsu.com/wp-content/uploads/2023/08/Alan-Wake-II_2023_08-22-23_004.jpg",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=dlQ3FeNu5Yw",
    developer: "Remedy Entertainment",
    publisher: "Epic Games Publishing",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    genres: ["Survival Horror", "Action", "Psychological Thriller"],
    metacriticScore: 89,
    steamAppId: null,
    averageScore: 89,
    releaseDate: "2023-10-27T00:00:00.000Z",
    review: {
      title: "Alan Wake 2 Review: A Haunting Masterclass in Psychological Horror",
      score: 89,
      pros: [
        "Dual protagonist structure creates a brilliantly layered narrative experience",
        "Visually stunning with some of the best lighting and atmosphere in gaming",
        "Innovative Mind Place and Writer's Room mechanics add depth to investigation gameplay",
        "Live-action sequences blend seamlessly with gameplay in ways never seen before",
      ],
      cons: [
        "Combat encounters can feel repetitive despite the tense atmosphere",
        "Backtracking through previously explored areas slows the pacing",
        "Hardware requirements are extremely demanding even on high-end systems",
        "Some puzzle solutions rely on obscure logic that disrupts the flow",
      ],
      verdict: "Alan Wake 2 is a bold, artistic triumph that pushes the boundaries of interactive storytelling, delivering a psychological horror experience that lingers in the mind long after the final page is turned.",
      publishedAt: "2023-11-01T10:00:00.000Z",
      content: `<p>Thirteen years is a long time to wait for a sequel, but Alan Wake 2 makes every one of those years feel justified. Remedy Entertainment has not simply made a follow-up to their cult classic thriller; they have crafted one of the most ambitious and artistically daring games of the generation. This is a survival horror experience that challenges what interactive entertainment can be, blending gameplay, live-action film, music, and narrative experimentation into something that feels genuinely new. It is weird, it is wonderful, and it is utterly unlike anything else on the market.</p>

<p>The game splits its narrative between two playable protagonists whose stories mirror and distort each other in fascinating ways. Saga Anderson, an FBI agent investigating ritualistic murders in the Pacific Northwest town of Bright Falls, provides a grounded detective framework. Her sections emphasize exploration, clue-gathering, and a methodical approach to unraveling the mystery. Alan Wake, trapped in the nightmarish Dark Place for thirteen years, occupies a more surreal space where reality itself is malleable and narrative structure becomes a gameplay mechanic. The ability to switch between these two stories at will creates a unique pacing rhythm that keeps both threads feeling fresh.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/dlQ3FeNu5Yw" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Saga's Mind Place is a standout mechanic that transforms investigation sequences into something genuinely engaging. A mental construct she can enter at any time, it serves as a case board where collected evidence and clues are connected to form deductions. Profiling suspects by combining observations with intuition creates satisfying puzzle moments, and the physical space of the Mind Place evolves as your investigation deepens. It makes you feel like a detective in a way that few games achieve, rewarding careful attention to environmental details and dialogue.</p>

<img src="https://www.gematsu.com/wp-content/uploads/2023/08/Alan-Wake-II_2023_08-22-23_001.jpg" alt="Alan Wake 2 - atmospheric survival horror" />

<p>Alan's sections in the Dark Place are where Remedy's creative ambitions truly soar. The Writer's Room mechanic allows Alan to rewrite reality by placing narrative elements into different scenes, literally reshaping the environment to progress. Walking through a New York City that constantly shifts and transforms around you, where a jazz club morphs into a crime scene and buildings rearrange themselves like pages being shuffled, creates an atmosphere of creeping surrealism that is genuinely unsettling. The Dark Place is one of the most memorable settings in horror gaming, a labyrinth of Alan's own making that traps him in loops of his own narrative.</p>

<p>The live-action sequences deserve particular attention as a groundbreaking achievement. Rather than feeling like dated FMV gimmicks, these filmed segments are directed with genuine cinematic craft and integrate seamlessly into the gameplay experience. Sam Lake's performance as Alex Casey, a character within a character, is delivered with an intensity that elevates every scene he appears in. Musical sequences, including a now-legendary performance that occurs mid-game, demonstrate a willingness to experiment with form that is rare in any medium, let alone video games.</p>

<img src="https://www.gematsu.com/wp-content/uploads/2023/08/Alan-Wake-II_2023_08-22-23_002.jpg" alt="Alan Wake 2 - the Dark Place" />

<p>Visually, Alan Wake 2 is a technical showcase. The Northlight engine produces some of the most realistic lighting and environmental detail ever seen in a game. Rain glistens on every surface in Bright Falls, volumetric fog crawls through forests with eerie realism, and the neon-soaked streets of the Dark Place's twisted New York are rendered with stunning fidelity. Character models are extraordinarily detailed, with facial animations that convey subtle emotion in ways that enhance the storytelling. This is a game that demands to be played in the dark with headphones, because the atmosphere it creates through visual and audio design is genuinely exceptional.</p>

<p>Combat is built on the original's flashlight-and-firearm loop but refined with modern survival horror sensibilities. Enemies must have their darkness shields burned away with light before they can be damaged, creating a resource management tension that keeps encounters feeling dangerous even in the late game. However, the combat encounters do become somewhat repetitive as the game progresses, and certain arena-style fights can feel like they slow down an otherwise masterfully paced experience. The limited enemy variety, while thematically justified, occasionally makes combat feel like an obstacle between narrative beats rather than a complementary system.</p>

<img src="https://www.gematsu.com/wp-content/uploads/2023/08/Alan-Wake-II_2023_08-22-23_003.jpg" alt="Alan Wake 2 - investigation and clues" />

<p>The game's technical demands are steep. Even on high-end hardware, maintaining stable framerates requires significant compromises, and ray tracing, while gorgeous, comes at an enormous performance cost. The recommended specifications place Alan Wake 2 among the most demanding titles on the market. While patches have improved optimization over time, players without top-tier hardware will need to make meaningful sacrifices to visual quality. This is a game that was clearly built with future hardware in mind, and it shows in both its stunning visuals and its punishing requirements.</p>

<p>Alan Wake 2 is not a game for everyone, and that is precisely what makes it special. It is uncompromising in its artistic vision, willing to confuse and challenge players in pursuit of something genuinely meaningful. Remedy has created a work that blurs the line between game, film, and experimental art in ways that feel organic rather than pretentious. It is a psychological horror experience that respects the intelligence of its audience, and it rewards patience and attention with a narrative that unfolds like the best kind of mystery novel, one where every answer raises new questions and the final page leaves you staring at the ceiling, trying to piece it all together.</p>`,
    },
  },

  // ===== 5. THE LEGEND OF ZELDA: TEARS OF THE KINGDOM =====
  {
    id: "g_zelda_totk",
    slug: "the-legend-of-zelda-tears-of-the-kingdom",
    title: "The Legend of Zelda: Tears of the Kingdom",
    description: "An epic adventure across the land and skies of Hyrule awaits. Explore the vast land and skies of Hyrule using Link's powerful new abilities. In this sequel to The Legend of Zelda: Breath of the Wild, you will decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above.",
    coverImage: "https://www.gematsu.com/wp-content/uploads/2023/02/The-Legend-of-Zelda-Tears-of-the-Kingdom_2023_02-08-23_001.png",
    screenshots: [
      "https://www.gematsu.com/wp-content/uploads/2023/02/The-Legend-of-Zelda-Tears-of-the-Kingdom_2023_02-08-23_001.png",
      "https://www.gematsu.com/wp-content/uploads/2023/02/The-Legend-of-Zelda-Tears-of-the-Kingdom_2023_02-08-23_002.jpg",
      "https://www.gematsu.com/wp-content/uploads/2023/02/The-Legend-of-Zelda-Tears-of-the-Kingdom_2023_02-08-23_003.jpg",
      "https://www.gematsu.com/wp-content/uploads/2023/02/The-Legend-of-Zelda-Tears-of-the-Kingdom_2023_02-08-23_004.jpg",
      "https://www.gematsu.com/wp-content/uploads/2023/02/The-Legend-of-Zelda-Tears-of-the-Kingdom_2023_02-08-23_005.jpg",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=uHGShqcAHlQ",
    developer: "Nintendo",
    publisher: "Nintendo",
    platforms: ["Nintendo Switch"],
    genres: ["Action", "Adventure", "Open World"],
    metacriticScore: 96,
    steamAppId: null,
    averageScore: 96,
    releaseDate: "2023-05-12T00:00:00.000Z",
    review: {
      title: "The Legend of Zelda: Tears of the Kingdom Review: A Toybox of Infinite Possibility",
      score: 96,
      pros: [
        "Ultrahand and Fuse systems create a sandbox of limitless creative expression",
        "Sky Islands, Surface, and Depths provide three interconnected layers of extraordinary exploration",
        "Shrine and dungeon design represents the best puzzle design in the series",
        "Building upon Breath of the Wild's foundation while feeling entirely fresh and innovative",
      ],
      cons: [
        "Performance on Switch hardware shows visible strain with occasional frame drops",
        "The narrative, while improved over BotW, still takes a backseat to exploration",
        "Weapon durability system returns and remains divisive among fans",
      ],
      verdict: "Tears of the Kingdom is a breathtaking sequel that transforms Hyrule into the ultimate creative playground, empowering players with tools that redefine what is possible in an open-world adventure.",
      publishedAt: "2023-05-16T10:00:00.000Z",
      content: `<p>The Legend of Zelda: Tears of the Kingdom accomplishes something that should be impossible. It takes the same Hyrule that players spent hundreds of hours exploring in Breath of the Wild and makes it feel entirely new. Not through superficial changes or a new coat of paint, but through a fundamental reimagining of how players interact with the world itself. Nintendo has given Link a set of abilities so powerful and so creatively open-ended that the game becomes less of a traditional adventure and more of an infinite toybox where the only limit is your imagination. It is, without exaggeration, one of the most impressive design achievements in the history of the medium.</p>

<p>The Ultrahand ability is the cornerstone of this transformation. The power to grab, move, and attach virtually any object in the world to any other object opens up possibilities that boggle the mind. Players have built functional cars, flying machines, mechs, bridges, catapults, and contraptions so elaborate they would make an engineering professor weep. But the brilliance of Ultrahand is not that it enables these spectacular creations; it is that it is equally useful for simple, practical solutions. Need to cross a gap? Grab two logs and stick them together. Need to reach a high ledge? Attach a rocket to a platform and ride it skyward. The system is intuitive enough for quick solutions and deep enough for masterful engineering.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/uHGShqcAHlQ" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Fuse complements Ultrahand by allowing Link to attach materials to weapons and shields, creating hybrid armaments with unique properties. A sword fused with a diamond becomes devastatingly powerful. A shield fused with a rocket launches you skyward. An arrow fused with a Keese eyeball becomes a homing projectile. The system effectively solves the weapon durability criticism from Breath of the Wild by making every material in the world a potential weapon component. Breaking weapons is no longer a frustration but an opportunity to experiment with new combinations, and the sheer variety of possible fusions ensures that combat stays fresh across the entire adventure.</p>

<img src="https://www.gematsu.com/wp-content/uploads/2023/02/The-Legend-of-Zelda-Tears-of-the-Kingdom_2023_02-08-23_002.jpg" alt="Zelda Tears of the Kingdom - Sky Islands exploration" />

<p>The world itself has been expanded vertically in ways that fundamentally change how you experience Hyrule. The Sky Islands floating above the surface provide a new layer of exploration that is both breathtaking and mechanically satisfying. Launching yourself from island to island, discovering ancient Zonai ruins, and diving from the heavens back to the surface below creates a sense of scale and freedom that few games have matched. Below the surface, the Depths add an enormous underground layer that is dark, dangerous, and deeply rewarding to explore. These three interconnected layers mean that the map, already vast in Breath of the Wild, has effectively tripled in explorable space.</p>

<p>The shrine and dungeon design represents a significant improvement over Breath of the Wild. While the shrines retain their bite-sized puzzle format, the puzzles themselves are more creative and varied, often requiring inventive use of Link's new abilities. The larger dungeons, themed around different environments and tied to memorable sage companions, feel closer to traditional Zelda design while still embracing the open-ended philosophy. Each dungeon boss is unique and challenging, with mechanics that test your understanding of the game's systems in satisfying ways. The puzzle design throughout is simply outstanding, consistently finding new ways to challenge your assumptions about what is possible.</p>

<img src="https://www.gematsu.com/wp-content/uploads/2023/02/The-Legend-of-Zelda-Tears-of-the-Kingdom_2023_02-08-23_003.jpg" alt="Zelda Tears of the Kingdom - creative building with Ultrahand" />

<p>The narrative has been meaningfully improved over its predecessor. The Dragon's Tears questline, which reveals the story of Princess Zelda's journey through Hyrule's ancient past, is emotionally engaging in a way that Breath of the Wild's memories never quite achieved. Zelda herself is given genuine agency and makes a sacrifice that carries real emotional weight. The sage companions each have distinct personalities and backstories that add warmth to the adventure. While the story still takes a backseat to exploration and player-driven moments, it provides a stronger emotional throughline that gives purpose to your journey across the three layers of Hyrule.</p>

<p>The physics engine deserves recognition as a technical marvel that makes everything possible. Objects have weight, momentum, and material properties that interact in consistent and predictable ways. Fire spreads realistically, wind affects gliders and sails, electricity conducts through metal and water, and gravity pulls everything toward the ground with satisfying certainty. This consistency is what makes the creative systems work so well; you can predict how a contraption will behave because the physics are reliable, which means your experiments feel fair even when they fail spectacularly. The engine is the unsung hero of the entire experience.</p>

<img src="https://www.gematsu.com/wp-content/uploads/2023/02/The-Legend-of-Zelda-Tears-of-the-Kingdom_2023_02-08-23_004.jpg" alt="Zelda Tears of the Kingdom - combat with fused weapons" />

<p>The Switch hardware does show its age. Complex builds with many moving parts can cause noticeable frame drops, and the resolution in handheld mode can become quite soft during demanding sequences. Dense areas with many enemies and environmental effects occasionally chug in ways that momentarily break immersion. These are understandable limitations given the ambition of the game and the constraints of the hardware, but they are worth noting for players who are sensitive to performance issues. That Tears of the Kingdom runs on the Switch at all is a testament to Nintendo's optimization prowess, even if it cannot always maintain a perfectly smooth experience.</p>

<p>The Legend of Zelda: Tears of the Kingdom is not just a sequel to one of the most celebrated games ever made; it is an evolution that surpasses its predecessor in nearly every meaningful way. It trusts players with tools of extraordinary power and then builds a world that rewards every creative impulse. It is a game where sharing solutions and inventions with other players becomes as much a part of the experience as playing it yourself. Nintendo has created something that will be studied by game designers for decades, a masterwork of systems design, world building, and player empowerment that stands as one of the finest games ever created.</p>`,
    },
  },
];

async function main() {
  const now = new Date().toISOString();

  // Verify images first
  console.log("=== Verifying image URLs... ===\n");
  for (const g of games) {
    console.log(`Checking ${g.title}...`);
    const allUrls = [g.coverImage, ...g.screenshots];
    for (const url of allUrls) {
      const ok = await checkUrl(url);
      console.log(`  ${ok ? "[OK]" : "[FAIL]"} ${url.substring(0, 80)}...`);
      if (!ok) {
        console.warn(`  WARNING: Image URL returned non-200 for ${g.title}`);
      }
    }
  }

  console.log("\n=== Inserting games and reviews... ===\n");

  for (const g of games) {
    // Check if game already exists by slug or steamAppId
    const existing = await db.execute({
      sql: "SELECT id FROM Game WHERE slug = ?",
      args: [g.slug],
    });
    let gameId = existing.rows[0]?.id as string;

    if (!gameId && g.steamAppId) {
      const bySteam = await db.execute({
        sql: "SELECT id FROM Game WHERE steamAppId = ?",
        args: [g.steamAppId],
      });
      gameId = bySteam.rows[0]?.id as string;
    }

    if (!gameId) {
      gameId = g.id;
      await db.execute({
        sql: `INSERT INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, averageScore, steamAppId, releaseDate, createdAt, updatedAt)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          gameId,
          g.slug,
          g.title,
          g.description,
          g.coverImage,
          JSON.stringify(g.screenshots),
          g.trailerUrl,
          g.developer,
          g.publisher,
          JSON.stringify(g.platforms),
          JSON.stringify(g.genres),
          g.metacriticScore,
          g.averageScore,
          g.steamAppId,
          g.releaseDate,
          now,
          now,
        ],
      });
      console.log(`[+] Game added: ${g.title}`);
    } else {
      await db.execute({
        sql: `UPDATE Game SET coverImage = ?, screenshots = ?, trailerUrl = ?, averageScore = ?, metacriticScore = ?, releaseDate = ?, updatedAt = ? WHERE id = ?`,
        args: [
          g.coverImage,
          JSON.stringify(g.screenshots),
          g.trailerUrl,
          g.averageScore,
          g.metacriticScore,
          g.releaseDate,
          now,
          gameId,
        ],
      });
      console.log(`[~] Game updated: ${g.title}`);
    }

    // Add review if not exists
    const existingReview = await db.execute({
      sql: "SELECT id FROM Review WHERE gameId = ?",
      args: [gameId],
    });

    if (existingReview.rows.length === 0) {
      await db.execute({
        sql: `INSERT INTO Review (id, slug, gameId, title, content, score, pros, cons, sourceReviews, verdict, status, publishedAt, createdAt, updatedAt)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          "rev_" + g.slug,
          g.slug + "-review",
          gameId,
          g.review.title,
          g.review.content,
          g.review.score,
          JSON.stringify(g.review.pros),
          JSON.stringify(g.review.cons),
          JSON.stringify([
            { source: "Metacritic", score: g.metacriticScore, url: "" },
          ]),
          g.review.verdict,
          "published",
          g.review.publishedAt,
          now,
          now,
        ],
      });
      console.log(`    [+] Review added: ${g.review.title}`);
    } else {
      console.log(`    [=] Review already exists for: ${g.title}`);
    }
  }

  console.log("\n=== All 5 game reviews processed! ===");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
