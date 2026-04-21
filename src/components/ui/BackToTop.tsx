"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-to-top flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/40 bg-[rgba(26,10,58,0.85)] text-purple-300 shadow-xl shadow-purple-900/50 backdrop-blur-md transition-all hover:border-purple-400/70 hover:bg-purple-500/30 hover:text-white ${visible ? "visible" : ""}`}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
