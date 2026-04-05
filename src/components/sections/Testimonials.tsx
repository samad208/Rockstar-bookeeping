import Image from "next/image";

const testimonials = [
  {
    quote: "I used to dread opening QuickBooks. Now I get a clean report every month without lifting a finger. Best decision I made for my business.",
    name: "Sarah P.",
    business: "E-commerce Shop Owner",
  },
  {
    quote: "Payroll used to take me half a day. Rockstar handles everything and I haven't had a single issue. Worth every penny.",
    name: "Marcus T.",
    business: "Restaurant Owner, Atlanta",
  },
  {
    quote: "My books were a mess for two years. They caught everything up in a few weeks. Tax season was actually painless this year.",
    name: "Jessica L.",
    business: "Freelance Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#101010] py-20 lg:py-28 relative overflow-hidden">

      {/* Decorative star background — subtle, far right */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.04] pointer-events-none select-none">
        <Image src="/star-icon.svg" alt="" width={384} height={384} className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {/* Branded accent star above label — keep */}
          <div className="flex justify-center mb-4">
            <Image src="/star-icon.svg" alt="" width={36} height={36} className="w-9 h-9 opacity-80" />
          </div>
          <p className="text-[#eabfd3] text-lg tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Client Love</p>
          <h2 className="text-white text-4xl sm:text-5xl font-black"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 hover:border-[#eabfd3]/50 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Rating stars — unicode ★ */}
              <div className="mb-5" style={{ color: '#E8A0B4', fontSize: '14px', letterSpacing: '2px' }}>
                ★★★★★
              </div>
              <p className="text-white/80 text-base leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-5">
                <p className="font-black text-white text-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{t.name}</p>
                <p className="text-white/40 text-xs mt-0.5">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
