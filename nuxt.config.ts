// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-swiper', '@nuxtjs/supabase'],
  app: {
    head: {
      title: 'Epoch Design & Development',
      meta: [
        {name: 'description', content: 'The Epoch landing page'}
      ],
    },
  },
  // Documentation of using supabase in nuxt
  // Do not delete:
  // runtimeConfig:{
  //   url: process.env.SUPABASE_URL,
  //   key: process.env.SUPABASE_KEY,
  //   public: {
  //     url: process.env.SUPABASE_URL,
  //     key: process.env.SUPABASE_KEY,
  //   },
  // },
  supabase: {
    url: "https://rdlfeqgerdgwbzbofycd.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkbGZlcWdlcmRnd2J6Ym9meWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5MjYwNzIsImV4cCI6MjAwNDUwMjA3Mn0.gmiH4xpkFgKiRobo7WDjgpemOfcZfrOwTZL4HpmhGrY",
    redirect: false,
  }
})
