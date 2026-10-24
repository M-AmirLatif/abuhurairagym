"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, Camera } from "lucide-react";
import type { GymData, Language } from "@/types/gym";
import Lightbox from "./Lightbox";

interface GalleryProps {
  gym: GymData;
  lang: Language;
  t: any;
}

export default function Gallery({ gym, lang, t }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    { key: "all", label: t.gallery.filterAll },
    { key: "facilities", label: t.gallery.filterFacilities },
    { key: "achievements", label: t.gallery.filterAchievements },
    { key: "community", label: t.gallery.filterCommunity },
  ];

  const galleryItems = gym.gallery;

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const activeImage =
    activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1
    );
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0
    );
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gym-border pb-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gym-gold font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-gym-gold rounded-full" />
              {t.gallery.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold">
              {t.gallery.title}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              {t.gallery.subtitle}
            </p>
          </div>
          <div className="hidden md:block font-display text-7xl lg:text-8xl font-black text-zinc-900 select-none">
            05
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.key);
                setActiveImageIndex(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-gym-gold text-black shadow-md shadow-amber-500/20"
                  : "bg-zinc-900/80 border border-gym-border text-zinc-300 hover:border-zinc-500"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative rounded-xl overflow-hidden bg-[#121215] border border-gym-border hover-gold-glow cursor-pointer aspect-[4/3] sm:aspect-auto sm:h-72"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover indicator */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-gym-border flex items-center justify-center text-zinc-300 group-hover:text-gym-gold group-hover:border-gym-gold transition-colors">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Info Bottom */}
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[9px] font-bold uppercase tracking-widest text-gym-gold bg-black/70 px-2 py-0.5 rounded border border-zinc-800">
                  {item.category}
                </span>
                <h3 className="font-display text-lg uppercase text-white font-bold mt-1.5 leading-snug truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        image={activeImage}
        onClose={() => setActiveImageIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
