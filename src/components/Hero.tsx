import { Star, MessageCircle, Phone, Clock, Banknote, ShieldCheck } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface HeroProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function Hero({ gym, lang, t }: HeroProps) {
  const whatsappMessage = encodeURIComponent(
    lang === "en"
      ? "Hello Coach Abu Huraira, I would like to join Abu Huraira World Gym. Please send membership information."
      : "السلام علیکم استاد ابو ہریرہ، میں ورلڈ جم قصور میں داخلہ لینا چاہتا ہوں۔ برائے مہربانی معلومات فراہم کریں۔"
  );

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/optimized/hero-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/optimized/hero-main.webp"
            type="image/webp"
          />
          <img
            src="/images/optimized/hero-mobile.webp"
            alt="Coach Abu Huraira and athletes training at World Gym Kasur"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85" />
        {/* Subtle Gold Ambient Spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gym-gold/10 blur-[130px] rounded-full pointer-events-none" />
        {/* Film grain pattern */}
        <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
          {/* Google Reviews Badge */}
          <a
            href={gym.rating.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-gym-border hover:border-gym-gold text-zinc-200 text-xs sm:text-sm font-semibold backdrop-blur-md transition-colors"
          >
            <div className="flex items-center text-gym-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gym-gold" />
              ))}
            </div>
            <span>{t.hero.reviewPill}</span>
          </a>

          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/60 border border-red-800/80 text-red-200 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{t.hero.liveStatus}</span>
          </div>
        </div>

        {/* Main Athletic Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase font-black leading-[0.95] max-w-5xl mx-auto drop-shadow-2xl mb-6">
          {t.hero.headline.split(".").map((part: string, idx: number) => (
            <span key={idx} className="block last:text-gym-gold">
              {part.trim()}
              {idx === 0 && "."}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 font-normal leading-relaxed mb-10 px-2">
          {t.hero.subline}
        </p>

        {/* High Conversion CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto mb-8 px-2">
          <a
            href={`${gym.contact.whatsappUrl}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded bg-gym-gold text-black hover:bg-gym-gold-hover text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t.hero.joinWhatsApp}</span>
          </a>

          <a
            href={`tel:${gym.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded bg-zinc-900/90 border border-zinc-700 hover:border-zinc-400 text-white text-xs sm:text-sm font-bold tracking-wide transition-all hover:bg-zinc-800 cursor-pointer backdrop-blur-md"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gym-gold" />
            <span>{t.hero.callDirect}</span>
          </a>
        </div>

        {/* Reassurance Badges */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest pt-2">
          <div className="flex items-center gap-1.5">
            <Banknote className="w-3.5 h-3.5 text-gym-gold shrink-0" />
            <span>{t.hero.cashNotice}</span>
          </div>
          <div className="hidden sm:inline-block text-zinc-700">•</div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-gym-gold shrink-0" />
            <span>Direct Guidance Under Ex Mr. Kasur</span>
          </div>
          <div className="hidden sm:inline-block text-zinc-700">•</div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gym-gold shrink-0" />
            <span>Open 7 Days a Week</span>
          </div>
        </div>
      </div>

      {/* Diagonal Bottom Edge Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none" />
    </section>
  );
}
