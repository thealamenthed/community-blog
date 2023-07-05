<template>
  <TheNavBarBis />

  <RouterView> </RouterView>

  <TheFooter />

  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>


  <RouterView /> -->
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import TheNavBarBis from './components/TheNavBarBis.vue'
import TheFooter from './components/TheFooter.vue'
</script>
