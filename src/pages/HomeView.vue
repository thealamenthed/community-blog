<template>
  <div
    class="overflow-hidden antialiased bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 -ms-overflow-style: none"
  >
    <div class="px-4">
      <div
        class="flex items-center justify-center max-w-2xl p-16 mx-auto my-16 bg-white rounded-lg"
      >
        <h1 class="text-2xl font-medium">Our Blogs</h1>
      </div>
    </div>
  </div>

  <!-- ====== Blog Section Start -->
  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center -mx-4">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span class="block mb-2 text-lg font-semibold text-primary"> Our Blogs </span>
            <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              Our Recent News
            </h2>
            <p class="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but the majority have
              suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <!-- ====== Skeleton Section Start -->
      <div v-if="loading" class="flex flex-wrap justify-center mx-4">
        <div v-for="index in 3" :key="index" class="w-full px-8 md:w-1/2 lg:w-1/3">
          <div class="mx-auto mb-10 max-w-[370px]">
            <div class="mb-8 overflow-hidden rounded">
              <div class="overflow-hidden rounded w-96 bg-slate-200 h-52 animate-pulse"></div>
              <div>
                <div class="flex-1 py-1 space-y-6 animate-pulse">
                  <div class="h-2 mt-3 mb-5 rounded w-36 bg-slate-200"></div>
                  <div class="h-2 mt-2 mb-5 rounded bg-slate-200"></div>
                  <div class="h-2 mt-2 mb-5 rounded bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="error">{{ error.message }}</div>
      <!-- ====== Skeleton Section End -->
      <div v-if="posts.length" class="flex flex-wrap -mx-4">
        <div v-for="post in posts" :key="post.id" class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mx-auto mb-10 max-w-[370px]">
            <div class="mb-8 overflow-hidden rounded">
              <img :src="post.photo.thumbnail_url" :alt="post.title" class="w-full" />
            </div>
            <div>
              <span
                class="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center rounded bg-primary"
              >
                {{ post.user.name }}
              </span>
              <h3>
                <a
                  href="#"
                  class="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  Meet AutoManage, the best AI management tools
                </a>
              </h3>
              <p class="text-base text-body-color">Cathégorie : {{ post.category.name }}</p>
              <p class="text-base text-body-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Blog Section End -->
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'

const store = usePostStore()

const { posts, loading, error, posts_count } = storeToRefs(store)

const { getPosts } = store
getPosts()
</script>
