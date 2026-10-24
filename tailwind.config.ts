import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gym: {
          black: "#000000",
          dark: "#09090B",
          card: "#121215",
          "card-hover": "#18181C",
          border: "#27272A",
          "border-bright": "#3F3F46",
          gold: "#F59E0B",
          "gold-hover": "#D97706",
          "gold-light": "#FCD34D",
          red: "#DC2626",
          "red-hover": "#B91C1C",
          muted: "#A1A1AA",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        urdu: ["var(--font-nastaliq)", "var(--font-arabic)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
        "dark-radial": "radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.08) 0%, transparent 70%)",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
