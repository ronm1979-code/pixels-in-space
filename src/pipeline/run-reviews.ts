import { runReviewPipeline } from "./index";

async function main() {
  console.log("Starting review generation...");
  const result = await runReviewPipeline();
  console.log(
    `Reviews complete: ${result.reviewsGenerated} generated, ${result.errors.length} errors`
  );
  if (result.errors.length > 0) {
    console.log("Errors:", result.errors);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error("Review pipeline failed:", err);
  process.exit(1);
});
