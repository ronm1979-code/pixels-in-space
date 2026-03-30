import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { timeAgo } from "@/lib/utils";

interface NewsCardProps {
  slug: string;
  title: string;
  summary: string | null;
  imageUrl: string | null;
  category: string;
  sourceName: string | null;
  publishedAt: Date | null;
  createdAt: Date;
  featured?: boolean;
}

export function NewsCard({
  slug,
  title,
  summary,
  imageUrl,
  category,
  publishedAt,
  createdAt,
  featured,
}: NewsCardProps) {
  if (featured) {
    return (
      <Link href={`/news/${slug}`} className="group block">
        <article className="card-hover relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[21/9] bg-bg-card">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-primary/20 to-accent/20" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <Badge variant={category} className="mb-3">
                {category}
              </Badge>
              <h2 className="mb-2 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                {title}
              </h2>
              {summary && (
                <p className="mb-3 line-clamp-2 max-w-2xl text-sm text-text-secondary md:text-base">
                  {summary}
                </p>
              )}
              <span className="text-xs text-text-muted">
                {timeAgo(publishedAt ?? createdAt)}
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/news/${slug}`} className="group block">
      <article className="card-hover overflow-hidden rounded-xl bg-bg-card/50 border border-border/50">
        <div className="relative aspect-video overflow-hidden bg-bg-surface">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary/10 to-accent/10" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <div className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <Badge variant={category}>{category}</Badge>
            <span className="text-[11px] text-text-muted">
              {timeAgo(publishedAt ?? createdAt)}
            </span>
          </div>
          <h3 className="mb-2 line-clamp-2 text-[15px] font-semibold leading-snug transition-colors group-hover:text-primary-light">
            {title}
          </h3>
          {summary && (
            <p className="line-clamp-2 text-sm leading-relaxed text-text-muted">
              {summary}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
