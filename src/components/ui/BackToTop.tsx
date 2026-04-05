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
      className={`back-to-top flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white shadow-lg transition-colors hover:bg-primary hover:text-white ${visible ? "visible" : ""}`}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
