<script setup lang="ts">
import SHLogo from '~/assets/svg/sh-logo.svg'
import NuxtLogo from '~/assets/svg/nuxt-logo.svg'

useSeoMeta({
  title: 'SH Nuxt Template',
  description: 'Welcome to the SH Nuxt Template',
})
</script>

<template>
  <main flex="~ justify-center items-center" h-100dvh bg-black>
    <SHLogo w-17 h-17 mr-4 />
    <NuxtLogo w-20 h-20 />
  </main>
</template>
