export type NewsItem = {
  title: string;
  category: string;
  date: string;
  summary: string;
  href: string;
};

export const news: NewsItem[] = [
  {
    title: "비오랩 홀딩스, iHEAL 브랜드 일본 오프라인 채널 전개 준비",
    category: "언론보도",
    date: "2026.01",
    summary: "웰시아, 이토요카도 등 일본 주요 유통 채널을 중심으로 브랜드 접점을 확대할 예정입니다.",
    href: "/support/#news"
  },
  {
    title: "iHEAL, Qoo10 식품 부문 베스트 수상 확정",
    category: "수상",
    date: "2025.12",
    summary: "온라인 채널 성장과 고객 반응을 바탕으로 2년 연속 Qoo10 성과를 이어갑니다.",
    href: "/support/#news"
  },
  {
    title: "올리브영 건강기능식품 카테고리 입점 확대",
    category: "공지",
    date: "2025.01",
    summary: "온라인 및 전국 주요 오프라인 매장에서 iHEAL 제품을 만날 수 있도록 유통망을 넓혔습니다.",
    href: "/support/#news"
  }
];

