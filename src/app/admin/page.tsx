import { prisma } from "@/lib/prisma";
import { Newspaper, Star, Gamepad2, Activity } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [
    articleCount,
    draftArticles,
    reviewCount,
    draftReviews,
    gameCount,
    recentRuns,
  ] = await Promise.all([
    prisma.article.count(),
    prisma.article.count({ where: { status: "draft" } }),
    prisma.review.count(),
    prisma.review.count({ where: { status: "draft" } }),
    prisma.game.count(),
    prisma.pipelineRun.findMany({
      orderBy: { startedAt: "desc" },
      take: 5,
    }),
  ]);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Newspaper className="h-5 w-5" />}
          label="Articles"
          value={articleCount}
          sub={`${draftArticles} drafts`}
        />
        <StatCard
          icon={<Star className="h-5 w-5" />}
          label="Reviews"
          value={reviewCount}
          sub={`${draftReviews} drafts`}
        />
        <StatCard
          icon={<Gamepad2 className="h-5 w-5" />}
          label="Games"
          value={gameCount}
        />
        <StatCard
          icon={<Activity className="h-5 w-5" />}
          label="Pipeline Runs"
          value={recentRuns.length}
          sub="last 5"
        />
      </div>

      <h2 className="mb-4 text-xl font-bold">Recent Pipeline Runs</h2>
      {recentRuns.length === 0 ? (
        <p className="text-text-secondary">No pipeline runs yet.</p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-text-muted">
              <tr>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Articles</th>
                <th className="px-4 py-3 text-left">Reviews</th>
                <th className="px-4 py-3 text-left">Started</th>
              </tr>
            </thead>
            <tbody>
              {recentRuns.map((run) => (
                <tr key={run.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{run.type}</td>
                  <td className="px-4 py-3">
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
                  </td>
                  <td className="px-4 py-3">
                    {run.articlesNew}/{run.articlesFound}
                  </td>
                  <td className="px-4 py-3">{run.reviewsGenerated}</td>
                  <td className="px-4 py-3 text-text-muted">
                    {run.startedAt.toLocaleString()}
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

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <div className="mb-2 flex items-center gap-2 text-text-muted">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <p className="text-3xl font-bold">{value}</p>
      {sub && <p className="mt-1 text-sm text-text-muted">{sub}</p>}
    </div>
  );
}
