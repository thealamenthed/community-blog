<template>
  <div class="mx-auto mb-10 max-w-[370px]">
    <RouterLink :to="{ name: 'post.show', params: { slug: post.slug, title: post.title } }">
      <div class="mb-8 overflow-hidden rounded">
        <img
          :data-src="post.photo.thumbnail_path"
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
        <RouterLink
          :to="{ name: 'post.show', params: { slug: post.slug, title: post.title } }"
          class="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
        >
          {{ post.title }}
        </RouterLink>
      </h3>

      <p>
        <RouterLink
          :to="{ name: 'post.show', params: { slug: post.slug, title: post.title } }"
          class="text-base text-body-color"
        >
          {{ post.content }}
        </RouterLink>
      </p>

      <p class="text-sm text-gray-500">
        Catégorie :
        <RouterLink
          @click="getCategory(post.category.slug)"
          :to="{
            name: 'category.show',
            params: { slug: post.category.slug, title: post.category.name }
          }"
        >
          {{ post.category.name }}
        </RouterLink>
      </p>
      <p class="text-sm text-gray-500">
        {{ post.user.name }}
      </p>

      <div class="flex justify-end">
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
          <div class="pl-1">
            {{ post.visits_count }}
          </div>
        </a>
        <form @submit.prevent="emitLike" class="flex items-center mr-3">
          <button
            v-if="user.loggedIn"
            :style="styleObject"
            type="submit"
            @click="like, toogleHeart()"
            class="flex"
          >
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
            <div class="pl-1">
              {{ count_likes }}
            </div>
          </button>
          <button v-else @click="redirectToLogin()" class="flex">
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
            <div class="pl-1">
              {{ count_likes }}
            </div>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'
import 'lazysizes'

const props = defineProps(['post', 'id', 'likes_count'])
const urlApi = 'https://simpledev.one/'

const user = useUserStore()
const store = usePostStore()
const { getCategory } = store

const router = useRouter()

const form = reactive({
  post_id: props.id,
  user_id: user.getUser?.id
})

const emit = defineEmits({
  like: ({ user_id }) => {
    if (user_id) return true
    return false
  }
})

const emitLike = () => {
  emit('like', { post_id: form.post_id, user_id: form.user_id })
}

const likedByUser = props.post.likes.some((like) => like.user_id === user.getUser?.id)

const styleObject = reactive({
  color: likedByUser ? 'red' : '',
  count_likes: props.likes_count
})

const count_likes = ref(props.likes_count)

const toogleHeart = () => {
  styleObject.color = styleObject.color == 'red' ? '' : 'red'
  count_likes.value = styleObject.color == 'red' ? count_likes.value + 1 : count_likes.value - 1
}

const redirectToLogin = () => {
  if (user.userLoggedIn === undefined) {
    router.push({ name: 'login' })
  }
}
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
