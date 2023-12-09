// https://nuxt.com/docs/api/configuration/nuxt-config
const sassAdditionalData = () => {
  let additionalData = '@use "sass:math";'
  additionalData += '@import "@/assets/styles/_utils.scss";'
  additionalData += '@import "@/assets/styles/main.scss";'
  return additionalData
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt', 'nuxt-vitest', 'nuxt-svgo'],
  css: ['@unocss/reset/tailwind.css'],
  svgo: {
    defaultImport: 'component',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: sassAdditionalData() },
      },
    },
  },
})
