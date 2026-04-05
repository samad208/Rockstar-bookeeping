import Image from "next/image";

const tools = ["QuickBooks", "Gusto", "Xero", "Wave", "Stripe"];

const snippets = [
  { quote: "Finally stress-free books!", author: "Sarah M." },
  { quote: "Best investment I've made.", author: "James T." },
  { quote: "Freed up my weekends.", author: "Lisa R." },
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
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-10">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-[#6B6B6B] font-semibold text-base tracking-wide hover:text-[#eabfd3] transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {snippets.map((s, i) => (
            <div
              key={s.author}
              className="flex items-center gap-3 bg-[#FDF5F7] border border-[#E8D5DB] rounded-xl px-5 py-3 w-full sm:w-auto"
            >
              <Image src="/star-icon.svg" alt="" width={20} height={20} className="w-5 h-5 shrink-0" />
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
