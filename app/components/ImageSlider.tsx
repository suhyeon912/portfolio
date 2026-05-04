"use client";

import { useState } from "react";
import Image from "next/image";

export interface SlideImage {
  src: string;
  title: string;
}

interface ImageSliderProps {
  images: SlideImage[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#0a0a14] border border-[#1e1e36] group">
      {/* Image — natural ratio, no cropping */}
      <div className="relative w-full">
        <Image
          key={current}
          src={images[current].src}
          alt={images[current].title}
          width={1280}
          height={800}
          className="w-full h-auto animate-fade-in"
          style={{ display: "block", maxHeight: "560px", objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 860px"
        />

        {/* Gradient overlay bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a14] to-transparent" />
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-purple-700/80 border border-white/10 hover:border-purple-500/50 text-white transition-all duration-200 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-purple-700/80 border border-white/10 hover:border-purple-500/50 text-white transition-all duration-200 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Bottom: title + dots */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1.5 pb-2.5">
        {/* Image title */}
        <p className="text-xs text-gray-400 font-medium tracking-wide px-3 text-center">
          {images[current].title}
        </p>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current
                    ? "w-4 h-1.5 bg-purple-400"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Counter bottom-right */}
      {images.length > 1 && (
        <div className="absolute bottom-7 right-3 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-xs text-gray-400 font-mono">
          {current + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
