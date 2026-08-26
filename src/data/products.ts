export type Product = {
  slug: string;
  name: string;
  englishName: string;
  category: string;
  tagline: string;
  summary: string;
  image: string;
  cardImage?: string;
  ingredients: string[];
  features: string[];
  intake: string;
  certifications: string[];
  detailImages: string[];
};

function detailImages(slug: string, files: string[]) {
  return files.map((file) => `/images/details/${slug}/${file}`);
}

export const products: Product[] = [
  {
    slug: "venus-probiotics",
    name: "아이힐 비너스 유산균",
    englishName: "iHEAL Venus Probiotics",
    category: "여성 유산균",
    tagline: "하루, 한 캡슐에 담은 20억 보장 프로바이오틱스",
    summary:
      "건강한 한국 여성의 질에서 유래한 특허 유산균 3종 함유. 하루 1캡슐, 20억 보장.",
    image: "/images/product-venus-probiotics-actual.jpg",
    cardImage: "/images/products/card-venus-probiotics.jpg",
    ingredients: ["락토바실러스 살리바리우스 MG242", "락토바실러스 퍼멘툼 MG901", "락토바실러스 플란타룸 MG989", "철분", "크랜베리"],
    features: ["20억 보장 유산균", "특허 유산균 3종", "하루 1캡슐", "30캡슐"],
    intake: "1일 1회, 1캡슐을 물과 함께 섭취하십시오.",
    certifications: ["특허 균주 3종 적용", "건강기능식품"],
    detailImages: detailImages("venus-probiotics", ["01.jpg"])
  },
  {
    slug: "venus-stick-probiotics",
    name: "아이힐 비너스 유산균 스틱",
    englishName: "iHEAL Venus Stick Probiotics",
    category: "스틱 유산균",
    tagline: "특허받은 유산균 3종 + 피부 속부터 촘촘하게 채우는 수분",
    summary:
      "건강한 한국 여성의 질에서 유래한 특허 유산균 3종에 히알루론산, 콜라겐, 비타민E, 이노시톨을 담았습니다.",
    image: "/images/product-venus-stick-actual.jpg",
    cardImage: "/images/products/card-venus-stick-probiotics.jpg",
    ingredients: ["특허 유산균 3종", "히알루론산", "콜라겐", "비타민E", "이노시톨"],
    features: ["특허균주 MG242 · MG901 · MG989", "히알루론산", "1일 1포", "90g(3g × 30포)"],
    intake: "1일 1회, 1포를 물과 함께 섭취하십시오.",
    certifications: ["특허 균주 적용", "HACCP"],
    detailImages: detailImages("venus-stick-probiotics", ["01.jpg", "02.jpg", "03.gif", "04.jpg", "05.webp"])
  },
  {
    slug: "kids-lac-probiotics",
    name: "아이힐 키즈락 유산균",
    englishName: "iHEAL Kids Lac Probiotics",
    category: "키즈 유산균",
    tagline: "영유아 유래 특허균 3종 + 모유 유래 특허균 + 아연 + 비타민D",
    summary:
      "영유아 유래 특허균 3종과 모유 유래 특허균을 포함한 보장균수 10억의 8종 혼합 유산균입니다.",
    image: "/images/product-kids-lac-actual.jpg",
    cardImage: "/images/products/card-kids-lac-probiotics.jpg",
    ingredients: ["L. reuteri MG505", "영유아 유래 유산균 3종", "아연", "비타민D", "칼슘", "식이섬유"],
    features: ["10억 보장 유산균", "호박 분말 동결 건조 코팅", "아연 3mg + 비타민D", "밀크 맛"],
    intake: "1일 1회, 1포를 직접 섭취하거나 물과 함께 섭취하십시오. 12개월 이후부터 권장.",
    certifications: ["건강기능식품", "GMP", "심의번호 220710226"],
    detailImages: detailImages("kids-lac-probiotics", [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg",
      "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"
    ])
  },
  {
    slug: "line-n-probiotics",
    name: "아이힐 라인엔 유산균",
    englishName: "iHEAL Line N Probiotics",
    category: "다이어트 유산균",
    tagline: "20억 유산균 + 가르시니아 + 특허균주 2종",
    summary:
      "체지방 감소를 위한 가르시니아 추출물과 특허균주 2종을 담은 유산균입니다.",
    image: "/images/product-line-n-actual.jpg",
    cardImage: "/images/products/card-line-n-probiotics.jpg",
    ingredients: ["MG4231", "MG4244", "가르시니아 캄보지아 추출물", "HCA"],
    features: ["20억 보장 유산균", "가르시니아 HCA", "특허균주 MG4231 · MG4244", "1일 1포"],
    intake: "1일 1회, 1포를 직접 섭취하거나 물과 함께 섭취하십시오.",
    certifications: ["건강기능식품", "GMP", "심의번호 200910681"],
    detailImages: detailImages("line-n-probiotics", [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg",
      "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg"
    ])
  },
  {
    slug: "inner-clean-v",
    name: "아이힐 이너클린 V3",
    englishName: "iHEAL Inner Clean V3",
    category: "이너케어 클렌저",
    tagline: "Y존 밸런스를 위한 pH4.5 유산균 거품 케어",
    summary:
      "pH 4.5 약산성 여성 청결제. 특허 유산균 3종 배양액과 13종 발효약재 추출물을 담았습니다.",
    image: "/images/product-inner-clean-v-actual.jpg",
    cardImage: "/images/products/card-inner-clean-v.jpg",
    ingredients: ["알란토인", "13종 발효 약재 추출물", "락토바실러스 발효여과물", "데실글루코사이드", "시트릭애씨드"],
    features: ["pH 4.5 약산성", "특허 유산균 3종", "13종 발효약재", "거품 타입 150ml"],
    intake: "외음부에만 사용하며 질 내에 사용하지 않도록 주의하세요.",
    certifications: ["한국피부과학연구원 항균시험", "피부 저자극"],
    detailImages: detailImages("inner-clean-v", [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"
    ])
  },
  {
    slug: "venus-inner-perfume",
    name: "아이힐 비너스 이너 퍼퓸",
    englishName: "iHEAL Venus Inner Perfume",
    category: "이너 뷰티",
    tagline: "유산균과 식물유래 성분으로 순하게, 5중 히알루론산으로 촉촉하게",
    summary:
      "향기 그 이상의 가치를 담은 이너퍼퓸. 5중 히알루론산과 특허 유산균 3종 배양액을 담았습니다.",
    image: "/images/product-venus-inner-perfume-actual.jpg",
    cardImage: "/images/products/card-venus-inner-perfume.jpg",
    ingredients: ["5중 히알루론산", "특허균주 3종 배양액", "글루타치온", "판테놀", "인도멀구슬나무잎 추출물", "드럼스틱씨오일"],
    features: ["5중 히알루론산", "특허 유산균 3종 배양액", "약 11cm 휴대 사이즈", "30ml"],
    intake: "사용 전 충분히 흔든 뒤 속옷 혹은 Y존에 1-2회 분사합니다.",
    certifications: ["한국피부과학연구원 항균시험", "저자극"],
    detailImages: detailImages("venus-inner-perfume", [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"
    ])
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
