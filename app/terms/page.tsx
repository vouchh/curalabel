export const metadata = { title: "Terms & Conditions – CuraLabel" };

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
                "1. Introduction",
                "2. Definitions",
                "3. Scope of Services",
                "4. Client Responsibilities",
                "5. Data Privacy & Security",
                "6. Intellectual Property",
                "7. Payment Terms",
                "8. Warranty & Disclaimer",
                "9. Limitation of Liability",
                "10. Confidentiality",
                "11. Compliance with Laws",
                "12. Termination",
                "13. Governing Law",
                "14. Changes to Terms",
                "15. Contact Us"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={`#section-${idx + 1}`} className="hover:text-slate-200 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="md:col-span-3 prose prose-invert prose-slate max-w-none space-y-8">
          <h1 className="text-4xl font-bold gradient-text">Terms & Conditions</h1>
          <p className="text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>

          <section id="section-1">
            <h2>1. Introduction</h2>
            <p>
              Welcome to CuraLabel. By accessing or using our website, products, or
              services (collectively, the “Services”), you agree to be bound by
              these Terms & Conditions (“Terms”). If you do not agree, you may not
              use the Services.
            </p>
          </section>

          <section id="section-2">
            <h2>2. Definitions</h2>
            <ul>
              <li><strong>“CuraLabel,” “we,” “us”</strong> refers to the service provider operating under the CuraLabel brand.</li>
              <li><strong>“Client,” “you”</strong> refers to the entity or individual who engages our Services.</li>
              <li><strong>“Deliverables”</strong> means annotated medical datasets, reports, or other outputs produced for the Client.</li>
            </ul>
          </section>

          <section id="section-3">
            <h2>3. Scope of Services</h2>
            <p>
              CuraLabel provides professional medical data annotation services performed or supervised by qualified healthcare professionals.
              The specific scope, timelines, deliverables, and pricing will be defined in the applicable Master Service Agreement (MSA)
              and/or project-specific Statement of Work (SOW).
            </p>
          </section>

          <section id="section-4">
            <h2>4. Client Responsibilities</h2>
            <ul>
              <li>Provide accurate, complete, and lawful data for annotation, free of any known viruses or malicious code.</li>
              <li>Obtain all necessary rights, consents, and authorizations to share medical data with CuraLabel.</li>
              <li>Ensure compliance with applicable privacy laws such as HIPAA, GDPR, or local equivalents.</li>
            </ul>
          </section>

          <section id="section-5">
            <h2>5. Data Privacy & Security</h2>
            <p>
              We are committed to protecting the confidentiality, integrity, and availability of Client data. Unless otherwise agreed, we store project data only for the duration of the project and delete it after delivery, except where retention is legally required.
            </p>
          </section>

          <section id="section-6">
            <h2>6. Intellectual Property</h2>
            <p>
              Unless otherwise stated in the MSA/SOW, all Deliverables become the property of the Client upon full payment. CuraLabel retains ownership of pre-existing tools, methods, and intellectual property used to produce the Deliverables.
            </p>
          </section>

          <section id="section-7">
            <h2>7. Payment Terms</h2>
            <ul>
              <li>Invoices are payable in the currency and timeframe stated in the SOW or MSA.</li>
              <li>Late payments may incur interest at the maximum rate allowed by law.</li>
              <li>We may suspend Services until outstanding amounts are settled.</li>
            </ul>
          </section>

          <section id="section-8">
            <h2>8. Warranty & Disclaimer</h2>
            <p>
              We warrant that Services will be performed in a professional and workmanlike manner. However, CuraLabel does not guarantee that the Deliverables will be error-free or suitable for any specific medical diagnosis or treatment. Services are for research, AI training, and operational purposes only.
            </p>
          </section>

          <section id="section-9">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, CuraLabel shall not be liable for any indirect, incidental, consequential, or punitive damages. Our total liability for any claim shall not exceed the total fees paid for the relevant project.
            </p>
          </section>

          <section id="section-10">
            <h2>10. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of all non-public information received during the engagement, and to use it only for purposes related to the agreed Services.
            </p>
          </section>

          <section id="section-11">
            <h2>11. Compliance with Laws</h2>
            <p>
              Both parties will comply with all applicable laws, regulations, and ethical standards, including those governing medical data handling and privacy.
            </p>
          </section>

          <section id="section-12">
            <h2>12. Termination</h2>
            <p>
              Either party may terminate by written notice if the other breaches these Terms and fails to cure within 14 days. Upon termination, Client will pay for all Services rendered up to the effective termination date.
            </p>
          </section>

          <section id="section-13">
            <h2>13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Ontario, Canada. Any disputes shall be resolved in the courts of Toronto, Ontario.
            </p>
          </section>

          <section id="section-14">
            <h2>14. Changes to Terms</h2>
            <p>
              CuraLabel may update these Terms at any time. Continued use of our Services after changes take effect constitutes acceptance.
            </p>
          </section>

          <section id="section-15">
            <h2>15. Contact Us</h2>
            <p>
              Email: <a href="mailto:legal@curalabel.com">legal@curalabel.com</a><br/>
              Address: Toronto, Ontario, Canada
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
