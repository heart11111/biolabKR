export type Ingredient = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  icon: string;
  image: string;
  imageAlt: string;
};

export const ingredients: Ingredient[] = [
  {
    title: "특허 유산균 3종",
    subtitle: "MG242, MG901, MG989",
    body:
      "건강한 한국 여성의 질에서 유래한 특허 유산균을 중심으로 여성 맞춤형 포뮬러를 설계합니다.",
    tags: ["여성 건강", "특허 균주", "프로바이오틱스"],
    icon: "dna",
    image: "/images/ingredients/ingredient-patented-probiotics.png",
    imageAlt: "특허 유산균 연구를 상징하는 실험실 이미지"
  },
  {
    title: "키즈 유산균 코팅 기술",
    subtitle: "호박 동결건조 특허 코팅",
    body:
      "열과 위산, 담즙에 약한 유산균 특성을 고려해 장까지 안정적으로 전달되는 컨셉을 구현합니다.",
    tags: ["키즈", "코팅 기술", "성장기"],
    icon: "shield",
    image: "/images/ingredients/ingredient-coating-technology.png",
    imageAlt: "유산균 코팅 기술을 상징하는 의학적 코팅 공정 이미지"
  },
  {
    title: "5중 히알루론산",
    subtitle: "다중 분자량 보습 설계",
    body:
      "분자 크기가 다른 히알루론산을 배합해 표면 보습과 속보습 컨셉을 함께 제안합니다.",
    tags: ["보습", "이너 뷰티", "스킨케어"],
    icon: "droplet",
    image: "/images/ingredients/ingredient-hyaluronic-molecule.png",
    imageAlt: "히알루론산 분자와 수분감을 표현한 의학 이미지"
  },
  {
    title: "식물 유래 진정 성분",
    subtitle: "알란토인, 식물 추출물, 판테놀",
    body:
      "민감한 피부 컨디션을 고려한 원료를 조합해 순하고 안정적인 사용감을 목표로 합니다.",
    tags: ["저자극", "진정", "pH 밸런스"],
    icon: "leaf",
    image: "/images/ingredients/ingredient-botanical-soothing.png",
    imageAlt: "식물 유래 진정 성분을 상징하는 보태니컬 원료 이미지"
  }
];
