-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "coverImage" TEXT,
    "screenshots" TEXT NOT NULL DEFAULT '[]',
    "trailerUrl" TEXT,
    "releaseDate" DATETIME,
    "developer" TEXT,
    "publisher" TEXT,
    "platforms" TEXT NOT NULL DEFAULT '[]',
    "genres" TEXT NOT NULL DEFAULT '[]',
    "steamAppId" TEXT,
    "rawgSlug" TEXT,
    "igdbId" TEXT,
    "metacriticScore" INTEGER,
    "steamScore" INTEGER,
    "averageScore" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Game" ("averageScore", "coverImage", "createdAt", "description", "developer", "genres", "id", "igdbId", "metacriticScore", "platforms", "publisher", "rawgSlug", "releaseDate", "slug", "steamAppId", "steamScore", "title", "updatedAt") SELECT "averageScore", "coverImage", "createdAt", "description", "developer", "genres", "id", "igdbId", "metacriticScore", "platforms", "publisher", "rawgSlug", "releaseDate", "slug", "steamAppId", "steamScore", "title", "updatedAt" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
CREATE UNIQUE INDEX "Game_slug_key" ON "Game"("slug");
CREATE UNIQUE INDEX "Game_steamAppId_key" ON "Game"("steamAppId");
CREATE UNIQUE INDEX "Game_rawgSlug_key" ON "Game"("rawgSlug");
CREATE UNIQUE INDEX "Game_igdbId_key" ON "Game"("igdbId");
CREATE INDEX "Game_releaseDate_idx" ON "Game"("releaseDate");
CREATE INDEX "Game_averageScore_idx" ON "Game"("averageScore");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
