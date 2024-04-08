import type { Config } from "tailwindcss";
import { colors } from "./color/colors";


const config: Config = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-map': "url('../public/accueil_map.png')",
        'custom-bg': "url('../public/bg.png')",
      },
      rotate: {
        '23': '23deg',
      },
      fontFamily: { 
        nexa: "var(--font-nexa)",
        nexaBold: "var(--font-nexaHeavy)" },
        colors
    },
  },
  plugins: [],
};

export default config;
