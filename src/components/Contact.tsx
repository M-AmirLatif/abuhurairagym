"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  Send,
  Navigation,
  Clock,
  Sparkles,
} from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface ContactProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function Contact({ gym, lang, t }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    goal: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      lang === "en"
        ? `Hello Coach Abu Huraira, I would like to request a Walk-In Trial Pass.\n\n👤 Name: ${formState.name}\n📞 Phone: ${formState.phone}\n🎯 Goal: ${formState.goal || "General Fitness"}\n⏰ Preferred Time: ${formState.time || "Evening"}\n\nLooking forward to meeting you at World Gym Kasur!`
        : `السلام علیکم استاد ابو ہریرہ، میں ورلڈ جم قصور کے لیے ٹرائل پاس کے سلسلے میں رابطہ کر رہا ہوں۔\n\n👤 نام: ${formState.name}\n📞 فون: ${formState.phone}\n🎯 ہدف: ${formState.goal || "فٹنس"}\n⏰ وزٹ کا وقت: ${formState.time || "شام"}\n\nشکریہ!`;

    const encoded = encodeURIComponent(msg);
    window.open(`${gym.contact.whatsappUrl}?text=${encoded}`, "_blank");
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=4C8R%2B5XC+Nizam+Pura+Rd+Kot+Murad+Khan+Kasur+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=4C8R%2B5XC,+Nizam+Pura+Rd,+Kot+Murad+Khan,+Kasur,+Pakistan`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gym-border pb-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gym-gold font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-gym-gold rounded-full" />
              {t.contact.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold">
              {t.contact.title}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              {t.contact.subtitle}
            </p>
          </div>
          <div className="hidden md:block font-display text-7xl lg:text-8xl font-black text-zinc-900 select-none">
            08
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info, Map & Socials */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <a
                href={`tel:${gym.contact.phone}`}
                className="p-5 rounded-xl bg-[#121215] border border-gym-border hover-gold-glow flex items-start gap-4 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gym-gold" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {t.contact.phoneTitle}
                  </span>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {gym.contact.phoneDisplay}
                  </div>
                  <span className="text-[11px] text-zinc-400">Click to call directly</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={gym.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#121215] border border-gym-border hover-gold-glow flex items-start gap-4 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-gym-gold" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {t.contact.whatsappTitle}
                  </span>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {gym.contact.phoneDisplay}
                  </div>
                  <span className="text-[11px] text-zinc-400">Instant Chat & Advice</span>
                </div>
              </a>
            </div>

            {/* Address Card & Directions */}
            <div className="p-6 rounded-2xl bg-[#121215] border border-gym-border space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gym-gold shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {t.contact.addressTitle}
                  </span>
                  <p className="text-sm font-medium text-white leading-relaxed mt-0.5">
                    {gym.contact.address}
                  </p>
                  {gym.contact.localLandmarks && (
                    <p className="text-xs text-zinc-300 mt-1.5 flex items-center gap-1.5">
                      <span className="text-gym-gold font-bold uppercase tracking-wider text-[11px]">
                        {lang === "en" ? "Landmark:" : "اہم نشانی:"}
                      </span>
                      <span>
                        {lang === "en"
                          ? gym.contact.localLandmarks
                          : "نزد کارخانہ مفاصل، تھانہ بی ڈویژن، سٹی ہسپتال، قصور"}
                      </span>
                    </p>
                  )}
                  <span className="inline-block mt-2 font-mono text-xs text-amber-500/90 bg-black/60 px-2.5 py-1 rounded border border-zinc-800">
                    Plus Code: {gym.contact.plusCode}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-gym-gold text-zinc-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-gym-gold" />
                  <span>{t.contact.directionsButton}</span>
                </a>
              </div>
            </div>

            {/* Google Maps Iframe */}
            <div className="rounded-2xl overflow-hidden border border-gym-border h-64 sm:h-72 w-full relative bg-zinc-900 shadow-xl">
              <iframe
                title="Abu Huraira World Gym Kasur Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Official Facebook Community Links */}
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Official Facebook Pages (1.1K+ Followers):</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={gym.contact.social.facebookPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-gym-gold transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  <span>Page 1</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span>•</span>
                <a
                  href={gym.contact.social.facebookSecondary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-gym-gold transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  <span>Page 2</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Free Trial / Walk-In Form (WhatsApp powered) */}
          <div className="lg:col-span-6 rounded-2xl bg-[#121215] border border-gym-border p-6 sm:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gym-gold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Commitment</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold text-white">
                {t.contact.formTitle}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                {t.contact.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="user-name"
                  className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5"
                >
                  {t.contact.nameLabel} *
                </label>
                <input
                  id="user-name"
                  type="text"
                  required
                  placeholder="e.g. Usman Ali"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-gym-gold text-sm transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="user-phone"
                  className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5"
                >
                  {t.contact.phoneLabel} *
                </label>
                <input
                  id="user-phone"
                  type="tel"
                  required
                  inputMode="numeric"
                  placeholder="0300 1234567"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-gym-gold text-sm transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="user-goal"
                  className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5"
                >
                  {t.contact.goalLabel}
                </label>
                <input
                  id="user-goal"
                  type="text"
                  placeholder={t.contact.goalPlaceholder}
                  value={formState.goal}
                  onChange={(e) =>
                    setFormState({ ...formState, goal: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-gym-gold text-sm transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="user-time"
                  className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5"
                >
                  {t.contact.timeLabel}
                </label>
                <input
                  id="user-time"
                  type="text"
                  placeholder={t.contact.timePlaceholder}
                  value={formState.time}
                  onChange={(e) =>
                    setFormState({ ...formState, time: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-gym-gold text-sm transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gym-gold text-black hover:bg-gym-gold-hover text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitButton}</span>
                </button>
              </div>

              <p className="text-[11px] text-zinc-400 text-center pt-1 font-mono">
                No passwords or payments required. Opens official WhatsApp directly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
