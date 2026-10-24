# Abu Huraira World Gym Fitness Center • Kasur

A cinematic, high-conversion flagship website for **Abu Huraira World Gym Fitness Center** (Kot Murad Khan, Kasur, Punjab, Pakistan), led by Founder & Head Coach **Ustaad Abu Huraira** (Ex Mr. Kasur, honored at the 73rd Mr. Lahore 2024 Championships).

Built to match the design caliber of international flagships (Gold's Gym, Equinox, Barry's) with an OLED Dark athletic aesthetic, championship amber accents, dual English & natural Urdu (RTL) localization, and zero third-party stock photography.

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom OLED dark tokens & typography plugins
- **Icons**: Lucide React (SVG only, 0 emoji icons in UI)
- **Typography**: Google Fonts via `next/font`:
  - Display: `Bebas Neue` (condensed athletic display)
  - Sans: `Inter` (neutral body text, WCAG AA compliant contrast)
  - Urdu RTL: `Noto Nastaliq Urdu` (calligraphic Urdu readability)
- **Deployment Target**: Static export (`output: "export"`), fully static HTML/CSS/JS in `/out` ready for free zero-cost hosting on Vercel, Netlify, or Cloudflare Pages.
- **Audit Scores (Lighthouse Mobile)**:
  - 🟢 **Accessibility**: **100 / 100**
  - 🟢 **Best Practices**: **100 / 100**
  - 🟢 **SEO**: **100 / 100**
  - 🟢 **Performance**: **90 - 93 / 100** (Desktop: **99 - 100**)

---

## 🏗️ Multi-Gym Architecture

All gym facts, phone numbers, addresses, social links, and reviews live strictly in structured data files—**never hardcoded into UI components**:

```
├── data/
│   ├── gyms/
│   │   └── abu-huraira-world-gym.json   # Single source of truth for the gym
│   └── i18n/
│       ├── en.json                      # English copy and labels
│       └── ur.json                      # Natural, contextual Urdu translations
├── src/
│   ├── app/
│   │   ├── page.tsx                     # English root landing page (/)
│   │   ├── ur/page.tsx                  # Urdu RTL landing page (/ur/)
│   │   ├── layout.tsx                   # SEO Metadata, OpenGraph & JSON-LD schema
│   │   └── globals.css                  # Tailored dark styling & print rules
│   └── components/                      # Modular, reusable presentation components
├── scripts/
│   ├── new-gym.md                       # Guide for cloning the template for other gyms
│   └── run-lighthouse.py                # Automated Lighthouse audit runner
├── DESIGN_SYSTEM.md                     # Design decisions, color palette & typography
├── img-manifest.json                    # Image inventory with usability flags
└── TODO-FOR-OWNER.md                    # Unverified facts, photo wishlist & permissions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+ or pnpm 8+

### 1. Installation
```bash
npm install
```

### 2. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) for the English version or [http://localhost:3000/ur](http://localhost:3000/ur) for the Urdu version.

### 3. Production Build & Static Export
```bash
npm run build
```
This compiles and validates all TypeScript types, runs ESLint, and exports static production assets directly into the `/out` directory.

### 4. Local Production Preview
To test the compiled static export locally:
```bash
npx serve out -p 8085
```

---

## 🌐 Free Production Deployment

### Option A: Netlify (Recommended)
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run build: `npm run build`
3. Deploy the `/out` folder:
   ```bash
   netlify deploy --prod --dir=out
   ```
*(Or link your GitHub repository in Netlify with Build Command: `npm run build` and Publish directory: `out`)*

### Option B: Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run:
   ```bash
   vercel --prod
   ```
*(In Vercel project settings, set Framework Preset to **Next.js** or **Other** with output directory `out`)*

### Option C: Cloudflare Pages / GitHub Pages
- Build Command: `npm run build`
- Build Output Directory: `out`

---

## 📝 How to Update Content

### 1. Updating Gym Details (Phone, Hours, Address)
Edit `data/gyms/abu-huraira-world-gym.json`:
- **Phone / WhatsApp**: Update `contact.phone`, `contact.whatsapp`, `contact.whatsappUrl`.
- **Operating Hours**: Update `hours.daily` or individual day ranges.
- **Address & Google Maps**: Update `contact.address`, `contact.plusCode`, and `rating.mapsUrl`.
- **Ladies Training Status**: Once dedicated women's hours are verified by the owner, toggle:
  ```json
  "ladiesSection": {
    "confirmed": true,
    "hours": "Daily 11:00 AM - 02:00 PM"
  }
  ```

### 2. Updating Text / Translations
- English headlines, button labels, and FAQ answers: `data/i18n/en.json`
- Urdu headlines and RTL translations: `data/i18n/ur.json`

### 3. Adding New Real Photos
1. Place raw photos in `images/bodybuildingimgs/` or `images/mainheroimgs/`.
2. Convert and resize to WebP using modern quality settings (75–80 quality, max 1200px width for desktop, 600px for mobile cards).
3. Save optimized assets to `public/images/optimized/`.
4. Update `img-manifest.json` and reference the new paths in `data/gyms/abu-huraira-world-gym.json`.

---

## 🏋️ Adding Another Gym (Multi-Gym Franchise)

This codebase is configured to be 100% data-driven. To add another gym (e.g. for Lahore, Raiwind, or another Kasur facility):
1. Duplicate `data/gyms/abu-huraira-world-gym.json` to `data/gyms/<gym-slug>.json`.
2. Fill in the new gym's name, coach info, equipment list, reviews, and Google Maps Plus Code.
3. Add the gym's photos to `public/images/<gym-slug>/`.
4. Follow the step-by-step instructions in [`scripts/new-gym.md`](file:///e:/abuHurairaGym/scripts/new-gym.md).

---

## 🔒 Owner Verification & Disclaimers

Before public launch, the gym owner should review [`TODO-FOR-OWNER.md`](file:///e:/abuHurairaGym/TODO-FOR-OWNER.md) to confirm:
- [ ] WhatsApp number exact format
- [ ] Morning opening time (site currently reflects verified "Open daily - closes 12 AM")
- [ ] Ladies' training hours policy
- [ ] Consent from athletes appearing in photography

---

## 📄 License & Credits
- **Client**: Abu Huraira World Gym Fitness Center (Kot Murad Khan, Kasur, Punjab, Pakistan)
- **Head Coach**: Ustaad Abu Huraira (Ex Mr. Kasur)
- **Built With**: Next.js, Tailwind CSS, Lucide Icons, Bebas Neue & Noto Nastaliq fonts.
