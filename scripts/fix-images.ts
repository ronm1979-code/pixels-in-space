import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ── Elden Ring: Nightreign (CORRECT app ID: 2622380) ──
  await prisma.game.update({
    where: { slug: "elden-ring-nightreign" },
    data: {
      coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2622380/header.jpg?t=1773099036",
      screenshots: JSON.stringify([
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2622380/ss_0b9594934db8a1457c915e200f9d0d9b447a3df4.1920x1080.jpg?t=1773099036",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2622380/ss_1deefb0b7ea597f4227777239910b4990aa0cc77.1920x1080.jpg?t=1773099036",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2622380/ss_802cd66236d951fba204fb9980e2c0c9213a264c.1920x1080.jpg?t=1773099036",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2622380/ss_b3ed8ab522f5965e46bc7c090cad9d018f937ae2.1920x1080.jpg?t=1773099036",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2622380/ss_edfd360b92d6f9b983b759fd837e664b86cd9563.1920x1080.jpg?t=1773099036",
      ]),
      steamAppId: "2622380",
    },
  });

  // ── Crimson Desert ── (already correct)

  // ── Marathon ── (already correct)

  // ── GTA VI ──
  await prisma.game.update({
    where: { slug: "grand-theft-auto-vi" },
    data: {
      coverImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1765479644",
      screenshots: JSON.stringify([
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/d61184a98c1cf2db2b08b2999c04b0519e3615bb/ss_d61184a98c1cf2db2b08b2999c04b0519e3615bb.1920x1080.jpg?t=1765479644",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/8340fd391012e12be7e4c02e65801a2648a6b60e/ss_8340fd391012e12be7e4c02e65801a2648a6b60e.1920x1080.jpg?t=1765479644",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/f2e70b5823510daa062293ff0b03821e1dee2d37/ss_f2e70b5823510daa062293ff0b03821e1dee2d37.1920x1080.jpg?t=1765479644",
      ]),
    },
  });

  // ── Fix article images ──
  await prisma.article.updateMany({
    where: { slug: { contains: "elden-ring-nightreign" } },
    data: {
      imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2622380/ss_0b9594934db8a1457c915e200f9d0d9b447a3df4.1920x1080.jpg?t=1773099036",
    },
  });

  await prisma.article.updateMany({
    where: { slug: { contains: "gta-6" } },
    data: {
      imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/d61184a98c1cf2db2b08b2999c04b0519e3615bb/ss_d61184a98c1cf2db2b08b2999c04b0519e3615bb.1920x1080.jpg?t=1765479644",
    },
  });

  await prisma.article.updateMany({
    where: { slug: { contains: "xbox" } },
    data: {
      imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2622380/ss_802cd66236d951fba204fb9980e2c0c9213a264c.1920x1080.jpg?t=1773099036",
    },
  });

  console.log("✓ All images fixed with verified Steam URLs!");
}

main().then(() => prisma.$disconnect()).catch(e => { console.error(e); process.exit(1); });
