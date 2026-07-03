import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "astro.config.mjs",
  "tailwind.config.mjs",
  "src/layouts/BaseLayout.astro",
  "src/components/Header.astro",
  "src/components/Footer.astro",
  "src/components/SubHero.astro",
  "src/components/SectionTabs.astro",
  "src/components/SubpageGrid.astro",
  "src/components/ProductCard.astro",
  "src/pages/index.astro",
  "src/pages/company/index.astro",
  "src/pages/company/greeting.astro",
  "src/pages/company/vision.astro",
  "src/pages/business/index.astro",
  "src/pages/business/materials.astro",
  "src/pages/business/odm-oem.astro",
  "src/pages/business/brand-management.astro",
  "src/pages/products/index.astro",
  "src/pages/products/microbiome-probiotics.astro",
  "src/pages/products/nature-ingredients.astro",
  "src/pages/products/catalog.astro",
  "src/pages/products/[slug].astro",
  "src/pages/support/index.astro",
  "src/pages/support/catalog.astro",
  "src/pages/support/contact.astro",
  "src/pages/support/channels.astro",
  "src/data/site.ts",
  "src/data/subpages.ts",
  "src/data/products.ts",
  "src/components/RedirectNotice.astro",
  "public/images/brand/biolab-logo.png",
  ".github/workflows/deploy.yml"
];

const missing = requiredFiles.filter((file) => !existsSync(join(process.cwd(), file)));

if (missing.length) {
  console.error(`Missing required files:\n${missing.map((file) => `- ${file}`).join("\n")}`);
  process.exit(1);
}

const read = (file) => readFileSync(join(process.cwd(), file), "utf8");
const siteData = read("src/data/site.ts");
const subpages = read("src/data/subpages.ts");
const header = read("src/components/Header.astro");
const footer = read("src/components/Footer.astro");
const tabs = read("src/components/SectionTabs.astro");
const productsIndex = read("src/pages/products/index.astro");
const supportIndex = read("src/pages/support/index.astro");
const materialsPage = read("src/pages/business/materials.astro");
const astroConfig = read("astro.config.mjs");

const requiredContent = [
  ["site name", siteData.includes('name: "비오랩"')],
  ["custom domain site URL", astroConfig.includes("https://biolabkr.com") && siteData.includes("https://biolabkr.com/")],
  ["main navigation", siteData.includes("사업/서비스") && siteData.includes("제품") && siteData.includes("문의사항")],
  ["BIOLAB Japan link", siteData.includes("https://biolabjp.com/") && header.includes("BIOLAB Japan") && footer.includes("BIOLAB Japan")],
  ["iHEAL Mall link", siteData.includes("https://iheal.co.kr/main/index.php") && header.includes("iHEAL Mall") && footer.includes("iHEAL Mall")],
  ["company sitemap", subpages.includes("대표 인사말") && subpages.includes("비전 및 목표")],
  ["business sitemap", subpages.includes("OEM/ODM 서비스") && subpages.includes("브랜드 매니지먼트")],
  ["product sitemap", subpages.includes("여성 건강") && subpages.includes("키즈 건강") && subpages.includes("다이어트") && subpages.includes("이너케어")],
  ["support sitemap", subpages.includes("고객 문의사항") && subpages.includes("소통채널")],
  ["clean tab component", tabs.includes("overflow-x-auto") && tabs.includes("aria-label")],
  ["legacy materials page redirects", materialsPage.includes("RedirectNotice") && astroConfig.includes("/business/materials/")],
  ["products page is iHEAL focused", productsIndex.includes("iHEAL BRAND PRODUCTS") && productsIndex.includes("PRODUCT LINEUP")],
  ["support page is communication focused", supportIndex.includes("COMMUNICATION") && supportIndex.includes("문의사항 안내")]
];

const visitorCopyForbiddenPhrases = [
  "비오랩는",
  "비오랩와",
  "더미값",
  "추후 교체",
  "교체할 수 있습니다",
  "src/data",
  "정적 사이트"
];

const sourceFiles = requiredFiles
  .filter((file) => file.startsWith("src/"))
  .map(read);
const visitorCopyFailures = visitorCopyForbiddenPhrases.filter((phrase) =>
  sourceFiles.some((file) => file.includes(phrase))
);

const failed = requiredContent.filter(([, ok]) => !ok).map(([label]) => label);
failed.push(...visitorCopyFailures.map((phrase) => `visitor-facing copy should not say "${phrase}"`));

if (failed.length) {
  console.error(`Required content checks failed:\n${failed.map((label) => `- ${label}`).join("\n")}`);
  process.exit(1);
}

console.log("Site structure checks passed.");
