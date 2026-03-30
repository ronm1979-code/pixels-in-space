"use client";

import { useEffect, useState } from "react";
import { parseJsonField } from "@/lib/utils";

interface PipelineRun {
  id: string;
  type: string;
  status: string;
  articlesFound: number;
  articlesNew: number;
  reviewsGenerated: number;
  errors: string;
  startedAt: string;
  completedAt: string | null;
}

interface Stats {
  articles: number;
  reviews: number;
  games: number;
}

export default function AdminPipeline() {
  const [runs, setRuns] = useState<PipelineRun[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [triggerLoading, setTriggerLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchStatus();
  }, []);

  async function fetchStatus() {
    const res = await fetch("/api/pipeline/status");
    const data = await res.json();
    setRuns(data.recentRuns);
    setStats(data.stats);
  }

  async function triggerPipeline(type: "collect" | "reviews") {
    setTriggerLoading(type);
    try {
      await fetch(`/api/pipeline/${type}`, {
        method: "POST",
        headers: { "x-pipeline-secret": "trigger-from-admin" },
      });
      await fetchStatus();
    } catch (err) {
      console.error("Trigger failed:", err);
    }
    setTriggerLoading(null);
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Pipeline</h1>

      {stats && (
        <div className="mb-6 flex gap-4 text-sm text-text-secondary">
          <span>Articles: {stats.articles}</span>
          <span>Reviews: {stats.reviews}</span>
          <span>Games: {stats.games}</span>
        </div>
      )}

      <div className="mb-8 flex gap-3">
        <button
          onClick={() => triggerPipeline("collect")}
          disabled={triggerLoading !== null}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-light disabled:opacity-50"
        >
          {triggerLoading === "collect"
            ? "Running..."
            : "Trigger Collection"}
        </button>
        <button
          onClick={() => triggerPipeline("reviews")}
          disabled={triggerLoading !== null}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-black hover:bg-accent-dim disabled:opacity-50"
        >
          {triggerLoading === "reviews"
            ? "Running..."
            : "Generate Reviews"}
        </button>
      </div>

      <h2 className="mb-4 text-xl font-bold">Run History</h2>
      {runs.length === 0 ? (
        <p className="text-text-secondary">No runs yet.</p>
      ) : (
        <div className="space-y-4">
          {runs.map((run) => {
            const errors = parseJsonField<string[]>(run.errors, []);
            return (
              <div
                key={run.id}
                className="rounded-xl border border-border bg-bg-card p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{run.type}</span>
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        run.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : run.status === "running"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {run.status}
                    </span>
                  </div>
                  <span className="text-sm text-text-muted">
                    {new Date(run.startedAt).toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 flex gap-4 text-sm text-text-secondary">
                  <span>
                    Articles: {run.articlesNew}/{run.articlesFound}
                  </span>
                  <span>Reviews: {run.reviewsGenerated}</span>
                </div>
                {errors.length > 0 && (
                  <div className="mt-3 rounded-lg bg-red-500/10 p-3">
                    <p className="mb-1 text-xs font-medium text-red-400">
                      Errors ({errors.length}):
                    </p>
                    <ul className="space-y-1 text-xs text-red-300">
                      {errors.slice(0, 5).map((err, i) => (
                        <li key={i}>{err}</li>
                      ))}
                      {errors.length > 5 && (
                        <li>...and {errors.length - 5} more</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
