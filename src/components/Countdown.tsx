"use client";

import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(targetIso: string): TimeLeft {
  const diff = new Date(targetIso).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

/**
 * 4 equal rounded champagne-gold tiles (#E6DCC8) with deep walnut numerals
 * matching the printed card's warm ivory & bronze aesthetic.
 */
export function Countdown({ targetIso }: { targetIso: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calcTimeLeft(targetIso));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calcTimeLeft(targetIso));
    const timer = setInterval(() => setTimeLeft(calcTimeLeft(targetIso)), 1000);
    return () => clearInterval(timer);
  }, [targetIso]);

  const items = [
    { value: mounted ? String(timeLeft.days).padStart(2, "0") : "--", label: "ngày" },
    { value: mounted ? String(timeLeft.hours).padStart(2, "0") : "--", label: "giờ" },
    { value: mounted ? String(timeLeft.minutes).padStart(2, "0") : "--", label: "phút" },
    { value: mounted ? String(timeLeft.seconds).padStart(2, "0") : "--", label: "giây" },
  ];

  return (
    <div className="flex items-center justify-center gap-2.5" aria-label="Đếm ngược ngày cưới">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex h-[58px] w-[58px] flex-col items-center justify-center rounded-[6px] bg-[#96743D]/92 text-[#FAF8F3] shadow-[0_6px_18px_rgba(61,46,31,0.28)] ring-1 ring-[#E6DCC8]/60 backdrop-blur-xs"
        >
          <span className="font-serif-editorial text-[22px] font-bold leading-none">
            {item.value}
          </span>
          <span className="mt-1 font-sans-soft text-[11px] font-semibold tracking-wide text-[#FAF8F3]/95">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
