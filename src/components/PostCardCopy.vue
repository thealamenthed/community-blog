<template>
  <div>
    <RouterLink :to="{ name: 'post.show', params: { slug: post.slug, title: post.title } }">
      <div class="relative w-full mt-5">
        <img
          :src="post.photo.thumbnail_path"
          :alt="post.title"
          async="decoding"
          class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
    </RouterLink>

    <div class="max-w-xl">
      <div class="flex items-center mt-8 text-xs gap-x-4">
        <time class="text-gray-500"> {{ moment(post.created_at).fromNow() }}</time>

        <RouterLink
          @click="getCategory(post.category.slug)"
          :to="{
            name: 'category.show',
            params: { slug: post.category.slug, title: post.category.name }
          }"
          class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >{{ post.category.name }}</RouterLink
        >
      </div>

      <div class="relative group">
        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <RouterLink :to="{ name: 'post.show', params: { slug: post.slug, title: post.title } }">
            <span class="absolute inset-0" />
            {{ post.title }}
          </RouterLink>
        </h3>

        <p class="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
          <RouterLink :to="{ name: 'post.show', params: { slug: post.slug, title: post.title } }">
            {{ post.content }}
          </RouterLink>
        </p>
      </div>
      <div class="relative flex items-center mt-8 gap-x-4 mb-7">
        <span
          v-if="post.user?.avatar?.thumbnail_url"
          :style="{ backgroundImage: 'url(' + post.user.avatar.thumbnail_url + ')' }"
          class="w-10 h-10 bg-gray-100 rounded-full"
        >
        </span>

        <div class="text-sm leading-6">
          <p class="font-semibold text-gray-900">
            <a :href="fff">
              <span class="absolute inset-0" />
              {{ post.user.name }}
            </a>
          </p>
        </div>
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

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
  // More posts...
]
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
