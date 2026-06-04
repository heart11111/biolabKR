import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://heart11111.github.io",
  base: "/biolabKR",
  trailingSlash: "always",
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});

