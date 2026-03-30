import { PrismaClient } from "@prisma/client";
import { RSS_SOURCES } from "../src/config/sources";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed RSS sources
  for (const source of RSS_SOURCES) {
    await prisma.source.upsert({
      where: { id: source.name.toLowerCase().replace(/\s+/g, "-") },
      update: {},
      create: {
        id: source.name.toLowerCase().replace(/\s+/g, "-"),
        name: source.name,
        type: "rss",
        url: source.url,
        enabled: true,
      },
    });
    console.log(`  Source: ${source.name}`);
  }

  // Seed default settings
  const settings = [
    { key: "auto_publish_articles", value: "false" },
    { key: "auto_publish_reviews", value: "false" },
    { key: "pipeline_secret", value: "change-me-to-a-random-secret" },
  ];

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
