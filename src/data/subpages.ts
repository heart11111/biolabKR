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
    summary: "건강한 일상을 위한 기능성 소재와 제품 사업에 대한 비오랩의 메시지를 소개합니다.",
    icon: "heartPulse"
  },
  {
    label: "비전 및 목표",
    href: "/company/vision/",
    eyebrow: "VISION",
    summary: "기능성 헬스케어 사업에서 비오랩이 지향하는 방향과 성장 목표를 정리했습니다.",
    icon: "chart"
  }
];

export const businessSubpages: SubpageItem[] = [
  {
    label: "기능성 소재 공급",
    href: "/business/materials/",
    eyebrow: "INGREDIENT SUPPLY",
    summary: "마이크로바이옴 프로바이오틱스와 자연유래 기능성 소재를 제품 목적별로 제안합니다.",
    icon: "dna"
  },
  {
    label: "OEM/ODM 서비스",
    href: "/business/odm-oem/",
    eyebrow: "OEM / ODM",
    summary: "한국 제조 네트워크와 제품 기획 경험을 바탕으로 생산·공급 구조를 설계합니다.",
    icon: "flask"
  },
  {
    label: "브랜드 매니지먼트",
    href: "/business/brand-management/",
    eyebrow: "BRAND",
    summary: "iHEAL 브랜드 운영 경험을 기반으로 제품 자료, 채널, 파트너 커뮤니케이션을 관리합니다.",
    icon: "badge"
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
    label: "Microbiome Probiotics",
    href: "/products/microbiome-probiotics/",
    eyebrow: "PROBIOTICS",
    summary: "여성, 체지방, 인지, 간, 코, 스트레스, 장 건강 컨셉의 프로바이오틱스 소재를 정리했습니다.",
    icon: "dna"
  },
  {
    label: "Functional Nature's Food Ingredients",
    href: "/products/nature-ingredients/",
    eyebrow: "NATURE",
    summary: "남성 건강, 기억, 피부, 간, 면역 등 자연유래 기능성 소재 포트폴리오를 소개합니다.",
    icon: "leaf"
  }
];

export const productGuideSubpage: SubpageItem = {
  label: "E-Catalog",
  href: "/products/catalog/",
  eyebrow: "CATALOG",
  summary: "공급 가능 소재와 제품 기획 방향을 한눈에 확인할 수 있는 카탈로그형 안내입니다.",
  icon: "newspaper"
};

export const productMenuSubpages: SubpageItem[] = [
  ...productSubpages,
  productGuideSubpage
];

export const supportSubpages: SubpageItem[] = [
  {
    label: "E-Catalog",
    href: "/support/catalog/",
    eyebrow: "CATALOG",
    summary: "소재 공급, OEM/ODM, 브랜드 협업 검토를 위한 카탈로그 확인 경로입니다.",
    icon: "newspaper"
  },
  {
    label: "고객 문의사항",
    href: "/support/contact/",
    eyebrow: "INQUIRY",
    summary: "제품, 기능성 소재, 유통, 제조, 브랜드 협업에 대한 문의를 접수합니다.",
    icon: "headset"
  },
  {
    label: "소통채널",
    href: "/support/channels/",
    eyebrow: "CHANNEL",
    summary: "국내 비오랩과 BIOLAB Japan의 공식 연결 채널을 안내합니다.",
    icon: "network"
  }
];
