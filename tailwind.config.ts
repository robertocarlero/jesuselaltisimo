import { THEME_COLORS } from "./src/constants/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: THEME_COLORS,
    },
  },
  plugins: [],
};
