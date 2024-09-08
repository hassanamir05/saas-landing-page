/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { min: "360px", max: "639px" },
        midDevice: { max: "786px" },
        tablet: { min: "800px", max: "1023px" },
        laptop: { min: "1024px", max: "1279px" },
        desktop: { min: "1280px", max: "1535px" },
        "wide-desktop": { min: "1536px" },
      },
      colors: {
        dark: "#171B1E",
        light: "#717579",
        primary: "#3984F3",
        accent: "#979797",
        bgWarning: "#FFE3E8",
        warning: "#F64343",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "serif"],
        ibm: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
