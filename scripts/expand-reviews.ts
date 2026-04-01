import { createClient } from "@libsql/client";

const client = createClient({
  url: "libsql://pixels-in-space-ronm055.aws-eu-west-1.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzQ5NTUxNzIsImlkIjoiMDE5ZDQzOTItMTQwMS03NTgxLWIwMzQtZGZiNzQ5ZmM5MGJmIiwicmlkIjoiY2M3NGU4OWQtNzMxZC00YzYzLTlhMDUtNjczYmI4ZTNmNGI0In0.7ovsSPQdphTQF4MsAybgFVsK-9wX6qIEkmmauLn3OQM6hJ4CPH9kl-fzND3Or0Dp16p7lLpkoHWmxW98pWV4DQ",
});

// New paragraphs to insert for each review, keyed by slug.
// Each entry is an array of { after: number, html: string } where `after` is
// the index (0-based) of the existing block AFTER which to insert the new paragraph.
// Blocks are every top-level element: <p>, <div> (iframe wrappers), <img>.

const expansions: Record<string, { after: number; html: string }[]> = {
  "crimson-desert-review": [
    {
      after: 0,
      html: `<p>The sheer scale of the world cannot be overstated. Pearl Abyss has crafted a landmass that dwarfs most open-world titles, stretching across multiple biomes that each feel genuinely distinct. The northern tundra features dynamic blizzards that reduce visibility to mere feet, while the central forests are dense enough that sunlight filters through in volumetric shafts that shift with the time of day. Environmental storytelling is woven throughout — abandoned settlements tell silent stories of the war that ravaged Pywel, and the wildlife reacts to your presence with behavior patterns that feel remarkably natural.</p>`,
    },
    {
      after: 3,
      html: `<p>What sets the combat apart from its contemporaries is the weight system. Each weapon class — from greatswords to dual daggers to war hammers — has a distinct momentum that affects dodge timing, combo windows, and stagger potential. Heavier weapons can break enemy guards but leave you vulnerable during wind-up animations, while lighter options let you stay mobile but require sustained pressure to break through armored foes. The mounted combat is equally impressive, with horseback engagements that feel dynamic rather than clunky, a rarity in the genre. Boss encounters against the game's larger creatures are genuine highlights, requiring you to read attack patterns and exploit openings with precision that feels earned rather than memorized.</p>`,
    },
    {
      after: 5,
      html: `<p>The audio design deserves special mention. Jesper Kyd's orchestral score shifts seamlessly between haunting ambient pieces during exploration and thunderous battle themes that elevate the combat encounters. Environmental audio is equally accomplished — the crunch of snow underfoot, the distant howl of wolves, the metallic ring of swords clashing — all recorded with a fidelity that makes a good headset almost mandatory. Voice acting across the cast is generally strong, though some supporting characters suffer from inconsistent delivery that breaks immersion during otherwise dramatic scenes.</p>`,
    },
    {
      after: 7,
      html: `<p>Comparisons to The Witcher 3 are inevitable, and while Crimson Desert matches CD Projekt's masterwork in visual fidelity and combat depth, it falls short in the one area that matters most: quest design. Where The Witcher 3's side quests told memorable stories with genuine moral complexity, Crimson Desert's optional content rarely rises above fetch quests and enemy camp clearings. There are exceptions — a multi-part questline involving a cursed lighthouse keeper stands out — but they are too few to sustain the forty-plus hours the game asks of completionists.</p>`,
    },
    {
      after: 9,
      html: `<p>Multiplayer integration, while not a focus at launch, has been hinted at for future updates. The current endgame consists of a New Game Plus mode with rebalanced enemy placements and a challenging arena mode that pits you against waves of increasingly dangerous foes. Neither adds substantial replay value, but the core combat is satisfying enough that many players will find reasons to return. The crafting and gear upgrade systems are deep without being overwhelming, offering meaningful progression that complements the skill-based combat rather than replacing it.</p>`,
    },
  ],

  "monster-hunter-stories-3-twisted-reflection-review": [
    {
      after: 1,
      html: `<p>The visual presentation marks a significant leap from Stories 2. Character models are more expressive, monster animations are fluid and detailed, and the environments — particularly the floating islands of Azuria and the volcanic plains of Vermeil — are rendered with a painterly quality that gives the game a storybook aesthetic without sacrificing clarity. Performance on Switch is solid at 30fps with occasional dips in busier areas, while the PS5 and PC versions run at a locked 60fps that makes the turn-based battles feel snappier than they have any right to be.</p>`,
    },
    {
      after: 3,
      html: `<p>The audio design is a particular standout. The soundtrack blends orchestral arrangements with folk instruments that reflect each region's cultural identity, and the battle themes escalate dynamically based on how well you are performing. Perfectly timed bond attacks trigger musical crescendos that are genuinely thrilling. The full English voice cast delivers strong performances across the board, with the antagonist Veren standing out as one of the most nuanced villains in recent Capcom history — his motivations are understandable even when his methods are reprehensible.</p>`,
    },
    {
      after: 4,
      html: `<p>The monster roster is the largest in Stories history, with over 120 rideable Monsties available across the main story and post-game content. Gene splicing returns from Stories 2 but has been overhauled with a more intuitive interface and clearer feedback about which combinations produce powerful results. Experimenting with gene builds is addictive in the best way — discovering that a Zinogre with fire-element genes and a particular passive ability can devastate an entire boss phase is the kind of eureka moment that keeps you tinkering long after the credits roll.</p>`,
    },
    {
      after: 7,
      html: `<p>The post-game content is substantial, offering high-rank monster dens, a challenging tower mode that remixes encounters with escalating difficulty modifiers, and a series of side stories that flesh out the fates of secondary characters. The absence of multiplayer stings most here — tackling the post-game tower with a friend would have been exceptional. Still, the single-player loop of hunting rare eggs, optimizing gene builds, and taking on ever-tougher challenges provides dozens of additional hours for those who are hooked.</p>`,
    },
  ],

  "slay-the-spire-2-review": [
    {
      after: 0,
      html: `<p>The visual overhaul is immediately apparent. Gone are the simple 2D sprites of the original, replaced with richly animated character models and environmental details that give each act a stronger sense of place. Card art is more elaborate, relic icons are more readable at a glance, and the UI has been redesigned to accommodate the increased complexity without feeling cluttered. The soundtrack, composed once again by Clark Aboud, expands on the original's moody synth score with more dynamic compositions that shift based on the state of combat — low health triggers more urgent percussion, while dominant board states bring in triumphant brass.</p>`,
    },
    {
      after: 2,
      html: `<p>The two new characters are where Mega Crit's design philosophy shines brightest. The Necrobinder manipulates a unique resource called Soul Threads — expendable tokens generated by killing enemies that can be woven into powerful temporary cards mid-combat. It creates a playstyle where you actively want fights to drag out just long enough to stockpile resources for a devastating finish. The Regent, by contrast, operates through a court system where cards are categorized as Edicts, Decrees, and Mandates, each strengthening the others when played in specific sequences. Mastering the Regent requires understanding card order in a way that none of the original characters demanded, and the resulting builds feel genuinely novel in a genre that can sometimes blur together.</p>`,
    },
    {
      after: 5,
      html: `<p>Balance in a game this complex is always a moving target, but Mega Crit has shown remarkable restraint. Rather than nerfing dominant strategies into the ground, patches have generally lifted underperforming options to create more viable paths. The community tier lists are already shifting weekly as players discover new synergies, and the daily challenge mode — which applies random modifiers to a seeded run — has become a competitive fixture with its own leaderboards. The modding framework, while still in early stages, already supports custom cards and relics, and the Steam Workshop integration promises a long tail of community content.</p>`,
    },
    {
      after: 7,
      html: `<p>Performance is excellent across the board. Load times are negligible, animations are smooth, and the game runs comfortably on hardware several years old. The Steam Deck experience in particular is outstanding — the game feels like it was designed for handheld play, with clear text, responsive touch controls, and battery life that stretches comfortably past four hours per session. Cross-save between PC and Steam Deck is seamless, making it dangerously easy to start a run at your desk and finish it in bed.</p>`,
    },
  ],

  "pragmata-review": [
    {
      after: 1,
      html: `<p>The world-building is meticulous. Environmental storytelling fills every corner of the lunar base and the surreal alternate dimensions you visit throughout the campaign. Scattered logs, graffiti on walls, and background details paint a picture of a civilization that was thriving before everything went wrong. The game never holds your hand with exposition dumps — instead, it trusts you to piece together the timeline from contextual clues, which makes the eventual revelations land with greater impact.</p>`,
    },
    {
      after: 3,
      html: `<p>The sound design is exceptional and arguably the game's most underrated element. Composer Keiichi Okabe, known for his work on NieR, delivers a hauntingly beautiful score that alternates between ethereal vocal pieces and tense, industrial drones. The contrast between the serene music of safe zones and the oppressive silence of hostile areas creates a constant sense of unease. Spatial audio is used brilliantly — you can hear threats before you see them, and the echo of your footsteps changes dynamically based on the size and material of the space you are traversing.</p>`,
    },
    {
      after: 5,
      html: `<p>The puzzle design is where Pragmata truly distinguishes itself. The girl's reality-bending powers are introduced gradually, and each new ability reframes how you interact with the environment. Early puzzles involve simple object manipulation, but by the midpoint you are folding space, rewinding time in localized areas, and creating paradoxes that would make Christopher Nolan proud. The difficulty curve is well calibrated — solutions are never immediately obvious but always feel logical in retrospect, avoiding the frustrating moon logic that plagues many adventure games.</p>`,
    },
    {
      after: 7,
      html: `<p>Performance on PS5 is rock-solid at 30fps in the quality mode, with a 60fps performance option that sacrifices some ray-tracing effects. The PC version is well-optimized, scaling gracefully across hardware tiers, though the highest settings demand a current-generation GPU to maintain stable framerates. Load times are virtually nonexistent thanks to aggressive asset streaming, and the seamless transitions between gameplay and cutscenes give the entire experience a cinematic flow that few games achieve.</p>`,
    },
    {
      after: 9,
      html: `<p>Replay value is limited — this is a tightly authored twelve-hour experience with little reason to return beyond collectible hunting and a harder difficulty mode. But sometimes a game does not need to be endlessly replayable to be worthwhile. Pragmata is a singular experience, the kind of game you play once and think about for weeks afterward. In an era of bloated open worlds and live-service content treadmills, that focus feels almost radical.</p>`,
    },
  ],

  "resident-evil-requiem-review": [
    {
      after: 1,
      html: `<p>The atmosphere is relentless. Capcom has clearly studied what made the original Resident Evil and its 2002 remake so effective, and Requiem channels that same sense of suffocating dread into a modern package. The sound design is a masterclass — distant footsteps echo through empty corridors, doors creak with unsettling weight, and the ambient score is so restrained that moments of actual music become genuinely startling. Playing with headphones in a dark room is the definitive experience, and one I would recommend to anyone who considers themselves a horror fan.</p>`,
    },
    {
      after: 4,
      html: `<p>Resource management is tighter here than in any Resident Evil since the original. The inventory system uses a grid-based approach reminiscent of RE4 but with fewer total slots, forcing constant decisions about what to carry and what to leave behind. Safe rooms, while still providing relief, no longer feel entirely safe — certain enemy types can be heard prowling just outside, and the game occasionally subverts the traditional safe room sanctuary in ways I will not spoil. The crafting system is simple but meaningful, allowing you to combine herbs and gunpowder in familiar ways while adding a new chemical catalyst component that forces prioritization between healing items, ammunition, and trap components.</p>`,
    },
    {
      after: 6,
      html: `<p>The creature design in Requiem is Capcom at its most inventive. Without spoiling specific encounters, the enemy roster ranges from shambling grotesques that test your nerve to fast, intelligent predators that force entirely different tactical approaches. Several boss encounters rank among the best in the franchise's history, combining arena design, phase transitions, and resource checks in ways that feel challenging without being unfair. The final boss in particular is a spectacle that earns its place alongside the series' most iconic confrontations.</p>`,
    },
    {
      after: 8,
      html: `<p>Performance across platforms is excellent. The PS5 version offers a choice between a 4K 30fps mode with full ray-tracing and a 60fps performance mode that still looks exceptional. The PC version scales well, though the ray-traced global illumination is demanding enough that only top-tier GPUs can maintain 60fps at maximum settings. Load times are essentially nonexistent on SSD hardware, which is critical for a game that relies on seamless transitions between areas to maintain tension. The Xbox Series X version is nearly identical to PS5, with minor differences in shadow resolution that only comparison videos can detect.</p>`,
    },
    {
      after: 10,
      html: `<p>Post-game content includes an unlockable harder difficulty that remixes enemy placements and reduces resources further, a time-attack mode for speedrunners, and a series of challenge rooms that isolate specific combat encounters with leaderboard rankings. The Mercenaries mode, a franchise staple, returns in a form that feels like a full game unto itself — the arcade-style scoring system and unlockable characters provide dozens of additional hours for those who want them. For a single-player horror game, the replay value is exceptional.</p>`,
    },
  ],

  "dragon-quest-vii-reimagined-review": [
    {
      after: 0,
      html: `<p>For context, the original Dragon Quest VII launched on PlayStation in 2000 and was later remade for the 3DS in 2013. Both versions were praised for their ambition but criticized for pacing issues that tested even the most dedicated JRPG fans. This Reimagined version, built from the ground up for modern hardware, represents the most comprehensive overhaul in the series' history — and the results speak for themselves.</p>`,
    },
    {
      after: 2,
      html: `<p>The audio has been completely rerecorded with a full orchestra, and the difference is transformative. Koichi Sugiyama's original compositions were always strong, but hearing them performed with this level of production quality elevates every scene. The battle theme in particular benefits from the orchestral treatment, with dynamic arrangements that shift based on the number of enemies and the threat level. Voice acting has been added throughout the main story for the first time, and the cast delivers charming performances that bring personality to characters who were previously silent text boxes.</p>`,
    },
    {
      after: 5,
      html: `<p>The island restoration mechanic — the central conceit of Dragon Quest VII's structure — remains as compelling as ever. Each restored island tells its own self-contained story, from tragic tales of cursed villages to lighthearted adventures involving bumbling thieves. The emotional range of these vignettes is impressive, and the Reimagined version has added new story beats and expanded existing ones to give each island more depth. Some of these mini-narratives are genuinely moving, rivaling the emotional impact of the main storyline.</p>`,
    },
    {
      after: 7,
      html: `<p>Quality-of-life improvements extend beyond pacing. The map system has been completely redesigned with clear objective markers and a fast-travel network that unlocks progressively. Equipment management now includes a comparison tooltip that shows stat changes before you commit to a purchase. The monster recruitment system from the original has been streamlined — monsters you defeat in battle can now be recruited to a farm that provides passive bonuses and crafting materials, adding a layer of strategy without the tedium of the original's monster park.</p>`,
    },
    {
      after: 8,
      html: `<p>At roughly sixty hours for the main story and over a hundred for completionists, Dragon Quest VII Reimagined is a massive game. The post-game dungeon is a substantial challenge that remixes encounters from throughout the campaign, and the bonus boss fights test every skill the class system has to offer. Performance is flawless on all platforms, with the Switch version running at a stable 30fps and the PS5 and PC versions targeting 60fps with no noticeable drops. The diorama art style is not particularly demanding on hardware, which means even modest PCs can run it beautifully.</p>`,
    },
  ],

  "demon-tides-review": [
    {
      after: 0,
      html: `<p>Developer Foam Sword — a small studio of fewer than twenty people — has created something that feels like a love letter to the 3D platformers of the early 2000s while simultaneously pushing the genre forward. The influences are obvious: there are echoes of Super Mario Galaxy in the gravity-shifting segments, Ratchet and Clank in the weapon variety, and A Hat in Time in the collectathon structure. But Demon Tides synthesizes these inspirations into something that feels distinctly its own, with a momentum-based movement system that rewards creativity and experimentation.</p>`,
    },
    {
      after: 2,
      html: `<p>The tide mechanic — the game's signature feature — is brilliantly implemented. Water levels rise and fall on a cycle that transforms each island's layout in real time. Platforms that are accessible during low tide become submerged during high tide, while entirely new pathways open up as the water rises. The best levels are designed so that both states offer distinct challenges, and speedrunners will have a field day figuring out optimal routes that account for tide timing. Some of the most satisfying moments come from chaining abilities across a gap that only exists for a few seconds during the transition period.</p>`,
    },
    {
      after: 4,
      html: `<p>The soundtrack deserves special recognition. Composed by a duo of indie musicians, it shifts between breezy tropical themes, high-energy electronic tracks during chase sequences, and atmospheric ambient pieces in the game's handful of darker zones. Each island has its own musical identity, and the way tracks blend dynamically based on your altitude and speed creates a sense of musical momentum that mirrors the gameplay. It is one of the most listenable game soundtracks of the year, and the vinyl release sold out within hours of announcement.</p>`,
    },
    {
      after: 6,
      html: `<p>Boss fights are a highlight, each one requiring you to combine movement abilities in creative ways rather than simply dodging and attacking. One memorable encounter takes place on a series of collapsing platforms above a whirlpool, forcing you to maintain momentum while landing hits on a serpent that dives in and out of the water. Another pits you against a wind elemental on a series of floating islands, where each gust can send you flying off the edge if you are not grounded at the right moment. These encounters feel like practical exams for everything the game has taught you, and they are immensely satisfying to conquer.</p>`,
    },
    {
      after: 8,
      html: `<p>Replay value is strong thanks to time trials for every level, hidden developer ghosts to race against, and a New Game Plus mode that remixes collectible locations and adds tougher enemy variants. The game also tracks an impressive array of statistics — total airtime, longest combo chain, fastest tide transition — that appeal to the optimization-minded. At around twelve hours for the main campaign and twenty-five for full completion, Demon Tides respects your time in a way that many larger games do not.</p>`,
    },
  ],

  "south-of-midnight-review": [
    {
      after: 0,
      html: `<p>The stop-motion aesthetic is not merely a filter — Compulsion Games has committed to the style at every level of the presentation. Character animations have a deliberate, frame-skipped quality that mimics stop-motion puppetry, textures look like they were crafted from clay and fabric, and lighting behaves as though it were hitting physical miniatures rather than digital models. The result is one of the most visually cohesive games in recent memory, even if the lower animation framerate takes some adjustment in the first hour.</p>`,
    },
    {
      after: 2,
      html: `<p>The creature designs are exceptional. Drawing from figures like the Boo Hag, the Plat-eye, and the Rougarou, Compulsion has created a bestiary that feels rooted in genuine folklore rather than generic fantasy. Each creature has lore attached that Hazel can uncover through exploration, and the game handles its source material with a respect and specificity that elevates it above typical supernatural fare. The voice cast — led by a standout performance from the lead actress — brings warmth and authenticity to the Southern dialect that grounds the fantastical elements.</p>`,
    },
    {
      after: 5,
      html: `<p>The weaving mechanic — Hazel's primary supernatural ability — is an interesting addition to combat but feels underutilized. By absorbing energy from defeated creatures, Hazel can weave spells that buff her abilities or debuff enemies. The system has depth on paper, with multiple weave combinations and situational applications, but the game rarely demands that you engage with it beyond basic attack buffs. A more aggressive difficulty setting might have forced players to explore weaving's full potential, but on the default setting, straightforward combat carries you through most encounters without much experimentation.</p>`,
    },
    {
      after: 6,
      html: `<p>The soundtrack is a highlight that deserves recognition. Blending blues, gospel, and folk music with orchestral scoring, the music captures the spirit of the Deep South in a way that feels authentic rather than stereotypical. Environmental audio is equally impressive — cicadas drone in swampy areas, wind whispers through Spanish moss, and the distant sound of church bells marks the passage of in-game time. The audio team has created a soundscape that is as distinctive as the visual style, and the two work together to create an atmosphere unlike anything else in gaming.</p>`,
    },
    {
      after: 8,
      html: `<p>Performance on Xbox Series X is generally solid, though some areas with heavy particle effects cause noticeable frame drops. The game launched as a day-one Game Pass title, which means the barrier to entry is low — and that is the right way to experience South of Midnight. It is the kind of game that benefits from low expectations, where the art direction and cultural setting can surprise you without the weight of a full-price purchase hanging over every shortcoming. A single playthrough runs about fifteen hours, with minimal post-game content beyond collectible cleanup.</p>`,
    },
  ],

  "death-stranding-2-on-the-beach-review": [
    {
      after: 1,
      html: `<p>The narrative ambition here is staggering, even by Kojima's standards. Without spoiling specifics, the story weaves together themes of connection, grief, extinction, and rebirth in ways that are sometimes profound and sometimes bewildering. The celebrity cast — which now includes Elle Fanning, Shioli Kutsuna, and George Miller in addition to returning stars — delivers performances that sell even the most outlandish plot developments. The motion capture work is the best in the industry, capturing subtle facial expressions that convey emotional nuance no amount of dialogue could achieve.</p>`,
    },
    {
      after: 4,
      html: `<p>The new region types are a significant addition. Toxic zones require specialized gear and careful resource planning, fungal forests distort your navigation instruments, and the BT-infested crater zones are some of the most tense traversal sequences in gaming. Each biome demands a different loadout and approach, which means preparation at safe houses becomes its own engaging minigame. The catapult system — a new traversal tool that launches cargo across vast distances — is wildly entertaining once you master the physics, and the zipline network from the first game has been expanded with powered rails that let you move at exhilarating speed across established routes.</p>`,
    },
    {
      after: 6,
      html: `<p>The Decima Engine has been pushed to its absolute limits. Weather systems are dynamic and persistent — a rainstorm does not just look impressive, it physically alters terrain, creates mud that slows your movement, and accelerates the timefall degradation of your cargo. The day-night cycle affects enemy behavior, NPC schedules, and even the music. Draw distances are remarkable, with mountain ranges visible from dozens of kilometers away rendering with enough detail that you can plan routes by sight alone. Photo mode enthusiasts will lose hours to this game — it may be the most photogenic open world ever created.</p>`,
    },
    {
      after: 7,
      html: `<p>The soundtrack and audio design are world-class. Low Roar's contributions, recorded before the band's dissolution, are deeply moving in context, and the licensed tracks from artists like CHVRCHES and Woodkid are deployed with Kojima's characteristic precision — each song arrives at exactly the right emotional moment. The ambient soundscape is equally impressive, with wind, water, and wildlife creating an ever-present audio backdrop that makes the world feel alive even in its most desolate stretches. Spatial audio on PS5 through the Pulse 3D headset is a particular standout, placing every sound with pinpoint accuracy.</p>`,
    },
    {
      after: 9,
      html: `<p>The game runs at a stable 30fps in quality mode on PS5 with full ray-tracing, or 60fps in performance mode with reduced visual fidelity. Both modes look exceptional, though the quality mode's ray-traced reflections in water and metallic surfaces add a layer of realism that is hard to give up once you have seen it. The PS5's DualSense features are used extensively — terrain textures transmit through the haptics, and the adaptive triggers simulate the strain of carrying heavy loads. A PC version has been confirmed but not yet dated, which means PlayStation owners have exclusivity for now.</p>`,
    },
  ],
};

async function main() {
  console.log("Fetching reviews from database...");
  const result = await client.execute("SELECT slug, content FROM Review");

  for (const row of result.rows) {
    const slug = row.slug as string;
    const content = row.content as string;

    const newParagraphs = expansions[slug];
    if (!newParagraphs) {
      console.log(`  Skipping ${slug} (no expansions defined)`);
      continue;
    }

    console.log(`  Expanding: ${slug} (current: ${content.length} chars)`);

    // Parse the content into blocks: <p>...</p>, <div>...(iframe)...</div>, <img ... />
    // We split on top-level tags while preserving them
    const blockRegex =
      /(<p>[\s\S]*?<\/p>|<div[\s\S]*?<\/div>|<img\s[^>]*\/?>)/g;
    const blocks: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = blockRegex.exec(content)) !== null) {
      blocks.push(match[0]);
    }

    console.log(`    Found ${blocks.length} blocks`);

    // Insert new paragraphs in reverse order (so indices don't shift)
    const sorted = [...newParagraphs].sort((a, b) => b.after - a.after);
    for (const ins of sorted) {
      if (ins.after < blocks.length) {
        blocks.splice(ins.after + 1, 0, ins.html);
      }
    }

    // Reassemble with double newlines between blocks
    const newContent = blocks.join("\n\n") + "\n\n";

    console.log(`    New length: ${newContent.length} chars`);

    // Update the database
    await client.execute({
      sql: "UPDATE Review SET content = ? WHERE slug = ?",
      args: [newContent, slug],
    });

    console.log(`    Updated in database.`);
  }

  console.log("\nAll reviews expanded successfully!");
}

main().catch(console.error);
