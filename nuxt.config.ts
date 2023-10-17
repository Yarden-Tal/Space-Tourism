// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
