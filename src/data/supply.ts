export type SupplyItem = {
  slug: string;
  name: string;
  englishName: string;
  category: "Microbiome Probiotics" | "Functional Nature's Food Ingredients";
  area: string;
  dosage: string;
  origin: string[];
  summary: string;
  evidence: string[];
  image: string;
};

export const probioticSupplyItems: SupplyItem[] = [
  {
    slug: "med01-gino-formula",
    name: "iHEAL GINO 5 Formula - MED01",
    englishName: "Women's Microbiome Probiotics",
    category: "Microbiome Probiotics",
    area: "여성 마이크로바이옴",
    dosage: "50억 CFU/day 기준",
    origin: ["L. plantarum MG989", "L. salivarius MG242", "L. fermentum MG901", "L. paracasei MG4272", "L. rhamnosus MG4288"],
    summary: "건강한 한국 여성 유래 특허 유산균을 중심으로 여성 건강 제품 설계에 활용할 수 있는 프로바이오틱스 포뮬러입니다.",
    evidence: ["인체적용시험 자료", "SCI 논문 참조", "국내외 특허 균주"],
    image: "/images/ingredients/ingredient-patented-probiotics.png"
  },
  {
    slug: "med02-dit-formula",
    name: "iHEAL DIT 2 Formula - MED02",
    englishName: "Body Fat Probiotics",
    category: "Microbiome Probiotics",
    area: "체지방 관리",
    dosage: "50억 CFU/day 기준",
    origin: ["L. fermentum MG4231", "L. fermentum MG4244"],
    summary: "체지방 관리 컨셉의 건강기능식품 기획에 활용 가능한 특허 프로바이오틱스 복합 소재입니다.",
    evidence: ["인체적용시험 자료", "SCI 논문 참조", "특허 복합균"],
    image: "/images/science/capsules-tablets-clinical.jpg"
  },
  {
    slug: "nvp-2106",
    name: "NVP-2106",
    englishName: "Brain & Memory Probiotics",
    category: "Microbiome Probiotics",
    area: "인지·기억",
    dosage: "100억 CFU/day 기준",
    origin: ["L. mucosae NK41", "B. longum NK46"],
    summary: "인지와 기억 관련 제품 기획에 검토할 수 있는 뇌 건강 컨셉의 프로바이오틱스 복합 소재입니다.",
    evidence: ["고령자 대상 인체적용시험 자료", "SCI 논문 참조", "특허 복합균"],
    image: "/images/ingredients/ingredient-research-lab.jpg"
  },
  {
    slug: "nvp-1702",
    name: "NVP-1702",
    englishName: "Liver Probiotics",
    category: "Microbiome Probiotics",
    area: "간 건강",
    dosage: "100억 CFU/day 기준",
    origin: ["L. plantarum LC27", "B. longum LC67"],
    summary: "음주 및 생활습관 관련 간 건강 컨셉 제품에 활용할 수 있는 프로바이오틱스 복합 소재입니다.",
    evidence: ["인체적용시험 자료", "간 건강 지표 자료", "특허 복합균"],
    image: "/images/science/pharma-blister-packs.jpg"
  },
  {
    slug: "nvp-1703",
    name: "NVP-1703",
    englishName: "Nose Condition Probiotics",
    category: "Microbiome Probiotics",
    area: "코 건강",
    dosage: "100억 CFU/day 기준",
    origin: ["L. plantarum IM76", "B. longum IM55"],
    summary: "민감한 코 상태와 면역 반응 컨셉의 건강기능식품 기획에 검토할 수 있는 소재입니다.",
    evidence: ["소아·성인 대상 자료", "TNSS 지표 참조", "특허 복합균"],
    image: "/images/ingredient-hyaluronic.jpg"
  },
  {
    slug: "nvp-1704",
    name: "NVP-1704",
    englishName: "Stress & Sleep Probiotics",
    category: "Microbiome Probiotics",
    area: "스트레스·수면",
    dosage: "50억 CFU/day 기준",
    origin: ["L. reuteri NK33", "B. adolescentis NK98"],
    summary: "스트레스, 컨디션, 수면 품질 컨셉의 제품 개발에 검토할 수 있는 프로바이오틱스 복합 소재입니다.",
    evidence: ["인체적용시험 자료", "수면 품질 지표 참조", "특허 복합균"],
    image: "/images/competence-research.jpg"
  },
  {
    slug: "bifidobacterium-probiotics",
    name: "Bifidobacterium Probiotics",
    englishName: "BGN4 / BORI / AD011",
    category: "Microbiome Probiotics",
    area: "장 건강",
    dosage: "제품 목적별 설계",
    origin: ["B. bifidum BGN4", "B. longum BORI", "B. lactis AD011"],
    summary: "장 건강과 배변 활동 컨셉 제품에 활용 가능한 인체 유래 비피더스균 포트폴리오입니다.",
    evidence: ["FDA GRAS/NDI/USP 참조", "HALAL/KOSHER 참조", "논문·특허 자료"],
    image: "/images/ingredients/ingredient-strain-culture.jpg"
  }
];

export const natureSupplyItems: SupplyItem[] = [
  {
    slug: "testofen",
    name: "Testofen",
    englishName: "Fenugreek Seed Extract",
    category: "Functional Nature's Food Ingredients",
    area: "남성 건강",
    dosage: "600 mg/day 기준",
    origin: ["Trigonella foenum-graecum"],
    summary: "중장년 남성 건강 제품 기획에 활용 가능한 호로파종자추출물 소재입니다.",
    evidence: ["12주 인체적용시험 자료", "AMS 지표 참조", "개별인정형 소재 참조"],
    image: "/images/competence-family.jpg"
  },
  {
    slug: "thinkgin",
    name: "ThinkGIN",
    englishName: "Ginseng Sprout Extract",
    category: "Functional Nature's Food Ingredients",
    area: "기억·수면",
    dosage: "450 mg/day 기준",
    origin: ["Panax ginseng sprout extract powder"],
    summary: "기억력과 수면 품질 컨셉 제품 기획에 검토할 수 있는 새싹인삼추출분말입니다.",
    evidence: ["인체적용시험 자료", "진세노사이드 자료", "기억·수면 지표 참조"],
    image: "/images/ingredients/ingredient-research-lab.jpg"
  },
  {
    slug: "neulearn",
    name: "Neu learn",
    englishName: "Tremella Enzymatic Extract",
    category: "Functional Nature's Food Ingredients",
    area: "인지 기능",
    dosage: "600-1,200 mg/day 기준",
    origin: ["Tremella fuciformis enzymatic extract"],
    summary: "노화 관련 인지 기능 컨셉 제품에 활용 가능한 흰목이버섯효소분해추출물입니다.",
    evidence: ["f-MRI 자료 참조", "12주 인체적용시험 자료", "인지 지표 참조"],
    image: "/images/science/clinical-capsules-doctor.jpg"
  },
  {
    slug: "applephenon",
    name: "Applephenon",
    englishName: "Unripe Apple Extract",
    category: "Functional Nature's Food Ingredients",
    area: "체지방 관리",
    dosage: "600 mg/day 기준",
    origin: ["Unripe apple extract"],
    summary: "다이어트와 체지방 관리 제품 기획에 활용 가능한 풋사과추출물 소재입니다.",
    evidence: ["체지방 지표 자료", "폴리페놀 자료", "지속 효과 자료 참조"],
    image: "/images/competence-quality.jpg"
  },
  {
    slug: "collagen-peptide-ag",
    name: "Low-molecular Collagen Peptide AG",
    englishName: "Collagen Peptide",
    category: "Functional Nature's Food Ingredients",
    area: "피부 건강",
    dosage: "1,000 mg/day 기준",
    origin: ["Low-molecular collagen peptide", "Fish-skin gelatin hydrolysate"],
    summary: "피부 보습, 탄력, 자외선 관련 피부 건강 컨셉 제품에 검토할 수 있는 콜라겐 펩타이드 소재입니다.",
    evidence: ["피부 보습 지표", "탄력·주름 지표", "이중 기능성 소재 참조"],
    image: "/images/ingredients/ingredient-hyaluronic-molecule.png"
  },
  {
    slug: "pinitol",
    name: "Pinitol",
    englishName: "Carob Pod Extract",
    category: "Functional Nature's Food Ingredients",
    area: "간·혈당 건강",
    dosage: "간 건강 300 mg/day · 혈당 건강 1.2 g/day 기준",
    origin: ["Carob pod extract"],
    summary: "간 건강과 혈당 건강 컨셉을 함께 검토할 수 있는 캐롭 유래 기능성 소재입니다.",
    evidence: ["지방간 지표 자료", "GPx/MDA 자료", "혈당 건강 자료 참조"],
    image: "/images/science/pharma-blister-packs.jpg"
  },
  {
    slug: "immulink-mbg",
    name: "Immulink MBG",
    englishName: "Ganoderma Mycelium Extract",
    category: "Functional Nature's Food Ingredients",
    area: "면역 기능",
    dosage: "200 mg/day 기준",
    origin: ["Ganoderma lucidum mycelium extract powder"],
    summary: "선천·후천 면역 컨셉 제품에 활용 가능한 영지버섯균사체 추출분말입니다.",
    evidence: ["면역 지표 자료", "베타글루칸 자료", "초음파 추출 기술 참조"],
    image: "/images/ingredients/ingredient-botanical-soothing.png"
  }
];

export const supplyItems = [...probioticSupplyItems, ...natureSupplyItems];

export function getSupplyItem(slug: string) {
  return supplyItems.find((item) => item.slug === slug);
}

export const businessServices = [
  {
    title: "기능성 소재 공급",
    eyebrow: "INGREDIENT SUPPLY",
    body: "마이크로바이옴 프로바이오틱스와 자연유래 기능성 소재를 제품 목적과 시장 기준에 맞춰 제안합니다.",
    points: ["소재 포트폴리오 검토", "근거 자료 정리", "제품 컨셉별 원료 매칭"],
    href: "/business/materials/"
  },
  {
    title: "OEM/ODM 서비스",
    eyebrow: "OEM / ODM",
    body: "한국 제조 네트워크를 기반으로 제형, 배합, 생산, 공급 조건을 함께 설계합니다.",
    points: ["제형·섭취량 설계", "제조사 협업", "수입·통관 흐름 검토"],
    href: "/business/odm-oem/"
  },
  {
    title: "브랜드 매니지먼트",
    eyebrow: "BRAND MANAGEMENT",
    body: "iHEAL 브랜드 운영 경험을 바탕으로 유통 채널, 제품 자료, 고객 접점을 관리합니다.",
    points: ["브랜드 자료 정리", "채널별 정보 운영", "국내외 파트너 커뮤니케이션"],
    href: "/business/brand-management/"
  }
];
