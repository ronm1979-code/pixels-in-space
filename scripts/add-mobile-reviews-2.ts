import "dotenv/config";
import { createClient } from "@libsql/client";
import https from "https";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!.replace("libsql://", "https://"),
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const now = new Date().toISOString();

// HEAD-check a URL, returns true if 2xx/3xx
function checkUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const req = https.request(url, { method: "HEAD", timeout: 8000 }, (res) => {
      resolve(res.statusCode! >= 200 && res.statusCode! < 400);
    });
    req.on("error", () => resolve(false));
    req.on("timeout", () => {
      req.destroy();
      resolve(false);
    });
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
  // ===== 1. ZENLESS ZONE ZERO =====
  {
    id: "g_zzz_mobile",
    slug: "zenless-zone-zero",
    title: "Zenless Zone Zero",
    description:
      "Dive into the stylish urban fantasy world of New Eridu in HoYoverse's fast-paced action RPG. Navigate the dangerous Hollows, build your team of unique Agents, and experience slick combat with flashy combos. Zenless Zone Zero brings a fresh aesthetic and adrenaline-pumping gameplay to mobile.",
    coverImage:
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sclteg.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sclteg.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sclxuf.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sclxug.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sclxuh.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sclxui.jpg",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=MK9P3Rqf7_g",
    developer: "HoYoverse",
    publisher: "HoYoverse",
    platforms: ["PC", "PlayStation 5", "iOS", "Android"],
    genres: ["Action RPG", "Hack and Slash", "Gacha"],
    metacriticScore: 75,
    averageScore: 79,
    releaseDate: "2024-07-04T00:00:00.000Z",
    review: {
      title:
        "Zenless Zone Zero Review: Style Meets Substance in HoYoverse's Slickest Game Yet",
      score: 79,
      pros: [
        "Fluid and responsive combat with satisfying combo chains",
        "Outstanding art direction and character design",
        "Excellent soundtrack that blends electronic, hip-hop, and rock",
        "Diverse roster of Agents with unique playstyles",
      ],
      cons: [
        "TV mode exploration segments can feel tedious",
        "Monetization is aggressive with multiple gacha systems",
        "Story pacing stumbles in the mid-game chapters",
        "Repetitive Hollow dungeon layouts",
      ],
      verdict:
        "Zenless Zone Zero delivers some of the best action combat on mobile with undeniable style, though its gacha systems and uneven pacing hold it back from true greatness.",
      publishedAt: "2024-07-15T12:00:00.000Z",
      content: `<p>HoYoverse has built an empire on the gacha action RPG formula, and Zenless Zone Zero represents the studio's most ambitious attempt to break new ground within that framework. Set in the neon-drenched metropolis of New Eridu, the game trades the open-world exploration of Genshin Impact for tight, corridor-based combat encounters that prioritize moment-to-moment action above all else. The result is a game that feels fundamentally different from its stablemates while retaining the production values that have made HoYoverse a household name in mobile gaming.</p>

<p>The combat system is the clear star of the show. Where Genshin Impact offered satisfying but relatively simple hack-and-slash mechanics, Zenless Zone Zero builds a proper action game framework with dodge cancels, parry windows, chain attacks, and assist switches that reward skilled play. Each Agent in your three-person squad handles differently, and learning the timing of switch attacks to extend combos feels genuinely rewarding. The dodge mechanic in particular is crisp and responsive, providing generous invincibility frames that make narrowly avoiding a boss attack feel incredible.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/sclxuf.jpg" alt="Zenless Zone Zero combat gameplay" />

<p>Visually, HoYoverse has outdone themselves. The cel-shaded art style pops with personality, drawing from street culture, anime, and retro-futurism to create an aesthetic that feels entirely its own. Character animations are fluid and expressive, with idle animations and combat flourishes that give each Agent a distinct personality before they even speak. The environmental design of New Eridu captures a believable lived-in quality, from the bustling street markets to the eerie distortion of the Hollows.</p>

<p>The audio design deserves special recognition. The soundtrack shifts dynamically between exploration and combat, weaving electronic beats, hip-hop percussion, and rock guitar into a cohesive musical identity. Combat tracks escalate in intensity as encounters grow more dangerous, and the satisfying crunch of landing a perfect dodge into a counter-attack is enhanced by punchy sound effects that give every hit weight and impact.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/MK9P3Rqf7_g" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Where the experience falters is in the exploration segments. The TV mode, which has players navigating grid-based maps to progress through the Hollows, feels like filler between the excellent combat encounters. These sections lack the visual flair and tactile satisfaction of the fights, and after the first few hours they become a chore that breaks the otherwise excellent pacing. HoYoverse has been iterating on this system with updates, but it remains the weakest link in the gameplay loop.</p>

<p>Monetization follows the familiar gacha template, and Zenless Zone Zero layers multiple banner systems on top of each other. The standard character banner, weapon banner, and limited-time event banners all compete for your premium currency, and the pity system, while present, requires significant investment to guarantee a specific five-star Agent. Free-to-play players can absolutely enjoy the game, but the pressure to spend is constant and increasingly aggressive during limited-time events.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/sclxug.jpg" alt="Zenless Zone Zero exploration in New Eridu" />

<p>The narrative oscillates between genuinely engaging and frustratingly padded. The core story of the Hollow Raiders and the mysteries surrounding the Hollows themselves provides a solid foundation, and the main cast of Wise and Belle is likeable enough to carry the dialogue-heavy sections. However, the mid-game chapters introduce filler arcs that slow the pacing dramatically, and some character introductions feel rushed in service of the gacha roster expansion.</p>

<p>Performance on mobile is impressive for a game of this visual fidelity. The combat runs at a stable 60 frames per second on flagship devices, and the touch controls are responsive enough to execute precise dodge timings. Loading times are reasonable, and the download size, while large, is manageable with selective resource downloads. Battery drain during extended sessions remains a concern, as is the significant heat generation on most devices.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/sclxuh.jpg" alt="Zenless Zone Zero boss fight" />

<p>The social features are adequate but not groundbreaking. A friend system allows you to borrow Agents from other players, and cooperative events appear regularly in the update cycle. The endgame content, centered around the Shiyu Defense challenge mode, provides a reasonable skill ceiling for dedicated players, though the rewards taper off quickly for those not chasing leaderboard rankings.</p>

<p>Zenless Zone Zero is a game at war with itself. Its combat is among the finest on any mobile platform, its presentation is gorgeous, and its moment-to-moment gameplay loop can be genuinely thrilling. But the aggressive monetization, uneven story pacing, and tedious exploration segments prevent it from reaching the heights of HoYoverse's best work. For action RPG fans willing to navigate the gacha trappings, there is a tremendous amount to enjoy here.</p>`,
    },
  },

  // ===== 2. WUTHERING WAVES =====
  {
    id: "g_wuwa_mobile",
    slug: "wuthering-waves",
    title: "Wuthering Waves",
    description:
      "Explore a vast post-apocalyptic open world in Kuro Games' action RPG. As the Rover, awaken in a world transformed by a catastrophic event and uncover the truth behind the Lament. Featuring fast-paced combat, deep character customization, and a hauntingly beautiful soundtrack.",
    coverImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3513350/4092d208f3edbf69a8d06a25a8dbdad13903b38a/ss_4092d208f3edbf69a8d06a25a8dbdad13903b38a.1920x1080.jpg?t=1774412683",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3513350/4092d208f3edbf69a8d06a25a8dbdad13903b38a/ss_4092d208f3edbf69a8d06a25a8dbdad13903b38a.1920x1080.jpg?t=1774412683",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3513350/0236e7d2549a2272f7cc0dc9e2221bdccfb6a9f6/ss_0236e7d2549a2272f7cc0dc9e2221bdccfb6a9f6.1920x1080.jpg?t=1774412683",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3513350/af9c168c1111547b7c68a14237099d926456b284/ss_af9c168c1111547b7c68a14237099d926456b284.1920x1080.jpg?t=1774412683",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3513350/e6c7497c3ccdb9ef1bd94733c44911b71cef6db5/ss_e6c7497c3ccdb9ef1bd94733c44911b71cef6db5.1920x1080.jpg?t=1774412683",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3513350/c58032e2c6bd154afed99f7a079dd0bd45404110/ss_c58032e2c6bd154afed99f7a079dd0bd45404110.1920x1080.jpg?t=1774412683",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=yQXQ3s3SuIs",
    developer: "Kuro Games",
    publisher: "Kuro Games",
    platforms: ["PC", "PlayStation 5", "iOS", "Android"],
    genres: ["Action RPG", "Open World", "Gacha"],
    metacriticScore: 73,
    averageScore: 75,
    releaseDate: "2024-05-23T00:00:00.000Z",
    review: {
      title:
        "Wuthering Waves Review: An Ambitious Open World RPG That Dares to Compete",
      score: 75,
      pros: [
        "Deep and rewarding combat system with Echo mechanics",
        "Massive open world with impressive environmental variety",
        "Generous free-to-play economy compared to competitors",
        "Continuous improvement through frequent quality updates",
      ],
      cons: [
        "Launch was plagued with performance issues and bugs",
        "Story presentation lacks polish and emotional impact",
        "Character designs can feel derivative of competitors",
        "Exploration rewards often feel underwhelming",
      ],
      verdict:
        "Wuthering Waves is a technically ambitious open-world RPG with excellent combat, but inconsistent polish and a weak narrative prevent it from fully realizing its potential.",
      publishedAt: "2024-06-05T12:00:00.000Z",
      content: `<p>Kuro Games entered one of the most competitive spaces in mobile gaming with Wuthering Waves, and the audacity of the attempt alone deserves recognition. Going head-to-head with Genshin Impact in the open-world gacha RPG category is not a decision made lightly, and while Wuthering Waves does not dethrone the genre's king, it carves out a respectable niche for players hungry for deeper combat mechanics and a darker tonal palette.</p>

<p>The combat system is where Wuthering Waves makes its strongest case for existence. Building on the foundation Kuro Games established with Punishing: Gray Raven, the battle mechanics emphasize precise timing, aerial combos, and a unique Echo system that allows players to absorb defeated enemies and deploy their abilities in combat. The parry window is tighter than most mobile action games dare to implement, and successfully countering a boss attack into a devastating combo chain delivers a rush of satisfaction that few competitors can match.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3513350/4092d208f3edbf69a8d06a25a8dbdad13903b38a/ss_4092d208f3edbf69a8d06a25a8dbdad13903b38a.1920x1080.jpg?t=1774412683" alt="Wuthering Waves open world exploration" />

<p>The open world of Solaris-3 is vast and visually diverse. From lush forests to desolate wastelands scarred by the Lament, the environmental design creates a sense of discovery that keeps exploration engaging for dozens of hours. The verticality of the terrain is well-utilized, with wall-running and grappling mechanics that make traversal feel more dynamic than simply walking between points of interest. Hidden puzzles and challenge dungeons are scattered throughout the landscape, rewarding curious players who venture off the beaten path.</p>

<p>The Echo system deserves special attention as the game's most innovative mechanic. Every enemy type in the game can be captured as an Echo after defeat, and these Echoes function as both equipment and active abilities. Building the right Echo loadout for each character adds a layer of strategic depth to the equipment grind that keeps the gameplay loop fresh far longer than traditional artifact farming. The system encourages experimentation and creates moments of genuine discovery when an unexpected Echo combination proves devastatingly effective.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/yQXQ3s3SuIs" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Where the game stumbles most noticeably is in its narrative presentation. The story of the Rover awakening in a shattered world has potential, but the execution relies too heavily on exposition-heavy dialogue and lacks the cinematic flair that makes competing titles so engaging. Voice acting quality is inconsistent across languages, and several key story moments are undermined by awkward pacing or abrupt tonal shifts. Kuro Games has acknowledged these shortcomings and has been steadily improving the storytelling with each major update.</p>

<p>The launch period was rough. Performance issues plagued lower-end devices, server instability caused frequent disconnections, and several game-breaking bugs required emergency patches. To their credit, Kuro Games responded quickly with fixes and generous compensation, and the game today runs significantly better than it did at launch. However, the rocky start cost the game momentum and colored initial critical reception in ways that have been difficult to shake.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3513350/0236e7d2549a2272f7cc0dc9e2221bdccfb6a9f6/ss_0236e7d2549a2272f7cc0dc9e2221bdccfb6a9f6.1920x1080.jpg?t=1774412683" alt="Wuthering Waves combat system" />

<p>The monetization model is notably more generous than the industry standard. The gacha pity system guarantees a five-star character at a lower threshold than most competitors, and the free premium currency distribution through events and daily activities is substantial enough that free-to-play users can realistically obtain most limited characters over time. This player-friendly approach has earned Kuro Games significant goodwill within the community.</p>

<p>Audio design is a genuine highlight. The soundtrack blends orchestral grandeur with electronic elements to create a unique sonic identity that perfectly complements the post-apocalyptic setting. Boss battle themes are particularly memorable, with dynamic compositions that shift intensity based on the phase of the encounter. Sound design during combat is punchy and responsive, with each weapon type producing distinct audio feedback that enhances the tactile quality of the fighting.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3513350/af9c168c1111547b7c68a14237099d926456b284/ss_af9c168c1111547b7c68a14237099d926456b284.1920x1080.jpg?t=1774412683" alt="Wuthering Waves character abilities" />

<p>Content updates have arrived at a steady pace, with new regions, characters, and gameplay systems being introduced roughly every six weeks. The endgame content, centered around the Tower of Adversity challenge mode, provides meaningful difficulty scaling for veteran players. The multiplayer co-op system allows friends to tackle overworld bosses together, though it lacks the depth of a full cooperative campaign. Wuthering Waves is a game that has grown substantially since launch, and Kuro Games' commitment to improvement suggests the best may be yet to come.</p>`,
    },
  },

  // ===== 3. AFK JOURNEY =====
  {
    id: "g_afk_journey_mobile",
    slug: "afk-journey",
    title: "AFK Journey",
    description:
      "Explore a gorgeous open world in this strategic idle RPG from Lilith Games. Collect and upgrade a diverse roster of heroes, engage in tactical battles, and progress even while offline. AFK Journey combines accessible gameplay with deep strategic elements, making it perfect for mobile gaming on the go.",
    coverImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4195600/d287cbd0292e09c75ad1967dc2428183f195f46a/ss_d287cbd0292e09c75ad1967dc2428183f195f46a.1920x1080.jpg?t=1775714607",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4195600/d287cbd0292e09c75ad1967dc2428183f195f46a/ss_d287cbd0292e09c75ad1967dc2428183f195f46a.1920x1080.jpg?t=1775714607",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4195600/294fe76f1d03b98286edbba74a808ec2e2d17e5a/ss_294fe76f1d03b98286edbba74a808ec2e2d17e5a.1920x1080.jpg?t=1775714607",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4195600/8720288a9b5d6f9c438839dc22ef578ba52b5d7e/ss_8720288a9b5d6f9c438839dc22ef578ba52b5d7e.1920x1080.jpg?t=1775714607",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4195600/49ebac104bf756ffaf0c2ee5edaad332d6c3a697/ss_49ebac104bf756ffaf0c2ee5edaad332d6c3a697.1920x1080.jpg?t=1775714607",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4195600/7a0faf57fe4c0afb0223b836fd9cbaf3b1de9d94/ss_7a0faf57fe4c0afb0223b836fd9cbaf3b1de9d94.1920x1080.jpg?t=1775714607",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=HTZBOt9440E",
    developer: "Lilith Games",
    publisher: "Farlight Games",
    platforms: ["PC", "iOS", "Android"],
    genres: ["Idle RPG", "Strategy", "Open World"],
    metacriticScore: 76,
    averageScore: 76,
    releaseDate: "2024-03-27T00:00:00.000Z",
    review: {
      title:
        "AFK Journey Review: The Idle RPG Evolves Into Something Surprising",
      score: 76,
      pros: [
        "Gorgeous storybook art style with impressive 3D environments",
        "Idle mechanics that respect the player's time",
        "Deep hero collection and team composition strategy",
        "Won iPhone Game of the Year at Google Play Best of 2024",
      ],
      cons: [
        "Late-game progression hits severe walls without spending",
        "Real-time combat mode feels underdeveloped",
        "Story lacks the depth to match the beautiful presentation",
      ],
      verdict:
        "AFK Journey successfully evolves the idle RPG formula with beautiful visuals and thoughtful quality-of-life design, even if its progression walls betray its free-to-play roots.",
      publishedAt: "2024-04-10T12:00:00.000Z",
      content: `<p>The idle RPG genre has long been dismissed by traditional gamers as nothing more than a glorified slot machine, and for good reason. Most entries in the category offer minimal interaction, relying entirely on gacha pulls and auto-battle to keep players engaged. AFK Journey, the ambitious follow-up to Lilith Games' enormously successful AFK Arena, challenges that perception by wrapping its idle mechanics in a genuinely gorgeous open-world adventure that looks and feels nothing like the genre's reputation would suggest.</p>

<p>The first thing that strikes you about AFK Journey is its presentation. The storybook art direction is breathtaking, rendering the world of Esperia in a warm, painterly style that evokes the best of animated fantasy films. Characters are beautifully designed with expressive animations, environments overflow with detail and color, and the transition from 2D sprites to full 3D models gives every hero a presence that the original AFK Arena could only hint at. This is one of the best-looking mobile games available, period.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4195600/d287cbd0292e09c75ad1967dc2428183f195f46a/ss_d287cbd0292e09c75ad1967dc2428183f195f46a.1920x1080.jpg?t=1775714607" alt="AFK Journey open world exploration" />

<p>The core gameplay loop retains the idle DNA that made AFK Arena successful. Heroes auto-battle through encounters, leveling up and collecting resources whether you are actively playing or not. The innovation comes in how AFK Journey layers additional systems on top of this foundation. An explorable open world with puzzles, treasure chests, and environmental interactions gives players reasons to actively engage beyond simply watching numbers go up. Team positioning and formation management add genuine tactical considerations to each encounter.</p>

<p>The hero collection system is the beating heart of the experience. With dozens of characters across multiple factions, building an effective team requires understanding synergies between classes, elemental affinities, and factional bonuses. The gacha system provides the primary acquisition method, and while the rates are not unusually generous, the game's pity system ensures that dedicated players will eventually obtain the heroes they want. Duplicate heroes feed into an ascension system that provides meaningful power growth.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/HTZBOt9440E" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Audio design complements the visual splendor with a warm orchestral soundtrack that perfectly matches the storybook aesthetic. Battle music escalates appropriately during boss encounters, and the ambient sounds of the overworld create a cozy atmosphere that makes exploration feel relaxing rather than tedious. Voice acting is present for major story beats, though the quality varies between characters.</p>

<p>The monetization, while more transparent than many competitors, still reveals its teeth in the late game. Progression beyond certain power thresholds becomes extremely slow without investment in premium currency, and the seasonal battle pass adds another layer of spending pressure. The game is perfectly enjoyable as a casual free-to-play experience for the first several weeks, but competitive-minded players will eventually feel the squeeze. This friction is the genre's original sin, and AFK Journey does not fully escape it.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4195600/294fe76f1d03b98286edbba74a808ec2e2d17e5a/ss_294fe76f1d03b98286edbba74a808ec2e2d17e5a.1920x1080.jpg?t=1775714607" alt="AFK Journey hero collection" />

<p>Social features are well-implemented. Guild systems provide cooperative objectives and social interaction, the PvP arena offers competitive outlets for those who enjoy testing their team compositions, and regular community events keep the player base engaged. The real-time combat mode, introduced in a post-launch update, attempts to add more active gameplay but feels bolted-on rather than integral, with imprecise controls that lack the polish of the core auto-battle system.</p>

<p>Content updates have been substantial and frequent. New story chapters, heroes, and gameplay modes arrive regularly, and the seasonal content structure keeps the game feeling fresh. The collaboration events with major anime and game franchises have been particularly well-received, offering unique heroes and cosmetics that create genuine excitement in the community. Lilith Games has demonstrated a clear commitment to evolving the game beyond its initial offering.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4195600/8720288a9b5d6f9c438839dc22ef578ba52b5d7e/ss_8720288a9b5d6f9c438839dc22ef578ba52b5d7e.1920x1080.jpg?t=1775714607" alt="AFK Journey battle system" />

<p>AFK Journey succeeds in elevating the idle RPG genre to a level of visual and mechanical sophistication that was previously unimaginable. Its storybook world is a joy to inhabit, its hero collection offers genuine strategic depth, and its respect for the player's time makes it an ideal companion for busy schedules. The late-game monetization pressure and underdeveloped real-time combat mode are genuine drawbacks, but they do not erase the considerable accomplishments on display. This is an idle RPG that deserves to be taken seriously.</p>`,
    },
  },

  // ===== 4. SQUAD BUSTERS =====
  {
    id: "g_squad_busters",
    slug: "squad-busters",
    title: "Squad Busters",
    description:
      "Supercell's party action game brings together iconic characters from Clash of Clans, Brawl Stars, Hay Day, and more in chaotic 10-player multiplayer matches. Collect characters, form squads, and compete in fast-paced battles where anything can happen.",
    coverImage:
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scs0z0.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scs0z0.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scs0z1.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scs0z2.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scs0z3.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scs0z4.jpg",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=aFHM24c86p0",
    developer: "Supercell",
    publisher: "Supercell",
    platforms: ["iOS", "Android"],
    genres: ["Party Action", "Multiplayer", "Casual"],
    metacriticScore: 72,
    averageScore: 70,
    releaseDate: "2024-05-29T00:00:00.000Z",
    review: {
      title:
        "Squad Busters Review: Supercell's Charming Crossover Falls Short of Its Potential",
      score: 70,
      pros: [
        "Irresistible crossover appeal with beloved Supercell characters",
        "Quick match format perfect for mobile sessions",
        "Surprisingly deep squad composition strategy",
        "Polished animations and visual charm",
      ],
      cons: [
        "Matches become repetitive after extended play",
        "Character progression relies heavily on random drops",
        "Balancing issues favor certain squad compositions",
        "Lack of meaningful competitive mode at launch",
      ],
      verdict:
        "Squad Busters is a delightful but shallow party game that thrives on Supercell nostalgia and quick-play appeal but lacks the staying power of its developer's best titles.",
      publishedAt: "2024-06-12T12:00:00.000Z",
      content: `<p>When Supercell, the studio behind some of mobile gaming's most enduring franchises, announces a new game, the entire industry pays attention. Squad Busters arrives with an irresistible pitch: take beloved characters from Clash of Clans, Brawl Stars, Hay Day, Clash Royale, and Boom Beach, throw them all into a 10-player battle royale-style arena, and let chaos reign. The concept is immediately appealing, and the execution delivers exactly the kind of polished, accessible experience Supercell is known for. Whether that is enough to sustain long-term engagement is another question entirely.</p>

<p>Each match in Squad Busters follows a simple but effective loop. You start alone on a map filled with monsters, treasure chests, and other players. Breaking crates and defeating enemies rewards you with character cards that expand your squad, and as your team grows, so does your combat power. The goal is to collect the most gems, green crystals, or other match-specific objectives before the timer expires. It sounds straightforward, and it is, but the moment-to-moment decisions about when to fight, when to flee, and which characters to add to your roster create genuine tension.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scs0z1.jpg" alt="Squad Busters gameplay" />

<p>The character roster is the game's most compelling feature. Seeing the Barbarian King from Clash of Clans fighting alongside Shelly from Brawl Stars and the Chicken from Hay Day creates a sense of playful absurdity that perfectly matches the game's tone. Each character brings unique abilities that influence your squad's strategy: tanks absorb damage, healers keep your team alive, and damage dealers clear enemies quickly. Building a balanced squad on the fly while adapting to what the map offers is where the strategic depth lives.</p>

<p>Visually, Squad Busters is quintessential Supercell. The character models are chunky and charming, animations are buttery smooth, and the colorful environments are packed with destructible elements that make every match feel dynamic. The UI is clean and intuitive, and the overall presentation screams premium quality. Supercell's art team has done a remarkable job adapting characters from wildly different visual styles into a cohesive aesthetic that works.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/aFHM24c86p0" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The audio design maintains the cheerful energy throughout. Upbeat music accompanies the frenetic action, sound effects are satisfying and clear, and character voicelines add personality to the battles. The overall sound profile is designed to be pleasant during extended sessions, though it lacks the memorable themes that define Supercell's other titles.</p>

<p>The cracks begin to show after the initial honeymoon period. Match variety is limited, and the core gameplay loop, while fun, does not evolve meaningfully as you progress. Higher-level play simply features stronger characters in the same format, and the absence of a robust ranked or competitive mode at launch left dedicated players without clear goals to chase. Supercell has added seasonal content and new game modes since launch, but the foundation remains thin compared to the depth of Brawl Stars or Clash Royale.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scs0z2.jpg" alt="Squad Busters character collection" />

<p>Character progression is tied to a collection system that rewards duplicate character cards, and acquiring specific characters relies heavily on random chest drops. While you can influence your luck through targeted challenges and shop purchases, the randomness can be frustrating for players who want to build specific squads. The monetization is relatively gentle by mobile standards, with no mandatory purchases, but the slow pace of free progression encourages spending.</p>

<p>Performance across a wide range of mobile devices is excellent, as expected from Supercell. The game runs smoothly on older hardware, loading times are minimal, and network stability during 10-player matches is impressive. Battery consumption is reasonable for the visual quality on display, and the small download size makes it accessible to players with limited storage.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scs0z3.jpg" alt="Squad Busters arena battle" />

<p>Squad Busters is a perfectly pleasant mobile game from one of the industry's most talented studios. Its crossover appeal is genuine, its moment-to-moment gameplay is fun, and its production values are exemplary. But it occupies an awkward middle ground between casual party game and competitive multiplayer that prevents it from excelling at either. Supercell fans will find plenty to enjoy, but the game lacks the addictive depth that transforms a good game into a daily habit. It is worth noting that Supercell has announced plans to sunset Squad Busters, suggesting the studio itself recognizes the game did not reach its full potential.</p>`,
    },
  },

  // ===== 5. BRAWL STARS =====
  {
    id: "g_brawl_stars",
    slug: "brawl-stars",
    title: "Brawl Stars",
    description:
      "Supercell's multiplayer brawler delivers fast-paced 3v3 battles and battle royale action with a constantly expanding roster of unique Brawlers. Quick matches, deep strategy, and regular content updates have made it one of the most popular mobile games in the world.",
    coverImage:
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scf81b.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scf81b.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scf81c.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scf81d.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scf81e.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scf81f.jpg",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=6F3pA_cwMgo",
    developer: "Supercell",
    publisher: "Supercell",
    platforms: ["iOS", "Android"],
    genres: ["Multiplayer Brawler", "Action", "Battle Royale"],
    metacriticScore: 72,
    averageScore: 84,
    releaseDate: "2018-12-12T00:00:00.000Z",
    review: {
      title:
        "Brawl Stars Review: The Mobile Multiplayer That Just Keeps Getting Better",
      score: 84,
      pros: [
        "Massive roster of over 80 unique Brawlers with distinct playstyles",
        "Three-minute matches are perfectly designed for mobile",
        "Consistently excellent content updates and seasonal events",
        "Thriving esports scene with genuine competitive depth",
      ],
      cons: [
        "New player experience can feel overwhelming",
        "Trophy system creates frustrating matchmaking imbalances",
        "Brawler balance frequently shifts with updates",
        "Progression slows dramatically at higher levels",
      ],
      verdict:
        "Brawl Stars has evolved into one of mobile gaming's finest competitive experiences, delivering unmatched variety and replayability in bite-sized sessions that respect the player's time.",
      publishedAt: "2024-12-15T12:00:00.000Z",
      content: `<p>Six years after its global launch, Brawl Stars stands as Supercell's most ambitious and continually evolving title. What began as a relatively simple 3v3 top-down brawler has grown into a sprawling multiplayer ecosystem with over 80 unique characters, dozens of game modes, a thriving esports scene, and a content pipeline that shows no signs of slowing down. In an industry where most mobile games peak within their first year, Brawl Stars has somehow gotten better with age.</p>

<p>The core of Brawl Stars remains beautifully simple. Each match lasts approximately three minutes, pitting teams of three against each other in objective-based modes that range from gem collection to zone control to a battle royale-style Showdown. The brevity is key to the game's addictive quality. Whether you have two minutes or two hours, Brawl Stars fits seamlessly into any schedule, and the quick turnaround between matches eliminates the frustration of long queue times that plague other competitive mobile titles.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scf81b.jpg" alt="Brawl Stars multiplayer gameplay" />

<p>The Brawler roster is where the game truly shines. Each character features a unique attack pattern, super ability, gadget, and star power that creates dramatically different playstyles. Shelly's close-range shotgun demands aggressive, in-your-face gameplay, while Piper rewards patient long-range precision. Mortis dashes through enemies with vampiric flair, and Poco heals allies with musical notes. The sheer variety ensures that finding a main is easy, but mastering the full roster is a challenge that keeps veteran players engaged for years.</p>

<p>Supercell's commitment to regular updates deserves special praise. Major content drops arrive roughly every two months, introducing new Brawlers, game modes, maps, and seasonal themes that keep the experience fresh. The collaboration events with franchises like Toy Story and SpongeBob SquarePants demonstrate the studio's willingness to experiment, and these limited-time events create genuine excitement in the community. The seasonal pass system provides a clear progression path for active players, with both free and premium tracks offering meaningful rewards.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/6F3pA_cwMgo" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The competitive depth beneath the casual exterior is remarkable. At higher trophy levels, team composition becomes critically important, map awareness dictates engagement timing, and the subtle positioning differences between a good player and a great one determine match outcomes. The ranked Power League mode provides a structured competitive experience, though its matchmaking can occasionally produce lopsided matches that feel unfair. The Brawl Stars Championship has established itself as a legitimate esports circuit, proving that mobile gaming can sustain high-level competitive play.</p>

<p>Visually, Brawl Stars maintains its signature chunky, colorful art style that reads perfectly on small screens. Character silhouettes are immediately distinguishable in the heat of battle, environmental hazards are clearly communicated, and the special effects strike a balance between spectacle and clarity. The animation quality has improved substantially since launch, with newer Brawlers featuring increasingly expressive attack and victory animations. The game runs flawlessly on virtually any device manufactured in the last five years.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scf81c.jpg" alt="Brawl Stars character selection" />

<p>The audio design matches the visual energy perfectly. Each Brawler has a distinct sound profile that helps players identify nearby threats, and the punchy impact sounds make every hit feel satisfying. The music rotates with seasonal themes, keeping the audio experience fresh, and the character voice lines add personality without becoming grating. The overall sound mix is well-balanced for both speakers and headphones.</p>

<p>Monetization follows Supercell's established pattern: fair but persistent. New Brawlers can be earned through gameplay, but the time investment is substantial, and premium cosmetics provide a constant temptation. The Brawl Pass offers the best value for spending players, and the game can absolutely be enjoyed without any purchases. However, progression slows dramatically at higher levels, and the gap between a free player's roster and a spending player's roster becomes increasingly apparent over time.</p>

<img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/scf81d.jpg" alt="Brawl Stars special event" />

<p>The new player experience is the game's most significant weakness. With over 80 Brawlers, dozens of game modes, and a complex progression system involving trophies, power points, star powers, gadgets, hypercharges, and seasonal mechanics, the onboarding process can feel overwhelming. Supercell has added tutorial improvements over the years, but the sheer volume of systems still creates a steep learning curve that may deter casual newcomers.</p>

<p>Brawl Stars represents the gold standard for live-service mobile gaming. Its quick-play design respects the platform, its competitive depth rewards dedication, and its constant evolution ensures there is always something new to discover. After six years, it remains the multiplayer mobile game to beat, and Supercell shows no signs of abandoning the title that has become arguably their most beloved creation. If you have not played Brawl Stars recently, now is as good a time as any to dive back in.</p>`,
    },
  },
];

async function main() {
  console.log("Starting insertion of 5 mobile game reviews...\n");

  // Verify sample image URLs
  console.log("Verifying sample image URLs...");
  const sampleUrls = [
    games[0].screenshots[1],
    games[1].screenshots[0],
    games[2].screenshots[0],
    games[3].screenshots[1],
    games[4].screenshots[1],
  ];
  for (const url of sampleUrls) {
    const ok = await checkUrl(url);
    console.log(`  ${ok ? "OK" : "FAIL"}: ${url.substring(0, 80)}...`);
    if (!ok) {
      console.error("ABORTING: Image URL verification failed!");
      process.exit(1);
    }
  }
  console.log("");

  for (const g of games) {
    // Check if game already exists
    const existing = await db.execute({
      sql: "SELECT id FROM Game WHERE slug = ?",
      args: [g.slug],
    });
    let gameId = existing.rows[0]?.id as string;

    if (!gameId) {
      gameId = g.id;
      await db.execute({
        sql: `INSERT INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, averageScore, releaseDate, createdAt, updatedAt)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
          g.releaseDate,
          now,
          now,
        ],
      });
      console.log(`[+] Game added: ${g.title}`);
    } else {
      // Update existing game with fresh screenshots and trailer
      await db.execute({
        sql: `UPDATE Game SET coverImage = ?, screenshots = ?, trailerUrl = ?, averageScore = ?, metacriticScore = ?, updatedAt = ? WHERE id = ?`,
        args: [
          g.coverImage,
          JSON.stringify(g.screenshots),
          g.trailerUrl,
          g.averageScore,
          g.metacriticScore,
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
      const reviewId = "rev_" + g.slug;
      await db.execute({
        sql: `INSERT INTO Review (id, slug, gameId, title, content, score, pros, cons, sourceReviews, verdict, status, publishedAt, createdAt, updatedAt)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          reviewId,
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

  console.log("\n=== All 5 mobile game reviews processed! ===");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
