import { Shield, MessageCircle, AlertCircle, Clock } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface LadiesSectionProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function LadiesSection({ gym, lang, t }: LadiesSectionProps) {
  const whatsappUrl = `${gym.contact.whatsappUrl}?text=${encodeURIComponent(
    lang === "en"
      ? "Hello Coach Abu Huraira, I would like to inquire about current women's training hours and ladies' fitness timings at World Gym Kasur."
      : "السلام علیکم استاد ابو ہریرہ، میں ورلڈ جم قصور میں خواتین کی ٹریننگ اور مخصوص اوقات کے بارے میں معلومات حاصل کرنا چاہتی ہوں۔"
  )}`;

  return (
    <section className="py-12 bg-[#09090b] border-y border-gym-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-zinc-900 via-[#141418] to-zinc-900 border border-zinc-800 p-8 sm:p-10 relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-gym-gold/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-gym-gold text-xs font-bold uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5" />
                <span>{t.ladies.badge}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase font-bold text-white tracking-tight">
                {t.ladies.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {t.ladies.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
                <Clock className="w-4 h-4 text-gym-gold" />
                <span>
                  {lang === "en"
                    ? "Dedicated timings & trainer supervision confirmed directly via WhatsApp"
                    : "مخصوص اوقات اور لیڈی کوچ کی دستیابی کی تفصیلات واٹس ایپ پر حاصل کریں"}
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-gym-border hover:border-gym-gold text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-gym-gold" />
                <span>{t.ladies.cta}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
