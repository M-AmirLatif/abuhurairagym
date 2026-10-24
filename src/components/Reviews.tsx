"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote } from "lucide-react";
import type { GymData, Language } from "@/types/gym";

interface ReviewsProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function Reviews({ gym, lang, t }: ReviewsProps) {
  const [activeTheme, setActiveTheme] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(0);

  const reviews = gym.reviews;
  const filteredReviews =
    activeTheme === "all"
      ? reviews
      : reviews.filter((r) => r.theme === activeTheme);

  const reviewsPerPage = 4;
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  const displayedReviews = filteredReviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gym-border pb-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gym-gold font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-gym-gold rounded-full" />
              {t.reviews.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold">
              {t.reviews.title}
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mt-2 max-w-2xl">
              {t.reviews.subtitle}
            </p>
          </div>
          <div className="hidden md:block font-display text-7xl lg:text-8xl font-black text-zinc-900 select-none">
            06
          </div>
        </div>

        {/* Rating Summary + Theme Chips Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Summary Box */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#121215] border border-gym-border flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-black text-white">
                  4.6
                </span>
                <span className="text-xs text-zinc-300 uppercase tracking-widest font-semibold">
                  / 5.0
                </span>
              </div>
              <div className="flex items-center text-gym-gold my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gym-gold" />
                ))}
              </div>
              <span className="text-xs text-zinc-300 block">
                Based on 155 authentic Google Maps reviews
              </span>
              <div className="mt-2.5 pt-2 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                <span className="font-semibold text-zinc-200">100% Recommended</span>
                <span>(Facebook community)</span>
              </div>
            </div>

            <a
              href={gym.rating.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-gym-gold hover:border-gym-gold transition-colors shrink-0"
              title="View on Google Maps"
              aria-label="View 155 reviews on Google Maps listing"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Theme Filter Chips */}
          <div className="lg:col-span-8 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveTheme("all");
                setCurrentPage(0);
              }}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTheme === "all"
                  ? "bg-gym-gold text-black shadow-md shadow-amber-500/20"
                  : "bg-zinc-900 border border-gym-border text-zinc-300 hover:border-zinc-500"
              }`}
            >
              {t.reviews.filterAll} (16)
            </button>

            {gym.reviewThemes.map((th) => (
              <button
                key={th.key}
                type="button"
                onClick={() => {
                  setActiveTheme(th.key);
                  setCurrentPage(0);
                }}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTheme === th.key
                    ? "bg-gym-gold text-black shadow-md shadow-amber-500/20"
                    : "bg-zinc-900 border border-gym-border text-zinc-300 hover:border-zinc-500"
                }`}
              >
                {th.name} ({th.count})
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Carousel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#121215] border border-gym-border hover-gold-glow flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xs text-white">
                      {rev.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-none">
                        {rev.author}
                      </h3>
                      <span className="text-[11px] text-zinc-400 font-medium">
                        {rev.source}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-gym-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gym-gold" />
                    ))}
                  </div>
                </div>

                <Quote className="w-6 h-6 text-zinc-700 mb-2 group-hover:text-amber-500/40 transition-colors" />

                <p className="text-sm text-zinc-200 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="capitalize">Theme: {rev.theme}</span>
                <span className="text-emerald-400 font-medium">Verified Visitor</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls with Accessible Touch Targets (min 36x36px) */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-1.5">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(idx)}
                className="w-9 h-9 flex items-center justify-center cursor-pointer"
                aria-label={`Go to page ${idx + 1}`}
              >
                <span
                  className={`h-2.5 rounded-full transition-all block ${
                    currentPage === idx
                      ? "w-8 bg-gym-gold"
                      : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={totalPages <= 1}
              className="p-3 rounded-lg bg-zinc-900 border border-gym-border text-zinc-200 hover:text-white hover:border-gym-gold disabled:opacity-40 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Previous reviews page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={totalPages <= 1}
              className="p-3 rounded-lg bg-zinc-900 border border-gym-border text-zinc-200 hover:text-white hover:border-gym-gold disabled:opacity-40 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Next reviews page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Maps CTA Link */}
        <div className="text-center mt-12">
          <a
            href={gym.rating.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-gym-border hover:border-zinc-500 text-zinc-200 text-xs sm:text-sm font-semibold transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-gym-gold" />
            <span>{t.reviews.openMaps}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
