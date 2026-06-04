export type Product = {
  slug: string;
  name: string;
  englishName: string;
  category: string;
  tagline: string;
  summary: string;
  image: string;
  ingredients: string[];
  features: string[];
  intake: string;
  certifications: string[];
  detail: string;
};

export const products: Product[] = [
  {
    slug: "venus-probiotics",
    name: "아이힐 비너스 유산균",
    englishName: "iHEAL Venus Probiotics",
    category: "여성 유산균",
    tagline: "건강한 한국 여성의 질에서 유래한 특허 유산균 3종 함유",
    summary:
      "특허균주 MG242, MG901, MG989와 철분, 크랜베리를 배합한 iHEAL 대표 여성 유산균입니다.",
    image: "/images/product-venus-group.jpg",
    ingredients: ["락토바실러스 살리바리우스 MG242", "락토바실러스 퍼멘툼 MG901", "락토바실러스 플란타룸 MG989", "철분", "크랜베리"],
    features: ["20억 보장 유산균", "여성 맞춤형 포뮬러", "누적 후기와 재구매 기반의 대표 제품", "간편한 데일리 섭취"],
    intake: "1일 1회, 제품 표시사항에 따라 물과 함께 섭취",
    certifications: ["특허 균주 3종 적용", "건강기능식품 기준에 따른 품질 관리"],
    detail:
      "아이힐 비너스 유산균은 여성 건강을 고려해 설계한 대표 제품입니다. 건강기능식품 표현 기준에 맞춰 제품 정보와 기능성 자료를 관리합니다."
  },
  {
    slug: "venus-stick-probiotics",
    name: "아이힐 비너스 유산균 스틱",
    englishName: "iHEAL Venus Stick Probiotics",
    category: "스틱 유산균",
    tagline: "여성 유산균과 뷰티 성분을 함께 담은 스틱형 포뮬러",
    summary:
      "특허 유산균 3종에 히알루론산, 콜라겐, 비타민E, 이노시톨을 더한 여성 이너케어 제품입니다.",
    image: "/images/product-lineup.jpg",
    ingredients: ["특허 유산균 3종", "히알루론산", "콜라겐", "비타민E", "이노시톨"],
    features: ["휴대가 쉬운 스틱 제형", "여성 건강과 피부 컨디션 동시 케어", "부원료 복합 설계", "부드러운 섭취감"],
    intake: "1일 1포, 제품 표시사항에 따라 섭취",
    certifications: ["특허 균주 적용", "원료별 품질 규격 관리"],
    detail:
      "비너스 유산균 스틱은 여성의 일상 루틴에 맞춘 스틱형 제품으로, 유산균과 뷰티 부원료를 함께 제안합니다."
  },
  {
    slug: "kids-lac-probiotics",
    name: "아이힐 키즈락 유산균",
    englishName: "iHEAL Kids Lac Probiotics",
    category: "키즈 유산균",
    tagline: "아이의 건강한 성장을 위한 올인원 키즈 유산균",
    summary:
      "모유 유래 유산균과 영유아 유래 특허 유산균, 아연, 비타민D, 칼슘, 식이섬유를 배합했습니다.",
    image: "/images/product-kids.jpg",
    ingredients: ["L. reuteri MG505", "영유아 유래 유산균 3종", "아연", "비타민D", "칼슘", "식이섬유"],
    features: ["10억 보장 유산균", "호박 동결건조 특허 코팅", "아이 섭취 편의 고려", "성장기 영양 설계"],
    intake: "연령과 제품 표시사항에 따라 보호자 지도하에 섭취",
    certifications: ["특허 코팅 기술 적용", "아연 및 비타민D 기능성 기준 고려"],
    detail:
      "키즈락 유산균은 열, 위산, 담즙에 약한 유산균의 특성을 고려해 코팅 기술과 성장기 영양 설계를 함께 적용한 제품입니다."
  },
  {
    slug: "line-n-probiotics",
    name: "아이힐 라인엔 유산균",
    englishName: "iHEAL Line N Probiotics",
    category: "다이어트 유산균",
    tagline: "특허 유산균과 가르시니아 추출물을 담은 체지방 관리 라인",
    summary:
      "항비만 활성을 갖는 인체 유래 특허균주 2종과 가르시니아 캄보지아 추출물을 배합했습니다.",
    image: "/images/product-lineup.jpg",
    ingredients: ["MG4231", "MG4244", "가르시니아 캄보지아 추출물", "HCA"],
    features: ["20억 보장 유산균", "체지방 관리 컨셉", "간편한 다이어트 루틴", "특허 균주 연구 기반"],
    intake: "제품 표시사항에 따라 1일 권장량을 섭취",
    certifications: ["특허 균주 적용", "건강기능식품 원료 기준 관리"],
    detail:
      "라인엔 유산균은 바쁜 일상에서도 건강한 체지방 관리 루틴을 이어갈 수 있도록 설계한 제품입니다."
  },
  {
    slug: "inner-clean-v",
    name: "아이힐 이너클린 V",
    englishName: "iHEAL Inner Clean V",
    category: "이너케어 클렌저",
    tagline: "여성 Y존을 위한 약산성 저자극 클렌저",
    summary:
      "알란토인, 13종 발효 약재 추출물, 락토바실러스 발효여과물, 순한 세정 성분을 담았습니다.",
    image: "/images/product-inner-clean.jpg",
    ingredients: ["알란토인", "13종 발효 약재 추출물", "락토바실러스 발효여과물", "데실글루코사이드", "시트릭애씨드"],
    features: ["약산성 포뮬러", "저자극 세정", "피부 진정 및 보습 컨셉", "데일리 이너케어"],
    intake: "외용 제품으로, 사용 방법은 제품 표시사항을 따름",
    certifications: ["피부 저자극 컨셉", "원료별 품질 관리"],
    detail:
      "이너클린 V는 민감한 부위의 pH 밸런스와 보습감을 고려한 여성 이너케어 클렌저입니다."
  },
  {
    slug: "venus-inner-perfume",
    name: "아이힐 비너스 이너 퍼퓸",
    englishName: "iHEAL Venus Inner Perfume",
    category: "이너 뷰티",
    tagline: "5중 히알루론산과 식물 유래 성분을 담은 이너 퍼퓸",
    summary:
      "5중 히알루론산, 특허균주 3종 배양액, 글루타치온, 판테놀, 식물 유래 성분을 배합했습니다.",
    image: "/images/product-inner-perfume.jpg",
    ingredients: ["5중 히알루론산", "특허균주 3종 배양액", "글루타치온", "판테놀", "인도멀구슬나무잎 추출물", "드럼스틱씨오일"],
    features: ["보습 중심 설계", "피부 장벽 컨셉", "식물 유래 성분", "고급스러운 향"],
    intake: "외용 제품으로, 사용 방법은 제품 표시사항을 따름",
    certifications: ["원료별 품질 규격 관리", "피부 보습 컨셉"],
    detail:
      "비너스 이너 퍼퓸은 청결감, 보습, 피부 컨디션을 함께 고려한 이너 뷰티 제품입니다."
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

