import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get("articleId");
  const reviewId = searchParams.get("reviewId");

  if (!articleId && !reviewId) {
    return NextResponse.json(
      { error: "articleId or reviewId is required" },
      { status: 400 }
    );
  }

  const comments = await prisma.comment.findMany({
    where: articleId ? { articleId } : { reviewId },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(comments);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, content, articleId, reviewId } = body;

    // Validate name
    if (!name || typeof name !== "string" || name.trim().length < 1 || name.trim().length > 50) {
      return NextResponse.json(
        { error: "Name must be between 1 and 50 characters" },
        { status: 400 }
      );
    }

    // Validate content
    if (
      !content ||
      typeof content !== "string" ||
      content.trim().length < 1 ||
      content.trim().length > 1000
    ) {
      return NextResponse.json(
        { error: "Comment must be between 1 and 1000 characters" },
        { status: 400 }
      );
    }

    // Must have either articleId or reviewId
    if (!articleId && !reviewId) {
      return NextResponse.json(
        { error: "articleId or reviewId is required" },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        name: name.trim(),
        content: content.trim(),
        ...(articleId ? { articleId } : {}),
        ...(reviewId ? { reviewId } : {}),
      },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
