export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'shadcn-nuxt',
    '@nuxt/icon',
    'nuxt-svgo',
  ],
  colorMode: {
    classSuffix: '',
  },
  svgo: {
    defaultImport: 'component',
  },
  shadcn: {
    prefix: 'SC',
    componentDir: './components/ui',
  },
  compatibilityDate: '2024-07-13',
})
