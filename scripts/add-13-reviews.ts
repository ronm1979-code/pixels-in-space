import "dotenv/config";
import { createClient } from "@libsql/client";
import https from "https";
import http from "http";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
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
  // ===== 1. RED DEAD REDEMPTION 2 =====
  {
    id: "g_rdr2",
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    description: "Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and bounty hunters massing on their heels, the gang must rob, steal, and fight their way across the rugged heartland in order to survive.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1759502961",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1759502961",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg?t=1759502961",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.1920x1080.jpg?t=1759502961",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_4ce07ae360b166f0f650e9a895a3b4b7bf15e34f.1920x1080.jpg?t=1759502961",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_d1a8f5a69155c3186c65d1da90491fcfd43663d9.1920x1080.jpg?t=1759502961",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=HVRzx17WHVo",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    genres: ["Action", "Adventure", "Open World"],
    metacriticScore: 97,
    steamAppId: "1174180",
    averageScore: 97,
    releaseDate: "2018-10-26T00:00:00.000Z",
    review: {
      title: "Red Dead Redemption 2 Review: A Once-in-a-Generation Masterpiece",
      score: 97,
      pros: ["Staggeringly detailed open world that feels genuinely alive", "Arthur Morgan is one of gaming's greatest protagonists", "Narrative storytelling that rivals the best cinema", "Visuals that remain breathtaking years after release"],
      cons: ["Slow pacing will test impatient players", "Controls can feel deliberately heavy and clunky", "Some mission design is rigidly scripted"],
      verdict: "Red Dead Redemption 2 is a landmark achievement in interactive storytelling, delivering a world so rich and a narrative so powerful that it redefines what open-world games can be.",
      publishedAt: "2018-10-30T10:00:00.000Z",
      content: `<p>There are games that push boundaries, and then there are games that obliterate them entirely. Red Dead Redemption 2 belongs firmly in the latter category. Rockstar Games has crafted something that transcends the medium, delivering an experience so meticulously detailed and emotionally resonant that it stands as one of the greatest achievements in entertainment history.</p>

<p>At the heart of this sprawling epic is Arthur Morgan, a man caught between loyalty to the only family he has ever known and the growing realization that the outlaw life is destroying everything around him. What could have been a simple tale of cowboys and criminals instead becomes a profound meditation on morality, belonging, and the cost of living outside the law. Arthur is not just a great video game character; he is one of the most fully realized protagonists in any storytelling medium, brought to life by Roger Clark's extraordinary performance.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1759502961" alt="Red Dead Redemption 2 - open world landscape" />

<p>The world itself is nothing short of astonishing. From the snow-capped peaks of Ambarino to the humid swamps of Lemoyne, every square mile of the map feels handcrafted with an obsessive attention to detail. Animals behave according to realistic ecosystems, towns bustle with daily routines, and the weather shifts in ways that genuinely affect gameplay. You can spend dozens of hours simply existing in this world, hunting, fishing, and stumbling upon random encounters that tell their own miniature stories.</p>

<p>Combat is weighty and deliberate, favoring the methodical gunplay of classic westerns over the frenetic action of modern shooters. The Dead Eye system returns with new layers of depth, allowing you to tag targets and execute devastating sequences that make you feel like a genuine gunslinger. Every weapon has a distinct personality, and the feedback from each shot is enormously satisfying.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg?t=1759502961" alt="Red Dead Redemption 2 - combat and gameplay" />

<p>The camp system adds a layer of emotional investment that few games have matched. Your fellow gang members are not just quest givers; they are people with hopes, fears, and personalities that evolve as the story progresses. Sitting around the campfire listening to Javier play guitar or watching Uncle spin one of his tall tales creates moments of genuine warmth that make the darker turns of the narrative hit even harder.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/HVRzx17WHVo" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Visually, Red Dead Redemption 2 remains one of the most beautiful games ever made. The lighting engine produces sunsets that look like oil paintings, volumetric fog rolls through valleys with an almost supernatural beauty, and the particle effects during gunfights create a cinematic atmosphere that never gets old. On PC, with the settings cranked up, this game is a technical showcase that still embarrasses many newer releases.</p>

<p>The soundtrack deserves special mention. The original score is hauntingly beautiful, perfectly capturing the melancholy of a dying era. But it is the licensed tracks, deployed with surgical precision at key narrative moments, that truly elevate the experience. There is one particular horseback ride late in the game, accompanied by a song that perfectly encapsulates everything the story has been building toward, that stands as one of gaming's most powerful sequences.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.1920x1080.jpg?t=1759502961" alt="Red Dead Redemption 2 - stunning scenery" />

<p>Where the game falters is in its pacing and mission design. Rockstar has a tendency toward rigid mission structures that funnel players down specific paths, which can feel at odds with the freedom of the open world. The deliberately slow pace of daily activities like cooking and horse maintenance will delight some players and frustrate others. These are not small complaints, but they fade when measured against the sheer ambition and execution of everything else.</p>

<p>Red Dead Redemption 2 is more than a game. It is a place you visit, a story you live, and a character you become. Years after release, it remains the high-water mark for open-world design and interactive narrative. If you have not experienced Arthur Morgan's journey, you owe it to yourself to saddle up.</p>`,
    },
  },

  // ===== 2. THE WITCHER 3: WILD HUNT =====
  {
    id: "g_witcher3",
    slug: "the-witcher-3-wild-hunt",
    title: "The Witcher 3: Wild Hunt",
    description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg?t=1768303991",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg?t=1768303991",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.1920x1080.jpg?t=1768303991",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_112b1e176c1bd271d8a565eacb6feaf90f240bb2.1920x1080.jpg?t=1768303991",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_d1b73b18cbcd5e9e412c7a1dead3c5cd7303d2ad.1920x1080.jpg?t=1768303991",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.1920x1080.jpg?t=1768303991",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=ehjJ614QfeM",
    developer: "CD PROJEKT RED",
    publisher: "CD PROJEKT RED",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "PlayStation 5", "Xbox Series X/S"],
    genres: ["RPG", "Open World", "Action"],
    metacriticScore: 93,
    steamAppId: "292030",
    averageScore: 93,
    releaseDate: "2015-05-18T00:00:00.000Z",
    review: {
      title: "The Witcher 3: Wild Hunt Review: The Gold Standard of Western RPGs",
      score: 93,
      pros: ["Exceptionally written quests with meaningful consequences", "A vast open world brimming with handcrafted content", "Geralt is a brilliantly realized protagonist with real depth", "Both expansions are masterpieces in their own right"],
      cons: ["Combat system lacks the depth of the rest of the game", "Movement and controls can feel floaty", "Inventory management is cumbersome without mods"],
      verdict: "The Witcher 3 remains the benchmark against which all story-driven RPGs are measured, offering hundreds of hours of brilliantly written content in a world that feels genuinely alive.",
      publishedAt: "2015-05-22T10:00:00.000Z",
      content: `<p>A decade on from its original release, The Witcher 3: Wild Hunt has not just stood the test of time, it has cemented itself as the gold standard of the Western RPG genre. CD Projekt RED created something that fundamentally changed what players expect from open-world games, and its influence can be felt in virtually every RPG that has followed.</p>

<p>Geralt of Rivia is gaming's most compelling protagonist for a reason. He is not a blank slate or a silent avatar; he is a fully formed character with a century of history, dry wit, and a moral code that bends but never breaks. Every conversation gives you choices that feel authentically Geralt rather than artificially binary, and the game trusts you to live with the consequences of those decisions hours later.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg?t=1768303991" alt="The Witcher 3 - open world exploration" />

<p>The quest design is where Wild Hunt truly separates itself from the pack. What other games would treat as throwaway side content, CD Projekt RED elevates into miniature masterpieces. The Bloody Baron questline alone contains more narrative depth than many full-length games. Every contract, every side quest, every random encounter in a village feels like it was written with the same care as the main story. This consistency across hundreds of hours of content is staggering.</p>

<p>The world itself is a dark, beautiful tapestry of war-torn kingdoms and monster-infested wilds. Velen's muddy battlefields and hanging bodies tell the story of a land ravaged by conflict. Novigrad pulses with the energy of a city tearing itself apart through religious persecution. Skellige's craggy islands evoke Norse mythology with a raw, untamed beauty. Each region has a distinct identity that makes exploration feel like traveling to genuinely different places.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.1920x1080.jpg?t=1768303991" alt="The Witcher 3 - combat" />

<p>Combat is perhaps the game's weakest link, though the Next-Gen update made significant improvements to the feel of swordplay. The system is serviceable and becomes more enjoyable as you unlock advanced signs and alchemy builds, but it never reaches the heights of the storytelling. Boss fights against unique monsters, however, remain highlights that blend the thrill of the hunt with genuine danger.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/ehjJ614QfeM" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The soundtrack is among the finest in gaming history. Marcin Przybylski and Mikolai Stroinski crafted a score that perfectly captures every mood the game reaches for, from the haunting Slavic vocals of the Skellige theme to the frenetic combat tracks. The music elevates every moment, turning simple horseback rides through the countryside into cinematic experiences.</p>

<p>Hearts of Stone and Blood and Wine deserve special recognition as two of the greatest expansions ever created. Hearts of Stone tells a Faustian tale that rivals the main game's best moments, while Blood and Wine essentially delivers an entirely new game set in the stunning fairy-tale region of Toussaint. Together, they add another 50-plus hours of premium content.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_112b1e176c1bd271d8a565eacb6feaf90f240bb2.1920x1080.jpg?t=1768303991" alt="The Witcher 3 - beautiful world" />

<p>The Next-Gen update brought ray tracing, improved textures, and quality-of-life changes that make this the definitive way to experience the game. Performance on modern hardware is excellent, and the visual upgrades breathe new life into an already beautiful game without compromising the original art direction.</p>

<p>The Witcher 3: Wild Hunt is not just a great RPG; it is one of the most important games ever made. It proved that players hunger for rich, mature storytelling and will embrace complexity over simplicity. Every RPG that has launched since 2015 exists in its shadow, and very few have managed to step out of it.</p>`,
    },
  },

  // ===== 3. STARFIELD =====
  {
    id: "g_starfield",
    slug: "starfield",
    title: "Starfield",
    description: "Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_4887dc140a637684ddcfca518458668409f946dc.1920x1080.jpg?t=1773759594",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_4887dc140a637684ddcfca518458668409f946dc.1920x1080.jpg?t=1773759594",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_b2821283cb140cd5a6289a8160016b6a60d8f96e.1920x1080.jpg?t=1773759594",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_68f15d580bf91971f637be5e464bc803482d78f7.1920x1080.jpg?t=1773759594",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_aae99c177004bb5ec653d2fcb65a5d30489ec7b8.1920x1080.jpg?t=1773759594",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=kfYEiTdsyas",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    platforms: ["PC", "Xbox Series X/S"],
    genres: ["RPG", "Open World", "Sci-Fi"],
    metacriticScore: 75,
    steamAppId: "1716740",
    averageScore: 75,
    releaseDate: "2023-09-06T00:00:00.000Z",
    review: {
      title: "Starfield Review: Bethesda's Ambitious Reach Exceeds Its Grasp",
      score: 75,
      pros: ["Excellent character creation and RPG systems", "Ship building and customization is deeply engaging", "Strong faction questlines with memorable characters", "Modding community has dramatically improved the experience"],
      cons: ["Procedurally generated planets feel empty and repetitive", "Space travel lacks the seamlessness of competitors", "Main story fails to deliver on its cosmic premise", "Loading screens break immersion constantly"],
      verdict: "Starfield is a competent Bethesda RPG with flashes of brilliance buried under the weight of its own ambition, offering solid faction quests and ship building in a universe that feels too vast for its own good.",
      publishedAt: "2023-09-10T10:00:00.000Z",
      content: `<p>Starfield was supposed to be the game that justified an entire generation of hardware. Bethesda Game Studios, fresh off the cultural phenomena of Skyrim and Fallout 4, promised a universe of over a thousand planets to explore. What they delivered is a deeply uneven experience that contains moments of genuine brilliance trapped inside a framework that struggles under its own ambition.</p>

<p>The character creation system is among the best Bethesda has ever produced. Backgrounds and traits add meaningful flavor to your build, and the skill system rewards specialization in ways that make each playthrough feel genuinely different. Whether you focus on diplomacy, stealth, or pure combat, the game accommodates your choices with satisfying progression.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_4887dc140a637684ddcfca518458668409f946dc.1920x1080.jpg?t=1773759594" alt="Starfield - space exploration" />

<p>Ship building is Starfield's crown jewel. The modular construction system is absurdly deep, allowing you to create everything from sleek fighters to massive cargo haulers. Hours can vanish in the shipyard as you tinker with layouts, weapons, and engines. Space combat, while not the most sophisticated in the genre, provides enough tension to make your custom ship feel worth building.</p>

<p>The faction questlines are where Bethesda's storytelling strengths shine brightest. The Crimson Fleet pirate storyline is a particular standout, offering genuine moral complexity and memorable characters. The Freestar Rangers and UC Vanguard lines also deliver satisfying narratives that feel more focused and polished than the main quest.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/kfYEiTdsyas" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>And here is where the problems begin. The main story, which should be the gravitational center holding everything together, is disappointingly flat. The mystery of the Artifacts starts with genuine intrigue but devolves into a series of fetch quests that lack the narrative payoff their cosmic scope demands. The New Game Plus mechanic is clever conceptually but cannot mask the fact that the ending feels undercooked.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_b2821283cb140cd5a6289a8160016b6a60d8f96e.1920x1080.jpg?t=1773759594" alt="Starfield - planetary surface" />

<p>The thousand-planet promise turns out to be Starfield's greatest liability. The vast majority of planets are barren wastelands generated by algorithms, filled with the same handful of outpost templates and resource nodes. After the twentieth identical abandoned research lab, the magic of planetary exploration evaporates entirely. The handcrafted locations like New Atlantis and Neon are genuinely impressive, which only highlights how hollow the procedural content feels by comparison.</p>

<p>Loading screens are the other major immersion killer. In an era where games are delivering seamless transitions between space and ground, Starfield asks you to sit through loading screens for seemingly every transition. Entering your ship, taking off, landing on a planet, entering a building, each one accompanied by a fade to black that constantly reminds you that this is a collection of disconnected levels rather than a cohesive universe.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_68f15d580bf91971f637be5e464bc803482d78f7.1920x1080.jpg?t=1773759594" alt="Starfield - city environments" />

<p>The modding community has done remarkable work addressing many of Starfield's shortcomings. Better planet generation, reduced loading times, UI improvements, and expanded content have transformed the game for PC players. Bethesda, to their credit, has also continued patching and adding content, including the Shattered Space expansion and ground vehicles that address the barren planet problem.</p>

<p>Starfield is not a bad game, far from it. Within its sprawling, uneven universe are dozens of hours of genuinely excellent content. But it is a game that promised the stars and delivered a solar system, and the gap between ambition and execution is impossible to ignore. For Bethesda fans who know how to find the gold among the gravel, there is plenty to love here. For everyone else, temper your expectations accordingly.</p>`,
    },
  },

  // ===== 4. HADES II =====
  {
    id: "g_hades2",
    slug: "hades-ii",
    title: "Hades II",
    description: "Battle beyond the Underworld using dark sorcery to take on the Titan of Time in this bewitching sequel to the award-winning rogue-like dungeon crawler.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_ef0f63061d0a0a9a7e46f3b84f125d25330e8f19.1920x1080.jpg?t=1765831644",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_ef0f63061d0a0a9a7e46f3b84f125d25330e8f19.1920x1080.jpg?t=1765831644",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_f28befd916e59b8bf0a8a801b8a498b8adaa01eb.1920x1080.jpg?t=1765831644",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_b88cb7b48a86f07a7288bf37141f6558279f9bfc.1920x1080.jpg?t=1765831644",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_c8d2b18451a2cc4d5b4fdd78ed84a5e64e051eac.1920x1080.jpg?t=1765831644",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_f366f20f4fb699f6735581e04c7c45a1ef7bd1b8.1920x1080.jpg?t=1765831644",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=gMYJVpbxpNE",
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    platforms: ["PC", "Nintendo Switch", "Nintendo Switch 2"],
    genres: ["Action", "Roguelike", "RPG"],
    metacriticScore: 94,
    steamAppId: "1145350",
    averageScore: 94,
    releaseDate: "2025-09-25T00:00:00.000Z",
    review: {
      title: "Hades II Review: Lightning Strikes Twice in the Best Roguelike Ever Made",
      score: 94,
      pros: ["Combat is even more fluid and varied than the original", "Melinoe is a fantastic protagonist with real emotional depth", "The sheer volume of voice-acted narrative content is staggering", "Dual-path structure doubles the replay value"],
      cons: ["Early access players may find some content familiar", "Resource gathering loop can feel grindy initially", "Some late-game balance issues with specific builds"],
      verdict: "Hades II does the impossible by surpassing its predecessor in nearly every way, delivering the definitive roguelike experience with unmatched narrative depth and combat excellence.",
      publishedAt: "2025-09-29T10:00:00.000Z",
      content: `<p>When Supergiant Games released the original Hades in 2020, it redefined what a roguelike could be. The studio somehow convinced skeptics that narrative and permadeath could coexist beautifully, delivering a game that earned universal acclaim. The question hanging over Hades II was simple: could lightning strike twice? The answer is a resounding, thunderous yes.</p>

<p>Melinoe, sister of Zagreus and daughter of Hades and Persephone, is a protagonist who immediately commands attention. Where Zagreus was brash and charming, Melinoe is determined and haunted, carrying the weight of her family's imprisonment by the Titan Chronos. Her journey is more personal, more intense, and ultimately more emotionally rewarding than her brother's rebellion. The relationship she builds with her mentor Hecate and the Olympian gods who rally to her cause creates a web of character dynamics that makes every death feel like an opportunity rather than a setback.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_ef0f63061d0a0a9a7e46f3b84f125d25330e8f19.1920x1080.jpg?t=1765831644" alt="Hades II - combat gameplay" />

<p>Combat has been expanded dramatically. The addition of the Omega system, which allows charged-up versions of every ability, adds a layer of strategic depth that transforms encounters. Each weapon feels fundamentally different, from the sweeping Sister Blades to the devastating Moonstone Axe, and the boon system from the Olympian gods creates build diversity that keeps runs fresh even after dozens of hours. The new magic system, tied to Melinoe's witchcraft, provides crowd control and area denial options that the original game lacked.</p>

<p>The dual-path structure is Hades II's boldest innovation. Rather than simply descending through the Underworld, Melinoe can also ascend to the surface, fighting through entirely different biomes with unique enemies and bosses. This effectively doubles the content and creates fascinating strategic decisions about which path to take on any given run. Both routes feel equally polished and vital to the overall narrative.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_f28befd916e59b8bf0a8a801b8a498b8adaa01eb.1920x1080.jpg?t=1765831644" alt="Hades II - Melinoe in action" />

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/gMYJVpbxpNE" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The art direction continues Supergiant's tradition of visual excellence. Environments are painterly and atmospheric, character portraits are stunning, and the animation work during combat is fluid and expressive. Darren Korb and Ashley Barrett return with a soundtrack that may be their finest work yet, blending Greek-inspired instrumentation with electronic elements in ways that perfectly match the game's mood.</p>

<p>The resource gathering system, while initially feeling grindy, reveals itself as a clever meta-progression layer that ties into the game's themes of preparation and ritual. Growing ingredients in the gardens, mixing reagents for incantations, and gradually unlocking new tools and abilities creates a satisfying loop that exists alongside the core run-based gameplay. Some players may find the initial pacing of resource acquisition slow, but patience is rewarded with meaningful upgrades.</p>

<p>The writing is, predictably, superb. Supergiant has crammed an almost absurd amount of voice-acted dialogue into the game, ensuring that conversations rarely repeat and characters continue revealing new facets of their personalities hundreds of runs in. The depiction of Greek mythology is both reverent and playful, finding humor and humanity in gods and titans alike.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/ss_b88cb7b48a86f07a7288bf37141f6558279f9bfc.1920x1080.jpg?t=1765831644" alt="Hades II - boss encounter" />

<p>Late-game balance is the only area where Hades II shows its seams. Certain build combinations become overwhelmingly powerful once fully assembled, trivializing encounters that should maintain tension. This is a common roguelike problem, but given the otherwise impeccable design, it stands out more than it might in a lesser game.</p>

<p>Hades II is that rarest of sequels: one that takes everything great about its predecessor and makes it better without losing the soul that made the original special. It is the definitive roguelike, a masterclass in game design that weaves narrative and mechanics into something truly transcendent. Supergiant Games has done it again.</p>`,
    },
  },

  // ===== 5. AVOWED =====
  {
    id: "g_avowed",
    slug: "avowed",
    title: "Avowed",
    description: "Avowed is a first-person fantasy RPG set in the world of Eora, where your choices carve a path through war, intrigue, and ancient mysteries.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2457220/4ce0337503b8aa740fd84c0ec19a850a5efb8569/ss_4ce0337503b8aa740fd84c0ec19a850a5efb8569.1920x1080.jpg?t=1771352530",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2457220/4ce0337503b8aa740fd84c0ec19a850a5efb8569/ss_4ce0337503b8aa740fd84c0ec19a850a5efb8569.1920x1080.jpg?t=1771352530",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2457220/6cbf7b81f6b1604bbe02886c666eafa0bd2d5f6e/ss_6cbf7b81f6b1604bbe02886c666eafa0bd2d5f6e.1920x1080.jpg?t=1771352530",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2457220/082ba9d5d0ed6718de9a138bce5da847fcd05a61/ss_082ba9d5d0ed6718de9a138bce5da847fcd05a61.1920x1080.jpg?t=1771352530",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2457220/f757a8184327a7a53d148ecf62eb7e8823cf2fdf/ss_f757a8184327a7a53d148ecf62eb7e8823cf2fdf.1920x1080.jpg?t=1771352530",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2457220/58c502b53fc3741bf6a3e10dbb4cff5e5460ba0d/ss_58c502b53fc3741bf6a3e10dbb4cff5e5460ba0d.1920x1080.jpg?t=1771352530",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=W-cLiEFGEP4",
    developer: "Obsidian Entertainment",
    publisher: "Xbox Game Studios",
    platforms: ["PC", "Xbox Series X/S", "PlayStation 5"],
    genres: ["RPG", "Action", "Fantasy"],
    metacriticScore: 78,
    steamAppId: "2457220",
    averageScore: 78,
    releaseDate: "2025-02-18T00:00:00.000Z",
    review: {
      title: "Avowed Review: A Solid RPG That Lives in the Shadow of Giants",
      score: 78,
      pros: ["Fluid combat with excellent magic and weapon variety", "Beautiful environments with strong art direction", "Companion characters are well-written and engaging", "Game Pass day one makes it an easy recommendation"],
      cons: ["World feels smaller and less ambitious than expected", "Main narrative lacks the punch of Obsidian's best work", "Technical issues marred the launch experience", "Quest design can feel formulaic in the second half"],
      verdict: "Avowed is a polished and enjoyable first-person RPG that showcases Obsidian's combat and character strengths without quite reaching the narrative heights fans hoped for.",
      publishedAt: "2025-02-22T10:00:00.000Z",
      content: `<p>Obsidian Entertainment has built a reputation as one of the finest RPG studios in the industry, responsible for gems like Fallout: New Vegas and Pillars of Eternity. Avowed, their first-person fantasy RPG set in the Eora universe, carries the weight of that legacy on its shoulders. The result is a game that is undeniably competent and frequently enjoyable, but one that never quite reaches the heights of Obsidian's best work.</p>

<p>Combat is where Avowed shines brightest. The first-person melee and magic system is fluid and satisfying, offering a breadth of options that keeps encounters interesting throughout the 30-hour campaign. Dual-wielding wands for devastating spell combinations feels incredible, and the ability to quickly swap between loadouts mid-combat creates a dynamic flow that rewards experimentation. Boss encounters are particularly well-designed, requiring players to learn patterns and adapt their strategies.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2457220/4ce0337503b8aa740fd84c0ec19a850a5efb8569/ss_4ce0337503b8aa740fd84c0ec19a850a5efb8569.1920x1080.jpg?t=1771352530" alt="Avowed - first person combat" />

<p>The Living Lands, the region of Eora where Avowed takes place, is visually striking. Dense forests give way to bioluminescent caves, crumbling ruins hide ancient secrets, and the art direction consistently impresses. It is a beautiful world to inhabit, even if it feels noticeably smaller and more compartmentalized than the sprawling maps of competitors like Elden Ring or Skyrim.</p>

<p>Companion characters are a genuine highlight. Obsidian's talent for creating memorable party members is on full display, with each companion offering distinct perspectives, personal quests, and meaningful banter that enriches exploration. The relationships you build feel organic and rewarding, and companion choices during key story moments carry real weight.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2457220/6cbf7b81f6b1604bbe02886c666eafa0bd2d5f6e/ss_6cbf7b81f6b1604bbe02886c666eafa0bd2d5f6e.1920x1080.jpg?t=1771352530" alt="Avowed - Living Lands environment" />

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/W-cLiEFGEP4" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The main narrative, unfortunately, is where Avowed stumbles most noticeably. The mystery of the Dream Scourge and your role as an envoy from the Aedyr Empire starts with genuine intrigue but loses momentum in its middle act. Political machinations that should feel weighty instead feel rushed, and the final revelations lack the gut-punch impact of Obsidian's best narrative twists. Side quests fare better, with several memorable standalone stories that demonstrate the studio's writing talent.</p>

<p>Technical performance was a sore point at launch. Frame rate drops in dense areas, occasional crashes, and visual bugs undercut the otherwise polished presentation. Post-launch patches have addressed many of these issues, but the launch experience left a sour taste for early adopters. The anniversary update bringing PS5 support and additional content has helped round out the experience considerably.</p>

<p>The progression system offers satisfying depth without overwhelming complexity. Skill trees for each weapon type and magic school provide clear paths for specialization, while the equipment system allows for meaningful customization. The crafting system is serviceable but unremarkable, feeling like an afterthought compared to the combat design.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2457220/082ba9d5d0ed6718de9a138bce5da847fcd05a61/ss_082ba9d5d0ed6718de9a138bce5da847fcd05a61.1920x1080.jpg?t=1771352530" alt="Avowed - magical combat" />

<p>Quest design follows a familiar Obsidian template: talk to NPCs, investigate a situation, make a choice with consequences. This works well in the first half but becomes noticeably formulaic by the endgame. The lack of truly surprising quest structures or memorable set pieces holds Avowed back from standing alongside Obsidian's greatest achievements.</p>

<p>Avowed is a game that is easy to recommend, especially on Game Pass, but difficult to champion as a must-play. It is a solid, well-crafted RPG that delivers satisfying combat and memorable companions in a beautiful world. It is also a game that feels like it could have been so much more, and the gap between what it is and what it could have been is the source of its most persistent criticism.</p>`,
    },
  },

  // ===== 6. KINGDOM COME: DELIVERANCE II =====
  {
    id: "g_kcd2",
    slug: "kingdom-come-deliverance-ii",
    title: "Kingdom Come: Deliverance II",
    description: "A thrilling story-driven action RPG with a rich open world set in 15th century Medieval Europe. Continue Henry's journey of loss, vengeance, and glory.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_935ddb59f90bc2c21c706132cb9b446fe7851c19.1920x1080.jpg?t=1774370931",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_935ddb59f90bc2c21c706132cb9b446fe7851c19.1920x1080.jpg?t=1774370931",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_709f3329562cd2cfe6db70bac908b3e72eaef83b.1920x1080.jpg?t=1774370931",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_bd668f4d12300c019fa3fa73108aa62929fbf862.1920x1080.jpg?t=1774370931",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_5580d672302cdc5f8b7161dc94f266341e61a182.1920x1080.jpg?t=1774370931",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=pFSMCog4M9Q",
    developer: "Warhorse Studios",
    publisher: "Deep Silver",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    genres: ["Action", "Adventure", "RPG"],
    metacriticScore: 89,
    steamAppId: "1771300",
    averageScore: 89,
    releaseDate: "2025-02-04T00:00:00.000Z",
    review: {
      title: "Kingdom Come: Deliverance II Review: Medieval Authenticity Meets Modern Ambition",
      score: 89,
      pros: ["Stunningly authentic medieval open world", "Vastly improved combat system over the original", "Henry's continued story is genuinely compelling", "Historical accuracy creates unmatched immersion"],
      cons: ["Bugs and technical issues persist at launch", "Steep learning curve may alienate newcomers", "Save system remains unnecessarily punishing", "Performance can struggle on last-gen consoles"],
      verdict: "Kingdom Come: Deliverance II is a triumphant sequel that polishes the original's rough edges while delivering one of the most authentic and immersive medieval worlds ever created in gaming.",
      publishedAt: "2025-02-08T10:00:00.000Z",
      content: `<p>The original Kingdom Come: Deliverance was a game of extraordinary ambition and equally extraordinary jankiness. Warhorse Studios dared to create a historically accurate medieval RPG without magic, dragons, or fantasy conveniences, and the result was a flawed gem that inspired fierce loyalty from its fans. The sequel arrives with years of lessons learned, a bigger budget, and the same stubborn commitment to authenticity that made the original so distinctive.</p>

<p>Henry of Skalitz returns as one of gaming's most endearing everymen. His journey from a blacksmith's son to a warrior caught in the currents of history continues with the same blend of humor, vulnerability, and growing competence that made him so relatable in the first game. The writing treats Henry as a person shaped by his experiences rather than a blank action hero, and his relationships with returning characters like Hans Capon and Sir Radzig carry genuine emotional weight.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_935ddb59f90bc2c21c706132cb9b446fe7851c19.1920x1080.jpg?t=1774370931" alt="Kingdom Come Deliverance II - medieval world" />

<p>The combat system has received the most significant overhaul. While it retains the directional attack system that made the original so challenging, the execution is far smoother and more readable. Parrying, riposting, and combo attacks flow naturally once the system clicks, creating swordfights that feel weighty and consequential in a way that few games achieve. The addition of mounted combat and larger battle sequences adds variety that the original sorely lacked.</p>

<p>The open world is breathtaking. Warhorse's recreation of 15th-century Bohemia is so meticulously detailed that it feels less like a game world and more like a time machine. Villages follow historically accurate layouts, NPCs maintain daily routines that reflect medieval life, and the countryside is alive with the sounds and sights of a world untouched by industrialization. The sense of place is extraordinary and unmatched by any other RPG on the market.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_709f3329562cd2cfe6db70bac908b3e72eaef83b.1920x1080.jpg?t=1774370931" alt="Kingdom Come Deliverance II - combat" />

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/pFSMCog4M9Q" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Side quests have been dramatically expanded in both quantity and quality. Many feature multi-step investigations, moral dilemmas without clear right answers, and consequences that ripple through the game world. A quest to uncover a counterfeiting ring led me through three different towns, multiple disguises, and a climactic confrontation that changed the political landscape of an entire region. This level of depth in optional content is remarkable.</p>

<p>The learning curve remains steep. New players who did not experience the original will face a punishing opening hours where Henry is weak, unskilled, and easily killed. The game expects you to train, practice, and gradually improve rather than providing instant competence, which is admirable in its commitment to realism but frustrating in its execution. The save system, which still requires a consumable item to save outside of sleep locations, continues to be an unnecessarily punishing design choice.</p>

<p>Technical issues are the game's most persistent flaw. While dramatically improved over the original's launch state, bugs ranging from minor graphical glitches to occasional quest-breaking issues are still present. Performance on lower-end hardware can be inconsistent, particularly in densely populated towns. Warhorse has been responsive with patches, but the launch window required patience.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_bd668f4d12300c019fa3fa73108aa62929fbf862.1920x1080.jpg?t=1774370931" alt="Kingdom Come Deliverance II - Bohemian countryside" />

<p>The soundtrack beautifully complements the setting, with period-appropriate instrumentation that enhances the medieval atmosphere without becoming intrusive. Voice acting is consistently strong across the cast, with Henry's voice actor once again delivering a performance that balances earnestness with subtle comedy.</p>

<p>Kingdom Come: Deliverance II is the rare sequel that fulfills the promise of its predecessor. It takes the audacious vision of a realistic medieval RPG and executes it with a level of polish and confidence that the original could only dream of. For players willing to meet its demands, it offers one of the most rewarding and unique RPG experiences available.</p>`,
    },
  },

  // ===== 7. CIVILIZATION VII =====
  {
    id: "g_civ7",
    slug: "civilization-vii",
    title: "Sid Meier's Civilization VII",
    description: "The award-winning strategy game franchise returns with a revolutionary new chapter. Sid Meier's Civilization VII empowers you to build the greatest empire the world has ever known!",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295660/ss_8c1226a5c58447773b03b6c967e9d561d3315fd7.1920x1080.jpg?t=1770414576",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295660/ss_8c1226a5c58447773b03b6c967e9d561d3315fd7.1920x1080.jpg?t=1770414576",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295660/ss_ad61e86883bed33711a00965170fc4b4ae785774.1920x1080.jpg?t=1770414576",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295660/ss_64cd9528b18dc6deebd96a4f32125b5b49fd27ab.1920x1080.jpg?t=1770414576",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295660/ss_84b42c86ecf359f5df63f1626b0971d0454ebd3e.1920x1080.jpg?t=1770414576",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=pygcgE3a_uY",
    developer: "Firaxis Games",
    publisher: "2K",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Nintendo Switch"],
    genres: ["Strategy", "4X", "Turn-Based"],
    metacriticScore: 79,
    steamAppId: "1295660",
    averageScore: 79,
    releaseDate: "2025-02-11T00:00:00.000Z",
    review: {
      title: "Civilization VII Review: Bold Changes That Do Not Always Pay Off",
      score: 79,
      pros: ["Age system creates genuinely dynamic campaigns", "Leaders and civilizations being separate adds strategic depth", "Improved diplomacy and trade systems", "Stunning visual overhaul with excellent art direction"],
      cons: ["Three-age structure can feel disjointed between eras", "AI struggles with the new systems at launch", "Missing features fans expect from a mature Civ game", "Navigable rivers feel undercooked"],
      verdict: "Civilization VII takes bold swings with its age-based structure and split leaders, delivering an innovative but uneven entry that lays strong foundations for future expansions.",
      publishedAt: "2025-02-15T10:00:00.000Z",
      content: `<p>Every new Civilization game faces the impossible task of satisfying two conflicting audiences: longtime fans who want refinement and newcomers who need accessibility. Civilization VII attempts to thread this needle with the most radical structural changes the series has seen, and the results are fascinating, frustrating, and full of potential in roughly equal measure.</p>

<p>The headline change is the Age system. Rather than playing a single civilization from the Ancient Era to the Information Age, campaigns are now divided into three distinct Ages, with players choosing a new civilization at each transition. The idea is that real empires evolve and transform over millennia, and Civ VII wants to capture that dynamism. In practice, it creates moments of genuine excitement when you pivot from Rome to Spain, inheriting some traits while gaining entirely new ones, but it can also feel jarring when centuries of carefully built infrastructure suddenly changes identity.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295660/ss_8c1226a5c58447773b03b6c967e9d561d3315fd7.1920x1080.jpg?t=1770414576" alt="Civilization VII - strategic gameplay" />

<p>Separating leaders from civilizations is the other major innovation, and this one lands more cleanly. Choosing Cleopatra to lead the Shoshone creates combinations that feel historically playful while adding genuine strategic variety. Each leader has unique abilities that complement different playstyles, and the permutations are vast enough that experimenting with combinations becomes a compelling metagame in itself.</p>

<p>The visual presentation is a massive leap forward. Gone is Civ VI's polarizing cartoon aesthetic, replaced with a more realistic, painterly style that makes the map feel like a living historical tapestry. Cities grow and sprawl with visible detail, units are beautifully animated, and the wonder cinematics are genuinely spectacular. Gwendoline Christie's narration adds gravitas to every era transition.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/pygcgE3a_uY" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Diplomacy and trade have been substantially improved. The new relationship system tracks your actions and creates a more believable web of alliances, rivalries, and grudges that evolve over time. Trade routes feel more impactful and strategic, encouraging players to think about economic geography in ways that previous entries glossed over.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295660/ss_ad61e86883bed33711a00965170fc4b4ae785774.1920x1080.jpg?t=1770414576" alt="Civilization VII - empire management" />

<p>The AI, however, struggles to keep up with the new systems. Computer opponents often make baffling decisions during Age transitions, fail to adequately leverage the leader-civilization separation, and can be exploited by players who understand the new mechanics. This has always been a Civilization challenge, but the added complexity of Civ VII's systems makes the AI's shortcomings more visible.</p>

<p>Content-wise, Civ VII at launch feels both ambitious and incomplete. The Age system means that each era has fewer civilizations than a traditional Civ game would, and certain features that series veterans expect, like a robust espionage system and religious victory path, feel stripped back. Navigable rivers, one of the most hyped new features, are functional but do not transform gameplay the way the marketing suggested.</p>

<p>The economic victory condition is a welcome addition that provides a genuinely different path to success. Building trade empires and financial networks creates a compelling alternative to military or cultural dominance, and the systems supporting it are well-designed and satisfying to engage with.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295660/ss_64cd9528b18dc6deebd96a4f32125b5b49fd27ab.1920x1080.jpg?t=1770414576" alt="Civilization VII - beautiful world map" />

<p>Civilization VII is a game of enormous potential that has not yet fully realized its ambitions. The Age system is a genuinely innovative idea that needs more civilization options and smoother transitions to reach its potential. The leader-civilization split works wonderfully. The visual overhaul is excellent. But like Civ V and Civ VI before it, this feels like a foundation waiting for expansions to build upon. History, as always, favors patience with Civilization games.</p>`,
    },
  },

  // ===== 8. ASSASSIN'S CREED SHADOWS =====
  {
    id: "g_ac_shadows",
    slug: "assassins-creed-shadows",
    title: "Assassin's Creed Shadows",
    description: "Experience an epic action-adventure story set in feudal Japan. Become a lethal shinobi assassin and powerful legendary samurai as you explore a beautiful open world in a time of chaos.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3159330/7257f31bb96b01f5b596ae5e0fa714319e43d64a/ss_7257f31bb96b01f5b596ae5e0fa714319e43d64a.1920x1080.jpg?t=1774551195",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3159330/7257f31bb96b01f5b596ae5e0fa714319e43d64a/ss_7257f31bb96b01f5b596ae5e0fa714319e43d64a.1920x1080.jpg?t=1774551195",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3159330/86653e3e54574cb65155452fa6657b7214a8d877/ss_86653e3e54574cb65155452fa6657b7214a8d877.1920x1080.jpg?t=1774551195",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3159330/dbadf23ede7af4684012bab610ffb52f33fdb9e2/ss_dbadf23ede7af4684012bab610ffb52f33fdb9e2.1920x1080.jpg?t=1774551195",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3159330/c6b98b5978b0054173b38d5700dc3c9681d0513c/ss_c6b98b5978b0054173b38d5700dc3c9681d0513c.1920x1080.jpg?t=1774551195",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=Dk8StGSTy54",
    developer: "Ubisoft Quebec",
    publisher: "Ubisoft",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    genres: ["Action", "Adventure", "RPG", "Stealth"],
    metacriticScore: 82,
    steamAppId: "3159330",
    averageScore: 82,
    releaseDate: "2025-03-20T00:00:00.000Z",
    review: {
      title: "Assassin's Creed Shadows Review: Feudal Japan Finally Gets the Treatment It Deserves",
      score: 82,
      pros: ["Dual protagonist system adds genuine variety to gameplay", "Feudal Japan setting is gorgeously realized", "Stealth mechanics are the best in the series", "Seasonal cycle transforms the open world beautifully"],
      cons: ["Yasuke's combat sections feel generic compared to Naoe's stealth", "Open world fatigue sets in during the bloated middle act", "Story takes too long to find its footing", "Ubisoft formula is still very much present"],
      verdict: "Assassin's Creed Shadows delivers a stunning rendition of feudal Japan with its best stealth gameplay in years, though the familiar open-world formula prevents it from achieving true greatness.",
      publishedAt: "2025-03-24T10:00:00.000Z",
      content: `<p>Fans have been requesting a feudal Japan setting for Assassin's Creed for over a decade, and Ubisoft has finally delivered with Shadows. The result is a gorgeous, sprawling adventure that represents the series at its most visually stunning, even as it struggles to break free from the open-world conventions that have defined the franchise for years.</p>

<p>The dual protagonist system is Shadows' most distinctive feature. Naoe, a shinobi trained in the art of stealth, and Yasuke, the legendary African samurai, offer fundamentally different gameplay experiences. Switching between them is not just a narrative device but a mechanical one: Naoe can infiltrate, assassinate, and vanish like a ghost, while Yasuke charges into combat with the raw power of a heavy fighter. When the game lets you choose which character to bring to a mission, the strategic layer this adds is genuinely compelling.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3159330/7257f31bb96b01f5b596ae5e0fa714319e43d64a/ss_7257f31bb96b01f5b596ae5e0fa714319e43d64a.1920x1080.jpg?t=1774551195" alt="Assassin's Creed Shadows - feudal Japan" />

<p>Naoe's stealth gameplay is the best the franchise has produced. The return of dedicated stealth mechanics, including hiding in shadows, distracting guards, and executing one-hit assassinations, feels like a homecoming for fans who missed the series' roots. Level design in stealth sections is intricate and rewards patience, with multiple infiltration routes and creative opportunities for silent takedowns. Playing as Naoe captures the fantasy of being a ninja in a way that few games have managed.</p>

<p>Yasuke's sections, unfortunately, do not reach the same heights. His combat is competent but feels like a more generic action RPG experience, lacking the precision and depth of dedicated action games. The contrast with Naoe's sections actually works against him, as the stealth gameplay is so satisfying that switching to straightforward combat can feel like a downgrade.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/Dk8StGSTy54" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The open world is undeniably beautiful. Feudal Japan has been recreated with meticulous attention to detail, from the cherry blossom-lined paths of Kyoto to the rugged coastlines of the Japanese interior. The seasonal cycle, which transforms the entire map as months pass, is a technical and artistic achievement that adds a layer of atmosphere that previous Assassin's Creed games could not match. Autumn foliage and winter snowfall completely change the mood of familiar areas.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3159330/86653e3e54574cb65155452fa6657b7214a8d877/ss_86653e3e54574cb65155452fa6657b7214a8d877.1920x1080.jpg?t=1774551195" alt="Assassin's Creed Shadows - seasonal beauty" />

<p>The Ubisoft formula, however, remains firmly intact. The map is littered with icons, collectibles, and side activities that vary wildly in quality. For every memorable side quest about a haunted village or a rival shinobi, there are a dozen generic bandit camps and resource collection tasks. The middle act in particular suffers from bloat, padding the campaign with repetitive tasks that dilute the impact of the stronger story beats.</p>

<p>The narrative takes too long to find its footing. The opening hours are slow and exposition-heavy, establishing the political landscape of the Sengoku period without giving players enough reasons to care. Once the story gains momentum in its second half, however, the interweaving of Naoe and Yasuke's personal journeys against the backdrop of historical events becomes genuinely engaging.</p>

<p>Performance on PC is solid following early patches, and the game supports PS5 Pro features including a quality mode that delivers impressive visual fidelity. The sound design is excellent, with a soundtrack that blends traditional Japanese instrumentation with the series' signature orchestral style. Environmental audio, from the rustle of bamboo groves to the clash of steel in castle courtyards, is consistently impressive.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3159330/dbadf23ede7af4684012bab610ffb52f33fdb9e2/ss_dbadf23ede7af4684012bab610ffb52f33fdb9e2.1920x1080.jpg?t=1774551195" alt="Assassin's Creed Shadows - stealth and combat" />

<p>Assassin's Creed Shadows is, ultimately, exactly what fans of the series expect: a beautiful open world, an interesting historical setting, and a mixture of stealth and combat wrapped in a formula that has been refined but never truly reimagined. For those who have been waiting for feudal Japan, the setting alone makes it worth playing. For those hoping the series would evolve beyond its established template, the wait continues.</p>`,
    },
  },

  // ===== 9. LIKE A DRAGON: PIRATE YAKUZA IN HAWAII =====
  {
    id: "g_lad_pirate",
    slug: "like-a-dragon-pirate-yakuza-in-hawaii",
    title: "Like a Dragon: Pirate Yakuza in Hawaii",
    description: "Embark on an over-the-top, modern-day pirate adventure with an ex-yakuza, now pirate captain and his crew.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3061810/ss_499b45a4b23d3a0be4db580b438abf79a65ef3c0.1920x1080.jpg?t=1763646676",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3061810/ss_499b45a4b23d3a0be4db580b438abf79a65ef3c0.1920x1080.jpg?t=1763646676",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3061810/ss_57384e54173bf628f97c6b1f8c47381e5c1d7439.1920x1080.jpg?t=1763646676",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3061810/ss_a334a13337028ee1ac328daffd4c03e51bb00d8b.1920x1080.jpg?t=1763646676",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3061810/ss_5a7eb0f6f7ca7048630528f5715563147340c2a6.1920x1080.jpg?t=1763646676",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3061810/ss_8352ef639c0c52b316547ef16a825f06c0b91e39.1920x1080.jpg?t=1763646676",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=oHu8xl1WtPs",
    developer: "Ryu Ga Gotoku Studio",
    publisher: "SEGA",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One"],
    genres: ["Action", "Adventure", "RPG", "Open World"],
    metacriticScore: 81,
    steamAppId: "3061810",
    averageScore: 81,
    releaseDate: "2025-02-21T00:00:00.000Z",
    review: {
      title: "Like a Dragon: Pirate Yakuza in Hawaii Review: Absurdity on the High Seas",
      score: 81,
      pros: ["Majima is an endlessly entertaining protagonist", "Naval combat is surprisingly deep and fun", "The series' signature humor is sharper than ever", "Side content is wildly creative and hilarious"],
      cons: ["Main story is thinner than previous entries", "On-foot combat feels recycled from Infinite Wealth", "Some naval missions become repetitive in the late game", "Technical performance is inconsistent on PC"],
      verdict: "Like a Dragon: Pirate Yakuza in Hawaii is a gleefully absurd spin-off that proves Majima can carry a game on his own, even if the pirate theme wears thin before the credits roll.",
      publishedAt: "2025-02-25T10:00:00.000Z",
      content: `<p>If someone had told you five years ago that the next Yakuza game would star Goro Majima as a pirate captain sailing around Hawaii, you would have thought they were joking. But this is the Like a Dragon series, where absurdity is not a bug but the primary feature, and Pirate Yakuza in Hawaii is perhaps the most gleefully unhinged entry in the franchise's history.</p>

<p>Majima is the perfect protagonist for this particular brand of madness. After losing his memories and washing up on a tropical island, the Mad Dog of Shimano reinvents himself as a pirate captain, assembling a ragtag crew and setting sail for treasure, adventure, and the kind of over-the-top violence that would make actual pirates blush. His amnesiac state gives the writers license to reintroduce familiar elements through fresh eyes, and Majima's reactions to the escalating chaos around him are consistently hilarious.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3061810/ss_499b45a4b23d3a0be4db580b438abf79a65ef3c0.1920x1080.jpg?t=1763646676" alt="Like a Dragon Pirate Yakuza - Hawaii adventure" />

<p>Naval combat is the game's most significant addition, and it works far better than it has any right to. Ship battles are fast-paced affairs that blend cannon barrages, boarding actions, and crew management into something surprisingly tactical. Upgrading your ship, recruiting specialized crew members, and customizing your loadout creates a satisfying progression loop that keeps maritime encounters fresh for most of the game. The moment you execute a devastating broadside that cripples an enemy vessel before leaping aboard for close-quarters combat is pure gaming joy.</p>

<p>The side content is where Ryu Ga Gotoku Studio continues to prove they are the masters of open-world variety. Mini-games range from the expected, like karaoke and gambling, to the utterly bizarre, like competitive treasure diving and pirate-themed cooking competitions. Each one is crafted with a level of care and humor that makes distractions feel like main attractions.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3061810/ss_57384e54173bf628f97c6b1f8c47381e5c1d7439.1920x1080.jpg?t=1763646676" alt="Like a Dragon Pirate Yakuza - naval combat" />

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/oHu8xl1WtPs" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>On-foot combat, however, feels like it was recycled wholesale from Infinite Wealth. The brawling system is serviceable but lacks the freshness of the naval sections, and enemy variety on land is disappointingly limited. Heat actions are as spectacularly violent as ever, but the core loop of punch, dodge, special move has not evolved meaningfully from the previous game.</p>

<p>The main story is thinner than fans of the series might expect. While the premise is entertaining, the narrative lacks the emotional depth and political intrigue that elevated entries like Yakuza 0 and Like a Dragon. The amnesia plot device, while functional, limits the character development that makes the series' best stories so compelling. Side stories, paradoxically, often deliver stronger emotional moments than the main campaign.</p>

<p>Hawaii as a setting is gorgeous but underutilized compared to the series' traditional Japanese locations. The tropical environments are pretty to look at, but they lack the density and personality that make Kamurocho or Isezaki Ijincho feel like living places. Madlantis, the pirate hub, is a more interesting location that captures the eccentric energy the series is known for.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3061810/ss_a334a13337028ee1ac328daffd4c03e51bb00d8b.1920x1080.jpg?t=1763646676" alt="Like a Dragon Pirate Yakuza - Madlantis" />

<p>Technical performance on PC is a mixed bag. Frame rates can be inconsistent, particularly during naval battles with multiple ships and particle effects on screen. The Dragon Engine continues to deliver excellent character models and facial animations during cutscenes, but environmental textures can be noticeably uneven.</p>

<p>Like a Dragon: Pirate Yakuza in Hawaii is exactly what it appears to be: a fun, loud, unapologetically silly adventure that trades narrative depth for sheer entertainment value. As a spin-off that lets one of gaming's most charismatic characters loose on the high seas, it delivers. As a full-priced entry in a series known for emotional storytelling, it falls a bit short. Either way, you will be smiling through most of it.</p>`,
    },
  },

  // ===== 10. DOOM: THE DARK AGES =====
  {
    id: "g_doom_tda",
    slug: "doom-the-dark-ages",
    title: "DOOM: The Dark Ages",
    description: "DOOM: The Dark Ages is the prequel to the critically acclaimed DOOM (2016) and DOOM Eternal that tells an epic cinematic story worthy of the DOOM Slayer's legend.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3017860/ss_ba66d42e3d1ea78e5b085682484210b390eb9ccc.1920x1080.jpg?t=1768344167",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3017860/ss_ba66d42e3d1ea78e5b085682484210b390eb9ccc.1920x1080.jpg?t=1768344167",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3017860/ss_bbb5ead71b9321c6ba9bfc8941917136f9961fdb.1920x1080.jpg?t=1768344167",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3017860/ss_3c894cfd44c1c12a539d2dbcb93cbecfbdbbb383.1920x1080.jpg?t=1768344167",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3017860/ss_18de5ba08a6468e26bdc7a991fb00d3383e36d0c.1920x1080.jpg?t=1768344167",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3017860/ss_c61b08d39d4af0b19241f85b7f1962674e5b570f.1920x1080.jpg?t=1768344167",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=cKSTu3g8v5Q",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    genres: ["Action", "FPS", "Dark Fantasy"],
    metacriticScore: 88,
    steamAppId: "3017860",
    averageScore: 88,
    releaseDate: "2025-05-15T00:00:00.000Z",
    review: {
      title: "DOOM: The Dark Ages Review: The Slayer's Origin Story is a Brutal Masterpiece",
      score: 88,
      pros: ["Combat is the most visceral and satisfying in the series", "Atlan mech and dragon sequences are incredible set pieces", "The medieval dark fantasy setting is a perfect fit", "Shield Saw is the best new weapon in years"],
      cons: ["Pacing dips during exploration-heavy middle sections", "Some sandbox levels feel unfocused compared to linear stages", "Story, while improved, still takes a back seat to action", "Multiplayer absence will disappoint some fans"],
      verdict: "DOOM: The Dark Ages delivers the most cinematic and narratively ambitious DOOM yet, wrapping its signature ultraviolent combat in a dark fantasy setting that breathes new life into the franchise.",
      publishedAt: "2025-05-19T10:00:00.000Z",
      content: `<p>Id Software had a problem. After DOOM Eternal pushed the first-person shooter to its mechanical limits, demanding inhuman precision and resource management at breakneck speed, where do you go next? The answer, brilliantly, is backward: to a medieval dark fantasy prequel that strips away some of Eternal's complexity in favor of raw, devastating power. DOOM: The Dark Ages is the origin story the Slayer deserves.</p>

<p>The shift to a medieval setting is more than cosmetic. The Dark Ages replaces futuristic corridors and Martian landscapes with crumbling castles, hellish battlefields, and fog-shrouded forests that look like they were torn from a particularly violent oil painting. The idTech engine delivers some of the most impressive visuals in gaming, with lighting and particle effects that make every demon-slaying encounter feel like the climax of a heavy metal album cover.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3017860/ss_ba66d42e3d1ea78e5b085682484210b390eb9ccc.1920x1080.jpg?t=1768344167" alt="DOOM The Dark Ages - medieval combat" />

<p>Combat has been rebalanced to emphasize aggression over resource management. The controversial Marauder-style enemies from Eternal are gone, replaced by encounters that reward relentless forward momentum. The Shield Saw is the standout addition, functioning as both a defensive tool that blocks incoming fire and an offensive weapon that can be hurled at enemies for devastating damage. It fundamentally changes the rhythm of combat in a way that feels fresh without abandoning the series' identity.</p>

<p>The Atlan mech sequences are the game's most spectacular moments. Piloting a building-sized war machine through armies of demons, tearing apart kaiju-sized monsters with your metal fists, creates a sense of scale that the series has never achieved. These sections are carefully paced to avoid outstaying their welcome, serving as exclamation points between the tighter on-foot combat sequences.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/cKSTu3g8v5Q" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Dragon riding, the other major addition, is equally thrilling. Soaring above demon-infested landscapes and raining fire down on armies below captures a fantasy power trip that perfectly complements the ground-level brutality. The dragon controls are surprisingly responsive, and aerial combat encounters against flying demons are intense and well-designed.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3017860/ss_bbb5ead71b9321c6ba9bfc8941917136f9961fdb.1920x1080.jpg?t=1768344167" alt="DOOM The Dark Ages - epic battle" />

<p>The sandbox levels represent id Software's experiment with more open-ended design, and the results are mixed. Some offer genuinely interesting exploration opportunities, with hidden upgrades and optional encounters that reward curiosity. Others feel unfocused, their larger spaces diluting the intensity that makes DOOM combat so thrilling. The linear levels, by contrast, are among the best the studio has ever designed, with perfect pacing and relentless momentum.</p>

<p>The story is more prominent than in previous entries, with actual cutscenes, dialogue, and lore that flesh out the Slayer's medieval origins. Id Software will never be confused with narrative-focused studios, but The Dark Ages makes a genuine effort to give emotional context to the carnage. The relationship between the Slayer and the medieval lords who both fear and need him adds an interesting dimension to a character previously defined entirely by his violence.</p>

<p>The glory kill system has been enhanced with more contextual animations tied to the medieval setting, and they are as brutally satisfying as ever. Splitting a demon with a chainsaw-shield, ripping a Hell Knight apart with bare hands, and impaling enemies on environmental objects never gets old across the fifteen-hour campaign.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3017860/ss_3c894cfd44c1c12a539d2dbcb93cbecfbdbbb383.1920x1080.jpg?t=1768344167" alt="DOOM The Dark Ages - demon slaying" />

<p>DOOM: The Dark Ages proves that the franchise has plenty of life left in it. By shifting the setting and recalibrating the combat, id Software has created the most accessible and cinematic DOOM experience while maintaining the white-knuckle intensity the series is known for. It is not quite the mechanical marvel that Eternal was, but it is a more consistently enjoyable experience from start to finish. Rip and tear, medieval style.</p>`,
    },
  },

  // ===== 11. MONSTER HUNTER WILDS =====
  {
    id: "g_mh_wilds",
    slug: "monster-hunter-wilds",
    title: "Monster Hunter Wilds",
    description: "The unbridled force of nature runs wild and relentless, with environments transforming drastically from one moment to the next. Hunt massive monsters in the most ambitious Monster Hunter yet.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/ss_31b5597fecf2d9a2904bc9bbf8011aacb18143db.1920x1080.jpg?t=1771382452",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/ss_31b5597fecf2d9a2904bc9bbf8011aacb18143db.1920x1080.jpg?t=1771382452",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/ss_9245c1ede8c3fc2cd65e4890a74a01ef50b726da.1920x1080.jpg?t=1771382452",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/ss_c722e74607ffda9a1472093ccc934f1bdde10ab8.1920x1080.jpg?t=1771382452",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/ss_d439e321350c004c4d866c248019aefdc6a50600.1920x1080.jpg?t=1771382452",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=ZMBqJZW6_9k",
    developer: "CAPCOM Co., Ltd.",
    publisher: "CAPCOM Co., Ltd.",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    genres: ["Action", "Adventure", "RPG", "Co-op"],
    metacriticScore: 84,
    steamAppId: "2246340",
    averageScore: 84,
    releaseDate: "2025-02-28T00:00:00.000Z",
    review: {
      title: "Monster Hunter Wilds Review: The Hunt Evolves, Growing Pains and All",
      score: 84,
      pros: ["Dynamic ecosystem creates thrilling unpredictable hunts", "Seamless open world is a massive improvement over World", "Weapon variety and depth is the best in the series", "Cross-platform multiplayer is a game-changer"],
      cons: ["PC performance issues plagued launch severely", "Some new quality-of-life features oversimplify the challenge", "Camera can be frustrating during large-monster encounters", "Story is forgettable filler between hunts"],
      verdict: "Monster Hunter Wilds is the most ambitious and accessible entry in the franchise, delivering breathtaking hunts in a living world, despite launch-period technical struggles that marred the initial experience.",
      publishedAt: "2025-03-04T10:00:00.000Z",
      content: `<p>Monster Hunter Wilds is the biggest, most ambitious Monster Hunter ever made, and it shows in both the best and worst possible ways. Capcom has created a living, breathing ecosystem where massive creatures roam freely across seamless open worlds, dynamic weather transforms the landscape, and every hunt feels like a genuine expedition into the unknown. It is also, at launch, one of the most technically troubled major releases of the year.</p>

<p>The core hunting loop remains as compelling as ever. Tracking a monster through its territory, reading its behavior, exploiting its weaknesses, and carving materials from its corpse to forge better equipment is a gameplay loop that has hooked millions of players across the franchise's history. Wilds refines this loop with a seamless open world that eliminates the loading screens between zones, creating hunts that flow naturally across diverse environments.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/ss_31b5597fecf2d9a2904bc9bbf8011aacb18143db.1920x1080.jpg?t=1771382452" alt="Monster Hunter Wilds - dynamic ecosystem" />

<p>The dynamic ecosystem is the game's crowning achievement. Monsters interact with each other and their environment in ways that create emergent encounters that feel genuinely unscripted. A hunt for a mid-tier monster can suddenly escalate when a territorial apex predator enters the area, forcing you to adapt your strategy on the fly. Weather events like sandstorms and blizzards can transform the terrain, opening new paths or cutting off escape routes. These systems create stories that emerge naturally from gameplay.</p>

<p>Weapon variety reaches its peak in Wilds. All fourteen weapon types return with expanded movesets, and the new Focus Strike mechanic adds a satisfying risk-reward dynamic to every weapon. The Seikret mount, your rideable companion, allows seamless transitions between riding and combat, enabling hit-and-run tactics that add a new dimension to the hunting experience. Cross-platform multiplayer is the long-awaited cherry on top, finally allowing PC, PlayStation, and Xbox hunters to team up.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/ss_9245c1ede8c3fc2cd65e4890a74a01ef50b726da.1920x1080.jpg?t=1771382452" alt="Monster Hunter Wilds - combat encounter" />

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/ZMBqJZW6_9k" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Now, the elephant in the room: PC performance. Wilds launched with severe optimization issues that made the game struggle on hardware that should have handled it comfortably. Frame rate drops during intense encounters, stuttering in populated areas, and shader compilation hitches plagued the early experience. Capcom has been releasing patches, and the situation has improved significantly, but the launch state was unacceptable for a game of this profile.</p>

<p>Some purists will also take issue with the quality-of-life additions. The ability to change weapons at camp mid-hunt, the more forgiving cart system, and the streamlined crafting interface all lower the barrier to entry, which is great for new players but slightly dilutes the hardcore survival fantasy that longtime fans cherish. It is a trade-off that ultimately benefits the franchise's growth, even if it stings slightly for veterans.</p>

<p>The camera deserves special criticism during encounters with the largest monsters. When facing building-sized creatures in tight spaces, the camera can become your worst enemy, obscuring attacks and creating frustrating deaths that feel like mechanical failures rather than player errors. Lock-on helps but does not fully solve the problem.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/ss_c722e74607ffda9a1472093ccc934f1bdde10ab8.1920x1080.jpg?t=1771382452" alt="Monster Hunter Wilds - monster encounter" />

<p>The story, as is tradition for the series, is forgettable. Something about a forbidden land, a mysterious threat, and your role as the chosen hunter. Nobody plays Monster Hunter for the plot, and the game wisely keeps cutscenes brief enough to avoid becoming obstacles between hunts. The post-launch title updates, starting with the addition of Mizutsune, have already begun expanding the monster roster in exciting directions.</p>

<p>Monster Hunter Wilds is the definitive hunting experience, a game that takes the formula perfected in World and expands it into something grander and more dynamic. The technical issues at launch cannot be excused, but the underlying game is extraordinary. Once the patches have done their work and the title updates have filled out the roster, this will be remembered as the best Monster Hunter has ever been.</p>`,
    },
  },

  // ===== 12. POKEMON LEGENDS: Z-A =====
  {
    id: "g_pokemon_za",
    slug: "pokemon-legends-z-a",
    title: "Pokemon Legends: Z-A",
    description: "An ambitious new adventure awaits within Lumiose City, where an urban redevelopment plan is underway to shape the city into a place that belongs to both people and Pokemon. Real-time battles and Mega Evolution return.",
    coverImage: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch-2/70070000025911/e6f5b1a1e44babb06844cd6503c6003667ccbcad65b82f80",
    screenshots: [
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch-2/70070000025911/e6f5b1a1e44babb06844cd6503c6003667ccbcad65b82f80",
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch-2/70070000025911/2e7ff08093fff8bc45c65f9a0e9a0d9c1a7fcafed0e91f84",
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch-2/70070000025911/1e0f08b4a66d39e3e592ca9c765cf5f9bfd8a98bff7fd2a2",
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch-2/70070000025911/bc5cdd3e2897e5c17b3e0f8a19fb0faf8bc365ca38e3f0e5",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=tezs2FsIxgA",
    developer: "Game Freak",
    publisher: "Nintendo",
    platforms: ["Nintendo Switch", "Nintendo Switch 2"],
    genres: ["Action RPG", "Adventure", "Monster Collection"],
    metacriticScore: 83,
    steamAppId: null,
    averageScore: 83,
    releaseDate: "2025-10-16T00:00:00.000Z",
    review: {
      title: "Pokemon Legends: Z-A Review: Lumiose City Becomes a Living, Breathing Pokemon World",
      score: 83,
      pros: ["Real-time battle system is a revelation for the franchise", "Lumiose City is dense and beautifully redesigned", "Mega Evolution returns with exciting new forms", "Z-A Royale adds compelling competitive structure"],
      cons: ["Single-city setting limits environmental variety", "Performance on original Switch is noticeably rough", "Some Pokemon animations feel recycled from previous games", "Post-game content is thin without the DLC"],
      verdict: "Pokemon Legends: Z-A successfully evolves the franchise with its real-time battles and richly detailed city setting, even if the single-location approach limits the sense of adventure that defines the best Pokemon games.",
      publishedAt: "2025-10-20T10:00:00.000Z",
      content: `<p>Pokemon Legends: Arceus proved that Game Freak could break the franchise formula and create something exciting. Pokemon Legends: Z-A takes that ambition further by transplanting the action RPG gameplay into Lumiose City, the sprawling Kalos capital that has been completely reimagined as a dense urban playground where humans and Pokemon coexist in real time. The result is the most mechanically ambitious Pokemon game ever made, even if its scope is more focused than fans might have expected.</p>

<p>The real-time battle system is the headline innovation, and it delivers. Encounters are no longer separate instances triggered by random encounters or overworld spawns. Instead, battles flow seamlessly within the city environment, with your Pokemon fighting alongside you in real time. Positioning matters, timing your commands affects their impact, and the new area-of-effect mechanics add strategic depth that traditional turn-based Pokemon battles have never possessed. It feels genuinely fresh in a franchise that has relied on the same combat formula for decades.</p>

<img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch-2/70070000025911/e6f5b1a1e44babb06844cd6503c6003667ccbcad65b82f80" alt="Pokemon Legends Z-A - Lumiose City" />

<p>Lumiose City itself is a triumph of world design. The urban redevelopment narrative provides a justification for why the city looks so different from its X and Y incarnation, with futuristic architecture and natural green spaces blending into something that feels both fantastical and lived-in. Districts have distinct personalities, from the bustling shopping arcades to the serene waterfront parks where wild Pokemon roam. Prism Tower at the center serves as both a landmark and a narrative focal point that ties the story together.</p>

<p>Mega Evolution returns as the marquee feature, and the new Mega forms are genuinely exciting. Mega Lucario Z, the enhanced version exclusive to this game, is a design highlight, and the strategic decision of when to trigger Mega Evolution during real-time encounters adds a layer of timing-based skill that elevates combat considerably. The Mega Dimension DLC, released a few months after launch, expanded the Mega roster further and added compelling endgame content.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/tezs2FsIxgA" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>The Z-A Royale, a competitive tournament structure woven into the main story, provides a compelling reason to keep refining your team. Climbing the ranks against increasingly skilled trainers creates a sense of progression that goes beyond simple level grinding, and the tournament brackets offer satisfying narrative stakes that make victories feel earned.</p>

<img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch-2/70070000025911/2e7ff08093fff8bc45c65f9a0e9a0d9c1a7fcafed0e91f84" alt="Pokemon Legends Z-A - real-time battles" />

<p>The single-city setting is both Z-A's greatest strength and most significant limitation. Lumiose City is dense and detailed enough to sustain dozens of hours of exploration, but the lack of diverse environments, forests, caves, oceans, mountains, means the game cannot offer the geographical variety that defines the best Pokemon adventures. After twenty hours in the city, even the most beautifully designed urban landscape begins to feel constraining.</p>

<p>Performance on the original Nintendo Switch is a concern. While the game runs acceptably in most situations, frame rate drops in crowded areas and during intense battles are noticeable. The Switch 2 version is dramatically superior, offering a smoother experience with improved textures and faster loading times. It is clear that Z-A was designed with the newer hardware in mind, and original Switch owners pay a noticeable price.</p>

<p>Some Pokemon animations feel recycled from Arceus and earlier titles, which is disappointing given the game's premium positioning. While the new Mega forms and the real-time battle animations are excellent, seeing familiar Pokemon use the same idle and attack animations from three years ago undermines the sense of a fresh experience.</p>

<img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch-2/70070000025911/1e0f08b4a66d39e3e592ca9c765cf5f9bfd8a98bff7fd2a2" alt="Pokemon Legends Z-A - exploration" />

<p>Pokemon Legends: Z-A is a bold step forward for the franchise. Its real-time battles, detailed city setting, and the return of Mega Evolution combine to create the most mechanically interesting Pokemon game in years. The single-location approach limits variety, and the technical compromises on older hardware are frustrating, but the core experience is strong enough to make this a worthwhile adventure for trainers new and old.</p>`,
    },
  },

  // ===== 13. SUBNAUTICA 2 =====
  {
    id: "g_subnautica2",
    slug: "subnautica-2",
    title: "Subnautica 2",
    description: "Immerse yourself in a new adventure with Subnautica 2, an open-water survival game from the creators of the Subnautica series. Play alone or with up to three friends in online multiplayer co-op.",
    coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962700/ss_00c2b6b9b8cbc8be385a9853a0b1d98f68568f4e.1920x1080.jpg?t=1774322866",
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962700/ss_00c2b6b9b8cbc8be385a9853a0b1d98f68568f4e.1920x1080.jpg?t=1774322866",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962700/ss_a1263dc1671eec9d9baed1661de74cf13d7b417b.1920x1080.jpg?t=1774322866",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962700/ss_075004b5e629b213b20fb8769ee10971a1b617a2.1920x1080.jpg?t=1774322866",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962700/ss_2159121cd62f5b9198503338e0f6b1d18d3ded88.1920x1080.jpg?t=1774322866",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962700/ss_824940ca39301e3b3675faa7d1b0f144a23f253c.1920x1080.jpg?t=1774322866",
    ],
    trailerUrl: "https://www.youtube.com/watch?v=RWGK4dRLsFY",
    developer: "Unknown Worlds Entertainment",
    publisher: "KRAFTON, Inc.",
    platforms: ["PC", "Xbox Series X/S"],
    genres: ["Survival", "Adventure", "Open World", "Co-op"],
    metacriticScore: 80,
    steamAppId: "1962700",
    averageScore: 80,
    releaseDate: "2025-10-15T00:00:00.000Z",
    review: {
      title: "Subnautica 2 Review: The Deep Blue Gets Deeper, and Now You Can Bring Friends",
      score: 80,
      pros: ["Co-op multiplayer transforms the survival experience", "New biomes are breathtakingly beautiful and terrifying", "DNA modification system adds creative gameplay options", "Sound design creates unmatched underwater atmosphere"],
      cons: ["Early access roots show in occasional bugs and missing content", "Performance drops in complex base areas with multiple players", "Story is still in development and feels incomplete", "Some survival mechanics feel overly simplified from the original"],
      verdict: "Subnautica 2 successfully brings multiplayer to the beloved underwater survival formula while delivering stunning new environments, though its early access state means the full experience is still taking shape.",
      publishedAt: "2025-10-19T10:00:00.000Z",
      content: `<p>The original Subnautica was a masterclass in environmental storytelling and atmospheric horror, dropping players alone into an alien ocean and trusting them to find their way through wonder and terror in equal measure. Subnautica 2 keeps the formula that worked and adds the one feature fans have demanded most: cooperative multiplayer. The result is a game that preserves the magic of solitary exploration while opening up entirely new dynamics when friends dive in alongside you.</p>

<p>Co-op is the headline feature and it transforms the experience in ways both expected and surprising. Exploring a dark cave system with a friend carrying a flashlight while you scan fauna creates moments of genuine camaraderie. Coordinating base construction, where one player gathers resources while another builds, makes the crafting loop feel less grindy and more collaborative. But the most impactful change is how multiplayer affects the horror. The deep ocean is terrifying alone; with friends, fear becomes shared, creating a different but equally powerful emotional experience where screaming together at a leviathan attack becomes a bonding moment.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962700/ss_00c2b6b9b8cbc8be385a9853a0b1d98f68568f4e.1920x1080.jpg?t=1774322866" alt="Subnautica 2 - underwater exploration" />

<p>The new planet offers biomes that are more visually diverse and ecologically complex than the original. Bioluminescent coral forests pulse with otherworldly light, deep-sea trenches reveal creatures that would not be out of place in a cosmic horror story, and the open-water zones create a sense of vulnerability that the original never quite captured. The art direction is consistently stunning, making Subnautica 2 one of the most beautiful games of the year when you stop to appreciate the scenery between moments of panic.</p>

<p>The DNA modification system is the most interesting mechanical addition. Rather than simply crafting better equipment, players can now splice alien DNA into their own biology, gaining abilities like enhanced night vision, toxin resistance, or temporary gills that extend underwater exploration time. It is a clever narrative justification for progression that fits the science fiction setting perfectly and creates build diversity that the original game lacked.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962700/ss_a1263dc1671eec9d9baed1661de74cf13d7b417b.1920x1080.jpg?t=1774322866" alt="Subnautica 2 - new biome" />

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/RWGK4dRLsFY" title="trailer" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>

<p>Sound design deserves special recognition. The underwater audio environment is extraordinary, with muffled ambience, distant creature calls, and the creaking of your vessel creating a soundscape that is simultaneously beautiful and deeply unsettling. When a leviathan roars in the distance and the controller vibrates with its approach, the primal fear response is genuine.</p>

<p>The early access origins are visible, however. Bugs range from minor visual glitches to occasional crashes that can cost progress if you have not saved recently. Performance in complex base areas with multiple players can drop noticeably, and the pop-in distance for terrain and creatures creates moments where the illusion of a seamless underwater world breaks. These are expected early access issues, but they temper the overall experience.</p>

<p>The story, which was one of the original game's greatest strengths, is still clearly in development. The framework is in place, with tantalizing mysteries about the new planet's history and the circumstances of your arrival, but the narrative threads have not yet been woven into a satisfying whole. This is the most significant early access caveat: the story that will ultimately define the experience is not yet finished.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962700/ss_075004b5e629b213b20fb8769ee10971a1b617a2.1920x1080.jpg?t=1774322866" alt="Subnautica 2 - creature encounter" />

<p>Some survival mechanics have been simplified from the original, which will please casual players but disappoint those who enjoyed the more demanding resource management. Water and food requirements are less punishing, crafting recipes are more forgiving, and the overall difficulty curve is gentler. Whether this is a positive change depends entirely on what you valued most about the original's challenge.</p>

<p>Subnautica 2 in its current state is a beautiful, atmospheric, and occasionally terrifying underwater adventure that is significantly enhanced by the addition of co-op multiplayer. The foundation is excellent, the new systems are promising, and the biomes are stunning. It is not yet the complete experience it will eventually become, but even in early access, the call of the deep is irresistible.</p>`,
    },
  },
];

async function main() {
  console.log("Starting insertion of 13 game reviews...\n");

  // Verify a few image URLs first
  console.log("Verifying sample image URLs...");
  const sampleUrls = [
    games[0].coverImage,
    games[3].screenshots[0],
    games[7].screenshots[0],
    games[10].coverImage,
  ];
  for (const url of sampleUrls) {
    const ok = await checkUrl(url);
    console.log(`  ${ok ? "OK" : "FAIL"}: ${url.substring(0, 80)}...`);
  }
  console.log("");

  const now = new Date().toISOString();

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
      // Update existing game with fresh data
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

  console.log("\n=== All 13 game reviews processed! ===");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
