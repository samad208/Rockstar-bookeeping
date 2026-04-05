import Link from "next/link";

const services = [
  {
    icon: "ph-book-open",
    name: "Monthly Bookkeeping",
    description: "Accurate, on-time books every month. No more mystery numbers — just clear financials you can act on.",
    href: "/services#bookkeeping",
  },
  {
    icon: "ph-users",
    name: "Payroll Management",
    description: "Pay your team on time, every time. We handle payroll processing, tax filings, and year-end W-2s.",
    href: "/services#payroll",
  },
  {
    icon: "ph-wrench",
    name: "QuickBooks Setup",
    description: "Get QuickBooks set up right from the start. We configure it for your business and train you to use it.",
    href: "/services#quickbooks",
  },
  {
    icon: "ph-arrow-counter-clockwise",
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
          <p className="text-[#C4849A] text-lg tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>What We Do</p>
          <h2 className="text-[#101010] text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Services Built for Small Businesses
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">
            No corporate jargon. No confusing packages. Just the bookkeeping help you actually need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-[#FDF5F7] rounded-2xl p-8 border border-[#E8D5DB] hover:border-[#C4849A] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#101010] flex items-center justify-center mb-5 group-hover:bg-[#C4849A] transition-colors text-white">
                <i className={`ph ${s.icon}`} style={{ fontSize: '22px', color: 'inherit' }}></i>
              </div>
              <h3 className="text-[#101010] font-black text-xl mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {s.name}
              </h3>
              <p className="text-[#6B6B6B] text-base leading-relaxed mb-5">{s.description}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-[#C4849A] font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn More <i className="ph ph-arrow-right" style={{ fontSize: '15px' }}></i>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#101010] hover:bg-[#C4849A] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5"
          >
            View All Services <i className="ph ph-arrow-right" style={{ fontSize: '17px' }}></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
