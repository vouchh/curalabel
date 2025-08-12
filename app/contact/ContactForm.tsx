// app/contact/ContactForm.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    if (res.ok) {
      setDone(true);
      form.reset();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data?.error || "Something went wrong. Please try again.");
    }
  }

  if (done) {
    return (
      <div className="card p-6">
        <h2 className="text-xl font-semibold">Thanks — we’ve got your message!</h2>
        <p className="mt-2 text-slate-300">We’ll reply within 1–2 business days.</p>
        <button className="btn btn-ghost mt-4" onClick={() => setDone(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 grid gap-4">
      <input name="name" required placeholder="Name"
        className="px-4 py-3 rounded-xl bg-white/5 border border-slate-800" />
      <input name="email" type="email" required placeholder="Work email"
        className="px-4 py-3 rounded-xl bg-white/5 border border-slate-800" />
      <input name="company" placeholder="Company"
        className="px-4 py-3 rounded-xl bg-white/5 border border-slate-800" />
      <textarea name="details" rows={5} placeholder="Project details"
        className="px-4 py-3 rounded-xl bg-white/5 border border-slate-800" />

      {error && <div className="text-sm text-red-400">{error}</div>}

      <button className="btn btn-primary w-max disabled:opacity-60"
              type="submit" disabled={loading}>
        {loading ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
