import type { Metadata } from "next";
import { Star } from "lucide-react";
import CTA from "@/components/sections/CTA";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Client Testimonials | Rockstar Bookkeeping | Alpharetta GA",
  description:
    "Read what small business owners in Alpharetta and Atlanta say about Rockstar Bookkeeping. Real clients. Real results.",
  alternates: { canonical: "https://www.rockstar-bookkeeping.com/testimonials" },
};

const testimonials = [
  {
    quote: "I used to dread opening QuickBooks every month. Now I get a clean report delivered to my inbox and I actually understand it. Total game-changer.",
    name: "Sarah P.",
    business: "E-commerce Shop Owner",
  },
  {
    quote: "Payroll used to take me half a day. Rockstar handles everything and my team gets paid on time every time. I don't even think about it anymore.",
    name: "Marcus T.",
    business: "Restaurant Owner, Atlanta",
  },
  {
    quote: "My books were two years behind when I found them. They got everything caught up in three weeks. No judgment, no drama, just clean books.",
    name: "Jessica L.",
    business: "Freelance Graphic Designer",
  },
  {
    quote: "Tax season actually felt manageable this year. My accountant told me my books were the cleanest she'd ever seen. That was a first.",
    name: "David R.",
    business: "Marketing Agency Owner",
  },
  {
    quote: "I finally know if my business is profitable. I was guessing before. The monthly reports are clear and I actually read them now.",
    name: "Emily W.",
    business: "Boutique Retail Owner",
  },
  {
    quote: "QuickBooks was a nightmare before they set it up properly for me. The training was patient and I actually feel confident using it now.",
    name: "Chris M.",
    business: "General Contractor",
  },
  {
    quote: "I was nervous handing over access to my finances. They made me feel completely comfortable. Professional, discreet, and genuinely helpful.",
    name: "Olivia K.",
    business: "Salon Owner, Alpharetta",
  },
  {
    quote: "Best money I spend on my business every month. Knowing my books are done right lets me focus on actually growing my business.",
    name: "Michael B.",
    business: "IT Consultant",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <ScrollAnimations />

      {/* AggregateRating schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rockstar Bookkeeping",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: testimonials.length.toString(),
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2563a8] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-5" style={{ fontFamily: "Sora,sans-serif" }}>
            What Our Clients Say
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Real small business owners. Real results. No fake reviews, no corporate fluff.
          </p>
          <div className="flex justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-[#f59e0b]" fill="#f59e0b" />
            ))}
          </div>
          <p className="text-white/60 text-sm mt-2">5.0 average across all clients</p>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#475569] text-sm font-semibold uppercase tracking-widest mb-6">Featured Story</p>
          <div className="relative w-full aspect-video bg-[#0f172a] rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
            <div className="text-center text-white/50">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
              <p className="text-sm">Video Testimonial Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col fade-in"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={15} className="text-[#f59e0b]" fill="#f59e0b" />
                  ))}
                </div>
                <p className="text-[#0f172a] text-base leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-[#0f172a] text-sm" style={{ fontFamily: "Sora,sans-serif" }}>{t.name}</p>
                  <p className="text-[#475569] text-xs mt-0.5">{t.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
