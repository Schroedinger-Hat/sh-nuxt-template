// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt', 'nuxt-vitest', 'nuxt-svgo'],
  css: ['@unocss/reset/tailwind.css'],
  svgo: {
    defaultImport: 'component',
  },
})

