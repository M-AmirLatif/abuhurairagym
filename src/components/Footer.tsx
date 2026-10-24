import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Banknote, Shield } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface FooterProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function Footer({ gym, lang, t }: FooterProps) {
  return (
    <footer className="bg-black border-t border-gym-border pt-16 pb-28 md:pb-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Wordmark & Mission */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl tracking-wider text-white font-bold uppercase block">
                ABU HURAIRA WORLD GYM
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-gym-gold uppercase block mt-0.5">
                KASUR FITNESS CENTER
              </span>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.footer.tagline}. {gym.tagline}
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>4.6 ★ Rated from 155 Google Reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-gym-gold transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-gym-gold transition-colors">
                  {t.nav.facilities}
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-gym-gold transition-colors">
                  {t.nav.trainers}
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-gym-gold transition-colors">
                  {t.nav.plans}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gym-gold transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gym-gold transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gym-gold transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Policy */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gym-gold" />
                <span>{t.footer.hours}</span>
              </h3>
              <p className="text-xs text-zinc-300">
                {t.footer.hoursDesc}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 text-gym-gold" />
                <span>{t.footer.payments}</span>
              </h3>
              <p className="text-xs text-zinc-300">
                {t.footer.paymentsDesc}
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
              Kasur Headquarters
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gym-gold shrink-0 mt-0.5" />
                <span>Kot Murad Khan, near Jamal Market, Kasur, 55050</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gym-gold shrink-0" />
                <a href={`tel:${gym.contact.phone}`} className="hover:text-white">
                  {gym.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-gym-gold shrink-0" />
                <a
                  href={gym.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                Social Communities
              </span>
              <div className="flex items-center gap-3 text-xs">
                <a
                  href={gym.contact.social.facebookPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-gym-gold transition-colors"
                >
                  Facebook Page
                </a>
                <span>•</span>
                <a
                  href={gym.contact.social.facebookSecondary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-gym-gold transition-colors"
                >
                  Fitness Community
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Developer Credit Slot */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} {gym.name}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-1.5 text-zinc-400 font-medium">
            <span>Website crafted with precision by</span>
            <span className="text-gym-gold font-bold">Creative Engineering Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
