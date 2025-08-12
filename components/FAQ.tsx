"use client";
import { useState } from "react";

export default function FAQ({ items }:{ items: {q:string; a:string}[] }){
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, idx) => (
        <div key={idx} className="card">
          <button onClick={() => setOpen(open===idx?null:idx)} className="w-full text-left px-4 py-3 font-medium">
            {it.q}
          </button>
          {open===idx && <div className="px-4 pb-4 text-slate-300">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}
