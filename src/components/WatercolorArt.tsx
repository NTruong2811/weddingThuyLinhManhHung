"use client";

import React from "react";

/**
 * Gold-foil H & L botanical circular wreath faithfully inspired by the front cover
 * of Thùy Linh & Mạnh Hưng's printed wedding invitation.
 */
export function HLMonogramWreath({
  leftLetter = "H",
  rightLetter = "L",
  className = "w-44 h-44",
}: {
  leftLetter?: string;
  rightLetter?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={`${leftLetter} & ${rightLetter}`}
    >
      <defs>
        <linearGradient id="gold-foil-grad" x1="15%" y1="10%" x2="88%" y2="90%">
          <stop offset="0%" stopColor="#D7BC82" />
          <stop offset="45%" stopColor="#B5945B" />
          <stop offset="75%" stopColor="#D9C18E" />
          <stop offset="100%" stopColor="#8E6E3A" />
        </linearGradient>
      </defs>

      {/* Delicate double broken circular foil wreath */}
      <path
        d="M 52 54 A 78 78 0 1 1 112 188"
        stroke="url(#gold-foil-grad)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M 74 36 A 78 78 0 0 1 182 132"
        stroke="url(#gold-foil-grad)"
        strokeWidth="0.9"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />

      {/* Floral & botanical leaf cluster along bottom-left arc */}
      <g stroke="url(#gold-foil-grad)" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        {/* Main flower bloom */}
        <path d="M55 138C48 130 50 120 57 121C62 122 63 130 58 137Z" fill="#EFE6D2" />
        <path d="M58 137C67 132 75 136 72 144C69 149 62 146 58 139Z" fill="#EFE6D2" />
        <path d="M58 139C62 149 55 157 48 152C44 148 48 141 55 139Z" fill="#EFE6D2" />
        <path d="M55 139C45 144 37 137 42 130C45 126 51 131 55 138Z" fill="#EFE6D2" />
        <circle cx="57" cy="138" r="3" fill="url(#gold-foil-grad)" />

        {/* Upper left leaves */}
        <path d="M46 122C34 112 31 100 35 90C43 97 47 108 46 122Z" fill="#F6F0E4" />
        <path d="M42 110C35 104 30 97 29 89" />
        <path d="M51 112C48 100 50 90 56 83C60 92 58 103 51 112Z" fill="#F6F0E4" />

        {/* Lower trailing leaves */}
        <path d="M68 154C78 164 90 169 102 167C94 159 82 153 68 154Z" fill="#F6F0E4" />
        <path d="M76 164C84 172 92 177 101 178" />
        <path d="M58 156C63 167 71 174 81 176C77 167 69 159 58 156Z" fill="#F6F0E4" />
      </g>

      {/* Large serif H */}
      <text
        x="77"
        y="108"
        textAnchor="middle"
        fill="url(#gold-foil-grad)"
        fontSize="58"
        fontWeight="500"
        fontFamily="var(--font-cormorant), Georgia, serif"
      >
        {leftLetter}
      </text>

      {/* Flowing calligraphic & */}
      <text
        x="110"
        y="124"
        textAnchor="middle"
        fill="url(#gold-foil-grad)"
        fontSize="50"
        fontStyle="italic"
        fontFamily="var(--font-great-vibes), Georgia, serif"
      >
        &amp;
      </text>

      {/* Large serif L */}
      <text
        x="144"
        y="156"
        textAnchor="middle"
        fill="url(#gold-foil-grad)"
        fontSize="58"
        fontWeight="500"
        fontFamily="var(--font-cormorant), Georgia, serif"
      >
        {rightLetter}
      </text>
    </svg>
  );
}

/**
 * Etched bronze botanical leaf cluster + soft champagne wash echoing the 4 corners
 * of the printed card (replaces pink watercolor blossoms in Template #114).
 */
export function WatercolorBlossomCorner({
  className = "w-44 h-44",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={flip ? { transform: "scale(-1, -1)" } : undefined}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="champagne-wash-1" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#E6D9C0" stopOpacity="0.65" />
          <stop offset="65%" stopColor="#EFE6D5" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle warm champagne watercolor glow */}
      <circle cx="155" cy="68" r="78" fill="url(#champagne-wash-1)" />
      <circle cx="176" cy="126" r="52" fill="url(#champagne-wash-1)" />

      {/* Etched bronze botanical leaf stems matching the printed invitation's corner leaves */}
      <g stroke="#7A6247" strokeOpacity="0.65" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        {/* Main sweeping branch */}
        <path d="M214 14C178 46 146 78 106 112" />
        <path d="M216 44C186 78 164 110 144 146" />
        <path d="M196 12C154 24 120 38 86 58" />

        {/* Etched veined leaves along top branch */}
        <path d="M158 58C144 40 132 32 118 32C122 46 135 56 158 58Z" fill="#FAF8F3" fillOpacity="0.82" />
        <path d="M156 57L125 36" strokeWidth="0.85" />

        <path d="M134 82C118 68 104 63 90 66C97 78 112 86 134 82Z" fill="#FAF8F3" fillOpacity="0.82" />
        <path d="M132 81L98 69" strokeWidth="0.85" />

        <path d="M148 74C162 88 168 102 164 116C151 108 144 93 148 74Z" fill="#FAF8F3" fillOpacity="0.82" />
        <path d="M149 76L161 108" strokeWidth="0.85" />

        {/* Leaves along lower branch */}
        <path d="M174 96C190 96 202 104 208 116C194 118 182 111 174 96Z" fill="#FAF8F3" fillOpacity="0.82" />
        <path d="M176 98L202 113" strokeWidth="0.85" />

        <path d="M158 122C142 126 130 136 124 149C138 148 150 139 158 122Z" fill="#FAF8F3" fillOpacity="0.82" />
        <path d="M156 124L130 144" strokeWidth="0.85" />

        {/* Delicate gold accent dots */}
        <circle cx="114" cy="48" r="2" fill="#B5945B" stroke="none" />
        <circle cx="136" cy="110" r="2.2" fill="#B5945B" stroke="none" />
        <circle cx="184" cy="74" r="1.8" fill="#B5945B" stroke="none" />
      </g>
    </svg>
  );
}

/**
 * Minimalist bronze-ink botanical leaf stem along Hero bottom-left margin
 */
export function RoseStemSketch({ className = "w-20 h-40" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M26 184C32 146 42 100 54 48"
        stroke="#6B553E"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Top slender botanical leaf */}
      <path
        d="M54 48C46 38 47 24 56 16C62 26 62 39 54 48Z"
        stroke="#6B553E"
        strokeWidth="1.1"
        fill="#F4EDE0"
      />
      <path d="M54 47L56 21" stroke="#B5945B" strokeWidth="0.85" />
      {/* Left etched leaf */}
      <path
        d="M42 106C27 98 18 85 16 71C29 77 38 90 42 106Z"
        stroke="#6B553E"
        strokeWidth="1.05"
        fill="#FAF8F3"
      />
      <path d="M41 104L21 77" stroke="#B5945B" strokeWidth="0.8" />
      {/* Right etched leaf */}
      <path
        d="M36 136C51 128 62 117 68 104C54 109 43 121 36 136Z"
        stroke="#6B553E"
        strokeWidth="1.05"
        fill="#FAF8F3"
      />
      <path d="M37 134L62 110" stroke="#B5945B" strokeWidth="0.8" />
      {/* Small lower left leaf */}
      <path
        d="M31 158C20 151 14 142 12 132C22 137 28 146 31 158Z"
        stroke="#6B553E"
        strokeWidth="1"
        fill="#FAF8F3"
      />
    </svg>
  );
}

/**
 * Warm champagne & walnut-bronze line-art couple divider between Party and Ceremony
 */
export function CoupleDividerIllustration({
  className = "w-24 h-24",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="42" fill="#F4EFE4" />
      <circle cx="60" cy="60" r="34" fill="#E8DFCE" fillOpacity="0.6" />

      {/* Groom */}
      <circle cx="46" cy="36" r="8.5" fill="#FAF8F3" stroke="#523E2B" strokeWidth="1.35" />
      <path d="M39 33C42 26 52 26 54 32" stroke="#523E2B" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M35 88V56C35 49 40 46 46 46C52 46 56 49 56 56V88"
        fill="#523E2B"
        stroke="#3D2E1F"
        strokeWidth="1.2"
      />
      <path d="M46 46L43 56H49L46 46Z" fill="#FAF8F3" />

      {/* Bride */}
      <circle cx="74" cy="40" r="8" fill="#FAF8F3" stroke="#523E2B" strokeWidth="1.35" />
      <path
        d="M74 31C84 32 90 42 89 58"
        stroke="#B5945B"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      <path
        d="M66 50C69 47 79 47 82 50L92 88H56L66 50Z"
        fill="#FFFFFF"
        stroke="#523E2B"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* Gold bouquet & heart */}
      <circle cx="60" cy="64" r="4.5" fill="#B5945B" fillOpacity="0.75" />
      <path
        d="M60 28C60 28 54 24 54 20.5C54 18.8 55.4 17.5 57 17.5C58.2 17.5 59.3 18.2 60 19.3C60.7 18.2 61.8 17.5 63 17.5C64.6 17.5 66 18.8 66 20.5C66 24 60 28 60 28Z"
        fill="#B5945B"
      />
    </svg>
  );
}

/**
 * Minimalist floral wedding arch icon in warm walnut & antique gold
 */
export function WeddingArchIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 48V24C12 15.2 19.2 8 28 8C36.8 8 44 15.2 44 24V48"
        stroke="#523E2B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 48V25C17 18.9 21.9 14 28 14C34.1 14 39 18.9 39 25V48"
        stroke="#B5945B"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path d="M8 48H48" stroke="#523E2B" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="28" cy="10" r="3.5" fill="#E6DCC8" stroke="#523E2B" strokeWidth="1" />
      <circle cx="21" cy="12" r="2.6" fill="#F0E7D5" stroke="#523E2B" strokeWidth="0.9" />
      <circle cx="35" cy="12" r="2.6" fill="#F0E7D5" stroke="#523E2B" strokeWidth="0.9" />
      <path
        d="M28 33C28 33 23.5 30 23.5 27C23.5 25.6 24.6 24.5 26 24.5C26.9 24.5 27.6 25 28 25.8C28.4 25 29.1 24.5 30 24.5C31.4 24.5 32.5 25.6 32.5 27C32.5 30 28 33 28 33Z"
        fill="#B5945B"
      />
    </svg>
  );
}

/**
 * Minimalist banquet plate, cutlery & gold heart icon for Timeline
 */
export function BanquetTableIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="28" cy="30" r="13" stroke="#523E2B" strokeWidth="1.45" />
      <circle cx="28" cy="30" r="8.8" stroke="#B5945B" strokeWidth="1" />
      <path
        d="M28 34C28 34 24 31.3 24 28.8C24 27.5 25 26.5 26.2 26.5C27 26.5 27.7 27 28 27.6C28.3 27 29 26.5 29.8 26.5C31 26.5 32 27.5 32 28.8C32 31.3 28 34 28 34Z"
        fill="#B5945B"
      />
      <path
        d="M9 17V24C9 26 10.2 27 11.5 27C12.8 27 14 26 14 24V17M11.5 17V42"
        stroke="#523E2B"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M44.5 42V17C46.8 19 47.5 24 47.5 28.5H44.5"
        stroke="#523E2B"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Hand-drawn antique gold heart marking the wedding date on the calendar
 */
export function WatercolorHeartStamp({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 42 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M21 35C21 35 5.5 25.5 5.5 14C5.5 8.8 9.6 5 14.5 5C17.6 5 19.9 6.7 21 9.1C22.1 6.7 24.4 5 27.5 5C32.4 5 36.5 8.8 36.5 14C36.5 25.5 21 35 21 35Z"
        fill="#B5945B"
        fillOpacity="0.22"
        stroke="#96743D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Tiny champagne-gold double-heart icon beside "Album ảnh cưới"
 */
export function DoubleHeartMini({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15.5 20C15.5 20 8.5 15.6 8.5 10.6C8.5 8.5 10.2 7 12.2 7C13.6 7 14.8 7.8 15.5 9C16.2 7.8 17.4 7 18.8 7C20.8 7 22.5 8.5 22.5 10.6C22.5 15.6 15.5 20 15.5 20Z"
        fill="#D2BC93"
      />
      <path
        d="M9.5 16.5C9.5 16.5 5 13.7 5 10.5C5 9.1 6.1 8 7.4 8C8.3 8 9.1 8.5 9.5 9.3C9.9 8.5 10.7 8 11.6 8C12.9 8 14 9.1 14 10.5C14 13.7 9.5 16.5 9.5 16.5Z"
        fill="#96743D"
        fillOpacity="0.85"
      />
    </svg>
  );
}

/**
 * Luxury 3D antique-gold & satin-ivory heart-shaped wedding gift box
 */
export function GiftHeartBox3D({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 110 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gift-gold-top" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#DFC691" />
          <stop offset="55%" stopColor="#B5945B" />
          <stop offset="100%" stopColor="#8E6E3A" />
        </linearGradient>
        <linearGradient id="gift-gold-side" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8E6E3A" />
          <stop offset="100%" stopColor="#664D26" />
        </linearGradient>
      </defs>
      <ellipse cx="55" cy="94" rx="32" ry="6" fill="#DDD2BD" fillOpacity="0.8" />
      <path
        d="M55 88C55 88 18 65 18 40C18 28 27 20 38 20C45.5 20 51.5 24 55 30C58.5 24 64.5 20 72 20C83 20 92 28 92 40C92 65 55 88 55 88Z"
        fill="url(#gift-gold-side)"
      />
      <path
        d="M55 79C55 79 18 57 18 33C18 21.5 27 13.5 38 13.5C45.5 13.5 51.5 17.5 55 23.5C58.5 17.5 64.5 13.5 72 13.5C83 13.5 92 21.5 92 33C92 57 55 79 55 79Z"
        fill="url(#gift-gold-top)"
      />
      <path
        d="M28 29C29 22 35 19 41 19"
        stroke="#FFFFFF"
        strokeOpacity="0.55"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Satin ivory ribbon */}
      <path d="M55 23V87" stroke="#FAF6EE" strokeWidth="6" />
      <path d="M21 44H89" stroke="#FAF6EE" strokeWidth="6" />
      <path
        d="M55 42C44 30 33 32 34 40C35 47 46 46 55 44Z"
        fill="#FAF6EE"
        stroke="#D8C7A8"
        strokeWidth="1.2"
      />
      <path
        d="M55 42C66 30 77 32 76 40C75 47 64 46 55 44Z"
        fill="#FAF6EE"
        stroke="#D8C7A8"
        strokeWidth="1.2"
      />
      <circle cx="55" cy="43" r="4.5" fill="#F4ECDC" stroke="#C9B288" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Warm champagne-gold painted heart with walnut-ink couple for the RSVP Footer
 */
export function FooterCoupleHeart({ className = "w-32 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M75 112C75 112 24 81 24 46C24 29 37 17 53 17C63 17 71 22 75 30C79 22 87 17 97 17C113 17 126 29 126 46C126 81 75 112 75 112Z"
        fill="#D5BE94"
        fillOpacity="0.32"
      />
      <path
        d="M75 104C75 104 34 78 34 49C34 36 44 26 57 26C65 26 71.5 30 75 36.5C78.5 30 85 26 93 26C106 26 116 36 116 49C116 78 75 104 75 104Z"
        fill="#B5945B"
        fillOpacity="0.18"
      />

      <text
        x="75"
        y="13"
        textAnchor="middle"
        fill="#7A5D30"
        fontSize="12"
        fontStyle="italic"
        fontFamily="var(--font-dancing), cursive"
      >
        wedding
      </text>

      <circle cx="62" cy="52" r="7.5" fill="#FAF8F3" stroke="#523E2B" strokeWidth="1.4" />
      <path d="M54 96V69C54 63 58 60 62 60C66 60 70 63 70 69V96" fill="#523E2B" />
      <circle cx="88" cy="55" r="7" fill="#FAF8F3" stroke="#523E2B" strokeWidth="1.4" />
      <path
        d="M81 64C84 61 92 61 95 64L103 96H73L81 64Z"
        fill="#FFFFFF"
        stroke="#523E2B"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M40 97H110" stroke="#7A6247" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Ivory & etched bronze-gold botanical leaves decorating the Sliding Opening Doors
 */
export function PinkLilyDoorArt({
  side,
  className = "w-full h-full",
}: {
  side: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={side === "right" ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`gold-door-g1-${side}`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E4D6BC" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#EFE6D6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft warm champagne glow */}
      <circle cx="46" cy="96" r="112" fill={`url(#gold-door-g1-${side})`} />
      <circle cx="54" cy="495" r="118" fill={`url(#gold-door-g1-${side})`} />

      {/* Etched botanical branches echoing the printed invitation corners */}
      <g stroke="#8E7555" strokeOpacity="0.48" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Top corner leaves */}
        <path d="M0 24C44 58 82 96 118 142" />
        <path d="M36 54C56 40 74 36 90 42C80 56 62 62 36 54Z" fill="#FAF8F3" fillOpacity="0.65" />
        <path d="M62 84C42 96 28 112 24 128C42 122 56 108 62 84Z" fill="#FAF8F3" fillOpacity="0.65" />
        <path d="M84 108C104 98 120 98 134 106C120 118 102 120 84 108Z" fill="#FAF8F3" fillOpacity="0.65" />

        {/* Bottom corner leaves */}
        <path d="M0 578C46 538 86 496 122 452" />
        <path d="M38 544C58 556 76 558 92 550C80 538 62 534 38 544Z" fill="#FAF8F3" fillOpacity="0.65" />
        <path d="M66 512C46 500 32 484 28 468C46 474 60 488 66 512Z" fill="#FAF8F3" fillOpacity="0.65" />
        <path d="M88 486C108 494 124 494 138 484C124 472 106 472 88 486Z" fill="#FAF8F3" fillOpacity="0.65" />
      </g>
    </svg>
  );
}
