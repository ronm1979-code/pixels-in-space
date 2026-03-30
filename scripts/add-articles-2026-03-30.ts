import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const articles = [
  {
    slug: "xbox-partner-preview-march-2026-recap",
    title: "Xbox Partner Preview March 2026: Stranger Than Heaven Steals the Show",
    summary:
      "Microsoft's latest partner showcase delivered 19 upcoming games with 7 world premieres, but RGG Studio's Stranger Than Heaven was undeniably the event's centerpiece.",
    category: "news",
    content: `<p>Microsoft held its Xbox Partner Preview event on March 26th, and the show delivered in a big way — 19 upcoming third-party games, 7 world premieres, and 14 titles confirmed for day-one Xbox Game Pass inclusion. Hosted by <em>Dispatch</em> actor Aaron Paul, the showcase leaned hard into diversity of genre and tone, and for the most part it worked.</p>

<p>The undisputed highlight of the evening was RGG Studio's <strong>Stranger Than Heaven</strong>, the project formerly known as Project Century that was teased at The Game Awards 2024. A brand-new trailer finally dropped some major structural details: the game spans <strong>five distinct time periods</strong> — 1915, 1929, 1943, 1951, and 1965 — across five different cities. Classic RGG DNA is all over this one. The trailer showed tram rides, romantic subplots, gorgeous food cinematography, and chaotic street brawls, all set to a jazz-heavy soundtrack that feels right at home with the game's historical milieu.</p>

<p>Studio head Masayoshi Yokoyama was cagey but clearly delighted about the cast, saying only that players can expect "an all-star cast" and that the footage wasn't exactly subtle with its teases. A dedicated deep-dive broadcast titled <strong>"Xbox Presents: A Special Look at Stranger Than Heaven"</strong> is set for <strong>May 6</strong>, where the full story, characters, and setting details will finally be revealed. The game is also confirmed as an Xbox Game Pass Ultimate title.</p>

<p>GSC Game World confirmed the first major expansion for <strong>S.T.A.L.K.E.R. 2: Heart of Chornobyl</strong>, titled <em>Cost of Hope</em>. The expansion centers on the power struggle between the Duty and Freedom factions and takes players into the Chornobyl Nuclear Power Plant and the new Iron Forest region. GSC is promising over 20 hours of new content, with a <strong>Summer 2026</strong> launch window.</p>

<p>Other notable reveals included <strong>Super Meat Boy 3D</strong> — which launches tomorrow, March 31st, on Xbox and Game Pass — cyberpunk action-adventure <strong>Artificial Detective</strong>, farming sim with a murderous twist <strong>Grave Seasons</strong> (August 14), and <strong>Moosa: Dirty Fate</strong>, a third-person sword combat game set in Feudal Korea. Owlcat Games also showed new footage of <strong>The Expanse: Osiris Reborn</strong>, announcing an April 22nd beta ahead of a Spring 2027 release.</p>

<p>It was a strong showcase overall. Xbox has been running these partner events with increasing polish, and the sheer breadth of genres on display — from brutal extraction shooters to cozy farming sims — reflects a Game Pass library strategy that's clearly matured. The May 6th Stranger Than Heaven broadcast cannot come soon enough.</p>`,
  },
  {
    slug: "marathon-bungie-1-2-million-sales-below-expectations",
    title:
      "Marathon Has Sold 1.2 Million Copies — But That's Not the Win Bungie Was Hoping For",
    summary:
      "Analyst estimates put Marathon's first three weeks at roughly 1.2 million copies and $55 million in revenue, a figure sources close to Sony describe as 'worse than expected.'",
    category: "news",
    content: `<p>Three weeks after launch, the picture for <strong>Marathon</strong> is coming into focus — and it's complicated. Analyst Rhys Elliott from Alinea Analytics estimates Bungie's extraction shooter has sold approximately <strong>1.2 million copies worldwide</strong>, generating around $55 million in revenue before microtransactions are factored in. Industry observers say those numbers align closely with Bungie's own internal data.</p>

<p>On paper, a million-plus units in three weeks sounds respectable. In context, it's a different story. Marathon is the first new IP from Bungie in over a decade, it carries a sky-high development budget that speculation puts in the hundreds of millions, and it's a first-party Sony title. When you stack all of that against 1.2 million sales — with the majority coming from PC via Steam rather than PlayStation 5 — the math doesn't add up the way Sony needs it to.</p>

<p>The platform split is particularly striking: approximately <strong>800,000 copies sold on Steam</strong> (~70%), around 217,000 on PS5 (~19%), and roughly 133,000 on Xbox (~11%). For a Sony-owned studio releasing a Sony-funded game, leading on PC isn't exactly the ideal outcome. Bungie has already rejected speculation about scaling back or pivoting strategy, stating plainly that they're <strong>"in it for the long haul."</strong></p>

<p>Not everything is grim. The game holds an <strong>89% positive review score on Steam</strong>, and the engagement numbers among its core players are genuinely impressive — average playtime on PC has climbed to 27.8 hours, with 22% of Steam players having crossed the 50-hour mark. Peak concurrent players hit 478,000 on launch weekend before settling around 380,000 the week after.</p>

<p>Still, the comparison looming over Marathon is impossible to ignore: rival extraction shooter <strong>Arc Raiders</strong> has crossed 12 million copies sold roughly two months after release. That's a brutal competitive benchmark for any live-service game to sit next to.</p>

<p>The seasonal roadmap rolls on regardless. Season 2: Nightfall arrives in June, adding a new map variant, weapons, and the new Cradle system. Season 3 follows in August. Whether Marathon can build the kind of sustained player base it needs to justify its ambitions remains the open question — and it's one only the next few months will really answer.</p>`,
  },
  {
    slug: "crimson-desert-launch-mixed-reviews-strong-sales",
    title:
      "Crimson Desert Launches to 3 Million Sales and a 78 Metacritic — A Complicated Debut",
    summary:
      "Pearl Abyss's years-in-the-making action RPG sold 3 million copies in four days but drew mixed-to-good reviews, triggering a dramatic drop in the company's stock price.",
    category: "news",
    content: `<p>After years of anticipation and multiple delays, <strong>Crimson Desert</strong> finally launched on March 19th for PlayStation 5, Xbox Series X|S, PC, and macOS. Pearl Abyss's standalone action RPG — originally conceived as a prequel to Black Desert Online before evolving into its own thing — arrived to a reception that's probably best described as genuinely conflicted.</p>

<p>Commercially, the numbers are hard to argue with. Pearl Abyss announced the game surpassed <strong>2 million units sold within 24 hours</strong> of launch, climbing to <strong>3 million copies worldwide</strong> by day four. On Steam, it peaked at over 239,000 concurrent players and shot to the top of the platform's Top Sellers chart. By any conventional measure, that's a hit.</p>

<p>Critically, the story is more nuanced. Crimson Desert currently sits at a <strong>Metascore of 78/100</strong> across 93 press reviews, with an OpenCritic average of 79. The game's visual ambition drew near-universal praise — reviewers consistently described it as a technical marvel and genuinely stunning open world. The combat system, when it connects, feels deep and rewarding.</p>

<p>Where things fall apart, according to critics, is in the narrative and usability. Multiple outlets described the main story as incoherent, fluctuating from hard to follow to outright confusing. Control configuration on PC was flagged as problematic, the UI drew consistent criticism for being cluttered and unintuitive, and launch-day bugs — including a significant map functionality issue on PS5 — were widespread.</p>

<p>Investors had been watching for a Metacritic score above 80 as a bellwether for the game's long-term commercial potential. When the 78 landed on launch day, <strong>Pearl Abyss shares dropped nearly 30%</strong>. Seven years of development, and the score was just below the threshold the market had priced in.</p>

<p>To their credit, Pearl Abyss moved fast. Within days of launch, a substantial patch landed addressing combat responsiveness, control configuration, and a handful of quality-of-life complaints. Controversial AI-generated artwork was replaced with real illustrations. Community sentiment has been trending upward since. The foundation Pearl Abyss has built is genuinely impressive — whether the post-launch support can bring the game up to the level its world deserves is the question the studio now has to answer.</p>`,
  },
  {
    slug: "gta-6-november-19-2026-confirmed",
    title:
      "GTA 6 Locked In for November 19, 2026 — and It's Actually Happening This Time",
    summary:
      "Rockstar's long-awaited Vice City sequel now has a firm November 19th release date for PS5 and Xbox Series X|S, with Take-Two's CEO calling it 'groundbreaking' for the entire entertainment industry.",
    category: "news",
    content: `<p>After two delays and what feels like an eternity of waiting, <strong>Grand Theft Auto VI</strong> has a confirmed launch date: <strong>November 19, 2026</strong>. The game is coming to PlayStation 5 and Xbox Series X|S, and at this point, multiple credible sources suggest it's staying there.</p>

<p>Take-Two CEO Strauss Zelnick reconfirmed the date during the company's February earnings call, calling GTA 6 "groundbreaking" not just for gaming but for the entertainment industry as a whole — which is exactly the kind of corporate language that usually makes you roll your eyes, but in this case might not be entirely hyperbolic. Insider reports indicate that both Sony and Microsoft have been briefed that the game is on track with no further delays planned.</p>

<p>The road to November 19th has been bumpy. GTA 6 was originally targeting late 2025, then slipped to May 26, 2026, before landing on the current November slot. Rockstar has consistently cited the need for additional polish time, and given the studio's track record — both in terms of quality and their willingness to miss self-imposed windows — it's hard to begrudge them the extra time. The finished product is what matters.</p>

<p>What we know about the game: it returns to a modern-day <strong>Vice City</strong> set within the fictional state of Leonida, and introduces dual protagonists <strong>Lucia Caminos</strong> and <strong>Jason Duval</strong>. Lucia marks the first time in GTA's main series history that a female character takes a lead protagonist role. Pricing is expected to fall in the <strong>$70–$80 range</strong> for standard editions, with formal pre-order details expected when Rockstar's summer marketing push kicks off.</p>

<p>On PC, the situation remains unchanged from previous reporting: there is no confirmed PC release date, and based on Rockstar's historical pattern with GTA 5 and Red Dead Redemption 2, a PC version is likely looking at sometime in 2027 or 2028. Cold comfort for PC players, but not exactly surprising.</p>

<p>Take-Two's next earnings call in May will be the industry's next opportunity to get an official update on the game's development status. Given the stakes — GTA 6 may well be the biggest entertainment release of the decade — expect that call to get an unusual amount of attention.</p>`,
  },
];

async function main() {
  let added = 0;
  for (const article of articles) {
    try {
      await prisma.article.create({
        data: {
          slug: article.slug,
          title: article.title,
          content: article.content,
          summary: article.summary,
          imageUrl: null,
          category: article.category,
          status: "published",
          publishedAt: new Date("2026-03-30"),
        },
      });
      console.log(`Added: ${article.title}`);
      added++;
    } catch (e: any) {
      console.error(`Failed to add "${article.title}": ${e.message}`);
    }
  }
  console.log(`\nDone. Added ${added}/${articles.length} articles.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
