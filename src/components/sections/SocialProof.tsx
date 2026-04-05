const snippets = [
  { quote: "Finally stress-free books!", author: "Sarah M." },
  { quote: "Best investment I've made.", author: "James T." },
  { quote: "Freed up my weekends.", author: "Lisa R." },
];

const logos = [
  {
    type: "img" as const,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/QuickBooks_logo.svg/200px-QuickBooks_logo.svg.png",
    alt: "QuickBooks",
  },
  {
    type: "text" as const,
    label: "Gusto",
    color: "#F45D48",
  },
  {
    type: "img" as const,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Xero_software_logo.svg/200px-Xero_software_logo.svg.png",
    alt: "Xero",
  },
  {
    type: "text" as const,
    label: "Wave",
    color: "#1ACAFF",
  },
  {
    type: "img" as const,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/200px-Stripe_Logo%2C_revised_2016.svg.png",
    alt: "Stripe",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-12 border-b border-[#F0D8E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-[#eabfd3] text-sm tracking-[0.3em] uppercase mb-8"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Trusted tools we use for your books
        </p>

        {/* Logo row */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 mb-10">
          {logos.map((logo) =>
            logo.type === "img" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="tool-logo"
              />
            ) : (
              <span
                key={logo.label}
                className="font-bold text-lg tracking-wide tool-logo"
                style={{ color: logo.color, height: 'auto', display: 'inline-block' }}
              >
                {logo.label}
              </span>
            )
          )}
        </div>

        {/* Snippet row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {snippets.map((s) => (
            <div
              key={s.author}
              className="flex items-center gap-3 bg-[#FDF5F7] border border-[#E8D5DB] rounded-xl px-5 py-3 w-full sm:w-auto"
            >
              <span className="text-[#E8A0B4] text-sm shrink-0" style={{ letterSpacing: '2px' }}>★★★★★</span>
              <p className="text-[#101010] text-sm">
                <span className="font-medium">&ldquo;{s.quote}&rdquo;</span>
                <span className="text-[#6B6B6B] text-xs ml-1">— {s.author}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
