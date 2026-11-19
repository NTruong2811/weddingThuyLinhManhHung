export const weddingConfig = {
  /**
   * Thông tin thật trích từ thiệp cứng của Thùy Linh & Mạnh Hưng (Lễ Vu Quy - Nhà Gái).
   * Bộ ảnh cưới chính thức của Thùy Linh & Kiều Mạnh Hưng (đã tối ưu WebP siêu nhẹ).
   */
  couple: {
    brideDisplay: "Thùy Linh",
    brideUpper: "THÙY LINH",
    brideInitial: "L",
    groomDisplay: "Mạnh Hưng",
    groomUpper: "MẠNH HƯNG",
    groomInitial: "H",
  },
  parents: {
    brideSide: {
      label: "NHÀ GÁI",
      father: "ÔNG : NGUYỄN CÔNG CHỈNH",
      mother: "BÀ : NGUYỄN THỊ LIÊN",
    },
    groomSide: {
      label: "NHÀ TRAI",
      father: "ÔNG : KIỀU HỮU MẠNH",
      mother: "BÀ : PHẠM QUỲNH HƯƠNG",
    },
  },
  hero: {
    time: "14:00",
    dayOfWeek: "CHỦ NHẬT",
    dayMonth: "29.11",
    yearTop: "20",
    yearBottom: "26",
    dateDot: "29.11.2026",
    lunarDate: "(Tức ngày 21 tháng 10 năm Bính Ngọ)",
    quoteLine1: "Hôn nhân là chuyện cả đời",
    quoteLine2: "Yêu người vừa ý, cưới người mình thương",
  },
  defaultGuestName: "Quý Khách & Gia Đình",
  /** Sự kiện 1: Bữa Tiệc Thân Mật (Thứ Bảy 28.11.2026 - 17h00) */
  party: {
    title: "BỮA TIỆC THÂN MẬT",
    subtitle: "MỪNG LỄ THÀNH HÔN CÙNG GIA ĐÌNH",
    time: "17h00",
    dayOfWeek: "Thứ Bảy",
    day: "28",
    monthText: "Tháng 11",
    yearText: "Năm 2026",
    lunarDate: "(Tức ngày 20 tháng 10 năm Bính Ngọ)",
    venueName: "TƯ GIA NHÀ GÁI",
    venueAddress: "Số 11 Xóm Đông - Phượng Thiên - Tam Hưng - Hà Nội",
  },
  /** Sự kiện 2: Lễ Vu Quy (Chủ Nhật 29.11.2026 - 14h00) + Thẻ địa điểm & Bản đồ */
  ceremony: {
    title: "LỄ VU QUY",
    time: "14h00",
    dayOfWeek: "Chủ Nhật",
    day: "29",
    monthText: "Tháng 11",
    yearText: "Năm 2026",
    lunarDate: "(Tức ngày 21 tháng 10 năm Bính Ngọ)",
    venueName: "TƯ GIA NHÀ GÁI",
    hallName: "- SỐ 11 XÓM ĐÔNG -",
    address: "Phượng Thiên, Tam Hưng, Hà Nội",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Th%C3%B4n+Ph%C6%B0%E1%BB%A3ng+Thi%C3%AAn,+Tam+H%C6%B0ng,+Thanh+Oai,+H%C3%A0+N%E1%BB%99i&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapDirectUrl:
      "https://www.google.com/maps/search/?api=1&query=Th%C3%B4n+Ph%C6%B0%E1%BB%A3ng+Thi%C3%AAn,+Tam+H%C6%B0ng,+Thanh+Oai,+H%C3%A0+N%E1%BB%99i",
  },
  timeline: [
    { time: "17h00", label: "Tiệc Thân Mật (28/11)", icon: "banquet" as const },
    { time: "14h00", label: "Lễ Vu Quy (29/11)", icon: "arch" as const },
  ],
  calendar: {
    year: 2026,
    month: 11, // Tháng Mười Một 2026
    partyDay: 28,
    highlightDay: 29,
    bannerText: "11.2026",
  },
  /** ISO 8601 timestamp (+07:00) đếm ngược tới Lễ Vu Quy 14:00 ngày 29.11.2026 */
  countdownTargetIso: "2026-11-29T14:00:00+07:00",
  closing: {
    line1:
      "Tiệc cưới của chúng mình sẽ thật sự trọn vẹn khi có bạn cùng sẻ chia niềm vui và chứng kiến khoảnh khắc đặc biệt này,",
    line2:
      "Sự hiện diện của quý vị là niềm vinh hạnh của gia đình chúng tôi!",
    line3: "Hẹn gặp bạn trong ngày trọng đại của chúng mình",
  },
  gift: {
    enabled: false,
    brideBank: {
      role: "Mừng cưới Cô Dâu",
      bankName: "Vietcombank",
      accountName: "NGUYEN THUY LINH",
      accountNumber: "0123456789",
    },
    groomBank: {
      role: "Mừng cưới Chú Rể",
      bankName: "Techcombank",
      accountName: "KIEU MANH HUNG",
      accountNumber: "9876543210",
    },
  },
  audioSrc: "/audio/westlife-my-love.mp3",
  /** Bộ ảnh cưới chính thức của Thùy Linh & Kiều Mạnh Hưng (WebP tối ưu) */
  photos: {
    hero: "/images/photos/HAU07788.webp",
    bride: "/images/photos/bride-portrait.webp",
    groom: "/images/photos/groom-portrait.webp",
    proposal: "/images/photos/HAU07597.webp",
    triptych: [
      "/images/photos/HAU07597.webp",
      "/images/photos/HAU07659.webp",
      "/images/photos/HAU07843.webp",
    ] as const,
    albumGrid: [
      "/images/photos/HAU07659.webp",
      "/images/photos/HAU07461.webp",
      "/images/photos/HAU07843.webp",
      "/images/photos/HAU07875.webp",
      "/images/photos/HAU07897.webp",
      "/images/photos/HAU07925.webp",
    ] as const,
    closing: "/images/photos/HAU08008.webp",
  },
  gallery: [
    { src: "/images/photos/HAU07461.webp", alt: "Thùy Linh & Mạnh Hưng - Trọn vẹn hạnh phúc" },
    { src: "/images/photos/HAU07597.webp", alt: "Thùy Linh & Mạnh Hưng - Khoảnh khắc cầu hôn ngọt ngào" },
    { src: "/images/photos/HAU07659.webp", alt: "Thùy Linh & Mạnh Hưng - Chiếc nhẫn trăm năm" },
    { src: "/images/photos/HAU07788.webp", alt: "Thùy Linh & Mạnh Hưng - Thanh lịch & Trang trọng" },
    { src: "/images/photos/HAU07843.webp", alt: "Thùy Linh & Mạnh Hưng - Nụ cười ngọt ngào" },
    { src: "/images/photos/HAU07875.webp", alt: "Thùy Linh & Mạnh Hưng - Niềm vui rạng rỡ" },
    { src: "/images/photos/HAU07897.webp", alt: "Thùy Linh & Mạnh Hưng - Trái tim yêu thương" },
    { src: "/images/photos/HAU07919.webp", alt: "Thùy Linh & Mạnh Hưng - Ánh mắt yêu thương" },
    { src: "/images/photos/HAU07925.webp", alt: "Thùy Linh & Mạnh Hưng - Bên nhau trọn đời" },
    { src: "/images/photos/HAU08008.webp", alt: "Thùy Linh & Mạnh Hưng - Nàng công chúa của anh" },
  ],
} as const;
