<template>


  <RouterView></RouterView>
  <TheNavBar />

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
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
</script>

 