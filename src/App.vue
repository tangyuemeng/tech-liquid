<template>
  <router-view></router-view>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
const { t } = useI18n()

useHead({
  title: t('meta.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.dscription'),
    },
    {
      property: 'og:title',
      content: t('meta.title'),
    },
    {
      property: 'og:description',
      content: t('meta.dscription'),
    },
    {
      property: 'og:image',
      content: 'https://techliquid.cc/assets/logo-CjkFhfed.svg',
    },
    {
      property: 'og:url',
      content: 'https://techliquid.cc',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
})
</script>