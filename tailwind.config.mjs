/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#17324d",
          blue: "#416f9c",
          sky: "#eef5f8",
          green: "#58b6a6",
          mint: "#f2faf7",
          ink: "#1c2838",
          muted: "#6b7a8c"
        }
      },
      boxShadow: {
        corporate: "0 16px 40px rgba(23, 50, 77, 0.10)"
      }
    }
  },
  plugins: []
};
