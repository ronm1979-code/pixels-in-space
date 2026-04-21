import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { ReadTime } from "@/components/ui/ReadTime";
import { ShareButtons } from "@/components/ui/ShareButtons";
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    image: article.imageUrl ?? undefined,
    datePublished: (article.publishedAt ?? article.createdAt).toISOString(),
    dateModified: article.updatedAt.toISOString(),
    publisher: {
      "@type": "Organization",
      name: "Pixels in Space",
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 lg:px-0">
        {/* Article header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge variant={article.category}>{article.category}</Badge>
            <span className="text-sm text-slate-400">
              {formatDate(article.publishedAt ?? article.createdAt)}
            </span>
            <ReadTime content={article.content} />
            <div className="ml-auto">
              <ShareButtons title={article.title} slug={article.slug} type="news" />
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-gaming)] text-2xl font-bold leading-tight text-white md:text-3xl">
            {article.title}
          </h1>

          {article.summary && (
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
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
          <div className="dark-card mb-12 rounded-xl p-5">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Related Game
            </p>
            <Link
              href={`/games/${article.game.slug}`}
              className="font-[family-name:var(--font-gaming)] text-lg font-bold text-purple-300 hover:text-purple-200 hover:underline"
            >
              {article.game.title}
            </Link>
          </div>
        )}

        {/* Comments */}
        <Comments articleId={article.id} />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="border-t border-[rgba(139,92,246,0.18)] pt-10">
            <h2 className="mb-5 flex items-center gap-3 font-[family-name:var(--font-gaming)] text-xl font-black uppercase tracking-[0.15em] text-white">
              <span className="inline-block h-6 w-1.5 rounded bg-gradient-to-b from-[#22d3ee] to-[#8b5cf6]" />
              More Stories
            </h2>
            <div className="grid gap-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/news/${related.slug}`}
                  className="dark-card group rounded-xl p-4 transition-all hover:border-purple-500/55"
                >
                  <h3 className="font-medium text-white transition-colors group-hover:text-purple-300">
                    {related.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
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
