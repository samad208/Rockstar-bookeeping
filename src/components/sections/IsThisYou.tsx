import { Clock, TrendingDown, HelpCircle } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    question: "Are you spending weekends doing your own books?",
    answer: "Your free time is precious. Let us take it off your plate so you can actually enjoy your days off.",
  },
  {
    icon: TrendingDown,
    question: "Does tax season feel like a disaster every year?",
    answer: "No more scrambling. With clean books year-round, tax time becomes a non-event.",
  },
  {
    icon: HelpCircle,
    question: "Do you have no idea if your business is actually profitable?",
    answer: "You deserve to know your numbers. We give you clear, simple reports that actually make sense.",
  },
];

export default function IsThisYou() {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Sound Familiar?</p>
          <h2 className="text-[#0f172a] text-3xl sm:text-4xl lg:text-5xl font-extrabold" style={{ fontFamily: "Sora,sans-serif" }}>
            Is This You?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-5">
                <p.icon size={24} className="text-[#2563a8]" />
              </div>
              <h3 className="text-[#0f172a] font-bold text-lg mb-3 leading-snug" style={{ fontFamily: "Sora,sans-serif" }}>
                {p.question}
              </h3>
              <p className="text-[#475569] text-base leading-relaxed">{p.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
