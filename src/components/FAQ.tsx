"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface FAQProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function FAQ({ gym, lang, t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const faqItems = gym.faq;

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#09090b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gym-gold font-bold mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white font-extrabold">
            {t.faq.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-[#121215] border border-gym-border transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-gym-gold"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-zinc-200">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gym-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
