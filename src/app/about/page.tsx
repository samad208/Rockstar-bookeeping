import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/sections/CTA";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Small Business Bookkeeper Atlanta | About Rockstar Bookkeeping | Alpharetta GA",
  description:
    "Learn about Rockstar Bookkeeping, your dedicated small business bookkeeper in Atlanta. Certified, experienced, and genuinely passionate about helping you succeed.",
  alternates: { canonical: "https://www.rockstar-bookkeeping.com/about" },
};

const values = [
  {
    icon: "ph-crosshair",
    title: "Accurate",
    description: "Every number matters. We double-check our work so you can trust your financials completely.",
  },
  {
    icon: "ph-chat-circle",
    title: "Responsive",
    description: "Got a question? We respond fast. You'll never be left wondering about your books.",
  },
  {
    icon: "ph-heart",
    title: "Personal",
    description: "We treat your business like it's our own. Because your success is literally our business.",
  },
];

const credentials = [
  "QuickBooks Online Certified ProAdvisor",
  "Intuit Academy Tax Preparation Certified",
  "10+ Years of Bookkeeping Experience",
  "50+ Small Businesses Served in Atlanta Area",
  "Specializing in Small & Micro Businesses",
];

export default function AboutPage() {
  return (
    <>
      <ScrollAnimations />

      {/* Hero */}
      <section className="bg-[#101010] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -bottom-12 -left-12 w-64 h-64 opacity-[0.07] pointer-events-none select-none">
          <Image src="/star-icon.svg" alt="" width={256} height={256} className="w-full h-full" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#eabfd3] text-lg tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Our Story</p>
          <h1 className="text-white text-4xl sm:text-5xl font-black mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Your Alpharetta Small Business Bookkeeper
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real talk about who we are, why we do this, and what makes us different.
          </p>
        </div>
      </section>

      {/* Founder section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Photo */}
            <div className="flex justify-center lg:justify-end fade-in">
              <div className="relative">
                {/* REPLACE: swap this src with the real founder photo */}
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Rockstar Bookkeeping founder"
                  width={384}
                  height={480}
                  className="rounded-2xl object-cover shadow-xl"
                  style={{ maxWidth: '384px', width: '100%' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-[#eabfd3] rounded-xl px-5 py-3 shadow-lg flex items-center gap-2">
                  <Image src="/star-icon.svg" alt="" width={16} height={16} className="w-4 h-4 shrink-0" />
                  <div>
                    <p className="text-white font-bold text-xs">QuickBooks</p>
                    <p className="text-white/80 text-[10px]">ProAdvisor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="fade-in fade-in-delay-2">
              <p className="text-[#eabfd3] text-lg tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Meet Your Bookkeeper</p>
              <h2 className="text-[#101010] text-3xl sm:text-4xl font-black mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Hi! I&apos;m the person behind Rockstar Bookkeeping.
              </h2>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-5">
                I started this business because I saw too many talented, hardworking small business owners drowning in their own finances. Great at what they do. Terrible at bookkeeping. Not because they weren't smart, but because nobody taught them this stuff.
              </p>
              <p className="text-[#6B6B6B] text-base leading-relaxed mb-5">
                So I stepped in. I'm a QuickBooks ProAdvisor with over a decade of experience helping small businesses in the Atlanta area get their numbers right. I've worked with restaurants, freelancers, contractors, e-commerce stores, and everything in between.
              </p>
              <p className="text-[#6B6B6B] text-base leading-relaxed mb-8">
                My approach? Keep it simple, keep it accurate, and keep it human. You should never feel embarrassed about asking a question. That's what I'm here for.
              </p>

              <ul className="space-y-2.5 mb-8">
                {credentials.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-[#101010] text-sm font-medium">
                    <i className="ph ph-check-circle text-[#eabfd3] shrink-0" style={{ fontSize: '17px' }}></i>
                    {c}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#eabfd3] hover:bg-[#d4a0b8] text-[#101010] font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5"
              >
                Let&apos;s Work Together <i className="ph ph-arrow-right" style={{ fontSize: '17px' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#FDF5F7] py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#eabfd3] text-lg tracking-[0.25em] uppercase mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>What We Stand For</p>
            <h2 className="text-[#101010] text-3xl sm:text-4xl font-black"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#E8D5DB] text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 fade-in"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-[#101010] flex items-center justify-center mx-auto mb-5 shadow-md text-white">
                  <i className={`ph ${v.icon}`} style={{ fontSize: '24px', color: 'inherit' }}></i>
                </div>
                <h3 className="text-[#101010] font-black text-xl mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{v.title}</h3>
                <p className="text-[#6B6B6B] text-base leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
