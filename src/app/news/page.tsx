import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsCard } from "@/components/news/NewsCard";
import { Pagination } from "@/components/ui/Pagination";
import { ARTICLES_PER_PAGE, CATEGORIES } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Breaking gaming news, announcements, and stories from across the industry.",
};
export const dynamic = "force-dynamic";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));
  const category = params.category;

  const where = {
    status: "published" as const,
    ...(category ? { category } : {}),
  };

  const [articles, total, heroImage] = await Promise.all([
    prisma.article.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      skip: (page - 1) * ARTICLES_PER_PAGE,
      take: ARTICLES_PER_PAGE,
    }),
    prisma.article.count({ where }),
    prisma.article.findFirst({
      where: { status: "published", imageUrl: { not: null } },
      orderBy: { publishedAt: "desc" },
      select: { imageUrl: true },
    }),
  ]);

  const totalPages = Math.ceil(total / ARTICLES_PER_PAGE);

  return (
    <>
      <Header />

      {/* Page header with background image */}
      <section className="relative overflow-hidden">
        {heroImage?.imageUrl && (
          <Image
            src={heroImage.imageUrl}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07031a]/70 to-[#07031a]" />
        <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-10 lg:px-10">
          <h1 className="font-[family-name:var(--font-gaming)] text-3xl font-black uppercase tracking-wider text-white">Gaming News</h1>
          <p className="mt-1 text-slate-400">
            The latest stories from the gaming world
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-[1500px] px-5 py-6 lg:px-10">
        <div className="mb-6 flex flex-wrap gap-2">
          <FilterPill href="/news" active={!category}>
            All
          </FilterPill>
          {CATEGORIES.filter((c) => c !== "review").map((cat) => (
            <FilterPill
              key={cat}
              href={`/news?category=${cat}`}
              active={category === cat}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </FilterPill>
          ))}
        </div>

        {articles.length === 0 ? (
          <div className="dark-card rounded-xl py-20 text-center">
            <p className="text-slate-400">No articles in this category yet.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <NewsCard
                key={article.id}
                slug={article.slug}
                title={article.title}
                summary={article.summary}
                imageUrl={article.imageUrl}
                category={article.category}
                sourceName={article.sourceName}
                publishedAt={article.publishedAt}
                createdAt={article.createdAt}
              />
            ))}
          </div>
        )}

        <div className="mt-10">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            basePath={`/news${category ? `?category=${category}&` : ""}`}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

function FilterPill({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-lg border px-4 py-1.5 text-sm font-medium transition-all ${
        active
          ? "border-purple-500/50 bg-purple-500/15 text-purple-300"
          : "border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] text-slate-400 hover:border-purple-500/40 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
