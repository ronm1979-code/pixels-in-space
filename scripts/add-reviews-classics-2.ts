import "dotenv/config";
import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!.replace("libsql://", "https://"),
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const now = new Date().toISOString();

const games = [
  {
    id: "g_bmw",
    slug: "black-myth-wukong",
    title: "Black Myth: Wukong",
    description:
      "An action RPG rooted in Chinese mythology, Black Myth: Wukong brings the legendary Monkey King to life with breathtaking visuals, intense soulslike combat, and a deeply atmospheric journey through ancient Chinese folklore.",
    coverImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg?t=1760601605",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg?t=1760601605",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_d9391ab31a4d15dddf7ba4949bfa44f5d9170580.1920x1080.jpg?t=1760601605",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_524a39da392ee83dde091033562bc719d46b5838.1920x1080.jpg?t=1760601605",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_968bbc9caceb7d798bd0c393e1e9b4c44ed6d835.1920x1080.jpg?t=1760601605",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_415397426d4c939ebb8a93ac66831f28ee7199be.1920x1080.jpg?t=1760601605",
    ],
    developer: "Game Science",
    publisher: "Game Science",
    platforms: ["PC", "PlayStation 5"],
    genres: ["Action RPG", "Soulslike", "Mythology"],
    metacriticScore: 82,
    score: 82,
    steamAppId: "2358720",
    trailerUrl: "https://www.youtube.com/watch?v=bzyMLoSwYvk",
    releaseDate: "2024-08-20T00:00:00.000Z",
    review: {
      title:
        "Black Myth: Wukong Review - A Stunning Debut That Brings Chinese Mythology to the World Stage",
      verdict:
        "A visually breathtaking action RPG that overcomes its rough edges through sheer ambition and an unforgettable journey through Chinese mythology",
      pros: [
        "Jaw-dropping visual fidelity that sets a new benchmark for the genre",
        "Combat system offers satisfying depth with 72 transformation abilities",
        "Rich, atmospheric world steeped in authentic Chinese mythology",
        "Boss encounters are spectacular and challenging in equal measure",
      ],
      cons: [
        "Inconsistent difficulty spikes can frustrate in later chapters",
        "Camera struggles in tight spaces during fast-paced encounters",
        "Story presentation relies heavily on assumed knowledge of Journey to the West",
        "Some filler encounters between boss fights feel repetitive",
      ],
      content: `<p>Black Myth: Wukong is a statement of intent from Game Science, a relatively unknown Chinese studio that set out to prove that a world-class action RPG could emerge from outside the established Japanese and Western development powerhouses. After years of viral trailers that seemed almost too good to be true, the finished product is here, and it delivers on its extraordinary visual promise while carving out a combat identity that stands proudly among the best the soulslike genre has to offer.</p>

<p>The game follows the Destined One, a monkey warrior who retraces the legendary journey of Sun Wukong through a fallen world of gods, demons, and forgotten temples. The story draws deeply from the classic Chinese novel Journey to the West, weaving its chapters into a dark reinterpretation that assumes some familiarity with the source material. For those who know the mythology, the references and recontextualizations are thrilling. For newcomers, the narrative can feel fragmented, though the moment-to-moment atmosphere and environmental storytelling carry the experience regardless.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/bzyMLoSwYvk" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Visually, Black Myth: Wukong is a generational achievement. Running on Unreal Engine 5, every environment is rendered with a level of detail that borders on photorealism. Ancient temples draped in mist, bamboo forests swaying under golden light, and cavernous boss arenas pulsing with supernatural energy create a world that demands to be explored. The art direction merges traditional Chinese aesthetics with fantastical creature design in ways that feel entirely fresh, and the sheer density of visual storytelling in every frame is remarkable.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg?t=1760601605" alt="Black Myth Wukong - stunning temple environment" />

<p>Combat is where the game establishes its identity. The Destined One wields a staff with fluid, weighty animations that make every swing feel impactful. The 72 Transformations system allows players to absorb abilities from defeated bosses, morphing into different creatures with unique movesets. This adds a layer of strategic depth that goes beyond the typical dodge-and-punish loop of most soulslike games. Chaining transformations mid-combo creates opportunities for creative expression that reward experimentation and mastery.</p>

<p>The boss encounters are the clear highlight. Game Science has crafted dozens of memorable fights, each with distinct phases, attack patterns, and visual spectacle. From towering Buddhist guardians to cunning fox spirits, every major encounter feels like an event. The difficulty is generally well-tuned, though there are noticeable spikes in the later chapters where certain bosses demand a very specific approach, which can feel at odds with the freedom the transformation system otherwise encourages.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_d9391ab31a4d15dddf7ba4949bfa44f5d9170580.1920x1080.jpg?t=1760601605" alt="Black Myth Wukong - intense boss battle" />

<p>Where Black Myth falters is in the spaces between its peaks. Some chapters pad their runtime with repetitive lesser enemies that lack the creativity of the boss encounters. The camera can become an adversary in tight corridors, and the lock-on system occasionally loses track of targets during chaotic fights. These are not dealbreakers, but they prevent the experience from maintaining the consistently high quality of its best moments.</p>

<p>The soundtrack deserves special recognition, blending traditional Chinese instruments with orchestral compositions that perfectly underscore every environment and encounter. Voice acting in Mandarin is excellent, lending the dialogue an authenticity that the English dub cannot match. The attention to cultural detail extends to every aspect of the presentation, from the calligraphy-inspired UI to the lore-rich item descriptions.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_524a39da392ee83dde091033562bc719d46b5838.1920x1080.jpg?t=1760601605" alt="Black Myth Wukong - mythological landscape" />

<p>Performance on PC is solid with high-end hardware, though the game's visual ambitions mean that even powerful systems will need to make compromises at 4K resolution. The PlayStation 5 version runs smoothly in its performance mode, with a quality mode that prioritizes ray tracing at the cost of frame rate stability. Post-launch patches have improved optimization considerably since the initial release.</p>

<p>Black Myth: Wukong is not a perfect game, but it is an important one. It represents a new voice in action RPG development, one rooted in a mythology that has been underrepresented in gaming despite its richness. Game Science has delivered a debut that stands alongside the best in its genre, and the rough edges only make the accomplishment more impressive. For anyone who appreciates stunning visuals, demanding combat, and a world unlike anything else in gaming, this is essential playing.</p>`,
    },
  },
  {
    id: "g_ff7r",
    slug: "final-fantasy-vii-rebirth",
    title: "Final Fantasy VII Rebirth",
    description:
      "The highly anticipated second chapter of the Final Fantasy VII remake trilogy expands the adventure beyond Midgar with a vast open world, refined combat, and bold narrative choices that reimagine one of gaming's most beloved stories.",
    coverImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909400/ss_7a83a64967a06edbf0d43821153a0188471d596a.1920x1080.jpg?t=1775124617",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909400/ss_7a83a64967a06edbf0d43821153a0188471d596a.1920x1080.jpg?t=1775124617",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909400/ss_7c389d8ed52b6bd2350a3bc9866ac45c919fb2e9.1920x1080.jpg?t=1775124617",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909400/ss_5540aef3258019f77559ca77ef29ba893b61010f.1920x1080.jpg?t=1775124617",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909400/ss_45513682d4c2e77b2a89e7bea00ec2851c110116.1920x1080.jpg?t=1775124617",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909400/ss_e20893c29ecb3211e9d2dd4b0c043a209ea15c07.1920x1080.jpg?t=1775124617",
    ],
    developer: "Square Enix",
    publisher: "Square Enix",
    platforms: ["PC", "PlayStation 5"],
    genres: ["JRPG", "Action RPG", "Open World"],
    metacriticScore: 92,
    score: 92,
    steamAppId: "2909400",
    trailerUrl: "https://www.youtube.com/watch?v=KOhs9ZLImgE",
    releaseDate: "2024-02-29T00:00:00.000Z",
    review: {
      title:
        "Final Fantasy VII Rebirth Review - A Triumphant Expansion of a Timeless Classic",
      verdict:
        "An extraordinary achievement that boldly reimagines one of gaming's greatest stories while delivering the best combat and world design in the franchise",
      pros: [
        "Combat system reaches its full potential with seamless party synergy mechanics",
        "Gorgeous open world brimming with meaningful content and stunning vistas",
        "Character development and party dynamics are the best in the series",
        "Bold narrative choices that make this more than a simple retelling",
      ],
      cons: [
        "Some open world activities feel like filler amid the stronger story content",
        "Texture pop-in and performance hitches on console at launch",
        "Certain minigames overstay their welcome and disrupt pacing",
      ],
      content: `<p>Final Fantasy VII Rebirth is that rare sequel that not only meets the towering expectations set by its predecessor but surpasses them in nearly every meaningful way. Square Enix has taken the tight, corridor-driven experience of Remake and blown it wide open, delivering a vast journey across the world beyond Midgar that captures the spirit of the 1997 original while forging an identity entirely its own. This is not merely a faithful recreation but a daring reimagination that earns the right to surprise even the most devoted fans of the source material.</p>

<p>The game picks up immediately after the events of Remake, with Cloud and his companions venturing beyond the walls of Midgar for the first time. The scope of Rebirth is staggering, spanning diverse regions from sun-drenched coastlines to haunted forests, each rendered with a level of detail and artistic vision that showcases Square Enix at the peak of their craft. The open world structure allows players to explore at their own pace, uncovering side quests, hidden encounters, and environmental puzzles that reward curiosity without ever feeling like empty padding.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/KOhs9ZLImgE" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The combat system, already excellent in Remake, reaches its zenith here. The new Synergy system allows party members to chain abilities together in ways that feel organic and deeply satisfying. Swapping between characters mid-combo creates a flow state that other action RPGs can only dream of. Every party member feels distinct, with unique playstyles that encourage constant experimentation. Tifa's martial arts combos, Barret's ranged suppression, Aerith's magical dominance, and Red XIII's agile strikes all complement Cloud's versatile swordplay beautifully.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909400/ss_7a83a64967a06edbf0d43821153a0188471d596a.1920x1080.jpg?t=1775124617" alt="Final Fantasy VII Rebirth - party exploration" />

<p>What elevates Rebirth above its predecessor is the character work. The quieter moments between party members, whether shared meals at camp, optional conversations during exploration, or affinity-building activities, give these beloved characters a warmth and depth that the original could only hint at. The relationships feel genuine, and the game smartly uses its expanded runtime to let these bonds develop naturally. Seeing Cloud slowly open up to his companions over the course of the journey is genuinely moving.</p>

<p>The narrative takes bold swings that will divide the fanbase, and that is precisely what makes it compelling. Rebirth is not content to simply retread familiar ground. It introduces new plot threads, recontextualizes key moments, and makes changes that feel purposeful rather than arbitrary. The question of fate, free will, and the nature of storytelling itself becomes a thematic undercurrent that gives the entire experience an added layer of meaning. The final hours, in particular, are among the most emotionally powerful in any Final Fantasy game.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909400/ss_7c389d8ed52b6bd2350a3bc9866ac45c919fb2e9.1920x1080.jpg?t=1775124617" alt="Final Fantasy VII Rebirth - dramatic story moment" />

<p>The open world, while largely excellent, does have its weaker moments. Some regions feature activities that lean too heavily on familiar open-world tropes like fetch quests and collectible hunts. The minigames, a series staple, are hit-or-miss with some, like the card game Queen's Blood, being genuinely addictive while others, like certain festival challenges, drag on longer than they should. These are minor blemishes on an otherwise exceptional canvas.</p>

<p>Musically, Rebirth is a triumph. The soundtrack combines classic Final Fantasy VII themes with sweeping new compositions that perfectly capture each region's atmosphere. The voice cast delivers career-best performances, particularly Cody Christian as Cloud and Briana White as Aerith, whose chemistry anchors the emotional core of the story. Technical performance on PlayStation 5 is mostly solid, though texture streaming and occasional frame drops during densely populated areas were noticeable at launch.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909400/ss_5540aef3258019f77559ca77ef29ba893b61010f.1920x1080.jpg?t=1775124617" alt="Final Fantasy VII Rebirth - beautiful open world vista" />

<p>The PC release in January 2025 addressed many of the console version's technical shortcomings, offering higher resolution textures, improved frame rates, and ultrawide support that make it the definitive way to experience the game for those with capable hardware. The port is well-optimized and demonstrates Square Enix's growing commitment to delivering quality PC versions of their flagship titles.</p>

<p>Final Fantasy VII Rebirth is a landmark achievement in the JRPG genre. It takes one of gaming's most cherished stories and proves that there is still so much more to discover within it. The combat is exhilarating, the world is vast and gorgeous, the characters are more alive than ever, and the narrative choices are brave enough to make this journey feel genuinely new. Whether you are a lifelong fan or a newcomer discovering this world for the first time, Rebirth demands your attention and rewards it generously.</p>`,
    },
  },
  {
    id: "g_astrobot",
    slug: "astro-bot",
    title: "Astro Bot",
    description:
      "Team Asobi's PS5 exclusive platformer is a joyful celebration of PlayStation history. Astro Bot delivers pitch-perfect platforming, creative DualSense integration, and endless charm across 80 meticulously designed levels.",
    coverImage:
      "https://www.gematsu.com/wp-content/uploads/2024/05/ASTRO-BOT_2024_05-30-24_001.jpg",
    screenshots: [
      "https://www.gematsu.com/wp-content/uploads/2024/05/ASTRO-BOT_2024_05-30-24_001.jpg",
      "https://www.gematsu.com/wp-content/uploads/2024/05/ASTRO-BOT_2024_05-30-24_003.jpg",
      "https://www.gematsu.com/wp-content/uploads/2024/05/ASTRO-BOT_2024_05-30-24_005.jpg",
      "https://www.gematsu.com/wp-content/uploads/2024/05/ASTRO-BOT_2024_05-30-24_007.jpg",
      "https://www.gematsu.com/wp-content/uploads/2024/05/ASTRO-BOT_2024_05-30-24_009.jpg",
    ],
    developer: "Team Asobi",
    publisher: "Sony Interactive Entertainment",
    platforms: ["PlayStation 5"],
    genres: ["3D Platformer", "Action", "Adventure"],
    metacriticScore: 94,
    score: 94,
    steamAppId: null,
    trailerUrl: "https://www.youtube.com/watch?v=unYFdcEjV9k",
    releaseDate: "2024-09-06T00:00:00.000Z",
    review: {
      title:
        "Astro Bot Review - The Best Platformer in a Generation and a Love Letter to PlayStation",
      verdict:
        "A near-perfect platformer that combines inventive level design, joyful creativity, and masterful DualSense integration into the must-own PS5 exclusive",
      pros: [
        "Level design is inventive and surprising from start to finish with no filler",
        "DualSense controller integration is the best on the platform by a wide margin",
        "PlayStation cameos and references are a constant delight for longtime fans",
        "Tight, responsive controls that make every jump and action feel satisfying",
      ],
      cons: [
        "Relatively short main campaign at around 12 hours for completionists",
        "Difficulty never truly challenges experienced platformer players",
        "PS5 exclusive limits its potential audience significantly",
      ],
      content: `<p>Astro Bot is the game that PlayStation 5 has been waiting for since launch day. Team Asobi, the studio behind the charming pack-in title Astro's Playroom, has graduated from tech demo to full-blown masterpiece with a platformer that stands alongside the very best the genre has ever produced. This is not hyperbole. Astro Bot is that good, and its Game of the Year recognition at The Game Awards 2024 was thoroughly deserved.</p>

<p>The premise is simple and effective. An alien has scattered Astro's crew of bots across the galaxy, and players must travel through six galaxies containing over eighty levels to rescue them all. Each level is a tightly designed playground of ideas, with Team Asobi introducing and iterating on mechanics at a pace that would make Nintendo envious. No two levels feel the same, and the game never returns to an idea it has already exhausted.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/unYFdcEjV9k" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The DualSense controller integration is not a gimmick here but a fundamental part of the experience. Every surface communicates texture through the haptic feedback. Walking on sand feels different from metal grating, which feels different from glass, which feels different from water. The adaptive triggers add resistance when pulling back slingshots, compress when squeezing through tight spaces, and pulse with rhythm during musical sequences. Astro Bot is the single best argument for the DualSense's existence, and it makes every other PS5 game feel like it is leaving performance on the table.</p>

<img src="https://www.gematsu.com/wp-content/uploads/2024/05/ASTRO-BOT_2024_05-30-24_001.jpg" alt="Astro Bot - colorful platforming level" />

<p>The power-ups are where Team Asobi's creativity truly shines. Over fifteen new abilities transform Astro in surprising ways. The Barkster turns Astro into a speedy bulldog-riding daredevil. The Twin-Frog Gloves let players punch and grab with independent arms. The Giant Sponge absorbs water to grow massive before unleashing it to solve environmental puzzles. Each power-up is introduced in a level specifically designed around it, used to its full potential, and then often retired before it overstays its welcome. The discipline in this design philosophy is extraordinary.</p>

<p>The PlayStation cameos scattered throughout the game transform collectible hunting from a chore into a celebration. Finding a tiny bot dressed as Kratos, Aloy, Nathan Drake, or dozens of other PlayStation icons is consistently delightful. Each rescued character comes with unique animations and personality that show genuine reverence for the franchises they represent. The dedicated tribute levels for games like God of War and Ape Escape are standalone highlights that recreate the feel of those games within Astro Bot's framework.</p>

<img src="https://www.gematsu.com/wp-content/uploads/2024/05/ASTRO-BOT_2024_05-30-24_005.jpg" alt="Astro Bot - creative power-up gameplay" />

<p>Boss encounters punctuate each galaxy with spectacle and challenge. These multi-phase battles require players to use everything they have learned in previous levels, testing platforming skill, timing, and pattern recognition simultaneously. The bosses are visually creative and mechanically engaging, with each one feeling like a proper culmination of the galaxy's themes rather than an afterthought.</p>

<p>The presentation is flawless. Astro Bot runs at a locked sixty frames per second with ray-traced reflections that make every environment sparkle. The art direction favors bright, clean aesthetics that maximize readability while still creating genuinely beautiful vistas. The soundtrack is infectiously upbeat, with catchy melodies that perfectly complement the on-screen action. The sound design, delivered through the DualSense speaker and haptics, adds a tactile dimension that no other game on the platform matches.</p>

<img src="https://www.gematsu.com/wp-content/uploads/2024/05/ASTRO-BOT_2024_05-30-24_009.jpg" alt="Astro Bot - spectacular boss encounter" />

<p>If there is a criticism to level at Astro Bot, it is that the difficulty rarely pushes back. Experienced platformer players will breeze through the main campaign, and while the post-game challenge levels offer more resistance, the core journey prioritizes joy over adversity. The campaign is also relatively short, clocking in at around ten to twelve hours for full completion. Whether this is a flaw depends on perspective. There is something to be said for a game that respects the player's time and leaves them wanting more rather than less.</p>

<p>The PS5 exclusivity, while understandable given the game's reliance on DualSense features, does limit who can experience this gem. There is no PS4 version, no PC port, and no Xbox release. For those who own a PlayStation 5, however, this is an absolute must-play title that justifies the hardware investment in ways that few other exclusives have managed.</p>

<p>Astro Bot is a masterclass in platformer design, a love letter to PlayStation's history, and a showcase for what the PS5 hardware can do when a talented studio builds specifically for it. Team Asobi has created something genuinely special here, a game that makes you smile from the first level to the last and reminds you why you fell in love with gaming in the first place. It deserves every accolade it has received and then some.</p>`,
    },
  },
  {
    id: "g_metaphor",
    slug: "metaphor-refantazio",
    title: "Metaphor: ReFantazio",
    description:
      "From the creators of Persona, Metaphor: ReFantazio is an ambitious fantasy RPG that blends the social simulation elements Atlus is known for with a sweeping political narrative set in a medieval fantasy world filled with prejudice and revolution.",
    coverImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679460/ss_9809b4bfb257dc3e4f39f3f54fad1768234c03ad.1920x1080.jpg?t=1764776325",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679460/ss_9809b4bfb257dc3e4f39f3f54fad1768234c03ad.1920x1080.jpg?t=1764776325",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679460/ss_ec0825cd3ecfa6c74e3041c5842bcb3453e7cb45.1920x1080.jpg?t=1764776325",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679460/ss_292f6c637e0c0e81b225aa055c4a348f821cbd48.1920x1080.jpg?t=1764776325",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679460/ss_de16693b88cfb65a20157ddd41925b3ce80e96f1.1920x1080.jpg?t=1764776325",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679460/ss_dea9ff5f1572b5d4efb4d33b4d1d3decb1e8ce48.1920x1080.jpg?t=1764776325",
    ],
    developer: "Studio Zero",
    publisher: "Atlus",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S"],
    genres: ["JRPG", "Fantasy", "Turn-Based"],
    metacriticScore: 93,
    score: 93,
    steamAppId: "2679460",
    trailerUrl: "https://www.youtube.com/watch?v=GVQcqJTJ_eY",
    releaseDate: "2024-10-11T00:00:00.000Z",
    review: {
      title:
        "Metaphor: ReFantazio Review - Atlus Delivers Their Most Ambitious RPG Yet",
      verdict:
        "A masterful fusion of Persona's social systems with a sweeping fantasy narrative that redefines what Atlus is capable of creating",
      pros: [
        "Deeply engaging political narrative with themes of prejudice and societal change",
        "Archetype class system offers incredible depth and customization",
        "Social simulation elements are as addictive as the best Persona games",
        "Stunning art direction that blends medieval fantasy with Atlus signature style",
      ],
      cons: [
        "Slow opening hours may test patience before the story finds its footing",
        "Dungeon design can feel repetitive in certain mid-game chapters",
        "Time management pressure can cause anxiety about missing content",
        "Some supporting characters feel underdeveloped compared to the leads",
      ],
      content: `<p>Metaphor: ReFantazio is the game that Atlus has been building toward for over a decade. Studio Zero, the team formed specifically for this project and led by Persona's creative directors Katsura Hashino and Shigenori Soejima, has channeled everything they learned from the Persona series into a fantasy RPG that is simultaneously familiar and entirely new. The result is one of the most compelling JRPGs of the year, a game that proves Atlus can transcend the modern-day settings they are known for while retaining the social depth and stylistic flair that define their best work.</p>

<p>Set in the United Kingdom of Euchronia, a medieval fantasy world scarred by racial prejudice between its various tribes, Metaphor tells the story of a young man who enters a royal tournament to determine the next king. The political narrative tackles themes of discrimination, populism, fear of the other, and the corrupting nature of power with a maturity that is rare in the genre. This is not a simple tale of good versus evil but a nuanced exploration of how societies fracture and how idealism collides with reality.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/GVQcqJTJ_eY" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The Archetype system replaces Persona's Personas with a class-based progression that is even more versatile. Players unlock new Archetypes by deepening bonds with party members and key NPCs, and each Archetype offers a distinct set of abilities, stat modifiers, and passive skills. The real magic is in mixing and matching, layering skills from multiple Archetypes onto a single character to create custom builds that feel uniquely yours. The system has the same addictive quality as Persona's fusion mechanics but with clearer strategic implications.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679460/ss_9809b4bfb257dc3e4f39f3f54fad1768234c03ad.1920x1080.jpg?t=1764776325" alt="Metaphor ReFantazio - fantasy world exploration" />

<p>Combat is turn-based with a twist. Weaker enemies can be dispatched in real-time through an action-based field attack system, while stronger foes trigger the traditional turn-based battles that Atlus fans love. This hybrid approach keeps the pacing brisk during exploration while preserving the strategic depth of boss encounters. The Press Turn-inspired weakness system returns, rewarding players who exploit elemental vulnerabilities with extra actions, and boss fights demand careful preparation and party composition.</p>

<p>The social simulation layer, Metaphor's equivalent of Persona's Confidant system, operates on a calendar that ticks forward as the tournament progresses. Players must balance dungeon crawling, relationship building, and stat improvement within a limited timeframe, creating the same delicious tension that makes Persona games so addictive. The key relationships are well-written, with companions whose personal struggles mirror the game's larger themes of prejudice and self-discovery. The bonds you form feel earned, and the gameplay rewards for deepening them provide satisfying mechanical incentives alongside the narrative ones.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679460/ss_ec0825cd3ecfa6c74e3041c5842bcb3453e7cb45.1920x1080.jpg?t=1764776325" alt="Metaphor ReFantazio - turn-based combat system" />

<p>Visually, Metaphor is a feast. Soejima's character designs are as striking as ever, and the fantasy setting allows for a broader palette than Persona's urban environments. Cities feel lived-in, dungeons are atmospheric if occasionally repetitive in their corridor layouts, and the overworld map captures the sense of journeying across a vast kingdom. The UI design, always an Atlus strength, is characteristically bold, with menus that burst with color and personality.</p>

<p>The opening hours are the game's weakest stretch. The story takes time to establish its world and political dynamics, and the initial pacing can feel sluggish for players accustomed to faster hooks. Once the tournament arc gains momentum around the ten-hour mark, the narrative becomes increasingly gripping, building toward a finale that is both emotionally powerful and thematically resonant. The middle chapters suffer slightly from dungeon designs that repeat similar layouts, but the story and character development remain strong enough to carry through these sections.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679460/ss_292f6c637e0c0e81b225aa055c4a348f821cbd48.1920x1080.jpg?t=1764776325" alt="Metaphor ReFantazio - stunning art direction" />

<p>The soundtrack, composed by Shoji Meguro, is phenomenal. It shifts between epic orchestral pieces during battles, haunting melodies in quiet character moments, and driving rock tracks that recall his best Persona work. The music is as much a character as any party member, elevating every scene it accompanies. Voice performances across the cast are excellent, with the English dub delivering standout work that matches the quality of the Japanese original.</p>

<p>Metaphor: ReFantazio is Atlus at their most ambitious and most accomplished. It takes the social simulation formula that made Persona a global phenomenon and proves it can thrive in any setting. The political narrative is relevant and thought-provoking, the Archetype system offers boundless strategic depth, and the world of Euchronia is one you will not want to leave. Minor pacing issues and repetitive dungeon layouts cannot diminish what is ultimately a defining JRPG of 2024 and a bold new direction for one of the genre's most revered studios.</p>`,
    },
  },
  {
    id: "g_sh2r",
    slug: "silent-hill-2-remake",
    title: "Silent Hill 2 Remake",
    description:
      "Bloober Team's ambitious remake of Konami's 2001 psychological horror masterpiece rebuilds Silent Hill 2 from the ground up with modern visuals, expanded gameplay, and a faithful retelling of one of gaming's most haunting narratives.",
    coverImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/ss_1fdda21610fa23d0ce20b5c44fab8aebd509c5cb.1920x1080.jpg?t=1744248682",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/ss_1fdda21610fa23d0ce20b5c44fab8aebd509c5cb.1920x1080.jpg?t=1744248682",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/ss_b20363454a190d737e5ff8e6410d66f0034bd807.1920x1080.jpg?t=1744248682",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/ss_7ba4f2993853179e3049a7f56d7b690b892f33bf.1920x1080.jpg?t=1744248682",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/ss_002b780c7a34d50f186456adcc87dc6012741f97.1920x1080.jpg?t=1744248682",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/ss_b400fbaacc414f558551594c046ec2a941260ad7.1920x1080.jpg?t=1744248682",
    ],
    developer: "Bloober Team",
    publisher: "Konami",
    platforms: ["PC", "PlayStation 5"],
    genres: ["Survival Horror", "Psychological Horror", "Action"],
    metacriticScore: 86,
    score: 86,
    steamAppId: "2124490",
    trailerUrl: "https://www.youtube.com/watch?v=0JHD_vb4jxE",
    releaseDate: "2024-10-08T00:00:00.000Z",
    review: {
      title:
        "Silent Hill 2 Remake Review - A Respectful and Atmospheric Reimagining of a Horror Classic",
      verdict:
        "A surprisingly faithful and visually stunning remake that honors the original's psychological depth while making the horror feel viscerally modern",
      pros: [
        "Atmosphere is thick and suffocating with world-class environmental design",
        "Story retelling is faithful while adding subtle new layers of interpretation",
        "Combat overhaul transforms encounters from tedious to genuinely tense",
        "Akira Yamaoka's reimagined soundtrack enhances the emotional impact",
      ],
      cons: [
        "Over-the-shoulder camera reduces some of the original's disorienting dread",
        "Expanded enemy encounters occasionally undermine the quiet tension",
        "Some new puzzle solutions lack the elegant logic of the originals",
        "Performance issues on PC at launch required post-release patching",
      ],
      content: `<p>The announcement that Bloober Team would be remaking Silent Hill 2 was met with understandable skepticism. Konami's 2001 masterpiece is widely regarded as the greatest horror game ever made, a work of art that uses the medium's interactivity to explore grief, guilt, and denial in ways that no film or novel could replicate. Handing this responsibility to a studio whose previous work, while atmospheric, had never reached the same psychological depth felt like a gamble. Against significant odds, Bloober Team has delivered a remake that not only respects the source material but enhances it in ways that make the return to Silent Hill feel genuinely worthwhile.</p>

<p>James Sunderland receives a letter from his dead wife, Mary, asking him to meet her in their special place in the town of Silent Hill. This setup, unchanged from the original, remains one of gaming's most effective hooks, and the remake wisely lets the story breathe rather than rushing to explain its mysteries. The pacing of the narrative has been carefully preserved, with new dialogue and expanded scenes that deepen character relationships without overexplaining the ambiguity that makes the story so powerful.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/0JHD_vb4jxE" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The visual transformation is staggering. Built on Unreal Engine 5, the fog-shrouded streets of Silent Hill have never looked more oppressive or more beautiful in their decay. The town feels like a character unto itself, with crumbling buildings, rust-streaked walls, and impossibly dark corridors that seem to close in around you. The lighting, in particular, is masterful. James's flashlight cuts through the darkness with a realism that makes every shadow feel alive, and the transition from the misty outdoor environments to the nightmarish Otherworld is handled with a visual intensity that surpasses the original.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/ss_1fdda21610fa23d0ce20b5c44fab8aebd509c5cb.1920x1080.jpg?t=1744248682" alt="Silent Hill 2 Remake - foggy streets atmosphere" />

<p>The biggest mechanical change is the shift to an over-the-shoulder perspective, replacing the original's fixed camera angles. This is the remake's most controversial decision, and opinions will vary. The new camera makes combat more immediate and engaging, allowing for a dodge-and-strike system that transforms encounters from the clunky affairs of the original into genuinely tense survival encounters. However, the fixed cameras of the 2001 version served a deliberate purpose, creating disorientation and vulnerability that the new perspective cannot fully replicate. What is lost in atmospheric unease is gained in moment-to-moment tension.</p>

<p>Combat has been substantially reworked. James moves with a desperate, untrained heaviness that communicates his civilian status without feeling unfair. Weapons have weight, ammunition is scarce, and the game smartly uses resource scarcity to maintain tension. The creature designs, faithful to the originals while benefiting from modern rendering, are disturbingly detailed. Nurses twitch with unsettling animation, Mannequins lurk in corners with predatory stillness, and Pyramid Head's appearances carry a physical menace that the increased visual fidelity amplifies tremendously.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/ss_b20363454a190d737e5ff8e6410d66f0034bd807.1920x1080.jpg?t=1744248682" alt="Silent Hill 2 Remake - Pyramid Head encounter" />

<p>Akira Yamaoka's return to compose a reimagined soundtrack is one of the remake's greatest assets. The iconic themes have been rearranged with new instrumentation that preserves their emotional core while giving them a fresh identity. The industrial ambient soundscapes that underscore exploration are more layered and more unsettling than ever, with subtle audio cues that create a constant sense of unease. The sound design overall is exceptional, from the static hiss of the radio detecting nearby creatures to the echoing footsteps in empty hospital corridors.</p>

<p>The expanded areas and adjusted puzzles are a mixed bag. Some additions, like new rooms in the apartment complex and an extended sequence in the hospital basement, add meaningful content that enriches the experience. Others feel like padding that disrupts the original's carefully measured pacing. The puzzles, while cleverly redesigned to prevent veterans from solving them on muscle memory alone, occasionally lack the thematic elegance of the originals, relying more on mechanical complexity than symbolic resonance.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/ss_7ba4f2993853179e3049a7f56d7b690b892f33bf.1920x1080.jpg?t=1744248682" alt="Silent Hill 2 Remake - haunting interior exploration" />

<p>Performance on PlayStation 5 is solid, with a stable frame rate in performance mode and impressive visual fidelity in quality mode. The PC version had a rougher launch, with shader compilation stutters and inconsistent frame pacing that required several patches to address. Post-update, the PC experience is strong, particularly for those with hardware capable of handling the game's demanding ray tracing implementation.</p>

<p>Silent Hill 2 Remake is a triumph of respect and craftsmanship. Bloober Team has demonstrated that they understood not just what Silent Hill 2 does but why it works, preserving the psychological complexity and emotional devastation of the original while making the experience feel modern and mechanically engaging. It is not a replacement for the 2001 classic, nor does it try to be. Instead, it is a complementary work that invites both newcomers and veterans to walk the fog-shrouded streets of Silent Hill once more, and find that the town has lost none of its power to disturb, to sadden, and to haunt.</p>`,
    },
  },
];

async function verifyImage(url: string): Promise<boolean> {
  try {
    const resp = await fetch(url, { method: "HEAD", redirect: "follow" });
    return resp.ok;
  } catch {
    return false;
  }
}

async function main() {
  // Verify all images first
  console.log("Verifying images...");
  for (const g of games) {
    const allImages = [g.coverImage, ...g.screenshots];
    for (const img of allImages) {
      const ok = await verifyImage(img);
      console.log(`  ${ok ? "OK" : "FAIL"}: ${img.substring(0, 80)}...`);
      if (!ok) {
        console.error(`FAILED image for ${g.title}: ${img}`);
        process.exit(1);
      }
    }
  }
  console.log("All images verified!\n");

  for (const g of games) {
    // Check if game exists
    const existing = await db.execute({
      sql: "SELECT id FROM Game WHERE slug = ?",
      args: [g.slug],
    });
    let gameId = existing.rows[0]?.id as string;

    if (!gameId) {
      gameId = g.id;
      await db.execute({
        sql: `INSERT OR IGNORE INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, averageScore, steamAppId, releaseDate, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
          g.score,
          g.steamAppId,
          g.releaseDate,
          now,
          now,
        ],
      });
      console.log(`Game inserted: ${g.title}`);
    } else {
      // Update existing game with new data
      await db.execute({
        sql: "UPDATE Game SET coverImage = ?, screenshots = ?, trailerUrl = ?, averageScore = ?, metacriticScore = ?, releaseDate = ?, updatedAt = ? WHERE id = ?",
        args: [
          g.coverImage,
          JSON.stringify(g.screenshots),
          g.trailerUrl,
          g.score,
          g.metacriticScore,
          g.releaseDate,
          now,
          gameId,
        ],
      });
      console.log(`Game updated: ${g.title}`);
    }

    // Add review if not exists
    const existingReview = await db.execute({
      sql: "SELECT id FROM Review WHERE gameId = ?",
      args: [gameId],
    });
    if (existingReview.rows.length === 0) {
      await db.execute({
        sql: `INSERT OR IGNORE INTO Review (id, slug, gameId, title, content, score, pros, cons, sourceReviews, verdict, status, publishedAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published', ?, ?, ?)`,
        args: [
          "rev_" + g.slug,
          g.slug + "-review",
          gameId,
          g.review.title,
          g.review.content,
          g.score,
          JSON.stringify(g.review.pros),
          JSON.stringify(g.review.cons),
          JSON.stringify([
            { source: "Metacritic", score: g.metacriticScore, url: "" },
          ]),
          g.review.verdict,
          now,
          now,
          now,
        ],
      });
      console.log(`Review inserted: ${g.review.title}`);
    } else {
      // Update existing review with new content
      await db.execute({
        sql: "UPDATE Review SET content = ?, title = ?, pros = ?, cons = ?, verdict = ?, score = ?, updatedAt = ? WHERE gameId = ?",
        args: [
          g.review.content,
          g.review.title,
          JSON.stringify(g.review.pros),
          JSON.stringify(g.review.cons),
          g.review.verdict,
          g.score,
          now,
          gameId,
        ],
      });
      console.log(`Review updated: ${g.review.title}`);
    }
  }

  console.log("\nAll 5 game reviews processed successfully!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
