import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "astro.config.mjs",
  "tailwind.config.mjs",
  "src/layouts/BaseLayout.astro",
  "src/components/Header.astro",
  "src/components/Footer.astro",
  "src/components/Hero.astro",
  "src/components/CategoryGateway.astro",
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
  "src/pages/health/index.astro",
  "src/pages/health/women.astro",
  "src/pages/health/inner-care.astro",
  "src/pages/health/kids.astro",
  "src/pages/health/[slug].astro",
  "src/pages/support/index.astro",
  "src/pages/support/news.astro",
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
  ".github/workflows/deploy.yml"
];

const missing = requiredFiles.filter((file) => !existsSync(join(process.cwd(), file)));
const removedFiles = ["src/components/PageSectionNav.astro"].filter((file) => existsSync(join(process.cwd(), file)));

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
const sourceFiles = requiredFiles
  .filter((file) => file.startsWith("src/"))
  .map((file) => readFileSync(join(process.cwd(), file), "utf8"));
const supportNewsPage = readFileSync(join(process.cwd(), "src/pages/support/news.astro"), "utf8");
const newsData = readFileSync(join(process.cwd(), "src/data/news.ts"), "utf8");
const ingredientCard = readFileSync(join(process.cwd(), "src/components/IngredientCard.astro"), "utf8");
const categoryPages = [
  "src/pages/company/index.astro",
  "src/pages/technology/index.astro",
  "src/pages/products/index.astro",
  "src/pages/health/index.astro",
  "src/pages/support/index.astro"
].map((file) => readFileSync(join(process.cwd(), file), "utf8"));
const astroConfig = readFileSync(join(process.cwd(), "astro.config.mjs"), "utf8");

const requiredContent = [
  ["company name", siteData.includes("비오랩 홀딩스")],
  ["brand content", siteData.includes("iHEAL")],
  ["GitHub Pages site", astroConfig.includes("https://heart11111.github.io")],
  ["GitHub Pages base", astroConfig.includes("/biolabKR")],
  ["home hero", homePage.includes("비오랩 홀딩스")],
  ["category gateway data", siteData.includes("categoryGateway")],
  ["home category gateway", homePage.includes("CategoryGateway")],
  ["subpage grid on category pages", categoryPages.every((page) => page.includes("SubpageGrid"))],
  ["legacy page guide removed", sourceFiles.every((file) => !file.includes("이 페이지에서 확인할 내용") && !file.includes("PageSectionNav"))],
  ["hash shortcut links removed", sourceFiles.every((file) => !file.includes("/support/#") && !file.includes("#greeting") && !file.includes("#ingredients") && !file.includes("#category") && !file.includes("#articles") && !file.includes("#news"))],
  ["RP Bio style news categories", newsData.includes("supportNewsCategories")],
  ["external press links", newsData.includes("article-university.qoo10.jp/entry/case_iheal_kor") && newsData.includes("qoo10.jp/gmkt.inc/Special/Special.aspx?sid=209752") && newsData.includes("oliveyoung.co.kr")],
  ["support news board split page", supportNewsPage.includes("NewsBoard")],
  ["componentized product cards", homePage.includes("ProductCard")],
  ["category cards use icons", sourceFiles.some((file) => file.includes("categoryGateway") && file.includes("<Icon"))],
  ["subpage cards use icons", sourceFiles.some((file) => file.includes("data-subpage-grid") && file.includes("<Icon"))],
  ["strength cards use icons", homePage.includes("strengthIcons") && homePage.includes("<Icon")],
  ["ingredient cards use icons", ingredientCard.includes("<Icon")]
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
  "추후 교체"
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
