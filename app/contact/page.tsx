// app/contact/page.tsx
export const metadata = { title: "Contact – CuraLabel" };

import ContactForm from "./ContactForm";

export default function Page() {
  return (
    <div>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl font-extrabold">Contact us</h1>
            <p className="mt-2 text-slate-300">
              Tell us about your dataset and we’ll tailor a pilot in 48 hours.
            </p>

            {/* Interactive form lives in client component */}
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-4">
            <div className="card overflow-hidden">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5391154027706!2d-79.3832!3d43.6532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d3d8b5b9b1%3A0x4c6a0d2!2sToronto!5e0!3m2!1sen!2sca!4v1680000000000"
                width="100%" height="320" style={{ border: 0 }} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="card p-6">
              <div className="font-semibold">HQ</div>
              <div className="text-slate-300">Toronto, Canada</div>
              <div className="mt-3 font-semibold">Delivery Center</div>
              <div className="text-slate-300">Lahore, Pakistan</div>
              <div className="mt-3 text-slate-300">hello@curalabel.com · +1 (416) 555-0123</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
