import Image from "next/image";
import {
  Cpu,
  Flame,
  SunMedium,
  Award,
  CupSoda,
  Sparkles,
  Users,
  HeartHandshake,
} from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface FacilitiesProps {
  gym: GymData;
  lang: Language;
  t: any;
}

const iconMap: Record<string, any> = {
  Cpu,
  Flame,
  SunMedium,
  Award,
  CupSoda,
  Sparkles,
  Users,
  HeartHandshake,
};

export default function Facilities({ gym, lang, t }: FacilitiesProps) {
  const facilities = gym.facilities;

  return (
    <section id="facilities" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gym-border pb-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gym-gold font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-gym-gold rounded-full" />
              {t.facilities.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold">
              {t.facilities.title}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              {t.facilities.subtitle}
            </p>
          </div>
          <div className="hidden md:block font-display text-7xl lg:text-8xl font-black text-zinc-900 select-none">
            02
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Technogym Machines (Large Featured Card) */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden bg-[#121215] border border-gym-border group hover-gold-glow flex flex-col justify-end min-h-[380px] p-6 sm:p-8">
            {facilities[0]?.image && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={facilities[0].image}
                  alt={facilities[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
            )}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gym-gold/20 border border-gym-gold/40 text-gym-gold text-xs font-bold uppercase tracking-wider mb-3">
                <Cpu className="w-3.5 h-3.5" />
                <span>{facilities[0]?.tag}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase font-bold text-white mb-2">
                {facilities[0]?.title}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base max-w-xl">
                {facilities[0]?.description}
              </p>
            </div>
          </div>

          {/* Card 2: Open-Air Natural Patio */}
          <div className="relative rounded-2xl overflow-hidden bg-[#121215] border border-gym-border group hover-gold-glow flex flex-col justify-end min-h-[380px] p-6 sm:p-8">
            {facilities[1]?.image && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={facilities[1].image}
                  alt={facilities[1].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
            )}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                <SunMedium className="w-3.5 h-3.5" />
                <span>{facilities[1]?.tag}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold text-white mb-2">
                {facilities[1]?.title}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm">
                {facilities[1]?.description}
              </p>
            </div>
          </div>

          {/* Card 3: Matrix Commercial Cardio */}
          <div className="relative rounded-2xl overflow-hidden bg-[#121215] border border-gym-border group hover-gold-glow flex flex-col justify-end min-h-[360px] p-6 sm:p-8">
            {facilities[2]?.image && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={facilities[2].image}
                  alt={facilities[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
            )}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-gym-gold text-xs font-bold uppercase tracking-wider mb-3">
                <Flame className="w-3.5 h-3.5" />
                <span>{facilities[2]?.tag}</span>
              </div>
              <h3 className="font-display text-2xl uppercase font-bold text-white mb-2">
                {facilities[2]?.title}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm">
                {facilities[2]?.description}
              </p>
            </div>
          </div>

          {/* Card 4: Juice & Shakes Cafe */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-gym-border hover-gold-glow flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gym-gold mb-6">
              <CupSoda className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gym-gold">
                {facilities[4]?.tag}
              </span>
              <h3 className="font-display text-2xl uppercase font-bold text-white mt-1 mb-2">
                {facilities[4]?.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {facilities[4]?.description}
              </p>
            </div>
          </div>

          {/* Card 5: Clean Environment & Lockers */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-gym-border hover-gold-glow flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gym-gold mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gym-gold">
                {facilities[5]?.tag}
              </span>
              <h3 className="font-display text-2xl uppercase font-bold text-white mt-1 mb-2">
                {facilities[5]?.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {facilities[5]?.description}
              </p>
            </div>
          </div>

          {/* Card 6: Youth & Kid-Friendly */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-gym-border hover-gold-glow flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gym-gold mb-6">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gym-gold">
                {facilities[6]?.tag}
              </span>
              <h3 className="font-display text-2xl uppercase font-bold text-white mt-1 mb-2">
                {facilities[6]?.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {facilities[6]?.description}
              </p>
            </div>
          </div>

          {/* Card 7: Men & Women's Training Support (spans 2 columns on desktop) */}
          <div className="md:col-span-2 lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#121215] border border-gym-border hover-gold-glow flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gym-gold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                Respectful Community
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gym-gold">
                {facilities[7]?.tag}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold text-white mt-1 mb-2">
                {facilities[7]?.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                {facilities[7]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
