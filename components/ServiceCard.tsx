import Link from "next/link";
export default function ServiceCard({ href, title, desc }:{ href:string; title:string; desc:string }){
  return (
    <Link href={href} className="card p-6 hover:shadow-xl hover:-translate-y-1 transition will-change-transform">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-slate-300 text-sm">{desc}</p>
      <div className="mt-4 text-brand-300 text-sm">Learn more →</div>
    </Link>
  );
}
