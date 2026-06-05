export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "women-probiotics-routine",
    title: "여성 유산균을 고를 때 확인하면 좋은 기준",
    category: "여성 건강",
    date: "2026.02.10",
    excerpt: "균주의 출처, 보장균수, 부원료, 섭취 편의성을 함께 살펴보는 것이 좋습니다.",
    image: "/images/studio/studio-venus-probiotics.jpg",
    content: [
      "여성 유산균은 균주의 특성과 제품 설계 방향을 함께 보는 것이 중요합니다.",
      "비오랩은 특허 균주, 부원료, 섭취 편의성을 기준으로 iHEAL 제품 정보를 정리합니다.",
      "개인의 건강 상태와 섭취 목적에 따라 전문가와 상담 후 선택하는 것을 권장합니다."
    ]
  },
  {
    slug: "inner-care-ph-balance",
    title: "이너케어 제품에서 pH 밸런스가 중요한 이유",
    category: "이너케어",
    date: "2026.02.03",
    excerpt: "민감한 부위일수록 세정력뿐 아니라 산도, 보습감, 자극감을 함께 고려해야 합니다.",
    image: "/images/ingredient-hyaluronic.jpg",
    content: [
      "이너케어 제품은 매일 사용하는 생활 제품이므로 순한 사용감과 관리 루틴이 중요합니다.",
      "약산성 포뮬러와 보습 성분은 피부 컨디션을 고려한 제품 설계의 기본 요소입니다.",
      "제품 사용 중 불편함이 있으면 사용을 중단하고 전문가와 상담해야 합니다."
    ]
  },
  {
    slug: "kids-probiotics-guide",
    title: "키즈 유산균 섭취 전 확인할 점",
    category: "키즈 건강",
    date: "2026.01.26",
    excerpt: "아이 제품은 연령, 원료, 섭취량, 보호자 지도 여부를 꼼꼼히 확인해야 합니다.",
    image: "/images/studio/studio-kids-lac.jpg",
    content: [
      "키즈 제품은 보호자가 표시사항을 확인하고 아이의 섭취 습관에 맞춰 관리해야 합니다.",
      "아연, 비타민D, 칼슘 등 성장기 영양 설계는 제품 선택 시 참고할 수 있는 요소입니다.",
      "특정 원료에 민감한 아이는 섭취 전 전문가 상담을 권장합니다."
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
