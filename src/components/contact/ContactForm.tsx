"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const CATEGORIES = [
  { value: "general", label: "General" },
  { value: "press", label: "Press / Review Codes" },
  { value: "advertising", label: "Advertising / Partnership" },
  { value: "tip", label: "News Tip" },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("general");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, category, subject, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Failed to send");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="dark-card flex flex-col items-center gap-3 rounded-xl p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-400" />
        <h2 className="font-[family-name:var(--font-gaming)] text-xl font-bold text-white">
          Message Sent
        </h2>
        <p className="max-w-md text-sm text-slate-400">
          Thanks for reaching out. We&rsquo;ve received your note and will reply
          to <span className="text-purple-300">{email}</span> as soon as we can.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setCategory("general");
          }}
          className="mt-2 font-[family-name:var(--font-gaming)] text-xs font-semibold uppercase tracking-wider text-purple-300 transition-colors hover:text-purple-200"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="dark-card space-y-4 rounded-xl p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name" required>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={80}
            className="dark-input"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={120}
            className="dark-input"
          />
        </Field>
      </div>

      <Field label="Category" required>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="dark-input"
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value} className="bg-[#0f0630]">
              {c.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Subject" required>
        <input
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          maxLength={200}
          className="dark-input"
        />
      </Field>

      <Field label="Message" required>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={7}
          maxLength={5000}
          className="dark-input resize-none"
        />
        <p className="mt-1 text-right text-xs text-slate-500">{message.length}/5000</p>
      </Field>

      {error && (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 px-6 py-2.5 font-[family-name:var(--font-gaming)] text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-purple-500/50 disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-[family-name:var(--font-gaming)] text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
        {label}
        {required && <span className="ml-1 text-purple-400">*</span>}
      </span>
      {children}
    </label>
  );
}
