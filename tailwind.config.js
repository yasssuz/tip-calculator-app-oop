module.exports = {
  purge: ["./src/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(172, 67%, 45%)",
        veryDarkCyan: "hsl(183, 100%, 15%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        veryLightGrayishCyan: "hsl(203, 50%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
