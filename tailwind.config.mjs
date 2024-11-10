import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        header: "var(--header)",
        "header-border": "var(--header-border)",
        accent: "var(--accent)",
        background: "var(--background)",
        emphasis: "var(--emphasis)",
        foreground: "var(--foreground)",
        danger: "var(--danger)",
        "danger-emphasis": "var(--danger-emphasis)",
        warning: "var(--warning)",
        "warning-emphasis": "var(--warning-emphasis)",
        success: "var(--success)",
        "success-emphasis": "var(--success-emphasis)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        "border-color": "var(--border-color)",
        "card-background": "var(--card-background)",
        "input-active": "var(--input-active)",
        "input-background": "var(--input-background)",
        "input-disabled": "var(--input-disabled)",
        "input-border": "var(--input-border)",
        "input-focus": "var(--input-focus)",
        "code-snippet-background": "var(--code-snippet-background)",
        "token-comment": "var(--token-comment)",
        "token-selector": "var(--token-selector)",
        "token-symbol": "var(--token-symbol)",
        "token-operator": "var(--token-operator)",
        "token-keyword": "var(--token-keyword)",
        "token-function": "var(--token-function)",
        "token-punctuation": "var(--token-punctuation)",
      },
      backdropBlur: {
        header: "8px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
