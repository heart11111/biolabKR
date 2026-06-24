import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://biolabkr.com",
  trailingSlash: "always",
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});

