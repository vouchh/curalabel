import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import StatBlock from "@/components/StatBlock";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Page(){
  return (
    <div>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust bar */}
      <section className="section">
        <div className="container">
          <div className="text-center text-slate-400 text-sm mb-6">
            Trusted by healthcare innovators
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 opacity-80">
            {[
              { name: "mednova", img: "/images/meta.png" },
              { name: "radflow", img: "/images/medai.png" },
              { name: "clinix", img: "/images/nordiscan.png" },
              { name: "biotex", img: "/images/anthropic.png" },
              { name: "visionai", img: "/images/topvision.png" }
            ].map((logo, i) => (
              <div key={i} className="card flex items-center justify-center p-4">
                <img
                  src={logo.img}
                  alt={`${logo.name} logo`}
                  className="h-8 opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services overview */}
      <section className="section bg-slate-900/40">
        <div className="container">
          <h2 className="text-3xl font-bold">Clinical modalities we annotate</h2>
          <p className="mt-2 text-slate-300">Flexible ontology, guideline creation, and conversion to your formats.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <ServiceCard href="/services/x-rays" title="X-rays" desc="Bounding boxes, keypoints, landmarks, fractures, pneumothorax, consolidation & more." />
            <ServiceCard href="/services/mri" title="MRI" desc="Segmentation (2D/3D), volumetrics, tumor delineation, multi-sequence protocols (T1/T2/FLAIR/DWI)." />
            <ServiceCard href="/services/ct-scan" title="CT-Scan" desc="Organs & lesions, 3D masks, pulmonary nodules, liver/lung segmentation, HU thresholds." />
            <ServiceCard href="/services/ultrasound" title="Ultrasound" desc="Frames & sequences, fetal biometry, cardiac views, Doppler measurements." />
            <ServiceCard href="/services/histopathology" title="Histopathology" desc="WSI patching, nuclei/cell/region masks, tumor grading with pathologist oversight." />
            <ServiceCard href="/services/ecg" title="ECG/EKG" desc="Beat detection, rhythm classification, interval labeling, noise curation." />
            <ServiceCard href="/services/deidentification" title="De-identification" desc="PHI redaction for DICOM & reports (OCR/NLP), audit logs & attestations." />
            <ServiceCard href="/services/qa" title="QA & Audit" desc="Independent reviewer tiers, inter-rater agreement, consensus workflows." />
            <ServiceCard href="/services/raw-data" title="Raw data (no annotation)" desc="Secure ingest, checksum verification, structured data packaging." />
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {t: "1) Scope & ontology", d: "We align on clinical objectives, guidelines, class lists, and nomenclature."},
            {t: "2) Pilot & calibrate", d: "Run a small batch, measure inter-rater agreement, and finalize QA rubric."},
            {t: "3) Scale & deliver", d: "Parallelized teams produce at SLA. Exports in DICOM, NIfTI, COCO, YOLO, CSV."},
          ].map((s, i) => (
            <div key={i} className="card p-6">
              <div className="text-xl font-semibold">{s.t}</div>
              <p className="mt-2 text-slate-300">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Quality & compliance */}
      <section className="section bg-slate-900/40">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/compliance.webp" alt="Compliance" className="rounded-2xl border border-slate-800" />
          <div>
            <h3 className="text-2xl font-bold">Built for regulated environments</h3>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>• Dual-pass clinical review by senior clinicians</li>
              <li>• HIPAA-aware, PIPEDA-conscious, GDPR-aligned processes</li>
              <li>• PHI minimization, on-prem/VPC options, access logging</li>
              <li>• BAAs & DPAs available on request</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Stats */}
      <section className="section">
        <div className="container grid md:grid-cols-4 gap-5">
          <StatBlock value="150+" label="Clinicians in network" />
          <StatBlock value="20M+" label="Images curated" />
          <StatBlock value="99.2%" label="QA pass rate" />
          <StatBlock value="7 days" label="Typical pilot duration" />
        </div>
      </section>

      {/* 7. Medical expertise */}
      <section className="section bg-slate-900/40">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Doctors & radiologists on every project</h3>
            <p className="mt-2 text-slate-300">We staff licensed clinicians for guideline creation, edge-case arbitration, and clinical QA.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="card p-4"><div className="font-semibold">Radiology</div><div className="text-slate-400 text-sm">MSK · Neuro · Chest</div></div>
              <div className="card p-4"><div className="font-semibold">Pathology</div><div className="text-slate-400 text-sm">WSI · H&E · IHC</div></div>
              <div className="card p-4"><div className="font-semibold">Cardiology</div><div className="text-slate-400 text-sm">ECG · Echo</div></div>
              <div className="card p-4"><div className="font-semibold">OB/GYN</div><div className="text-slate-400 text-sm">Ultrasound</div></div>
            </div>
          </div>
          <img src="/images/doctors.jpg" alt="Clinician experts" className="rounded-2xl border border-slate-800" />
        </div>
      </section>

      {/* 8. Pricing preview */}
      <section className="section">
        <div className="container">
          <h3 className="text-2xl font-bold">Transparent pricing</h3>
          <p className="text-slate-300 mt-2">Per-study or per-label options, volume discounts, and dedicated teams for scale.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="card p-6">
              <div className="font-semibold">X-rays</div>
              <div className="mt-1 text-2xl font-extrabold">$1.20+</div>
              <div className="text-xs text-slate-400">per study (indicative)</div>
            </div>
            <div className="card p-6">
              <div className="font-semibold">MRI/CT</div>
              <div className="mt-1 text-2xl font-extrabold">$4.50+</div>
              <div className="text-xs text-slate-400">per study (indicative)</div>
            </div>
            <div className="card p-6">
              <div className="font-semibold">Ultrasound/ECG</div>
              <div className="mt-1 text-2xl font-extrabold">$2.00+</div>
              <div className="text-xs text-slate-400">per study (indicative)</div>
            </div>
          </div>
          <div className="mt-6 text-sm text-slate-400">Exact quotes depend on classes, masks, sequences, and QA tier.</div>
        </div>
      </section>

      {/* 9. Case studies */}
      <section className="section bg-slate-900/40">
        <div className="container grid md:grid-cols-3 gap-5">
          {[
            {
              img: "/images/case1.png",
              title: "Chest X-ray Nodule Detection",
              blurb: "Consensus QA cut false positives 27%, AUROC +6.2%."
            },
            {
              img: "/images/case2.png",
              title: "Brain MRI Tumor Segmentation",
              blurb: "Multi-rater masks + guideline v2 → Dice +8.9%."
            },
            {
              img: "/images/case3.png",
              title: "Echo View Classification",
              blurb: "Balanced dataset + hard negatives → Acc. +5.4%."
            }
          ].map((c, i) => (
            <div key={i} className="card p-6">
              <img src={c.img} alt={c.title} className="rounded-xl w-full" />
              <div className="mt-4 font-semibold">{c.title}</div>
              <p className="text-slate-300 text-sm mt-1">{c.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6">
          {[
            {n:"VP Research, MedAI", t:"CuraLabel delivered reliable masks faster than our in-house team."},
            {n:"CTO, Diagnostics Co.", t:"Their radiologists helped refine our guidelines and lifted model accuracy."}
          ].map((c,i)=>(
            <div key={i} className="card p-6">
              <p className="text-lg">“{c.t}”</p>
              <div className="mt-3 text-sm text-slate-400">— {c.n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="section bg-slate-900/40">
        <div className="container">
          <h3 className="text-2xl font-bold mb-4">Frequently asked questions</h3>
          <FAQ items={[
            { q: "Do clinicians annotate every study?", a: "Clinicians design guidelines and perform reviews; clinicians annotate complex studies, while trained annotators handle routine labels under supervision."},
            { q: "Can you work with DICOM and NIfTI?", a: "Yes. We ingest DICOM, NIfTI, NRRD, PNG/JPG, and output COCO, YOLO, CSV, or custom formats."},
            { q: "What’s the security model?", a: "Least-privilege access, encrypted-at-rest & in-transit, audit logs, VPC or on-prem options, BAAs/DPAs on request."},
          ]} />
        </div>
      </section>

      {/* 12. CTA */}
      <section className="section">
        <div className="container text-center card p-10">
          <h3 className="text-3xl font-extrabold">Ready to kick off a pilot?</h3>
          <p className="mt-2 text-slate-300">Send a sample and receive a calibrated plan within 48 hours.</p>
          <Link href="/contact" className="btn btn-primary mt-6">Start a pilot →</Link>
        </div>
      </section>
    </div>
  );
}
