import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      animation: {
        slider: 'slide 20s linear infinite',
      },
      keyframes: {
        slide: {
         '0%': {  transform: "translateX(100%)" }, 
          '100%': { transform: "translateX(-100%)" }, 
        },
      },
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
