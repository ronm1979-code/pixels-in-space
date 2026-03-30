import { NextResponse } from "next/server";
import { runCollectionPipeline } from "@/pipeline/index";

export async function POST(request: Request) {
  const secret = request.headers.get("x-pipeline-secret");
  if (secret !== process.env.PIPELINE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await runCollectionPipeline();
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
