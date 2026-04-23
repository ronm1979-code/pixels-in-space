"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Check, Trash2 } from "lucide-react";

export function MessageActions({ id, isRead }: { id: string; isRead: boolean }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  async function toggleRead() {
    await fetch(`/api/admin/messages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: !isRead }),
    });
    startTransition(() => router.refresh());
  }

  async function remove() {
    if (!confirm("Delete this message?")) return;
    await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
    startTransition(() => router.refresh());
  }

  return (
    <div className="flex flex-shrink-0 gap-1">
      <button
        onClick={toggleRead}
        disabled={pending}
        title={isRead ? "Mark as unread" : "Mark as read"}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(139,92,246,0.25)] bg-[rgba(7,3,26,0.6)] text-slate-400 hover:border-purple-400/70 hover:text-purple-300 disabled:opacity-50"
      >
        <Check className="h-4 w-4" />
      </button>
      <button
        onClick={remove}
        disabled={pending}
        title="Delete"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(139,92,246,0.25)] bg-[rgba(7,3,26,0.6)] text-slate-400 hover:border-red-400/70 hover:text-red-400 disabled:opacity-50"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
