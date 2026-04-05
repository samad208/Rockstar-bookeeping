Here's the full homepage layout wireframe for Rockstar Bookkeeping, designed section-by-section according to your specifications.

First, let's set up the main `HomePage` component that will orchestrate all the sections.

```tsx
// app/page.tsx
import { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google'; // Import fonts for local loading if preferred, or use global CSS
import HeroSection from '@/components/HeroSection';
import SocialProofBar from '@/components/SocialProofBar';
import ProblemIdentification from '@/components/ProblemIdentification';
import ServicesOverview from '@/components/ServicesOverview';
import AboutPreview from '@/components/AboutPreview';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import FinalCTASection from '@/components/FinalCTASection';
import Header from '@/components/Header'; // Assuming a simple header for navigation
import Footer from '@/components/Footer'; // Assuming a simple footer

// Configure Google Fonts for local loading (best practice for Next.js)
const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rockstar Bookkeeping - We handle the numbers. You rock the business.',
  description: 'Premium professional accounting and bookkeeping services for small business owners and entrepreneurs. Book a free consultation today!',
};

export default function HomePage() {
  return (
    <div className={`${sora.variable} ${inter.variable} font-inter antialiased`}>
      <Header /> {/* Placeholder for a navigation header */}
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemIdentification />
        <ServicesOverview />
        <AboutPreview />
        <HowItWorks />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer /> {/* Placeholder for a footer */}
    </div>
  );
}

// Placeholder components for Header and Footer, to be implemented if requested
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 text-primary-navy text-2xl font-sora font-extrabold">
          <span className="text-primary-light">🎸</span> Rockstar Bookkeeping
        </a>
        <nav className="hidden md:flex space-x-8 text-text-primary">
          <a href="#services" className="hover:text-primary-light transition-colors duration-200">Services</a>
          <a href="#about" className="hover:text-primary-light transition-colors duration-200">About Us</a>
          <a href="#how-it-works" className="hover:text-primary-light transition-colors duration-200">How It Works</a>
          <a href="#testimonials" className="hover:text-primary-light transition-colors duration-200">Testimonials</a>
          <a href="#contact" className="px-6 py-2 bg-accent-gold text-text-primary rounded-full font-inter font-medium hover:bg-accent-light transition-colors duration-200 shadow-md">Book a Call</a>
        </nav>
        <button className="md:hidden p-2 rounded-md text-text-primary hover:bg-surface transition-colors duration-200">
          {/* Mobile menu icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-dark-bg text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="flex items-center gap-2 text-background text-2xl font-sora font-extrabold mb-4">
            <span className="text-accent-gold">🎸</span> Rockstar Bookkeeping
          </a>
          <p className="text-text-secondary-light text-sm max-w-xs">
            We handle the numbers. You rock the business.
            Premium bookkeeping services for small businesses.
          </p>
        </div>

        <div>
          <h3 className="font-sora font-semibold text-lg mb-4 text-accent-gold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-primary-light transition-colors duration-200">Services</a></li>
            <li><a href="#about" className="hover:text-primary-light transition-colors duration-200">About Us</a></li>
            <li><a href="#how-it-works" className="hover:text-primary-light transition-colors duration-200">How It Works</a></li>
            <li><a href="#testimonials" className="hover:text-primary-light transition-colors duration-200">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sora font-semibold text-lg mb-4 text-accent-gold">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-primary-light"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+17705809908" className="hover:text-primary-light transition-colors duration-200">(770) 580-9908</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-primary-light"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:RockstarBookkeeping@outlook.com" className="hover:text-primary-light transition-colors duration-200">RockstarBookkeeping@outlook.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border-dark mt-8 pt-8 text-center text-sm text-text-secondary-light">
        &copy; {new Date().getFullYear()} Rockstar Bookkeeping. All rights reserved.
      </div>
    </footer>
  );
}

```

Now, let's define the individual section components in the `components` directory.

---

### SECTION 1 - HERO (above the fold)

**Layout and Visual Intent:**
This section features a bold, centered headline and a concise subheadline, immediately communicating value. A prominent call-to-action button encourages bookings, reinforced by a subtle trust signal. The background uses a subtle, warm gradient to evoke approachability and energy, moving from a light blue to a soft golden hue, avoiding a stark white or cold feel.

**Specific Design Decisions:**
*   **Layout:** Flex column, centered items, `max-w-4xl` for text content.
*   **Spacing:** `py-24` on mobile, `py-32` on larger screens. `gap-6` between text elements. `mb-8` for the trust signal.
*   **Colors:**
    *   Background: `linear-gradient(135deg, #2563a8 0%, #fbbf24 100%)` (Primary Light to Accent Light). Achieved with `bg-gradient-to-br from-primary-light to-accent-light`.
    *   Headline: `text-background` (`#ffffff`) for contrast.
    *   Subheadline: `text-background` (`#ffffff`).
    *   CTA Button: `bg-accent-gold` (`#f59e0b`), `text-primary-navy` (`#1a3c5e`). Hover: `bg-accent-light` (`#fbbf24`).
    *   Trust Signal: `text-background` (`#ffffff`).
*   **Font Sizes:**
    *   Headline: `text-4xl` (`sm:text-5xl`, `md:text-6xl`, `lg:text-7xl`) - `font-sora` `font-extrabold` (800).
    *   Subheadline: `text-lg` (`sm:text-xl`, `md:text-2xl`) - `font-inter` `font-medium` (500).
    *   CTA Button: `text-xl` - `font-inter` `font-semibold` (600).
    *   Trust Signal: `text-md` (`sm:text-lg`) - `font-inter` `font-normal` (400).
*   **Imagery:** No explicit image, the gradient serves as the visual background.

```tsx
// components/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light to-accent-light text-background py-24 sm:py-32 md:py-40 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        {/* Headline */}
        <h1 className="font-sora font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-up">
          Finally, <span className="text-accent-gold-light">Stress-Free Bookkeeping</span> for Your Business.
        </h1>

        {/* Subheadline */}
        <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-10 opacity-0 animate-fade-in-up animation-delay-200">
          Get crystal-clear financials and reclaim your time to focus on what you do best.
        </p>

        {/* Primary CTA Button */}
        <Link href="/book-a-call" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-accent-gold text-primary-navy font-inter font-semibold text-xl shadow-lg hover:bg-accent-light transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 mb-8 opacity-0 animate-fade-in-up animation-delay-400">
          Book a Free Call
        </Link>

        {/* Trust Signal */}
        <p className="font-inter font-normal text-md sm:text-lg opacity-0 animate-fade-in-up animation-delay-600">
          Serving 50+ small businesses in Atlanta and beyond.
        </p>
      </div>
    </section>
  );
}
```

---

### SECTION 2 - SOCIAL PROOF BAR

**Layout and Visual Intent:**
This section is a visually light but impactful display of trust. It features a row of recognizable accounting software logos followed by a compact row of 5-star testimonial snippets. The aim is to quickly establish credibility and expertise by showing familiarity with industry tools and client satisfaction.

**Specific Design Decisions:**
*   **Layout:** Two distinct rows, both centered horizontally. Logos use a flex layout with `gap-x-8` and `flex-wrap`. Testimonials are also a flex row, potentially scrolling on mobile or wrapping.
*   **Spacing:** `py-12` vertical padding. `gap-8` for logos, `gap-6` for testimonials.
*   **Colors:**
    *   Background: `bg-surface` (`#f8fafc`).
    *   Logos: Muted grayscale (achieved with Tailwind's `grayscale` and `opacity` classes) to be professional and not distract.
    *   Testimonial Text: `text-text-primary` (`#0f172a`) for snippets, `text-text-secondary` (`#475569`) for names.
    *   Stars: `text-accent-gold` (`#f59e0b`).
*   **Font Sizes:**
    *   Testimonial Snippets: `text-sm` (`sm:text-base`) - `font-inter` `font-medium` (500).
    *   Client Name: `text-xs` (`sm:text-sm`) - `font-inter` `font-normal` (400).
*   **Imagery:** SVG logos (QuickBooks, Xero, Gusto, Wave, Stripe). Star icon (`StarIcon` from `lucide-react`).

```tsx
// components/SocialProofBar.tsx
import { StarIcon } from 'lucide-react';
import Image from 'next/image';

export default function SocialProofBar() {
  const softwareLogos = [
    { src: '/logos/quickbooks.svg', alt: 'QuickBooks Logo' },
    { src: '/logos/xero.svg', alt: 'Xero Logo' },
    { src: '/logos/gusto.svg', alt: 'Gusto Logo' },
    { src: '/logos/wave.svg', alt: 'Wave Logo' },
    { src: '/logos/stripe.svg', alt: 'Stripe Logo' },
  ];

  const testimonials = [
    { text: "Rockstar Bookkeeping transformed our finances!", author: "Sarah J." },
    { text: "Efficient, reliable, and always on point.", author: "Mark T." },
    { text: "Freed up so much of my time!", author: "Emily R." },
  ];

  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 mb-10 sm:mb-14">
          {softwareLogos.map((logo, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120} // Adjusted for better visual balance
                height={40} // Adjusted for better visual balance
                className="grayscale hover:grayscale-0 transition-all duration-300 h-8 sm:h-10 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Testimonial Snippets Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-text-primary">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-border w-full sm:w-auto max-w-xs text-center sm:text-left animate-fade-in-up animation-delay-200">
              <div className="flex-shrink-0 flex text-accent-gold">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-inter font-medium text-sm sm:text-base text-text-primary leading-tight">
                &ldquo;{testimonial.text}&rdquo;
                <span className="block text-xs sm:text-sm text-text-secondary mt-1">&mdash; {testimonial.author}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### SECTION 3 - IS THIS YOU? (Problem identification)

**Layout and Visual Intent:**
This section identifies common pain points for small business owners, presented as empathetic questions with short, understanding responses. It uses a grid layout to make the problems easy to digest, aiming to resonate with the visitor's struggles and implicitly position Rockstar Bookkeeping as the solution.

**Specific Design Decisions:**
*   **Layout:** Centered section title. A responsive grid of 3 items on desktop, stacking on mobile. Each item is a card-like structure.
*   **Spacing:** `py-16` (`lg:py-24`) vertical padding. `gap-8` between grid items. `mb-12` for the title.
*   **Colors:**
    *   Background: `bg-background` (`#ffffff`).
    *   Title: `text-text-primary` (`#0f172a`).
    *   Card Background: `bg-surface` (`#f8fafc`).
    *   Card Border: `border-border` (`#e2e8f0`).
    *   Question Text: `text-text-primary` (`#0f172a`).
    *   Response Text: `text-text-secondary` (`#475569`).
*   **Font Sizes:**
    *   Title: `text-3xl` (`sm:text-4xl`, `lg:text-5xl`) - `font-sora` `font-bold` (700).
    *   Question: `text-xl` (`sm:text-2xl`) - `font-sora` `font-semibold` (600).
    *   Response: `text-md` (`sm:text-lg`) - `font-inter` `font-normal` (400).
*   **Imagery:** No specific imagery, focus is on text and empathy.

```tsx
// components/ProblemIdentification.tsx
import { Clock, DollarSign, Calendar } from 'lucide-react';

export default function ProblemIdentification() {
  const painPoints = [
    {
      icon: Clock,
      question: 'Are you spending weekends doing your own books?',
      response: 'We get it. Your free time is precious. Let us take over so you can focus on life, not ledgers.',
    },
    {
      icon: DollarSign,
      question: 'Worried about tax season or missed deductions?',
      response: 'Financial anxiety is real. Our meticulous bookkeeping ensures you’re always prepared and optimized.',
    },
    {
      icon: Calendar,
      question: 'Confused by your financial reports?',
      response: 'Numbers shouldn’t be a mystery. We provide clear, actionable insights so you understand your business health.',
    },
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-12 animate-fade-in-up">
          Is This You?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-surface p-8 rounded-xl shadow-md border border-border flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${index * 100 + 200}ms` }}>
              <point.icon size={48} className="text-primary-light mb-6" />
              <h3 className="font-sora font-semibold text-xl sm:text-2xl text-text-primary mb-4 leading-snug">
                {point.question}
              </h3>
              <p className="font-inter font-normal text-md sm:text-lg text-text-secondary">
                {point.response}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### SECTION 4 - SERVICES OVERVIEW

**Layout and Visual Intent:**
This section presents Rockstar Bookkeeping's core services using a grid of visually appealing cards. Each card features an icon, service name, and a brief description, making it easy for visitors to quickly grasp the offerings. The layout is clean and uses ample white space to prevent clutter.

**Specific Design Decisions:**
*   **Layout:** Centered section title. A responsive grid of 2x2 cards on desktop, 1x4 on mobile.
*   **Spacing:** `py-16` (`lg:py-24`) vertical padding. `gap-8` between grid items. `mb-12` for the title.
*   **Colors:**
    *   Background: `bg-surface` (`#f8fafc`).
    *   Title: `text-text-primary` (`#0f172a`).
    *   Card Background: `bg-background` (`#ffffff`).
    *   Card Border: `border-border` (`#e2e8f0`).
    *   Card Icon: `text-primary-light` (`#2563a8`).
    *   Card Name: `text-text-primary` (`#0f172a`).
    *   Card Description: `text-text-secondary` (`#475569`).
*   **Font Sizes:**
    *   Title: `text-3xl` (`sm:text-4xl`, `lg:text-5xl`) - `font-sora` `font-bold` (700).
    *   Card Name: `text-xl` - `font-sora` `font-semibold` (600).
    *   Card Description: `text-md` - `font-inter` `font-normal` (400).
*   **Imagery:** `lucide-react` icons (e.g., `BookText`, `Wallet`, `Settings`, `Clock`).

```tsx
// components/ServicesOverview.tsx
import { BookText, Wallet, Settings, Clock } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      icon: BookText,
      name: 'Monthly Bookkeeping',
      description: 'Keep your financials accurate and up-to-date with regular transaction categorization.',
    },
    {
      icon: Wallet,
      name: 'Payroll Management',
      