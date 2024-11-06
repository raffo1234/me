import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        druk: ["druk", "sans-serif"],
      },
      colors: {
        gray10: "#F7F6F8",
        gray20: "#C7C2BA",
        gray50: "#837B69",
        gray100: "#38332B",
        yellow10: "#FFD301",
        yellow100: "#ACA360" 
      },
    },
  },
  plugins: [],
};
export default config;
