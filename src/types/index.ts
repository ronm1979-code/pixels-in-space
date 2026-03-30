export interface GameData {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  coverImage: string | null;
  releaseDate: Date | null;
  developer: string | null;
  publisher: string | null;
  platforms: string[];
  genres: string[];
  steamAppId: string | null;
  rawgSlug: string | null;
  igdbId: string | null;
  metacriticScore: number | null;
  steamScore: number | null;
  averageScore: number | null;
}

export interface ArticleData {
  id: string;
  slug: string;
  title: string;
  content: string;
  summary: string | null;
  imageUrl: string | null;
  sourceUrl: string | null;
  sourceName: string | null;
  category: string;
  tags: string[];
  gameId: string | null;
  status: string;
  publishedAt: Date | null;
  createdAt: Date;
}

export interface ReviewData {
  id: string;
  slug: string;
  gameId: string;
  title: string;
  content: string;
  score: number;
  pros: string[];
  cons: string[];
  sourceReviews: SourceReview[];
  verdict: string | null;
  status: string;
  publishedAt: Date | null;
}

export interface SourceReview {
  source: string;
  score: number;
  url: string;
}

export interface CollectedArticle {
  title: string;
  content: string;
  imageUrl?: string;
  sourceUrl: string;
  sourceName: string;
  category: string;
  publishedAt?: Date;
  gameTitle?: string;
}

export interface CollectedGameData {
  title: string;
  description?: string;
  coverImage?: string;
  releaseDate?: Date;
  developer?: string;
  publisher?: string;
  platforms?: string[];
  genres?: string[];
  steamAppId?: string;
  rawgSlug?: string;
  igdbId?: string;
  metacriticScore?: number;
}

export interface PipelineResult {
  articlesFound: number;
  articlesNew: number;
  errors: string[];
}
