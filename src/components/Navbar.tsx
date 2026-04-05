"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1a3c5e] to-[#2563a8] flex items-center justify-center shadow">
              <span className="text-white font-bold text-base" style={{ fontFamily: "Sora,sans-serif" }}>R</span>
            </div>
            <div className="leading-none">
              <span
                className={`block font-bold text-base tracking-tight transition-colors ${
                  scrolled || menuOpen ? "text-[#1a3c5e]" : "text-white"
                }`}
                style={{ fontFamily: "Sora,sans-serif" }}
              >
                Rockstar
              </span>
              <span className="block text-[#f59e0b] text-[10px] font-semibold tracking-widest uppercase">
                Bookkeeping
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#f59e0b]"
                    : scrolled
                    ? "text-slate-600 hover:text-[#1a3c5e]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled || menuOpen ? "text-slate-700" : "text-white"
            }`}
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
        <div className="fixed inset-0 z-40 bg-[#0f172a] flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-2xl font-semibold hover:text-[#f59e0b] transition-colors"
              style={{ fontFamily: "Sora,sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] text-lg font-bold px-8 py-3 rounded-full transition-all mt-4"
          >
            Book a Free Call
          </Link>
        </div>
      )}
    </>
  );
}
