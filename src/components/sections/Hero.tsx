import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a3c5e] via-[#1e4a72] to-[#2563a8]">

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #fff 40px, #fff 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #fff 40px, #fff 41px)"
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">

        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="text-[#f59e0b]" fill="#f59e0b" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">Serving 50+ small businesses in Atlanta</span>
        </div>

        {/* Headline — H1 with primary keyword */}
        <h1
          className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Your Trusted{" "}
          <span className="text-[#f59e0b]">Bookkeeper</span>
          <br />
          in Alpharetta, GA
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-lg sm:text-xl lg:text-2xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          We handle the numbers so you can handle your business.
          Clean books. No stress. Just results.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center min-h-[52px]"
          >
            Book Your Free Call
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10 w-full sm:w-auto justify-center min-h-[52px]"
          >
            See Our Services
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { num: "50+",  label: "Happy Clients" },
            { num: "10+",  label: "Years Experience" },
            { num: "100%", label: "QuickBooks Certified" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[#f59e0b] text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "Sora,sans-serif" }}>
                {stat.num}
              </div>
              <div className="text-white/60 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
