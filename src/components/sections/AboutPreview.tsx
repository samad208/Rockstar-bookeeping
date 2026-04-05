import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

const credentials = [
  "QuickBooks ProAdvisor Certified",
  "Intuit Academy Tax Preparation",
  "10+ Years of Experience",
  "50+ Small Businesses Served",
];

export default function AboutPreview() {
  return (
    <section className="bg-[#FDF5F7] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-[#101010] flex items-center justify-center shadow-xl overflow-hidden">
                <div className="text-center text-white px-8">
                  <div className="text-6xl mb-3">👩‍💼</div>
                  <p className="text-white/40 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Founder Photo</p>
                </div>
              </div>
              {/* Pink star badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#eabfd3] rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
                <Image src="/star-icon.svg" alt="" width={16} height={16} className="w-4 h-4 shrink-0" />
                <div>
                  <p className="text-white font-bold text-xs">QuickBooks</p>
                  <p className="text-white/80 text-[10px]">ProAdvisor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="fade-in fade-in-delay-2">
            <p className="text-[#C4849A] text-lg tracking-[0.25em] uppercase mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Meet Your Bookkeeper</p>
            <h2 className="text-[#101010] text-3xl sm:text-4xl font-black mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              A Real Person Who Cares About Your Business
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
              I started Rockstar Bookkeeping because I watched too many small business owners stressed out over their finances. You didn&apos;t start your business to spend your nights in QuickBooks. I did — and I actually enjoy it.
            </p>
            <ul className="space-y-2.5 mb-8">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[#101010] text-sm font-medium">
                  <CheckCircle size={17} className="text-[#C4849A] shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#C4849A] font-semibold hover:gap-3 transition-all"
            >
              Meet the Team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
