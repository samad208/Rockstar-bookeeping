Here is the complete final design handoff document for Rockstar Bookkeeping, formatted with exact Tailwind CSS v4 custom properties and class strings for direct integration.

---

# Rockstar Bookkeeping - Design System Handoff

## 1. Global CSS Variables (`@theme` directive for `globals.css`)

These variables define the core visual identity and should be placed within your `src/app/globals.css` file using the `@theme` directive, which Tailwind CSS v4 will process.

```css
/* src/app/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@theme {
  /* Colors */
  --rb-primary-navy: #1a3c5e;
  --rb-primary-light: #2563a8;
  --rb-accent-gold: #f59e0b;
  --rb-accent-light: #fbbf24;
  --rb-bg-white: #ffffff;
  --rb-surface-subtle: #f8fafc;
  --rb-text-primary: #0f172a;
  --rb-text-secondary: #475569;
  --rb-border: #e2e8f0;
  --rb-dark-bg: #0f172a;

  /* Typography */
  --font-sora: Sora, sans-serif;
  --font-inter: Inter, sans-serif;
}
```

## 2. Tailwind Configuration (`tailwind.config.ts`)

Extend Tailwind's default theme with the custom colors and font families defined above.

```javascript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rb-primary-navy': 'var(--rb-primary-navy)',
        'rb-primary-light': 'var(--rb-primary-light)',
        'rb-accent-gold': 'var(--rb-accent-gold)',
        'rb-accent-light': 'var(--rb-accent-light)',
        'rb-bg-white': 'var(--rb-bg-white)',
        'rb-surface-subtle': 'var(--rb-surface-subtle)',
        'rb-text-primary': 'var(--rb-text-primary)',
        'rb-text-secondary': 'var(--rb-text-secondary)',
        'rb-border': 'var(--rb-border)',
        'rb-dark-bg': 'var(--rb-dark-bg)',
      },
      fontFamily: {
        heading: ['var(--font-sora)'],
        body: ['var(--font-inter)'],
      },
      borderRadius: {
        'lg': '8px',   // For inputs, smaller cards
        'xl': '12px',  // For main cards
        'full': '9999px', // For pills/buttons
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
```

## 3. Typography Tokens (Tailwind Classes)

All text should use `text-rb-text-primary` by default, with `text-rb-text-secondary` for supporting text.

-   **Headings (`font-heading`)**
    -   `H1`: `text-4xl md:text-5xl lg:text-6xl font-extrabold text-rb-text-primary leading-tight`
    -   `H2`: `text-3xl md:text-4xl lg:text-5xl font-bold text-rb-text-primary leading-tight`
    -   `H3`: `text-2xl md:text-3xl lg:text-4xl font-bold text-rb-text-primary`
    -   `H4`: `text-xl md:text-2xl lg:text-3xl font-semibold text-rb-text-primary`
    -   `H5`: `text-lg md:text-xl lg:text-2xl font-semibold text-rb-text-primary`
    -   `H6`: `text-base md:text-lg lg:text-xl font-semibold text-rb-text-primary`
-   **Body (`font-body`)**
    -   Default Paragraph: `text-base font-normal text-rb-text-primary`
    -   Lead Paragraph: `text-lg md:text-xl font-normal text-rb-text-secondary leading-relaxed`
    -   Small Text: `text-sm font-normal text-rb-text-secondary`
    -   Emphasis: `font-medium`, `font-semibold`

## 4. Spacing Tokens (Tailwind Classes)

We leverage Tailwind's default spacing scale.

-   **Container Max Width:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` (for section content)
-   **Section Vertical Padding:** `py-16 md:py-24` (general)
-   **Component/Element Spacing:**
    -   Small: `p-2` (8px), `m-2` (8px), `gap-2` (8px)
    -   Medium: `p-4` (16px), `m-4` (16px), `gap-4` (16px)
    -   Large: `p-6` (24px), `m-6` (24px), `gap-6` (24px)
    -   Extra Large: `p-8` (32px), `m-8` (32px), `gap-8` (32px)
    -   Between major elements/columns: `gap-12 md:gap-16`

## 5. Component Specifications (Tailwind Classes)

### 5.1. Primary Button

A bold, gold button for primary actions.

-   **Classes:**
    `inline-flex items-center justify-center px-8 py-3 rounded-full bg-rb-accent-gold text-rb-text-primary font-body font-semibold text-lg shadow-md transition-all duration-300 ease-in-out`
-   **Hover/Focus:**
    `hover:bg-rb-accent-light hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-rb-accent-light focus:ring-offset-2`
-   **Disabled:**
    `opacity-60 cursor-not-allowed`

### 5.2. Secondary Button

An outline button for secondary actions.

-   **Classes:**
    `inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-rb-primary-light text-rb-primary-light font-body font-semibold text-lg transition-all duration-300 ease-in-out`
-   **Hover/Focus:**
    `hover:bg-rb-primary-light hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-rb-primary-light focus:ring-offset-2`
-   **Disabled:**
    `opacity-60 cursor-not-allowed`

### 5.3. Card Component

Used for features, testimonials, blog posts, etc.

-   **Classes:**
    `bg-rb-bg-white p-6 rounded-xl border border-rb-border shadow-md transition-transform duration-300 ease-in-out`
-   **Hover:**
    `hover:-translate-y-1 hover:shadow-lg`

### 5.4. Input Fields (Text, Email, etc.)

Standard input styling for forms.

-   **Classes:**
    `block w-full px-4 py-2 rounded-lg border border-rb-border bg-rb-surface-subtle text-rb-text-primary font-body text-base placeholder:text-rb-text-secondary transition-all duration-200 ease-in-out`
-   **Focus:**
    `focus:outline-none focus:border-rb-primary-light focus:ring-1 focus:ring-rb-primary-light`
-   **Error State:**
    `border-red-500 focus:border-red-500 focus:ring-red-500`

### 5.5. Navigation Bar

Responsive navigation, transparent at top, becomes solid white on scroll.

-   **Container:**
    `fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ease-in-out`
-   **Initial State (top):**
    `bg-transparent text-rb-text-primary`
-   **Scrolled State (add this class on scroll):**
    `bg-rb-bg-white shadow-md`
-   **Inner Content Wrapper:**
    `container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between`
-   **Logo:**
    `text-2xl font-heading font-extrabold text-rb-primary-navy` (or use an SVG/Image)
-   **Desktop Nav Links:**
    `hidden md:flex items-center space-x-8`
    -   Link Classes: `text-rb-text-primary text-lg font-body font-medium hover:text-rb-primary-light transition-colors duration-200`
-   **Mobile Hamburger Icon:**
    `md:hidden text-rb-text-primary text-3xl cursor-pointer` (using `lucide-react Menu` icon)
-   **Mobile Menu Overlay (when open):**
    `fixed inset-0 bg-rb-dark-bg text-white flex flex-col items-center justify-center space-y-8 z-[60] transform translate-x-full transition-transform duration-300 ease-in-out`
    -   To open: `translate-x-0`
    -   Close button: `absolute top-6 right-6 text-white text-4xl cursor-pointer` (using `lucide-react X` icon)
    -   Mobile Nav Links: `text-3xl font-heading font-semibold hover:text-rb-accent-gold transition-colors duration-200`

## 6. Section Layout Specifications

All sections should be wrapped in a common container for consistent max-width and horizontal padding.

```tsx
// Example Section Wrapper
<section className="py-16 md:py-24 [SECTION_BACKGROUND_COLOR]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    {/* Section Content Here */}
  </div>
</section>
```

Here are specs for 8 typical homepage sections:

1.  **Hero Section**
    -   **Background:** `bg-gradient-to-br from-rb-primary-navy to-rb-primary-light text-white`
    -   **Vertical Padding:** `py-24 md:py-32`
    -   **Layout:** `flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12`
    -   **Content Alignment:** `max-w-5xl mx-auto`

2.  **Features/Services Overview**
    -   **Background:** `bg-rb-bg-white`
    -   **Vertical Padding:** `py-16 md:py-24`
    -   **Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12` (for feature cards)

3.  **About Us / Why Choose Us**
    -   **Background:** `bg-rb-surface-subtle`
    -   **Vertical Padding:** `py-16 md:py-24`
    -   **Layout:** `grid grid-cols-1 md:grid-cols-2 gap-12 items-center` (text on one side, image/illustration on the other)

4.  **Detailed Services**
    -   **Background:** `bg-rb-bg-white`
    -   **Vertical Padding:** `py-16 md:py-24`
    -   **Layout:** `grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12` (e.g., three service cards or two content columns with a sidebar)

5.  **Testimonials**
    -   **Background:** `bg-rb-surface-subtle`
    -   **Vertical Padding:** `py-16 md:py-24`
    -   **Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12` (for testimonial cards)

6.  **Call to Action (CTA)**
    -   **Background:** `bg-rb-primary-light text-white`
    -   **Vertical Padding:** `py-16 md:py-24`
    -   **Layout:** `flex flex-col items-center text-center gap-6`
    -   **Content Alignment:** `max-w-3xl mx-auto`

7.  **FAQ**
    -   **Background:** `bg-rb-bg-white`
    -   **Vertical Padding:** `py-16 md:py-24`
    -   **Layout:** `max-w-3xl mx-auto` (usually a single column of accordions)

8.  **Footer**
    -   **Background:** `bg-rb-dark-bg text-white`
    -   **Vertical Padding:** `py-12 md:py-16`
    -   **Layout:** `grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12` (logo, navigation, contact info, social links)
    -   **Copyright Text:** `text-sm text-rb-text-secondary` (or `text-gray-400` for dark background)

## 7. Animation Notes

-   **Scroll Fade-In:**
    -   **Mechanism:** Implement an `AnimateOnScroll` component using `react-intersection-observer` or `framer-motion`'s `useInView` hook.
    -   **Initial State (hidden):** `opacity-0 translate-y-4`
    -   **Visible State (animate to):** `opacity-100 translate-y-0`
    -   **Transition:** `transition-all duration-700 ease-out`
    -   **Usage:** Wrap sections or significant content blocks with this component.
-   **Button Hover:**
    -   **Classes:** `hover:-translate-y-0.5 hover:shadow-lg transition-transform duration-300 ease-in-out` (already included in button specs).
-   **Card Hover:**
    -   **Classes:** `hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 ease-in-out` (already included in card specs).
-   **Stagger Delays for Grids:**
    -   **Mechanism:** For lists or grids of items (e.g., feature cards, testimonials), use `framer-motion`'s `staggerChildren` property on the parent container, or apply a `transition-delay` CSS variable based on the item's index.
    -   **Example (CSS variable):**
        ```css
        /* In your component loop */
        <div 
          className="opacity-0 translate-y-4 transition-all duration-700 ease-out" 
          style={{ transitionDelay: `${index * 100}ms` }} // Adjust delay as needed
          // Add classes to become visible on scroll: opacity-100 translate-y-0
        >
          {/* Grid Item Content */}
        </div>
        ```
    -   **Example (Framer Motion `staggerChildren`):**
        ```tsx
        // Parent container
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {items.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              {/* Item content */}
            </motion.div>
          ))}
        </motion.div>

        const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1, // Delay between children animations
            },
          },
        };

        const itemVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
        ```

---

This document provides all necessary design tokens and component specifications for building Rockstar Bookkeeping with Next.js 15+ and Tailwind CSS v4. Ensure all `lucide-react` icons are imported and used correctly for iconography.