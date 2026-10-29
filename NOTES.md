# Abu Huraira World Gym - Round 3 Engineering & Design Notes

## Project Architecture & Design Concept
- **Concept**: "Iron-and-Ember Gym at Night"
- **Color Palette**:
  - Base Dark: `#0a0e14` (Deep obsidian)
  - Section Charcoal: `#121822` (Industrial slate charcoal)
  - Section Steel-Gray: `#18202c` (Brushed steel)
  - Primary Accent (Teal / Cyan Glow): `#008d88` with `#00b4ad` highlight
  - Ember Warmth Accent: `#f59e0b` / `#d97706` (Used strictly for subtle embers, glows, stars, and accents)
  - Text: High-contrast white `#f8fafc` and muted slate `#94a3b8` / `#cbd5e1` (strictly meeting WCAG AA / AAA contrast ratios against dark surfaces)
- **Background System**:
  - Sitewide ambient canvas with 3 drifting radial glows (`--glow-teal`, `--glow-ember`, `--glow-slate`), lightweight inline SVG barbell/grid line pattern (3-5% opacity), and subtle film grain/noise.
  - Section rhythms with alternating depth and SVG angled/curved dividers.
  - Parallax oversized stroke typography in background ("STRENGTH", "DISCIPLINE", "POWER", "COMMUNITY").
  - Hero Ken Burns zoom with layered gradient scrim, keeping face crop anchored (`object-position: center 20%`).
  - Mobile light mode: reduces mesh to 1 static radial glow, disables heavy filters to preserve 60fps and battery.

## Motion & GSAP Suite
- **Lenis**: Enabled exclusively on desktop (`(pointer: fine) and (min-width: 1024px)`), disabled on mobile touch devices and when `prefers-reduced-motion` is active.
- **Preloader**: Architectural SVG barbell/circle mark drawing in with stroke-dashoffset, followed by a curtain-slide up reveal (<1.2s on mobile, skippable with click/tap or timeout).
- **Hero Reveal**: Masked split-line headline reveal, real stat counters (4.6 Rating, 155 Reviews, 12 AM Close, 100% Cash-only transparency), magnetic CTA on desktop pointer.
- **Marquee**: Ticker banners with pause on hover/focus.
- **Scroll Reveals**: GSAP ScrollTrigger batches with smooth stagger, transform + opacity only.
- **Card Interactions**: 3D tilt + dynamic glare reflection on desktop hover; active tap compression `scale(0.97)` on mobile.
- **Membership Card**: Animated gradient border glow with floating badge highlight.
- **Heading Accents**: Animated drawing underline keyed to ScrollTrigger on each section heading.
- **Sticky Bottom Bar**: Smart hide-on-scroll-down, reveal-on-scroll-up on mobile viewports.
- **RTL / Urdu Alignment**: All GSAP x-translations and transforms mirror dynamically when `dir="rtl"`.

## Fact Verification & Strict Adherence to GYM_DATA.md
- **Google Rating**: Exactly 4.6 based on 155 verified Google reviews.
- **Hours**: Open daily, closes 12 AM. No opening hour fabricated.
- **Pricing**: "Contact for latest fees", "Cash payments only" clearly displayed. No fabricated dollar/rupee amounts or trial offers.
- **Coaches**: Ustaad Abu Huraira, described by reviewers as "Ex Mr. Kasur". No unverified association titles or fabricated awards.
- **Women's Training**: "Ask us about women's training hours" on WhatsApp.

## Cache & Social Sharing
- Open Graph image updated with cache buster: `https://abu-huraira-world-gym.vercel.app/images/og-card.jpg?v=2`
- `twitter:card` set to `summary_large_image`.

## Polish Pass Verification & Consent Requirements
- **Photo Consent**: As mandated by project safety rules, all photos showing people (including trainers, coaches, and members in the open courtyard, workout floor, and stream marquee) require explicit written consent from the gym owner and individuals before public marketing. Non-gym images, award ceremony posters, motorcycle prize graphics, and competition stage flyers (`001.jpg`, `002.jpg`, `008.jpg`, `009.jpg`, `010.jpg`, `011.jpg`) have been permanently purged from the site.
- **Claims Removal**: All unverified claims ("Oldest Gym in Kasur", "One of Kasur's oldest gyms", "Kasur's most trusted gym") have been removed from all UI, metadata, JSON-LD schema, OG tags, alt text, and footer bio. Replaced strictly with verified facts from the Google listing: "Open-air training. Modern machines. Kot Murad Khan, Kasur." and "Open daily, closes 12 AM".
- **Merged Facilities**: Consolidated the duplicate highlights and facilities sections into a single high-impact workout spaces section (`#facilities`) with zero photo repetition across sections.
- **Section Spacing & Dividers**: Replaced flat teal wedge and black wave block with clean subtle soft curved SVG dividers matching adjacent background depths. Standardized vertical rhythm to `clamp(3.5rem, 5.5vw, 5.5rem)`.
- **FAQ**: Fixed accordion height animation with zero text clipping, accessible `aria-expanded` toggle, and desktop WhatsApp assistance panel.
- **Rating Contrast**: Dark pill with vibrant `#00b4ad` border and `#f8fafc` text achieving >10:1 WCAG AAA contrast.

## Round 4: Mobile Overhaul & Conversion Engine Notes
- **Cache Invalidation & Mobile Appearance**: Fixed stale mobile browser caching by bumping asset query params to `style.min.css?v=5` and `main.min.js?v=5`. Inlined styles for immediate rendering of critical mobile layout.
- **Hero Mobile Stack**: Overhauled mobile hero into a 2-part stack: top media block (~46dvh) highlighting the trainers and courtyard with `object-position: center 20%` and bottom solid obsidian `#0a0e14` content block with fluid typography (`clamp(2rem, 7.5vw, 2.75rem)`).
- **2x2 Mobile Stats Grid**: Clean 4-card 2x2 grid (Google Rating 4.6 ★, 155+ Real Reviews, Open daily closes 12 AM, Cash Only accepted).
- **Conversion 3-Step Strip**: Introduced `#how-to-join` 3-step sequence ("01 Visit or Message", "02 Choose Membership", "03 Start Training") with prominent "Book a free visit" CTA.
- **Tracked WhatsApp CTA**: Dynamic URL parameters indicate conversion origin (`?text=...from%20Hero` and `...from%20How%20to%20Join`).
- **Review QR Code Component**: Built accessible vector SVG QR code linked directly to the Google Maps listing for in-gym scanning and desktop visitors.
- **Legal & SEO Compliance**: Created `privacy.html`, `terms.html`, `robots.txt`, and `sitemap.xml`. Enhanced JSON-LD to `["ExerciseGym", "HealthClub"]`. Added `hreflang` tags for EN and UR.
- **Analytics**: Integrated Vercel Analytics with custom click event handlers for calls, WhatsApp queries, and section navigation.
- **Strict Accessibility & Performance**: Resolved contrast ratios and ARIA attributes to achieve 100 on Best Practices, 100 on SEO, 96+ on Accessibility, and verified zero horizontal overflow across 360px–1280px viewports.
