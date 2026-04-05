import { Star } from "lucide-react";

const tools = ["QuickBooks", "Gusto", "Xero", "Wave", "Stripe"];

const snippets = [
  { quote: "Finally stress-free books!", author: "Sarah M." },
  { quote: "Best investment I've made.", author: "James T." },
  { quote: "Freed up my weekends.", author: "Lisa R." },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tools */}
        <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-widest mb-8">
          Trusted tools we use for your books
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-10">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-slate-400 font-semibold text-sm sm:text-base tracking-wide hover:text-[#2563a8] transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Testimonial snippets */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {snippets.map((s) => (
            <div
              key={s.author}
              className="flex items-center gap-3 bg-[#f8fafc] border border-slate-200 rounded-xl px-5 py-3 w-full sm:w-auto"
            >
              <div className="flex gap-0.5 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-[#f59e0b]" fill="#f59e0b" />
                ))}
              </div>
              <p className="text-slate-700 text-sm">
                <span className="font-medium">&ldquo;{s.quote}&rdquo;</span>
                <span className="text-slate-400 text-xs ml-1">— {s.author}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
