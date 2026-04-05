import BookingCalendar from "@/components/BookingCalendar";

export default function BookingSection() {
  return (
    <section className="bg-[#0D1B2A] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <p
              className="text-[#E8A0B4] mb-4 tracking-[0.22em] uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem" }}
            >
              Book Your Free Call
            </p>
            <h2
              className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pick a Time That<br />Works for You
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              No forms. No waiting. Just pick a slot and we&apos;ll be there.
              Your first call is always free, always no pressure.
            </p>
            <ul className="space-y-4">
              {[
                "Free 20-minute call",
                "No commitment required",
                "We respond within 1 business day",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#E8A0B4]/15 border border-[#E8A0B4]/30 flex items-center justify-center flex-shrink-0">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#E8A0B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-white/75 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: calendar */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px]">
              <BookingCalendar />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
