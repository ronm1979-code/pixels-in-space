export const SITE_NAME = "GamePulse";
export const SITE_DESCRIPTION =
  "Your automated source for the latest gaming news, reviews, and game information.";

export const CATEGORIES = [
  "news",
  "feature",
  "guide",
  "rumor",
  "review",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const PLATFORMS = [
  "PC",
  "PlayStation 5",
  "Xbox Series X/S",
  "Nintendo Switch",
  "Mobile",
] as const;

export const ARTICLES_PER_PAGE = 12;
export const REVIEWS_PER_PAGE = 12;
export const GAMES_PER_PAGE = 20;
