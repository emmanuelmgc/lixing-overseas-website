import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#071A2F",
        ink: "#03111F",
        slateblue: "#1E344A",
        gold: "#B88A4A",
        rice: "#F7F3EA",
        mist: "#EEF2F5",
        line: "#D8DEE6"
      },
      fontFamily: {
        serif: ["Noto Serif SC", "Songti SC", "SimSun", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        dossier: "0 20px 60px rgba(3,17,31,0.14)"
      }
    }
  },
  plugins: []
};

export default config;
