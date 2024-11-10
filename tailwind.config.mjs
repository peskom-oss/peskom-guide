/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        header: "var(--header)",
        "header-border": "var(--header-border)",
      },
      backdropBlur: {
        header: "8px",
      },
    },
  },
  plugins: [],
};
