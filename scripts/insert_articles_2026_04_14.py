import json, urllib.request

URL = "https://pixels-in-space-ronm055.aws-eu-west-1.turso.io/v2/pipeline"
AUTH = "Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzQ5NTUxNzIsImlkIjoiMDE5ZDQzOTItMTQwMS03NTgxLWIwMzQtZGZiNzQ5ZmM5MGJmIiwicmlkIjoiY2M3NGU4OWQtNzMxZC00YzYzLTlhMDUtNjczYmI4ZTNmNGI0In0.7ovsSPQdphTQF4MsAybgFVsK-9wX6qIEkmmauLn3OQM6hJ4CPH9kl-fzND3Or0Dp16p7lLpkoHWmxW98pWV4DQ"

ARTICLES = [
  {
    "id": "art_mouse_pi_launch_0414",
    "slug": "mouse-pi-for-hire-1930s-noir-shooter-april-16-2026",
    "title": "MOUSE: P.I. For Hire Brings 1930s Cartoon Noir to Life on April 16 \u2014 Everything You Need to Know",
    "summary": "Fumi Games' hand-drawn 1930s cartoon noir FPS launches April 16 on PS5, Xbox, Switch 2, and PC. Troy Baker stars as hardboiled mouse detective Jack Pepper in a rubberhose-style first-person shooter.",
    "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2416450/1421d042bc447e6cc39ce8d794006dd4e6e9d19a/ss_1421d042bc447e6cc39ce8d794006dd4e6e9d19a.1920x1080.jpg?t=1776145963",
    "category": "news",
    "status": "published",
    "publishedAt": "2026-04-14T17:00:00.000Z",
    "createdAt": "2026-04-14T17:00:00.000Z",
    "updatedAt": "2026-04-14T17:00:00.000Z",
    "tags": ["FPS", "indie", "retro", "noir", "MOUSE"],
    "content": """<p>There is no shortage of retro-inspired shooters on the market, but none of them look or feel quite like <strong>MOUSE: P.I. For Hire</strong>. Developed by Fumi Games and published by PlaySide Studios, this first-person shooter draws its entire visual identity from the rubber hose cartoons of the 1930s, every frame hand-drawn in black and white with the kind of exaggerated motion and inkblot charm that defined the golden age of American animation. It launches on <strong>April 16, 2026</strong> on PS5, Xbox Series X|S, Nintendo Switch 2, and PC.</p>

<p>What makes MOUSE stand out is not just its aesthetic, though that alone would be enough to turn heads. It is a genuine attempt to build a first-person shooter that feels like playing inside a vintage cartoon, complete with a jazz-soaked soundtrack, slapstick combat gadgets, and a noir detective story that leans into the hardboiled tropes of the era with genuine affection.</p>

<h2>Jack Pepper, Hardboiled Detective</h2>

<p>Players step into the shoes of <strong>Jack Pepper</strong>, a mouse detective and former war hero who has seen better days. Voiced by <strong>Troy Baker</strong>, one of the most recognizable names in video game voice acting, Jack is a washed-up private investigator scraping by in the crime-ridden city of Mouseburg. When a case drops into his lap that connects the city's criminal underworld to something far larger and more dangerous, Jack is pulled back into the kind of trouble he spent years trying to forget.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2416450/a0c2188ff0e0b874783af8657b1e24132a6b2285/ss_a0c2188ff0e0b874783af8657b1e24132a6b2285.1920x1080.jpg?t=1776145963" alt="MOUSE P.I. For Hire gameplay screenshot" style="width:100%;border-radius:8px;margin:20px 0;" />

<p>Troy Baker's performance is central to the experience. Fumi Games has described the character as a blend of classic noir archetypes filtered through the absurdity of a cartoon animal world, and Baker's delivery reportedly walks that tightrope between genuine drama and playful self-awareness. The studio has emphasized that the story plays its emotional beats straight even when the world around the player is visually comedic, a tonal balance that could give MOUSE a personality entirely its own.</p>

<h2>Hand-Drawn, Frame by Frame</h2>

<p>Every visual element in MOUSE: P.I. For Hire has been drawn by hand, frame by frame, in a monochrome style that deliberately evokes the look of 1930s Fleischer and Disney cartoons. Environments stretch and squash with exaggerated perspective. Enemies bounce and wobble as they take damage. Even the UI elements look like they belong on a vintage animation cel.</p>

<p>The commitment to the aesthetic is total. Fumi Games has avoided the temptation to blend 3D geometry with a cartoon shader, instead opting for a purely hand-animated approach that gives the game a look unlike anything else in the FPS genre. It is a staggering amount of artwork for a small studio, and it is the single biggest reason MOUSE has been generating attention since its first trailer appeared.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:20px 0;border-radius:8px;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/9nrmJSgqYTI" frameborder="0" allowfullscreen></iframe></div>

<h2>Guns, Gadgets, and Gumshoe Work</h2>

<p>Gameplay in MOUSE splits between two modes: <strong>detective investigation</strong> and <strong>combat</strong>. On the investigation side, players explore environments to find clues, interview characters, and solve environmental puzzles that advance the case. These sequences slow the pace down and give the noir narrative room to breathe, letting players absorb the world and its cast of colorful, cartoonish NPCs.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2416450/068ea0d9c22c5cd6ba590fd07897a29969728d08/ss_068ea0d9c22c5cd6ba590fd07897a29969728d08.1920x1080.jpg?t=1776145963" alt="MOUSE P.I. For Hire detective investigation" style="width:100%;border-radius:8px;margin:20px 0;" />

<p>When things heat up, the shooting mechanics take center stage. Jack has access to a variety of period-appropriate firearms alongside a collection of cartoon gadgets that lean heavily into the slapstick side of the game's identity. Melee combat is also an option, and Fumi Games has described the weapon variety as designed to reward creativity and experimentation rather than funneling players into a single optimal loadout.</p>

<p>The blend of investigation and action is one of the most ambitious elements of the design. Many shooters have attempted to mix detective gameplay with combat, but the challenge is always pacing. Fumi Games has cited an estimated <strong>12 to 20 hours</strong> of gameplay depending on how thoroughly players explore, which suggests the studio is leaning into the investigative side rather than treating it as filler between gunfights.</p>

<h2>A Jazz Soundtrack That Sets the Mood</h2>

<p>Complementing the visuals is an <strong>original jazz soundtrack</strong> performed by a big band orchestral ensemble. The music draws from the same era as the art, pulling in swing, bebop, and smoky lounge influences that reinforce the noir atmosphere at every turn. Fumi Games has emphasized that the soundtrack was composed specifically to match the game's shifting tones, from tense investigation sequences to frenetic combat encounters, and early previews have singled out the music as one of the game's strongest elements.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2416450/2edeb5f746f960b513a617de3ad6c650830d7cc3/ss_2edeb5f746f960b513a617de3ad6c650830d7cc3.1920x1080.jpg?t=1776145963" alt="MOUSE P.I. For Hire noir atmosphere" style="width:100%;border-radius:8px;margin:20px 0;" />

<h2>Platforms, Pricing, and Editions</h2>

<p>MOUSE: P.I. For Hire launches on <strong>April 16</strong> on PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and PC via Steam. Notably, there are no PS4, Xbox One, or original Nintendo Switch versions planned at launch, making this a current-gen and PC exclusive.</p>

<p>The <strong>standard edition</strong> is priced at <strong>$29.99</strong>, while a <strong>Deluxe edition</strong> at <strong>$39.99</strong> includes additional cosmetic content and bonus materials. For collectors, a <strong>Mouseburg physical edition</strong> is scheduled for <strong>July 10</strong>, which will include a physical copy of the game alongside collectible items themed around the world of Mouseburg.</p>

<h2>Why MOUSE Could Be Special</h2>

<p>The indie FPS space has become one of the most creatively fertile corners of gaming, but MOUSE: P.I. For Hire stands apart by committing fully to a visual and tonal identity that no other game has attempted at this scale. The combination of hand-drawn 1930s animation, noir detective storytelling, Troy Baker's vocal performance, and a genuine jazz soundtrack is a package that feels genuinely original rather than derivative.</p>

<p>Whether the gameplay can match the ambition of the presentation is the question that will be answered on April 16. But if Fumi Games has nailed the balance between gumshoe investigation and cartoon-fueled gunplay, MOUSE could be one of the most memorable indie releases of 2026. At $29.99 for the standard edition, it is priced to invite curiosity. For fans of shooters, noir fiction, or classic animation, this is one to watch closely.</p>"""
  },
  {
    "id": "art_last_flag_launch_0414",
    "slug": "last-flag-imagine-dragons-capture-the-flag-shooter-april-14-2026",
    "title": "Last Flag Is Out Now \u2014 Imagine Dragons' Dan Reynolds Launches His 5v5 Capture-the-Flag Shooter",
    "summary": "Last Flag, a 5v5 third-person capture-the-flag shooter from Night Street Games (founded by Imagine Dragons' Dan Reynolds), launches today on PC with console versions coming this summer.",
    "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2721340/9573d1df7db01ce489d815dd27853ceb0c3a324c/ss_9573d1df7db01ce489d815dd27853ceb0c3a324c.1920x1080.jpg?t=1776144509",
    "category": "news",
    "status": "published",
    "publishedAt": "2026-04-14T18:00:00.000Z",
    "createdAt": "2026-04-14T18:00:00.000Z",
    "updatedAt": "2026-04-14T18:00:00.000Z",
    "tags": ["multiplayer", "shooter", "indie", "Last Flag", "Imagine Dragons"],
    "content": """<p><strong>Last Flag</strong> is officially live. The 5v5 third-person capture-the-flag shooter from <strong>Night Street Games</strong> launched today, April 14, on PC via Steam and the Epic Games Store. If the name of the studio does not ring a bell, the name behind it might: Night Street Games was founded by <strong>Dan Reynolds</strong>, the lead vocalist of Imagine Dragons, alongside his brother <strong>Mac Reynolds</strong>, who serves as the band's manager. It is, by any measure, one of the most unusual origin stories in recent indie gaming history.</p>

<p>But Last Flag is not a vanity project riding on celebrity name recognition. First announced at <strong>Summer Game Fest 2025</strong>, the game has been quietly building a community through a playable PC demo that has been available since December 2025, and the early reception has been genuinely positive. Now the full version is here, and it arrives with a launch-week discount that makes the barrier to entry almost nonexistent.</p>

<h2>Capture the Flag, But Not Like You Remember</h2>

<p>At its core, Last Flag is a hero shooter built entirely around capture the flag, but it rethinks the fundamentals of the mode in ways that feel fresh. The biggest twist is that <strong>you can move and hide your own team's flag</strong>. Unlike traditional CTF where each flag sits on a fixed pedestal waiting to be grabbed, Last Flag gives both teams a full minute at the start of each round to physically relocate their flag to wherever they want on the map, tucking it behind cover, stashing it in unexpected corners, or setting up defensive positions around a chosen hiding spot.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2721340/6e73a04a87aa5ab7979d3d9dd94a58a73aff5977/ss_6e73a04a87aa5ab7979d3d9dd94a58a73aff5977.1920x1080.jpg?t=1776144509" alt="Last Flag gameplay showing flag mechanics" style="width:100%;border-radius:8px;margin:20px 0;" />

<p>That single mechanic changes everything about how CTF plays. Defense is no longer about camping a known location. Offense is no longer about running a memorized route. Every round becomes a layered mind game where reading your opponents, scouting the map, and adapting your strategy on the fly matters as much as raw aim.</p>

<p>During that same opening minute, both teams also collect in-game currency scattered around the map that can be spent on upgrades and equipment, adding an economic layer to the preparation phase that rewards fast decision-making and map knowledge.</p>

<h2>Radar Towers and the Hunt</h2>

<p>Finding the enemy flag is where Last Flag introduces its second major innovation. Positioned in the center of each map are <strong>three radar towers</strong>. Capturing and holding these towers allows your team to scan sections of the map, gradually narrowing down the location of the enemy flag. It creates a tug-of-war dynamic in the middle of the map that feels distinct from the flag objectives on either side.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2721340/1418563ae2a96358995d12ff4ba3843448200092/ss_1418563ae2a96358995d12ff4ba3843448200092.1920x1080.jpg?t=1776144509" alt="Last Flag radar tower capture" style="width:100%;border-radius:8px;margin:20px 0;" />

<p>The result is a game with three simultaneous objectives pulling your five-player team in different directions: protect your own hidden flag, fight for radar tower control in the center, and push into enemy territory to locate and capture their flag. Team composition and communication become essential, and matches develop a natural rhythm of shifting priorities as new information comes in through the radar system.</p>

<h2>Nine Heroes, One Funky Universe</h2>

<p>Last Flag's roster features <strong>nine playable characters</strong> at launch, each with distinct abilities, weapon loadouts, and team roles. The game leans into a <strong>1970s funk-inspired aesthetic</strong> that gives it a visual personality far removed from the military grays and sci-fi neons that dominate the hero shooter space. The premise has players competing as contestants on a televised game show hosted by <strong>Victor Fex</strong>, a mysterious and flamboyant media mogul who runs the whole operation from behind the scenes.</p>

<p>The funk-era art direction extends to the maps, the music, and the character designs themselves, which pull from blaxploitation cinema, disco culture, and vintage game show production design. It is a cohesive and distinctive look that gives Last Flag an identity crisis-free presence in a crowded genre.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:20px 0;border-radius:8px;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/9giWh-QEThA" frameborder="0" allowfullscreen></iframe></div>

<h2>A Rock Star's Genuine Passion Project</h2>

<p>Dan Reynolds has been open about the fact that gaming has been a lifelong passion and that founding Night Street Games was not a whim but a years-long ambition. In interviews surrounding the announcement at Summer Game Fest 2025, Reynolds described Last Flag as the game he wished existed as a multiplayer fan who grew up playing CTF modes in classic shooters but felt the format had been abandoned by modern developers.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2721340/f88ef0dced198427d96485462629b3ce8288a9c7/ss_f88ef0dced198427d96485462629b3ce8288a9c7.1920x1080.jpg?t=1776144509" alt="Last Flag character roster" style="width:100%;border-radius:8px;margin:20px 0;" />

<p>Mac Reynolds, who co-founded the studio and serves as its business lead, has echoed that sentiment, noting that Night Street Games was built from the ground up as a game development company rather than a brand extension. The studio has hired experienced developers and has been operating for several years prior to the game's announcement, a timeline that reinforces the impression that this is a serious endeavor rather than a celebrity side project.</p>

<h2>Pricing and Platform Plans</h2>

<p>Last Flag is available now on PC through Steam and the Epic Games Store at a <strong>launch price of $12</strong>, a discounted rate that runs through <strong>April 22</strong>. The standard price after the promotional window has not been officially confirmed but is expected to land in the $15 to $20 range based on store page metadata.</p>

<p><strong>PlayStation 5</strong> and <strong>Xbox Series X|S</strong> versions are confirmed and scheduled for release later this summer, though Night Street Games has not announced a specific date. Cross-play between PC and console has been described as a priority for the console launch window.</p>

<h2>The Test Begins Now</h2>

<p>The multiplayer shooter space is brutally competitive, and launching a new IP in this genre requires more than a clever hook. But Last Flag has a few things working in its favor: a genuinely fresh take on a beloved mode, a distinctive visual identity, an accessible price point, and months of community feedback from the demo period that have already shaped the launch build. Whether the player base materializes and sticks around will depend on how the meta develops, how quickly Night Street Games responds to balance feedback, and whether those nine launch characters provide enough variety to sustain long-term engagement.</p>

<p>For $12, though, the ask is small. If you have ever felt that capture the flag deserved better than being a neglected playlist option in bigger games, Last Flag is making the case that the mode can carry an entire game on its own. Today is day one. The flags are hidden. The hunt is on.</p>"""
  },
  {
    "id": "art_nubbys_mobile_0414",
    "slug": "nubbys-number-factory-mobile-launch-april-15-2026",
    "title": "Nubby's Number Factory Hits iOS and Android Tomorrow \u2014 The Cult Plinko Roguelike Goes Mobile",
    "summary": "Nubby's Number Factory, the acclaimed plinko-style roguelike from MogDogBlog Productions, launches on iOS and Android on April 15 as Nubby Mobile. Available as a free lite version or $4.99 paid version.",
    "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3191030/4d54c5c7751bef7b3ab46f33de22d0e7c07ae1dc/ss_4d54c5c7751bef7b3ab46f33de22d0e7c07ae1dc.1920x1080.jpg?t=1776100241",
    "category": "mobile",
    "status": "published",
    "publishedAt": "2026-04-14T19:00:00.000Z",
    "createdAt": "2026-04-14T19:00:00.000Z",
    "updatedAt": "2026-04-14T19:00:00.000Z",
    "tags": ["mobile", "roguelike", "indie", "iOS", "Android"],
    "content": """<p><strong>Nubby's Number Factory</strong>, the plinko-style roguelike strategy game that became one of 2025's most unlikely indie success stories, is making the jump to mobile. Developer <strong>MogDogBlog Productions</strong> has confirmed that the game launches on iOS and Android on <strong>April 15, 2026</strong> under the name <strong>Nubby Mobile</strong>, bringing its addictive number-crunching gameplay to the platform where it arguably belongs most.</p>

<p>If you missed the original, here is the pitch: you launch Nubby, a cheerful living ball, into a board filled with pegs, bumpers, and modifiers. As Nubby bounces through the board, the numbers stack up, multiply, and combine in increasingly chaotic ways. Your goal is to generate the highest possible numbers through strategic item placement, board manipulation, and the kind of calculated risk-taking that made games like <strong>Balatro</strong> and <strong>Peggle</strong> so compulsive. It has also drawn favorable comparisons to <strong>Ballionaire</strong>, another recent plinko-inspired hit.</p>

<h2>From Steam Sleeper to Viral Sensation</h2>

<p>Nubby's Number Factory originally launched on Steam on <strong>March 7, 2025</strong>, and while it received positive reviews from those who found it, the game initially flew under most radars. That changed when YouTuber <strong>Northernlion</strong> picked it up for a video that racked up over <strong>303,000 views</strong>, introducing the game to a massive audience of roguelike enthusiasts who immediately latched onto its deceptively deep mechanics.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3191030/7b9b57780bd0d33c82ff9694c9bc547b112fb30a/ss_7b9b57780bd0d33c82ff9694c9bc547b112fb30a.1920x1080.jpg?t=1776100241" alt="Nubby's Number Factory gameplay" style="width:100%;border-radius:8px;margin:20px 0;" />

<p>The Northernlion effect is well documented in the indie space, and for Nubby's Number Factory it was transformative. Steam reviews climbed, word of mouth spread across Reddit and social media, and the game settled into a steady community of players who kept discovering new item synergies and strategies months after launch. It became the kind of game people describe as just one more run before bed, which is the highest compliment a roguelike can receive.</p>

<h2>Why Mobile Makes Perfect Sense</h2>

<p>Nubby's Number Factory was always a natural fit for mobile. Individual runs are short, typically lasting between five and fifteen minutes, making it ideal for commutes, waiting rooms, and the kind of quick-session play that mobile devices excel at. The controls are simple and tactile, revolving around aiming and launching a ball, which translates perfectly to touchscreen input. And the game's quirky retro visual style, built in <strong>GameMaker</strong>, runs smoothly on a wide range of hardware without demanding high-end specs.</p>

<p>MogDogBlog Productions has confirmed that the mobile version contains the same content as the Steam release, including all <strong>50-plus unique items</strong> that form the backbone of the game's strategic depth. There are no compromises, no stripped-down feature set, and critically, <strong>no third-party ads</strong> in either version of the mobile release.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3191030/45b42f6e355904e3eb3a03acc659809044c7668d/ss_45b42f6e355904e3eb3a03acc659809044c7668d.1920x1080.jpg?t=1776100241" alt="Nubby's Number Factory item synergies" style="width:100%;border-radius:8px;margin:20px 0;" />

<h2>Free Lite Version and Paid Option</h2>

<p>The mobile launch offers two options. A <strong>free lite version</strong> lets players experience the core gameplay loop with a limited selection of content, serving as an extended demo that gives a genuine taste of what the full game offers. The <strong>paid version</strong> at <strong>$4.99</strong> unlocks the complete experience, matching the Steam version's content one-for-one. At that price point, it is positioned to compete directly with other premium mobile roguelikes while undercutting most of them.</p>

<p>The decision to offer a free lite version alongside a paid full version is a smart move for a game that thrives on word of mouth. Players can try Nubby's Number Factory with zero financial commitment, and if the plinko-roguelike hook lands, the $4.99 upgrade is an easy sell. It is a model that respects both the player and the developer, and the absence of ads in either version reinforces MogDogBlog's commitment to keeping the experience clean.</p>

<h2>A Perfect Storm of Timing</h2>

<p>The mobile roguelike space has been thriving in 2026, buoyed by the success of Balatro's mobile port and a growing audience of players who want strategic depth in short play sessions. Nubby's Number Factory arrives into a market that is hungry for exactly what it offers: a game that is easy to pick up, difficult to master, and endlessly replayable thanks to the randomized item combinations that make every run feel different.</p>

<p>For MogDogBlog Productions, the mobile launch represents the next chapter for a game that has already exceeded every reasonable expectation. From a quiet Steam launch to a viral Northernlion moment to a mobile release with a clean monetization model, Nubby's Number Factory has followed the kind of trajectory that indie developers dream about. Tomorrow, a whole new audience gets to find out why a bouncing ball and a board full of pegs can be one of the most satisfying things in gaming.</p>"""
  }
]

def arg(v):
    if v is None:
        return {"type": "null"}
    return {"type": "text", "value": str(v)}

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
        arg(a["status"]),
        arg(a["publishedAt"]),
        arg(json.dumps(a["tags"])),
        arg(a["createdAt"]),
        arg(a["updatedAt"]),
    ]
    return {"type": "execute", "stmt": {"sql": sql, "args": args}}

requests_list = [build_request(a) for a in ARTICLES]
body = json.dumps({"requests": requests_list}).encode()

req = urllib.request.Request(URL, data=body, headers={
    "Authorization": AUTH,
    "Content-Type": "application/json"
})
with urllib.request.urlopen(req) as resp:
    print("Status:", resp.status)
    print(resp.read().decode()[:3000])
