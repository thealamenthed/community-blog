<template>
  <TheNavBar />
  <RouterView> </RouterView>
  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNavBar from './components/TheNavBar.vue'
import TheFooter from './components/TheFooter.vue'
</script>
