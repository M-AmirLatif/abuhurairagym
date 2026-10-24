export interface GymData {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  rating: {
    score: number;
    reviewCount: number;
    platform: string;
    mapsUrl: string;
    facebookRecommendation?: {
      recommendationRate: string;
      reviewCount: number;
    };
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappUrl: string;
    address: string;
    localLandmarks?: string;
    plusCode: string;
    neighborhood: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    social: {
      facebookPrimary: string;
      facebookSecondary: string;
    };
  };
  operatingHours: {
    status: string;
    badgeText: string;
    closingTime: string;
    openingTime: string;
    days: Array<{ day: string; hours: string }>;
  };
  policies: {
    payments: string;
    kids: string;
    environment: string;
  };
  ladiesSection: {
    confirmed: boolean;
    displayNotice: string;
    badge: string;
    description: string;
  };
  coach: {
    name: string;
    title: string;
    honorific: string;
    credentials: string[];
    bio: string;
    portrait: string;
    awardImage: string;
  };
  hero: {
    badge: string;
    badgeSub: string;
    headline: string;
    subline: string;
    primaryCTA: string;
    secondaryCTA: string;
    bgImage: string;
  };
  stats: Array<{
    value: string;
    label: string;
    sub: string;
    highlight?: boolean;
  }>;
  facilities: Array<{
    id: string;
    title: string;
    description: string;
    tag: string;
    image?: string;
    icon: string;
  }>;
  reviewThemes: Array<{
    name: string;
    count: number;
    key: string;
  }>;
  reviews: Array<{
    id: number;
    author: string;
    rating: number;
    source: string;
    text: string;
    theme: string;
  }>;
  membershipPlans: Array<{
    id: string;
    name: string;
    badge: string;
    description: string;
    features: string[];
    pricingNote: string;
    ctaText: string;
    isFeatured: boolean;
  }>;
  gallery: Array<{
    id: string;
    src: string;
    title: string;
    category: string;
    description: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  unverifiedInternalData?: Record<string, string>;
}

export type Language = "en" | "ur";
