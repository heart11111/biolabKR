import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const excludedSitemapPaths = new Set([
  "/business/materials/",
  "/products/catalog/",
  "/products/microbiome-probiotics/",
  "/products/nature-ingredients/",
  "/support/catalog/",
  "/technology/",
  "/technology/ingredients/",
  "/technology/research/",
  "/technology/quality/"
]);

export default defineConfig({
  site: "https://biolabkr.com",
  trailingSlash: "always",
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({
      filter: (page) => !excludedSitemapPaths.has(new URL(page).pathname)
    })
  ]
});

