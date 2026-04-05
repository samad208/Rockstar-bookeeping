const painPoints = [
  {
    icon: "ph-clock",
    question: "Are you spending weekends doing your own books?",
    answer: "Your free time is precious. Let us take it off your plate so you can actually enjoy your days off.",
  },
  {
    icon: "ph-trend-down",
    question: "Does tax season feel like a disaster every year?",
    answer: "No more scrambling. With clean books year-round, tax time becomes a non-event.",
  },
  {
    icon: "ph-question",
    question: "Do you have no idea if your business is actually profitable?",
    answer: "You deserve to know your numbers. We give you clear, simple reports that actually make sense.",
  },
];

export default function IsThisYou() {
  return (
    <section className="bg-[#FDF5F7] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#C4849A] text-lg tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Sound Familiar?</p>
          <h2 className="text-[#101010] text-4xl sm:text-5xl font-black"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Is This You?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-[#E8D5DB] shadow-sm hover:border-[#C4849A] hover:shadow-md hover:-translate-y-1 transition-all duration-300 fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#FDF5F7] border border-[#E8D5DB] flex items-center justify-center mb-5 text-[#C4849A]">
                <i className={`ph ${p.icon}`} style={{ fontSize: '22px', color: 'inherit' }}></i>
              </div>
              <h3 className="text-[#101010] font-bold text-xl mb-3 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {p.question}
              </h3>
              <p className="text-[#6B6B6B] text-base leading-relaxed">{p.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
