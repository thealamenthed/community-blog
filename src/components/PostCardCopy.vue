<template>
  <div class="container max-w-6xl px-4 mx-auto -mt-32 md:px-0">
    <div class="mx-0 sm:mx-6">
      <!--Nav-->
      <nav class="w-full mt-0">
        <div class="container flex items-center mx-auto">
          <div class="flex w-1/2 pl-4 text-sm">
            <ul class="flex items-center justify-between flex-1 list-reset md:flex-none">
              <li class="mr-2">
                <a
                  class="inline-block px-2 py-2 text-white no-underline hover:underline"
                  href="post.html"
                  >POST</a
                >
              </li>
              <li class="mr-2">
                <a
                  class="inline-block px-2 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                  href="#"
                  >LINK</a
                >
              </li>
              <li class="mr-2">
                <a
                  class="inline-block px-2 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                  href="#"
                  >LINK</a
                >
              </li>
              <li class="mr-2">
                <a
                  class="inline-block px-2 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                  href="post_vue.html"
                  >POST_VUE</a
                >
              </li>
            </ul>
          </div>

          <div class="flex content-center justify-end w-1/2">
            <a
              class="inline-block h-10 p-2 text-center text-gray-500 no-underline hover:text-white hover:text-underline md:h-auto md:p-4 avatar"
              data-tippy-content="@twitter_handle"
              href="https://twitter.com/intent/tweet?url=#"
            >
              <svg class="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                ></path>
              </svg>
            </a>
            <a
              class="inline-block h-10 p-2 text-center text-gray-500 no-underline hover:text-white hover:text-underline md:h-auto md:p-4 avatar"
              data-tippy-content="#facebook_id"
              href="https://www.facebook.com/sharer/sharer.php?u=#"
            >
              <svg class="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <div class="w-full text-xl leading-normal text-gray-800 bg-gray-200 rounded-t md:text-2xl">
        <!--Lead Card-->
        <div class="flex h-full overflow-hidden bg-white rounded shadow-lg">
          <a href="post.html" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full rounded-t md:w-2/3">
              <img
                src="https://source.unsplash.com/collection/494263/800x600"
                class="w-full h-full shadow"
              />
            </div>

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
          </a>
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
