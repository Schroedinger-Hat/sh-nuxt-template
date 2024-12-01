<script setup lang="ts">
const colorMode = useColorMode()

const icon = computed(() => colorMode.value === 'dark' ? 'sun' : 'moon')

const handleColorChange = () =>
  colorMode.preference === 'dark'
    ? colorMode.preference = 'light'
    : colorMode.preference = 'dark'
</script>

<template>
  <CtaIcon :icon="icon" @click="handleColorChange" />
</template>
