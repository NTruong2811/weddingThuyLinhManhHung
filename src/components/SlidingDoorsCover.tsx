"use client";

import React, { useEffect, useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { HLMonogramWreath, PinkLilyDoorArt } from "./WatercolorArt";

type DoorStage = "closed" | "opening" | "done";

/**
 * Section 0 — Ivory & Gold-Foil Botanical Sliding Doors Opening Screen:
 * Faithfully echoes the front cover of Thùy Linh & Mạnh Hưng's printed wedding card
 * ("THIỆP MỜI • WEDDING INVITATION • SAVE the DATE • 29.11.2026" + Gold Foil H & L Wreath + "KÍNH MỜI").
 * Tapping anywhere synchronously unlocks & starts background music and parts the doors horizontally.
 */
export function SlidingDoorsCover({
  guestName,
  onOpen,
}: {
  guestName?: string;
  onOpen: () => void;
}) {
  const [stage, setStage] = useState<DoorStage>("closed");

  useEffect(() => {
    if (stage === "done") return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [stage]);

  const handleOpen = () => {
    if (stage !== "closed") return;
    // Start music synchronously inside click/tap gesture for 100% iOS Safari & Zalo support
    onOpen();
    setStage("opening");
    window.setTimeout(() => {
      setStage("done");
    }, 1150);
  };

  if (stage === "done") return null;

  const isOpening = stage === "opening";

  return (
    <div
      onClick={handleOpen}
      role="dialog"
      aria-modal="true"
      aria-label={`Mở thiệp cưới ${weddingConfig.couple.brideDisplay} và ${weddingConfig.couple.groomDisplay}`}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${
        isOpening ? "pointer-events-none" : "cursor-pointer"
      }`}
    >
      {/* Centered mobile-frame container on desktop, full-screen on mobile */}
      <div className="relative flex h-full w-full max-w-[460px] overflow-hidden shadow-2xl">
        {/* Left Ivory Cotton-Paper Door */}
        <div
          className="relative h-full w-1/2 overflow-hidden border-r border-[#DFD4BF] bg-gradient-to-br from-[#FCFBF7] via-[#F9F6EE] to-[#F0E9DC] transition-transform duration-[1050ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            transform: isOpening ? "translateX(-102%)" : "translateX(0%)",
          }}
        >
          <PinkLilyDoorArt side="left" />
        </div>

        {/* Right Ivory Cotton-Paper Door */}
        <div
          className="relative h-full w-1/2 overflow-hidden border-l border-[#DFD4BF] bg-gradient-to-bl from-[#FCFBF7] via-[#F9F6EE] to-[#F0E9DC] transition-transform duration-[1050ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            transform: isOpening ? "translateX(102%)" : "translateX(0%)",
          }}
        >
          <PinkLilyDoorArt side="right" />
        </div>

        {/* Center Printed-Card Front Cover Emblem & Gold Foil H & L Wreath */}
        <div
          className={`pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center transition-all duration-400 ${
            isOpening ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <p className="font-serif-editorial text-[22px] font-medium tracking-[0.22em] text-[#5C4631]">
            THIỆP MỜI
          </p>
          <p className="mt-1 font-sans-soft text-[10px] font-semibold tracking-[0.26em] text-[#7A6247]">
            WEDDING INVITATION
          </p>

          <p className="mt-4 flex items-center gap-1.5 font-sans-soft text-[14px] font-bold tracking-[0.16em] text-[#6B5237]">
            <span>SAVE</span>
            <span className="font-script text-[17px] font-medium lowercase tracking-normal text-[#96743D]">
              the
            </span>
            <span>DATE</span>
          </p>
          <p className="mt-0.5 font-serif-editorial text-[14px] font-semibold tracking-[0.2em] text-[#5C4631]">
            {weddingConfig.hero.dateDot}
          </p>

          {/* Gold Foil H & L Floral Wreath Button */}
          <button
            type="button"
            onClick={handleOpen}
            className="animate-seal-pulse pointer-events-auto my-5 flex h-[176px] w-[176px] items-center justify-center rounded-full bg-[#FAF8F3]/85 ring-1 ring-[#D8C7A8] backdrop-blur-xs transition hover:scale-[1.03] focus:outline-none"
            aria-label="Chạm để mở thiệp cưới"
          >
            <HLMonogramWreath
              leftLetter={weddingConfig.couple.groomInitial}
              rightLetter={weddingConfig.couple.brideInitial}
              className="h-[164px] w-[164px]"
            />
          </button>

          {/* Dotted "KÍNH MỜI:" line echoing the printed invitation front cover - single line */}
          <div className="mt-2 flex w-full max-w-[340px] items-baseline justify-center gap-2 px-3">
            <span className="shrink-0 font-serif-editorial text-[12px] font-semibold tracking-[0.12em] text-[#5C4631]">
              KÍNH MỜI:
            </span>
            <span className="whitespace-nowrap border-b border-dotted border-[#8E7555] pb-0.5 font-script text-[20px] leading-none text-[#523E2B]">
              {guestName || weddingConfig.defaultGuestName}
            </span>
          </div>

          <span className="mt-6 rounded-full bg-[#96743D] px-6 py-2.5 font-sans-soft text-[12px] font-semibold tracking-wide text-white shadow-[0_6px_20px_rgba(82,62,43,0.28)]">
            Chạm để mở thiệp cưới
          </span>
        </div>
      </div>
    </div>
  );
}
