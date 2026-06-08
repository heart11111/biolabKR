import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "astro.config.mjs",
  "tailwind.config.mjs",
  "src/layouts/BaseLayout.astro",
  "src/components/Header.astro",
  "src/components/Footer.astro",
  "src/components/Hero.astro",
  "src/components/Icon.astro",
  "src/components/SubpageGrid.astro",
  "src/components/ProductCard.astro",
  "src/components/NewsCard.astro",
  "src/components/NewsBoard.astro",
  "src/components/SectionTitle.astro",
  "src/pages/index.astro",
  "src/pages/company/index.astro",
  "src/pages/company/greeting.astro",
  "src/pages/company/overview.astro",
  "src/pages/company/history.astro",
  "src/pages/company/partners.astro",
  "src/pages/company/location.astro",
  "src/pages/technology/index.astro",
  "src/pages/technology/ingredients.astro",
  "src/pages/technology/research.astro",
  "src/pages/technology/quality.astro",
  "src/pages/products/index.astro",
  "src/pages/products/women.astro",
  "src/pages/products/kids.astro",
  "src/pages/products/inner-care.astro",
  "src/pages/products/diet.astro",
  "src/pages/products/[slug].astro",
  "src/pages/products/guide/index.astro",
  "src/pages/products/guide/[slug].astro",
  "src/pages/support/index.astro",
  "src/pages/support/news.astro",
  "src/pages/support/news/[slug].astro",
  "src/pages/support/faq.astro",
  "src/pages/support/contact.astro",
  "src/data/site.ts",
  "src/data/subpages.ts",
  "src/data/products.ts",
  "src/data/ingredients.ts",
  "src/data/news.ts",
  "src/data/articles.ts",
  "src/data/faqs.ts",
  "public/robots.txt",
  "public/images/competence-research.jpg",
  "public/images/competence-global.jpg",
  "public/images/competence-quality.jpg",
  "public/images/competence-family.jpg",
  "public/images/ingredients/ingredient-research-lab.jpg",
  "public/images/ingredients/ingredient-strain-culture.jpg",
  "public/images/science/petri-pipette-lab.jpg",
  "public/images/science/capsules-tablets-clinical.jpg",
  "public/images/science/pharma-blister-packs.jpg",
  "public/images/science/clinical-capsules-doctor.jpg",
  "public/images/product-venus-probiotics-actual.jpg",
  "public/images/product-venus-stick-actual.jpg",
  "public/images/product-kids-lac-actual.jpg",
  "public/images/product-line-n-actual.jpg",
  "public/images/product-inner-clean-v-actual.jpg",
  "public/images/product-venus-inner-perfume-actual.jpg",
  "public/images/studio/studio-iheal-lineup-hero.jpg",
  "public/images/studio/studio-venus-probiotics.jpg",
  "public/images/studio/studio-venus-stick.jpg",
  "public/images/studio/studio-kids-lac.jpg",
  "public/images/studio/studio-line-n.jpg",
  "public/images/brand/biolab-logo.png",
  "public/images/partners/all-grace-duty-free.svg",
  "public/images/partners/onnuri-pharmacy.svg",
  "public/images/partners/don-quijote.svg",
  ".github/workflows/deploy.yml"
];

const missing = requiredFiles.filter((file) => !existsSync(join(process.cwd(), file)));
const removedFiles = [
  "src/components/PageSectionNav.astro",
  "src/components/CategoryGateway.astro",
  "src/pages/health/index.astro",
  "src/pages/health/women.astro",
  "src/pages/health/inner-care.astro",
  "src/pages/health/kids.astro",
  "src/pages/health/[slug].astro"
].filter((file) => existsSync(join(process.cwd(), file)));

if (missing.length) {
  console.error(`Missing required files:\n${missing.map((file) => `- ${file}`).join("\n")}`);
  process.exit(1);
}

if (removedFiles.length) {
  console.error(`Files should be removed:\n${removedFiles.map((file) => `- ${file}`).join("\n")}`);
  process.exit(1);
}

const siteData = readFileSync(join(process.cwd(), "src/data/site.ts"), "utf8");
const homePage = readFileSync(join(process.cwd(), "src/pages/index.astro"), "utf8");
const readme = readFileSync(join(process.cwd(), "README.md"), "utf8");
const ogImage = readFileSync(join(process.cwd(), "public/og-image.svg"), "utf8");
const sourceFiles = requiredFiles
  .filter((file) => file.startsWith("src/"))
  .map((file) => readFileSync(join(process.cwd(), file), "utf8"));
const supportNewsPage = readFileSync(join(process.cwd(), "src/pages/support/news.astro"), "utf8");
const supportNewsDetailPage = readFileSync(join(process.cwd(), "src/pages/support/news/[slug].astro"), "utf8");
const headerComponent = readFileSync(join(process.cwd(), "src/components/Header.astro"), "utf8");
const footerComponent = readFileSync(join(process.cwd(), "src/components/Footer.astro"), "utf8");
const heroComponent = readFileSync(join(process.cwd(), "src/components/Hero.astro"), "utf8");
const baseLayout = readFileSync(join(process.cwd(), "src/layouts/BaseLayout.astro"), "utf8");
const globalStyles = readFileSync(join(process.cwd(), "src/styles/global.css"), "utf8");
const newsData = readFileSync(join(process.cwd(), "src/data/news.ts"), "utf8");
const ingredientCard = readFileSync(join(process.cwd(), "src/components/IngredientCard.astro"), "utf8");
const ingredientsPage = readFileSync(join(process.cwd(), "src/pages/technology/ingredients.astro"), "utf8");
const categoryPages = [
  "src/pages/company/index.astro",
  "src/pages/technology/index.astro",
  "src/pages/products/index.astro",
  "src/pages/support/index.astro"
].map((file) => readFileSync(join(process.cwd(), file), "utf8"));
const astroConfig = readFileSync(join(process.cwd(), "astro.config.mjs"), "utf8");

const requiredContent = [
  ["company name", siteData.includes('name: "비오랩"')],
  ["company english name", siteData.includes('englishName: "BIOLAB"')],
  ["holdings label removed", [...sourceFiles, readme, ogImage].every((file) => !file.includes("비오랩 홀딩스") && !file.includes("BIOLAB HOLDINGS"))],
  ["brand content", siteData.includes("iHEAL")],
  ["new domestic and Japan offline channels", siteData.includes("올 그레이스 면세점") && siteData.includes("온누리 약국") && siteData.includes("돈키호테")],
  ["company address", siteData.includes("경기 성남시 분당구 쇳골북로 10 (궁내동) 2층")],
  ["GitHub Pages site", astroConfig.includes("https://heart11111.github.io")],
  ["GitHub Pages base", astroConfig.includes("/biolabKR")],
  ["home hero", homePage.includes("비오랩")],
  ["home opens with family vision hero", heroComponent.includes("data-vision-hero") && heroComponent.includes("/images/home-hero-family.png") && heroComponent.includes("건강기능식품과 이너케어 브랜드") && !heroComponent.includes("/images/studio/studio-iheal-lineup-hero.jpg")],
  ["home hero avoids category-style CTA", !heroComponent.includes('href={withBase("/company/")}') && !heroComponent.includes('href={withBase("/products/")}')],
  ["home site menu gateway removed", !siteData.includes("categoryGateway") && !homePage.includes("CategoryGateway") && !homePage.includes("SITE MENU") && !homePage.includes("비오랩 홀딩스 주요 정보")],
  ["subpage grid on category pages", categoryPages.every((page) => page.includes("SubpageGrid"))],
  ["health menu folded into products", !siteData.includes('label: "건강정보"') && !headerComponent.includes("healthSubpages") && !headerComponent.includes('withBase("/health/")')],
  ["product guide routes", sourceFiles.some((file) => file.includes('href={withBase("/products/guide/")}')) && sourceFiles.some((file) => file.includes("getStaticPaths") && file.includes("/products/guide/"))],
  ["desktop hover dropdown menu", headerComponent.includes("data-desktop-menu-group") && headerComponent.includes("data-desktop-dropdown") && headerComponent.includes("group-hover:visible") && headerComponent.includes("companySubpages")],
  ["mobile submenu menu", headerComponent.includes("data-mobile-submenu") && headerComponent.includes("aria-expanded") && headerComponent.includes("mobileMenuGroups")],
  ["top nav uses dropdown triggers", headerComponent.includes("data-desktop-menu-trigger") && !headerComponent.includes("{item.label} 메인")],
  ["header and footer use BIOLAB logo image", headerComponent.includes("/images/brand/biolab-logo.png") && footerComponent.includes("/images/brand/biolab-logo.png")],
  ["legacy page guide removed", sourceFiles.every((file) => !file.includes("이 페이지에서 확인할 내용") && !file.includes("PageSectionNav"))],
  ["hash shortcut links removed", sourceFiles.every((file) => !file.includes("/support/#") && !file.includes("/products/guide/#") && !file.includes("#greeting") && !file.includes("#ingredients") && !file.includes("#category") && !file.includes("#articles") && !file.includes("#news"))],
  ["RP Bio style news categories", newsData.includes("supportNewsCategories")],
  ["external press source metadata", newsData.includes("sourceUrl") && newsData.includes("article-university.qoo10.jp/entry/case_iheal_kor") && newsData.includes("dnews.co.kr") && newsData.includes("oliveyoung.co.kr")],
  ["news list links stay internal", !/href:\s*"https?:\/\//.test(newsData) && newsData.includes('/support/news/qoo10-iheal-case/')],
  ["news detail static route", supportNewsDetailPage.includes("getStaticPaths") && supportNewsDetailPage.includes("sourceUrl") && supportNewsDetailPage.includes('withBase("/support/news/")')],
  ["news detail image metadata", newsData.includes("image:") && newsData.includes("imageCredit") && newsData.includes("imageSourceUrl")],
  ["news detail renders image and source", supportNewsDetailPage.includes("<figure") && supportNewsDetailPage.includes("imageCredit") && supportNewsDetailPage.includes("기사 출처")],
  ["support news board split page", supportNewsPage.includes("NewsBoard")],
  ["componentized product cards", homePage.includes("ProductCard")],
  ["home stats countup animation", homePage.includes("data-animated-stats") && homePage.includes("data-countup") && homePage.includes("IntersectionObserver") && homePage.includes("requestAnimationFrame") && homePage.includes("prefers-reduced-motion")],
  ["scroll reveal animation", baseLayout.includes("[data-reveal]") && baseLayout.includes("IntersectionObserver") && baseLayout.includes("is-visible") && globalStyles.includes("[data-reveal]") && globalStyles.includes("prefers-reduced-motion")],
  ["subpage cards use icons", sourceFiles.some((file) => file.includes("data-subpage-grid") && file.includes("<Icon"))],
  ["home uses reference-style alternating visuals", homePage.includes("원료를 고르는 기준부터") && homePage.includes("국내외 채널에서 신뢰받는") && homePage.includes("science/petri-pipette-lab.jpg") && homePage.includes("science/clinical-capsules-doctor.jpg")],
  ["home uses business field visual blocks", homePage.includes("BUSINESS FIELD") && homePage.includes("건강기능식품") && homePage.includes("이너케어") && homePage.includes("science/capsules-tablets-clinical.jpg")],
  ["science imagery added", siteData.includes("science/petri-pipette-lab.jpg") && siteData.includes("science/pharma-blister-packs.jpg") && sourceFiles.some((file) => file.includes("science/clinical-capsules-doctor.jpg"))],
  ["products use actual product photos", sourceFiles.some((file) => file.includes("product-venus-probiotics-actual.jpg")) && sourceFiles.some((file) => file.includes("product-venus-stick-actual.jpg")) && sourceFiles.some((file) => file.includes("product-kids-lac-actual.jpg")) && sourceFiles.some((file) => file.includes("product-line-n-actual.jpg")) && sourceFiles.some((file) => file.includes("product-inner-clean-v-actual.jpg")) && sourceFiles.some((file) => file.includes("product-venus-inner-perfume-actual.jpg"))],
  ["product cards normalize image frames", sourceFiles.some((file) => file.includes('aspect-[4/3]') && file.includes("blur-md") && file.includes("object-contain p-5"))],
  ["ingredient cards use icons", ingredientCard.includes("<Icon")],
  ["ingredient page uses compact hero", ingredientsPage.includes("compact") && !ingredientsPage.includes("유산균 캡슐과 원료 연구 실험실 이미지")],
  ["ingredient detail cards avoid repeated image", ingredientsPage.includes("INGREDIENT FOCUS") && ingredientsPage.includes("science/petri-pipette-lab.jpg") && !ingredientsPage.includes("여성 특허 균주 배양 이미지") && !ingredientsPage.includes("키즈 특허 균주 배양 이미지")]
];

const visitorCopyForbiddenPhrases = [
  "페이지별로 확인하세요",
  "독립 페이지",
  "별도 페이지로 확인하세요",
  "더 깊게 확인하세요",
  "제품소개에서 자세히 확인하세요",
  "필요한 정보를 카테고리별로 확인하세요",
  "페이지 보기",
  "제품군별 페이지",
  "분리했습니다",
  "정적 데이터",
  "정적 게시글",
  "별도 페이지",
  "주제별 페이지",
  "src/data",
  "더미값",
  "지도 영역",
  "교체할 수 있습니다",
  "정적 사이트",
  "문의 기능 준비중",
  "교체 가능한",
  "추후 교체",
  "비오랩는",
  "비오랩와",
  "biolab-holdings"
];
const visitorCopyFailures = visitorCopyForbiddenPhrases.filter((phrase) =>
  sourceFiles.some((file) => file.includes(phrase))
);

const failed = requiredContent.filter(([, ok]) => !ok).map(([label]) => label);

if (visitorCopyFailures.length) {
  failed.push(
    ...visitorCopyFailures.map((phrase) => `visitor-facing copy should not say "${phrase}"`)
  );
}

if (failed.length) {
  console.error(`Required content checks failed:\n${failed.map((label) => `- ${label}`).join("\n")}`);
  process.exit(1);
}

console.log("Site structure checks passed.");
