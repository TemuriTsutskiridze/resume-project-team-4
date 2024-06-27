/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        home_black: "#1A1A1A",
        button_blue: "#0E80BF",
        button_purple: "#6B40E3",
      },
      backgroundImage: {
        background: "url('/images/background.png')",
        "gradient-overlay":
          "linear-gradient(rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0.52))",
      },
    },
  },
  plugins: [],
};
