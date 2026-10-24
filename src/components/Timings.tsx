import { Clock, AlertCircle, Sun, Moon, Flame } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface TimingsProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function Timings({ gym, lang, t }: TimingsProps) {
  // Sample hourly activity distribution for gym guidance
  const hourlyActivity = [
    { hour: "6 AM", level: 35, label: "Quiet" },
    { hour: "8 AM", level: 45, label: "Moderate" },
    { hour: "10 AM", level: 30, label: "Quiet" },
    { hour: "12 PM", level: 25, label: "Quiet" },
    { hour: "2 PM", level: 20, label: "Very Quiet" },
    { hour: "4 PM", level: 60, label: "Active" },
    { hour: "6 PM", level: 95, label: "Peak Time" },
    { hour: "8 PM", level: 90, label: "Peak Time" },
    { hour: "10 PM", level: 70, label: "Moderate" },
    { hour: "12 AM", level: 20, label: "Closing" },
  ];

  return (
    <section id="timings" className="py-24 relative overflow-hidden bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gym-border pb-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gym-gold font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-gym-gold rounded-full" />
              {t.timing.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold">
              {t.timing.title}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              {t.timing.subtitle}
            </p>
          </div>
          <div className="hidden md:block font-display text-7xl lg:text-8xl font-black text-zinc-900 select-none">
            07
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Daily Schedule Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#121215] border border-gym-border p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-gym-gold" />
                <h3 className="font-display text-xl uppercase font-bold text-white">
                  {t.timing.dailyStatus}
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-red-950/80 border border-red-800 text-red-300 text-xs font-semibold">
                Closes 12:00 AM
              </span>
            </div>

            <div className="space-y-3">
              {gym.operatingHours.days.map((d, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 border-b border-zinc-900 text-sm"
                >
                  <span className="font-medium text-zinc-300">{d.day}</span>
                  <span className="font-mono text-zinc-400">{d.hours}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-gym-gold shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-400 leading-relaxed">
                {lang === "en"
                  ? "Morning opening time varies by season. For the current early morning schedule, please drop a quick message on WhatsApp."
                  : "صبح کا وقت موسم کے مطابق تبدیل ہو سکتا ہے۔ صبح کے شیڈول کے لیے واٹس ایپ پر رابطہ فرمائیں۔"}
              </p>
            </div>
          </div>

          {/* Popular Times Activity Visualizer */}
          <div className="lg:col-span-7 rounded-2xl bg-[#121215] border border-gym-border p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <h3 className="font-display text-xl uppercase font-bold text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-gym-gold" />
                  <span>Estimated Popular Times</span>
                </h3>
                <span className="text-[11px] text-amber-500/90 font-mono mt-0.5 block">
                  * {t.timing.peakDisclaimer}
                </span>
              </div>
              <span className="text-xs font-bold text-zinc-400">Peak: 6 PM – 9 PM</span>
            </div>

            {/* Bar Visualizer */}
            <div className="pt-6 pb-2">
              <div className="grid grid-cols-10 gap-2 items-end h-48 sm:h-56 px-2 border-b border-zinc-800 pb-2">
                {hourlyActivity.map((slot, idx) => {
                  const isPeak = slot.level >= 80;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center h-full justify-end group relative"
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black border border-gym-border px-2 py-1 rounded text-[10px] text-zinc-200 whitespace-nowrap z-20">
                        {slot.hour}: {slot.label} ({slot.level}%)
                      </div>

                      <div
                        style={{ height: `${slot.level}%` }}
                        className={`w-full rounded-t-md transition-all duration-500 ${
                          isPeak
                            ? "bg-gym-gold shadow-lg shadow-amber-500/20"
                            : "bg-zinc-800 group-hover:bg-zinc-700"
                        }`}
                      />
                      <span className="text-[10px] font-mono text-zinc-400 mt-2 rotate-[-45deg] sm:rotate-0 origin-center font-medium">
                        {slot.hour.replace(" ", "")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visit Recommendation Legend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
              <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800">
                <Sun className="w-4 h-4 text-gym-gold mx-auto mb-1" />
                <span className="font-bold text-zinc-200 block">{t.timing.morning}</span>
                <span className="text-[10px] text-zinc-400">Calm & Focused</span>
              </div>
              <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800">
                <Sun className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="font-bold text-zinc-200 block">{t.timing.afternoon}</span>
                <span className="text-[10px] text-zinc-400">Lowest Crowd</span>
              </div>
              <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800">
                <Flame className="w-4 h-4 text-red-500 mx-auto mb-1" />
                <span className="font-bold text-zinc-200 block">{t.timing.evening}</span>
                <span className="text-[10px] text-zinc-400">High Energy</span>
              </div>
              <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800">
                <Moon className="w-4 h-4 text-gym-gold mx-auto mb-1" />
                <span className="font-bold text-zinc-200 block">{t.timing.night}</span>
                <span className="text-[10px] text-zinc-400">Night Owls</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
