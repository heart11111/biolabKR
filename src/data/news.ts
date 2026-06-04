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
    title: "Qoo10 대학, iHEAL 일본 시장 성공사례 인터뷰 공개",
    category: "보도자료",
    date: "2025.06.13",
    summary: "Qoo10 Japan을 기반으로 일본 2030 여성 고객에게 브랜드 인지도를 넓힌 iHEAL의 현지화 전략이 소개되었습니다.",
    href: "https://article-university.qoo10.jp/entry/case_iheal_kor",
    author: "Qoo10 대학",
    views: 512
  },
  {
    title: "iHEAL, Qoo10 AWARDS 2025 식품 부문 베스트샵 선정",
    category: "수상/입점",
    date: "2025",
    summary: "Qoo10 AWARDS 2025에서 식품 부문 주요 베스트샵으로 iHEAL이 소개되었습니다.",
    href: "https://www.qoo10.jp/gmkt.inc/Special/Special.aspx?sid=209752",
    author: "Qoo10 AWARDS",
    views: 438
  },
  {
    title: "올리브영, iHEAL 비너스 유산균 공식 판매",
    category: "수상/입점",
    date: "2026.06.04",
    summary: "올리브영 공식몰에서 iHEAL 비너스 유산균 제품 정보와 판매 채널을 확인할 수 있습니다.",
    href: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000217101",
    author: "올리브영",
    views: 326
  },
  {
    title: "iHEAL 공식샵, Qoo10 Japan Awards Shop 노출",
    category: "수상/입점",
    date: "2026.03.26",
    summary: "Qoo10 Japan iHEAL 공식샵에서 AWARDS Shop 배지와 주요 제품 라인업을 확인할 수 있습니다.",
    href: "https://www.qoo10.jp/gmkt.inc/Mobile/MiniShop/Default.aspx?shopdomain=iHEAL",
    author: "Qoo10 Japan",
    views: 301
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
    href: "/support/contact/",
    author: "글로벌사업팀",
    views: 203
  }
];

export const supportNewsCategories = [
  "전체",
  "공지사항",
  "보도자료",
  "수상/입점",
  "제품/브랜드"
];
