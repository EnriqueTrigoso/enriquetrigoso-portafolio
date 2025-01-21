import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "4.375rem",
      },
      center: true,
      screens: {
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        fourty: "var(--fourty)",
        title: "var(--title)",
        paragraph: "var(--paragraph)"
      },
      fontFamily: {
        'poppins': ['var(--font-poppins)', 'Arial'],
        'instrument-serif': ['var(--font-instrument-serif)', 'Arial'],
      },
    },
  },
  plugins: [],
} satisfies Config;
