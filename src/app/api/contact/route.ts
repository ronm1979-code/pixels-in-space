import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const CATEGORIES = ["general", "press", "advertising", "tip"];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const category = String(body.category ?? "general").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Validation
    if (!name || name.length < 2 || name.length > 80) {
      return NextResponse.json({ error: "Name must be 2–80 chars" }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }
    if (!CATEGORIES.includes(category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }
    if (!subject || subject.length < 3 || subject.length > 200) {
      return NextResponse.json({ error: "Subject must be 3–200 chars" }, { status: 400 });
    }
    if (!message || message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Message must be 10–5000 chars" }, { status: 400 });
    }

    await prisma.contactMessage.create({
      data: { name, email, category, subject, message },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact submission failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
