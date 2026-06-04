export type NewsItem = {
  title: string;
  category: string;
  date: string;
  summary: string;
  href: string;
  author?: string;
  views?: number;
};

export const news: NewsItem[] = [
  {
    title: "비오랩 홀딩스, iHEAL 브랜드 일본 오프라인 채널 전개 준비",
    category: "언론보도",
    date: "2026.01.15",
    summary: "웰시아, 이토요카도 등 일본 주요 유통 채널을 중심으로 브랜드 접점을 확대할 예정입니다.",
    href: "/support/#news",
    author: "비오랩 홀딩스",
    views: 128
  },
  {
    title: "iHEAL, Qoo10 식품 부문 베스트 수상 확정",
    category: "수상/입점",
    date: "2025.12.20",
    summary: "온라인 채널 성장과 고객 반응을 바탕으로 2년 연속 Qoo10 성과를 이어갑니다.",
    href: "/support/#news",
    author: "브랜드전략팀",
    views: 246
  },
  {
    title: "올리브영 건강기능식품 카테고리 입점 확대",
    category: "공지사항",
    date: "2025.01.31",
    summary: "온라인 및 전국 주요 오프라인 매장에서 iHEAL 제품을 만날 수 있도록 유통망을 넓혔습니다.",
    href: "/support/#news",
    author: "영업본부",
    views: 312
  },
  {
    title: "아이힐 비너스 유산균 누적 출고 100만 돌파",
    category: "언론보도",
    date: "2024.12.05",
    summary: "대표 여성 유산균 라인의 지속적인 고객 반응과 재구매 흐름을 바탕으로 누적 출고 성과를 달성했습니다.",
    href: "/support/#news",
    author: "비오랩 홀딩스",
    views: 419
  },
  {
    title: "키즈락 유산균 제품 정보 업데이트 안내",
    category: "제품/브랜드",
    date: "2024.08.01",
    summary: "키즈락 유산균의 원료, 섭취 안내, 제품 소개 자료를 최신 기준에 맞춰 정리했습니다.",
    href: "/products/kids-lac-probiotics/",
    author: "제품기획팀",
    views: 187
  },
  {
    title: "해외 유통 및 브랜드 제휴 상담 창구 안내",
    category: "공지사항",
    date: "2024.05.15",
    summary: "일본, 미국, 동남아 유통 및 브랜드 협업 문의는 고객지원의 대표 이메일로 접수해 주세요.",
    href: "/support/#contact",
    author: "글로벌사업팀",
    views: 203
  }
];

export const supportNewsCategories = [
  "전체",
  "공지사항",
  "언론보도",
  "수상/입점",
  "제품/브랜드"
];
