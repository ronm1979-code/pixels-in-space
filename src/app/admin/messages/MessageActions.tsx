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
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 hover:border-accent hover:text-accent disabled:opacity-50"
      >
        <Check className="h-4 w-4" />
      </button>
      <button
        onClick={remove}
        disabled={pending}
        title="Delete"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 hover:border-red-400 hover:text-red-500 disabled:opacity-50"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
