"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CheckCircle2, MapPin } from "lucide-react";
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

  const [rsvpName, setRsvpName] = useState("");
  const [rsvpStatus, setRsvpStatus] = useState<"yes" | "no">("yes");
  const [rsvpCount, setRsvpCount] = useState("1");
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guest = params.get("guest")?.trim();
    if (guest) {
      setGuestName(guest);
      setRsvpName(guest);
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

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;
    setRsvpSubmitted(true);
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
              <p className="mt-1 font-sans-soft text-[10.5px] italic text-[#756350]">
                {weddingConfig.parents.brideSide.location}
              </p>

              <div className="mt-7 flex flex-col items-center">
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
              <p className="mt-1 font-sans-soft text-[10.5px] italic text-[#756350]">
                {weddingConfig.parents.groomSide.location}
              </p>

              <div className="mt-7 flex flex-col items-center">
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
            SECTION 4: "THƯ MỜI" + STAGGERED 3-PHOTO TRIPTYCH + GUEST NAME
           ============================================================ */}
        <section className="px-5 py-9 text-center">
          <Reveal className="flex flex-col items-center">
            <span className="h-[1px] w-24 bg-[#8E7555]/80" />
            <h2 className="mt-3 font-script text-[36px] font-medium leading-none text-[#523E2B]">
              Thư Mời
            </h2>
            <p className="mt-2 font-sans-soft text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B553E]">
              THAM DỰ LỄ VU QUY {weddingConfig.couple.brideUpper} &amp;{" "}
              {weddingConfig.couple.groomUpper}
            </p>
          </Reveal>

          {/* 3-Column Staggered Triptych (middle photo offset downward) */}
          <div className="mt-6 grid grid-cols-3 items-start gap-2.5 pb-4">
            {weddingConfig.photos.triptych.map((src, idx) => (
              <Reveal
                key={src}
                direction="up"
                delay={idx * 120}
                className={idx === 1 ? "mt-4" : ""}
              >
                <div
                  className="aspect-[2/3] w-full cursor-pointer overflow-hidden bg-[#EFEAE0] shadow-[0_8px_20px_rgba(61,46,31,0.10)] ring-1 ring-[#E6DCC8]"
                  onClick={() => openPhotoBySrc(src)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Ảnh thiệp mời ${idx + 1}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Personalized Guest Greeting */}
          <Reveal delay={140} className="mt-6 flex flex-col items-center">
            <p className="font-sans-soft text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#523E2B]">
              TRÂN TRỌNG KÍNH MỜI
            </p>
            <p className="mt-2 font-script text-[34px] font-semibold leading-tight text-[#96743D]">
              {guestName || weddingConfig.defaultGuestName}
            </p>
            <p className="mt-2 font-sans-soft text-[11px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#6B553E]">
              TỚI DỰ BỮA TIỆC THÂN MẬT
              <br />
              MỪNG LỄ THÀNH HÔN CÙNG GIA ĐÌNH
            </p>
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
              <p className="mt-2.5 font-sans-soft text-[13.5px] font-bold uppercase tracking-[0.08em] text-[#523E2B]">
                {weddingConfig.party.venueName}
              </p>
              <p className="mt-0.5 font-sans-soft text-[12px] text-[#6B553E]">
                {weddingConfig.party.venueAddress}
              </p>
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

          {/* Signature Arched Champagne-Sand (#E6DCC8) Venue & Google Map Card */}
          <Reveal delay={140} className="mt-7 flex justify-center">
            <div className="w-[94%] rounded-t-[999px] bg-[#E6DCC8] px-5 pb-5 pt-11 text-center shadow-[0_12px_30px_rgba(82,62,43,0.10)] ring-1 ring-[#D7C9AE]">
              <p className="font-script text-[32px] font-medium leading-none text-[#523E2B]">
                Địa điểm tổ chức
              </p>

              {/* Venue Info with Ivory Map Pin */}
              <div className="mt-5 flex items-center justify-center gap-3 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3] text-[#96743D] shadow-xs">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-center">
                  <p className="font-serif-editorial text-[16px] font-bold uppercase tracking-[0.06em] text-[#3D2E1F]">
                    {weddingConfig.ceremony.venueName}
                  </p>
                  <p className="mt-0.5 font-serif-editorial text-[12.5px] font-semibold tracking-[0.12em] text-[#523E2B]">
                    {weddingConfig.ceremony.hallName}
                  </p>
                  <p className="mt-0.5 font-sans-soft text-[11.5px] text-[#523E2B]/90">
                    {weddingConfig.ceremony.address}
                  </p>
                </div>
              </div>

              {/* Ivory Pill CTA Button: XEM CHỈ ĐƯỜNG */}
              <a
                href={weddingConfig.ceremony.mapDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[#FAF8F3] px-7 py-2.5 font-serif-editorial text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#523E2B] shadow-[0_4px_14px_rgba(82,62,43,0.14)] transition hover:bg-[#96743D] hover:text-white"
              >
                XEM CHỈ ĐƯỜNG
              </a>

              {/* Embedded Google Maps iframe inside lower arch */}
              <div className="mt-5 overflow-hidden rounded-[6px] border border-[#FAF8F3] bg-white shadow-inner">
                <iframe
                  title="Bản đồ Tư Gia Nhà Gái"
                  src={weddingConfig.ceremony.mapEmbedUrl}
                  className="h-[195px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
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
            SECTION 8: "SAVE THE DATE" MONTHLY CALENDAR (THÁNG 11.2026)
           ============================================================ */}
        <section className="py-6 text-center">
          <Reveal>
            <p className="font-calligraphy text-[44px] leading-none text-[#523E2B]">
              Save The Date
            </p>

            {/* Full-width Champagne-Sand Header Strip (#E6DCC8) */}
            <div className="mt-3 w-full bg-[#E6DCC8] py-2.5 pl-[10%] text-left">
              <span className="font-serif-editorial text-[28px] font-semibold leading-none tracking-[0.06em] text-[#523E2B]">
                {weddingConfig.calendar.bannerText}
              </span>
            </div>

            {/* 7-Column Calendar Grid (Nov 2026: Day 28 soft ring, Day 29 gold heart) */}
            <div className="mx-auto mt-5 max-w-[360px] px-5">
              <div className="grid grid-cols-7 gap-y-2 text-center font-sans-soft text-[12px] font-bold text-[#523E2B]">
                {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((dayLabel) => (
                  <span key={dayLabel}>{dayLabel}</span>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-7 gap-y-2.5 text-center font-sans-soft text-[13.5px] font-medium text-[#523E2B]">
                {calendarCells.map((day, idx) => {
                  const isHighlight = day === weddingConfig.calendar.highlightDay;
                  const isPartyDay = day === weddingConfig.calendar.partyDay;
                  return (
                    <div
                      key={idx}
                      className="relative flex h-8 items-center justify-center"
                    >
                      {isHighlight && (
                        <WatercolorHeartStamp className="animate-heart-beat absolute h-9 w-9" />
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

              <div className="mt-4 flex items-center justify-center gap-4 font-sans-soft text-[11px] text-[#756350]">
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
            SECTION 11: "HỘP QUÀ MỪNG" (3D ANTIQUE-GOLD HEART GIFT BOX)
           ============================================================ */}
        {weddingConfig.gift.enabled && (
          <section className="px-6 py-10 text-center">
            <Reveal className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => setGiftModalOpen(true)}
                className="group flex flex-col items-center focus:outline-none"
                aria-label="Mở Hộp Quà Mừng"
              >
                <div className="animate-gift-wobble transition-transform group-hover:scale-105">
                  <GiftHeartBox3D className="h-24 w-24" />
                </div>
                <span className="mt-2 font-display-serif text-[22px] font-semibold tracking-[0.06em] text-[#523E2B] transition group-hover:text-[#96743D]">
                  Hộp Quà Mừng
                </span>
                <span className="mt-0.5 font-sans-soft text-[11px] text-[#756350]">
                  Chạm để xem thông tin mừng cưới
                </span>
              </button>
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
            SECTION 13: OVERLAPPING RSVP CARD + ILLUSTRATED FOOTER
           ============================================================ */}
        <section className="relative z-20 -mt-9 px-6 pb-12">
          <Reveal>
            <div className="mx-auto w-full max-w-[360px] rounded-[10px] bg-white px-5 py-6 shadow-[0_14px_38px_rgba(61,46,31,0.12)] ring-1 ring-[#E6DCC8]">
              <h3 className="text-center font-sans-soft text-[16px] font-bold text-[#523E2B]">
                Xác nhận tham dự
              </h3>

              {rsvpSubmitted ? (
                <div className="mt-5 flex flex-col items-center py-4 text-center">
                  <CheckCircle2 className="h-10 w-10 text-[#96743D]" />
                  <p className="mt-2.5 font-sans-soft text-sm font-bold text-[#523E2B]">
                    Cảm ơn {rsvpName} đã xác nhận!
                  </p>
                  <p className="mt-1 font-sans-soft text-xs text-[#756350]">
                    {rsvpStatus === "yes"
                      ? `Hẹn gặp bạn (${rsvpCount} người) trong ngày vui của chúng mình nhé!`
                      : "Rất tiếc vì bạn bận, cảm ơn bạn đã gửi lời nhắn tới hai vợ chồng!"}
                  </p>
                  <button
                    type="button"
                    onClick={() => setRsvpSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-[#96743D] underline"
                  >
                    Chỉnh sửa phản hồi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRsvpSubmit} className="mt-4 space-y-4">
                  {/* Họ và tên */}
                  <div>
                    <label className="block font-sans-soft text-[12px] font-semibold text-[#523E2B]">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      required
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      placeholder="Nhập tên của bạn"
                      className="mt-1.5 w-full rounded-[4px] border border-[#DFD4BF] bg-[#FDFBF7] px-3 py-2 font-sans-soft text-[13px] text-[#3D2E1F] outline-none transition focus:border-[#B5945B] focus:bg-white"
                    />
                  </div>

                  {/* Radio attendance */}
                  <div>
                    <p className="font-sans-soft text-[12px] font-semibold text-[#523E2B]">
                      Bạn sẽ tham dự chứ?
                    </p>
                    <div className="mt-2 space-y-2 font-sans-soft text-[12.5px] text-[#523E2B]">
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="radio"
                          name="rsvp-status"
                          value="yes"
                          checked={rsvpStatus === "yes"}
                          onChange={() => setRsvpStatus("yes")}
                          className="accent-[#96743D]"
                        />
                        <span>Có, tôi sẽ tham dự</span>
                      </label>
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="radio"
                          name="rsvp-status"
                          value="no"
                          checked={rsvpStatus === "no"}
                          onChange={() => setRsvpStatus("no")}
                          className="accent-[#96743D]"
                        />
                        <span>Tôi bận, rất tiếc không thể tham dự</span>
                      </label>
                    </div>
                  </div>

                  {/* Guest count select */}
                  {rsvpStatus === "yes" && (
                    <div>
                      <label className="block font-sans-soft text-[12px] font-semibold text-[#523E2B]">
                        Số lượng người tham dự
                      </label>
                      <select
                        value={rsvpCount}
                        onChange={(e) => setRsvpCount(e.target.value)}
                        className="mt-1.5 w-full rounded-[4px] border border-[#DFD4BF] bg-[#FDFBF7] px-3 py-2 font-sans-soft text-[13px] text-[#3D2E1F] outline-none transition focus:border-[#B5945B] focus:bg-white"
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={String(n)}>
                            {n} người
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Submit CTA (#B5945B Antique Gold) */}
                  <button
                    type="submit"
                    className="w-full rounded-[4px] bg-[#B5945B] py-2.5 font-sans-soft text-[13.5px] font-bold text-white shadow-xs transition hover:bg-[#96743D] active:scale-[0.99]"
                  >
                    Gửi xác nhận
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Warm Champagne-Gold Illustrated Bride & Groom Footer */}
          <div className="mt-8 flex flex-col items-center text-center">
            <FooterCoupleHeart className="h-28 w-32" />
            <p className="mt-1 font-display-serif text-[12px] font-semibold tracking-[0.22em] text-[#7A5D30]">
              {weddingConfig.couple.brideUpper} &amp; {weddingConfig.couple.groomUpper}
            </p>
            <p className="mt-0.5 font-sans-soft text-[11px] tracking-[0.18em] text-[#8E7555]">
              {weddingConfig.hero.dateDot}
            </p>
          </div>
        </section>
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
