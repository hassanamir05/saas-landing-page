/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { min: "360px", max: "639px" },
        tablet: { min: "640px", max: "1023px" },
        laptop: { min: "1024px", max: "1279px" },
        desktop: { min: "1280px", max: "1535px" },
        "wide-desktop": { min: "1536px" },
      },
      colors: {},
    },
  },
  plugins: [],
};
