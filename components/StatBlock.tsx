export default function StatBlock({ value, label }:{ value:string; label:string }){
  return (
    <div className="text-center card p-6">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-slate-400 text-sm">{label}</div>
    </div>
  );
}
