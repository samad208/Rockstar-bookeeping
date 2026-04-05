This is a significant shift from the previous brand identity (navy, blue, gold, professional) towards a more vibrant, bold, and unique aesthetic that perfectly aligns with your existing logo's "rock-and-roll meets feminine elegance" vibe. We'll embrace a "rock concert poster meets boutique" feel with a dominant black, pink, and white palette.

This new direction **overrides** the previous color palette and typography instructions provided.

---

### NEW DESIGN DIRECTION: Rockstar Bookkeeping

**1. GOOGLE FONTS to use:**

To match the described logo and achieve the "rock concert poster meets boutique" vibe:

*   **Display/Heading Font (High-Contrast Bold Serif):**
    *   **`Playfair Display`** (weights 700, 800, 900)
    *   *Reasoning:* This font perfectly captures the high-contrast, elegant yet bold serif style reminiscent of classic rock posters or newspaper mastheads. It has a strong presence and sophisticated curves.
*   **Subheading Font (Condensed Uppercase Sans-Serif):**
    *   **`Bebas Neue`** (single weight 400)
    *   *Reasoning:* Its condensed, all-caps nature with wide letter-spacing is an excellent match for the "BOOKKEEPING" part of your logo, providing a strong, clean, and impactful secondary heading style.
*   **Body Font (Clean, Readable):**
    *   **`Inter`** (weights 400, 500, 600)
    *   *Reasoning:* Retaining `Inter` for body text ensures excellent readability and a modern, clean foundation, balancing the more expressive display fonts.

**2. NEW COLOR PALETTE (CSS Custom Properties):**

This palette is designed to directly reflect the logo's colors and the desired "rock concert poster meets boutique" aesthetic.

```css
:root {
  /* Primary Dark (Near Black from logo) */
  --color-dark-primary: #101010; /* Very deep charcoal/near black */
  
  /* Pink Accent (Matches logo star) */
  --color-pink-accent: #C4849A; /* Dusty Rose / Mauve */
  
  /* Light Pink (Backgrounds, cards) */
  --color-pink-light: #FDF5F7; /* Very soft, almost off-white pink */
  
  /* Deep Rose (Hover states, dark CTAs) */
  --color-pink-deep: #A2687F; /* Darker, richer rose */
  
  /* White and Near-White Surface Colors */
  --color-white: #ffffff;
  --color-surface-light: #f8fafc; /* Subtle off-white */
  
  /* Text Colors */
  --color-text-primary: #101010;
  --color-text-secondary: #475569; /* For less prominent text */
  
  /* Border Colors */
  --color-border: #e2e8f0; /* Soft grey border */
}
```

**3. COMPONENT UPDATES with new palette:**

*   **Hero Section:**
    *   **Background:** `--color-dark-primary` (#101010)
    *   **Accent:** Prominent use of the pink star logo element (or a simplified pink star icon)
    *   **Text:** `--color-white`
    *   **Call to Action Buttons:** `--color-pink-accent` background with white text, or `--color-white` outline with `--color-pink-accent` text.
*   **Buttons:**
    *   **Primary Button:**
        *   Background: `--color-pink-accent`
        *   Text: `--color-white`
        *   Hover Background: `--color-pink-deep`
        *   Hover Text: `--color-white`
    *   **Secondary Button:**
        *   Background: transparent
        *   Border: 2px solid `--color-dark-primary`
        *   Text: `--color-dark-primary`
        *   Hover Background: `--color-dark-primary`
        *   Hover Text: `--color-white`
*   **Cards:**
    *   **Background:** `--color-white` or `--color-surface-light`
    *   **Border:** Subtle `--color-border`
    *   **Hover State:** Subtle border changes to `--color-pink-accent` or a soft shadow with a pink tint.
*   **Navbar:**
    *   **Background:** `--color-dark-primary` (#101010)
    *   **Logo:** The pink star logo element (or full logo if it fits)
    *   **Navigation Links:** `--color-white`
    *   **Hover Links:** `--color-pink-accent`
*   **Section Backgrounds:**
    *   Alternate between `--color-white` and `--color-pink-light` (`#FDF5F7`) for visual interest and flow.

**4. FONT PAIRING example in CSS @import url():**

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&family=Playfair+Display:wght@700;800;900&display=swap');

/* Example Usage in Tailwind Config or Global CSS */
.font-display {
  font-family: 'Playfair Display', serif;
}

.font-subheading {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.1em; /* Adjust for wide letter-spacing */
  text-transform: uppercase;
}

.font-body {
  font-family: 'Inter', sans-serif;
}
```

This new direction sets up a bold, fun, and memorable aesthetic that truly reflects "Rockstar Bookkeeping" while maintaining a premium feel.