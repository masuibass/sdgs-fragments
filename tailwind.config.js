module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        expose: "expose 1.5s ease",
        spawn: "spawn 1s ease-in",
      },
      keyframes: {
        expose: {
          "0%": {
            transform: "scale(2)",
          },
          "75%, 100%": {
            transform: "scale(1)",
          },
        },
        spawn: {
          "0%": {
            opacity: 0,
            filter: "blur(10px)",
          },
          "100%": {
            opacity: 1,
            filter: "blur(0px)",
          },
        },
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
