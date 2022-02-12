module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "Helvetica", "Arial"],
      },
      colors: {
        cnn: {
          white: "#fefefe",
          gray: "#4d4d4d",
          black: "#0c0c0c",
          lightBlack: "#262626",
          red: "#cc0000",
          darkRed: "#01309c",
        },
      },
    },
  },
  plugins: [],
};
