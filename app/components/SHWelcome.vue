<script setup lang="ts">
import NuxtLogo from '~/assets/svg/nuxt-logo.svg'
import SHLogo from '~/assets/svg/sh-logo.svg'

useSeoMeta({
  title: 'SH Nuxt Template',
  description: 'Welcome to the SH Nuxt Template',
})
</script>

<template>
  <main class="flex justify-center items-center h-dvh bg-background">
    <SHLogo class="size-16 mr-4" />
    <NuxtLogo class="size-20" />
  </main>
</template>
