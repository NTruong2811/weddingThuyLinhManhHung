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
    time: "14:30",
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
  /** Sự kiện 1: Bữa Tiệc Thân Mật (Thứ Bảy 28.11.2026 - 17h30) */
  party: {
    title: "BỮA TIỆC THÂN MẬT",
    subtitle: "MỪNG LỄ THÀNH HÔN CÙNG GIA ĐÌNH",
    time: "17h30",
    dayOfWeek: "Thứ Bảy",
    day: "28",
    monthText: "Tháng 11",
    yearText: "Năm 2026",
    lunarDate: "(Tức ngày 20 tháng 10 năm Bính Ngọ)",
    venueName: "NHÀ VĂN HOÁ THÔN TÊ QUẢ",
    venueAddress: "",
  },
  /** Sự kiện 2: Lễ Vu Quy (Chủ Nhật 29.11.2026 - 14:30) + Thẻ địa điểm & Bản đồ */
  ceremony: {
    title: "LỄ VU QUY",
    time: "14:30",
    dayOfWeek: "Chủ Nhật",
    day: "29",
    monthText: "Tháng 11",
    yearText: "Năm 2026",
    lunarDate: "(Tức ngày 21 tháng 10 năm Bính Ngọ)",
    venueName: "TƯ GIA NHÀ GÁI",
    hallName: "- SỐ 11 XÓM ĐÔNG -",
    address: "Phượng Thiên, Tam Hưng, Hà Nội",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=20.8959618,105.8000031&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapDirectUrl:
      "https://www.google.com/maps/place/20%C2%B053'45.5%22N+105%C2%B048'00.0%22E/@20.8960125,105.7998858,615m/data=!3m1!1e3!4m4!3m3!8m2!3d20.8959618!4d105.8000031?entry=ttu",
  },
  timeline: [
    { time: "17h30", label: "Tiệc Thân Mật (28/11)", icon: "banquet" as const },
    { time: "14:30", label: "Lễ Vu Quy (29/11)", icon: "arch" as const },
  ],
  calendar: {
    year: 2026,
    month: 11, // Tháng Mười Một 2026
    partyDay: 28,
    highlightDay: 29,
    bannerText: "11.2026",
  },
  /** ISO 8601 timestamp (+07:00) đếm ngược tới Lễ Vu Quy 14:30 ngày 29.11.2026 */
  countdownTargetIso: "2026-11-29T14:30:00+07:00",
  closing: {
    line1:
      "Tiệc cưới của chúng mình sẽ thật sự trọn vẹn khi có bạn cùng sẻ chia niềm vui và chứng kiến khoảnh khắc đặc biệt này,",
    line2:
      "Sự hiện diện của quý vị là niềm vinh hạnh của gia đình chúng tôi!",
    line3: "Hẹn gặp bạn trong ngày trọng đại của chúng mình",
  },
  gift: {
    enabled: true,
    title: "Hộp Quà Mừng",
    subtitle: "MỪNG CƯỚI ĐÔI UYÊN ƯƠNG",
    message:
      "Cảm ơn tình cảm và lời chúc phúc của Quý vị dành cho hai vợ chồng!",
    groomBank: {
      role: "Mừng Cưới Chú Rể",
      bankName: "MBBank (Ngân Hàng Quân Đội)",
      accountName: "KIỀU MẠNH HƯNG",
      accountNumber: "0984111197",
      qrImage: "/images/photos/qr-groom.webp",
    },
    brideBank: {
      role: "Mừng Cưới Cô Dâu",
      bankName: "Vietcombank",
      accountName: "NGUYỄN THÙY LINH",
      accountNumber: "0123456789",
      qrImage: "",
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
