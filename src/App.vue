<template>
  <TheNavBar v-if="!$route.meta.hideNavBar" />
  <RouterView> </RouterView>
  <TheFooter v-if="!$route.meta.hideFooter" />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNavBar from './components/TheNavBarCopy.vue'
import TheFooter from './components/TheFooter.vue'
</script>
