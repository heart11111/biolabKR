/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0f2f57",
          blue: "#2567a9",
          sky: "#e8f3fb",
          green: "#1f9a7a",
          mint: "#eaf7f3",
          ink: "#172033",
          muted: "#64748b"
        }
      },
      boxShadow: {
        corporate: "0 16px 40px rgba(15, 47, 87, 0.10)"
      }
    }
  },
  plugins: []
};

