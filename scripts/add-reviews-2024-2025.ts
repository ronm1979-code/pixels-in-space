import "dotenv/config";
import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!.replace("libsql://", "https://"),
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const now = "2026-04-11T12:00:00.000Z";

const iframe = (id: string, title: string) =>
  `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px"><iframe src="https://www.youtube.com/embed/${id}" title="${title}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>`;

const games = [
  {
    gId: "g_stellar_blade", slug: "stellar-blade", title: "Stellar Blade",
    desc: "A stylish action RPG from Shift Up set on a post-apocalyptic Earth, featuring fast-paced combat inspired by NieR: Automata and spectacular boss fights.",
    dev: "Shift Up", pub: "Sony Interactive Entertainment",
    platforms: '["PC", "PlayStation 5"]', genres: '["Action RPG", "Hack and Slash"]',
    steamId: "3489700", releaseDate: "2024-04-26T00:00:00.000Z", score: 80,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3489700/ss_4291827e357008499d4d5a17bc50d3e93869dd43.1920x1080.jpg?t=1773886328",
    ss: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3489700/ss_4291827e357008499d4d5a17bc50d3e93869dd43.1920x1080.jpg?t=1773886328",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3489700/ss_9d4d62e118a167333d53db94354671e10416b25d.1920x1080.jpg?t=1773886328",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3489700/ss_bcb3946482dc5a1221c024098d2ac09e80255f3e.1920x1080.jpg?t=1773886328",
    ],
    trailer: "DSznLWimMlU",
    rSlug: "stellar-blade-review",
    rTitle: "Stellar Blade Review: A Gorgeous Action RPG That Doesn't Quite Reach the Stars",
    verdict: "A visually stunning action game with satisfying combat, held back by a predictable story and uneven open-world design",
    pros: '["Exceptional combat system with deep combo potential", "Stunning visual fidelity and character design", "Spectacular boss encounters", "Strong post-game content and NG+"]',
    cons: '["Story is predictable and lacks emotional depth", "Open world feels sparse between encounters", "Side quests are repetitive fetch tasks", "Some performance issues in dense areas"]',
    content: (ss: string[], vid: string) => `<p>Stellar Blade is one of the most visually striking games of 2024. Shift Up's debut console title is a feast for the eyes — every environment, character model, and particle effect is rendered with a level of polish that rivals Sony's best first-party output. But beneath that gorgeous exterior lies a game at war with its own ambitions.</p>

<p>The combat is the clear highlight. EVE's moveset starts simple but expands dramatically as you unlock new skills across three distinct trees. Parrying, dodging, and chaining combos feels fantastic once the system clicks, and the highest-difficulty encounters demand a level of precision that will satisfy anyone who grew up on Platinum Games or FromSoftware titles.</p>

${vid}

<p>Boss fights deserve special mention. Stellar Blade's major encounters are spectacular set pieces that combine pattern recognition, environmental hazards, and multi-phase transformations into genuinely memorable battles. The final stretch of bosses in particular represents some of the best action game design of the year.</p>

<img src="${ss[0]}" alt="Stellar Blade combat" />

<p>Where the game falters is everywhere outside of combat. The story follows a familiar post-apocalyptic template — humanity's last hope descends to a ruined Earth to fight alien invaders — and never finds an emotional hook beyond the basic premise. The writing lacks the philosophical depth of NieR: Automata, the game it most obviously aspires to.</p>

<p>The open-world structure also struggles. Between major encounters, you're traversing large but largely empty environments, collecting materials, and completing side quests that rarely rise above basic fetch-and-kill templates. It's functional but uninspired, and the pacing suffers for it.</p>

<img src="${ss[1]}" alt="Stellar Blade exploration" />

<p>Visually, Stellar Blade is a technical showcase. The Unreal Engine 4 implementation pushes the PS5 and PC hardware with detailed environments, impressive lighting, and character animations that are among the best in the genre. Performance is generally solid, though some of the larger open areas can cause frame drops on the quality mode.</p>

<p>The soundtrack mixes orchestral bombast with electronic undertones, and while it rarely reaches iconic heights, it effectively supports the game's tonal shifts between contemplative exploration and frenetic combat. Sound design during fights is particularly satisfying — every hit carries weight and impact.</p>

<img src="${ss[2]}" alt="Stellar Blade boss fight" />

<p>Stellar Blade is a game that nails the fundamentals of combat design while struggling to build a compelling world around it. If you're looking for pure action gameplay, it delivers in spades. If you're looking for the next NieR: Automata, you'll find the shell but not the soul. Still, for a studio's first major console release, it's an impressive achievement that suggests Shift Up's best work is still ahead of them.</p>`,
  },
  {
    gId: "g_dd2", slug: "dragons-dogma-2", title: "Dragon's Dogma 2",
    desc: "Capcom's long-awaited sequel to the cult classic action RPG, featuring an enormous open world, dynamic combat with AI-driven Pawns, and the kind of emergent gameplay that defined the original.",
    dev: "Capcom", pub: "Capcom",
    platforms: '["PC", "PlayStation 5", "Xbox Series X/S"]', genres: '["Action RPG", "Open World"]',
    steamId: "2054970", releaseDate: "2024-03-22T00:00:00.000Z", score: 78,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/ss_f419f8b6577558b40ce8c384f4bfaabbf44c8a8e.1920x1080.jpg?t=1768870094",
    ss: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/ss_f419f8b6577558b40ce8c384f4bfaabbf44c8a8e.1920x1080.jpg?t=1768870094",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/ss_084be4d2bf3c7365c2b684c4b5578a1ad8deefac.1920x1080.jpg?t=1768870094",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/ss_037861574d85abdfb8908204e446544abd92effe.1920x1080.jpg?t=1768870094",
    ],
    trailer: "cT0rIgaiPWA",
    rSlug: "dragons-dogma-2-review",
    rTitle: "Dragon's Dogma 2 Review: A Flawed Masterpiece of Emergent Adventure",
    verdict: "A sprawling, systems-driven RPG that recaptures the original's magic while struggling with technical issues and questionable monetization",
    pros: '["Incredible emergent gameplay and dynamic combat", "Pawn system is deeper and more rewarding than ever", "Massive open world full of genuine discovery", "Vocation system offers tremendous build variety"]',
    cons: '["Significant performance issues at launch", "Controversial microtransactions for a full-price game", "Fast travel limitations frustrate more than they immerse", "Main story is forgettable"]',
    content: (ss: string[], vid: string) => `<p>Dragon's Dogma 2 is the rare sequel that understands exactly what made its predecessor special — and then doubles down on every single one of those qualities, for better and worse. It's a game of extraordinary highs and frustrating lows, often within the same hour of play.</p>

<p>The combat remains the series' crown jewel. Climbing a griffin mid-flight, hacking at its wings as your Pawns cast support spells from the ground below, only to plummet together into a canyon and stumble into a goblin ambush — these emergent moments happen constantly and they never stop being thrilling. Every vocation feels distinct and satisfying, and the new ones like Mystic Spearhand and Warfarer add even more tactical depth.</p>

${vid}

<p>The Pawn system has been meaningfully expanded. Your AI companions now have better awareness, more personality in their dialogue, and genuinely useful combat behaviors. Hiring other players' Pawns remains one of gaming's most unique multiplayer mechanics — asynchronous cooperation that adds real strategic value.</p>

<img src="${ss[0]}" alt="Dragon's Dogma 2 combat" />

<p>The open world is enormous and rewarding to explore on foot. Every hill hides something — a cave, a monster lair, an NPC with a quest, a scenic vista. The deliberate lack of fast travel forces you to engage with the world in ways modern open-world games rarely demand, and the day-night cycle creates genuine tension as darkness brings out deadlier enemies.</p>

<p>But that lack of fast travel also creates genuine frustration. Backtracking through familiar territory for the tenth time isn't immersive — it's tedious. And the performance issues on all platforms, particularly in the capital city of Vernworth, are severe enough to regularly undermine the experience. Frame rates dip into the low twenties in crowded areas, and no amount of patches have fully resolved the problem.</p>

<img src="${ss[1]}" alt="Dragon's Dogma 2 open world" />

<p>The microtransaction controversy deserves mention. While the purchasable items can all be found in-game, their presence in a full-price release feels tone-deaf and unnecessary. Capcom's decision to sell fast travel stones — in a game that deliberately limits fast travel — is particularly cynical.</p>

<p>The main storyline, unfortunately, takes a backseat to emergent exploration. The narrative is functional but unremarkable, following a chosen-one template that the game seems uninterested in developing beyond its basic premise. Side quests fare better, with some genuinely surprising outcomes that reflect the game's commitment to player agency.</p>

<img src="${ss[2]}" alt="Dragon's Dogma 2 pawns" />

<p>Dragon's Dogma 2 is a game that rewards patience and curiosity in equal measure. Its systems are deep, its world is vast, and its combat is among the best in the genre. But its technical issues and monetization choices prevent it from reaching the heights its design deserves. It's a flawed masterpiece — emphasis on both words.</p>`,
  },
  {
    gId: "g_helldivers2", slug: "helldivers-2", title: "Helldivers 2",
    desc: "Arrowhead's explosive cooperative third-person shooter where players spread managed democracy across the galaxy, fighting bugs and robots in chaotic, friendly-fire-enabled missions.",
    dev: "Arrowhead Game Studios", pub: "Sony Interactive Entertainment",
    platforms: '["PC", "PlayStation 5"]', genres: '["Third-Person Shooter", "Co-op"]',
    steamId: "553850", releaseDate: "2024-02-08T00:00:00.000Z", score: 82,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/ss_0c79f56fc7be1bd0102f2ca1c92c8f0900daf4fb.1920x1080.jpg?t=1770747641",
    ss: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/ss_0c79f56fc7be1bd0102f2ca1c92c8f0900daf4fb.1920x1080.jpg?t=1770747641",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/ss_33e684e9cb2517af1599f0ca2b57d65ee82c2e51.1920x1080.jpg?t=1770747641",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/ss_8949ed7dd24a02d5ea13b08fc5c04fab400dc4bd.1920x1080.jpg?t=1770747641",
    ],
    trailer: "UC5EpJR0GBQ",
    rSlug: "helldivers-2-review",
    rTitle: "Helldivers 2 Review: The Most Fun You'll Have Dying for Democracy",
    verdict: "A hilariously chaotic co-op shooter that delivers the best multiplayer experience of 2024, despite server growing pains and balancing controversies",
    pros: '["Exceptionally fun co-op gameplay with genuine teamwork", "Brilliant satirical tone and world-building", "Stratagems system adds tactical depth to every mission", "Live-service galactic war creates compelling meta-narrative"]',
    cons: '["Server instability plagued launch months", "Balancing patches have been controversial", "Solo play is significantly less enjoyable", "Content drip can feel slow between major updates"]',
    content: (ss: string[], vid: string) => `<p>Helldivers 2 is the funniest game of 2024. Not because it tells jokes — though the Starship Troopers-inspired satirical propaganda is consistently hilarious — but because the emergent chaos of four players trying to coordinate airstrikes, orbital barrages, and extraction vehicles inevitably devolves into the most entertaining friendly-fire incidents in gaming history.</p>

<p>Arrowhead's shift from top-down twin-stick to third-person shooter is masterful. The core loop — drop onto a hostile planet, complete objectives, call in Stratagems, survive extraction — is endlessly replayable because the variables change every single time. Enemy compositions, objective layouts, environmental hazards, and the sheer unpredictability of human teammates ensure that no two missions ever feel the same.</p>

${vid}

<p>The Stratagem system is genius. Calling in support weapons, turrets, airstrikes, and vehicles requires inputting directional codes under pressure, creating a risk-reward dynamic that perfectly captures the game's "everything can go wrong" philosophy. There's nothing quite like frantically dialing in an orbital laser while bugs swarm from every direction and your teammates scream for help on comms.</p>

<img src="${ss[0]}" alt="Helldivers 2 combat chaos" />

<p>The galactic war metagame adds a layer of community-driven storytelling that's genuinely compelling. Watching millions of players coordinate to defend sectors, push campaigns, and respond to major orders from Super Earth Command creates a sense of shared purpose that few games achieve. When the community rallies together to complete a major order, it feels like a genuine collective victory.</p>

<p>But the road hasn't been smooth. Launch server issues meant millions of players couldn't actually play the game they'd bought, and the frustration was compounded by weeks of instability. Balancing controversies — particularly around weapon nerfs that made popular gear feel useless — eroded community goodwill and sparked heated debates about the game's design philosophy.</p>

<img src="${ss[1]}" alt="Helldivers 2 stratagems" />

<p>Playing solo is a significantly diminished experience. While technically possible, the game is clearly designed for four-player co-op, and the difficulty scaling doesn't fully compensate for missing teammates. If you don't have friends to play with or aren't comfortable matchmaking with strangers, you'll miss out on what makes Helldivers 2 special.</p>

<p>Content updates have been steady but occasionally feel thin between major drops. New enemies, weapons, and planetary biomes keep the core loop fresh, but the cadence of meaningful additions could be faster. When a new Warbond drops or a major community event launches, the game reaches incredible peaks — it's the valleys between them that test patience.</p>

<img src="${ss[2]}" alt="Helldivers 2 extraction" />

<p>Despite its growing pains, Helldivers 2 is the best cooperative multiplayer experience of 2024 — and arguably one of the best of the entire generation. When four friends are screaming, laughing, and accidentally killing each other while democracy burns around them, nothing else in gaming comes close.</p>`,
  },
  {
    gId: "g_p3r", slug: "persona-3-reload", title: "Persona 3 Reload",
    desc: "A ground-up remake of the beloved 2006 JRPG, featuring modernized combat, stunning visual overhaul, and quality-of-life improvements that make the Dark Hour shine brighter than ever.",
    dev: "Atlus", pub: "Sega",
    platforms: '["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S"]', genres: '["JRPG", "Social Sim", "Turn-Based"]',
    steamId: "2161700", releaseDate: "2024-02-02T00:00:00.000Z", score: 89,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_7017244fb8319ba927a0ef414959b95a6164356f.1920x1080.jpg?t=1764776430",
    ss: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_7017244fb8319ba927a0ef414959b95a6164356f.1920x1080.jpg?t=1764776430",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_cfe4b9124ea5e815e7981e3ac29a72a02fd48239.1920x1080.jpg?t=1764776430",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_c123d3e9360f030e6600db27311586d033f65ff7.1920x1080.jpg?t=1764776430",
    ],
    trailer: "DG_gy1Tecco",
    rSlug: "persona-3-reload-review",
    rTitle: "Persona 3 Reload Review: The Definitive Way to Experience a JRPG Classic",
    verdict: "A stunning remake that modernizes Persona 3's iconic story and systems while preserving everything that made it a landmark JRPG",
    pros: '["Gorgeous visual overhaul that redefines the game", "Modernized combat with Persona 5-style polish", "Exceptional voice acting and soundtrack", "Quality-of-life improvements respect player time"]',
    cons: '["Tartarus dungeon crawling still feels repetitive", "Missing female protagonist route from Portable", "Some social links remain underdeveloped", "Late-game pacing drags slightly"]',
    content: (ss: string[], vid: string) => `<p>Persona 3 Reload is proof that remakes can be more than nostalgia plays. Atlus has rebuilt one of the most important JRPGs ever made from the ground up, applying nearly two decades of design evolution while preserving the emotional core that made the original a landmark title. The result is definitive — there is no reason to play any other version of Persona 3.</p>

<p>The visual overhaul is staggering. Every environment, character model, and UI element has been redesigned with the stylistic flair Atlus perfected in Persona 5. The Dark Hour shimmers with an eerie blue glow, Tartarus feels genuinely oppressive, and the everyday scenes of school life pop with color and personality. It's one of the best-looking JRPGs ever made.</p>

${vid}

<p>Combat has been modernized with Persona 5's mechanical polish. The shift system, Theurgy special attacks, and streamlined persona management make battles faster, more strategic, and more visually spectacular. Exploiting weaknesses feels satisfying, and the new All-Out Attack animations are as stylish as anything in the franchise.</p>

<img src="${ss[0]}" alt="Persona 3 Reload combat" />

<p>The story — a group of high school students who summon Personas by shooting themselves in the head to fight Shadows during a hidden hour between midnight and dawn — remains one of the most thematically ambitious narratives in the genre. Its exploration of mortality, grief, and the meaning of human connection hits just as hard in 2024 as it did in 2006, perhaps even harder with the added visual and vocal performances bringing it to life.</p>

<p>Voice acting across the entire cast is exceptional. The new English dub captures the spirit of the original while adding nuance that wasn't possible with the technology of the PS2 era. The soundtrack, remixed and expanded, is phenomenal — tracks like "It's Going Down Now" and the reimagined battle themes are instant classics.</p>

<img src="${ss[1]}" alt="Persona 3 Reload social links" />

<p>Quality-of-life improvements are everywhere. Tartarus exploration is faster and less tedious, social link management is more intuitive, and the calendar system benefits from small but meaningful tweaks that respect the player's limited time. Fast travel, improved tutorials, and a restructured skill inheritance system all reduce friction without dumbing down the experience.</p>

<p>Tartarus itself remains the game's weakest element. Despite visual improvements and new floor designs, the procedurally generated dungeon still feels repetitive over the game's 80+ hour runtime. Atlus has added more variety than the original, but the fundamental loop of climbing randomized floors lacks the hand-crafted brilliance of Persona 5's Palaces.</p>

<img src="${ss[2]}" alt="Persona 3 Reload Tartarus" />

<p>The absence of the female protagonist route from Persona 3 Portable is a notable omission that will disappoint fans who consider it the definitive way to experience the story. While Reload's presentation is leagues ahead, the loss of FeMC's unique social links and narrative perspective feels like a missed opportunity.</p>

<p>Persona 3 Reload is everything a remake should be: respectful of the source material, ambitious in its execution, and accessible to newcomers while rewarding for veterans. It transforms a beloved but aging classic into a modern masterpiece that stands proudly alongside Persona 5 as one of the genre's finest achievements.</p>`,
  },
  {
    gId: "g_lad_iw", slug: "like-a-dragon-infinite-wealth", title: "Like a Dragon: Infinite Wealth",
    desc: "The latest mainline entry in the Yakuza/Like a Dragon series, sending Ichiban Kasuga to Hawaii for a massive turn-based RPG adventure packed with heart, humor, and an absurd amount of side content.",
    dev: "Ryu Ga Gotoku Studio", pub: "Sega",
    platforms: '["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S"]', genres: '["JRPG", "Turn-Based", "Adventure"]',
    steamId: "2072450", releaseDate: "2024-01-26T00:00:00.000Z", score: 90,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2072450/ss_615e436b89587d0685578972f946ee2880bb847b.1920x1080.jpg?t=1763646953",
    ss: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2072450/ss_615e436b89587d0685578972f946ee2880bb847b.1920x1080.jpg?t=1763646953",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2072450/ss_9b4b2dcd253762e5c7fd5dc620bc57d342bbada5.1920x1080.jpg?t=1763646953",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2072450/ss_b45521ff0f42ad4c3ac57d0b37fee51364f543c1.1920x1080.jpg?t=1763646953",
    ],
    trailer: "dWXAxOKdQ6c",
    rSlug: "like-a-dragon-infinite-wealth-review",
    rTitle: "Like a Dragon: Infinite Wealth Review: The Series' Best Game Is Also Its Biggest",
    verdict: "A sprawling, heartfelt RPG that sets a new standard for the series with its Hawaiian setting, refined combat, and staggering volume of quality content",
    pros: '["Hawaii setting is vibrant and packed with content", "Turn-based combat significantly refined from Yakuza LAD", "Emotionally powerful dual-protagonist story", "Dondoko Island and side content are absurdly addictive"]',
    cons: '["Can feel overwhelmingly large at times", "Some late-game grinding required", "Performance inconsistent in crowded areas", "A few substories miss the mark tonally"]',
    content: (ss: string[], vid: string) => `<p>Like a Dragon: Infinite Wealth is the best game Ryu Ga Gotoku Studio has ever made, and given the quality of their output over the past two decades, that statement carries enormous weight. It's a game overflowing with content, heart, and the kind of unhinged creativity that only this series can deliver.</p>

<p>The move to Hawaii is transformative. Honolulu is rendered with loving attention to detail — every beach, shopping district, and back alley feels authentic and alive. It's the largest explorable area in series history, and unlike many open-world games, virtually every corner rewards curiosity with a substory, a secret, or a minigame. The tropical setting also provides a tonal counterpoint to the series' traditionally urban Japanese environments, creating a fresh energy that revitalizes the formula.</p>

${vid}

<p>Combat has been dramatically refined since Yakuza: Like a Dragon. The turn-based system now incorporates positioning, environmental hazards, and a tag-team mechanic between Ichiban and Kiryu that adds layers of strategic depth. New jobs are creative and mechanically distinct, and the summon system provides spectacle without breaking the difficulty curve. It's the most satisfying turn-based combat outside of the Persona series.</p>

<img src="${ss[0]}" alt="Like a Dragon Infinite Wealth Hawaii" />

<p>The dual-protagonist structure is brilliantly executed. Ichiban's arc is one of optimism and growth — his relentless positivity in the face of adversity remains one of gaming's most endearing character traits. Kiryu's story, by contrast, is contemplative and emotionally devastating, grappling with legacy, mortality, and the consequences of a life spent fighting. The interplay between their perspectives gives the narrative a richness that elevates the entire experience.</p>

<p>Dondoko Island deserves its own paragraph. This Animal Crossing-inspired resort management minigame is so deep, so polished, and so addictive that it could have been released as a standalone title. Building, decorating, defending, and marketing your island resort provides dozens of hours of content that feels completely separate from — but narratively connected to — the main story.</p>

<img src="${ss[1]}" alt="Like a Dragon Infinite Wealth combat" />

<p>The sheer volume of side content is staggering. Beyond Dondoko Island, there are substories that range from heartbreaking to hysterical, minigames that include everything from Crazy Delivery to Pokemon-style creature battles, and a social link system that deepens your relationships with party members. It's easy to spend 100+ hours before seeing the credits.</p>

<p>The story occasionally buckles under its own ambition. At 60+ hours for the main campaign alone, there are stretches in the middle chapters where pacing flags and the narrative feels padded. Some late-game encounters also require grinding that feels at odds with the otherwise generous difficulty curve. These are minor complaints in the context of the whole, but they prevent an outstanding game from being a perfect one.</p>

<img src="${ss[2]}" alt="Like a Dragon Infinite Wealth story" />

<p>Like a Dragon: Infinite Wealth is a landmark JRPG — a game that proves the genre can be simultaneously massive and intimate, serious and absurd, traditional and innovative. It is the definitive Like a Dragon experience, and for many players, it will be the definitive JRPG of this console generation.</p>`,
  },
  {
    gId: "g_sw_outlaws", slug: "star-wars-outlaws", title: "Star Wars Outlaws",
    desc: "The first open-world Star Wars game, set between The Empire Strikes Back and Return of the Jedi, following scoundrel Kay Vess through an original story across multiple planets.",
    dev: "Massive Entertainment", pub: "Ubisoft",
    platforms: '["PC", "PlayStation 5", "Xbox Series X/S"]', genres: '["Open World", "Action Adventure"]',
    steamId: "2842040", releaseDate: "2024-08-27T00:00:00.000Z", score: 76,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2842040/ss_c3846aaa56623e0088cc6d3465eafc8a0f6c7696.1920x1080.jpg?t=1773407100",
    ss: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2842040/ss_c3846aaa56623e0088cc6d3465eafc8a0f6c7696.1920x1080.jpg?t=1773407100",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2842040/ss_34f55684c1a2d5232911b77b745d9496621bf5e1.1920x1080.jpg?t=1773407100",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2842040/ss_a708f157321e0c80de43d1d38669b1a3c6bf56e3.1920x1080.jpg?t=1773407100",
    ],
    trailer: "ymcpwq1ltQc",
    rSlug: "star-wars-outlaws-review",
    rTitle: "Star Wars Outlaws Review: A Galaxy of Potential, Held Back by Familiar Open-World Traps",
    verdict: "A gorgeous Star Wars playground that nails the scoundrel fantasy but stumbles on repetitive mission design and a thin main narrative",
    pros: '["Stunning Star Wars world-building and atmosphere", "Nix companion adds genuine charm and utility", "Stealth and reputation systems create interesting choices", "Space combat and exploration feel authentically Star Wars"]',
    cons: '["Mission design is repetitive and formulaic", "Main story lacks memorable characters", "Stealth AI is inconsistent and frustrating", "Typical Ubisoft open-world bloat"]',
    content: (ss: string[], vid: string) => `<p>Star Wars Outlaws is the open-world Star Wars game fans have been requesting for over a decade. And like many long-awaited wishes, the reality is more complicated than the dream. Massive Entertainment has built a gorgeous, atmospheric Star Wars playground that absolutely nails the feeling of being a scoundrel in the galaxy's criminal underworld — but the gameplay loop that fills that world is disappointingly familiar.</p>

<p>The presentation is exceptional. This is one of the most visually authentic Star Wars experiences ever created in any medium. Walking through the cantinas of Mos Eisley, flying through asteroid fields, and sneaking through Imperial bases feels exactly right. The attention to detail in environmental design, sound design, and musical cues is staggering — the team at Massive clearly loves Star Wars deeply, and it shows in every frame.</p>

${vid}

<p>Kay Vess is a likeable enough protagonist, and her relationship with Nix — a small alien companion who assists in combat, exploration, and puzzle-solving — provides genuine warmth and charm. Nix is easily the game's breakout character, adding both mechanical utility and emotional texture to every interaction.</p>

<img src="${ss[0]}" alt="Star Wars Outlaws exploration" />

<p>The reputation system, which tracks your standing with various criminal syndicates, creates interesting moment-to-moment decisions. Helping one faction often means antagonizing another, and the consequences — from locked-off vendors to hostile territory — feel meaningful. It's the system that most successfully delivers on the scoundrel fantasy.</p>

<p>But the mission design is where Outlaws falls into the Ubisoft trap. Infiltrate a base, hack a terminal, steal the thing, escape. Repeat across multiple planets with minor variations. The stealth system that underpins many missions is inconsistent — AI detection feels arbitrary, and getting caught often devolves into frustrating combat encounters that the game's clunky shooting mechanics aren't equipped to handle.</p>

<img src="${ss[1]}" alt="Star Wars Outlaws combat" />

<p>Space combat and exploration provide welcome variety. Dogfighting feels weighty and cinematic, and the ability to seamlessly fly between space and planet surfaces is technically impressive. But even these sequences eventually settle into predictable patterns — destroy fighters, loot debris, dock at station, repeat.</p>

<p>The main story follows a standard heist narrative that struggles to create stakes or memorable antagonists. Kay's motivation — pull off one big job to earn her freedom — is clear but thin, and the supporting cast never develops beyond their archetypes. In a franchise known for iconic characters, Outlaws' ensemble feels disposable.</p>

<img src="${ss[2]}" alt="Star Wars Outlaws Nix" />

<p>Star Wars Outlaws is a game at war between its setting and its structure. The Star Wars elements — the sights, sounds, lore, and atmosphere — are masterfully executed. But the open-world template that contains them is tired, and no amount of lightsaber-less charm can fully disguise the repetition at its core. It's a good Star Wars game and an average open-world game, and your enjoyment will depend on which half matters more to you.</p>`,
  },
  {
    gId: "g_sm2", slug: "space-marine-2", title: "Warhammer 40,000: Space Marine 2",
    desc: "Saber Interactive's explosive third-person shooter returns players to the role of Lieutenant Titus in the grimdark Warhammer 40K universe, fighting Tyranid swarms in spectacular fashion.",
    dev: "Saber Interactive", pub: "Focus Entertainment",
    platforms: '["PC", "PlayStation 5", "Xbox Series X/S"]', genres: '["Third-Person Shooter", "Action"]',
    steamId: "2183900", releaseDate: "2024-09-09T00:00:00.000Z", score: 82,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2183900/f1c59fddf81f1c27e3b6e5065dd5550037806dd8/ss_f1c59fddf81f1c27e3b6e5065dd5550037806dd8.1920x1080.jpg?t=1774004924",
    ss: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2183900/f1c59fddf81f1c27e3b6e5065dd5550037806dd8/ss_f1c59fddf81f1c27e3b6e5065dd5550037806dd8.1920x1080.jpg?t=1774004924",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2183900/ss_ee88e4cc463b7b25b0ec03930a9e58e5fba2afdf.1920x1080.jpg?t=1774004924",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2183900/ss_66a8bc13bf868d0e2a76e4d797e6408c271065d7.1920x1080.jpg?t=1774004924",
    ],
    trailer: "A_HljUo8Jjk",
    rSlug: "space-marine-2-review",
    rTitle: "Space Marine 2 Review: The Emperor's Finest Returns in Spectacular Fashion",
    verdict: "A visceral, cinematic shooter that makes you feel like a walking tank while delivering the best Warhammer 40K game in years",
    pros: '["Combat makes you feel genuinely powerful as a Space Marine", "Tyranid swarm technology is technically impressive", "Co-op campaign and Operations add significant replay value", "Faithful and spectacular Warhammer 40K presentation"]',
    cons: '["Campaign is relatively short at 8-10 hours", "PvP multiplayer feels underdeveloped", "Class progression is slow and grindy", "Story is straightforward WH40K fare"]',
    content: (ss: string[], vid: string) => `<p>Space Marine 2 understands something fundamental about the Warhammer 40,000 fantasy: you should feel like an unstoppable force of destruction wrapped in ceramite armor. Saber Interactive has delivered a game that absolutely nails the power fantasy of being a Space Marine, even if the systems surrounding that fantasy don't always match its ambition.</p>

<p>The combat is exceptional. Titus moves with the weight and momentum you'd expect from an 8-foot superhero in power armor, yet the controls remain responsive and precise. Chainsword executions are brutally satisfying, bolt rifle shots punch through enemies with appropriate devastation, and the parry system adds a layer of skill that elevates every encounter beyond simple hack-and-slash.</p>

${vid}

<p>The Tyranid swarm technology is the game's technical showpiece. Hundreds of aliens pour over terrain in undulating waves, creating a visual spectacle that recalls the best moments of the Lord of the Rings films translated into science fiction. Wading through these hordes — chainsaw revving, bolter blazing, brothers-in-arms at your side — delivers a sense of scale that few action games have achieved.</p>

<img src="${ss[0]}" alt="Space Marine 2 Tyranid swarm" />

<p>The co-op campaign supports up to three players and transforms the experience. Coordinating with friends, covering firing lanes, and executing synchronized melee finishers adds a tactical dimension that elevates the already excellent combat. Operations — standalone co-op missions set alongside the main campaign — provide substantial additional content with their own progression and challenges.</p>

<p>Presentation is outstanding across the board. The environments span gothic cathedrals, alien-infested jungles, and dying cities, each rendered with the grimdark detail that Warhammer 40K demands. The musical score is suitably epic, and the sound design — particularly the audio feedback on weapons — is some of the best in the genre.</p>

<img src="${ss[1]}" alt="Space Marine 2 combat" />

<p>The campaign itself is relatively short — most players will see credits in 8-10 hours. While the pacing is tight and the set pieces are memorable, the brevity feels like a missed opportunity given the richness of the setting. The story, while competently told, follows a predictable Warhammer 40K narrative template that won't surprise anyone familiar with the lore.</p>

<p>PvP multiplayer, unfortunately, feels like an afterthought. The maps are competent but uninspired, the class balance needs significant tuning, and the overall experience pales compared to the co-op offerings. Class progression across all modes is also painfully slow, requiring significant grinding to unlock meaningful upgrades that should have been more generously distributed.</p>

<img src="${ss[2]}" alt="Space Marine 2 operations" />

<p>Space Marine 2 is the best Warhammer 40,000 game in years and one of the most satisfying shooters of 2024. It delivers exactly what it promises — the visceral thrill of being humanity's greatest warrior, cutting through alien hordes in the Emperor's name. The campaign could be longer, the PvP could be deeper, and the progression could be less grindy, but when the bolts are flying and the chainsword is screaming, none of that matters. For the Emperor.</p>`,
  },
];

async function main() {
  for (const g of games) {
    try {
      await db.execute({
        sql: `INSERT OR IGNORE INTO Game (id, slug, title, description, coverImage, screenshots, trailerUrl, developer, publisher, platforms, genres, metacriticScore, averageScore, steamAppId, releaseDate, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [g.gId, g.slug, g.title, g.desc, g.cover, JSON.stringify(g.ss), `https://www.youtube.com/watch?v=${g.trailer}`, g.dev, g.pub, g.platforms, g.genres, g.score, g.score, g.steamId, g.releaseDate, now, now],
      });

      const vid = iframe(g.trailer, g.title + " Trailer");
      const content = g.content(g.ss, vid);

      await db.execute({
        sql: `INSERT OR IGNORE INTO Review (id, slug, gameId, title, content, score, pros, cons, sourceReviews, verdict, status, publishedAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published', ?, ?, ?)`,
        args: [`rev_${g.slug}`, g.rSlug, g.gId, g.rTitle, content, g.score, g.pros, g.cons, "[]", g.verdict, g.releaseDate, now, now],
      });

      console.log("Added:", g.title);
    } catch (e: any) {
      console.log("Error:", g.title, e.message?.slice(0, 80));
    }
  }
}

main();
