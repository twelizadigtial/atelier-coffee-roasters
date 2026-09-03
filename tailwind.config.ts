import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          mahogany: "#1F1512",
          dark: "#2A1D18",
          caramel: "#C88A58",
          gold: "#D4AF37",
          cream: "#FDFBF7",
          soft: "#FAF3EA",
          light: "#F5ECE1",
          muted: "#8C7B73",
        },
        mylk: {
          bg: "#FDFBF7",
          brown: "#1F1512",
          blue: "#C88A58",
        },
      },
      fontFamily: {
        serif: ["var(--font-arapey)", "Arapey", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "Outfit", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
