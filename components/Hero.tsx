"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Clinical-grade <span className="gradient-text">medical annotation</span> at scale.
            </h1>
            <p className="mt-5 text-slate-300 text-lg">
              X-rays, MRI, CT, ultrasound, pathology & ECG — annotated by licensed doctors and radiologists,
              reviewed through multi-layer QA, and delivered in your preferred formats.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">Get a quote</Link>
              <Link href="/services/x-rays" className="btn btn-ghost">Explore services</Link>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              HIPAA-aware · PIPEDA-conscious · GDPR-aligned · BAAs available
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card p-4 md:p-6">
              <img src="/images/main.webp" alt="Medical annotation preview" className="rounded-xl w-full h-auto" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="card p-3">
                  <div className="text-2xl font-bold">99.2%</div>
                  <div className="text-xs text-slate-400">QA pass rate</div>
                </div>
                <div className="card p-3">
                  <div className="text-2xl font-bold">&lt;24h</div>
                  <div className="text-xs text-slate-400">Onrush pilot</div>
                </div>
                <div className="card p-3">
                  <div className="text-2xl font-bold">DICOM</div>
                  <div className="text-xs text-slate-400">Native support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
