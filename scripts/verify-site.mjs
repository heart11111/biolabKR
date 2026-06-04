import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "astro.config.mjs",
  "tailwind.config.mjs",
  "src/layouts/BaseLayout.astro",
  "src/components/Header.astro",
  "src/components/Footer.astro",
  "src/components/Hero.astro",
  "src/components/ProductCard.astro",
  "src/components/NewsCard.astro",
  "src/components/SectionTitle.astro",
  "src/pages/index.astro",
  "src/pages/company/index.astro",
  "src/pages/technology/index.astro",
  "src/pages/products/index.astro",
  "src/pages/products/[slug].astro",
  "src/pages/health/index.astro",
  "src/pages/health/[slug].astro",
  "src/pages/support/index.astro",
  "src/data/site.ts",
  "src/data/products.ts",
  "src/data/ingredients.ts",
  "src/data/news.ts",
  "src/data/articles.ts",
  "src/data/faqs.ts",
  "public/robots.txt",
  ".github/workflows/deploy.yml"
];

const missing = requiredFiles.filter((file) => !existsSync(join(process.cwd(), file)));

if (missing.length) {
  console.error(`Missing required files:\n${missing.map((file) => `- ${file}`).join("\n")}`);
  process.exit(1);
}

const siteData = readFileSync(join(process.cwd(), "src/data/site.ts"), "utf8");
const homePage = readFileSync(join(process.cwd(), "src/pages/index.astro"), "utf8");
const astroConfig = readFileSync(join(process.cwd(), "astro.config.mjs"), "utf8");

const requiredContent = [
  ["company name", siteData.includes("비오랩 홀딩스")],
  ["brand content", siteData.includes("iHEAL")],
  ["GitHub Pages site", astroConfig.includes("https://heart11111.github.io")],
  ["GitHub Pages base", astroConfig.includes("/biolabKR")],
  ["home hero", homePage.includes("비오랩 홀딩스")],
  ["componentized product cards", homePage.includes("ProductCard")]
];

const failed = requiredContent.filter(([, ok]) => !ok).map(([label]) => label);

if (failed.length) {
  console.error(`Required content checks failed:\n${failed.map((label) => `- ${label}`).join("\n")}`);
  process.exit(1);
}

console.log("Site structure checks passed.");
