import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const credentials = [
  "QuickBooks ProAdvisor Certified",
  "Intuit Academy Tax Preparation",
  "10+ Years of Experience",
  "50+ Small Businesses Served",
];

export default function AboutPreview() {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-[#1a3c5e] to-[#2563a8] flex items-center justify-center shadow-xl overflow-hidden">
                {/* Replace with <Image src="/founder.jpg" ... /> */}
                <div className="text-center text-white px-8">
                  <div className="text-6xl mb-3">👩‍💼</div>
                  <p className="text-sm font-medium opacity-80">Founder Photo</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#f59e0b] text-[#0f172a] rounded-xl px-4 py-2 shadow-lg">
                <p className="font-bold text-sm" style={{ fontFamily: "Sora,sans-serif" }}>QuickBooks</p>
                <p className="text-xs font-semibold">ProAdvisor ✓</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="fade-in fade-in-delay-2">
            <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Meet Your Bookkeeper</p>
            <h2 className="text-[#0f172a] text-3xl sm:text-4xl font-extrabold mb-5" style={{ fontFamily: "Sora,sans-serif" }}>
              A Real Person Who Cares About Your Business
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              I started Rockstar Bookkeeping because I watched too many small business owners stressed out over their finances. You didn't start your business to spend your nights in QuickBooks. I did — and I actually enjoy it.
            </p>
            <p className="text-[#475569] text-base leading-relaxed mb-8">
              My goal is simple: give you clean books, clear reports, and the peace of mind to focus on what you love doing.
            </p>

            <ul className="space-y-2.5 mb-8">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[#0f172a] text-sm font-medium">
                  <CheckCircle size={18} className="text-[#2563a8] shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#2563a8] font-semibold hover:gap-3 transition-all"
            >
              Meet the Team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
