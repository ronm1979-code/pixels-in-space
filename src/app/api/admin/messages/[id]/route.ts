import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const data: { read?: boolean } = {};
  if (typeof body.read === "boolean") data.read = body.read;

  await prisma.contactMessage.update({ where: { id }, data });
  return NextResponse.json({ success: true });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.contactMessage.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
