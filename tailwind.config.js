module.exports = {
  content: ["./src/**/*.{html, js, ts, jsx, tsx}"],
  theme: {
    fontFamily: {
      body: ["'Chakra Petch'"],
      gaming: ["Press Start 2P"],
      icons: ["Material Icons"],
    },
    extend: {
      colors: {
        primary: {
          accent: "#30ACFF",
          main: "#4448BB",
          dark: "#000A3B",
        },
        secondary: {
          accent: "#E84AE6",
          main: "#C01EE1",
          dark: "#70288F",
        },
        backColor: "#1A1B1F",
      },
    },
  },
  plugins: [],
};
