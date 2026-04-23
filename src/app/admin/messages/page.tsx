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
  general: "bg-slate-500/20 text-slate-200 border-slate-500/40",
  press: "bg-blue-500/20 text-blue-200 border-blue-500/40",
  advertising: "bg-amber-500/20 text-amber-200 border-amber-500/40",
  tip: "bg-purple-500/20 text-purple-200 border-purple-500/40",
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
          <h1 className="font-[family-name:var(--font-gaming)] text-2xl font-black uppercase tracking-wider text-white">
            Messages
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Contact form submissions from readers
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href="/admin/messages"
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
              !showRead
                ? "border-purple-500/60 bg-purple-500/20 text-purple-200"
                : "border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] text-slate-400 hover:border-purple-500/40 hover:text-white"
            }`}
          >
            Unread ({unreadCount})
          </a>
          <a
            href="/admin/messages?filter=all"
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
              showRead
                ? "border-purple-500/60 bg-purple-500/20 text-purple-200"
                : "border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] text-slate-400 hover:border-purple-500/40 hover:text-white"
            }`}
          >
            All
          </a>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="dark-card rounded-xl py-16 text-center">
          <Mail className="mx-auto mb-3 h-10 w-10 text-slate-500" />
          <p className="text-slate-400">
            {showRead ? "No messages yet." : "No unread messages."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`rounded-xl border p-5 backdrop-blur-md ${
                msg.read
                  ? "border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)]"
                  : "border-purple-400/40 bg-purple-500/10 shadow-lg shadow-purple-900/30"
              }`}
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${CATEGORY_COLORS[msg.category] ?? CATEGORY_COLORS.general}`}>
                      {CATEGORY_LABELS[msg.category] ?? msg.category}
                    </span>
                    {!msg.read && (
                      <span className="flex h-2 w-2 rounded-full bg-pink-400 shadow-sm shadow-pink-400/50" />
                    )}
                    <h3 className="font-[family-name:var(--font-gaming)] font-bold text-white">{msg.subject}</h3>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-400">
                    From <strong className="text-slate-200">{msg.name}</strong>{" "}
                    <a href={`mailto:${msg.email}`} className="text-purple-300 hover:text-purple-200 hover:underline">
                      &lt;{msg.email}&gt;
                    </a>{" "}
                    · {formatDate(msg.createdAt)}
                  </p>
                </div>
                <MessageActions id={msg.id} isRead={msg.read} />
              </div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200">
                {msg.message}
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-purple-500/30 hover:shadow-purple-500/50"
                >
                  <Mail className="h-3 w-3" />
                  Reply via Email
                </a>
                {msg.read && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/15 px-3 py-1.5 text-xs font-medium text-emerald-300">
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
