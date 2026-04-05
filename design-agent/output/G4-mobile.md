Rockstar Bookkeeping's mobile design needs to be a primary consideration given the 60%+ mobile visitor statistic. The brand's clean, minimal, and professional style translates well to mobile, but careful attention to spacing, typography, and tap targets is crucial.

Here's a mobile-specific design review with guidance and Tailwind CSS fixes:

---

### 1. NAVIGATION - Hamburger Menu Design, Logo and CTA on Mobile Header, Sticky Header

**Guidance:**
The mobile header should feature a clear, accessible hamburger menu icon (e.g., Lucide's `Menu` icon), the brand logo, and potentially a concise CTA button for immediate action. The header should be sticky to provide persistent navigation and branding. When the hamburger menu is opened, it should reveal a full-screen or slide-out overlay with primary navigation links, ensuring ample tap target size.

**Potential Issues & Tailwind Fixes:**
*   **Overlapping Elements:** Without proper `z-index` and `position: fixed`, the header can overlap content or be scrolled away.
    *   **Fix:** Use `fixed top-0 left-0 w-full z-50 bg-white shadow-md` for the header.
*   **Tiny Tap Targets:** Hamburger icon and CTA button might be too small.
    *   **Fix:** Ensure the hamburger icon wrapper has a `min-w-[48px] min-h-[48px]` (or similar padding) and the CTA button adheres to the 44px minimum tap target.
*   **Logo Sizing:** Logo might be too large or too small, or not centered appropriately.
    *   **Fix:** `h-8` (or `h-10`) for the logo, `flex items-center justify-between` for the header content.

**Example Mobile Header Structure (Conceptual):**

```tsx
// This is a conceptual structure, not a full component, to illustrate the points.
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Assume a state for menu open/close is managed in a 'use client' wrapper
const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Example state

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-3 px-4 flex items-center justify-between lg:hidden">
      <Link href="/" className="flex items-center">
        <Image src="/logo.svg" alt="Rockstar Bookkeeping" width={160} height={32} className="h-8 w-auto" />
      </Link>

      <div className="flex items-center gap-4">
        {/* Mobile CTA (optional, if space allows) */}
        <Link href="/contact" className="hidden sm:inline-flex bg-primary-light text-white px-4 py-2 rounded-full font-inter text-sm font-medium hover:bg-[#1f508a] transition-colors duration-200">
          Get Started
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md text-text-primary hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary-light transition-colors duration-200 min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Full-screen overlay menu (example) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center p-8 lg:hidden">
          {/* Close button, navigation links */}
        </div>
      )}
    </header>
  );
};
```

---

### 2. HERO SECTION - Headline Font Size, CTA Button Tap Target, Image Stacking

**Guidance:**
The hero section needs to be highly impactful yet concise on mobile. The headline should scale down significantly for readability without overwhelming the screen. The CTA buttons must meet the 44px tap target minimum, and any accompanying images should stack vertically below the text content to maintain flow.

**Potential Issues & Tailwind Fixes:**
*   **Overly Large Headlines:** Desktop `H1` will break the layout or be unreadable on mobile.
    *   **Fix:** Use responsive font sizes. `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl` will scale `H1` effectively.
*   **Tiny CTA Buttons:** Small buttons are hard to tap.
    *   **Fix:** Ensure buttons have sufficient `py-3 px-6` and a `min-h-[48px]` for both primary and secondary CTAs. Consider `w-full` for primary CTAs on very small screens.
*   **Horizontal Overflow/Bad Image Placement:** Images next to text will cause overflow or look cramped.
    *   **Fix:** Use `flex flex-col md:flex-row` to stack elements vertically on mobile and horizontally on larger screens. Use `order-first md:order-none` if the image should appear below the text on mobile but next to it on desktop.

**Example Hero Section Scaling:**

```html
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
    <div className="text-center md:text-left md:w-1/2 order-last md:order-first">
      <h1 className="font-sora font-extrabold text-text-primary text-4xl leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight mb-6">
        We handle the numbers. <br className="hidden sm:inline" />You <span className="text-primary-light">rock the business.</span>
      </h1>
      <p className="font-inter text-lg text-text-secondary mb-8 max-w-xl mx-auto md:mx-0">
        Premium bookkeeping and accounting services designed for entrepreneurs and small business owners. Focus on growth, we'll handle the rest.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Link href="/services" className="inline-flex items-center justify-center bg-primary-light text-white px-6 py-3 rounded-full font-inter font-medium text-base hover:bg-[#1f508a] transition-colors duration-200 min-h-[48px] w-full sm:w-auto">
          Explore Services
        </Link>
        <Link href="/contact" className="inline-flex items-center justify-center bg-transparent border-2 border-primary-light text-primary-light px-6 py-3 rounded-full font-inter font-medium text-base hover:bg-primary-light hover:text-white transition-colors duration-200 min-h-[48px] w-full sm:w-auto">
          Book a Consultation
        </Link>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center md:justify-end order-first md:order-last">
      {/* Example Image */}
      <Image src="/hero-image.png" alt="Happy entrepreneur" width={600} height={400} className="rounded-lg shadow-lg max-w-full h-auto" />
    </div>
  </div>
</section>
```

---

### 3. CARDS AND GRIDS - Service Cards, Testimonial Cards, 3-Step Process

**Guidance:**
Multi-column layouts are generally unsuitable for mobile. All card-based sections (service cards, testimonials, process steps) should collapse into a single vertical column on mobile screens. This ensures readability and prevents horizontal scrolling.

**Potential Issues & Tailwind Fixes:**
*   **Horizontal Overflow:** Grids with multiple columns will break on small screens.
    *   **Fix:** Use responsive grid classes: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`. This will make it `1-column` on mobile, `2-columns` on medium screens, and `3-columns` on large screens.
*   **Cramped Cards:** Cards may look too small or have insufficient internal padding.
    *   **Fix:** Ensure internal padding is consistent (`p-6` or `p-8`) and the card itself has enough height.
*   **Process Steps:** A 3-step horizontal process will need to become vertical.
    *   **Fix:** Use `flex flex-col md:flex-row items-start gap-8` for the container of the steps. Each step should then be `flex-none md:flex-1` or `w-full md:w-auto`.

**Example Card/Grid Structure:**

```html
<!-- Service Cards Example -->
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
  <div className="max-w-7xl mx-auto">
    <h2 className="font-sora text-3xl sm:text-4xl font-bold text-center text-text-primary mb-10">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Service Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-border flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200">
        <div className="text-primary-light mb-4">
          <Briefcase size={48} /> {/* Example Lucide icon */}
        </div>
        <h3 className="font-sora text-xl font-semibold text-text-primary mb-3">Bookkeeping</h3>
        <p className="font-inter text-text-secondary text-base">Accurate and timely recording of all your financial transactions.</p>
      </div>
      {/* ... other service cards */}
    </div>
  </div>
</section>

<!-- 3-Step Process Example -->
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="font-sora text-3xl sm:text-4xl font-bold text-center text-text-primary mb-10">Our Simple Process</h2>
    <div className="flex flex-col md:flex-row justify-center items-start gap-8">
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center md:flex-1 p-4">
        <span className="bg-primary-light text-white font-sora text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-full mb-4">1</span>
        <h3 className="font-sora text-xl font-semibold text-text-primary mb-2">Connect & Consult</h3>
        <p className="font-inter text-text-secondary text-base">We start with a free consultation to understand your unique needs.</p>
      </div>
      {/* ... Step 2, Step 3 */}
    </div>
  </div>
</section>
```

---

### 4. TYPOGRAPHY SCALING - H1, Body Text, Button Text

**Guidance:**
Typography must be legible and appropriately scaled across all screen sizes. Headers should be punchy but not overwhelming on mobile, while body text must maintain a minimum `16px` size for readability. Button text should be clear and fit within the button's tap target.

**Potential Issues & Tailwind Fixes:**
*   **Unreadable Small Body Text:** Default browser font sizes can be too small.
    *   **Fix:** Explicitly set body text to `text-base` (16px) or `text-lg` (18px) for better readability: `text-base sm:text-lg`.
*   **Overly Large Headlines:** H1s and H2s need to scale down.
    *   **Fix:** Use responsive font classes:
        *   `H1`: `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`
        *   `H2`: `text-3xl sm:text-4xl lg:text-5xl`
        *   `H3`: `text-xl sm:text-2xl lg:text-3xl`
*   **Tiny Button Text:** Button text should be legible and fit the button.
    *   **Fix:** `text-sm sm:text-base` for buttons, ensuring `min-h-[48px]` for the button itself.

**Tailwind Font Scaling Examples:**

*   **H1 (Sora):** `font-sora font-extrabold text-text-primary text-4xl leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight`
*   **Body (Inter):** `font-inter text-text-secondary text-base sm:text-lg`
*   **Button Text (Inter):** `font-inter font-medium text-sm sm:text-base`

---

### 5. SPACING - Padding/Margin for Mobile, Section Spacing

**Guidance:**
Mobile layouts require careful attention to spacing to prevent content from feeling cramped. Ample horizontal padding on containers and consistent vertical spacing between sections are key to maintaining a clean, minimal aesthetic.

**Potential Issues & Tailwind Fixes:**
*   **Cramped Content:** Content touching screen edges.
    *   **Fix:** Apply horizontal padding to main containers: `px-4 sm:px-6 lg:px-8`. This provides `1rem` on mobile, scaling up to `1.5rem` on small screens and `2rem` on larger.
*   **Inconsistent Vertical Spacing:** Sections running into each other, or too much/too little space.
    *   **Fix:** Use responsive vertical padding for sections: `py-8 sm:py-12 lg:py-16`. This provides `2rem` on mobile, `3rem` on small screens, and `4rem` on large screens.
*   **Small Gaps in Grids/Flexes:** Gaps between cards or list items might be too small on mobile.
    *   **Fix:** Use responsive gap utilities: `gap-y-6 sm:gap-y-8 md:gap-y-10` for vertical spacing in stacked layouts, and `gap-x-4 sm:gap-x-6` for horizontal gaps in multi-column layouts.

**General Spacing Recommendations:**

*   **Container Padding:** `container mx-auto px-4 sm:px-6 lg:px-8`
*   **Section Vertical Spacing:** `py-12 sm:py-16 lg:py-20`
*   **Component Spacing:** `mb-4`, `gap-4` (adjust as needed, but lean towards slightly larger gaps on mobile for better separation).

---

### 6. FORMS - Input Field Sizing, Submit Button Full Width, Keyboard Behavior

**Guidance:**
Forms on mobile must be highly usable. Input fields should be full width with sufficient height for easy tapping. The submit button should also be full width to be easily tappable. Consider the user experience when the virtual keyboard appears, ensuring fields are not obscured.

**Potential Issues & Tailwind Fixes:**
*   **Tiny Input Fields:** Fields that are too small horizontally or vertically.
    *   **Fix:** `w-full` for all input fields. `h-12` or `py-3 px-4` to ensure a minimum height of 48px for easy tapping.
*   **Submit Button Not Full Width:** Difficult to tap on mobile if small.
    *   **Fix:** Apply `w-full` to the submit button.
*   **Keyboard Obscuring Inputs:** When the keyboard appears, it can cover the active input field or the submit button.
    *   **Fix:** While largely a browser/OS behavior, ensure the page content is scrollable (`overflow-y-auto` on the main content area). Avoid `height: 100vh` on containers that hold forms if content might exceed screen height when the keyboard is active. Use `position: sticky` or `position: fixed` sparingly for elements near forms that aren't critical navigation.

**Example Form Structure:**

```tsx
// Example 'use client' for form handling
'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic (e.g., API call)
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-border">
        <h2 className="font-sora text-2xl sm:text-3xl font-bold text-center text-text-primary mb-8">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light text-text-primary text-base placeholder-text-secondary transition-colors duration-200"
              placeholder="John Doe"
              required
              aria-label="Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light text-text-primary text-base placeholder-text-secondary transition-colors duration-200"
              placeholder="john.doe@example.com"
              required
              aria-label="Email Address"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light text-text-primary text-base placeholder-text-secondary resize-y transition-colors duration-200"
              placeholder="Tell us about your business needs..."
              required
              aria-label="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-light text-white px-6 py-3 rounded-full font-inter font-medium text-base hover:bg-[#1f508a] transition-colors duration-200 min-h-[48px]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
```