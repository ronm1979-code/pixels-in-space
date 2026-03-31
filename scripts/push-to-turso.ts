import "dotenv/config";
import { createClient } from "@libsql/client";
import path from "node:path";

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const localDb = createClient({
  url: `file:${path.join(process.cwd(), "prisma", "dev.db")}`,
});

async function main() {
  console.log("Connecting to Turso...");

  // Create tables
  console.log("Creating tables...");
  const statements = [
    `CREATE TABLE IF NOT EXISTS "Game" ("id" TEXT NOT NULL PRIMARY KEY,"slug" TEXT NOT NULL,"title" TEXT NOT NULL,"description" TEXT,"coverImage" TEXT,"screenshots" TEXT NOT NULL DEFAULT '[]',"trailerUrl" TEXT,"releaseDate" DATETIME,"developer" TEXT,"publisher" TEXT,"platforms" TEXT NOT NULL DEFAULT '[]',"genres" TEXT NOT NULL DEFAULT '[]',"steamAppId" TEXT,"rawgSlug" TEXT,"igdbId" TEXT,"metacriticScore" INTEGER,"steamScore" INTEGER,"averageScore" REAL,"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,"updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS "PipelineRun" ("id" TEXT NOT NULL PRIMARY KEY,"type" TEXT NOT NULL,"status" TEXT NOT NULL DEFAULT 'running',"articlesFound" INTEGER NOT NULL DEFAULT 0,"articlesNew" INTEGER NOT NULL DEFAULT 0,"reviewsGenerated" INTEGER NOT NULL DEFAULT 0,"errors" TEXT NOT NULL DEFAULT '[]',"startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,"completedAt" DATETIME)`,
    `CREATE TABLE IF NOT EXISTS "Article" ("id" TEXT NOT NULL PRIMARY KEY,"slug" TEXT NOT NULL,"title" TEXT NOT NULL,"content" TEXT NOT NULL,"summary" TEXT,"imageUrl" TEXT,"sourceUrl" TEXT,"sourceName" TEXT,"category" TEXT NOT NULL DEFAULT 'news',"tags" TEXT NOT NULL DEFAULT '[]',"gameId" TEXT,"status" TEXT NOT NULL DEFAULT 'draft',"publishedAt" DATETIME,"sourcePublishedAt" DATETIME,"pipelineRunId" TEXT,"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,"updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL, FOREIGN KEY ("pipelineRunId") REFERENCES "PipelineRun"("id") ON DELETE SET NULL)`,
    `CREATE TABLE IF NOT EXISTS "Review" ("id" TEXT NOT NULL PRIMARY KEY,"slug" TEXT NOT NULL,"gameId" TEXT NOT NULL,"title" TEXT NOT NULL,"content" TEXT NOT NULL,"score" REAL NOT NULL,"pros" TEXT NOT NULL DEFAULT '[]',"cons" TEXT NOT NULL DEFAULT '[]',"sourceReviews" TEXT NOT NULL DEFAULT '[]',"verdict" TEXT,"status" TEXT NOT NULL DEFAULT 'draft',"publishedAt" DATETIME,"pipelineRunId" TEXT,"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,"updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY ("gameId") REFERENCES "Game"("id"), FOREIGN KEY ("pipelineRunId") REFERENCES "PipelineRun"("id") ON DELETE SET NULL)`,
    `CREATE TABLE IF NOT EXISTS "Source" ("id" TEXT NOT NULL PRIMARY KEY,"name" TEXT NOT NULL,"type" TEXT NOT NULL,"url" TEXT NOT NULL,"config" TEXT NOT NULL DEFAULT '{}',"enabled" INTEGER NOT NULL DEFAULT 1,"lastFetched" DATETIME,"errorCount" INTEGER NOT NULL DEFAULT 0,"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,"updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS "Setting" ("key" TEXT NOT NULL PRIMARY KEY,"value" TEXT NOT NULL,"updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "Game_slug_key" ON "Game"("slug")`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "Article_slug_key" ON "Article"("slug")`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "Review_slug_key" ON "Review"("slug")`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "Review_gameId_key" ON "Review"("gameId")`,
    `CREATE INDEX IF NOT EXISTS "Article_status_publishedAt_idx" ON "Article"("status","publishedAt")`,
    `CREATE INDEX IF NOT EXISTS "Article_gameId_idx" ON "Article"("gameId")`,
    `CREATE INDEX IF NOT EXISTS "Game_averageScore_idx" ON "Game"("averageScore")`,
  ];

  for (const sql of statements) {
    await turso.execute(sql);
  }
  console.log("✓ Tables created");

  // Copy data
  console.log("Copying data from local DB...");

  const tables = ["Game", "PipelineRun", "Source", "Article", "Review"];
  for (const table of tables) {
    const rows = await localDb.execute(`SELECT * FROM "${table}"`);
    if (rows.rows.length === 0) {
      console.log(`  ${table}: 0 rows (skipped)`);
      continue;
    }

    const cols = rows.columns;
    const placeholders = cols.map(() => "?").join(",");
    const colNames = cols.map((c) => `"${c}"`).join(",");

    for (const row of rows.rows) {
      const values = cols.map((c) => (row as any)[c] ?? null);
      try {
        await turso.execute({
          sql: `INSERT OR REPLACE INTO "${table}" (${colNames}) VALUES (${placeholders})`,
          args: values,
        });
      } catch (err: any) {
        console.log(`  Warning: ${table} row skipped: ${err.message?.slice(0, 80)}`);
      }
    }
    console.log(`  ✓ ${table}: ${rows.rows.length} rows`);
  }

  console.log("\n🎉 All data pushed to Turso!");
}

main().catch((e) => { console.error(e); process.exit(1); });
