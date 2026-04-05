"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Star } from "lucide-react";

const navLinks = [
  { label: "Services",      href: "/services" },
  { label: "About",         href: "/about" },
  { label: "How It Works",  href: "/how-it-works" },
  { label: "Testimonials",  href: "/testimonials" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? "bg-[#101010] shadow-lg" : "bg-[#101010]/90 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="flex items-center">
              <span
                className="text-white font-black text-2xl tracking-tight leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ROCK
              </span>
              <Star size={22} className="text-[#C4849A] fill-[#C4849A] mx-1 group-hover:scale-110 transition-transform" />
              <span
                className="text-white font-black text-2xl tracking-tight leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                AR
              </span>
            </div>
            <span
              className="text-[#C4849A] text-[9px] font-bold tracking-[0.25em] uppercase self-end mb-0.5"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.3em" }}
            >
              Bookkeeping
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#C4849A]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#C4849A] hover:bg-[#A2687F] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#101010] flex flex-col items-center justify-center gap-8 md:hidden">
          <div className="flex items-center gap-2 mb-4">
            <Star size={32} className="text-[#C4849A] fill-[#C4849A]" />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-3xl font-black hover:text-[#C4849A] transition-colors"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#C4849A] hover:bg-[#A2687F] text-white font-bold text-lg px-9 py-3.5 rounded-full transition-all mt-4"
          >
            Book a Free Call
          </Link>
        </div>
      )}
    </>
  );
}
