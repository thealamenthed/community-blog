<template>
  <div class="mx-auto mb-10 max-w-[370px]">
    <div class="mb-8 overflow-hidden rounded">
      <img :src="post.photo.thumbnail_url" :alt="post.title" class="w-full" />
    </div>
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
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import { ref, reactive } from 'vue'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'

const props = defineProps(['post', 'id', 'likes_count'])

const user = usePostStore()
const store = storeToRefs()
</script>
