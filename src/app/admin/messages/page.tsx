import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { MessageActions } from "./MessageActions";
import { Mail, CheckCircle2 } from "lucide-react";

export const dynamic = "force-dynamic";

const CATEGORY_LABELS: Record<string, string> = {
  general: "General",
  press: "Press",
  advertising: "Advertising",
  tip: "Tip",
};

const CATEGORY_COLORS: Record<string, string> = {
  general: "bg-gray-100 text-gray-700",
  press: "bg-blue-100 text-blue-700",
  advertising: "bg-amber-100 text-amber-700",
  tip: "bg-purple-100 text-purple-700",
};

export default async function AdminMessagesPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  const showRead = params.filter === "all";

  const messages = await prisma.contactMessage.findMany({
    where: showRead ? {} : { read: false },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  const unreadCount = await prisma.contactMessage.count({ where: { read: false } });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Messages</h1>
          <p className="mt-1 text-sm text-gray-500">
            Contact form submissions from readers
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href="/admin/messages"
            className={`rounded-lg border px-3 py-1.5 text-sm ${
              !showRead
                ? "border-accent bg-accent text-white"
                : "border-gray-300 bg-white text-gray-600 hover:border-accent"
            }`}
          >
            Unread ({unreadCount})
          </a>
          <a
            href="/admin/messages?filter=all"
            className={`rounded-lg border px-3 py-1.5 text-sm ${
              showRead
                ? "border-accent bg-accent text-white"
                : "border-gray-300 bg-white text-gray-600 hover:border-accent"
            }`}
          >
            All
          </a>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white py-16 text-center shadow-sm">
          <Mail className="mx-auto mb-3 h-10 w-10 text-gray-400" />
          <p className="text-gray-500">
            {showRead ? "No messages yet." : "No unread messages."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`rounded-xl border p-5 shadow-sm ${
                msg.read ? "border-gray-200 bg-white" : "border-purple-200 bg-purple-50/30"
              }`}
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${CATEGORY_COLORS[msg.category] ?? CATEGORY_COLORS.general}`}>
                      {CATEGORY_LABELS[msg.category] ?? msg.category}
                    </span>
                    {!msg.read && (
                      <span className="flex h-2 w-2 rounded-full bg-pink-500" />
                    )}
                    <h3 className="font-semibold">{msg.subject}</h3>
                  </div>
                  <p className="mt-1.5 text-sm text-gray-600">
                    From <strong>{msg.name}</strong>{" "}
                    <a href={`mailto:${msg.email}`} className="text-accent hover:underline">
                      &lt;{msg.email}&gt;
                    </a>{" "}
                    · {formatDate(msg.createdAt)}
                  </p>
                </div>
                <MessageActions id={msg.id} isRead={msg.read} />
              </div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                {msg.message}
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white hover:bg-accent/90"
                >
                  <Mail className="h-3 w-3" />
                  Reply via Email
                </a>
                {msg.read && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                    <CheckCircle2 className="h-3 w-3" />
                    Read
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
