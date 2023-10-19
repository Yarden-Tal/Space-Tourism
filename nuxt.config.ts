// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-swiper"],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Space Travel",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "./header-star.svg",
        },
      ],
      meta: [
        {
          name: "description",
          content: "A Frontend Mentor challenge solution by Yarden Tal",
        },
        {
          name: "autor",
          content: "Yarden Tal",
        },
        {
          name: "keywords",
          content: "Nuxt, Tailwind, Frontend, developer",
        },
      ],
    },
  },
});
