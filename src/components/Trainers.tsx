import Image from "next/image";
import { Award, ShieldCheck, Dumbbell, UserCheck } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface TrainersProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function Trainers({ gym, lang, t }: TrainersProps) {
  const trainers = [
    {
      name: "Ustaad Abu Huraira",
      role: "Founder & Head Coach",
      titleUrdu: "بانی و ہیڈ کوچ",
      badge: "Ex Mr. Kasur",
      experience: "20+ Years Mentorship",
      image: gym.coach.portrait,
      verified: true,
      bio: "Former Mr. Kasur and General Secretary of the District Bodybuilding Association. Specializes in advanced hypertrophy, strength conditioning, and competitive bodybuilding preparation.",
    },
    {
      name: "Assistant Floor Coach",
      role: "Technique & Machinery Guidance",
      titleUrdu: "اسسٹنٹ کوچ",
      badge: "Floor Coach",
      experience: "Daily Member Supervision",
      image: "/images/optimized/facility-technogym.webp",
      verified: false,
      verificationNote: "Official name verification pending with owner",
      bio: "Assists members daily on machine orientation, correct posture execution, and safety on all Technogym selectorized equipment.",
    },
    {
      name: "Cardio & Conditioning Coach",
      role: "Cardiovascular & Endurance Trainer",
      titleUrdu: "کارڈیو و فٹنس ٹرینر",
      badge: "Matrix Specialist",
      experience: "Endurance & Weight Loss",
      image: "/images/optimized/facility-cardio.webp",
      verified: false,
      verificationNote: "Official name verification pending with owner",
      bio: "Guides endurance running programs, interval training protocols, and stamina development on the outdoor Matrix deck.",
    },
  ];

  return (
    <section id="coaches" className="py-24 relative overflow-hidden bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gym-border pb-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gym-gold font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-gym-gold rounded-full" />
              {t.nav.trainers}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold">
              {lang === "en" ? "LEADERSHIP & COACHING" : "کوچنگ اور رہنمائی"}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              {lang === "en"
                ? "Every workout at World Gym Kasur is backed by championship experience and honest guidance."
                : "ورلڈ جم قصور میں ہر سیشن چیمپئن شپ کے تجربے اور مخلصانہ رہنمائی پر مبنی ہے۔"}
            </p>
          </div>
          <div className="hidden md:block font-display text-7xl lg:text-8xl font-black text-zinc-900 select-none">
            03
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((coach, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-[#121215] border border-gym-border hover-gold-glow flex flex-col group"
            >
              <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-gym-border text-[10px] font-bold uppercase tracking-wider text-gym-gold">
                    {coach.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1 font-semibold uppercase tracking-wider">
                    {coach.verified ? (
                      <ShieldCheck className="w-4 h-4 text-gym-gold" />
                    ) : (
                      <UserCheck className="w-4 h-4 text-zinc-500" />
                    )}
                    <span>{coach.role}</span>
                  </div>

                  <h3 className="font-display text-2xl uppercase font-bold text-white mb-2">
                    {coach.name}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {coach.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-medium">{coach.experience}</span>
                  {!coach.verified && (
                    <span className="text-[10px] text-amber-500/80 font-mono">
                      [Floor Coach]
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
