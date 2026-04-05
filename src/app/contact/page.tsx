import type { Metadata } from "next";
import Image from "next/image";
import BookingCalendar from "@/components/BookingCalendar";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Rockstar Bookkeeping | Alpharetta GA",
  description:
    "Book a free 20-minute call with Rockstar Bookkeeping in Alpharetta, GA. No pressure, no commitment — just a real conversation about your business finances.",
  alternates: { canonical: "https://www.rockstar-bookkeeping.com/contact" },
};

const faqs = [
  { q: "Is the first call really free?",       a: "Yes, completely. No credit card, no obligation. It's just a conversation." },
  { q: "How quickly will you respond?",        a: "Within 1 business day — usually the same day if you reach out in the morning." },
  { q: "Do you work outside Alpharetta?",      a: "Absolutely. We serve clients all over greater Atlanta and work virtually with clients anywhere." },
  { q: "I'm embarrassed about my books.",      a: "100% okay. We've seen it all and we never judge. Messy books are literally our specialty." },
  { q: "What happens after I book?",           a: "You'll get a confirmation and we'll be ready for your call at the time you selected." },
];

export default function ContactPage() {
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
      <section className="bg-[#101010] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 opacity-[0.07] pointer-events-none select-none -rotate-12">
          <Image src="/star-icon.svg" alt="" width={256} height={256} className="w-full h-full" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#eabfd3] text-lg tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Get In Touch
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-black mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Book Your Free Consultation<br className="hidden sm:block" /> in Alpharetta, GA
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            No pressure. No sales pitch. Just a real conversation about your business and how we can help.
          </p>
        </div>
      </section>

      {/* Calendar + sidebar */}
      <section className="bg-[#0D1B2A] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Calendar */}
            <div className="lg:col-span-3">
              <div className="max-w-[520px]">
                <BookingCalendar />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">

              {/* Contact info card */}
              <div className="rounded-2xl border border-white/8 bg-white/4 p-7">
                <h3 className="text-white font-black text-lg mb-5"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Contact Info
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="ph ph-phone text-[#eabfd3] mt-0.5 shrink-0" style={{ fontSize: "17px" }} />
                    <a href="tel:+17705809908" className="text-white/80 text-sm font-medium hover:text-[#eabfd3] transition-colors">
                      (770) 580-9908
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ph ph-envelope text-[#eabfd3] mt-0.5 shrink-0" style={{ fontSize: "17px" }} />
                    <a href="mailto:RockstarBookkeeping@outlook.com"
                      className="text-white/80 text-sm font-medium hover:text-[#eabfd3] transition-colors break-all">
                      RockstarBookkeeping@outlook.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ph ph-clock text-[#eabfd3] mt-0.5 shrink-0" style={{ fontSize: "17px" }} />
                    <div>
                      <p className="text-white/80 text-sm font-medium">Monday – Friday</p>
                      <p className="text-white/45 text-sm">9:00 AM – 5:00 PM ET</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ph ph-map-pin text-[#eabfd3] mt-0.5 shrink-0" style={{ fontSize: "17px" }} />
                    <div>
                      <p className="text-white/80 text-sm font-medium">Alpharetta, GA</p>
                      <p className="text-white/45 text-xs mt-0.5">Serving greater Atlanta area</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-5 border-t border-white/8">
                  <p className="text-white/50 text-sm mb-3">
                    Prefer email? Reach out directly and we&apos;ll get back to you within 1 business day.
                  </p>
                  <a
                    href="mailto:RockstarBookkeeping@outlook.com"
                    className="inline-flex items-center gap-2 border border-[#eabfd3]/40 hover:border-[#eabfd3] text-[#eabfd3] text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-[#eabfd3]/10"
                  >
                    <i className="ph ph-envelope" style={{ fontSize: "15px" }} />
                    Send an Email
                  </a>
                </div>
              </div>

              {/* Promise card */}
              <div className="rounded-2xl bg-[#eabfd3]/10 border border-[#eabfd3]/20 p-7 relative overflow-hidden">
                <div className="absolute -bottom-5 -right-5 w-20 h-20 opacity-10 pointer-events-none">
                  <Image src="/star-icon.svg" alt="" width={80} height={80} className="w-full h-full" />
                </div>
                <p className="text-[#eabfd3] text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  Our Promise
                </p>
                <p className="font-black text-lg text-white leading-snug mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  We respond within 1 business day.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Usually faster. You won&apos;t be left waiting and wondering.
                </p>
              </div>

              {/* Quick FAQ */}
              <div className="rounded-2xl border border-white/8 bg-white/4 p-7">
                <h3 className="text-white font-black text-lg mb-5"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <p className="text-white/90 font-semibold text-sm mb-1">{faq.q}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                      {i < faqs.length - 1 && <div className="border-b border-white/8 mt-4" />}
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
