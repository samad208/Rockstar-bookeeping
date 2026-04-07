const snippets = [
  { quote: "Finally stress-free books!", author: "Sarah M." },
  { quote: "Best investment I've made.",  author: "James T." },
  { quote: "Freed up my weekends.",       author: "Lisa R."  },
];

/* Inline SVG / styled-text logos — no external URLs */
const logos = [
  {
    key: "quickbooks",
    node: (
      <svg viewBox="0 0 160 32" width="120" height="24" aria-label="QuickBooks">
        <circle cx="16" cy="16" r="16" fill="#2CA01C"/>
        <path d="M10 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm2 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" fill="#fff"/>
        <path d="M14 13h2v6h-2z" fill="#fff"/>
        <text x="38" y="22" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="800" fontSize="16" fill="#2CA01C">QuickBooks</text>
      </svg>
    ),
  },
  {
    key: "gusto",
    node: (
      <svg viewBox="0 0 80 32" width="72" height="24" aria-label="Gusto">
        <text x="0" y="23" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="800" fontSize="22" fill="#F45D48">gusto</text>
      </svg>
    ),
  },
  {
    key: "xero",
    node: (
      <svg viewBox="0 0 72 32" width="64" height="24" aria-label="Xero">
        <text x="0" y="23" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="800" fontSize="22" fill="#1AB4D7">xero</text>
      </svg>
    ),
  },
  {
    key: "wave",
    node: (
      <svg viewBox="0 0 80 32" width="72" height="24" aria-label="Wave">
        <text x="0" y="23" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="700" fontSize="22" fill="#00B0B9">Wave</text>
      </svg>
    ),
  },
  {
    key: "stripe",
    node: (
      <svg viewBox="0 0 80 32" width="72" height="24" aria-label="Stripe">
        <text x="0" y="23" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="800" fontSize="22" fill="#635BFF">stripe</text>
      </svg>
    ),
  },
];

/* duplicate for seamless loop */
const marqueeItems = [...logos, ...logos];

export default function SocialProof() {
  return (
    <section className="bg-white py-12 border-b border-[#F0D8E0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-[#eabfd3] text-sm tracking-[0.3em] uppercase mb-8"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Trusted tools we use for your books
        </p>
      </div>

      {/* Marquee — full bleed */}
      <div className="sp-marquee-mask">
        <div className="sp-marquee-track">
          {marqueeItems.map((logo, i) => (
            <div key={`${logo.key}-${i}`} className="sp-logo-item">
              {logo.node}
            </div>
          ))}
        </div>
      </div>

      {/* Snippet row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {snippets.map((s) => (
            <div
              key={s.author}
              className="flex items-center gap-3 bg-[#FDF5F7] border border-[#E8D5DB] rounded-xl px-5 py-3 w-full sm:w-auto"
            >
              <span className="text-[#E8A0B4] text-sm shrink-0" style={{ letterSpacing: "2px" }}>★★★★★</span>
              <p className="text-[#101010] text-sm">
                <span className="font-medium">&ldquo;{s.quote}&rdquo;</span>
                <span className="text-[#6B6B6B] text-xs ml-1">{s.author}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
