<template>
  <div
    class="overflow-hidden antialiased bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 -ms-overflow-style: none"
  >
    <div class="px-4">
      <div
        class="flex items-center justify-center max-w-2xl p-16 mx-auto my-16 bg-white rounded-lg"
      >
        <h1 class="text-2xl font-medium">{{ post.title }}</h1>
      </div>
    </div>
  </div>

  <div class="px-6 py-32 bg-white lg:px-8">
    <div class="max-w-3xl mx-auto text-base leading-7 text-gray-700">
      <p class="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        JavaScript for Beginners
      </h1>
      <p class="mt-6 text-xl leading-8">
        {{ post.content }}
      </p>
      <div class="max-w-2xl mt-10">
        <p>
          {{ post.content }}
        </p>
        <ul role="list" class="max-w-xl mt-8 space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <CheckCircleIcon class="flex-none w-5 h-5 mt-1 text-indigo-600" aria-hidden="true" />
            <span
              ><strong class="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
              iste dolor cupiditate blanditiis ratione.</span
            >
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="flex-none w-5 h-5 mt-1 text-indigo-600" aria-hidden="true" />
            <span
              ><strong class="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua
              ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span
            >
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="flex-none w-5 h-5 mt-1 text-indigo-600" aria-hidden="true" />
            <span
              ><strong class="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien
              vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span
            >
          </li>
        </ul>
        <p class="mt-8">
          {{ post.content }}
        </p>
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          From beginner to expert in 3 hours
        </h2>
        <p class="mt-6">
          {{ post.content }}
        </p>

        <p class="mt-10">
          {{ post.content }}
        </p>
      </div>
      <figure class="mt-16">
        <a :href="post.photo.url" target="_blank">
          <img
            class="object-cover aspect-video rounded-xl bg-gray-50 lazyload"
            async="decoding"
            :data-src="post.photo.url"
            :alt="post.title"
          />
        </a>
        <figcaption class="flex mt-4 text-sm leading-6 text-gray-500 gap-x-2">
          <InformationCircleIcon
            class="mt-0.5 h-5 w-5 flex-none text-gray-300"
            aria-hidden="true"
          />
          Faucibus commodo massa rhoncus, volutpat.
        </figcaption>
      </figure>
      <div class="max-w-2xl mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Everything you need to get up and running
        </h2>
        <p class="mt-6">
          Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus
          volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
          viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim.
          Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.
        </p>
        <p class="mt-8">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
          semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
          viverra tellus varius sit neque erat velit.
        </p>
      </div>
      <figure class="mt-10 pl-9">
        <figcaption class="flex mt-6 gap-x-4">
          <img
            class="flex-none w-6 h-6 rounded-full bg-gray-50"
            :style="{ backgroundImage: 'url(' + post.user.avatar.thumbnail_url + ')' }"
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div class="text-sm leading-6">
            <strong class="font-semibold text-gray-900">{{ post.user.name }}</strong> –
            {{ moment(post.created_at).fromNow() }}
          </div>
        </figcaption>
      </figure>
      <div class="flex mt-5">
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
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
        <span class="px-3"> {{ post.comments_count }} Commentaire(s) </span>
      </div>
      <!-- component -->
      <div
        v-if="post.comments && post.comments.length"
        class="flex w-screen h-screen bg-white dark:bg-gray-800"
      >
        <div
          v-for="comment in post.comments"
          :key="comment.id"
          class="flex max-w-lg p-4 antialiased text-black bg-white dark:bg-gray-800 dark:text-gray-200"
        >
          <span
            :style="{ backgroundImage: 'url(' + comment.user.avatar.thumbnail_url + ')' }"
            class="w-16 h-8 mt-1 mr-2 rounded-full"
          ></span>
          <div>
            <div class="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
              <div class="text-sm font-semibold leading-relaxed">{{ comment.user.name }}</div>
              <div class="leading-snug text-normal md:leading-normal">
                {{ comment.content }}
              </div>
            </div>
            <div class="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
              {{ moment(post.created_at).fromNow() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'

import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/20/solid'
import moment from 'moment'
import 'lazysizes'

const router = useRouter()
const route = useRoute()

const store = usePostStore()

const { post, errors } = storeToRefs(store)

const { getPost } = store
getPost(route.params.slug)
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
