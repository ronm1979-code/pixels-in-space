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
      <h1 className="mb-6 font-[family-name:var(--font-gaming)] text-2xl font-black uppercase tracking-wider text-white">
        Dashboard
      </h1>

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

      <h2 className="mb-4 font-[family-name:var(--font-gaming)] text-xl font-black uppercase tracking-wider text-white">
        Recent Pipeline Runs
      </h2>
      {recentRuns.length === 0 ? (
        <p className="text-slate-400">No pipeline runs yet.</p>
      ) : (
        <div className="dark-card overflow-hidden rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-[rgba(7,3,26,0.4)] font-[family-name:var(--font-gaming)] text-[10px] uppercase tracking-wider text-slate-500">
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
                <tr key={run.id} className="border-t border-[rgba(139,92,246,0.1)]">
                  <td className="px-4 py-3 font-medium text-slate-200">{run.type}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        run.status === "completed"
                          ? "bg-emerald-500/20 text-emerald-300"
                          : run.status === "running"
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {run.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {run.articlesNew}/{run.articlesFound}
                  </td>
                  <td className="px-4 py-3 text-slate-300">{run.reviewsGenerated}</td>
                  <td className="px-4 py-3 text-slate-500">
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
    <div className="dark-card rounded-xl p-5">
      <div className="mb-2 flex items-center gap-2 text-slate-400">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <p className="font-[family-name:var(--font-gaming)] text-3xl font-black text-white">{value}</p>
      {sub && <p className="mt-1 text-sm text-slate-500">{sub}</p>}
    </div>
  );
}
