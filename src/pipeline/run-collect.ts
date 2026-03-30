import { runCollectionPipeline, publishDraftArticles } from "./index";

async function main() {
  console.log("Starting content collection from RSS feeds...");
  const result = await runCollectionPipeline();
  console.log(
    `Collection complete: ${result.articlesFound} found, ${result.articlesNew} new, ${result.errors.length} errors`
  );
  if (result.errors.length > 0) {
    console.log("Errors:", result.errors.slice(0, 5));
  }

  // Auto-publish any remaining drafts
  const published = await publishDraftArticles();
  if (published > 0) {
    console.log(`Published ${published} draft articles`);
  }

  process.exit(0);
}

main().catch((err) => {
  console.error("Pipeline failed:", err);
  process.exit(1);
});
