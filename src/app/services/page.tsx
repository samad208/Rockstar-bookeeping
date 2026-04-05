import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import CTA from "@/components/sections/CTA";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Bookkeeping Services Atlanta | Rockstar Bookkeeping | Alpharetta GA",
  description:
    "Comprehensive bookkeeping services in Atlanta, GA. From monthly bookkeeping to payroll and QuickBooks setup — Rockstar Bookkeeping keeps your finances accurate.",
  alternates: { canonical: "https://www.rockstar-bookkeeping.com/services" },
};

const services = [
  {
    id: "bookkeeping",
    name: "Monthly Bookkeeping",
    tagline: "Always know where your money stands.",
    description:
      "We categorize every transaction, reconcile your accounts, and deliver clean monthly financials — so you're never flying blind.",
    bullets: [
      "Monthly transaction categorization",
      "Bank and credit card reconciliation",
      "Profit & Loss and Balance Sheet reports",
      "Dedicated bookkeeper for your account",
      "Cloud-based access to your financials anytime",
    ],
    bestFor: "Small business owners who want accurate, up-to-date books without doing it themselves.",
  },
  {
    id: "payroll",
    name: "Payroll Management",
    tagline: "Pay your team right. Every time.",
    description:
      "Payroll is one of the most important — and most stressful — parts of running a business. We handle everything so your team gets paid accurately and on time.",
    bullets: [
      "Full payroll processing for employees & contractors",
      "Direct deposit setup",
      "Federal and state payroll tax filing",
      "New hire reporting",
      "Year-end W-2s and 1099s",
    ],
    bestFor: "Business owners with employees or contractors who want payroll off their plate completely.",
  },
  {
    id: "quickbooks",
    name: "QuickBooks Setup & Training",
    tagline: "Get QuickBooks working for you, not against you.",
    description:
      "A badly set up QuickBooks file causes more problems than it solves. We configure it correctly for your business from day one — and we teach you how to use it.",
    bullets: [
      "Custom chart of accounts setup",
      "Integration with your bank and tools",
      "Data import from your existing system",
      "1-on-1 training tailored to your workflow",
      "Ongoing support when you have questions",
    ],
    bestFor: "New businesses or owners switching to QuickBooks who want a clean, correct setup.",
  },
  {
    id: "catchup",
    name: "Catch-Up Bookkeeping",
    tagline: "Behind on your books? We've seen worse.",
    description:
      "Whether you're a few months behind or a few years, we'll sort it out. No judgment — just clean books and a clear path forward.",
    bullets: [
      "Review and categorize all past transactions",
      "Reconcile accounts for previous periods",
      "Accurate historical financial reports",
      "Ready for tax filing when we're done",
      "Transition plan to keep you current going forward",
    ],
    bestFor: "Business owners with overdue, disorganized, or never-done books who need a fresh start.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ScrollAnimations />
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2563a8] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-5" style={{ fontFamily: "Sora,sans-serif" }}>
            Bookkeeping Services for Small Businesses in Atlanta
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
            No corporate jargon. No surprise fees. Just the financial support your business actually needs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-8 sm:p-10 fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-wider mb-2">{s.tagline}</p>
              <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-extrabold mb-4" style={{ fontFamily: "Sora,sans-serif" }}>
                {s.name}
              </h2>
              <p className="text-[#475569] text-base leading-relaxed mb-6">{s.description}</p>

              <ul className="space-y-2.5 mb-6">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[#0f172a] text-sm">
                    <CheckCircle2 size={17} className="text-[#2563a8] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>

              <p className="text-[#475569] text-sm italic mb-6">
                <strong className="text-[#0f172a] not-italic">Best for:</strong> {s.bestFor}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1a3c5e] hover:bg-[#2563a8] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5"
              >
                Book a Call About This Service <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
