import Image from "next/image";
import { Award, ShieldCheck, Flame, Users, Sparkles, CheckCircle2 } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface AboutProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function About({ gym, lang, t }: AboutProps) {
  const credentials = gym.coach.credentials;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#09090b]">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gym-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Oversized Number */}
        <div className="flex items-center justify-between border-b border-gym-border pb-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gym-gold font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-gym-gold rounded-full" />
              {t.about.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold">
              {t.about.title}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              {t.about.subtitle}
            </p>
          </div>
          <div className="hidden md:block font-display text-7xl lg:text-8xl font-black text-zinc-900 select-none">
            01
          </div>
        </div>

        {/* 2-Column Content: Left Story, Right Real Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-gym-border text-xs font-semibold text-gym-gold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Head Coach & Founder: Ustaad Abu Huraira</span>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {t.about.p1}
            </p>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {t.about.p2}
            </p>

            {/* Official Credentials Grid */}
            <div className="pt-4 pb-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                Verified Association Credentials:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-[#121215] border border-gym-border"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gym-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {cred}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values 3-Point Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gym-border">
              <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <Flame className="w-5 h-5 text-gym-gold mb-2" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {t.about.bullet1Title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {t.about.bullet1Desc}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <Sparkles className="w-5 h-5 text-gym-gold mb-2" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {t.about.bullet2Title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {t.about.bullet2Desc}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <Users className="w-5 h-5 text-gym-gold mb-2" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {t.about.bullet3Title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {t.about.bullet3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Authentic Photos */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Top Photo: Official Recognition at 73rd Mr. Lahore 2024 */}
            <div className="relative rounded-xl overflow-hidden border border-gym-border shadow-2xl group hover-gold-glow">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={gym.coach.awardImage}
                  alt="Coach Abu Huraira receiving official honor at 73rd Mr. Lahore 2024"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gym-gold">
                  Official Recognition
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white drop-shadow">
                  Honored at 73rd Mr. Lahore 2024 by Bodybuilding Dignitaries
                </p>
              </div>
            </div>

            {/* Bottom Photo: Coach Abu Huraira Portrait */}
            <div className="relative rounded-xl overflow-hidden border border-gym-border shadow-2xl group hover-gold-glow">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={gym.coach.portrait}
                  alt="Coach Abu Huraira - Ex Mr. Kasur and Founder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gym-gold">
                    Founder & Head Mentor
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white drop-shadow">
                    Ustaad Abu Huraira (Ex Mr. Kasur)
                  </p>
                </div>
                <div className="px-2.5 py-1 rounded bg-black/70 border border-gym-border text-[10px] font-semibold text-zinc-300">
                  Kot Murad Khan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
