import { PhoneCall, Search, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Book a Free Call",
    description: "Schedule a quick 20-minute call. No pressure, no sales pitch. Just a real conversation about what you need.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Review Your Books",
    description: "We'll assess where things stand and put together a clear plan to get your finances organized and accurate.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Clean Financials Every Month",
    description: "Sit back while we handle everything. You get accurate books and easy-to-read reports delivered every month.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="text-[#0f172a] text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora,sans-serif" }}>
            Getting Started Is Easy
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Three simple steps and you'll never have to stress about your books again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#e2e8f0] via-[#f59e0b] to-[#e2e8f0] z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 text-center bg-[#f8fafc] rounded-2xl p-8 border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 fade-in"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-[#1a3c5e] flex items-center justify-center mx-auto mb-5 shadow-md">
                <step.icon size={26} className="text-white" />
              </div>
              <div className="text-[#f59e0b] text-5xl font-extrabold mb-2 leading-none" style={{ fontFamily: "Sora,sans-serif" }}>
                {step.number}
              </div>
              <h3 className="text-[#0f172a] font-bold text-xl mb-3" style={{ fontFamily: "Sora,sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-[#475569] text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
