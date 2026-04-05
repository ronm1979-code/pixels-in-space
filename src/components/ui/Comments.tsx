"use client";

import { useState, useEffect, useCallback } from "react";

interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: string;
}

interface CommentsProps {
  articleId?: string;
  reviewId?: string;
}

const AVATAR_COLORS = [
  "bg-purple-500",
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-pink-500",
];

function getAvatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function timeAgo(dateStr: string) {
  const seconds = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / 1000
  );
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1)
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
  }
  return "just now";
}

export function Comments({ articleId, reviewId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fetchComments = useCallback(async () => {
    const param = articleId
      ? `articleId=${articleId}`
      : `reviewId=${reviewId}`;
    const res = await fetch(`/api/comments?${param}`);
    if (res.ok) {
      const data = await res.json();
      setComments(data);
    }
    setLoading(false);
  }, [articleId, reviewId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !content.trim()) {
      setError("Please fill in both fields.");
      return;
    }
    if (name.trim().length > 50) {
      setError("Name must be 50 characters or fewer.");
      return;
    }
    if (content.trim().length > 1000) {
      setError("Comment must be 1000 characters or fewer.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          content: content.trim(),
          ...(articleId ? { articleId } : { reviewId }),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to post comment.");
        return;
      }

      setContent("");
      await fetchComments();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="border-t border-border pt-10">
      <h2 className="mb-6 font-[family-name:var(--font-gaming)] text-lg font-bold uppercase tracking-wider">
        Comments{" "}
        {comments.length > 0 && (
          <span className="text-base font-normal text-text-muted">
            ({comments.length})
          </span>
        )}
      </h2>

      {/* Comment form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 rounded-xl border border-border bg-white p-5 shadow-sm"
      >
        <h3 className="mb-4 text-sm font-semibold text-text-secondary">
          Leave a comment
        </h3>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            className="w-full rounded-lg border border-border bg-gray-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary/40 focus:bg-white"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Write your comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={1000}
            rows={4}
            className="w-full resize-none rounded-lg border border-border bg-gray-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary/40 focus:bg-white"
          />
          <p className="mt-1 text-right text-xs text-text-muted">
            {content.length}/1000
          </p>
        </div>
        {error && (
          <p className="mb-3 text-sm text-red-500">{error}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          {submitting ? "Posting..." : "Post Comment"}
        </button>
      </form>

      {/* Comments list */}
      {loading ? (
        <p className="text-sm text-text-muted">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="text-sm text-text-muted">
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-xl border border-border bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${getAvatarColor(comment.name)}`}
                >
                  {comment.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold">{comment.name}</p>
                  <p className="text-xs text-text-muted">
                    {timeAgo(comment.createdAt)}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
