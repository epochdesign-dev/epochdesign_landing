// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-swiper'],
  app: {
    head: {
      title: 'Epoch Design & Development',
      meta: [
        {name: 'description', content: 'The Epoch landing page'}
      ],
    },
  },
  runtimeConfig:{
    public: {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_KEY,
    },
  },
})
