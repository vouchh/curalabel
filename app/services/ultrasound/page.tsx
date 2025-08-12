import Link from "next/link";

export const metadata = {
  title: "Ultrasound Annotation – CuraLabel",
};

export default function Page(){return (
  <div>
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <img src="/images/ultra.jpg" alt="Ultrasound Annotation" className="rounded-2xl border border-slate-800" />
        <div>
          <h1 className="text-4xl font-extrabold">Ultrasound Annotation</h1>
          <p className="mt-3 text-slate-300">Fetal biometry, cardiac views, and anatomical landmarks in video and still frames.</p>
          <div className="mt-5 flex gap-3">
            <Link href="/contact" className="btn btn-primary">Get a quote</Link>
            <Link href="/" className="btn btn-ghost">Back to home</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-slate-900/40">
      <div className="container">
        <h2 className="text-2xl font-bold">What we annotate</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-slate-300">
          <li>• B-mode and Doppler</li>
          <li>• Frame-level labeling</li>
          <li>• Key landmarks & measurements</li>
          <li>• Echo view classification</li>
          <li>• OB ultrasound planes</li>
        </ul>
      </div>
    </section>

    <section className="section">
      <div className="container grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="font-semibold">Guidelines & Ontology</div>
          <p className="mt-2 text-slate-300">We co-author detailed instructions, example galleries, and edge-case rules.</p>
        </div>
        <div className="card p-6">
          <div className="font-semibold">QA & Consensus</div>
          <p className="mt-2 text-slate-300">Dual review, inter-rater agreement tracking, escalation to clinicians.</p>
        </div>
        <div className="card p-6">
          <div className="font-semibold">Exports</div>
          <p className="mt-2 text-slate-300">DICOM, NIfTI, COCO, YOLO, CSV, JSON — or your custom schema.</p>
        </div>
      </div>
    </section>

    <section className="section bg-slate-900/40">
      <div className="container">
        <h3 className="text-2xl font-bold">Workflow</h3>
        <ol className="mt-4 grid gap-3 text-slate-300">
          <li>1) Secure ingest & PHI minimization</li>
          <li>2) Pilot batch & calibration</li>
          <li>3) Production with SLAs</li>
          <li>4) Continuous QA & weekly reporting</li>
          <li>5) Delivery & acceptance testing</li>
        </ol>
      </div>
    </section>

    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <img src="/images/ultra2.png" alt="Deliverables" className="rounded-2xl border border-slate-800" />
        <div>
          <h3 className="text-2xl font-bold">Deliverables</h3>
          <ul className="mt-3 grid gap-2 text-slate-300">
            <li>• Labels + previews</li>
            <li>• QA report & acceptance logs</li>
            <li>• Guideline docs & ontology JSON</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section bg-slate-900/40">
      <div className="container text-center">
        <h3 className="text-2xl font-bold">Get exact pricing</h3>
        <p className="mt-2 text-slate-300">Pricing depends on classes, masks, sequences, and QA tiers.</p>
        <Link href="/contact" className="btn btn-primary mt-4">Request a quote →</Link>
      </div>
    </section>
  </div>
)};
