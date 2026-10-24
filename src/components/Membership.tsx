import { Check, MessageCircle, Banknote, Sparkles } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface MembershipProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function Membership({ gym, lang, t }: MembershipProps) {
  const plans = gym.membershipPlans;

  return (
    <section id="plans" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gym-border pb-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gym-gold font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-gym-gold rounded-full" />
              {t.plans.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold">
              {t.plans.title}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              {t.plans.subtitle}
            </p>
          </div>
          <div className="hidden md:block font-display text-7xl lg:text-8xl font-black text-zinc-900 select-none">
            04
          </div>
        </div>

        {/* Cash Payments Highlight Banner */}
        <div className="mb-12 p-4 rounded-xl bg-zinc-900/80 border border-gym-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Banknote className="w-5 h-5 text-gym-gold" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                {t.plans.cashBadge}
              </span>
              <p className="text-xs text-zinc-400">
                {lang === "en"
                  ? "We operate on a transparent cash-only policy. No recurring bank subscriptions or hidden registration surcharges."
                  : "جم کی تمام ادائیگیاں صرف نقد کی صورت میں فرنٹ ڈیسک پر وصول کی جاتی ہیں۔"}
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded bg-black text-[11px] font-mono font-semibold text-zinc-300 border border-zinc-800 shrink-0">
            PKR Cash Accepted
          </span>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const planMessage = encodeURIComponent(
              lang === "en"
                ? `Hello Coach Abu Huraira, I would like to inquire about current fees and schedule for the ${plan.name} at World Gym Kasur.`
                : `السلام علیکم استاد ابو ہریرہ، میں ورلڈ جم قصور کے ${plan.name} کی موجودہ فیس اور تفصیلات معلوم کرنا چاہتا ہوں۔`
            );

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                  plan.isFeatured
                    ? "bg-[#141418] border-2 border-gym-gold shadow-2xl shadow-amber-500/10 scale-100 lg:-translate-y-2"
                    : "bg-[#121215] border border-gym-border hover:border-zinc-700"
                }`}
              >
                {plan.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gym-gold text-black text-[11px] font-black uppercase tracking-widest shadow-md">
                    {t.plans.recommended}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      {plan.badge}
                    </span>
                    {plan.isFeatured && (
                      <Sparkles className="w-4 h-4 text-gym-gold" />
                    )}
                  </div>

                  <h3 className="font-display text-3xl uppercase font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing Box - No Invented Price */}
                  <div className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 mb-6 text-center">
                    <div className="text-xs font-bold uppercase tracking-widest text-gym-gold mb-1">
                      {t.plans.contactFees}
                    </div>
                    <div className="text-xs text-zinc-400">
                      {lang === "en"
                        ? "Fair, affordable community rates. Inquire directly on WhatsApp."
                        : "انتہائی مناسب اور شفاف فیس۔ واٹس ایپ پر فوراً معلوم کریں۔"}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-gym-gold shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`${gym.contact.whatsappUrl}?text=${planMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    plan.isFeatured
                      ? "bg-gym-gold text-black hover:bg-gym-gold-hover shadow-lg shadow-amber-500/20"
                      : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
