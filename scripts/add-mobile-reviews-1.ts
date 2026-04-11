import "dotenv/config";
import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!.replace("libsql://", "https://"),
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const now = "2026-04-11T12:00:00.000Z";

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
  averageScore: number;
  releaseDate: string;
  review: {
    slug: string;
    title: string;
    content: string;
    score: number;
    pros: string[];
    cons: string[];
    verdict: string;
  };
}

const games: GameData[] = [
  // =============================================
  // 1. Honkai: Star Rail
  // =============================================
  {
    id: "ccss7cpy9o9mtboc8zey6lnje", // existing game ID
    slug: "honkai-star-rail",
    title: "Honkai: Star Rail",
    description:
      "HoYoverse's turn-based space fantasy RPG takes players on an interstellar journey aboard the Astral Express, featuring strategic combat, gorgeous anime-style visuals, and a sprawling narrative across the cosmos.",
    coverImage:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w3p.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc8peg.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc8peh.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc8pei.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc8pej.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc8pek.jpg",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=eZIQMP8w3M4",
    developer: "HoYoverse",
    publisher: "HoYoverse",
    platforms: ["PC", "iOS", "Android", "PlayStation 5"],
    genres: ["Turn-Based RPG", "Gacha", "Adventure"],
    metacriticScore: 83,
    averageScore: 88,
    releaseDate: "2023-04-26T00:00:00.000Z",
    review: {
      slug: "honkai-star-rail-review",
      title:
        "Honkai: Star Rail Review -- A Galactic Turn-Based RPG That Sets the Bar for Mobile Gaming",
      score: 88,
      pros: [
        "Outstanding turn-based combat with deep strategic layers",
        "Stunning anime-style visuals and character designs",
        "Excellent voice acting and cinematic storytelling",
        "Generous free-to-play model with regular content updates",
      ],
      cons: [
        "Gacha system can feel predatory for collectors",
        "Early game pacing is slow before the story picks up",
        "Stamina system limits daily playtime",
        "Some endgame content becomes repetitive",
      ],
      verdict:
        "Honkai: Star Rail is a masterfully crafted turn-based RPG that proves mobile games can deliver console-quality experiences with deep strategy, gorgeous production values, and a narrative that keeps you hooked across the stars.",
      content: `<p>When HoYoverse announced Honkai: Star Rail, skeptics wondered whether the studio behind Genshin Impact could strike lightning twice. Two years and millions of players later, the answer is a resounding yes. Star Rail is not just a worthy successor to the HoYoverse legacy -- it is a bold reinvention that proves turn-based combat can feel every bit as thrilling as real-time action when executed with this level of craft and care.</p>

<p>The premise is deceptively simple: you board the Astral Express, a cosmic train that hops between worlds, and unravel mysteries at each stop. But the narrative ambition here is staggering. Each planet you visit -- from the cyberpunk sprawl of Penacony to the martial arts archipelago of the Xianzhou Luofu -- feels like stepping into a fully realized world with its own history, conflicts, and memorable characters. The writing oscillates between laugh-out-loud humor and genuinely moving drama, a tonal balance that few games manage this well.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/eZIQMP8w3M4" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Combat is where Star Rail truly shines. The turn-based system borrows elements from classic JRPGs but layers on a weakness-break mechanic that keeps every encounter tactically engaging. Hitting an enemy's elemental weakness enough times triggers a break state that deals massive damage and applies debuffs, turning even routine battles into satisfying puzzles. Team composition matters enormously, and the interplay between supports, DPS characters, and tanks creates a depth that rewards experimentation and long-term investment.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc8peg.jpg" alt="Honkai Star Rail combat screenshot showing the turn-based battle system" />

<p>Visually, Honkai: Star Rail is a showcase for what mobile hardware can achieve. Character models are exquisitely detailed, with fluid animations during both combat and story sequences. The environments are lavishly designed, from neon-soaked cityscapes to serene celestial gardens. Each new area feels like a painting come to life, and the art direction maintains a cohesive aesthetic that ties everything together despite the wildly different biomes.</p>

<p>The audio design deserves special mention. The original soundtrack, composed by HOYO-MiX, is phenomenal -- sweeping orchestral pieces during boss fights, jazzy lounge tracks in hub areas, and haunting vocal performances that elevate emotional story beats. Voice acting across all supported languages is consistently excellent, with standout performances breathing real personality into the large cast of playable characters.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc8pei.jpg" alt="Honkai Star Rail exploration showing the detailed environment design" />

<p>The elephant in the room is monetization. Star Rail uses a gacha system where players spend in-game or purchased currency to pull for new characters and equipment. The good news is that the game is entirely completable with free characters, and the pity system guarantees a five-star character within a set number of pulls. The bad news is that chasing specific limited characters can be expensive, and the desire to collect everyone in such a charismatic roster creates real temptation. HoYoverse is generous with free currency compared to many competitors, but the gacha model remains a sticking point for players who prefer upfront pricing.</p>

<p>Performance on mobile is impressive. The game runs smoothly on mid-range devices with adjustable graphics settings, and load times are reasonable even on older hardware. Battery drain is noticeable during extended sessions, which is par for the course for a game this visually ambitious. Cross-save between mobile and PC means you can seamlessly switch between platforms without losing progress, which is a welcome quality-of-life feature.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc8pej.jpg" alt="Honkai Star Rail character interaction and story scene" />

<p>Social features are relatively light. There is a friends list and a limited co-op mode for certain endgame activities, but Star Rail is primarily a single-player experience. Community engagement happens mostly outside the game through forums, social media events, and livestreams where HoYoverse reveals upcoming content and distributes redemption codes. The game receives major content updates roughly every six weeks, adding new story chapters, characters, and events that keep the experience fresh.</p>

<p>Replay value is substantial thanks to the game's sheer volume of content and the slow-drip nature of character building. Between daily missions, weekly bosses, the roguelike Simulated Universe mode, and the challenging Memory of Chaos endgame gauntlet, there is always something to work toward. The regular cadence of new patches ensures that even veteran players have reasons to return, though the stamina system means you cannot grind endlessly in a single sitting.</p>

<p>Honkai: Star Rail is a rare achievement in mobile gaming -- a title that respects its players' intelligence with deep mechanics while wrapping everything in a production package that rivals console releases. Minor frustrations with the gacha model and stamina limitations cannot overshadow the exceptional quality on display across every other aspect of the experience. Whether you are a turn-based RPG veteran or a newcomer to the genre, Star Rail deserves a spot on your phone.</p>`,
    },
  },

  // =============================================
  // 2. Marvel Snap
  // =============================================
  {
    id: "cl70ubqyh482w9gaz3nbattmk", // existing game ID
    slug: "marvel-snap",
    title: "MARVEL SNAP",
    description:
      "A revolutionary collectible card game from Second Dinner that reimagines the genre with lightning-fast three-minute matches, featuring over 200 iconic Marvel heroes and villains with stunning original artwork.",
    coverImage:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co7kvl.jpg",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1997040/ss_568db1e13add2aa3fb563d9477eb07fe655e10c5.1920x1080.jpg?t=1773419159",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1997040/ss_5ba602d69cf8ff8e1ab55eba4854ace31d09593a.1920x1080.jpg?t=1773419159",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1997040/ss_6d2a1a58f3aa304babb48eb37e80dfe979f72c72.1920x1080.jpg?t=1773419159",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1997040/ss_1a10aba425847d5c8f5daa57babe6e5abe65c52b.1920x1080.jpg?t=1773419159",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=GNuq6E3enZQ",
    developer: "Second Dinner",
    publisher: "Nuverse",
    platforms: ["PC", "iOS", "Android"],
    genres: ["Card Game", "Strategy", "Collectible"],
    metacriticScore: 86,
    averageScore: 85,
    releaseDate: "2022-10-18T00:00:00.000Z",
    review: {
      slug: "marvel-snap-review",
      title:
        "Marvel Snap Review -- The Best Card Game on Mobile Gets Better With Every Season",
      score: 85,
      pros: [
        "Three-minute matches are perfect for mobile play sessions",
        "Brilliant snap mechanic adds thrilling risk-reward decisions",
        "Gorgeous card art featuring decades of Marvel illustration history",
        "Constant meta evolution keeps deckbuilding endlessly engaging",
      ],
      cons: [
        "Card acquisition pace can feel painfully slow for free players",
        "Location RNG occasionally decides games regardless of skill",
        "Competitive scene is limited compared to other digital CCGs",
        "Token shop and variant system feel overly complicated",
      ],
      verdict:
        "Marvel Snap is the most innovative card game in years, delivering an addictive blend of strategic depth and Marvel fan service in matches so quick you will always tell yourself just one more.",
      content: `<p>Card games have a problem: they take too long. Marvel Snap, the debut title from Second Dinner studio founded by former Hearthstone lead Ben Brode, attacks this problem with surgical precision. Every match lasts exactly six turns. Every game wraps up in roughly three minutes. And somehow, within those constraints, the team has built one of the deepest and most addictive strategy games on any platform.</p>

<p>The core concept is elegant. Two players compete across three randomly generated locations, each with unique rules that fundamentally alter strategy. You play cards from a twelve-card deck, spending energy that increases each turn, trying to win at least two of the three locations by having more total power there. It sounds simple because it is -- the genius lies in how the game layers complexity on top of that foundation.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/GNuq6E3enZQ" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The namesake snap mechanic is what elevates the game from good to great. At any point during a match, either player can snap to double the stakes -- the cosmic cubes wagered on the outcome. Your opponent can respond by retreating, losing only the current stakes, or staying in and risking the doubled amount. It transforms every game into a poker-like mind game where reading your opponent matters as much as the cards in your hand. Do they snap because they have a winning combo lined up, or are they bluffing to scare you off a close game? This tension is intoxicating.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1997040/ss_568db1e13add2aa3fb563d9477eb07fe655e10c5.1920x1080.jpg?t=1773419159" alt="Marvel Snap gameplay showing the three-location battle system" />

<p>Card art deserves its own paragraph because it is genuinely outstanding. Marvel Snap draws from over eighty years of comic book history, featuring illustrations from legendary artists alongside brand-new original pieces. Variant cards offer alternative artwork for existing characters, and some of these variants are jaw-dropping. Collecting cards becomes an end in itself, not just a means to build better decks. The visual presentation during matches is slick too, with satisfying animations when cards hit the board and flashy effects for powerful combos.</p>

<p>The audio design complements the visuals perfectly. Each location has its own ambient soundscape, card plays produce weighty sound effects, and the music strikes the right balance between energizing and unobtrusive. It is the kind of sound design you might not consciously notice but would immediately miss if it were absent.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1997040/ss_5ba602d69cf8ff8e1ab55eba4854ace31d09593a.1920x1080.jpg?t=1773419159" alt="Marvel Snap card collection showing variant artwork" />

<p>Monetization is where opinions diverge sharply. Marvel Snap does not sell power directly -- you cannot buy specific cards -- but the Collection Level system that gates card acquisition is deliberately slow for free players. The Season Pass offers decent value with a guaranteed new card and cosmetic rewards, but building a complete collection without spending money requires enormous patience. The token shop system, which lets you target specific cards, is welcome but generates tokens at a glacial pace. Second Dinner has improved the economy over time, but the progression still feels designed to nudge you toward spending.</p>

<p>Performance is excellent across devices. The game is lightweight, loads quickly, and runs without hiccups on virtually any modern phone or tablet. Battery consumption is minimal for a game this visually polished, making it genuinely viable as a commute companion or break-time distraction. Cross-platform play between mobile and PC is seamless, with shared progress and matchmaking pools.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1997040/ss_6d2a1a58f3aa304babb48eb37e80dfe979f72c72.1920x1080.jpg?t=1773419159" alt="Marvel Snap match in progress with location effects" />

<p>Social features include friends list integration, the ability to battle friends in custom matches, and a global leaderboard system. The competitive Conquest mode provides a structured environment for serious players, though the competitive scene remains smaller than juggernauts like Hearthstone or Legends of Runeterra. Alliance features have been added over time, giving players a sense of community, but Marvel Snap still feels primarily like a solo experience.</p>

<p>Content updates arrive monthly with new seasons, each introducing a new card, themed locations, and balance adjustments that shake up the meta. The development team has shown a willingness to nerf overpowered cards and buff underperformers, which keeps the competitive landscape from stagnating. New features like game modes and draft modes have expanded what players can do beyond ranked climbing.</p>

<p>Marvel Snap is that rare game that respects your time while still rewarding your investment. Its three-minute matches are perfect for mobile, yet the strategic depth rivals games with sessions ten times as long. The snap mechanic alone is one of the best innovations in card gaming history. While the monetization model could be friendlier and location randomness occasionally frustrates, the core experience is so polished and so addictive that these issues feel secondary to the sheer joy of playing.</p>`,
    },
  },

  // =============================================
  // 3. Balatro
  // =============================================
  {
    id: "g_balatro", // existing game ID
    slug: "balatro",
    title: "Balatro",
    description:
      "A hypnotic roguelike poker game by solo developer LocalThunk that transforms traditional card hands into a wildly addictive deckbuilding experience with Jokers, multipliers, and endless replayability.",
    coverImage:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ji6.jpg",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/96208723dbedef49d71bf1b0a74aee1689018c50/ss_96208723dbedef49d71bf1b0a74aee1689018c50.1920x1080.jpg?t=1774958057",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/ss_4862112e5030f74a5818cd4c31347d699ac5adf3.1920x1080.jpg?t=1774958057",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/ss_3be65a7dd3be072d567e11883d208861a7e959fa.1920x1080.jpg?t=1774958057",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/ss_e32ac94d7d1d6be7dd015d78f2b52aeb4cc282ed.1920x1080.jpg?t=1774958057",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=rgrv9giaNO8",
    developer: "LocalThunk",
    publisher: "Playstack",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One", "Nintendo Switch", "iOS", "Android"],
    genres: ["Roguelike", "Card Game", "Strategy"],
    metacriticScore: 90,
    averageScore: 92,
    releaseDate: "2024-02-20T00:00:00.000Z",
    review: {
      slug: "balatro-review",
      title:
        "Balatro Review -- The Most Addictive Game of the Decade Hits Mobile and Refuses to Let Go",
      score: 92,
      pros: [
        "Brilliantly inventive poker-meets-roguelike core loop",
        "Over 150 Jokers create mind-bending combo possibilities",
        "Perfect touch controls make the mobile port feel native",
        "Extraordinary replay value that scales with player knowledge",
      ],
      cons: [
        "Steep learning curve for players unfamiliar with poker hands",
        "RNG can occasionally create unwinnable runs despite good play",
        "Minimalist visuals may not appeal to everyone",
      ],
      verdict:
        "Balatro is a once-in-a-generation roguelike that transforms poker into something entirely new, delivering the kind of compulsive one-more-run gameplay loop that will consume your free time and leave you grateful for it.",
      content: `<p>Balatro should not work. A roguelike built around poker hands sounds like a game jam experiment, not a title that would sweep every Game of the Year award in sight. Yet here we are. Solo developer LocalThunk has created something genuinely transcendent -- a game so elegantly designed and ruthlessly addictive that it redefined what a card game can be. And now, with its mobile port, it lives in your pocket, ready to devour every spare moment you have.</p>

<p>The premise: you play poker hands to score points, trying to hit escalating chip targets across a series of antes. Standard poker scoring applies -- pairs, straights, flushes, full houses -- but layered on top is a system of Jokers, modifiers, and special cards that can multiply your scores into astronomical territory. A basic pair might score a few hundred chips. With the right Joker setup, that same pair can score millions. The journey from understanding the basics to orchestrating absurd combo chains is one of gaming's great learning curves.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/rgrv9giaNO8" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The Joker system is the engine that makes everything tick. With over 150 Jokers in the game, each offering unique scoring bonuses, synergies, and sometimes bizarre effects, every run feels genuinely different. You might build around a Joker that multiplies your score for every heart card played, then find another that gives bonus chips for consecutive hands of the same type. The interplay between Jokers, the order they activate, and how they combine with your deck modifications creates a strategic depth that rewards hundreds of hours of play without feeling solved.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/96208723dbedef49d71bf1b0a74aee1689018c50/ss_96208723dbedef49d71bf1b0a74aee1689018c50.1920x1080.jpg?t=1774958057" alt="Balatro gameplay showing Joker cards and scoring multipliers" />

<p>Visually, Balatro embraces a deliberately retro aesthetic with its CRT-style screen effects, pixel-adjacent card art, and hypnotic color palette that shifts with each deck theme. It is not a game that aims to impress with technical fidelity, but rather one that creates a mood -- the hazy, late-night feeling of being deep in a card game and unable to stop. The Jimbo mascot character, a grinning jester who watches from the corner of the screen, adds a touch of personality that makes the minimalist presentation feel intentional rather than sparse.</p>

<p>The soundtrack deserves enormous credit for creating the game's atmosphere. The lo-fi electronic music, with its warm synths and steady rhythms, is the perfect companion to long play sessions. It fades into the background when you are focused on strategy and steps forward during key moments. Sound effects for scoring are particularly satisfying -- the ascending tones as multipliers stack and the dramatic flourish when you hit massive chip counts provide constant dopamine hits that reinforce the core loop.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/ss_4862112e5030f74a5818cd4c31347d699ac5adf3.1920x1080.jpg?t=1774958057" alt="Balatro shop phase showing available Jokers and upgrades" />

<p>The mobile port is excellent. Touch controls feel natural and responsive, with drag-and-drop card selection that works intuitively on smaller screens. The interface scales beautifully to different device sizes, and text remains readable even on phones. Performance is flawless -- the game is lightweight enough to run on virtually any modern smartphone without battery drain concerns. This is the kind of game that was born for mobile, and the port respects that by being a faithful, uncompromised translation of the PC and console versions.</p>

<p>Monetization deserves special praise: there is none. Balatro is a premium purchase with no microtransactions, no season passes, no battle passes, and no gacha mechanics. You pay once and get the complete experience. In a mobile landscape dominated by free-to-play extraction, this approach feels both refreshing and defiant. The Friends of Jimbo collaboration packs, which add crossover content from other indie games, have been released as free updates, further demonstrating LocalThunk's player-first philosophy.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/ss_3be65a7dd3be072d567e11883d208861a7e959fa.1920x1080.jpg?t=1774958057" alt="Balatro scoring screen showing massive chip multiplier combo" />

<p>The game offers substantial replay value through unlockable decks, challenge runs, and stake difficulty levels that fundamentally change how you approach each run. Higher stakes introduce debuffs and restrictions that force you to rethink strategies you thought were foolproof. The seeded run system allows players to share specific runs with friends, adding a competitive element without requiring direct multiplayer. Community engagement has been remarkably active, with players sharing their most absurd scoring combinations and debating optimal strategies.</p>

<p>If there is a flaw, it is that RNG can occasionally be unkind. Some runs simply do not offer the Joker synergies needed to overcome later antes, and losing a forty-minute run to bad shop luck stings. This is inherent to the roguelike genre, but the sting is sharper in Balatro because the scoring requirements scale so aggressively. Additionally, players with no poker knowledge face a steeper onboarding curve, as the game assumes familiarity with hand rankings and does not always explain why certain hands are valuable.</p>

<p>Balatro is a masterpiece. It takes a concept that sounds ridiculous on paper and executes it with such precision and imagination that it has become the defining roguelike of its generation. The mobile port ensures that this brilliance is accessible anywhere, anytime, and the premium pricing model means you never feel nickel-and-dimed for enjoying it. If you have even a passing interest in card games, strategy games, or roguelikes, Balatro is essential.</p>`,
    },
  },

  // =============================================
  // 4. Pokemon TCG Pocket
  // =============================================
  {
    id: "g_pokemon_tcg_pocket",
    slug: "pokemon-tcg-pocket",
    title: "Pokemon TCG Pocket",
    description:
      "A streamlined digital adaptation of the Pokemon Trading Card Game designed for mobile devices, featuring immersive card collecting, quick battles, and social trading features from The Pokemon Company.",
    coverImage:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bkp.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scm22b.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scm22c.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scm22d.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scm22e.jpg",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=fE_03Hla2vU",
    developer: "Creatures Inc.",
    publisher: "The Pokemon Company",
    platforms: ["iOS", "Android"],
    genres: ["Card Game", "Collectible", "Strategy"],
    metacriticScore: 76,
    averageScore: 80,
    releaseDate: "2024-10-30T00:00:00.000Z",
    review: {
      slug: "pokemon-tcg-pocket-review",
      title:
        "Pokemon TCG Pocket Review -- A Collector's Dream With Battles That Need More Depth",
      score: 80,
      pros: [
        "Pack-opening experience is tactile and deeply satisfying",
        "Immersive cards with 3D effects are stunning collectibles",
        "Simplified rules make the TCG accessible to newcomers",
        "Daily free packs create a healthy collection habit",
      ],
      cons: [
        "Simplified battle system lacks depth for competitive TCG players",
        "Two free packs per day limits collection speed significantly",
        "Trading system restrictions feel overly conservative",
        "Energy system and pack timers push toward microtransactions",
      ],
      verdict:
        "Pokemon TCG Pocket captures the nostalgic thrill of opening booster packs in a beautifully polished package, though its simplified battles and restrictive economy prevent it from reaching the heights of the full TCG experience.",
      content: `<p>There is something primal about opening a booster pack. The crinkle of the wrapper, the anticipation of what lies inside, the rush of finding a rare card -- Pokemon TCG Pocket understands this feeling better than any digital card game before it. Developed by Creatures Inc. and published by The Pokemon Company, this mobile adaptation strips the Trading Card Game to its essentials and wraps it in one of the most polished collecting experiences on any platform.</p>

<p>The star of the show is the pack-opening mechanic. Rather than simply revealing cards through a menu, TCG Pocket simulates the physical experience of peeling open a foil wrapper and flipping through cards one by one. Each card slides into view with weight and texture, and rare pulls are accompanied by satisfying visual flourishes that make every pack feel like an event. Immersive cards -- special rare variants with 3D depth effects that respond to your phone's gyroscope -- are the crown jewels of any collection, and they look genuinely spectacular.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/fE_03Hla2vU" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Collecting drives the core loop, and TCG Pocket makes it compelling through a combination of nostalgia and smart design. Players receive two free booster packs daily, each containing five cards from the active expansion. Completing sets rewards bonus currency, and a binder system lets you organize and display your collection with the same satisfaction as a physical card binder. The art across all rarities is outstanding, blending classic Ken Sugimori illustrations with dynamic new pieces that showcase Pokemon in dramatic poses and environments.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scm22b.jpg" alt="Pokemon TCG Pocket pack opening showing the immersive card reveal experience" />

<p>The battle system is where TCG Pocket makes its most controversial decision: simplification. Standard Pokemon TCG rules have been streamlined significantly. Decks are only twenty cards. The bench holds three Pokemon instead of five. Prize cards are reduced to three. Energy is automatically generated each turn rather than drawn from the deck. These changes make matches faster and more accessible -- a typical game takes five to ten minutes -- but they also strip away much of the strategic nuance that makes the physical TCG so compelling. Experienced TCG players will find the decision trees shallower and the comeback potential more limited.</p>

<p>That said, the simplified system works remarkably well as an introduction to the Pokemon TCG. New players can learn the basics of type matchups, evolution chains, and ability management without being overwhelmed by the full ruleset. The single-player content, including trainer battles with increasing difficulty, provides a structured way to learn and improve. For casual players who primarily want to collect cards and enjoy occasional battles, the streamlined rules hit a sweet spot between accessibility and engagement.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scm22c.jpg" alt="Pokemon TCG Pocket battle screen showing the simplified gameplay layout" />

<p>Visually, TCG Pocket is gorgeous. The interface is clean and colorful, with smooth animations and a UI that feels native to mobile. Card detail screens let you zoom in to appreciate artwork, and the immersive cards with their parallax 3D effects are worth collecting purely for their visual impact. The overall presentation has the warm, inviting quality that Pokemon games are known for, making it feel like a premium experience rather than a quick cash-in.</p>

<p>Audio is pleasant without being particularly memorable. The soundtrack is upbeat and inoffensive, with different themes for menus, battles, and pack openings. Sound effects for card plays and pack reveals are well-crafted and contribute to the satisfying tactile feedback the game aims for. Voice clips from Pokemon add charm, particularly when a favorite creature appears in a pulled card.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scm22d.jpg" alt="Pokemon TCG Pocket collection binder showing organized cards" />

<p>Monetization is the area where TCG Pocket draws the most criticism. While the two daily free packs provide a steady trickle of new cards, players who want to complete sets quickly will find themselves bumping against the paywall. Pack Hourglasses speed up the timer for additional free packs, but they can also be purchased with real money. The Wonder Pick system, which lets you randomly select a card from another player's pack, uses a currency that regenerates slowly. None of this makes the game unplayable as a free experience, but the pace of free collection can feel deliberately throttled to encourage spending.</p>

<p>Social features include a friends list, the ability to view friends' collections, and the Wonder Pick trading system. Full direct trading was added post-launch with restrictions on rarity, which disappointed players hoping for a more open economy. Live events and new expansion releases create moments of community excitement, and the game has cultivated a dedicated player base that shares pull results and deck strategies across social media platforms.</p>

<p>Pokemon TCG Pocket is a game at war with itself. Its collecting experience is best-in-class, offering a digital simulation of booster pack excitement that nothing else matches. But its battle system sacrifices too much depth in the name of accessibility, and its economy occasionally feels like it is working against the player rather than with them. For collectors and casual fans, it is an absolute delight. For competitive TCG players looking for depth, it leaves you wanting more. Either way, it is hard to deny the satisfaction of peeling open that virtual wrapper and discovering what is inside.</p>`,
    },
  },

  // =============================================
  // 5. Call of Duty: Warzone Mobile
  // =============================================
  {
    id: "g_cod_warzone_mobile",
    slug: "call-of-duty-warzone-mobile",
    title: "Call of Duty: Warzone Mobile",
    description:
      "Activision's ambitious attempt to bring the full battle royale experience to smartphones, featuring the iconic Verdansk map, cross-progression with console and PC versions, and intense 120-player matches on mobile.",
    coverImage:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co6fgc.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scl4wk.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scl4wl.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scl4wm.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scl4wn.jpg",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=eBYXHsbeYKU",
    developer: "Activision",
    publisher: "Activision",
    platforms: ["iOS", "Android"],
    genres: ["Battle Royale", "FPS", "Action"],
    metacriticScore: 68,
    averageScore: 72,
    releaseDate: "2024-03-21T00:00:00.000Z",
    review: {
      slug: "call-of-duty-warzone-mobile-review",
      title:
        "Call of Duty: Warzone Mobile Review -- An Ambitious Port Weighed Down by Technical Compromises",
      score: 72,
      pros: [
        "Full Verdansk map faithfully recreated on mobile hardware",
        "Cross-progression with console and PC versions is seamless",
        "Gunplay feels authentically Call of Duty with responsive touch controls",
        "Regular content updates and seasonal events mirror the main game",
      ],
      cons: [
        "Severe performance issues on all but the newest devices",
        "Massive download size and frequent updates strain device storage",
        "Heavy battery drain limits sustained play sessions",
        "Bot-heavy lobbies undermine the battle royale experience",
      ],
      verdict:
        "Call of Duty: Warzone Mobile is a technically impressive but fundamentally flawed translation of the battle royale experience to mobile, delivering authentic gunplay at the cost of performance stability and accessibility.",
      content: `<p>Bringing a full-scale battle royale to mobile devices is one of gaming's most ambitious translation challenges. Call of Duty: Warzone Mobile attempts exactly that, cramming the entirety of the iconic Verdansk map onto smartphones alongside the complete arsenal of weapons, vehicles, and mechanics from the console and PC versions. The result is a game that frequently impresses with its ambition but just as frequently frustrates with the compromises required to make it work.</p>

<p>The headline feature is Verdansk itself -- the sprawling map that defined the original Warzone experience, faithfully recreated for mobile. Dropping from the plane over the Dam, pushing through Downtown's skyscrapers, or holding position in the TV Station carries real nostalgia for anyone who spent time in the original. The scale is genuinely impressive for a mobile title, and the fact that matches support up to 120 players (with a mix of real players and bots) creates moments of chaos that feel authentically Warzone.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/eBYXHsbeYKU" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Gunplay is where Warzone Mobile delivers its strongest argument for existence. The weapons feel punchy and distinct, with recoil patterns and handling characteristics that mirror their console counterparts. Touch controls are responsive and extensively customizable, with sensitivity sliders, layout options, and the ability to fine-tune every aspect of the control scheme. Controller support is also available for those who prefer physical inputs. The addition of gyroscope aiming on supported devices adds a layer of precision that touch alone cannot match.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scl4wk.jpg" alt="Call of Duty Warzone Mobile gameplay showing Verdansk map from above" />

<p>Visually, the game ranges from impressive to rough depending on your device. On flagship phones like the iPhone 15 Pro or recent Samsung Galaxy S series, Warzone Mobile can deliver surprisingly detailed environments and smooth frame rates. On mid-range devices, the visual compromises become significant -- texture pop-in, reduced draw distances, and frame rate drops during intense firefights are common. The game offers multiple graphics presets to help players find the right balance, but the gulf between the best and worst visual experiences is enormous.</p>

<p>Audio is solid when it works properly. Weapon sounds are faithfully ported from the console versions, footstep audio provides crucial directional information for tactical play, and the soundtrack maintains the intense military atmosphere the franchise is known for. However, audio mixing can be inconsistent on some devices, with spatial audio occasionally providing inaccurate directional cues that lead to frustrating deaths. Using headphones significantly improves the experience and is practically essential for competitive play.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scl4wl.jpg" alt="Call of Duty Warzone Mobile close-quarters combat inside a building" />

<p>The most significant issue with Warzone Mobile is performance stability. Even on high-end devices, the game struggles to maintain consistent frame rates during hectic moments -- vehicle chases, final circles with many players, and areas dense with particle effects all cause noticeable stuttering. On older or mid-range phones, these drops become severe enough to affect gameplay. Thermal throttling during extended sessions compounds the problem, as your device heats up and performance degrades further. This is a game that pushes mobile hardware to its absolute limits, and current hardware often is not enough.</p>

<p>Storage requirements are another sore point. The initial download is massive by mobile standards, and regular updates add to the footprint. Players with limited device storage will feel the squeeze, particularly on base-model phones with 64GB or less. The game does offer selective downloads for certain assets, but the core install remains large enough to be prohibitive for some users.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scl4wm.jpg" alt="Call of Duty Warzone Mobile loadout and weapon customization screen" />

<p>Cross-progression with the console and PC versions of Modern Warfare III and Warzone is a major selling point. Weapon levels, camo challenges, and Battle Pass progress carry across all platforms, meaning time invested on mobile directly benefits your console experience and vice versa. This integration gives Warzone Mobile a purpose beyond being a standalone mobile game -- it becomes a way to grind progression on the go, which adds significant value for dedicated Call of Duty players.</p>

<p>Monetization follows the standard Call of Duty model with a Battle Pass system, cosmetic store, and seasonal content. The game is free to play with no pay-to-win mechanics, which is commendable. However, the aggressive promotion of store bundles and the Battle Pass within the UI can feel intrusive. Premium cosmetics are expensive by mobile game standards, though they offer no gameplay advantage. The seasonal content cadence mirrors the main game, providing regular reasons to return.</p>

<p>The bot situation deserves mention because it significantly impacts the experience. Particularly at lower skill levels and during off-peak hours, lobbies are filled with bot opponents that behave predictably and offer little challenge. While this ensures fast queue times and gives new players room to learn, it also means that many matches lack the tension and unpredictability that define great battle royale moments. As you climb the ranks, human player ratios improve, but the transition is slow and not always transparent.</p>

<p>Call of Duty: Warzone Mobile is a technical achievement that stumbles under the weight of its own ambition. When it works -- when the frame rate is stable, real players fill the lobby, and the gunfight in a Downtown stairwell feels indistinguishable from its console counterpart -- it is genuinely remarkable. But those moments are too often interrupted by performance issues, battery warnings, and the nagging sense that mobile hardware is not quite ready for an experience this demanding. It is a worthwhile download for dedicated Call of Duty fans who want to progress on the go, but as a standalone mobile game, it falls short of the polish expected from one of gaming's biggest franchises.</p>`,
    },
  },
];

async function main() {
  console.log("Starting mobile reviews insert...\n");

  for (const game of games) {
    console.log(`Processing: ${game.title}`);

    // Insert or update Game
    try {
      await db.execute({
        sql: `INSERT OR IGNORE INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, averageScore, releaseDate, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          game.id,
          game.slug,
          game.title,
          game.description,
          game.coverImage,
          JSON.stringify(game.screenshots),
          game.trailerUrl,
          game.developer,
          game.publisher,
          JSON.stringify(game.platforms),
          JSON.stringify(game.genres),
          game.metacriticScore,
          game.averageScore,
          game.releaseDate,
          now,
          now,
        ],
      });
      console.log(`  Game inserted/skipped: ${game.slug}`);
    } catch (e: any) {
      console.log(`  Game error: ${e.message}`);
    }

    // Insert Review
    try {
      const reviewId = `rev_${game.slug}`;
      await db.execute({
        sql: `INSERT OR IGNORE INTO Review (id, slug, gameId, title, content, score, pros, cons, sourceReviews, verdict, status, publishedAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published', ?, ?, ?)`,
        args: [
          reviewId,
          game.review.slug,
          game.id,
          game.review.title,
          game.review.content,
          game.review.score,
          JSON.stringify(game.review.pros),
          JSON.stringify(game.review.cons),
          JSON.stringify([]),
          game.review.verdict,
          now,
          now,
          now,
        ],
      });
      console.log(`  Review inserted/skipped: ${game.review.slug}`);
    } catch (e: any) {
      console.log(`  Review error: ${e.message}`);
    }

    console.log("");
  }

  // Verify results
  const gameCount = await db.execute("SELECT COUNT(*) as cnt FROM Game");
  const reviewCount = await db.execute(
    "SELECT COUNT(*) as cnt FROM Review WHERE status = 'published'"
  );
  console.log(`Total games in DB: ${gameCount.rows[0].cnt}`);
  console.log(`Total published reviews: ${reviewCount.rows[0].cnt}`);

  // List newly inserted reviews
  const newReviews = await db.execute(
    "SELECT r.slug, r.score, g.title FROM Review r JOIN Game g ON r.gameId = g.id WHERE r.slug IN ('honkai-star-rail-review','marvel-snap-review','balatro-review','pokemon-tcg-pocket-review','call-of-duty-warzone-mobile-review')"
  );
  console.log("\nMobile game reviews in DB:");
  for (const row of newReviews.rows) {
    console.log(`  ${row.title} - Score: ${row.score} (${row.slug})`);
  }
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
