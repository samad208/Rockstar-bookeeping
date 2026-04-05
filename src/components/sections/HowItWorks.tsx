import Image from "next/image";
import { PhoneCall, Search, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Book a Free Call",
    description: "Schedule a quick 20-minute call. No pressure, no sales pitch. Just a real conversation about what you need.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Review Your Books",
    description: "We'll assess where things stand and put together a clear plan to get your finances organized and accurate.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Clean Financials Every Month",
    description: "Sit back while we handle everything. You get accurate books and easy-to-read reports delivered every month.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#eabfd3] text-lg tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Simple Process</p>
          <h2 className="text-[#101010] text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Getting Started Is Easy
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-xl mx-auto">
            Three simple steps and you&apos;ll never stress about your books again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative text-center bg-[#FDF5F7] rounded-2xl p-8 border border-[#E8D5DB] hover:border-[#eabfd3] hover:shadow-md hover:-translate-y-1 transition-all duration-300 fade-in"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Star watermark */}
              <div className="absolute top-3 right-3 w-10 h-10 opacity-20">
                <Image src="/star-icon.svg" alt="" width={40} height={40} className="w-full h-full" />
              </div>

              <div className="w-14 h-14 rounded-full bg-[#101010] flex items-center justify-center mx-auto mb-4 shadow-md">
                <step.icon size={24} className="text-white" />
              </div>
              <div
                className="text-[#eabfd3] text-5xl font-black mb-2 leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {step.number}
              </div>
              <h3 className="text-[#101010] font-black text-xl mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {step.title}
              </h3>
              <p className="text-[#6B6B6B] text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
