import "dotenv/config";
import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!.replace("libsql://", "https://"),
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const now = "2026-04-11T12:00:00.000Z";

const articles = [
  {
    id: "art_starfield_ps5_flop",
    slug: "starfield-ps5-launch-fails-top-10-playstation-store-april-2026",
    title: "Starfield's PS5 Debut Lands at #16 on PlayStation Store — A Rough Start for Bethesda's Space RPG",
    summary: "Despite years of anticipation, Starfield's PS5 launch fails to crack the top 10 on the US PlayStation Store, raising questions about the game's appeal outside the Xbox ecosystem.",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_4887dc140a637684ddcfca518458668409f946dc.1920x1080.jpg?t=1775743548",
    content: `<p>Starfield's long-awaited PlayStation 5 debut has arrived with a whimper rather than a bang. Despite launching on April 7 alongside the substantial Free Lanes update and the new Terran Armada DLC, Bethesda's space RPG debuted at just #16 on the US PlayStation Store's best-sellers list — a surprisingly soft showing for what was once Xbox's crown jewel exclusive.</p>

<p>The numbers tell a sobering story. In a week dominated by established free-to-play juggernauts like Fortnite and Marvel Rivals, the $49.99 Starfield package couldn't compete for wallet share against cheaper or free alternatives. It's a far cry from the record-breaking launch the game enjoyed on Xbox and PC back in September 2023, when it became the biggest Bethesda launch in history.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_b2821283cb140cd5a6289a8160016b6a60d8f96e.1920x1080.jpg?t=1775743548" alt="Starfield space exploration" />

<p>To be fair, the PS5 version itself is solid. DualSense adaptive trigger integration adds tactile feedback to weapons and ship controls, the lightbar tracks player health, and two PS5 Pro visual modes leverage PSSR upscaling for either higher fidelity or smoother performance. The Free Lanes update also addresses many of the criticisms that dogged the game at launch, including freer space travel within star systems.</p>

<p>But the question remains: has Starfield's mixed reception over the past two-and-a-half years permanently damaged its brand on PlayStation, where players had plenty of time to form opinions before ever touching the game? The steep competition from established PS5 titles certainly didn't help — and the $49.99 price point, while lower than a typical launch, may still feel steep for a game many PlayStation owners have already written off.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_68f15d580bf91971f637be5e464bc803482d78f7.1920x1080.jpg?t=1775743548" alt="Starfield combat" />

<p>Bethesda will be hoping the long tail of word-of-mouth and future content drops can improve Starfield's PlayStation fortunes. But for now, the #16 debut is a reality check for the studio — and a reminder that platform exclusivity windows can cut both ways.</p>`,
  },
  {
    id: "art_state_of_play_rumor",
    slug: "playstation-state-of-play-rumored-april-2026",
    title: "PlayStation State of Play Reportedly Planned for Later This Month — Here's What to Expect",
    summary: "Insiders point to an upcoming PlayStation State of Play in April 2026, with potential reveals for first-party titles and third-party announcements.",
    imageUrl: "https://blog.playstation.com/tachyon/2024/09/16554ba2a0ada3fc7c2f05187300c4a3fb1966f1.jpg",
    content: `<p>Sony may be gearing up for a PlayStation State of Play event later this month, according to multiple industry insiders. While Sony has not officially confirmed the showcase, the timing aligns with the company's recent pattern of spring announcements — and there's plenty of unannounced content that could fill the show.</p>

<p>The rumored State of Play would come at a critical time for PlayStation. With the PS5 Pro now established in the market and several major first-party studios deep in development on unannounced projects, Sony has significant ammunition for a showcase. Speculation has centered on potential reveals from Naughty Dog, Guerrilla Games, and Santa Monica Studio, all of whom have been relatively quiet since their last releases.</p>

<p>Third-party announcements are also expected. With major multiplatform titles like GTA 6 scheduled for later this year, Sony will be looking to secure marketing deals and exclusive content partnerships that reinforce PlayStation's position as the premium console platform. The company has historically used State of Play events to unveil DLC partnerships, timed exclusives, and PS5-enhanced versions of upcoming titles.</p>

<p>If the event materializes, expect it to run approximately 30-40 minutes — Sony's preferred format for mid-year showcases. Previous April events have typically focused on a mix of near-term releases and surprise announcements, balancing hype-building for the holiday season with immediate gratification for the installed base.</p>

<p>We'll update this story as more details emerge. For now, PlayStation fans should keep their eyes on Sony's official channels for a potential announcement in the coming days.</p>`,
  },
  {
    id: "art_elder_scrolls_blades",
    slug: "elder-scrolls-blades-shutting-down-june-2026-delisted",
    title: "The Elder Scrolls: Blades Is Being Permanently Shut Down on June 30 — Already Delisted From All Stores",
    summary: "Bethesda pulls The Elder Scrolls: Blades from storefronts and will shut servers permanently on June 30, erasing the mobile RPG from existence.",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/ss_4887dc140a637684ddcfca518458668409f946dc.1920x1080.jpg?t=1775743548",
    content: `<p>Bethesda has confirmed that The Elder Scrolls: Blades will permanently shut down on June 30, 2026. The free-to-play mobile RPG, which launched in 2020 for iOS, Android, and Nintendo Switch, has already been delisted from all storefronts — meaning new players can no longer download it.</p>

<p>For those who still have Blades installed, the game remains playable until the June 30 deadline. As a farewell gesture, Bethesda has reduced all in-game store items to just 1 Gem or 1 Sigil each, letting players experience everything the game has to offer before the lights go out permanently.</p>

<p>The shutdown is particularly final because Blades is entirely online — there are no offline modes, no single-player campaigns that can be saved locally, and no way to preserve the experience once servers go dark. When June 30 arrives, the game will be completely unplayable, effectively erased from existence.</p>

<p>Blades offered a stripped-down Elder Scrolls experience designed for mobile, featuring first-person dungeon crawling, town building, and a story following the Blades faction after the Great War. While it received mixed reviews at launch, the game maintained a small but dedicated player base over its six-year lifespan.</p>

<p>The closure raises broader concerns about game preservation in an era of always-online games. Once Blades goes offline, no amount of fan effort can bring it back — a reality that's becoming increasingly common as publishers sunset live-service titles. For Elder Scrolls fans, it's a reminder that not every entry in the franchise is built to last.</p>`,
  },
  {
    id: "art_warhorse_ai_translators",
    slug: "kingdom-come-deliverance-2-warhorse-fires-translators-ai-replacement",
    title: "Kingdom Come: Deliverance 2 Developer Fires Translation Team, Replaces Them With AI — Sparking Industry Backlash",
    summary: "Warhorse Studios has fired members of its localization team for Kingdom Come: Deliverance 2, replacing them with AI translation tools in a move that has drawn sharp criticism from the games industry.",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_935ddb59f90bc2c21c706132cb9b446fe7851c19.1920x1080.jpg?t=1774370931",
    content: `<p>Warhorse Studios, the developer behind the critically acclaimed Kingdom Come: Deliverance 2, has confirmed that it fired members of its translation and localization team and replaced them with automated translation tools. The decision has ignited a firestorm of criticism from translators, developers, and players across the industry.</p>

<p>The news broke when former Warhorse translators shared their experiences publicly, revealing that the studio had terminated their contracts in favor of machine translation systems. Multiple team members were affected across several language pairs, with the cuts hitting particularly hard in smaller European languages where specialized gaming translators are already rare.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_709f3329562cd2cfe6db70bac908b3e72eaef83b.1920x1080.jpg?t=1774370931" alt="Kingdom Come Deliverance 2" />

<p>The backlash has been swift and severe. Translation professionals have pointed out that Kingdom Come: Deliverance's historical setting and period-appropriate dialogue require deep cultural knowledge and linguistic nuance that automated tools simply cannot replicate. The original game was widely praised for its immersive, historically grounded writing — quality that relied heavily on skilled human translators who understood both medieval history and modern gaming conventions.</p>

<p>Industry organizations representing translators have condemned the move, calling it short-sighted and harmful to localization quality. Several prominent game developers have also voiced concern, noting that translation quality directly impacts player experience and review scores in non-English markets.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/ss_bd668f4d12300c019fa3fa73108aa62929fbf862.1920x1080.jpg?t=1774370931" alt="Kingdom Come Deliverance 2 gameplay" />

<p>Warhorse has not issued a detailed public statement on the matter. The studio's silence has only intensified the controversy, with fans of the franchise expressing concern that post-launch content and future updates will suffer from lower-quality translations. It remains to be seen whether the backlash will prompt a reversal — but for now, the damage to Warhorse's reputation among localization professionals appears significant.</p>`,
  },
  {
    id: "art_pubg_coop",
    slug: "pubg-battlegrounds-update-41-co-op-mode-april-2026",
    title: "PUBG: Battlegrounds Introduces Its First True Co-Op Mode in Update 41.1 — A Fresh Twist on Battle Royale",
    summary: "PUBG's Update 41.1 brings a brand-new cooperative mode, giving the veteran battle royale a PvE twist that changes the formula entirely.",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/c16e2f2d122cae77a1cbaca19263df0f2d2214fa/ss_c16e2f2d122cae77a1cbaca19263df0f2d2214fa.1920x1080.jpg?t=1775635041",
    content: `<p>PUBG: Battlegrounds is shaking up its formula with Update 41.1, introducing a brand-new cooperative mode that marks the first time the veteran battle royale has offered a dedicated PvE experience. The update, rolling out across all platforms this week, brings a fresh perspective to a game that has been defined by its competitive multiplayer for over eight years.</p>

<p>The new co-op mode drops squads of up to four players into familiar PUBG maps, but replaces the 100-player competitive structure with wave-based enemy encounters, objective-driven missions, and environmental hazards. Loot still plays a central role — squads scavenge for weapons and gear as they push through increasingly difficult challenges — but the tension comes from the environment and NPCs rather than other players.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/aa1c51a9b45c88e770b443d8d3cd28f3024b0760/ss_aa1c51a9b45c88e770b443d8d3cd28f3024b0760.1920x1080.jpg?t=1775635041" alt="PUBG Battlegrounds gameplay" />

<p>KRAFTON has described the mode as a way to welcome players who have been intimidated by PUBG's notoriously steep learning curve. By removing the pressure of competing against experienced PvP players, the co-op mode serves as both a training ground for newcomers and a casual alternative for veterans looking to unwind without the intensity of ranked matches.</p>

<p>Early player reception has been cautiously positive, with many praising the mode's accessibility while noting that it could use more variety in objectives and enemy types. KRAFTON has indicated that co-op will receive regular content updates if engagement numbers justify continued development.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/bf9b3de5896d4ec7ef9531938b26946cded81fdf/ss_bf9b3de5896d4ec7ef9531938b26946cded81fdf.1920x1080.jpg?t=1775635041" alt="PUBG co-op mode" />

<p>For a game that helped define the battle royale genre, PUBG's move into cooperative territory feels both unexpected and overdue. Whether it can recapture lapsed players remains to be seen — but the addition signals that KRAFTON is willing to evolve beyond the formula that made PUBG famous.</p>`,
  },
  {
    id: "art_marvel_rivals_deadpool",
    slug: "marvel-rivals-deadpool-limited-event-april-2026",
    title: "Marvel Rivals Drops a Chaotic Deadpool Limited-Time Event With New Skins, Modes, and Fourth-Wall-Breaking Mayhem",
    summary: "NetEase brings Deadpool front and center in Marvel Rivals' latest limited-time event, featuring exclusive skins, a themed game mode, and the Merc with a Mouth's signature brand of chaos.",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/6b131db0a7190b40f0c1305a05bdc2b6a1daea32/ss_6b131db0a7190b40f0c1305a05bdc2b6a1daea32.1920x1080.jpg?t=1774000818",
    content: `<p>Marvel Rivals' latest update brings everyone's favorite Merc with a Mouth front and center. The new Deadpool-themed limited-time event has launched across all platforms, introducing exclusive cosmetics, a chaotic new game mode, and enough fourth-wall breaks to make even the most seasoned Marvel fans grin.</p>

<p>The event introduces a modified arena mode where Deadpool's influence literally warps the battlefield. Expect randomized rule changes mid-match, commentary from Deadpool himself interrupting the action, and environmental hazards that wouldn't be out of place in one of the character's comic books. It's the kind of purposefully unbalanced, laugh-out-loud absurdity that only Deadpool could justify.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/9c62d5330eab8df3a2c76e68662767bf68d755c2/ss_9c62d5330eab8df3a2c76e68662767bf68d755c2.1920x1080.jpg?t=1774000818" alt="Marvel Rivals gameplay" />

<p>On the cosmetics front, the event offers several exclusive Deadpool-themed skins for popular heroes, event-specific sprays and emotes, and a limited battle pass track with premium rewards. NetEase has clearly invested significant resources into making the event feel premium — the skin designs in particular show a level of detail that rivals the game's best permanent cosmetics.</p>

<p>Marvel Rivals continues to hold strong in the competitive hero shooter space, maintaining a spot in the top 10 on the US PlayStation Store and consistently drawing high concurrent player numbers on Steam. The Deadpool event is clearly designed to capitalize on the character's massive popularity following the Deadpool & Wolverine film and keep the game in the cultural conversation.</p>

<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/f2e75daef3f7177d896409b6dd69b62e4088dc23/ss_f2e75daef3f7177d896409b6dd69b62e4088dc23.1920x1080.jpg?t=1774000818" alt="Marvel Rivals heroes" />

<p>The event runs for approximately three weeks, giving players plenty of time to grind through the event pass and unlock the exclusive rewards before they disappear. Given Marvel Rivals' track record of rotating limited events, this is likely a now-or-never situation for the Deadpool cosmetics.</p>`,
  },
];

async function main() {
  for (const a of articles) {
    try {
      await db.execute({
        sql: `INSERT OR IGNORE INTO Article (id, slug, title, content, summary, imageUrl, category, status, publishedAt, tags, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, 'news', 'published', ?, '[]', ?, ?)`,
        args: [a.id, a.slug, a.title, a.content, a.summary, a.imageUrl, now, now, now],
      });
      console.log("Added:", a.title.slice(0, 60));
    } catch (e: any) {
      console.log("Skip:", a.slug, e.message?.slice(0, 60));
    }
  }
}

main();
