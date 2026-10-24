import { Phone, MessageCircle } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface MobileDockProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function MobileDock({ gym, lang, t }: MobileDockProps) {
  const whatsappUrl = `${gym.contact.whatsappUrl}?text=${encodeURIComponent(
    lang === "en"
      ? "Hello Coach Abu Huraira, I would like to inquire about joining World Gym Kasur."
      : "السلام علیکم استاد ابو ہریرہ، میں ورلڈ جم قصور کے بارے میں معلومات حاصل کرنا چاہتا ہوں۔"
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2.5 bg-black/95 backdrop-blur-xl border-t border-gym-border shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${gym.contact.phone}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs font-bold tracking-wide active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-gym-gold shrink-0" />
          <span className="truncate">{t.mobileDock.call}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-gym-gold text-black text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{t.mobileDock.whatsapp}</span>
        </a>
      </div>
    </div>
  );
}
