"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  image: {
    src: string;
    title: string;
    description: string;
    category: string;
  } | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [image, onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:text-gym-gold hover:border-gym-gold transition-colors cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:text-gym-gold hover:border-gym-gold transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:text-gym-gold hover:border-gym-gold transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[65vh] sm:h-[72vh] rounded-lg overflow-hidden">
          <Image
            src={image.src}
            alt={image.title}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="w-full text-center mt-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gym-gold bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
            {image.category}
          </span>
          <h3 className="font-display text-xl sm:text-2xl uppercase text-white font-bold mt-2">
            {image.title}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto mt-1">
            {image.description}
          </p>
        </div>
      </div>
    </div>
  );
}
