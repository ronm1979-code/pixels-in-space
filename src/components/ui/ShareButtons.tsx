"use client";

import { useState } from "react";
import { Share2, MessageCircle, Link2, Check } from "lucide-react";

export function ShareButtons({ title, slug, type = "news" }: { title: string; slug: string; type?: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://pixels-in-space.vercel.app/${type}/${slug}`;

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareReddit = () => {
    window.open(
      `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-400">Share</span>
      <button
        onClick={shareTwitter}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] text-slate-400 transition-colors hover:border-purple-500/55 hover:text-purple-300"
        title="Share on X"
      >
        <span className="text-xs font-bold">𝕏</span>
      </button>
      <button
        onClick={shareReddit}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] text-slate-400 transition-colors hover:border-purple-500/55 hover:text-purple-300"
        title="Share on Reddit"
      >
        <Share2 className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={copyLink}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(139,92,246,0.18)] bg-[rgba(26,10,58,0.55)] text-slate-400 transition-colors hover:border-purple-500/55 hover:text-purple-300"
        title="Copy link"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Link2 className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
