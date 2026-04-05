import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="bg-[#FDF5F7] py-20 lg:py-28 relative overflow-hidden">

      {/* Decorative stars */}
      <div className="absolute -top-10 -left-10 w-48 h-48 opacity-[0.04] pointer-events-none select-none -rotate-12">
        <Image src="/star-icon.svg" alt="" width={192} height={192} className="w-full h-full" />
      </div>
      <div className="absolute -bottom-10 -right-10 w-56 h-56 opacity-[0.04] pointer-events-none select-none rotate-6">
        <Image src="/star-icon.svg" alt="" width={224} height={224} className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Star icon */}
        <div className="flex justify-center mb-6">
          <Image src="/star-icon.svg" alt="" width={56} height={56} className="w-14 h-14" />
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
          className="inline-flex items-center gap-2 bg-[#eabfd3] hover:bg-[#d4a0b8] text-[#101010] font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 mb-10"
        >
          Book Your Free Consultation <i className="ph ph-arrow-right" style={{ fontSize: '20px' }}></i>
        </Link>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-[#6B6B6B]">
          <a href="tel:+17705809908" className="flex items-center gap-2 hover:text-[#eabfd3] transition-colors">
            <i className="ph ph-phone" style={{ fontSize: '16px', color: 'inherit' }}></i>
            <span className="text-sm font-medium">(770) 580-9908</span>
          </a>
          <span className="hidden sm:block text-[#E8D5DB]">|</span>
          <a href="mailto:RockstarBookkeeping@outlook.com" className="flex items-center gap-2 hover:text-[#eabfd3] transition-colors">
            <i className="ph ph-envelope" style={{ fontSize: '16px', color: 'inherit' }}></i>
            <span className="text-sm font-medium">RockstarBookkeeping@outlook.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
