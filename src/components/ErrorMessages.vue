<template>
  <div class="mt-10 text-red-500" role="alert">
    <p v-for="error in errors" v-bind:key="error">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
defineProps(['errors'])
</script>
