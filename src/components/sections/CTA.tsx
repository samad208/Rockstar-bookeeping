import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2563a8] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight" style={{ fontFamily: "Sora,sans-serif" }}>
          Ready to Stop Stressing<br className="hidden sm:block" /> About Your Books?
        </h2>
        <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
          Let&apos;s talk. The first call is free, and there&apos;s no pressure — just an honest conversation about how we can help.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 mb-10"
        >
          Book Your Free Consultation <ArrowRight size={20} />
        </Link>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white/70">
          <a href="tel:+17705809908" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={17} />
            <span className="text-sm font-medium">(770) 580-9908</span>
          </a>
          <span className="hidden sm:block text-white/30">|</span>
          <a href="mailto:RockstarBookkeeping@outlook.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={17} />
            <span className="text-sm font-medium">RockstarBookkeeping@outlook.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
