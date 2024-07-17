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
        'people': "url('/src/app/public/image/People.png')",
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
      keyframes: {
        slide: {
         '0%': { transform: 'translateX(100%)' }, 
          '100%': { transform: 'translateX(-100%)' }, 
        },
        reverseplay: {
          '0%': { transform: 'translateX(-100%);' }, 
           '100%': { transform: 'translateX(100%)' }, 
         },
      },
    },
  },
  plugins: [],
};
export default config;
