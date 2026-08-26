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
    summary: "건강한 일상을 위한 iHEAL 브랜드 제품 사업에 대한 비오랩의 메시지를 소개합니다.",
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

export const technologySubpages: SubpageItem[] = [];

export const productSubpages: SubpageItem[] = [
  {
    label: "여성 건강",
    href: "/products/women/",
    eyebrow: "WOMEN",
    summary: "아이힐 비너스 유산균과 비너스 유산균 스틱을 소개합니다.",
    icon: "heartPulse"
  },
  {
    label: "키즈 건강",
    href: "/products/kids/",
    eyebrow: "KIDS",
    summary: "아이의 성장기 건강 루틴을 위한 키즈락 유산균을 소개합니다.",
    icon: "baby"
  },
  {
    label: "다이어트",
    href: "/products/diet/",
    eyebrow: "DIET",
    summary: "아이힐 라인엔 유산균을 중심으로 한 관리 루틴 제품을 소개합니다.",
    icon: "scale"
  },
  {
    label: "이너케어",
    href: "/products/inner-care/",
    eyebrow: "INNER CARE",
    summary: "아이힐 이너클린 V3와 비너스 이너 퍼퓸을 소개합니다.",
    icon: "droplet"
  }
];

export const productMenuSubpages: SubpageItem[] = [
  ...productSubpages
];

export const supportSubpages: SubpageItem[] = [
  {
    label: "고객 문의사항",
    href: "/support/contact/",
    eyebrow: "INQUIRY",
    summary: "제품, 유통, 제조, 브랜드 협업에 대한 문의를 접수합니다.",
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
