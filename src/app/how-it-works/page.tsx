"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneCall, Search, TrendingUp, ChevronDown, ArrowRight } from "lucide-react";
import CTA from "@/components/sections/CTA";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Book a Free Call",
    description:
      "Schedule a quick 20-minute call — no pressure, no sales pitch. We'll have a real conversation about what's going on with your finances and what you actually need.",
    clientExperience:
      "You pick a time that works for you, show up to a video or phone call, and just talk. No prep needed.",
    weHandle:
      "We listen, ask the right questions, assess your situation, and tell you honestly if and how we can help.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Review Your Books",
    description:
      "After our call, we take a close look at your financials — wherever they are, however messy they might be. We put together a clear plan and give you a straight quote.",
    clientExperience:
      "You share access to your accounts and hand things over. That's it.",
    weHandle:
      "We do a complete financial review, identify issues, build your cleanup or setup plan, and walk you through next steps.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Clean Financials Every Month",
    description:
      "Once you're set up, we keep your books clean and current month after month. You get easy-to-read reports delivered to your inbox — no spreadsheet skills required.",
    clientExperience:
      "You check your monthly report, ask questions if you have them, and focus on running your business.",
    weHandle:
      "Everything — transaction categorization, reconciliations, payroll, reports, and anything else we've agreed on.",
  },
];

const faqs = [
  {
    question: "How much does a bookkeeper cost for a small business?",
    answer:
      "Costs vary depending on your business size and the services you need. At Rockstar Bookkeeping, we offer customized packages based on your transaction volume and requirements — so you only pay for what you actually use. We'll give you a clear quote after our free discovery call.",
  },
  {
    question: "What does a bookkeeper do every month for a small business?",
    answer:
      "Every month we categorize your transactions, reconcile your bank and credit card accounts, and generate financial reports like your Profit & Loss and Balance Sheet. If we're handling payroll, we process that too. The goal is that you always know exactly how your business is doing financially.",
  },
  {
    question: "Do I need a bookkeeper or an accountant?",
    answer:
      "Most small businesses need a bookkeeper first. A bookkeeper handles your day-to-day financials — recording transactions, keeping your books current, and generating reports. An accountant typically handles tax strategy and higher-level financial advice. Good bookkeeping gives your accountant clean data to work with, often saving you money at tax time.",
  },
  {
    question: "How do I know if my books are a mess?",
    answer:
      "Common signs: you haven't reconciled your bank account in months, you're not sure if your business is profitable, you're missing receipts, or you're dreading tax season. If any of that sounds familiar, our Catch-Up Bookkeeping service can get you sorted out — no judgment.",
  },
  {
    question: "Is my financial data secure with you?",
    answer:
      "Absolutely. We use encrypted, cloud-based accounting platforms and follow strict confidentiality protocols. Your data is never shared with anyone, and access is tightly controlled. We take data security as seriously as we take accuracy.",
  },
  {
    question: "How often will I hear from you?",
    answer:
      "You'll receive your monthly financial reports as soon as they're ready — typically within the first week of the new month. We're also available by email or phone when you have questions. We respond within one business day, usually faster.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left py-5 gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[#0f172a] font-semibold text-base sm:text-lg" style={{ fontFamily: "Sora,sans-serif" }}>
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-[#2563a8] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-[#475569] text-base leading-relaxed pb-5">{answer}</p>
      )}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2563a8] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-5" style={{ fontFamily: "Sora,sans-serif" }}>
            How Rockstar Bookkeeping Works
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Simple, transparent, and stress-free. Here&apos;s exactly what happens when you work with us.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-8 sm:p-10">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#1a3c5e] flex items-center justify-center shadow-md">
                    <step.icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#f59e0b] text-4xl font-extrabold leading-none mb-2" style={{ fontFamily: "Sora,sans-serif" }}>
                    {step.number}
                  </div>
                  <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-extrabold mb-3" style={{ fontFamily: "Sora,sans-serif" }}>
                    {step.title}
                  </h2>
                  <p className="text-[#475569] text-base leading-relaxed mb-6">{step.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-5 border border-slate-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#2563a8] mb-2">Your experience</p>
                      <p className="text-[#475569] text-sm leading-relaxed">{step.clientExperience}</p>
                    </div>
                    <div className="bg-[#1a3c5e] rounded-xl p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#f59e0b] mb-2">What we handle</p>
                      <p className="text-white/80 text-sm leading-relaxed">{step.weHandle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] font-bold text-lg px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Book Your Free Call <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* FAQ with schema */}
      <section className="bg-[#f8fafc] py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="text-[#0f172a] text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Sora,sans-serif" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-6 sm:px-10 py-2">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <CTA />
    </>
  );
}
