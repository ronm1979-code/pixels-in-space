import json, urllib.request, uuid, time

URL = "https://pixels-in-space-ronm055.aws-eu-west-1.turso.io/v2/pipeline"
AUTH = "Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzQ5NTUxNzIsImlkIjoiMDE5ZDQzOTItMTQwMS03NTgxLWIwMzQtZGZiNzQ5ZmM5MGJmIiwicmlkIjoiY2M3NGU4OWQtNzMxZC00YzYzLTlhMDUtNjczYmI4ZTNmNGI0In0.7ovsSPQdphTQF4MsAybgFVsK-9wX6qIEkmmauLn3OQM6hJ4CPH9kl-fzND3Or0Dp16p7lLpkoHWmxW98pWV4DQ"

NOW = "2026-04-13T15:30:00.000Z"

ARTICLES = [
  {
    "id": "art_" + uuid.uuid4().hex[:16],
    "slug": "metro-2039-reveal-confirmed-april-16-4a-games",
    "title": "Metro 2039 Finally Gets an April 16 Reveal — 4A Games Breaks Five Years of Silence",
    "summary": "After seven years since Metro Exodus, 4A Games has confirmed a digital presentation on April 16 for the fourth mainline Metro game, Metro 2039, continuing Artyom's story with a darker, anti-war tone.",
    "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/ss_f0297eacbfb4266f311a8cb4137e4ef8b7cdd00b.1920x1080.jpg",
    "category": "news",
    "tags": ["Metro 2039","4A Games","Metro Exodus","Dmitry Glukhovsky","Xbox","PS5","PC","FPS"],
    "content": """<p>After seven long years of radio silence, 4A Games has officially confirmed that the next mainline Metro game is real, it has a name, and the first full look is just days away. The studio announced that a digital presentation for <strong>Metro 2039</strong> will air on <strong>Thursday, April 16 at 10:00 AM PT / 1:00 PM ET</strong> on Xbox's official YouTube channel, finally putting a face to a project that has been the subject of intense leaks and speculation throughout the past week.</p>

<p>For a franchise that went dormant after 2019's Metro Exodus, the announcement lands like a pressure valve finally opening. Fans have been circling rumors, half-leaked gameplay clips, and conflicting reports for months. Now 4A Games is stepping out of the shadows, and the message is clear: Artyom's journey isn't over.</p>

<h2>A Confirmed Return After Years of Rumors</h2>

<p>The run-up to this reveal has been one of the most chaotic in recent memory. Within the past week, a leaked internal build surfaced showing early gameplay footage, including what appeared to be more open-ended environmental traversal than any previous Metro title. Insider Gaming reported as early as April 10 that 4A Games was preparing to break its long silence, and over the weekend the evidence kept mounting.</p>

<p>4A Games has now taken control of the narrative by announcing the reveal itself, something the studio rarely does in advance. It's a signal that the team wants audiences to hear about the game directly from them rather than through leaks and secondhand descriptions.</p>

<p>The digital showcase will serve as the first official look at Metro 2039's world, tone, and gameplay direction, as well as — presumably — a platform window and a clearer sense of when players can expect to descend into the tunnels again.</p>

<h2>Artyom's Story Continues, But Darker</h2>

<p>4A Games has confirmed that Metro 2039 will continue Artyom's story, but the tone is shifting considerably. The studio has promised an even darker atmosphere than Metro Exodus and a more pronounced anti-war message, one directly informed by the team's own experiences during the ongoing war in Ukraine, where 4A Games was originally founded.</p>

<p>Metro has always flirted with heavy themes — the futility of tribalism, the scars of civilization, the fragile morality of survival — but 4A has described this next entry as its most politically charged to date. Expect less of Exodus's occasional optimism and more of the claustrophobic dread that defined Metro 2033 and Last Light.</p>

<p>The studio has also confirmed that franchise author and co-creator <strong>Dmitry Glukhovsky</strong> remains deeply involved in Metro 2039's story, continuing a collaboration that has driven the series' writing since its inception. Glukhovsky, who has become an outspoken voice against the war, fits squarely with 4A's stated tonal direction.</p>

<h2>The Open World Question</h2>

<p>One of the most hotly debated elements of the leaks has been whether Metro 2039 moves further into open-world territory. Metro Exodus took the long-corridor formula of its predecessors and expanded it into semi-open sandbox regions strung together by a linear narrative spine. Footage from the leaked development build suggests Metro 2039 is evolving that structure into something larger and more interconnected, with more freedom to explore, scavenge, and choose how encounters unfold.</p>

<p>Whether that means a full open world, a loose hub-based structure, or something closer to Exodus's regional approach is exactly the kind of detail the April 16 broadcast should clarify. The team has historically been careful not to sacrifice atmosphere or pacing for scale, which is part of what has kept the Metro series distinct in a genre that often chases bigger at the expense of denser.</p>

<h2>Why the Timing Matters</h2>

<p>The Metro 2039 reveal falls into a particularly busy April for the industry. It's dropping just days before Saros on April 30, a week after Starfield's PS5 launch, and on the same month as Pragmata, Diablo IV: Lord of Hatred, and a rumored PlayStation State of Play. For 4A Games, carving out its own standalone moment — broadcast on Xbox's channel, no less — signals confidence that Metro still commands audience attention on its own terms.</p>

<p>Xbox's involvement as host is also telling. 4A Games has been under Embracer-owned Saber Interactive's umbrella since 2023, but the studio's relationship with Microsoft has remained strong, particularly given Metro Exodus's status as one of the highlight titles on Xbox Series X/S early in its lifecycle.</p>

<h2>What We're Expecting on April 16</h2>

<p>Based on what leaks have already spilled and what 4A typically chooses to showcase, the presentation will likely include:</p>

<ul>
<li>A cinematic reveal trailer establishing the new setting and tone</li>
<li>An extended gameplay segment demonstrating traversal and combat</li>
<li>Confirmation of platforms — almost certainly PlayStation 5, Xbox Series X/S, and PC</li>
<li>A release window, though likely 2027 rather than 2026</li>
<li>Some word on Glukhovsky's narrative involvement and the anti-war themes</li>
</ul>

<p>What's unlikely: a hard release date. 4A Games has historically taken its time and rarely commits to a month until it's confident it can hit it. After years of working under wartime conditions, the studio is unlikely to rush.</p>

<h2>A Moment Seven Years in the Making</h2>

<p>Metro Exodus launched in February 2019 to strong reviews, sold through its initial Epic Games Store exclusivity controversy, and eventually landed on every major platform including PS5 and Xbox Series X/S through the Enhanced Edition. Since then, 4A Games has been quiet — relocating staff, expanding into Malta, and working under the enormous strain of a war that has directly affected its Ukrainian workforce.</p>

<p>That the studio is now ready to unveil Metro 2039 feels like more than just a new game announcement. It's a statement that 4A is still here, still building, and still has something to say. For a series that has always used its post-apocalyptic setting as a lens on real-world conflict, a fourth Metro game arriving in 2026 — framed explicitly as anti-war — carries weight far beyond the usual hype cycle.</p>

<p>Mark your calendars for Thursday. After seven years, it's finally time to see what comes next for Artyom.</p>"""
  },
  {
    "id": "art_" + uuid.uuid4().hex[:16],
    "slug": "ac-shadows-update-1-1-10-pssr-2-switch-2-mouse-keyboard",
    "title": "Assassin's Creed Shadows Update 1.1.10 Adds PSSR 2.0 on PS5 Pro and Mouse and Keyboard Support for Switch 2",
    "summary": "Ubisoft's Title Update 1.1.10 for Assassin's Creed Shadows brings PSSR 2.0 upscaling to PS5 Pro, full mouse and keyboard support for Nintendo Switch 2, and a new non-legendary Bo weapon from the Claws of Awaji DLC.",
    "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3159330/7257f31bb96b01f5b596ae5e0fa714319e43d64a/ss_7257f31bb96b01f5b596ae5e0fa714319e43d64a.1920x1080.jpg",
    "category": "news",
    "tags": ["Assassin's Creed Shadows","Ubisoft","Nintendo Switch 2","PS5 Pro","PSSR","Patch Notes"],
    "content": """<p>Ubisoft has rolled out a substantial update for <strong>Assassin's Creed Shadows</strong> this week, and if you're playing on either a PS5 Pro or a Nintendo Switch 2, this one is very much for you. <strong>Title Update 1.1.10</strong> is now live on all platforms, and it packs the single most meaningful set of platform-specific upgrades Shadows has received since launch.</p>

<p>The two headline additions are <strong>PSSR 2.0 upscaling</strong> for PS5 Pro and <strong>full mouse and keyboard support</strong> on Nintendo Switch 2 — two very different upgrades for two very different audiences, but both a big deal in their own right.</p>

<h2>PSSR 2.0 Brings Smarter Upscaling to PS5 Pro</h2>

<p>PlayStation Spectral Super Resolution (PSSR) was one of the PS5 Pro's marquee features at launch, but Sony's first-generation implementation received mixed feedback, particularly around shimmer, ghosting, and how it handled fine-motion detail in fast-paced games. PSSR 2.0 is Sony's response, retuning the neural upscaler and addressing many of the artifact concerns developers and players flagged in the months following the Pro's debut.</p>

<p>Shadows is one of the first major third-party titles to adopt the new implementation. On PS5 Pro, players should notice cleaner edges on foliage, sharper rendering of Naoe and Yasuke's armor details, and a more stable image in motion — especially during parkour and rooftop chases where first-gen PSSR tended to produce the most noticeable shimmer.</p>

<p>Ubisoft's visual modes on PS5 Pro remain unchanged in terms of their targets, but PSSR 2.0 effectively raises the ceiling of what performance mode in particular can deliver without sacrificing the 60fps target. If you were on the fence about which mode to run, this update is a good excuse to give performance another look.</p>

<h2>Switch 2 Gets the PC Treatment — Almost</h2>

<p>The Nintendo Switch 2 update is where things get genuinely surprising. With Title Update 1.1.10, Switch 2 players can now connect a USB or Bluetooth mouse and keyboard and play <em>Assassin's Creed Shadows</em> with PC-style controls. That means dedicated keys for combat inputs, free-form mouse aiming for ranged weapons, and — for players who prefer it — a drastically different pace for stealth encounters.</p>

<p>Mouse and keyboard support was already available on PS5 and Xbox Series X|S, but this marks one of the first major third-party games on Switch 2 to fully embrace the platform's native support for the input scheme. The file size for Switch 2 is a hefty 5.4GB, reflecting how much under-the-hood work was required to make this happen.</p>

<p>It's also a nudge at what the Switch 2 can become. Nintendo has been quietly pushing mouse and keyboard use through certain built-in apps and select third-party ports, but having Ubisoft officially lean in with an open-world action game of Shadows' scale is a much bigger endorsement of the input scheme than anything Nintendo has shipped itself.</p>

<h2>New Bo Weapon Unlocked for Claws of Awaji Owners</h2>

<p>If you picked up the <strong>Claws of Awaji</strong> DLC expansion, Title Update 1.1.10 also unlocks a new <strong>non-legendary Bo weapon</strong> that was previously inaccessible. While not as flashy as the expansion's signature legendary gear, a non-legendary Bo gives players a more flexible option for build variety, especially for players who prefer crafting their own affix combinations rather than working around fixed legendary perks.</p>

<p>It's a small addition, but a welcome one for the DLC's more dedicated audience — and a signal that Ubisoft isn't finished dripping out content tied to Claws of Awaji.</p>

<h2>The Bug Fix Laundry List</h2>

<p>Beyond the spotlight features, Title Update 1.1.10 includes a long list of quality-of-life fixes across every platform. A selection of the more notable entries:</p>

<ul>
<li>Fixes for several long-standing parkour snapping issues on rooftops and irregular terrain</li>
<li>Resolution of a questline progression bug affecting a small percentage of players in the Awaji region</li>
<li>Audio mix tweaks to address dialogue being drowned out during combat</li>
<li>Stability improvements across all platforms, including a crash that triggered when fast-traveling with an active transmog loadout</li>
<li>Photo mode additions, including expanded filter options</li>
</ul>

<h2>Still a Long Tail</h2>

<p>It's striking how much support Ubisoft is still funneling into Shadows more than a year after launch. The game arrived under significant scrutiny and has been slowly rebuilding its standing through a steady stream of updates, DLC additions, and platform-specific enhancements. Between the PS5 Pro visual overhaul, Switch 2 feature parity push, and ongoing DLC content, Shadows is quietly becoming one of Ubisoft's more consistently supported recent releases.</p>

<p>For PS5 Pro owners and Switch 2 players, Title Update 1.1.10 is essentially a free reason to boot the game up again. Whether you're looking for sharper visuals on Sony's premium hardware or the surreal experience of playing an Assassin's Creed game with mouse and keyboard on a Nintendo console, it's a notable moment of platform refinement for a game that clearly isn't done evolving.</p>"""
  },
  {
    "id": "art_" + uuid.uuid4().hex[:16],
    "slug": "cod-black-ops-7-season-3-patch-april-10-2026",
    "title": "Call of Duty: Black Ops 7 Season 3 Patch Closes Map Exploits, Fixes Ranked Play Scoring, and Adds Anti-Cheat Upgrades",
    "summary": "Raven and Treyarch's April 10 update for Black Ops 7 Season 3 closes exploits on Cliff Town and Beacon, corrects a Ranked Play Overload scoring bug, patches the Aether Blade charge issue in Endgame, and ships new Ricochet anti-cheat measures.",
    "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3606480/10be1d8a9b68f19a7b0321f4adc819374955268d/ss_10be1d8a9b68f19a7b0321f4adc819374955268d.1920x1080.jpg",
    "category": "news",
    "tags": ["Call of Duty","Black Ops 7","Treyarch","Raven Software","Ricochet","Patch Notes","Multiplayer"],
    "content": """<p>Just over a week into <strong>Call of Duty: Black Ops 7 Season 3</strong>, Raven Software and Treyarch have dropped a meaningful midseason patch aimed squarely at the problems that bubbled to the surface in the season's opening days. The <strong>April 10 update</strong> tackles exploit-prone map geometry, a scoring bug that was costing Ranked Play winners their SR, stability issues in Endgame, and a set of backend changes to Ricochet Anti-Cheat.</p>

<p>It's not a flashy content drop. It's a housekeeping patch — but a well-targeted one that addresses many of the most-complained-about Season 3 issues in a single sweep.</p>

<h2>Cliff Town and Beacon Exploits Patched</h2>

<p>Season 3's two new multiplayer maps, <strong>Cliff Town</strong> and <strong>Beacon</strong>, have both been hotspots for out-of-bounds exploits since launch. Players discovered routes on both maps that allowed them to slip outside the playable area and pick off opponents from geometry the design team never intended to be reachable. The April 10 update closes those specific exits and also patches several collision issues that were disrupting sight lines on both maps — particularly around crates and rooftop edges.</p>

<p>For Ranked Play in particular, these fixes are overdue. Out-of-bounds exploits are disqualifying offenses, and having them circulating in the first week of a season was creating an uneven playing field.</p>

<h2>The Ranked Play Overload Scoring Bug</h2>

<p>One of the more frustrating Season 3 bugs has been a very specific Overload Ranked Play scenario: if a match reached Overtime and ended on a tie-technically-equivalent score, the winning team was being credited with an SR <em>loss</em> rather than a win. It's the kind of niche bug that only a small number of players encountered, but for those who did, it was brutal — a hard-earned Overtime comeback win netting them negative ranking progress.</p>

<p>The April 10 patch resolves that scoring logic, and Raven has noted it will be monitoring Ranked Play post-patch to make sure no related edge cases remain.</p>

<p>The same patch also fixes a UI bug in Ranked Play that was preventing certain camos from displaying their unlock requirements in the camo menu, and it corrects an issue that was unintentionally excluding the VS Recon weapon from Ranked Play Search &amp; Destroy loadouts.</p>

<h2>Tactical Equipment and the Stim Shot Recharge Bug</h2>

<p>A sneakier issue this patch addresses: Tactical Equipment, including the <strong>Stim Shot</strong>, was unintentionally recharging on a passive timer in certain modes, allowing players to effectively keep regenerating and re-applying tactical abilities without resupplying. Raven has clamped that down, restoring intended resupply behavior across all Tactical slots.</p>

<h2>Endgame and the Aether Blade Charge Fix</h2>

<p>Endgame mode, Black Ops 7's roguelite-flavored extraction experience, also gets some love. The newly added <strong>Aether Blade</strong> ability — one of Season 3's signature Endgame additions — had a bug where the first activation would consume a charge even if the blade didn't connect with an enemy. That's been fixed, so Aether Blade charges now only deplete on successful hits, as intended. Several general stability improvements ship alongside.</p>

<h2>Zombies Gets Fixes Too</h2>

<p>Round-based Zombies picks up its own fixes in the update, including adjustments to the new Season 3 GobbleGum rotation and tweaks to a handful of exploits that had been letting players trivialize certain boss encounters in the latest map. Raven hasn't detailed every change in Zombies, citing a desire to let the community rediscover the intended difficulty.</p>

<h2>Ricochet Anti-Cheat Gets Reinforced</h2>

<p>Finally, Activision has confirmed that <strong>Ricochet Anti-Cheat</strong> is receiving a set of Season 3 upgrades as part of this patch. These include:</p>

<ul>
<li>New security measures aimed at a specific category of memory-tampering cheats that surfaced late in Season 2</li>
<li>Expanded detection systems capable of flagging previously hard-to-catch subtle hacks</li>
<li>Updated attestation messaging to make kernel-level cheat integrations more difficult</li>
</ul>

<p>Activision has been careful not to share specifics — for obvious reasons — but the broad strokes suggest this update is aimed at the wave of creative cheats that appeared in the final weeks of Season 2.</p>

<h2>A Solid Housekeeping Patch</h2>

<p>The Season 3 launch patch itself added plenty of content — new weapons, maps, a Zombies map, and Endgame expansions — but it also inherited the usual growing pains of a new Call of Duty season. The April 10 update doesn't bring fresh content, but it tackles the precise issues players have been vocal about in exactly the areas that matter: Ranked integrity, map fairness, and cheat detection.</p>

<p>If you've been holding off on grinding Ranked Play because of the Overload scoring bug, now is the time to jump back in. And if you've been running into Aether Blade issues in Endgame or burning through Stim Shots faster than expected in multiplayer, those frustrations should ease up considerably. For a midseason patch, it's one of the more impactful Call of Duty has shipped in a while.</p>"""
  },
  {
    "id": "art_" + uuid.uuid4().hex[:16],
    "slug": "mongil-star-dive-netmarble-mobile-launch-april-15-2026",
    "title": "Mongil: Star Dive Launches April 15 — Netmarble's Free-to-Play Monster Tamer Hopes to Rival Genshin and Wuthering Waves",
    "summary": "Netmarble's anticipated free-to-play monster-taming action RPG Mongil: Star Dive lands on iOS, Android, and PC on April 15, promising Unreal Engine 5 visuals, three-character tag combat, and a sprawling monster collection system.",
    "imageUrl": None,
    "category": "mobile",
    "tags": ["Mongil Star Dive","Netmarble","Mobile","Free-to-Play","Action RPG","Monster Collecting","Unreal Engine 5"],
    "content": """<p>It's been a long time coming, but <strong>Mongil: Star Dive</strong> — Netmarble's long-awaited sequel to its 2013 collectible RPG <em>Monster Taming</em> — is finally landing on <strong>April 15, 2026</strong>. The free-to-play action RPG arrives on iOS, Android, and PC (via Epic Games Store and Netmarble's own launcher), with PlayStation 5 and Xbox Series X|S versions planned for a later date. Steam, notably, is not on the launch list.</p>

<p>Netmarble has spent years positioning this one. At various points over the past eighteen months, the publisher has described Star Dive as its answer to Genshin Impact and Wuthering Waves — a bold comparison for any free-to-play mobile-first title. With launch day now just two days away, the question becomes whether the finished product can actually stand in that company.</p>

<h2>A Thirteen-Year Wait for a Sequel</h2>

<p>The original <em>Monster Taming</em> launched in 2013 as a Korean mobile hit with an unusually passionate regional fanbase. It never made a significant dent internationally, but in Korea it became a cult favorite for its character-driven monster synthesis system. Netmarble has spent more than a decade sitting on the IP, and Star Dive is the company's attempt to scale that niche appeal into something that can compete with the new generation of hero-collecting live-service games.</p>

<p>Built in <strong>Unreal Engine 5</strong>, Star Dive looks a generation removed from its predecessor. Expect cinematic character introductions, high-fidelity environments, and the kind of splash-art character design that has become a calling card for the current wave of anime-flavored live-service action RPGs.</p>

<h2>Three-Character Tag Combat</h2>

<p>The combat system is Star Dive's most distinctive mechanical feature. Players assemble a party of three characters and swap between them in real time during encounters, each swap triggering shared-cooldown link attacks and elemental reactions. It's a clear lineage from games like Honkai: Star Rail's predecessor Honkai Impact 3rd and Wuthering Waves, but Netmarble has been emphasizing that Star Dive's pacing leans faster and more aggressive than most of its peers.</p>

<p>Gameplay previews and Netmarble's recent online showcase have highlighted tight tag-swap windows, a parry system with generous but skill-rewarding timings, and boss encounters designed around forcing team composition variety rather than letting players brute-force through with a single favorite character.</p>

<h2>The Monster Collection Loop</h2>

<p>The other half of Star Dive's identity is its <strong>Monsterling Collection</strong> system — a callback to the original Monster Taming but rebuilt from the ground up. Monsterlings are creatures players can capture in the open world, and unlike most monster-collectors, Star Dive leans into a synthesis and fusion system that lets players combine multiple Monsterlings into new species with inherited abilities and stat lines.</p>

<p>It's a system Netmarble has been careful to present as genuinely deep rather than gacha-bait. In interviews, producer Ken Kim has specifically pushed back on the idea that Monsterling collection is a monetization funnel, saying the intention is for collection and synthesis to be a meaningful alternative progression path independent of character banners.</p>

<p>How that plays out in the live version — especially as endgame content gets layered in — will be one of the most closely watched elements of the launch.</p>

<h2>Platforms and Cross-Play</h2>

<p>At launch on April 15, <strong>Mongil: Star Dive</strong> will be available on:</p>

<ul>
<li>iOS (via the App Store)</li>
<li>Android (via Google Play)</li>
<li>PC (via the Epic Games Store and Netmarble's own launcher)</li>
</ul>

<p>Cross-play and cross-progression are supported across all three platforms at launch. Console versions for PlayStation 5 and Xbox Series X|S are confirmed to be in development, though Netmarble has not yet committed to a release window. The absence of a Steam launch is the most notable omission — an increasingly common pattern among large publishers trying to preserve platform fee economics.</p>

<h2>Pre-Registration, Rewards, and Launch Bonuses</h2>

<p>Pre-registration has been open for several months through the Epic Games Store, the Google Play Store, the App Store, and the game's official website at stardive.netmarble.com. Netmarble has confirmed that pre-registered players will receive a bundle of launch-day rewards including currency, a Monsterling starter pack, and a limited-time exclusive cosmetic. Additional milestone rewards have been unlocked as the total pre-registration count crossed several thresholds during the last weeks of the campaign.</p>

<h2>The Market Star Dive Is Entering</h2>

<p>Launching a free-to-play action RPG in April 2026 means going up against a tough field. Genshin Impact's long-term retention remains strong, Wuthering Waves has continued to build momentum with its quarterly content cadence, and NTE: Neverness to Everness — another major Unreal Engine 5 live-service title — launches just two weeks after Star Dive on April 29. Meanwhile, Sea of Stars has already arrived on mobile this month, pulling attention in an entirely different direction.</p>

<p>Netmarble's pitch is that Star Dive's combination of high-speed tag combat, deep Monsterling collection, and Unreal Engine 5 presentation differentiates it enough to carve out its own audience. The reality is that in the current live-service landscape, first-month retention will decide everything — both the quality of the day-one experience and the tempo of its first post-launch content patch will matter enormously.</p>

<h2>Worth Watching</h2>

<p>Whether Mongil: Star Dive turns out to be Netmarble's breakout global hit or another mid-tier live-service release will come down to the details: gacha rates, the shape of the endgame progression, and how real the Monsterling synthesis system feels at scale. Two days out from launch, the pieces are at least in place for something ambitious. If you're on the hunt for a new mobile RPG to sink teeth into this spring, Star Dive is the most interesting test case April has to offer.</p>"""
  }
]

def arg(v):
    if v is None:
        return {"type":"null"}
    return {"type":"text","value":str(v)}

def build_request(a):
    sql = "INSERT INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    args = [
        arg(a["id"]),
        arg(a["slug"]),
        arg(a["title"]),
        arg(a["content"]),
        arg(a["summary"]),
        arg(a["imageUrl"]),
        arg(a["category"]),
        arg("published"),
        arg(NOW),
        arg(json.dumps(a["tags"])),
        arg(NOW),
        arg(NOW),
    ]
    return {"type":"execute","stmt":{"sql":sql,"args":args}}

requests_list = [build_request(a) for a in ARTICLES]
body = json.dumps({"requests": requests_list}).encode()

req = urllib.request.Request(URL, data=body, headers={
    "Authorization": AUTH,
    "Content-Type": "application/json"
})
with urllib.request.urlopen(req) as resp:
    print(resp.status)
    print(resp.read().decode()[:2000])
