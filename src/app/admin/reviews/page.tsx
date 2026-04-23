"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { ScoreBadge } from "@/components/ui/ScoreBadge";

interface Review {
  id: string;
  title: string;
  score: number;
  status: string;
  createdAt: string;
  game: { title: string; coverImage: string | null };
}

export default function AdminReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, [page]);

  async function fetchReviews() {
    setLoading(true);
    const res = await fetch(`/api/admin/reviews?page=${page}`);
    const data = await res.json();
    setReviews(data.reviews);
    setTotal(data.total);
    setLoading(false);
  }

  async function bulkAction(action: string) {
    if (selected.size === 0) return;
    await fetch("/api/admin/reviews", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: [...selected], action }),
    });
    setSelected(new Set());
    fetchReviews();
  }

  const toggleSelect = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reviews ({total})</h1>
        {selected.size > 0 && (
          <div className="flex gap-2">
            <button
              onClick={() => bulkAction("publish")}
              className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
            >
              Publish ({selected.size})
            </button>
            <button
              onClick={() => bulkAction("delete")}
              className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {loading ? (
        <p className="text-slate-300">Loading...</p>
      ) : reviews.length === 0 ? (
        <p className="text-slate-300">No reviews found.</p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-[rgba(139,92,246,0.18)]">
          <table className="w-full text-sm">
            <thead className="bg-[rgba(7,3,26,0.4)] text-slate-400">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    onChange={() => {
                      if (selected.size === reviews.length)
                        setSelected(new Set());
                      else setSelected(new Set(reviews.map((r) => r.id)));
                    }}
                    checked={selected.size === reviews.length && reviews.length > 0}
                  />
                </th>
                <th className="px-4 py-3 text-left">Game</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Score</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id} className="border-t border-[rgba(139,92,246,0.18)]">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.has(review.id)}
                      onChange={() => toggleSelect(review.id)}
                    />
                  </td>
                  <td className="px-4 py-3 font-medium">
                    {review.game.title}
                  </td>
                  <td className="max-w-xs truncate px-4 py-3">
                    {review.title}
                  </td>
                  <td className="px-4 py-3">
                    <ScoreBadge score={review.score} size="sm" />
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={review.status}>{review.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
