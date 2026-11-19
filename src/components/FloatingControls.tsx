"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Music2, Pause, Play } from "lucide-react";

/**
 * Floating Controls themed in Warm Antique Gold & Espresso Walnut:
 * - Top-left: Antique-gold (#96743D) circular Auto-Scroll toggle (Play/Pause)
 * - Top-right: Deep walnut (#3D2E1F) circular Music toggle rotating when playing
 */
export function FloatingControls({
  isPlaying,
  onToggleMusic,
}: {
  isPlaying: boolean;
  onToggleMusic: () => void;
}) {
  const [autoScrolling, setAutoScrolling] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const scrollPosRef = useRef<number>(0);
  const scrollBtnRef = useRef<HTMLButtonElement | null>(null);

  const stopAutoScroll = useCallback(() => {
    setAutoScrolling(false);
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTsRef.current = null;
  }, []);

  const toggleAutoScroll = () => {
    if (autoScrolling) {
      stopAutoScroll();
      return;
    }

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= maxScroll - 8) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      scrollPosRef.current = 0;
    } else {
      scrollPosRef.current = window.scrollY;
    }
    setAutoScrolling(true);
  };

  useEffect(() => {
    if (!autoScrolling) return;

    scrollPosRef.current = window.scrollY;
    lastTsRef.current = null;

    const step = (ts: number) => {
      if (lastTsRef.current === null) {
        lastTsRef.current = ts;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const dt = Math.min((ts - lastTsRef.current) / 1000, 0.1);
      lastTsRef.current = ts;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollPosRef.current >= maxScroll - 1) {
        stopAutoScroll();
        return;
      }

      scrollPosRef.current = Math.min(scrollPosRef.current + dt * 65, maxScroll);
      window.scrollTo({
        top: scrollPosRef.current,
        behavior: "instant" as ScrollBehavior,
      });

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    const cancelOnUserInteract = (e: Event) => {
      if (
        scrollBtnRef.current &&
        e.target instanceof Node &&
        scrollBtnRef.current.contains(e.target)
      ) {
        return;
      }
      stopAutoScroll();
    };

    window.addEventListener("wheel", cancelOnUserInteract, { passive: true });
    window.addEventListener("touchstart", cancelOnUserInteract, { passive: true });
    window.addEventListener("keydown", cancelOnUserInteract, { passive: true });

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("wheel", cancelOnUserInteract);
      window.removeEventListener("touchstart", cancelOnUserInteract);
      window.removeEventListener("keydown", cancelOnUserInteract);
    };
  }, [autoScrolling, stopAutoScroll]);

  return (
    <div className="pointer-events-none fixed left-1/2 top-4 z-40 flex w-full max-w-[460px] -translate-x-1/2 items-center justify-between px-4">
      {/* Top-left: Antique-gold Auto-scroll button */}
      <button
        ref={scrollBtnRef}
        type="button"
        onClick={toggleAutoScroll}
        className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#96743D]/92 text-white shadow-[0_4px_14px_rgba(82,62,43,0.34)] backdrop-blur-xs transition hover:scale-105 hover:bg-[#7A5D30] active:scale-95"
        title={autoScrolling ? "Tạm dừng tự cuộn" : "Tự động cuộn thiệp"}
        aria-label={autoScrolling ? "Tạm dừng tự cuộn" : "Tự động cuộn thiệp"}
      >
        {autoScrolling ? (
          <Pause className="h-3.5 w-3.5 fill-current" />
        ) : (
          <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
        )}
      </button>

      {/* Top-right: Deep walnut circular Music-note toggle */}
      <button
        type="button"
        onClick={onToggleMusic}
        className="pointer-events-auto relative flex h-9 w-9 items-center justify-center rounded-full bg-[#3D2E1F]/90 text-[#FAF8F3] shadow-[0_4px_14px_rgba(61,46,31,0.28)] ring-1 ring-[#D8C7A8]/70 backdrop-blur-xs transition hover:scale-105 active:scale-95"
        title={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
        aria-label={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
      >
        <Music2 className={`h-4 w-4 ${isPlaying ? "animate-vinyl-spin" : ""}`} />
        {!isPlaying && (
          <span
            className="pointer-events-none absolute h-[1.8px] w-6 -rotate-45 rounded-full bg-[#FAF8F3]"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}
