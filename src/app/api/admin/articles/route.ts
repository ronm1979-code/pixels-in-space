import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1"));
  const limit = 20;

  const where = status ? { status } : {};

  const [articles, total] = await Promise.all([
    prisma.article.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      include: { game: { select: { title: true } } },
    }),
    prisma.article.count({ where }),
  ]);

  return NextResponse.json({ articles, total, page, totalPages: Math.ceil(total / limit) });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  const { ids, action } = body as { ids: string[]; action: string };

  if (action === "publish") {
    await prisma.article.updateMany({
      where: { id: { in: ids } },
      data: { status: "published", publishedAt: new Date() },
    });
  } else if (action === "archive") {
    await prisma.article.updateMany({
      where: { id: { in: ids } },
      data: { status: "archived" },
    });
  } else if (action === "delete") {
    await prisma.article.deleteMany({
      where: { id: { in: ids } },
    });
  }

  return NextResponse.json({ success: true });
}
