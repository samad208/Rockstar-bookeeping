import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#101010]">

      {/* Pink glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#C4849A]/10 blur-3xl pointer-events-none" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 60px,#fff 60px,#fff 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#fff 60px,#fff 61px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">

        {/* Star icon row */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <div className="h-px w-16 bg-[#C4849A]/40" />
          <Star size={28} className="text-[#C4849A] fill-[#C4849A]" />
          <Star size={18} className="text-[#C4849A]/60 fill-[#C4849A]/60" />
          <Star size={28} className="text-[#C4849A] fill-[#C4849A]" />
          <div className="h-px w-16 bg-[#C4849A]/40" />
        </div>

        {/* Eyebrow */}
        <p
          className="text-[#C4849A] text-lg sm:text-xl tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Alpharetta, Georgia
        </p>

        {/* H1 */}
        <h1
          className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Trusted<br />
          <span className="text-[#C4849A]">Bookkeeper</span><br />
          in Atlanta, GA
        </h1>

        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We handle the numbers so you can handle your business.
          Clean books. No stress. Just results.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#C4849A] hover:bg-[#A2687F] text-white font-bold text-lg px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto min-h-[52px]"
          >
            Book Your Free Call <ArrowRight size={20} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#C4849A] text-white font-semibold text-lg px-9 py-4 rounded-full transition-all duration-200 hover:text-[#C4849A] w-full sm:w-auto min-h-[52px]"
          >
            See Our Services
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-10 sm:gap-16">
          {[
            { num: "50+",  label: "Happy Clients" },
            { num: "10+",  label: "Years Experience" },
            { num: "100%", label: "QB Certified" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[#C4849A] text-4xl font-black leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.num}
              </div>
              <div className="text-white/40 text-xs uppercase tracking-widest mt-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
