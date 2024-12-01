<script setup lang="ts">
import type { ButtonVariants } from '~/components/ui/button'

const { variant = 'outline' } = defineProps<{
  asChild?: boolean
  icon: string
  isAnchor?: boolean
  to?: string
  variant?: ButtonVariants['variant']
}>()
</script>

<template>
  <SCButton size="icon" :variant="variant" class="size-8" :as-child="asChild">
    <template v-if="asChild && isAnchor">
      <NuxtLink :to="to">
        <Icon :name="`carbon:${icon}`" class="size-5" />
      </NuxtLink>
    </template>
    <template v-else>
      <Icon :name="`carbon:${icon}`" class="size-5" />
    </template>
  </SCButton>
</template>
