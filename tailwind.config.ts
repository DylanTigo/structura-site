import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#171717',
        green: '#414C45'
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        chakra: ["var(--font-chakra-petch)", ...fontFamily.serif],
      },
      screens: {
        xs: "380px",
      }
    },
  },
  plugins: [],
} satisfies Config;
