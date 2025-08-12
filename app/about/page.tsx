export const metadata = { title: "About – CuraLabel" };
export default function Page(){
  return (
    <div>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">About CuraLabel</h1>
            <p className="mt-3 text-slate-300">
              We’re a clinical annotation partner built by engineers and physicians. Our mission is to
              accelerate safe, reliable medical AI by producing trustworthy labels with measurable quality.
            </p>
            <ul className="mt-4 grid gap-2 text-slate-300">
              <li>• Clinician-led guideline creation</li>
              <li>• Multi-layer QA with consensus</li>
              <li>• Security-first operations</li>
              <li>• Transparent reporting & SLAs</li>
            </ul>
          </div>
          <img src="/images/team.png" alt="About" className="rounded-2xl border border-slate-800" />
        </div>
      </section>

      <section className="section bg-slate-900/40">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {h:"Clinical Expertise", d:"Doctors & radiologists staff each project for edge-case arbitration."},
            {h:"Operational Scale", d:"Parallelized teams deliver large batches with predictable SLAs."},
            {h:"Compliance", d:"HIPAA-aware, PIPEDA-conscious, GDPR-aligned workflows; BAAs available."},
          ].map((b,i)=> (
            <div key={i} className="card p-6">
              <div className="font-semibold">{b.h}</div>
              <p className="mt-2 text-slate-300">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
