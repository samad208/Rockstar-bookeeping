import Link from "next/link";
import { CheckCircle } from "lucide-react";

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
        <div className="max-w-2xl mx-auto lg:mx-0">

          {/* Text */}
          <div className="fade-in">
            <p className="text-[#C4849A] text-lg tracking-[0.25em] uppercase mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Meet Your Bookkeeper</p>
            <h2 className="text-[#101010] text-3xl sm:text-4xl font-black mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              A Real Person Who Cares About Your Business
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
              I started Rockstar Bookkeeping because I watched too many small business owners stressed out over their finances. You didn&apos;t start your business to spend your nights in QuickBooks. I did. And I actually enjoy it.
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
              Meet the Team <i className="ph ph-arrow-right" style={{ fontSize: '17px' }}></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

