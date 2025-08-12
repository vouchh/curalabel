import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "CuraLabel – Medical Annotation by Doctors & Radiologists",
  description:
    "CuraLabel provides HIPAA-aware, PIPEDA-conscious medical image annotation (X-ray, MRI, CT, ultrasound, histopathology, ECG) by licensed clinicians with rigorous QA.",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
            <div className="container flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
              <img 
                src="/images/logo-light.png" 
                alt="CuraLabel" 
                className="w-[150px] animate-float" 
              />                
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <Link className="hover:text-brand-300 transition" href="/">Home</Link>
                <div className="group relative">
                  <button className="hover:text-brand-300 transition">Services</button>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 top-full mt-2 w-[320px] card p-3 grid grid-cols-1 gap-1">
                    <Link className="hover:bg-white/5 rounded-lg px-3 py-2" href="/services/x-rays">X-rays Annotation</Link>
                    <Link className="hover:bg-white/5 rounded-lg px-3 py-2" href="/services/mri">MRI Annotation</Link>
                    <Link className="hover:bg-white/5 rounded-lg px-3 py-2" href="/services/ct-scan">CT-Scan Annotation</Link>
                    <Link className="hover:bg-white/5 rounded-lg px-3 py-2" href="/services/ultrasound">Ultrasound Annotation</Link>
                    <Link className="hover:bg-white/5 rounded-lg px-3 py-2" href="/services/histopathology">Histopathology</Link>
                    <Link className="hover:bg-white/5 rounded-lg px-3 py-2" href="/services/ecg">ECG/EKG</Link>
                    <Link className="hover:bg-white/5 rounded-lg px-3 py-2" href="/services/deidentification">De-identification</Link>
                    <Link className="hover:bg-white/5 rounded-lg px-3 py-2" href="/services/qa">QA & Audit</Link>
                    <Link className="hover:bg-white/5 rounded-lg px-3 py-2" href="/services/raw-data">Raw data (without annotation)</Link>
                  </div>
                </div>
                <Link className="hover:text-brand-300 transition" href="/about">About</Link>
                <Link className="hover:text-brand-300 transition" href="/contact">Contact</Link>
              </nav>
              <div className="md:hidden">
                <details className="group">
                  <summary className="list-none cursor-pointer px-3 py-2 rounded-lg btn-ghost">Menu</summary>
                  <div className="mt-2 card p-3 grid gap-2">
                    <Link className="hover:bg-white/10 rounded px-3 py-2" href="/">Home</Link>
                    <details>
                      <summary className="cursor-pointer px-3 py-2 hover:bg.white/10 rounded">Services</summary>
                      <div className="mt-2 grid gap-1 pl-3">
                        <Link className="hover:bg-white/10 rounded px-3 py-2" href="/services/x-rays">X-rays Annotation</Link>
                        <Link className="hover:bg-white/10 rounded px-3 py-2" href="/services/mri">MRI Annotation</Link>
                        <Link className="hover:bg-white/10 rounded px-3 py-2" href="/services/ct-scan">CT-Scan Annotation</Link>
                        <Link className="hover:bg-white/10 rounded px-3 py-2" href="/services/ultrasound">Ultrasound Annotation</Link>
                        <Link className="hover:bg-white/10 rounded px-3 py-2" href="/services/histopathology">Histopathology</Link>
                        <Link className="hover:bg-white/10 rounded px-3 py-2" href="/services/ecg">ECG/EKG</Link>
                        <Link className="hover:bg-white/10 rounded px-3 py-2" href="/services/deidentification">De-identification</Link>
                        <Link className="hover:bg-white/10 rounded px-3 py-2" href="/services/qa">QA & Audit</Link>
                        <Link className="hover:bg-white/10 rounded px-3 py-2" href="/services/raw-data">Raw Data</Link>
                      </div>
                    </details>
                    <Link className="hover:bg-white/10 rounded px-3 py-2" href="/about">About</Link>
                    <Link className="hover:bg-white/10 rounded px-3 py-2" href="/contact">Contact</Link>
                  </div>
                </details>
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="border-t border-slate-800">
            <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <img src="/images/logo-light.png" alt="CuraLabel" className="w-20" />
                </div>
                <p className="text-slate-400">
                  Medical image annotation by clinicians with rigorous QA and privacy-first workflows.
                </p>
              </div>
              <div>
                <div className="font-semibold mb-3">Company</div>
                <ul className="space-y-2 text-slate-300">
                  <li><Link className="hover:text-brand-300" href="/about">About</Link></li>
                  <li><Link className="hover:text-brand-300" href="/contact">Contact</Link></li>
                  <li><Link className="hover:text-brand-300" href="/privacy">Privacy</Link></li>
                  <li><Link className="hover:text-brand-300" href="/terms">Terms</Link></li>
                  <li><Link className="hover:text-brand-300" href="/legal">Legal</Link></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-3">Services</div>
                <ul className="space-y-2 text-slate-300">
                  <li><Link className="hover:text-brand-300" href="/services/x-rays">X-rays</Link></li>
                  <li><Link className="hover:text-brand-300" href="/services/mri">MRI</Link></li>
                  <li><Link className="hover:text-brand-300" href="/services/ct-scan">CT-Scan</Link></li>
                  <li><Link className="hover:text-brand-300" href="/services/ultrasound">Ultrasound</Link></li>
                  <li><Link className="hover:text-brand-300" href="/services/histopathology">Histopathology</Link></li>
                  <li><Link className="hover:text-brand-300" href="/services/ecg">ECG/EKG</Link></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-3">Get in touch</div>
                <p className="text-slate-400">hello@curalabel.com</p>
                <p className="text-slate-400">+1 (416) 555-0123</p>
                <div className="mt-3 flex gap-3">
                  <a className="hover:text-brand-300" href="#" aria-label="Twitter">Twitter</a>
                  <a className="hover:text-brand-300" href="#" aria-label="LinkedIn">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800">
              <div className="container py-6 text-xs text-slate-500 flex justify-between">
                <span>© {new Date().getFullYear()} CuraLabel. All rights reserved.</span>
                <span>Toronto, Canada · Lahore, Pakistan</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
