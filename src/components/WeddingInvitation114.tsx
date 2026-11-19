"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Check, Copy, MapPin, QrCode } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { useWeddingMusic } from "@/hooks/useWeddingMusic";
import {
  BanquetTableIcon,
  CoupleDividerIllustration,
  DoubleHeartMini,
  FooterCoupleHeart,
  GiftHeartBox3D,
  HLMonogramWreath,
  RoseStemSketch,
  WatercolorBlossomCorner,
  WatercolorHeartStamp,
  WeddingArchIcon,
} from "./WatercolorArt";
import { SlidingDoorsCover } from "./SlidingDoorsCover";
import { FloatingControls } from "./FloatingControls";
import { Reveal } from "./Reveal";
import { AlbumCarousel } from "./AlbumCarousel";
import { Countdown } from "./Countdown";
import { Lightbox } from "./Lightbox";
import { GiftModal } from "./GiftModal";

function buildCalendarCells(year: number, month1Based: number) {
  // Monday-first Vietnamese calendar: T2 T3 T4 T5 T6 T7 CN
  const firstDayJs = new Date(year, month1Based - 1, 1).getDay(); // 0=Sun..6=Sat
  const leadingBlanks = (firstDayJs + 6) % 7;
  const daysInMonth = new Date(year, month1Based, 0).getDate();

  const cells: Array<number | null> = [];
  for (let i = 0; i < leadingBlanks; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

export function WeddingInvitation114() {
  const { isPlaying, startMusic, toggleMusic } = useWeddingMusic(
    weddingConfig.audioSrc
  );

  const [guestName, setGuestName] = useState<string | undefined>(undefined);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [giftModalOpen, setGiftModalOpen] = useState(false);
  const [copiedAcc, setCopiedAcc] = useState<string | null>(null);

  const handleCopyAcc = async (accountNumber: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedAcc(accountNumber);
      setTimeout(() => setCopiedAcc(null), 2000);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guest = params.get("guest")?.trim();
    if (guest) {
      setGuestName(guest);
    }
  }, []);

  const calendarCells = useMemo(
    () =>
      buildCalendarCells(
        weddingConfig.calendar.year,
        weddingConfig.calendar.month
      ),
    []
  );

  const openPhotoBySrc = (src: string) => {
    const idx = weddingConfig.gallery.findIndex((g) => g.src === src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  return (
    <div className="relative flex min-h-screen w-full justify-center md:py-8">
      {/* Section 0: Ivory & Gold-Foil Botanical Sliding Doors (H & L Monogram Cover) */}
      <SlidingDoorsCover guestName={guestName} onOpen={startMusic} />

      {/* Floating Top Controls: Antique-gold Auto-scroll & Deep Walnut Music Vinyl */}
      <FloatingControls isPlaying={isPlaying} onToggleMusic={toggleMusic} />

      {/* Main Centered Mobile-First Vertical Feed — Warm Ivory Cotton Paper (#FAF8F3) */}
      <main className="card-cotton-surface relative w-full max-w-[460px] overflow-hidden shadow-[0_24px_70px_rgba(61,46,31,0.13)] md:rounded-[20px] md:ring-1 md:ring-[#DFD4BF]">
        {/* ============================================================
            SECTION 1: HERO / COVER ("Save The Date")
           ============================================================ */}
        <section className="relative overflow-hidden px-6 pb-10 pt-14 text-center">
          {/* Etched bronze botanical corner leaves matching the printed card */}
          <WatercolorBlossomCorner className="pointer-events-none absolute -right-8 -top-6 h-52 w-52 opacity-85" />
          <WatercolorBlossomCorner
            flip
            className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-75"
          />
          <RoseStemSketch className="pointer-events-none absolute bottom-4 -left-1 h-44 w-20 opacity-75" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Handwritten warm walnut calligraphy "Save The Date" */}
            <p className="font-calligraphy text-[48px] leading-none text-[#523E2B]">
              Save The Date
            </p>

            {/* Uppercase modern serif couple header (Bride & Groom — Nhà Gái) */}
            <h1 className="mt-3 font-display-serif text-[23px] font-semibold uppercase tracking-[0.16em] text-[#3D2E1F]">
              {weddingConfig.couple.brideUpper} &amp; {weddingConfig.couple.groomUpper}
            </h1>

            {/* Central sharp-edged rectangular vertical studio portrait (~70% width) */}
            <div
              className="mt-6 aspect-[3/4] w-[70%] cursor-pointer overflow-hidden bg-[#EFEAE0] p-[5px] shadow-[0_14px_34px_rgba(61,46,31,0.10)] ring-1 ring-[#DFD4BF]"
              onClick={() => openPhotoBySrc(weddingConfig.photos.hero)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={weddingConfig.photos.hero}
                alt={`${weddingConfig.couple.brideDisplay} & ${weddingConfig.couple.groomDisplay}`}
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
              />
            </div>

            {/* 3-Column Hero Date Bar separated by crisp 1px walnut vertical dividers */}
            <div className="mt-7 grid w-full max-w-[320px] grid-cols-[1fr_1px_auto_1px_1fr] items-center">
              {/* Left: Time & Day of week */}
              <div className="flex flex-col items-center justify-center pr-2">
                <span className="font-display-serif text-[20px] font-bold leading-tight tracking-[0.06em] text-[#523E2B]">
                  {weddingConfig.hero.time}
                </span>
                <span className="mt-0.5 font-display-serif text-[13px] font-semibold tracking-[0.14em] text-[#756350]">
                  {weddingConfig.hero.dayOfWeek}
                </span>
              </div>

              <div className="h-12 w-[1px] bg-[#8E7555]/75" aria-hidden="true" />

              {/* Center: Oversized Date 29.11 */}
              <div className="px-4 font-serif-editorial text-[46px] font-bold leading-none tracking-tight text-[#523E2B]">
                {weddingConfig.hero.dayMonth}
              </div>

              <div className="h-12 w-[1px] bg-[#8E7555]/75" aria-hidden="true" />

              {/* Right: Stacked 2-line Year 20 / 26 */}
              <div className="flex flex-col items-center justify-center pl-2 font-display-serif text-[21px] font-bold leading-[1.05] tracking-[0.14em] text-[#523E2B]">
                <span>{weddingConfig.hero.yearTop}</span>
                <span>{weddingConfig.hero.yearBottom}</span>
              </div>
            </div>

            {/* Lunar Calendar Line */}
            <p className="mt-4 font-sans-soft text-[13px] font-medium italic text-[#6B553E]">
              {weddingConfig.hero.lunarDate}
            </p>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: ROMANTIC QUOTE BANNER + MINI H&L GOLD MONOGRAM
           ============================================================ */}
        <section className="px-6 py-6 text-center">
          <Reveal className="flex flex-col items-center">
            <HLMonogramWreath
              leftLetter={weddingConfig.couple.groomInitial}
              rightLetter={weddingConfig.couple.brideInitial}
              className="mb-3 h-24 w-24 opacity-90"
            />
            <p className="font-script text-[22px] font-medium leading-relaxed text-[#523E2B]">
              {weddingConfig.hero.quoteLine1}
              <br />
              {weddingConfig.hero.quoteLine2}
            </p>
          </Reveal>
        </section>

        {/* ============================================================
            SECTION 3: ASYMMETRIC TWO-FAMILY & COUPLE SHOWCASE (ZIG-ZAG)
           ============================================================ */}
        <section className="space-y-9 px-5 py-6">
          {/* Row 1: Bride Photo (left, champagne-sand mat) + Nhà Gái / Cô dâu (right) */}
          <div className="grid grid-cols-[0.96fr_1.04fr] items-center gap-4">
            <Reveal direction="right">
              <div
                className="cursor-pointer bg-[#E6DCC8] p-[5px] shadow-[0_8px_22px_rgba(82,62,43,0.09)]"
                onClick={() => openPhotoBySrc(weddingConfig.gallery[1].src)}
              >
                <div className="aspect-[2/3] w-full overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={weddingConfig.photos.bride}
                    alt={`Cô dâu ${weddingConfig.couple.brideDisplay}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={120} className="flex flex-col items-center text-center">
              <p className="font-sans-soft text-[12px] font-bold tracking-[0.16em] text-[#96743D]">
                {weddingConfig.parents.brideSide.label}
              </p>
              <p className="mt-2 font-sans-soft text-[11px] font-semibold leading-relaxed text-[#3D2E1F]">
                {weddingConfig.parents.brideSide.father}
                <br />
                {weddingConfig.parents.brideSide.mother}
              </p>

              <div className="mt-6 flex flex-col items-center">
                <span className="font-script text-[18px] text-[#7A6247]">Cô dâu</span>
                <span className="mt-1 font-calligraphy text-[34px] leading-tight text-[#523E2B]">
                  {weddingConfig.couple.brideDisplay}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Row 2 (Mirrored): Nhà Trai / Chú rể (left) + Groom Photo (right, champagne-sand mat) */}
          <div className="grid grid-cols-[1.04fr_0.96fr] items-center gap-4">
            <Reveal direction="right" delay={120} className="flex flex-col items-center text-center">
              <p className="font-sans-soft text-[12px] font-bold tracking-[0.16em] text-[#96743D]">
                {weddingConfig.parents.groomSide.label}
              </p>
              <p className="mt-2 font-sans-soft text-[11px] font-semibold leading-relaxed text-[#3D2E1F]">
                {weddingConfig.parents.groomSide.father}
                <br />
                {weddingConfig.parents.groomSide.mother}
              </p>

              <div className="mt-6 flex flex-col items-center">
                <span className="font-script text-[18px] text-[#7A6247]">Chú rể</span>
                <span className="mt-1 font-calligraphy text-[34px] leading-tight text-[#523E2B]">
                  {weddingConfig.couple.groomDisplay}
                </span>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div
                className="cursor-pointer bg-[#E6DCC8] p-[5px] shadow-[0_8px_22px_rgba(82,62,43,0.09)]"
                onClick={() => openPhotoBySrc(weddingConfig.gallery[3].src)}
              >
                <div className="aspect-[2/3] w-full overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={weddingConfig.photos.groom}
                    alt={`Chú rể ${weddingConfig.couple.groomDisplay}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================================================
            SECTION 4: "THƯ MỜI" — FORMAL INVITATION LETTER
           ============================================================ */}
        <section className="px-5 py-8 text-center">
          <Reveal className="flex flex-col items-center">
            <span className="h-[1px] w-24 bg-[#8E7555]/80" />
            <h2 className="mt-3 font-script text-[38px] font-medium leading-none text-[#523E2B]">
              Thư Mời
            </h2>
            <p className="mt-2 font-sans-soft text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B553E]">
              THAM DỰ LỄ VU QUY {weddingConfig.couple.brideUpper} &amp;{" "}
              {weddingConfig.couple.groomUpper}
            </p>
          </Reveal>

          {/* Elegant Ivory Invitation Stationery Card */}
          <Reveal delay={120} className="mt-6 flex justify-center">
            <div className="w-full max-w-[360px] rounded-[16px] bg-[#FAF8F3] px-5 py-7 shadow-[0_12px_32px_rgba(61,46,31,0.08)] ring-1 ring-[#DFD4BF]">
              <div className="flex flex-col items-center text-center">
                {/* Gold Seal Monogram */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3ECE0] text-[#96743D] shadow-xs ring-1 ring-[#DFD4BF]">
                  <HLMonogramWreath
                    leftLetter={weddingConfig.couple.groomInitial}
                    rightLetter={weddingConfig.couple.brideInitial}
                    className="h-12 w-12"
                  />
                </div>

                <p className="mt-4 font-sans-soft text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#7A6247]">
                  TRÂN TRỌNG KÍNH MỜI
                </p>
                <p className="mt-2 font-script text-[36px] font-semibold leading-tight text-[#523E2B]">
                  {guestName || weddingConfig.defaultGuestName}
                </p>

                <div className="my-3.5 h-[1px] w-20 bg-[#B5945B]/60" />

                <p className="font-sans-soft text-[11.5px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-[#6B553E]">
                  TỚI DỰ BỮA TIỆC THÂN MẬT
                  <br />
                  &amp; LỄ THÀNH HÔN CÙNG GIA ĐÌNH CHÚNG TÔI
                </p>

                <p className="mt-4 font-serif-editorial text-[13px] italic leading-relaxed text-[#756350]">
                  Sự hiện diện của quý khách là niềm vinh hạnh lớn nhất
                  <br />
                  đối với gia đình chúng tôi!
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ============================================================
            SECTION 5: "BỮA TIỆC THÂN MẬT" (THỨ BẢY 28.11.2026 - 17H00)
           ============================================================ */}
        <section className="px-6 py-7 text-center">
          <Reveal className="flex flex-col items-center">
            <h2 className="font-sans-soft text-[17px] font-bold uppercase tracking-[0.16em] text-[#523E2B]">
              {weddingConfig.party.title}
            </h2>
            <p className="mt-1.5 font-sans-soft text-[11px] font-semibold uppercase tracking-[0.14em] text-[#756350]">
              ĐƯỢC TỔ CHỨC VÀO HỒI
            </p>

            {/* 3-Column Date Block with Giant Antique-Gold Day 28 */}
            <div className="mt-5 grid w-full max-w-[330px] grid-cols-[1fr_1px_auto_1px_1fr] items-center">
              <div className="flex flex-col items-center pr-2">
                <span className="font-sans-soft text-[15px] font-bold tracking-[0.2em] text-[#523E2B]">
                  {weddingConfig.party.time}
                </span>
                <span className="mt-1 font-sans-soft text-[13px] font-medium text-[#6B553E]">
                  {weddingConfig.party.dayOfWeek}
                </span>
              </div>

              <div className="h-14 w-[1px] bg-[#8E7555]/70" aria-hidden="true" />

              <div className="px-5 font-times text-[58px] font-bold leading-none tracking-[0.04em] text-[#96743D]">
                {weddingConfig.party.day}
              </div>

              <div className="h-14 w-[1px] bg-[#8E7555]/70" aria-hidden="true" />

              <div className="flex flex-col items-center pl-2">
                <span className="font-sans-soft text-[14px] font-semibold text-[#523E2B]">
                  {weddingConfig.party.monthText}
                </span>
                <span className="mt-1 font-sans-soft text-[13px] font-medium text-[#6B553E]">
                  {weddingConfig.party.yearText}
                </span>
              </div>
            </div>

            <p className="mt-3 font-sans-soft text-[12.5px] font-medium italic text-[#6B553E]">
              {weddingConfig.party.lunarDate}
            </p>

            {/* Home Address */}
            <div className="mt-6 flex flex-col items-center">
              <p className="font-sans-soft text-[12px] font-semibold tracking-[0.1em] text-[#756350]">
                Tại
              </p>
              <span className="mt-1 h-[1px] w-14 bg-[#8E7555]/70" />
              {weddingConfig.party.venueName && (
                <p className="mt-2.5 font-sans-soft text-[13.5px] font-bold uppercase tracking-[0.08em] text-[#523E2B]">
                  {weddingConfig.party.venueName}
                </p>
              )}
              {weddingConfig.party.venueAddress && (
                <p className="mt-0.5 font-sans-soft text-[12px] text-[#6B553E]">
                  {weddingConfig.party.venueAddress}
                </p>
              )}
            </div>

            {/* Warm champagne/walnut couple divider illustration */}
            <div className="mt-6">
              <CoupleDividerIllustration className="h-24 w-24" />
            </div>
          </Reveal>
        </section>

        {/* ============================================================
            SECTION 6: "LỄ VU QUY" (CHỦ NHẬT 29.11.2026) + ARCHED CHAMPAGNE VENUE CARD
           ============================================================ */}
        <section className="px-5 py-6 text-center">
          <Reveal className="flex flex-col items-center">
            <h2 className="font-sans-soft text-[17px] font-bold uppercase tracking-[0.16em] text-[#523E2B]">
              {weddingConfig.ceremony.title}
            </h2>
            <p className="mt-1.5 font-sans-soft text-[11px] font-semibold uppercase tracking-[0.14em] text-[#756350]">
              ĐƯỢC TỔ CHỨC VÀO HỒI
            </p>

            {/* Matching 3-Column Date Block with Giant Antique-Gold Day 29 */}
            <div className="mt-5 grid w-full max-w-[330px] grid-cols-[1fr_1px_auto_1px_1fr] items-center">
              <div className="flex flex-col items-center pr-2">
                <span className="font-sans-soft text-[15px] font-bold tracking-[0.2em] text-[#523E2B]">
                  {weddingConfig.ceremony.time}
                </span>
                <span className="mt-1 font-sans-soft text-[13px] font-medium text-[#6B553E]">
                  {weddingConfig.ceremony.dayOfWeek}
                </span>
              </div>

              <div className="h-14 w-[1px] bg-[#8E7555]/70" aria-hidden="true" />

              <div className="px-5 font-times text-[58px] font-bold leading-none tracking-[0.04em] text-[#96743D]">
                {weddingConfig.ceremony.day}
              </div>

              <div className="h-14 w-[1px] bg-[#8E7555]/70" aria-hidden="true" />

              <div className="flex flex-col items-center pl-2">
                <span className="font-sans-soft text-[14px] font-semibold text-[#523E2B]">
                  {weddingConfig.ceremony.monthText}
                </span>
                <span className="mt-1 font-sans-soft text-[13px] font-medium text-[#6B553E]">
                  {weddingConfig.ceremony.yearText}
                </span>
              </div>
            </div>

            <p className="mt-3 font-sans-soft text-[12.5px] font-medium italic text-[#6B553E]">
              {weddingConfig.ceremony.lunarDate}
            </p>
          </Reveal>

          {/* Enhanced High-Contrast Venue & Google Map Card */}
          <Reveal delay={140} className="mt-8 flex justify-center">
            <div className="w-[94%] max-w-[390px] overflow-hidden rounded-[24px] bg-[#FAF8F3] p-5 text-center shadow-[0_14px_38px_rgba(61,46,31,0.11)] ring-1 ring-[#DFD4BF]">
              {/* Header Icon & Title */}
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFE7D7] text-[#96743D] shadow-xs">
                  <MapPin className="h-5 w-5" />
                </span>
                <p className="mt-2.5 font-script text-[34px] font-medium leading-tight text-[#523E2B]">
                  Địa điểm tổ chức
                </p>
                <div className="mt-1 h-[1px] w-16 bg-[#B5945B]/60" />
              </div>

              {/* Venue Details */}
              <div className="mt-4 flex flex-col items-center">
                <p className="font-serif-editorial text-[18px] font-bold uppercase tracking-[0.12em] text-[#3D2E1F]">
                  {weddingConfig.ceremony.venueName}
                </p>
                <p className="mt-1 font-serif-editorial text-[14px] font-semibold tracking-[0.16em] text-[#96743D]">
                  {weddingConfig.ceremony.hallName}
                </p>
                <p className="mt-1.5 font-sans-soft text-[13px] font-medium leading-relaxed text-[#523E2B]">
                  {weddingConfig.ceremony.address}
                </p>
              </div>

              {/* High-visibility Embedded Google Maps iframe */}
              <div className="mt-5 overflow-hidden rounded-[14px] bg-white shadow-inner ring-1 ring-[#DFD4BF]">
                <iframe
                  title="Bản đồ chỉ đường tới Tư Gia Nhà Gái"
                  src={weddingConfig.ceremony.mapEmbedUrl}
                  className="h-[230px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Prominent Antique-Gold Navigation CTA Button right under map */}
              <a
                href={weddingConfig.ceremony.mapDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#B5945B] py-3 font-sans-soft text-[13px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_6px_20px_rgba(181,148,91,0.30)] transition hover:bg-[#96743D] active:scale-[0.99]"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Xem chỉ đường trên Google Maps</span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* ============================================================
            SECTION 7: MINI WEDDING TIMELINE (2-COLUMN MILESTONE ROW)
           ============================================================ */}
        <section className="px-6 py-8">
          <Reveal className="grid grid-cols-2 gap-4 text-center">
            {weddingConfig.timeline.map((item) => (
              <div key={item.time} className="flex flex-col items-center">
                {item.icon === "arch" ? (
                  <WeddingArchIcon className="h-12 w-12" />
                ) : (
                  <BanquetTableIcon className="h-12 w-12" />
                )}
                <p className="mt-2 font-sans-soft text-[16px] font-bold tracking-[0.18em] text-[#523E2B]">
                  {item.time}
                </p>
                <p className="mt-0.5 font-sans-soft text-[12.5px] font-semibold text-[#756350]">
                  {item.label}
                </p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ============================================================
            SECTION 8: "SAVE THE DATE" — PROPOSAL PHOTO + NOVEMBER 2026 CALENDAR
           ============================================================ */}
        <section className="px-5 py-9 text-center">
          <Reveal className="flex flex-col items-center">
            <p className="font-calligraphy text-[48px] leading-none text-[#523E2B]">
              Save The Date
            </p>
            <p className="mt-2 font-sans-soft text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A6247]">
              LƯU LẠI NGÀY HẠNH PHÚC CÙNG {weddingConfig.couple.brideUpper} &amp; {weddingConfig.couple.groomUpper}
            </p>

            {/* Combined Luxury Art Card (Proposal Photo + November 2026 Calendar) */}
            <div className="mt-6 w-full max-w-[360px] overflow-hidden rounded-[16px] bg-[#FAF8F3] p-3 shadow-[0_16px_40px_rgba(61,46,31,0.12)] ring-1 ring-[#DFD4BF]">
              {/* Proposal Photo (HAU07597 - "She And I Are Getting Married") */}
              <div
                className="group relative aspect-[2/3] w-full cursor-pointer overflow-hidden rounded-[10px] bg-[#EFEAE0]"
                onClick={() => openPhotoBySrc(weddingConfig.photos.proposal)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={weddingConfig.photos.proposal}
                  alt={`Save The Date - ${weddingConfig.couple.brideDisplay} & ${weddingConfig.couple.groomDisplay}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Subtle bottom gradient & calligraphy badge */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2C2117]/85 via-[#2C2117]/40 to-transparent px-4 pb-3.5 pt-10 text-center">
                  <p className="font-calligraphy text-[20px] text-[#FAF8F3] drop-shadow-sm">
                    She And I Are Getting Married
                  </p>
                  <p className="mt-0.5 font-sans-soft text-[9.5px] uppercase tracking-[0.2em] text-[#E6DCC8]/90">
                    Chạm để xem ảnh toàn màn hình
                  </p>
                </div>
              </div>

              {/* Integrated Calendar Header Strip (#E6DCC8) */}
              <div className="mt-4 flex items-center justify-between rounded-[8px] bg-[#E6DCC8] px-4 py-2.5 text-left">
                <span className="font-serif-editorial text-[22px] font-bold tracking-[0.06em] text-[#523E2B]">
                  {weddingConfig.calendar.bannerText}
                </span>
                <span className="font-sans-soft text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7A6247]">
                  Tháng Mười Một
                </span>
              </div>

              {/* 7-Column Calendar Grid */}
              <div className="mt-4 px-2">
                <div className="grid grid-cols-7 gap-y-2 text-center font-sans-soft text-[11.5px] font-bold text-[#523E2B]">
                  {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((dayLabel) => (
                    <span key={dayLabel}>{dayLabel}</span>
                  ))}
                </div>

                <div className="mt-2.5 grid grid-cols-7 gap-y-2 text-center font-sans-soft text-[13px] font-medium text-[#523E2B]">
                  {calendarCells.map((day, idx) => {
                    const isHighlight = day === weddingConfig.calendar.highlightDay;
                    const isPartyDay = day === weddingConfig.calendar.partyDay;
                    return (
                      <div
                        key={idx}
                        className="relative flex h-8 items-center justify-center"
                      >
                        {isHighlight && (
                          <WatercolorHeartStamp className="animate-heart-beat absolute h-8 w-8" />
                        )}
                        {isPartyDay && !isHighlight && (
                          <span
                            className="absolute h-7 w-7 rounded-full border border-dashed border-[#B5945B] bg-[#F1E8D7]/60"
                            aria-hidden="true"
                          />
                        )}
                        <span
                          className={
                            isHighlight
                              ? "relative z-10 font-bold text-[#523E2B]"
                              : isPartyDay
                                ? "relative z-10 font-bold text-[#96743D]"
                                : ""
                          }
                        >
                          {day ?? ""}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Calendar Legend */}
                <div className="mt-3.5 flex items-center justify-center gap-4 border-t border-[#DFD4BF]/60 pt-3 font-sans-soft text-[11px] text-[#756350]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full border border-dashed border-[#B5945B] bg-[#F1E8D7]" />
                    <span>28/11: Tiệc thân mật</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#B5945B]" />
                    <span>29/11: Lễ Vu Quy</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ============================================================
            SECTION 9: "ALBUM ẢNH CƯỚI" (2-COLUMN EDITORIAL GRID)
           ============================================================ */}
        <section className="px-5 py-9">
          <Reveal className="flex items-center gap-2.5">
            <h2 className="shrink-0 font-script text-[28px] font-medium leading-none text-[#523E2B]">
              Album ảnh cưới
            </h2>
            <DoubleHeartMini className="h-5 w-5 shrink-0" />
            <span className="h-[1px] flex-1 bg-[#8E7555]/75" />
          </Reveal>

          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {weddingConfig.photos.albumGrid.map((src, idx) => (
              <Reveal
                key={src + idx}
                direction={idx % 2 === 0 ? "right" : "left"}
                delay={(idx % 2) * 110}
              >
                <div
                  className="aspect-[2/3] w-full cursor-pointer overflow-hidden bg-[#EFEAE0]"
                  onClick={() => openPhotoBySrc(src)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Album ảnh cưới ${idx + 1}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 10: "XEM THÊM ALBUM" (CAROUSEL + THUMBNAILS)
           ============================================================ */}
        <section className="px-5 py-6">
          <Reveal className="flex items-center gap-3">
            <h2 className="shrink-0 font-script text-[26px] font-semibold leading-none text-[#96743D]">
              Xem Thêm Album
            </h2>
            <span className="h-[1px] flex-1 bg-[#8E7555]/75" />
          </Reveal>

          <Reveal delay={120} className="mt-5">
            <AlbumCarousel
              photos={weddingConfig.gallery}
              onOpenFullscreen={(idx) => setLightboxIndex(idx)}
            />
          </Reveal>
        </section>

        {/* ============================================================
            SECTION 11: "HỘP QUÀ MỪNG" (QR MỪNG CƯỚI CHÚ RỂ KIỀU MẠNH HƯNG)
           ============================================================ */}
        {weddingConfig.gift.enabled && (
          <section className="px-5 py-9 text-center">
            <Reveal className="flex flex-col items-center">
              <span className="h-[1px] w-24 bg-[#8E7555]/80" />
              <div className="mt-3">
                <GiftHeartBox3D className="mx-auto h-16 w-16" />
              </div>
              <h2 className="mt-2 font-script text-[36px] font-medium leading-none text-[#523E2B]">
                {weddingConfig.gift.title}
              </h2>
              <p className="mt-1.5 font-sans-soft text-[11px] font-semibold uppercase tracking-[0.16em] text-[#96743D]">
                {weddingConfig.gift.subtitle}
              </p>
              <p className="mx-auto mt-2 max-w-[320px] font-sans-soft text-[12.5px] italic leading-relaxed text-[#756350]">
                {weddingConfig.gift.message}
              </p>

              {/* QR Card Container */}
              <div className="mt-6 w-full max-w-[340px] overflow-hidden rounded-2xl border border-[#DFD4BF] bg-white p-5 shadow-[0_4px_20px_rgba(82,62,43,0.07)] ring-1 ring-[#FAF8F3]">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EC] px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-wider text-[#96743D]">
                  <DoubleHeartMini className="h-3.5 w-3.5" />
                  <span>{weddingConfig.gift.groomBank.role}</span>
                </div>

                {/* Scannable VietQR Card Image */}
                <div
                  onClick={() => setGiftModalOpen(true)}
                  className="group relative mx-auto mt-4 w-full max-w-[230px] cursor-pointer overflow-hidden rounded-xl border border-[#EFE8DC] bg-white p-2 shadow-xs transition hover:border-[#B5945B]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={weddingConfig.gift.groomBank.qrImage}
                    alt="Mã QR mừng cưới Kiều Mạnh Hưng - MBBank"
                    className="h-auto w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="mt-1.5 flex items-center justify-center gap-1 text-[11px] font-medium text-[#8E7555]">
                    <QrCode className="h-3.5 w-3.5" />
                    <span>Chạm để phóng to mã QR</span>
                  </div>
                </div>

                {/* Account Details Box */}
                <div className="mt-4 rounded-xl bg-[#FAF8F3] p-3.5 text-left text-[12.5px] text-[#523E2B]">
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#756350]">Ngân hàng:</span>
                    <span className="font-semibold text-[#523E2B]">
                      {weddingConfig.gift.groomBank.bankName}
                    </span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#756350]">Chủ tài khoản:</span>
                    <span className="font-bold text-[#523E2B]">
                      {weddingConfig.gift.groomBank.accountName}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-[#EBE3D3] pt-2">
                    <div>
                      <span className="block text-[11px] text-[#756350]">Số tài khoản:</span>
                      <span className="font-mono text-[16px] font-bold tracking-wider text-[#96743D]">
                        {weddingConfig.gift.groomBank.accountNumber}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyAcc(weddingConfig.gift.groomBank.accountNumber)}
                      className="inline-flex items-center gap-1 rounded-full bg-[#B5945B] px-3.5 py-1.5 font-sans-soft text-[12px] font-bold text-white shadow-xs transition hover:bg-[#96743D] active:scale-95"
                    >
                      {copiedAcc === weddingConfig.gift.groomBank.accountNumber ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        )}

        {/* ============================================================
            SECTION 12: FULL-BLEED CLOSING PHOTO + COUNTDOWN + CHAMPAGNE BAND
           ============================================================ */}
        <section className="relative w-full">
          <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#EFEAE0]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={weddingConfig.photos.closing}
              alt={`${weddingConfig.couple.brideDisplay} & ${weddingConfig.couple.groomDisplay}`}
              className="h-full w-full object-cover object-top"
            />

            {/* Lower-middle Countdown + Translucent Warm Champagne Thank-You Band */}
            <div className="absolute inset-x-0 bottom-10 flex flex-col items-center">
              <Countdown targetIso={weddingConfig.countdownTargetIso} />

              <div className="mt-5 w-full bg-[#EFE7D7]/86 px-6 py-5 text-center backdrop-blur-[2px]">
                <p className="font-sans-soft text-[12px] font-medium leading-relaxed text-[#3D2E1F]">
                  {weddingConfig.closing.line1}
                </p>
                <p className="mt-2 font-sans-soft text-[12px] font-medium leading-relaxed text-[#3D2E1F]">
                  {weddingConfig.closing.line2}
                </p>
                <p className="mt-2 font-serif-editorial text-[13px] font-semibold italic text-[#7A5D30]">
                  {weddingConfig.closing.line3}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 12: ELEGANT ILLUSTRATED COUPLE FOOTER
           ============================================================ */}
        <footer className="relative z-20 px-6 py-12 text-center">
          <div className="flex flex-col items-center text-center">
            <FooterCoupleHeart className="h-28 w-32" />
            <p className="mt-2 font-display-serif text-[13px] font-semibold tracking-[0.22em] text-[#7A5D30]">
              {weddingConfig.couple.brideUpper} &amp; {weddingConfig.couple.groomUpper}
            </p>
            <p className="mt-1 font-sans-soft text-[11px] tracking-[0.18em] text-[#8E7555]">
              {weddingConfig.hero.dateDot}
            </p>
            <p className="mt-3 font-script text-[20px] text-[#96743D]">
              Trân trọng cảm ơn quý khách!
            </p>
          </div>
        </footer>
      </main>

      {/* Modals */}
      <Lightbox
        photos={weddingConfig.gallery}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
      <GiftModal open={giftModalOpen} onClose={() => setGiftModalOpen(false)} />
    </div>
  );
}
