/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      padding: {
        inner: "6rem",
      },
      backgroundImage: {
        "background-home-desktop":
          "url('assets/images/home/background-home-desktop.jpg')",
        "background-destination-desktop":
          "url('assets/images/destination/background-destination-desktop.jpg')",
        "background-crew-desktop":
          "url('assets/images/crew/background-crew-desktop.jpg')",
        "background-technology-desktop":
          "url('assets/images/technology/background-technology-desktop.jpg')",
      },
      colors: {
        "space-black": "#0B0D17",
        blueish: "#D0D6F9",
      },
      fontSize: {
        h1: "150px",
        h2: "100px",
        h3: "56px",
        h4: "32px",
        h5: "28px",
        subh1: "28px",
        subh2: "14px",
        navtext: "16px",
      },
      fontFamily: {
        barlow: ["barlow"],
        bellefair: ["bellefair"],
      },
    },
  },
  plugins: [],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
