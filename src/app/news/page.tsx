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
export const revalidate = 300;

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
      <section className="relative overflow-hidden bg-gray-900">
        {heroImage?.imageUrl && (
          <Image
            src={heroImage.imageUrl}
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-bg-body" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Gaming News</h1>
          <p className="mt-1 text-white/60">
            The latest stories from the gaming world
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
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
          <div className="rounded-xl border border-border bg-white py-20 text-center shadow-sm">
            <p className="text-text-muted">No articles in this category yet.</p>
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
          ? "border-primary/30 bg-primary/5 text-primary"
          : "border-border bg-white text-text-muted hover:border-primary/20 hover:text-text-secondary"
      }`}
    >
      {children}
    </Link>
  );
}
