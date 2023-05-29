<template>
  <div class="flex flex-col justify-center">
    <div v-if="post.comments && post.comments.length" class="w-screen bg-white dark:bg-gray-800">
      <div
        v-for="comment in post.comments"
        :key="comment.id"
        class="max-w-lg p-4 antialiased text-black bg-white dark:bg-gray-800 dark:text-gray-200"
      >
        <span
          v-if="comment?.user?.avatar?.thumbnail_url"
          class="w-full h-8 mt-1 mr-2 rounded-full"
          :style="{ backgroundImage: 'url(' + comment.user.avatar.thumbnail_url + ')' }"
        ></span>
        <div>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
            <div class="text-sm font-semibold leading-relaxed">{{ comment.user.name }}</div>
            <div class="leading-snug text-normal md:leading-normal">
              {{ comment.content }}
            </div>
          </div>
          <div class="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
            {{ moment().startOf('hour').fromNow() }}
          </div>
        </div>
      </div>
      <!-- comment form -->
      <div v-if="user.loggedIn" class="flex max-w-lg rounded-lg shadow-lg">
        <form @submit.prevent="submitForm" class="w-full max-w-xl px-4 pt-2 bg-white rounded-lg">
          <div class="flex flex-col justify-center mb-6 -mx-3">
            <div class="p-4">
              <ErrorMessages v-if="props.errors.length" :errors="props.errors" />
            </div>
            <h2 class="px-4 pt-3 pb-2 text-lg text-gray-800">Add a new comment</h2>
            <div class="w-full px-3 mt-2 mb-2 md:w-full">
              <textarea
                v-model="form.content"
                name="content"
                class="w-full h-20 px-3 py-2 font-medium leading-normal placeholder-gray-700 bg-gray-100 border border-gray-400 rounded resize-none focus:outline-none focus:bg-white"
                placeholder="Commentaire"
              ></textarea>

              <BaseInput v-model="form.post_id" label="" type="hidden" />

              <BaseInput v-model="form.user_id" label="" type="hidden" />
            </div>
            <div class="flex items-start w-full px-3 md:w-full">
              <div class="flex items-start w-1/2 px-2 mr-auto text-gray-700">
                <svg
                  fill="none"
                  class="w-5 h-5 mr-1 text-gray-600"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="pt-px text-xs md:text-sm">Some HTML is okay.</p>
              </div>
              <div class="-mr-1">
                <input
                  @click="submit"
                  type="submit"
                  class="px-4 py-1 mr-1 font-medium tracking-wide text-gray-700 bg-white border border-gray-400 rounded-lg hover:bg-gray-100"
                  value="Post Comment"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'

import { useUserStore } from '@/stores/user'
import { reactive } from 'vue'

import BaseInput from '@/components/BaseInput.vue'
import ErrorMessages from '@/components/ErrorMessages.vue'

const props = defineProps(['comments', 'post', 'errors'])

const user = useUserStore()

const form = reactive({
  content: '',
  post_id: props.post.id,
  user_id: user.getUser?.id ?? null
})

const emit = defineEmits({
  submit: (form) => {
    return true
  }
})

const submitForm = () => {
  emit('submit', form)
  form.content = ''
}
</script>
