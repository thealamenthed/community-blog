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
      <div class="flex" v-if="user.loggedIn && user.getUser?.id == post.user_id">
        <button
          @click.prevent="toggleModal"
          type="button"
          className="mr-3 rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Editer
        </button>
        <button
          @click.prevent="deletePost"
          type="button"
          className=" rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Suppimer
        </button>
      </div>

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
      <div v-if="user.loggedIn && user.getUser?.id == post.user_id">
        <TransitionRoot as="template" :show="modalOpen">
          <Dialog as="div" class="relative z-10" @close="modalOpen = false">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in duration-200"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div
                class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0"
              >
                <TransitionChild
                  as="template"
                  enter="ease-out duration-300"
                  enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enter-to="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leave-from="opacity-100 translate-y-0 sm:scale-100"
                  leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel
                    class="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
                  >
                    <div>
                      <div class="text-center sm:mt-5">
                        <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900"
                          >Editer {{ post.title }}</DialogTitle
                        >
                        <form
                          @submit.prevent="onSubmit"
                          method="post"
                          class="max-w-xl mx-auto mt-16 sm:mt-20"
                        >
                          <input type="hidden" name="post_id" :value="form.post_id" />
                          <input type="hidden" name="user_id" :value="form.user_id" />

                          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div class="sm:col-span-2">
                              <label
                                for="title"
                                class="flex text-sm font-semibold leading-6 text-gray-900"
                                >Title</label
                              >
                              <div class="mt-2.5">
                                <input
                                  v-model="form.title"
                                  type="text"
                                  name="title"
                                  autocomplete="title"
                                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div class="sm:col-span-2">
                              <label
                                for="message"
                                class="flex text-sm font-semibold leading-6 text-gray-900"
                                >Content</label
                              >
                              <div class="mt-2.5">
                                <textarea
                                  v-model="form.content"
                                  name="content"
                                  rows="4"
                                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div class="sm:col-span-2">
                              <label
                                for="file"
                                class="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >Modifier l'image

                                <input
                                  type="file"
                                  @change="selectFile($event)"
                                  name="file"
                                  accept="image/jpeg, image/png"
                                  class="sr-only"
                                  ref="file"
                                />

                                <div v-if="imageUrl" class="mb-3">
                                  <img
                                    :src="imageUrl"
                                    alt="image"
                                    class=""
                                    width="150"
                                    height="150"
                                  />
                                </div>
                                <div>
                                  <div
                                    v-show="showProgression"
                                    class="mb-2 overflow-hidden bg-gray-200 rounded-full"
                                  >
                                    <div
                                      class="h-2 bg-indigo-600 rounded-full"
                                      :style="'width:' + progression + '%'"
                                    ></div>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div class="sm:col-span-2">
                              <label
                                for="category_id"
                                class="flex text-sm font-medium leading-6 text-gray-900"
                                >Category</label
                              >
                              <select
                                name="category_id"
                                class="block mt-2 w-full rounded-md border-0 py-1.5 px-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                v-model="form.category_id"
                              >
                                <option v-for="cat in categories" :value="cat.id" :key="cat">
                                  {{ cat.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="mt-10">
                            <button
                              type="submit"
                              class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Update
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
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
import Swal from 'sweetalert2'
import 'lazysizes'

import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'

const props = defineProps(['post', 'id', 'likes_count', 'category_id'])

const user = useUserStore()
const store = usePostStore()
const { categories } = storeToRefs(store)
const { getCategory, getCategories } = store

getCategories()

const router = useRouter()

const form = reactive({
  post_id: props.id,
  user_id: user.getUser?.i,
  title: props.post.title,
  content: props.post.content,
  category_id: props.post.category_id
})

const progression = ref(0)
const showProgression = ref(null)

const imageUrl = ref(props.post.photo.thumbnail_url)
const file = ref(null)
const fileToSend = ref(null)

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

const deletePost = () => {
  Swal.fire({
    icon: 'warning',
    title: 'Attention',
    text: 'Confirmez-vous la suppression de ce post ?',
    allowOutsideClick: false,
    cancelButtonText: 'Annuler',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      store.deletePost(props.post.id, props.post.user_id)
    }
  })
}

const modalOpen = ref(false)
const toggleModal = () => {
  modalOpen.value = !modalOpen.value
}

const selectFile = (event) => {
  file.value = fileToSend.value = event.target.files[0]
  console.log(file.value)
  const reader = new FileReader()
  reader.onload = (e) => {
    imageUrl.value = e.target.result
    console.log(e.target.result)
  }
  reader.readAsDataURL(event.target.files[0])
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
