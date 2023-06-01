<template>
  <div class="mx-auto mb-10 max-w-[370px]">
    <RouterLink :to="{ name: 'post.show', params: { slug: post.slug, title: post.title } }">
      <div class="mb-8 overflow-hidden rounded">
        <img
          :data-src="post.photo.thumbnail_url"
          :alt="post.title"
          async="decoding"
          class="w-full lazyload"
        />
      </div>
    </RouterLink>
    <div>
      <span
        class="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center rounded bg-primary"
      >
        {{ moment(post.created_at).fromNow() }}
      </span>

      <h3>
        <a
          href="#"
          class="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
        >
          Meet AutoManage, the best AI management tools
        </a>
      </h3>

      <p class="text-base text-body-color">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <p class="text-sm text-gray-500">Cathégorie : {{ post.category.name }}</p>
      <p class="text-sm text-gray-500">
        {{ post.user.name }}
      </p>
      <div class="flex">
        <a href="#" class="flex items-center mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          {{ post.visits_count }}
        </a>
        <a href="#" class="flex items-center mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          {{ post.likes_count }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import { ref, reactive } from 'vue'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'
import 'lazysizes'

const props = defineProps(['post', 'id', 'likes_count'])

const user = usePostStore()
const store = storeToRefs()
</script>

<style scoped>
.lazyload,
.lazyloading {
  opacity: 0;
}

.lazyloaded {
  opacity: 1;
  transition: opacity 2000ms;
}
</style>
