import { Star } from "lucide-react";

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
    quote: "My books were a mess for two years. They caught everything up in a few weeks and set me up right. Tax season was actually painless this year.",
    name: "Jessica L.",
    business: "Freelance Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Client Love</p>
          <h2 className="text-[#0f172a] text-3xl sm:text-4xl lg:text-5xl font-extrabold" style={{ fontFamily: "Sora,sans-serif" }}>
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-[#f59e0b]" fill="#f59e0b" />
                ))}
              </div>
              <p className="text-[#0f172a] text-base leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-slate-100 pt-5">
                <p className="font-bold text-[#0f172a] text-sm" style={{ fontFamily: "Sora,sans-serif" }}>{t.name}</p>
                <p className="text-[#475569] text-xs mt-0.5">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
