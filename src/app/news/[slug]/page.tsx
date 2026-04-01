import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Comments } from "@/components/ui/Comments";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await prisma.article.findUnique({ where: { slug } });
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary ?? undefined,
    openGraph: {
      title: article.title,
      description: article.summary ?? undefined,
      images: article.imageUrl ? [article.imageUrl] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug },
    include: { game: true },
  });

  if (!article) notFound();

  const relatedArticles = await prisma.article.findMany({
    where: {
      status: "published",
      id: { not: article.id },
      OR: [
        ...(article.gameId ? [{ gameId: article.gameId }] : []),
        { category: article.category },
      ],
    },
    orderBy: { publishedAt: "desc" },
    take: 4,
  });

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 lg:px-0">
        {/* Article header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <Badge variant={article.category}>{article.category}</Badge>
            <span className="text-sm text-text-muted">
              {formatDate(article.publishedAt ?? article.createdAt)}
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            {article.title}
          </h1>

          {article.summary && (
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              {article.summary}
            </p>
          )}
        </div>

        {/* Hero image */}
        {article.imageUrl && (
          <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article content */}
        <article
          className="prose-game mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Game link */}
        {article.game && (
          <div className="mb-12 rounded-xl border border-border bg-white shadow-sm p-5">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Related Game
            </p>
            <Link
              href={`/games/${article.game.slug}`}
              className="text-lg font-semibold text-primary hover:underline"
            >
              {article.game.title}
            </Link>
          </div>
        )}

        {/* Comments */}
        <Comments articleId={article.id} />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="border-t border-border pt-10">
            <h2 className="mb-5 text-xl font-bold">More Stories</h2>
            <div className="grid gap-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/news/${related.slug}`}
                  className="group rounded-xl border border-border bg-white shadow-sm p-4 transition-all hover:border-primary/20 hover:bg-purple-50/50"
                >
                  <h3 className="font-medium transition-colors group-hover:text-primary">
                    {related.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {formatDate(related.publishedAt ?? related.createdAt)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
