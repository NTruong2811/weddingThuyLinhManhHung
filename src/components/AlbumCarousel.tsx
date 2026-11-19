"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface CarouselPhoto {
  src: string;
  alt: string;
}

/**
 * Section 10 — "Xem Thêm Album" Interactive Carousel + Thumbnail Strip
 * Styled in warm ivory/champagne sand & walnut bronze.
 */
export function AlbumCarousel({
  photos,
  onOpenFullscreen,
}: {
  photos: readonly CarouselPhoto[];
  onOpenFullscreen: (index: number) => void;
}) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setActive((i) => (i + 1) % photos.length);

  const current = photos[active];
  if (!current) return null;

  return (
    <div className="w-full">
      {/* Main portrait stage on soft warm-sand backdrop */}
      <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[6px] bg-[#F1ECE1] ring-1 ring-[#E5DAC6]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={current.alt}
          onClick={() => onOpenFullscreen(active)}
          className="h-full w-full cursor-pointer object-contain transition-opacity duration-300"
        />

        {/* Top-right fullscreen expand button */}
        <button
          type="button"
          onClick={() => onOpenFullscreen(active)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF8F3]/90 text-[#523E2B] shadow-sm backdrop-blur-xs transition hover:bg-white"
          aria-label="Phóng to ảnh"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </button>

        {/* Left & Right circular navigation buttons */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#FAF8F3]/92 text-[#523E2B] shadow-md transition hover:bg-white active:scale-95"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#FAF8F3]/92 text-[#523E2B] shadow-md transition hover:bg-white active:scale-95"
          aria-label="Ảnh tiếp theo"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Counter badge */}
        <div className="pointer-events-none absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full bg-[#3D2E1F]/65 px-2.5 py-0.5 text-[10px] font-medium tracking-wider text-[#FAF8F3]">
          {active + 1} / {photos.length}
        </div>
      </div>

      {/* Horizontal scrollable square thumbnail strip */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1.5">
        {photos.map((photo, idx) => {
          const isCurrent = idx === active;
          return (
            <button
              key={photo.src + idx}
              type="button"
              onClick={() => setActive(idx)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-[4px] transition ${
                isCurrent
                  ? "ring-2 ring-[#96743D] ring-offset-1 ring-offset-[#FAF8F3] opacity-100"
                  : "opacity-65 hover:opacity-95"
              }`}
              aria-label={`Chọn ảnh ${idx + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover object-top"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
