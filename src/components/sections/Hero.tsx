import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#101010]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay */}
      <div
        className="hero-overlay absolute inset-0 z-0"
        style={{ background: "rgba(10, 10, 18, 0.82)" }}
      />

      {/* Large decorative star — top right */}
      <div className="absolute -top-16 -right-16 w-80 h-80 opacity-[0.04] pointer-events-none select-none z-[1]">
        <Image src="/star-icon.svg" alt="" width={320} height={320} className="w-full h-full" />
      </div>

      {/* Large decorative star — bottom left */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 opacity-[0.04] pointer-events-none select-none rotate-12 z-[1]">
        <Image src="/star-icon.svg" alt="" width={288} height={288} className="w-full h-full" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] z-[1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 60px,#fff 60px,#fff 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#fff 60px,#fff 61px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">

        {/* Star + lines — branded accent mark */}
        <div className="hero-star flex justify-center items-center gap-4 mb-8">
          <div className="h-px w-20 bg-[#eabfd3]/30" />
          <Image src="/star-icon.svg" alt="" width={48} height={48} className="w-12 h-12" />
          <div className="h-px w-20 bg-[#eabfd3]/30" />
        </div>

        {/* Eyebrow */}
        <p
          className="hero-eyebrow text-[#eabfd3] text-lg sm:text-xl tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Alpharetta, Georgia
        </p>

        {/* H1 — each line animates in sequence */}
        <h1
          className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="hero-h1-1 block">Your Trusted</span>
          <span className="hero-h1-2 block text-[#eabfd3]">Bookkeeper</span>
          <span className="hero-h1-3 block">in Atlanta, GA</span>
        </h1>

        <p className="hero-sub text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We handle the numbers so you can handle your business.
          Clean books. No stress. Just results.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#eabfd3] hover:bg-[#d4a0b8] text-[#101010] font-bold text-lg px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto min-h-[52px]"
          >
            Book Your Free Call <i className="ph ph-arrow-right" style={{ fontSize: '20px' }}></i>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#eabfd3] text-white font-semibold text-lg px-9 py-4 rounded-full transition-all duration-200 hover:text-[#eabfd3] w-full sm:w-auto min-h-[52px]"
          >
            See Our Services
          </Link>
        </div>

        {/* Stats */}
        <div className="hero-stats mt-16 flex flex-col sm:flex-row justify-center gap-10 sm:gap-16">
          {[
            { num: "50+",  label: "Happy Clients" },
            { num: "10+",  label: "Years Experience" },
            { num: "100%", label: "QB Certified" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[#eabfd3] text-4xl font-black leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.num}
              </div>
              <div
                className="text-white/40 text-xs uppercase tracking-widest mt-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
