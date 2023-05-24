<template>
  <div
    class="overflow-hidden antialiased bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 -ms-overflow-style: none"
  >
    <div class="px-4">
      <div
        class="flex items-center justify-center max-w-2xl p-16 mx-auto my-16 bg-white rounded-lg"
      >
        <h1 class="text-2xl font-medium">Project</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'

const store = usePostStore()

const { posts, loading, error, posts_count } = storeToRefs()

const { getPosts } = store
getPosts()

</script>
