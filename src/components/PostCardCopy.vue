<template>
  <div class="container max-w-6xl px-4 mx-auto -mt-32 md:px-0">
    <div class="mx-0 sm:mx-6">
      <div class="w-full text-xl leading-normal text-gray-800 bg-gray-200 rounded-t md:text-2xl">
        <!--Lead Card-->
        <div class="flex h-full overflow-hidden bg-white rounded shadow-lg">
          <RouterLink
            :to="{ name: 'post.show', params: { slug: post.slug, title: post.title } }"
            class="flex flex-wrap no-underline hover:no-underline"
          >
            <div class="w-full rounded-t md:w-2/3">
              <img
                :data-src="post.photo.thumbnail_path"
                :alt="post.title"
                async="decoding"
                class="w-full h-full shadow"
              />
            </div>
          </RouterLink>

          <div class="flex flex-col flex-grow flex-shrink w-full md:w-1/3">
            <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
              <p class="w-full px-6 pt-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
              <div class="w-full px-6 text-xl font-bold text-gray-900">
                👋 Welcome fellow Tailwind CSS and Ghost fan
              </div>
              <p class="px-6 mb-5 font-serif text-base text-gray-800">
                This starter template is an attempt to replicate the default Ghost theme "Casper"
                using Tailwind CSS and vanilla Javascript.
              </p>
            </div>

            <div
              class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
            >
              <div class="flex items-center justify-between">
                <img
                  class="w-8 h-8 mr-4 rounded-full avatar"
                  data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>
        </div>
        <!--/Lead Card-->

        <!--Posts Container-->
        <div class="flex flex-wrap justify-between pt-12 -mx-6">
          <!--1/3 col -->
          <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
              <a
                href="#"
                class="flex flex-wrap no-underline transition duration-300 delay-150 hover:no-underline hover:delay-300"
              >
                <img
                  src="https://source.unsplash.com/collection/225/800x600"
                  class="w-full h-64 pb-6 rounded-t"
                />
                <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                <div class="w-full px-6 text-xl font-bold text-gray-900">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="px-6 mb-5 font-serif text-base text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                  commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div
              class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
            >
              <div class="flex items-center justify-between">
                <img
                  class="w-8 h-8 mr-4 rounded-full avatar"
                  data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>

          <!--1/3 col -->
          <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img
                  src="https://source.unsplash.com/collection/3106804/800x600"
                  class="w-full h-64 pb-6 rounded-t"
                />
                <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                <div class="w-full px-6 text-xl font-bold text-gray-900">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="px-6 mb-5 font-serif text-base text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet,
                  consectetur adipiscing elit. Aliquam at ip Aliquam at ipsum eu nunc commodo
                  posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div
              class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
            >
              <div class="flex items-center justify-between">
                <img
                  class="w-8 h-8 mr-4 rounded-full avatar"
                  data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>

          <!--1/3 col -->
          <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img
                  src="https://source.unsplash.com/collection/539527/800x600"
                  class="w-full h-64 pb-6 rounded-t"
                />
                <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                <div class="w-full px-6 text-xl font-bold text-gray-900">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="px-6 mb-5 font-serif text-base text-gray-800">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div
              class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
            >
              <div class="flex items-center justify-between">
                <img
                  class="w-8 h-8 mr-4 rounded-full avatar"
                  data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>

          <!--1/2 col -->
          <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/2">
            <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img
                  src="https://source.unsplash.com/collection/3657445/800x600"
                  class="w-full h-full pb-6 rounded-t"
                />
                <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                <div class="w-full px-6 text-xl font-bold text-gray-900">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="px-6 mb-5 font-serif text-base text-gray-800">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div
              class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
            >
              <div class="flex items-center justify-between">
                <img
                  class="w-8 h-8 mr-4 rounded-full avatar"
                  data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>

          <!--1/2 col -->
          <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/2">
            <div
              class="flex-row flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg"
            >
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img
                  src="https://source.unsplash.com/collection/764827/800x600"
                  class="w-full h-full pb-6 rounded-t"
                />
                <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                <div class="w-full px-6 text-xl font-bold text-gray-900">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="px-6 mb-5 font-serif text-base text-gray-800">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div
              class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
            >
              <div class="flex items-center justify-between">
                <img
                  class="w-8 h-8 mr-4 rounded-full avatar"
                  data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>

          <!--2/3 col -->
          <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-2/3">
            <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img
                  src="https://source.unsplash.com/collection/325867/800x600"
                  class="w-full h-full pb-6 rounded-t"
                />
                <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                <div class="w-full px-6 text-xl font-bold text-gray-900">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="px-6 mb-5 font-serif text-base text-gray-800">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div
              class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
            >
              <div class="flex items-center justify-between">
                <img
                  class="w-8 h-8 mr-4 rounded-full avatar"
                  data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>

          <!--1/3 col -->
          <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img
                  src="https://source.unsplash.com/collection/1118905/800x600"
                  class="w-full h-full pb-6 rounded-t"
                />
                <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                <div class="w-full px-6 text-xl font-bold text-gray-900">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="px-6 mb-5 font-serif text-base text-gray-800">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div
              class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
            >
              <div class="flex items-center justify-between">
                <img
                  class="w-8 h-8 mr-4 rounded-full avatar"
                  data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>
        </div>
        <!--/ Post Content-->
      </div>

      <!--Subscribe-->
      <div class="container p-4 mt-8 font-sans text-center bg-green-100 rounded md:p-24">
        <h2 class="text-2xl font-bold break-normal md:text-4xl">Subscribe to Ghostwind CSS</h2>
        <h3 class="text-base font-normal font-bold text-gray-600 break-normal md:text-xl">
          Get the latest posts delivered right to your inbox
        </h3>
        <div class="w-full pt-4 text-center">
          <form action="#">
            <div class="flex flex-wrap items-center max-w-xl p-1 pr-0 mx-auto">
              <input
                type="email"
                placeholder="youremail@example.com"
                class="flex-1 p-3 mr-2 text-gray-600 rounded shadow appearance-none focus:outline-none"
              />
              <button
                type="submit"
                class="flex-1 block py-4 mt-4 text-base font-semibold tracking-wider text-white uppercase bg-green-500 rounded shadow appearance-none md:mt-0 md:inline-block hover:bg-green-400"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- /Subscribe-->

      <!--Author-->
      <div class="flex items-center w-full p-8 font-sans md:p-24">
        <img
          class="w-10 h-10 mr-4 rounded-full"
          src="http://i.pravatar.cc/300"
          alt="Avatar of Author"
        />
        <div class="flex-1">
          <p class="text-base font-bold leading-none md:text-xl">Ghostwind CSS</p>
          <p class="text-xs text-gray-600 md:text-base">
            Tailwind CSS version of Ghost's Casper theme by
            <a
              class="text-gray-800 no-underline border-b-2 border-green-500 hover:text-green-500"
              href="https://www.tailwindtoolbox.com"
              >TailwindToolbox.com</a
            >
          </p>
        </div>
        <div class="justify-end">
          <a
            href="post.html"
            class="px-4 py-2 text-xs font-bold text-gray-500 bg-transparent border border-gray-500 rounded-full hover:border-green-500 hover:text-green-500"
            >Read More</a
          >
        </div>
      </div>
      <!--/Author-->
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
import axios from 'axios'
import ErrorMessages from './ErrorMessages.vue'
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
  user_id: user.getUser?.id,
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

const errors = reactive({
  errors: []
})

const onSubmit = async () => {
  errors.errors = []
  await axios.get('/sanctum/csrf-cookie')
  let formData = new FormData()
  formData.append('file', fileToSend.value ?? null)
  formData.append('title', form.title)
  formData.append('content', form.content)
  formData.append('category_id', form.category_id)
  formData.append('user_id', form.user_id)
  formData.append('post_id', form.post_id)

  await axios
    .post('/post/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data; charset=utf-8;'
      },
      onUploadProgress: (e) => {
        if (fileToSend.value && form.title && form.content && form.category_id) {
          showProgression.value = true
          let percentCompleted = Math.round((e.loaded * 100) / e.total)
          console.log(percentCompleted)
          progression.value = percentCompleted
          if (percentCompleted === 100) {
            setTimeout(() => {
              progression.value = 0
              showProgression.value = false
              router.push({ name: 'home' })
            }, 2000)
          }
        }
      }
    })
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: response.data.message,
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 2000
        }).then((result) => {
          toggleModal()
        })

        window.location.reload()
      }
    })
    .catch((error) => {
      console.log(error)
      if (error.response.status === 422) {
        for (const key in error.response.data.errors) {
          errors.errors.push(error.response.data.errors[key][0] + ' ')
        }
        console.log(errors.errors)
      }
    })
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
