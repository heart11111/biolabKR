export type SubpageItem = {
  label: string;
  href: string;
  eyebrow: string;
  summary: string;
  icon: string;
};

export const companySubpages: SubpageItem[] = [
  {
    label: "대표 인사말",
    href: "/company/greeting/",
    eyebrow: "CEO MESSAGE",
    summary: "여성과 아이의 건강을 중심에 둔 비오랩의 브랜드 철학을 소개합니다.",
    icon: "heartPulse"
  },
  {
    label: "회사 개요",
    href: "/company/overview/",
    eyebrow: "OVERVIEW",
    summary: "비오랩, iHEAL, 국내외 유통 법인과 사업 영역을 정리했습니다.",
    icon: "building"
  },
  {
    label: "연혁",
    href: "/company/history/",
    eyebrow: "HISTORY",
    summary: "2018년 창업부터 올리브영, Qoo10, 일본 오프라인 채널 진출까지의 흐름입니다.",
    icon: "chart"
  },
  {
    label: "주요 파트너",
    href: "/company/partners/",
    eyebrow: "PARTNERS",
    summary: "국내외 온라인·오프라인 유통 채널과 글로벌 확장 현황을 확인할 수 있습니다.",
    icon: "network"
  },
  {
    label: "오시는 길",
    href: "/company/location/",
    eyebrow: "LOCATION",
    summary: "비오랩의 연락처, 주소, 문의 채널을 안내합니다.",
    icon: "map"
  }
];

export const technologySubpages: SubpageItem[] = [
  {
    label: "핵심 원료",
    href: "/technology/ingredients/",
    eyebrow: "INGREDIENT",
    summary: "MG242, MG901, MG989 등 특허 유산균과 이너케어 원료를 소개합니다.",
    icon: "dna"
  },
  {
    label: "연구개발",
    href: "/technology/research/",
    eyebrow: "R&D",
    summary: "여성 건강, 키즈 건강, 이너케어 제품화 방향과 해외 채널 피드백 반영 체계를 정리했습니다.",
    icon: "microscope"
  },
  {
    label: "품질관리",
    href: "/technology/quality/",
    eyebrow: "QUALITY",
    summary: "원료 규격, 표시 문구, 제조·유통 이력 관리 기준을 안내합니다.",
    icon: "shield"
  }
];

export const productSubpages: SubpageItem[] = [
  {
    label: "여성 건강",
    href: "/products/women/",
    eyebrow: "WOMEN",
    summary: "비너스 유산균과 비너스 유산균 스틱 등 여성 맞춤형 프로바이오틱스 라인입니다.",
    icon: "heartPulse"
  },
  {
    label: "키즈 건강",
    href: "/products/kids/",
    eyebrow: "KIDS",
    summary: "키즈락 유산균 등 아이의 성장기 영양과 섭취 편의를 고려한 라인입니다.",
    icon: "baby"
  },
  {
    label: "이너케어",
    href: "/products/inner-care/",
    eyebrow: "INNER CARE",
    summary: "이너클린 V, 비너스 이너 퍼퓸 등 Y존 케어와 보습 중심 제품입니다.",
    icon: "droplet"
  },
  {
    label: "다이어트",
    href: "/products/diet/",
    eyebrow: "DIET",
    summary: "라인엔 유산균처럼 특허 균주와 체지방 관리 컨셉을 결합한 라인입니다.",
    icon: "scale"
  }
];

export const healthSubpages: SubpageItem[] = [
  {
    label: "여성 건강",
    href: "/health/women/",
    eyebrow: "WOMEN HEALTH",
    summary: "여성 유산균, 특허 균주, 데일리 섭취 루틴 관련 건강정보입니다.",
    icon: "heartPulse"
  },
  {
    label: "이너케어",
    href: "/health/inner-care/",
    eyebrow: "INNER CARE",
    summary: "pH 밸런스, 보습, 순한 세정 루틴을 중심으로 한 정보 콘텐츠입니다.",
    icon: "droplet"
  },
  {
    label: "키즈 건강",
    href: "/health/kids/",
    eyebrow: "KIDS HEALTH",
    summary: "키즈 유산균, 성장기 영양, 보호자 확인 사항을 정리했습니다.",
    icon: "baby"
  }
];

export const supportSubpages: SubpageItem[] = [
  {
    label: "공지사항 / 보도자료",
    href: "/support/news/",
    eyebrow: "NEWS",
    summary: "브랜드 소식, 입점, 수상, 보도자료를 안내합니다.",
    icon: "newspaper"
  },
  {
    label: "FAQ",
    href: "/support/faq/",
    eyebrow: "FAQ",
    summary: "제품, 입점, 제휴 문의와 관련해 자주 묻는 내용을 안내합니다.",
    icon: "faq"
  },
  {
    label: "문의하기",
    href: "/support/contact/",
    eyebrow: "CONTACT",
    summary: "제품, 원료, 유통 제휴, 해외 채널 문의를 위한 연락처입니다.",
    icon: "headset"
  }
];
