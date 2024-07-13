// https://nuxt.com/docs/api/configuration/nuxt-config
const sassAdditionalData = () => {
  let additionalData = '@use "sass:math";'
  additionalData += '@import "@/assets/styles/_utils.scss";'
  additionalData += '@import "@/assets/styles/main.scss";'
  return additionalData
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-svgo',
    'shadcn-nuxt',
    '@nuxt/icon',
  ],
  colorMode: {
    classSuffix: '',
  },
  svgo: {
    defaultImport: 'component',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'SC',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: sassAdditionalData() },
      },
    },
  },
  compatibilityDate: '2024-07-13',
})
