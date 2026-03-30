"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  sourceName: string | null;
  status: string;
  createdAt: string;
  publishedAt: string | null;
  game: { title: string } | null;
}

export default function AdminArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, [page, statusFilter]);

  async function fetchArticles() {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page) });
    if (statusFilter) params.set("status", statusFilter);

    const res = await fetch(`/api/admin/articles?${params}`);
    const data = await res.json();
    setArticles(data.articles);
    setTotal(data.total);
    setLoading(false);
  }

  async function bulkAction(action: string) {
    if (selected.size === 0) return;
    await fetch("/api/admin/articles", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: [...selected], action }),
    });
    setSelected(new Set());
    fetchArticles();
  }

  const toggleSelect = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const toggleAll = () => {
    if (selected.size === articles.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(articles.map((a) => a.id)));
    }
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Articles ({total})</h1>
        <div className="flex gap-2">
          {selected.size > 0 && (
            <>
              <button
                onClick={() => bulkAction("publish")}
                className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
              >
                Publish ({selected.size})
              </button>
              <button
                onClick={() => bulkAction("archive")}
                className="rounded-lg bg-yellow-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-yellow-700"
              >
                Archive
              </button>
              <button
                onClick={() => bulkAction("delete")}
                className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mb-4 flex gap-2">
        {["", "draft", "published", "archived"].map((s) => (
          <button
            key={s}
            onClick={() => {
              setStatusFilter(s);
              setPage(1);
            }}
            className={`rounded-lg px-3 py-1.5 text-sm ${
              statusFilter === s
                ? "bg-primary text-white"
                : "bg-bg-card text-text-secondary hover:bg-bg-card-hover"
            }`}
          >
            {s || "All"}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-text-secondary">Loading...</p>
      ) : articles.length === 0 ? (
        <p className="text-text-secondary">No articles found.</p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-bg-surface text-text-muted">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    onChange={toggleAll}
                    checked={selected.size === articles.length}
                  />
                </th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Source</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="border-t border-border">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.has(article.id)}
                      onChange={() => toggleSelect(article.id)}
                    />
                  </td>
                  <td className="max-w-xs truncate px-4 py-3 font-medium">
                    {article.title}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={article.category}>{article.category}</Badge>
                  </td>
                  <td className="px-4 py-3 text-text-muted">
                    {article.sourceName ?? "-"}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={article.status}>{article.status}</Badge>
                  </td>
                  <td className="px-4 py-3 text-text-muted">
                    {formatDate(article.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="rounded-lg bg-bg-card px-3 py-1.5 text-sm disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-3 py-1.5 text-sm text-text-muted">
          Page {page}
        </span>
        <button
          disabled={articles.length < 20}
          onClick={() => setPage(page + 1)}
          className="rounded-lg bg-bg-card px-3 py-1.5 text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
