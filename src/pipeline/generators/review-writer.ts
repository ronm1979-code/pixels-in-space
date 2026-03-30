import { generateJson } from "@/lib/claude";
import { PIPELINE_CONFIG } from "@/config/pipeline";
import type { SourceReview } from "@/types";

interface GeneratedReview {
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  verdict: string;
}

const SYSTEM_PROMPT = `You are a professional gaming journalist writing reviews for GamePulse, a gaming news website.
Your reviews are balanced, informative, and based on aggregated data from multiple review sources.

Rules:
- Write in a professional but engaging tone
- Base your analysis on the provided review scores and sources
- Do NOT fabricate specific gameplay details you don't know
- Focus on what the scores and sources tell us about the game's reception
- Include 3-5 pros and 3-5 cons
- The verdict should be one impactful sentence
- Content should be ${PIPELINE_CONFIG.reviewMinWords}-${PIPELINE_CONFIG.reviewMaxWords} words
- Use HTML paragraphs (<p>) for the content
- Do NOT include any score numbers in the content text`;

export async function generateReview(
  gameTitle: string,
  averageScore: number,
  sourceReviews: SourceReview[],
  gameDescription?: string
): Promise<GeneratedReview> {
  const sourceSummary = sourceReviews
    .map((s) => `${s.source}: ${s.score}/100`)
    .join(", ");

  const userPrompt = `Write a review summary for "${gameTitle}".

Average Score: ${averageScore}/100
Source Scores: ${sourceSummary}
${gameDescription ? `Game Description: ${gameDescription}` : ""}

Respond with JSON:
{
  "title": "Review title (creative, not just the game name)",
  "content": "HTML content with <p> tags, ${PIPELINE_CONFIG.reviewMinWords}-${PIPELINE_CONFIG.reviewMaxWords} words",
  "pros": ["pro 1", "pro 2", "pro 3"],
  "cons": ["con 1", "con 2", "con 3"],
  "verdict": "One sentence verdict"
}`;

  return generateJson<GeneratedReview>(SYSTEM_PROMPT, userPrompt, {
    maxTokens: 2048,
  });
}
