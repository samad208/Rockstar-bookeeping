import Link from "next/link";
import { Phone, Mail, ArrowRight, Star } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#FDF5F7] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="flex justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="text-[#C4849A]" fill="#C4849A" />
          ))}
        </div>

        <h2 className="text-[#101010] text-4xl sm:text-5xl font-black mb-5 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Ready to Stop Stressing<br className="hidden sm:block" /> About Your Books?
        </h2>
        <p className="text-[#6B6B6B] text-lg sm:text-xl mb-10 max-w-xl mx-auto">
          The first call is free and there&apos;s zero pressure — just an honest conversation about how we can help.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#C4849A] hover:bg-[#A2687F] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 mb-10"
        >
          Book Your Free Consultation <ArrowRight size={20} />
        </Link>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-[#6B6B6B]">
          <a href="tel:+17705809908" className="flex items-center gap-2 hover:text-[#C4849A] transition-colors">
            <Phone size={16} />
            <span className="text-sm font-medium">(770) 580-9908</span>
          </a>
          <span className="hidden sm:block text-[#E8D5DB]">|</span>
          <a href="mailto:RockstarBookkeeping@outlook.com" className="flex items-center gap-2 hover:text-[#C4849A] transition-colors">
            <Mail size={16} />
            <span className="text-sm font-medium">RockstarBookkeeping@outlook.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
