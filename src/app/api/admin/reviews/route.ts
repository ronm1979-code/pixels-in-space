import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1"));
  const limit = 20;

  const where = status ? { status } : {};

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      include: { game: { select: { title: true, coverImage: true } } },
    }),
    prisma.review.count({ where }),
  ]);

  return NextResponse.json({ reviews, total, page, totalPages: Math.ceil(total / limit) });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  const { ids, action } = body as { ids: string[]; action: string };

  if (action === "publish") {
    await prisma.review.updateMany({
      where: { id: { in: ids } },
      data: { status: "published", publishedAt: new Date() },
    });
  } else if (action === "archive") {
    await prisma.review.updateMany({
      where: { id: { in: ids } },
      data: { status: "archived" },
    });
  } else if (action === "delete") {
    await prisma.review.deleteMany({
      where: { id: { in: ids } },
    });
  }

  return NextResponse.json({ success: true });
}
