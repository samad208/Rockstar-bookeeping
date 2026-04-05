"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, CheckCircle } from "lucide-react";

// Note: metadata must be in a server component. We export it separately below.
// Since this page uses client hooks, metadata is in a separate layout or
// we handle it via the template in layout.tsx.

const serviceOptions = [
  "Monthly Bookkeeping",
  "Payroll Management",
  "QuickBooks Setup & Training",
  "Catch-Up Bookkeeping",
  "Tax Preparation",
  "Not sure — let's talk",
];

const faqs = [
  {
    q: "Is the first call really free?",
    a: "Yes, completely. No credit card, no obligation. It's just a conversation.",
  },
  {
    q: "How quickly will you respond?",
    a: "Within 1 business day — usually the same day if you reach out in the morning.",
  },
  {
    q: "Do you work with businesses outside Alpharetta?",
    a: "Absolutely. We serve clients all over the greater Atlanta area and work virtually with clients anywhere.",
  },
  {
    q: "What happens after I submit the form?",
    a: "You'll get a confirmation email and we'll reach out to schedule your free call.",
  },
  {
    q: "I'm embarrassed about the state of my books. Is that okay?",
    a: "100%. We've seen it all and we never judge. Messy books are literally our specialty.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.phone.trim()) e.phone = "Phone is required.";
    else if (!/^[\d\s\-()+.]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
    if (!form.message.trim()) e.message = "Please tell us a bit about your needs.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    // Simulated submission — replace with your form handler / API route
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const firstName = form.name.split(" ")[0] || "there";

  return (
    <>
      {/* LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rockstar Bookkeeping",
            telephone: "(770) 580-9908",
            email: "RockstarBookkeeping@outlook.com",
            url: "https://www.rockstar-bookkeeping.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Alpharetta",
              addressRegion: "GA",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 34.0754, longitude: -84.2941 },
            openingHours: "Mo-Fr 09:00-17:00",
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2563a8] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-5" style={{ fontFamily: "Sora,sans-serif" }}>
            Book Your Free Consultation in Alpharetta, GA
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            No pressure. No sales pitch. Just a real conversation about your business and how we can help.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-[#f0fdf4] border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h2 className="text-[#0f172a] text-2xl font-extrabold mb-3" style={{ fontFamily: "Sora,sans-serif" }}>
                    Thank you, {firstName}!
                  </h2>
                  <p className="text-[#475569] text-base">
                    We'll be in touch within 1 business day to schedule your free call. Check your inbox!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h2 className="text-[#0f172a] text-2xl font-extrabold mb-6" style={{ fontFamily: "Sora,sans-serif" }}>
                    Tell Us About Yourself
                  </h2>

                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                    { id: "businessName", label: "Business Name (optional)", type: "text", placeholder: "Smith & Co." },
                    { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "(770) 000-0000" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-semibold text-[#0f172a] mb-1.5">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-[#0f172a] text-base placeholder:text-slate-400 bg-[#f8fafc] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563a8] focus:border-[#2563a8] min-h-[48px] ${
                          errors[field.id] ? "border-red-400 bg-red-50" : "border-slate-200"
                        }`}
                      />
                      {errors[field.id] && (
                        <p className="text-red-500 text-xs mt-1">{errors[field.id]}</p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-[#0f172a] mb-1.5">
                      How Can We Help?
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0f172a] text-base bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#2563a8] focus:border-[#2563a8] min-h-[48px]"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0f172a] mb-1.5">
                      Anything Else We Should Know?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us a bit about your business and what's going on with your finances..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-[#0f172a] text-base placeholder:text-slate-400 bg-[#f8fafc] resize-y focus:outline-none focus:ring-2 focus:ring-[#2563a8] focus:border-[#2563a8] transition-all duration-200 ${
                        errors.message ? "border-red-400 bg-red-50" : "border-slate-200"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#f59e0b] hover:bg-[#fbbf24] disabled:opacity-60 text-[#0f172a] font-bold text-lg py-4 rounded-full transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5 min-h-[52px]"
                  >
                    {loading ? "Sending..." : "Send My Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-7">
                <h3 className="text-[#0f172a] font-extrabold text-lg mb-5" style={{ fontFamily: "Sora,sans-serif" }}>
                  Contact Info
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone size={17} className="text-[#f59e0b] mt-0.5 shrink-0" />
                    <a href="tel:+17705809908" className="text-[#0f172a] text-sm font-medium hover:text-[#2563a8] transition-colors">
                      (770) 580-9908
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={17} className="text-[#f59e0b] mt-0.5 shrink-0" />
                    <a href="mailto:RockstarBookkeeping@outlook.com" className="text-[#0f172a] text-sm font-medium hover:text-[#2563a8] transition-colors break-all">
                      RockstarBookkeeping@outlook.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={17} className="text-[#f59e0b] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#0f172a] text-sm font-medium">Monday – Friday</p>
                      <p className="text-[#475569] text-sm">9:00 AM – 5:00 PM ET</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={17} className="text-[#f59e0b] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#0f172a] text-sm font-medium">Alpharetta, GA</p>
                      <p className="text-[#475569] text-xs mt-0.5">Serving greater Atlanta area</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a3c5e] rounded-2xl p-7 text-white">
                <p className="text-[#f59e0b] text-xs font-bold uppercase tracking-widest mb-2">Promise</p>
                <p className="font-semibold text-lg leading-snug mb-2" style={{ fontFamily: "Sora,sans-serif" }}>
                  We respond within 1 business day.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Usually faster. You won't be left waiting and wondering.
                </p>
              </div>

              {/* Mini FAQ */}
              <div className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-7">
                <h3 className="text-[#0f172a] font-extrabold text-lg mb-5" style={{ fontFamily: "Sora,sans-serif" }}>
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <p className="text-[#0f172a] font-semibold text-sm mb-1">{faq.q}</p>
                      <p className="text-[#475569] text-sm leading-relaxed">{faq.a}</p>
                      {i < faqs.length - 1 && <div className="border-b border-slate-200 mt-4" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
