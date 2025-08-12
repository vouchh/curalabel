export const metadata = { title: "Privacy – CuraLabel" };

export default function Page() {
  return (
    <div className="section">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar Navigation */}
        <nav className="md:col-span-1 sticky top-24 self-start">
          <div className="card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-slate-200">On this page</h2>
            <ul className="space-y-2 text-slate-400 text-sm">
              {[
                { id: "intro", label: "1. Introduction" },
                { id: "collect", label: "2. Information We Collect" },
                { id: "use", label: "3. How We Use Information" },
                { id: "phi", label: "4. PHI Handling & Compliance" },
                { id: "sharing", label: "5. Sharing & Disclosure" },
                { id: "retention", label: "6. Data Retention" },
                { id: "transfers", label: "7. International Transfers" },
                { id: "security", label: "8. Security Measures" },
                { id: "rights", label: "9. Your Rights" },
                { id: "contact", label: "10. Contact Us" },
              ].map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-slate-200 transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <article
          className="md:col-span-3 prose prose-invert prose-slate max-w-none space-y-8
                     [&h2]:scroll-mt-28"
        >
          <header>
            <h1 className="text-4xl font-bold gradient-text">Privacy Policy</h1>
            <p className="text-slate-400">Last Updated: February 12, 2025</p>
          </header>

          <section id="intro">
            <h2>1. Introduction</h2>
            <p>
              CuraLabel (“we,” “our,” or “us”) is committed to protecting the privacy and confidentiality
              of all information entrusted to us. This Privacy Policy explains how we collect, use, store,
              and safeguard personal information, including Protected Health Information (PHI), in
              connection with our medical annotation services.
            </p>
          </section>

          <section id="collect">
            <h2>2. Information We Collect</h2>
            <ul>
              <li>
                <strong>Protected Health Information (PHI):</strong> Medical images (e.g., X-rays, MRIs, CT scans),
                diagnostic notes, and related clinical data provided by healthcare providers for annotation.
              </li>
              <li>
                <strong>Personal Information:</strong> Names, contact details, and professional information of clients,
                partners, and authorized users.
              </li>
              <li>
                <strong>Technical Data:</strong> IP addresses, browser type, device information, and usage patterns for
                security and operational purposes.
              </li>
            </ul>
          </section>

          <section id="use">
            <h2>3. How We Use Information</h2>
            <ul>
              <li>Providing medical annotation services to our clients</li>
              <li>Quality assurance, consensus review, and accuracy improvements</li>
              <li>Meeting contractual obligations under BAAs and DPAs</li>
              <li>Maintaining audit logs and compliance records</li>
              <li>Improving and securing our platform</li>
            </ul>
          </section>

          <section id="phi">
            <h2>4. PHI Handling &amp; Compliance</h2>
            <ul>
              <li>PHI minimization and de-identification where feasible</li>
              <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
              <li>Least-privilege access controls and role-based permissions</li>
              <li>Comprehensive audit logging for PHI access and processing</li>
              <li>Annual security and privacy training for all personnel</li>
            </ul>
          </section>

          <section id="sharing">
            <h2>5. Sharing &amp; Disclosure</h2>
            <ul>
              <li>With authorized personnel and contractors under confidentiality obligations</li>
              <li>With vetted service providers for hosting, storage, or secure processing (under signed agreements)</li>
              <li>As required by law, court order, or regulatory request</li>
              <li>In M&amp;A or similar transactions, under confidentiality commitments</li>
            </ul>
          </section>

          <section id="retention">
            <h2>6. Data Retention</h2>
            <p>
              We retain PHI and personal data only as long as necessary for the stated purposes or as
              required by law or contract. After the retention period, data is securely deleted or anonymized.
            </p>
          </section>

          <section id="transfers">
            <h2>7. International Transfers</h2>
            <p>
              Where data is transferred cross-border, we implement safeguards such as Standard Contractual Clauses (SCCs)
              and data localization where required.
            </p>
          </section>

          <section id="security">
            <h2>8. Security Measures</h2>
            <p>
              We maintain administrative, technical, and physical safeguards designed to protect information from
              unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          <section id="rights">
            <h2>9. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to:</p>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Restrict or object to certain processing</li>
              <li>Request a copy of your data in a portable format</li>
              <li>File a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section id="contact">
            <h2>10. Contact Us</h2>
            <p>
              Privacy Officer — CuraLabel<br />
              Email: <a href="mailto:privacy@curalabel.com">privacy@curalabel.com</a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
