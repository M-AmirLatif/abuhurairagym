# Design System: Abu Huraira World Gym Fitness Center

## 1. Executive Summary & Vision
This design system sets the creative direction and engineering specifications for the web platform of **Abu Huraira World Gym Fitness Center** (Kasur, Punjab, Pakistan). The quality benchmark is set by international athletic flagships—**Gold's Gym**, **Equinox**, **Barry's Bootcamp**, and **Anytime Fitness**: cinematic, high-energy, confident, fast, and engineered for maximum conversion.

All design decisions below have been evaluated and selected using the UI/UX Pro Max intelligence engine (`search.py` across `style`, `color`, `typography`, `landing`, and `ux` domains).

---

## 2. Style Architecture
* **Primary Style**: Dark Mode (OLED) + Exaggerated Athletic Minimalism + Parallax Storytelling
* **Engine Search Reference**:
  * `search.py "dark athletic cinematic bold" --domain style` -> OLED Dark (#000000, #121212, WCAG AAA) & Exaggerated Minimalism (oversized condensed type, single vibrant accent, statement impact).
* **Guiding Principles**:
  * **OLED Depth**: True black (`#000000`) and deep carbon canvas (`#09090b`) to highlight physique photography and equipment sheen.
  * **Bold Geometric Structure**: Angular cuts, diagonal section dividers, oversized section index counters (`01`, `02`, `03`), and crisp card borders.
  * **Atmospheric Polish**: Subtle micro-grain texture overlay (0.025 opacity) and soft ambient focal glow.
  * **Zero Clutter**: High whitespace, no gimmickry, no generic stock photo gradients.
* **Prohibited Anti-Patterns**:
  * ❌ No Neumorphism (soft bevels reduce athletic tension).
  * ❌ No Cyberpunk glitch effects or scanlines (looks like a video game, not an elite real-world gym).
  * ❌ No neon cyan or radioactive green looks.
  * ❌ No emoji icons (Lucide SVG icons only).
  * ❌ No lorem ipsum text.

---

## 3. Color Palette & WCAG Rationale
* **Engine Search Reference**:
  * `search.py "fitness athletic dark red gold amber" --domain color` -> Dark base with spotlight gold accent `#F59E0B` and action red `#DC2626`.
* **Palette Tokens**:
  * **Background Base (OLED)**: `#09090B` (Canvas) & `#000000` (Hero/Footer deep ground)
  * **Surface / Cards**: `#121215` (Elevated layer), `#18181B` (Interactive hover surface)
  * **Borders / Separators**: `#27272A` (Default subtle border), `#3F3F46` (Active border)
  * **Primary Accent (Championship Gold / Amber)**: `#F59E0B` (Golden Amber, reflects gold bodybuilding trophies and championship legacy)
  * **Accent Hover / Dark**: `#D97706`
  * **Accent Glow**: `rgba(245, 158, 11, 0.15)`
  * **Secondary Accent (Live / Urgency Crimson)**: `#DC2626` (For "Open Today - Closes 12 AM" live status badge)
  * **Text Primary**: `#FAFAFA` (Pure high-contrast white)
  * **Text Secondary**: `#D4D4D8` (Zinc-300, readable body)
  * **Text Muted**: `#A1A1AA` (Zinc-400, captions & metadata)
* **Contrast Compliance**:
  * `#FAFAFA` on `#09090B`: Contrast ratio **18.2:1** (Exceeds WCAG AAA).
  * `#F59E0B` on `#09090B`: Contrast ratio **9.3:1** (Exceeds WCAG AAA).
  * `#DC2626` badge with white text: Contrast ratio **4.8:1** (Exceeds WCAG AA).

---

## 4. Typography Hierarchy
* **Engine Search Reference**:
  * `search.py "fitness athletic sports condensed bold" --domain typography` -> `Bebas Neue` & `Barlow Condensed` for display headlines; `Inter` for clean data-dense body.
* **Font Selections**:
  * **Display / Brand Headline**: `Bebas Neue` (Google Font via `next/font/google`), uppercase, high condensed tracking.
  * **Body / System / Numbers**: `Inter` (Google Font via `next/font/google`), geometric clean sans-serif with tabular numerical figures for counters and stats.
  * **Urdu Typography**: `Noto Nastaliq Urdu` (Google Font) with `Noto Sans Arabic` fallback, providing authentic calligraphy-grade Urdu rendering for bilingual visitors.
* **Scale**:
  * Hero Display: `clamp(3.5rem, 8vw, 7.5rem)` (leading-none, tracking-wider)
  * Section Title: `clamp(2.5rem, 5vw, 4.5rem)` (uppercase, tracking-tight)
  * Section Index Numbers: `clamp(4rem, 8vw, 8rem)` (font-extrabold, text-zinc-800/40)
  * Card Headlines: `1.5rem` - `2rem`
  * Body Text: `1rem` - `1.125rem` (leading-relaxed)
  * Metadata / Badges: `0.75rem` - `0.875rem` (uppercase, tracking-widest, font-semibold)

---

## 5. UI Components & Layout Strategy
* **Engine Search Reference**:
  * `search.py "gym fitness membership hero conversion" --domain landing` -> Social proof prominence, direct friction-free WhatsApp action, high-impact bento features.
* **Key Components**:
  1. **Sticky Header**: Responsive navigation, typographic wordmark, quick call CTA, Urdu language switcher, shrinks with backdrop blur on scroll (`bg-black/85 backdrop-blur-md`).
  2. **Hero Section**: Fullscreen authentic gym atmosphere with gradient vignette, bold statement headline, Google review rating pill, live status indicator ("Closes 12 AM"), and dual conversion CTAs (WhatsApp & Phone).
  3. **Trust & Proof Bar**: Animated stat counters (4.6★ rating, 155+ verified Google reviews, Kasur's oldest established fitness facility, open 7 days/week).
  4. **About / Legacy Section**: Respectful narrative honoring Coach Abu Huraira (Ex Mr. Kasur, General Secretary Kasur Bodybuilding Association), authentic competition honors, and core gym ethos.
  5. **Facilities Bento Grid**: Modern Technogym selectorized machines, Matrix commercial treadmills, open-air outdoor patio training area, clean locker facility, fresh juice & shake bar, kid-friendly welcome.
  6. **Trainers Spotlight**: Authentic portraits of Coach Abu Huraira and certified training staff with clear verification tags.
  7. **Membership Plans**: Transparent 3-tier structure ("Standard Access", "Coaching & Transformation", "Elite Athlete") with clear "Contact for latest fees" button (direct WhatsApp pre-filled inquiry) and prominent "Cash payments only" badge.
  8. **Gallery with Lightbox**: Filterable masonry grid (All, Facilities & Equipment, Athletes & Awards, Outdoor Training) with full keyboard navigation and high-res modal view.
  9. **Interactive Reviews Carousel**: 16 real Google reviews, category filters (Coach, Machines, Environment, Trainers, Staff), 5-star ratings, and link to Google Maps listing.
  10. **Women's Training Advisory**: Dedicated informational module with transparent advisory: "Ask us about women's training hours" (linked to verified gym status).
  11. **Visit Times & Peak Hours**: Weekly schedule breakdown with interactive peak-hours visualizer (flagged sample reference).
  12. **Location & Trial Request**: Interactive Google Map integration (Kot Murad Khan, Kasur), click-to-directions, plus an instant trial request form that generates a structured WhatsApp message.
  13. **FAQ Accordion**: Instant answers on cash payment, timings, trial pass, women's training, personal coaching, and kids access.
  14. **Mobile Conversion Dock**: Persistent bottom bar on mobile viewports with one-touch WhatsApp and direct phone call triggers.

---

## 6. Motion & Accessibility (UX Guidelines)
* **Engine Search Reference**:
  * `search.py "animation performance dark mode accessibility mobile" --domain ux` -> Use transform & opacity only, avoid infinite animations, enforce mobile-first breakpoints, respect `prefers-reduced-motion`.
* **Motion Guardrails**:
  * Subtle entrance reveal animations using Framer Motion (`y: 20 -> 0`, `opacity: 0 -> 1`, `duration: 0.4s`).
  * Stable hover transformations: color, border, and glow shifts without scaling layout dimensions.
  * All animations gracefully disabled when `prefers-reduced-motion: reduce` is detected.
  * Full keyboard accessibility: tab indices, focus-visible gold rings, escape-key lightbox closing, ARIA tags on accordion and modal states.

---

## 7. Multi-Gym Architecture & Extensibility
* All gym content is strictly decoupled from the presentation components.
* Single source of data: `/data/gyms/abu-huraira-world-gym.json`.
* Multi-language translations: `/data/i18n/en.json` and `/data/i18n/ur.json`.
* Adding a future gym requires only a new JSON file under `/data/gyms/` and corresponding image assets, detailed in `/scripts/new-gym.md`.
