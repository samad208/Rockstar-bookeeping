import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Target, MessageCircle, Heart, ArrowRight } from "lucide-react";
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
    icon: Target,
    title: "Accurate",
    description: "Every number matters. We double-check our work so you can trust your financials completely.",
  },
  {
    icon: MessageCircle,
    title: "Responsive",
    description: "Got a question? We respond fast. You'll never be left wondering about your books.",
  },
  {
    icon: Heart,
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
      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2563a8] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-5" style={{ fontFamily: "Sora,sans-serif" }}>
            Your Alpharetta Small Business Bookkeeper
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Real talk about who we are, why we do this, and what makes us different.
          </p>
        </div>
      </section>

      {/* Founder section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Photo */}
            <div className="flex justify-center fade-in">
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-2xl bg-gradient-to-br from-[#1a3c5e] to-[#2563a8] flex items-center justify-center shadow-xl overflow-hidden">
                  {/* Replace with: <Image src="/founder.jpg" alt="Rockstar Bookkeeping founder" fill className="object-cover" /> */}
                  <div className="text-center text-white px-8">
                    <div className="text-7xl mb-3">👩‍💼</div>
                    <p className="text-sm font-medium opacity-70">Owner Photo</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#f59e0b] rounded-xl px-5 py-3 shadow-lg text-center">
                  <p className="text-[#0f172a] font-bold text-sm" style={{ fontFamily: "Sora,sans-serif" }}>QuickBooks</p>
                  <p className="text-[#0f172a] text-xs font-semibold">ProAdvisor ✓</p>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="fade-in fade-in-delay-2">
              <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-[#0f172a] text-3xl sm:text-4xl font-extrabold mb-5" style={{ fontFamily: "Sora,sans-serif" }}>
                Hi! I&apos;m the person behind Rockstar Bookkeeping.
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-5">
                I started this business because I saw too many talented, hardworking small business owners drowning in their own finances. Great at what they do — terrible at bookkeeping. Not because they weren't smart, but because nobody taught them this stuff.
              </p>
              <p className="text-[#475569] text-base leading-relaxed mb-5">
                So I stepped in. I'm a QuickBooks ProAdvisor with over a decade of experience helping small businesses in the Atlanta area get their numbers right. I've worked with restaurants, freelancers, contractors, e-commerce stores, and everything in between.
              </p>
              <p className="text-[#475569] text-base leading-relaxed mb-8">
                My approach? Keep it simple, keep it accurate, and keep it human. You should never feel embarrassed about asking a question. That's what I'm here for.
              </p>

              <ul className="space-y-3 mb-8">
                {credentials.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-[#0f172a] text-sm font-medium">
                    <CheckCircle2 size={18} className="text-[#2563a8] shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5"
              >
                Let&apos;s Work Together <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f8fafc] py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-[#0f172a] text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Sora,sans-serif" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 fade-in"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-[#eff6ff] flex items-center justify-center mx-auto mb-5">
                  <v.icon size={26} className="text-[#2563a8]" />
                </div>
                <h3 className="text-[#0f172a] font-bold text-xl mb-3" style={{ fontFamily: "Sora,sans-serif" }}>{v.title}</h3>
                <p className="text-[#475569] text-base leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
