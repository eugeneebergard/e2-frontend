// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'E2 Search',
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  devtools: { enabled: true },

  css: [
    '@/assets/sass/global.sass',
    '@/assets/css/normalize.css',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/sass/_variables.sass"',
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL || 'http://localhost:3000/'
    }
  },

  typescript: {
    strict: true
  },

  pages: true,
})
