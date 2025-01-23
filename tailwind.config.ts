import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        'screen-with-footer': 'calc(100vh - 80px);',
        'body': 'calc(100vh - (2.5rem + 80px));'
      }
    },
  },
  plugins: [],
} satisfies Config;
