// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-swiper'],
  app: {
    head: {
      title: 'Epoch Design',
      meta: [
        {name: 'description', content: 'The Epoch Design landing page'}
      ],
    },
  },
})
