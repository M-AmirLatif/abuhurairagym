# Adding a New Gym to the Platform

This project is built with a **Multi-Gym Architecture**. All gym specific details, facilities, schedule, reviews, trainer info, and media paths are completely decoupled from UI components.

Follow this guide to onboard a new gym in Kasur or elsewhere.

---

## Step 1: Create a New Gym JSON File
Create a new file in `/data/gyms/<gym-slug>.json`. Use `abu-huraira-world-gym.json` as a reference template.

Example: `/data/gyms/kasur-powerhouse-gym.json`
```json
{
  "id": "kasur-powerhouse-gym",
  "name": "Kasur Powerhouse Gym & Fitness",
  "shortName": "Powerhouse Gym",
  "tagline": "Forge Strength, Build Character",
  "category": "Fitness Center / Strength Gym",
  "status": {
    "isOpen": true,
    "closingTime": "11:00 PM",
    "openingTime": "6:00 AM"
  },
  "rating": {
    "score": 4.7,
    "reviewCount": 120,
    "platform": "Google"
  },
  "contact": {
    "phone": "+92 300 0000000",
    "phoneDisplay": "+92 300 0000000",
    "whatsapp": "923000000000",
    "address": "Railway Road, Kasur, 55050, Pakistan",
    "plusCode": "4C9R+3X Kasur",
    "mapEmbedUrl": "https://maps.google.com/...",
    "facebook": "https://facebook.com/..."
  },
  "payments": {
    "cashOnly": true,
    "notes": "Cash payments accepted at front desk"
  },
  "ladiesSection": {
    "available": true,
    "confirmed": true,
    "timings": "11:00 AM - 3:00 PM (Exclusive Ladies Slot)"
  },
  "hero": {
    "badge": "Top Rated Fitness Club",
    "headline": "ELEVATE YOUR STANDARD OF LIVING.",
    "subline": "Kasur's premier strength training facility",
    "image": "/images/gyms/powerhouse/hero.webp"
  },
  "stats": [
    { "value": "4.7", "label": "Google Rating", "sub": "120+ verified reviews" },
    { "value": "10+", "label": "Years Active", "sub": "Community staple" }
  ],
  "facilities": [
    {
      "id": "hammer-strength",
      "title": "Hammer Strength Equipment",
      "description": "Plate-loaded precision machines.",
      "icon": "Dumbbell"
    }
  ],
  "gallery": [
    {
      "src": "/images/gyms/powerhouse/gallery-1.webp",
      "alt": "Main training floor",
      "category": "facilities"
    }
  ],
  "reviews": [
    {
      "author": "Ali Raza",
      "rating": 5,
      "text": "Great equipment and very disciplined atmosphere.",
      "source": "Google review",
      "tag": "machines"
    }
  ]
}
```

---

## Step 2: Add Images for the New Gym
Create an image directory inside `/public/images/gyms/<gym-slug>/` or use the image optimization pipeline:
1. `hero.webp` (Recommended 1920x1080 or 1600x1000, WebP)
2. Facility shots (`facility-1.webp`, `facility-2.webp`)
3. Trainer portraits and award photos.

---

## Step 3: Add Urdu Translations (Optional)
If the new gym has custom phrases or bilingual copy, add corresponding keys in `/data/i18n/ur.json` under the gym slug namespace.

---

## Step 4: Configure Multi-Gym Route or Default Selection
In `src/app/page.tsx` (or multi-tenant route `src/app/[gymSlug]/page.tsx`):
Import the desired gym JSON or load dynamically by gym slug.
The universal component tree `<GymLanding gym={gymData} lang={lang} />` renders the entire flagship landing page tailored to the loaded gym configuration!
