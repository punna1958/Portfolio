import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        royal: {
          50: "var(--royal-blue-50)",
          100: "var(--royal-blue-100)",
          200: "var(--royal-blue-200)",
          300: "var(--royal-blue-300)",
          400: "var(--royal-blue-400)",
          500: "var(--royal-blue-500)",
          600: "var(--royal-blue-600)",
          700: "var(--royal-blue-700)",
          800: "var(--royal-blue-800)",
          900: "var(--royal-blue-900)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;