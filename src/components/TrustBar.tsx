import { Star, Trophy, Users, Clock } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface TrustBarProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function TrustBar({ gym, lang, t }: TrustBarProps) {
  const items = [
    {
      icon: Star,
      val: "4.6",
      label: t.stats.ratingLabel,
      sub: t.stats.ratingSub,
      accent: true,
    },
    {
      icon: Users,
      val: "155+",
      label: t.stats.communityLabel,
      sub: t.stats.communitySub,
      accent: false,
    },
    {
      icon: Trophy,
      val: t.stats.legacyScore,
      label: t.stats.legacyLabel,
      sub: t.stats.legacySub,
      accent: true,
    },
    {
      icon: Clock,
      val: "12 AM",
      label: t.stats.hoursLabel,
      sub: t.stats.hoursSub,
      accent: false,
    },
  ];

  return (
    <div className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#121215] border border-gym-border rounded-xl shadow-2xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-gym-gold" />
              </div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
                {item.val}
              </div>
              <div className="text-sm font-bold text-zinc-200 mt-1 uppercase tracking-wide">
                {item.label}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5 font-normal">
                {item.sub}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
