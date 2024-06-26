/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        home_black: "#1A1A1A",
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
