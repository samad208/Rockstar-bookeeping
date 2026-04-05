import Link from "next/link";
import { BookOpen, Users, Settings, RefreshCw, ArrowRight } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    name: "Monthly Bookkeeping",
    description: "Accurate, on-time books every month. No more mystery numbers — just clear financials you can act on.",
    href: "/services#bookkeeping",
  },
  {
    icon: Users,
    name: "Payroll Management",
    description: "Pay your team on time, every time. We handle payroll processing, tax filings, and year-end W-2s.",
    href: "/services#payroll",
  },
  {
    icon: Settings,
    name: "QuickBooks Setup",
    description: "Get QuickBooks set up right from the start. We configure it for your business and train you to use it.",
    href: "/services#quickbooks",
  },
  {
    icon: RefreshCw,
    name: "Catch-Up Bookkeeping",
    description: "Books behind? We'll clean up the mess, reconcile everything, and get you back on track fast.",
    href: "/services#catchup",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-[#0f172a] text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora,sans-serif" }}>
            Services Built for Small Businesses
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            No corporate jargon. No confusing packages. Just the bookkeeping help you actually need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-[#f8fafc] rounded-2xl p-8 border border-slate-200 hover:border-[#2563a8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a3c5e] flex items-center justify-center mb-5 group-hover:bg-[#2563a8] transition-colors">
                <s.icon size={22} className="text-white" />
              </div>
              <h3 className="text-[#0f172a] font-bold text-xl mb-3" style={{ fontFamily: "Sora,sans-serif" }}>
                {s.name}
              </h3>
              <p className="text-[#475569] text-base leading-relaxed mb-5">{s.description}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-[#2563a8] font-semibold text-sm hover:gap-2.5 transition-all"
              >
                Learn More <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#1a3c5e] hover:bg-[#2563a8] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5"
          >
            View All Services <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
