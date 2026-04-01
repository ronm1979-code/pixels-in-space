import { createClient } from "@libsql/client";
import * as dotenv from "dotenv";
dotenv.config();

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

async function main() {
  console.log("Creating Comment table in Turso...");

  await client.execute(`
    CREATE TABLE IF NOT EXISTS "Comment" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "name" TEXT NOT NULL,
      "content" TEXT NOT NULL,
      "articleId" TEXT,
      "reviewId" TEXT,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "Comment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
      CONSTRAINT "Comment_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review" ("id") ON DELETE SET NULL ON UPDATE CASCADE
    )
  `);

  await client.execute(
    `CREATE INDEX IF NOT EXISTS "Comment_articleId_idx" ON "Comment"("articleId")`
  );
  await client.execute(
    `CREATE INDEX IF NOT EXISTS "Comment_reviewId_idx" ON "Comment"("reviewId")`
  );

  console.log("Comment table created successfully!");
}

main().catch(console.error);
