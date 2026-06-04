export type Ingredient = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  icon: string;
};

export const ingredients: Ingredient[] = [
  {
    title: "특허 유산균 3종",
    subtitle: "MG242, MG901, MG989",
    body:
      "건강한 한국 여성의 질에서 유래한 특허 유산균을 중심으로 여성 맞춤형 포뮬러를 설계합니다.",
    tags: ["여성 건강", "특허 균주", "프로바이오틱스"],
    icon: "dna"
  },
  {
    title: "키즈 유산균 코팅 기술",
    subtitle: "호박 동결건조 특허 코팅",
    body:
      "열과 위산, 담즙에 약한 유산균 특성을 고려해 장까지 안정적으로 전달되는 컨셉을 구현합니다.",
    tags: ["키즈", "코팅 기술", "성장기"],
    icon: "shield"
  },
  {
    title: "5중 히알루론산",
    subtitle: "다중 분자량 보습 설계",
    body:
      "분자 크기가 다른 히알루론산을 배합해 표면 보습과 속보습 컨셉을 함께 제안합니다.",
    tags: ["보습", "이너 뷰티", "스킨케어"],
    icon: "droplet"
  },
  {
    title: "식물 유래 진정 성분",
    subtitle: "알란토인, 식물 추출물, 판테놀",
    body:
      "민감한 피부 컨디션을 고려한 원료를 조합해 순하고 안정적인 사용감을 목표로 합니다.",
    tags: ["저자극", "진정", "pH 밸런스"],
    icon: "leaf"
  }
];
