import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const services = [
  "Monthly Bookkeeping",
  "Payroll Management",
  "QuickBooks Setup",
  "Catch-Up Bookkeeping",
  "Tax Preparation",
  "Business Advisory",
];

const pages = [
  { label: "Home",         href: "/" },
  { label: "Services",     href: "/services" },
  { label: "About",        href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact",      href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo-white.svg"
                alt="Rockstar Bookkeeping"
                width={200}
                height={51}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              We handle the numbers so you can rock your business. Professional bookkeeping for small business owners in Alpharetta and greater Atlanta.
            </p>
            <p className="text-white/25 text-xs">
              Serving Alpharetta, Roswell, Marietta,<br />Sandy Springs & greater Atlanta, GA
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white text-sm uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/40 hover:text-[#C4849A] text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-white text-sm uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-white/40 hover:text-[#C4849A] text-sm transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white text-sm uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#C4849A] mt-0.5 shrink-0" />
                <a href="tel:+17705809908" className="text-white/40 hover:text-white text-sm transition-colors">
                  (770) 580-9908
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#C4849A] mt-0.5 shrink-0" />
                <a href="mailto:RockstarBookkeeping@outlook.com" className="text-white/40 hover:text-white text-sm transition-colors break-all">
                  RockstarBookkeeping@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C4849A] mt-0.5 shrink-0" />
                <span className="text-white/40 text-sm">Alpharetta, GA</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-[#C4849A] mt-0.5 shrink-0" />
                <span className="text-white/40 text-sm">Mon–Fri: 9am – 5pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <p>© {new Date().getFullYear()} Rockstar Bookkeeping. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
