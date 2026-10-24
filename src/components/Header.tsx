"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface HeaderProps {
  gym: GymData;
  lang: Language;
  onToggleLang?: () => void;
  t: any;
}

export default function Header({ gym, lang, onToggleLang, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#facilities", label: t.nav.facilities },
    { href: "#coaches", label: t.nav.trainers },
    { href: "#plans", label: t.nav.plans },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#timings", label: t.timing?.title?.split(" ")[0] || "Timings" },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-gym-border shadow-2xl"
            : "bg-gradient-to-b from-black/85 via-black/50 to-transparent py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Typographic Athletic Wordmark */}
            <Link
              href="/"
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-gym-gold rounded-sm shrink-0"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gym-gold rotate-45 transform group-hover:scale-125 transition-transform shrink-0" />
                <span className="font-display text-xl sm:text-2xl md:text-3xl tracking-wider text-white group-hover:text-gym-gold transition-colors font-bold uppercase leading-none">
                  ABU HURAIRA
                </span>
              </div>
              <span className="text-[9px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase pl-3.5 sm:pl-4 mt-0.5 sm:mt-1">
                WORLD GYM • KASUR
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-zinc-300 hover:text-gym-gold transition-colors cursor-pointer tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Items */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Language Switcher */}
              <Link
                href={lang === "en" ? "/ur/" : "/"}
                prefetch={false}
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-bold tracking-wider rounded border border-gym-border hover:border-gym-gold text-zinc-300 hover:text-gym-gold transition-all cursor-pointer bg-zinc-900/80"
                aria-label={lang === "en" ? "اردو زبان میں تبدیل کریں" : "EN - Switch to English"}
              >
                {lang === "en" ? "اردو" : "EN"}
              </Link>

              {/* Direct Call Button (Desktop) */}
              <a
                href={`tel:${gym.contact.phone}`}
                className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded bg-zinc-900 border border-gym-border text-zinc-200 hover:border-zinc-500 transition-colors cursor-pointer"
                title="Call gym directly"
              >
                <Phone className="w-3.5 h-3.5 text-gym-gold" />
                <span>{gym.contact.phoneDisplay}</span>
              </a>

              {/* Join Now CTA (Desktop/Tablet) */}
              <a
                href={`${gym.contact.whatsappUrl}?text=${encodeURIComponent(
                  lang === "en"
                    ? "Hello Coach Abu Huraira, I would like to inquire about joining World Gym Kasur."
                    : "السلام علیکم استاد ابو ہریرہ، میں ورلڈ جم قصور کی رکنیت کے بارے میں معلومات حاصل کرنا چاہتا ہوں۔"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded bg-gym-gold text-black hover:bg-gym-gold-hover transition-colors shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{t.nav.joinNow}</span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden pt-20 px-6 pb-20 flex flex-col justify-between"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-4 border-b border-gym-border">
              <span className="text-xs font-semibold uppercase tracking-widest text-gym-gold">
                Abu Huraira World Gym
              </span>
              <p className="text-xs text-zinc-400 mt-1">
                Kot Murad Khan, Kasur • Closes 12 AM
              </p>
            </div>

            <nav className="flex flex-col space-y-2.5 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-200 hover:text-gym-gold transition-colors py-2 border-b border-zinc-900"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-gym-border">
            <a
              href={`tel:${gym.contact.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded bg-zinc-900 border border-gym-border text-white text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-gym-gold" />
              <span>{gym.contact.phoneDisplay}</span>
            </a>
            <a
              href={`${gym.contact.whatsappUrl}?text=${encodeURIComponent(
                "Hello Coach Abu Huraira, I want to join World Gym Kasur."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded bg-gym-gold text-black text-sm font-bold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.hero.joinWhatsApp}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
