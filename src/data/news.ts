export type NewsItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  href: string;
  author?: string;
  views?: number;
  body: string[];
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSourceUrl: string;
  sourceName?: string;
  sourceUrl?: string;
};

export const news: NewsItem[] = [
  {
    slug: "qoo10-iheal-case",
    title: "Qoo10 대학, iHEAL 일본 시장 성공사례 인터뷰 공개",
    category: "보도자료",
    date: "2025.06.13",
    summary: "Qoo10 Japan을 기반으로 일본 2030 여성 고객에게 브랜드 인지도를 넓힌 iHEAL의 현지화 전략이 소개되었습니다.",
    href: "/support/news/qoo10-iheal-case/",
    author: "비오랩",
    views: 512,
    body: [
      "Qoo10 대학이 한국 펨케어 브랜드 iHEAL의 일본 시장 전개 사례를 인터뷰 형식으로 소개했습니다.",
      "해당 콘텐츠에서는 iHEAL이 일본 2030 여성 고객을 대상으로 감성적인 브랜드 메시지와 현지 채널 운영을 강화해 온 흐름을 다루고 있습니다.",
      "비오랩은 iHEAL 브랜드를 중심으로 여성 건강, 이너케어, 키즈 건강 제품군을 국내외 채널에 맞춰 확장하고 있으며, 일본 온라인 채널에서 확인된 고객 반응을 브랜드 운영과 제품 커뮤니케이션에 지속적으로 반영할 예정입니다."
    ],
    image: "https://cdn-ak.f.st-hatena.com/images/fotolife/Q/Qoo10university/20250613/20250613103622.jpg",
    imageAlt: "Qoo10 대학 iHEAL 성공사례 기사 대표 이미지",
    imageCredit: "이미지 출처: Qoo10 대학 기사",
    imageSourceUrl: "https://article-university.qoo10.jp/entry/case_iheal_kor",
    sourceName: "Qoo10 대학",
    sourceUrl: "https://article-university.qoo10.jp/entry/case_iheal_kor"
  },
  {
    slug: "qoo10-awards-2025-best-shop",
    title: "iHEAL, Qoo10 AWARDS 2025 식품 부문 베스트샵 선정",
    category: "수상/입점",
    date: "2025",
    summary: "Qoo10 AWARDS 2025에서 식품 부문 주요 베스트샵으로 iHEAL이 소개되었습니다.",
    href: "/support/news/qoo10-awards-2025-best-shop/",
    author: "브랜드전략팀",
    views: 438,
    body: [
      "iHEAL이 Qoo10 AWARDS 2025 식품 부문에서 주요 베스트샵으로 소개되었습니다.",
      "이번 성과는 일본 온라인 채널에서 여성 건강과 이너케어 제품군에 대한 고객 반응이 꾸준히 이어진 결과로 정리됩니다.",
      "비오랩은 Qoo10 Japan을 비롯한 해외 온라인 채널의 운영 경험을 바탕으로 제품 정보, 브랜드 콘텐츠, 고객 접점 품질을 지속적으로 개선하겠습니다."
    ],
    image: "https://image.dnews.co.kr/photo/photo/2026/02/11/202602111839046820732-2-647991.jpg",
    imageAlt: "Qoo10 AWARDS 2025 수상 내역 이미지",
    imageCredit: "이미지 출처: 대한경제 / 이베이재팬 제공",
    imageSourceUrl: "https://www.dnews.co.kr/uhtml/view.jsp?idxno=202602111839046820732",
    sourceName: "대한경제",
    sourceUrl: "https://www.dnews.co.kr/uhtml/view.jsp?idxno=202602111839046820732"
  },
  {
    slug: "oliveyoung-venus-probiotics",
    title: "올리브영, iHEAL 비너스 유산균 공식 판매",
    category: "수상/입점",
    date: "2026.06.04",
    summary: "올리브영 공식몰에서 iHEAL 비너스 유산균 제품 정보와 판매 채널을 확인할 수 있습니다.",
    href: "/support/news/oliveyoung-venus-probiotics/",
    author: "영업본부",
    views: 326,
    body: [
      "iHEAL 비너스 유산균이 올리브영 공식몰을 통해 판매되고 있습니다.",
      "비너스 유산균은 여성 건강 관리를 위한 대표 프로바이오틱스 라인으로, 제품 상세 페이지에서 성분, 섭취 안내, 제품 구성을 확인할 수 있습니다.",
      "비오랩은 소비자가 신뢰할 수 있는 유통 채널을 중심으로 제품 접근성을 높이고, 제품 정보가 일관되게 전달될 수 있도록 채널별 소개 자료를 관리하겠습니다."
    ],
    image: "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/10/0000/0021/A00000021710168ko.jpg?l=ko",
    imageAlt: "올리브영 iHEAL 비너스 유산균 상품 이미지",
    imageCredit: "이미지 출처: 올리브영 상품 페이지",
    imageSourceUrl: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000217101",
    sourceName: "올리브영",
    sourceUrl: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000217101"
  },
  {
    slug: "qoo10-iheal-official-shop",
    title: "iHEAL 공식샵, Qoo10 Japan Awards Shop 노출",
    category: "수상/입점",
    date: "2026.03.26",
    summary: "Qoo10 Japan iHEAL 공식샵에서 AWARDS Shop 배지와 주요 제품 라인업을 확인할 수 있습니다.",
    href: "/support/news/qoo10-iheal-official-shop/",
    author: "글로벌사업팀",
    views: 301,
    body: [
      "Qoo10 Japan iHEAL 공식샵에서 AWARDS Shop 배지와 주요 제품 라인업이 노출되고 있습니다.",
      "공식샵은 일본 고객이 iHEAL 제품 정보를 확인하고 구매할 수 있는 주요 접점으로 운영됩니다.",
      "비오랩은 일본 시장에서 브랜드 신뢰도를 높이기 위해 상품 정보, 고객 리뷰, 프로모션 운영을 일관된 기준으로 관리하겠습니다."
    ],
    image: "https://dp.image-qoo10.jp/dp2016/JP/GMKT.IMG/front_image/minishop/2024/10/24/d21f0e8a-0d18-4d1e-b8b7-fc1c98296ad4.s_110-w-fs-st_s.png",
    imageAlt: "Qoo10 Japan iHEAL 공식샵 이미지",
    imageCredit: "이미지 출처: Qoo10 Japan iHEAL 공식샵",
    imageSourceUrl: "https://www.qoo10.jp/gmkt.inc/Mobile/MiniShop/Default.aspx?shopdomain=iHEAL",
    sourceName: "Qoo10 Japan",
    sourceUrl: "https://www.qoo10.jp/gmkt.inc/Mobile/MiniShop/Default.aspx?shopdomain=iHEAL"
  },
  {
    slug: "kids-lac-product-update",
    title: "키즈락 유산균 제품 정보 업데이트 안내",
    category: "제품/브랜드",
    date: "2024.08.01",
    summary: "키즈락 유산균의 원료, 섭취 안내, 제품 소개 자료를 최신 기준에 맞춰 정리했습니다.",
    href: "/support/news/kids-lac-product-update/",
    author: "제품기획팀",
    views: 187,
    body: [
      "키즈락 유산균 제품 정보가 최신 제품 소개 기준에 맞춰 정리되었습니다.",
      "제품 소개에는 키즈 유산균 원료, 섭취 편의성, 성장기 아이를 고려한 제품 특징을 중심으로 반영했습니다.",
      "자세한 제품 구성은 제품소개 메뉴의 키즈락 유산균 상세 페이지에서 함께 확인할 수 있습니다."
    ],
    image: "/images/studio/studio-kids-lac.jpg",
    imageAlt: "키즈락 유산균 제품 이미지",
    imageCredit: "이미지 출처: 비오랩 제품 자료",
    imageSourceUrl: "/products/kids-lac-probiotics/"
  },
  {
    slug: "global-partnership-contact",
    title: "해외 유통 및 브랜드 제휴 상담 창구 안내",
    category: "공지사항",
    date: "2024.05.15",
    summary: "일본, 미국, 동남아 유통 및 브랜드 협업 문의는 고객지원의 대표 이메일로 접수해 주세요.",
    href: "/support/news/global-partnership-contact/",
    author: "글로벌사업팀",
    views: 203,
    body: [
      "비오랩은 iHEAL 브랜드의 해외 유통 및 브랜드 제휴 상담을 접수하고 있습니다.",
      "일본, 미국, 동남아 유통 채널 입점, 제품 자료 요청, 브랜드 협업 문의는 고객지원의 대표 이메일로 전달해 주세요.",
      "문의 접수 시 회사명, 담당자명, 연락처, 희망 유통 국가와 문의 목적을 함께 보내주시면 담당 부서가 순차적으로 확인합니다."
    ],
    image: "/images/sub-hero.jpg",
    imageAlt: "비오랩 글로벌 제휴 안내 이미지",
    imageCredit: "이미지 출처: 비오랩 대표 이미지",
    imageSourceUrl: "/support/contact/"
  }
];

export const supportNewsCategories = [
  "전체",
  "공지사항",
  "보도자료",
  "수상/입점",
  "제품/브랜드"
];
